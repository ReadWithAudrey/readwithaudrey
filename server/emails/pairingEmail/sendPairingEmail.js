/* eslint-disable camelcase */
const axios = require('axios');

// Download attachments as required by SendGrid
const downloadAttachments = (pair) => {
  console.log('downloading attachments');
  const books = pair.fields.book_attachments;
  return Promise.all(books.map(({ url }) => axios(url, { responseType: 'arraybuffer' })));
};

// Change format of attachments to base64 as required by SendGrid
const formatAttachments = (booksData) => {
  console.log('formating atachments');
  return Promise.all(
    booksData.map(
      bookData => new Promise((resolve, reject) => {
        try {
          resolve(Buffer.from(bookData.data, 'binary').toString('base64'));
        } catch (e) {
          reject(e);
        }
      }),
    ),
  );
};

// Organise data from book array and downloaded attachments in to appropriate
// format for SendGrid {content: xxx, type xxx, filename: xxx}
const orgAttachments = (pair, attachArr) => new Promise((resolve, reject) => {
  try {
    console.log('organising attachments');
    const books = pair.fields.book_attachments;
    const attachments = books.map((book, i) => ({
      content: attachArr[i],
      type: book.type,
      filename: book.filename,
    }));
    resolve(attachments);
  } catch (e) {
    reject(e);
  }
});

// Builds up pairing email text to decide who is reader
const whoReads = (pair) => {
  const {
    fields: { reader, user1_name, user2_name },
  } = pair;
  let reads = user1_name;
  if (reader === 'user2') {
    reads = user2_name;
  } else if (reader === 'both') {
    return `You’ve both said you’d be happy to read and listen. Therefore we suggest ${user1_name} kicks off as the reader for your first chapter. Then perhaps you can take turns as the reader and listener alternating between chapters? If this doesn’t feel quite right, please have a chat and choose an arrangement you’re both comfortable with.`;
  }
  return `Can I suggest ${reads} kicks off as the reader for the first chapter. Perhaps you can then have a chat about the reader/listener arrangement you’re both comfortable with. You could continue in the same way, or you could take turns as the reader and listener alternating between chapters.`;
};

const sendPairingEmail = (pair, attachments, ambassadorEmail) => {
  console.log('sending pairing email');
  const { id } = pair;
  const { user1_name, user1_email, user1_bio } = pair.fields;
  const { user2_name, user2_email, user2_bio } = pair.fields;
  const { book_name, book_bio, book_author } = pair.fields;

  if (user1_email[0] === user2_email[0]) {
    return Promise.reject(new Error('user emails are the same'));
  }

  return axios('https://sendgrid.com/v3/mail/send', {
    headers: { Authorization: `Bearer ${process.env.SENDGRID_API_KEY}` },
    method: 'POST',
    data: {
      personalizations: [
        {
          to: [
            {
              email: user1_email[0],
              name: user1_name[0],
            },
            {
              email: user2_email[0],
              name: user2_name[0],
            },
          ],
          dynamic_template_data: {
            pairingId: id,
            user1: user1_name[0],
            user2: user2_name[0],
            user1_bio: user1_bio[0],
            user2_bio: user2_bio[0],
            book_name: book_name[0],
            book_bio: book_bio[0],
            book_author: book_author[0],
            who_reads: whoReads(pair),
          },
          bcc: [
            {
              email: ambassadorEmail,
              name: 'Audrey',
            },
          ],
        },
      ],
      from: {
        email: ambassadorEmail,
        name: 'Audrey',
      },
      reply_to: {
        email: ambassadorEmail,
        name: 'Audrey',
      },
      template_id: 'd-74d18868e6d84290860df912d769464d',

      attachments,
    },
  });
};

module.exports = {
  downloadAttachments,
  formatAttachments,
  orgAttachments,
  sendPairingEmail,
};

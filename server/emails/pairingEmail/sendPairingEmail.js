/* eslint-disable camelcase */
require('dotenv').config();
const axios = require('axios');

// Download attachments and store in base64 format as required by SendGrid
const downloadAttachments = (books) => {
  const bookAttachments = books.map(({ url }) => axios(url, { responseType: 'arraybuffer' })
    .then(response => Buffer.from(response.data, 'binary').toString('base64')));
  return Promise.all(bookAttachments);
};

// Organise data from book array and downloaded attachments in to appropriate
// format for SendGrid {content: xxx, type xxx, filename: xxx}
const orgAttachments = (books, attachArr) => new Promise((resolve, reject) => {
  try {
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

const sendPairingEmail = (pair) => {
  const { id } = pair;
  const { user1_name, user1_email, user1_bio } = pair.fields;
  const { user2_name, user2_email, user2_bio } = pair.fields;
  const {
    book_name, book_bio, mini_book_bio, book_attachments, book_author,
  } = pair.fields;
  // Check that we have all the data we need here

  return downloadAttachments(book_attachments)
    .then(attachData => orgAttachments(book_attachments, attachData))
    .then(attachments => axios('https://sendgrid.com/v3/mail/send', {
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
              mini_book_bio: mini_book_bio[0],
              book_author: book_author[0],
            },
          },
        ],
        template_id: 'd-74d18868e6d84290860df912d769464d',
        from: {
          email: 'readwithaudrey.data@gmail.com',
          name: 'Audrey',
        },
        attachments,
      },
    }));
};
module.exports = sendPairingEmail;

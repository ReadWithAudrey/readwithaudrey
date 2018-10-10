require('dotenv').config();
const base = require('../../dbConnection');

const getNewPairs = new Promise((resolve, reject) => {
  let allRecords = [];
  base('pairings')
    .select({
      // Selecting the first 3 records in Grid view:
      maxRecords: 3,
      filterByFormula: 'AND({confirm_pairing}, NOT({pairing_email_sent}))',
      fields: [
        'user1_name',
        'user1_email',
        'user1_bio',
        'user2_name',
        'user2_email',
        'user2_bio',
        'book_name',
        'book_author',
        'book_attachments',
        'book_bio',
        'mini_book_bio',
      ],
    })
    .eachPage(
      (records, fetchNextPage) => {
        // This function (`page`) will get called for each page of records.
        allRecords = [...allRecords, ...records];
        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
      },
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(allRecords);
        }
      },
    );
});

module.exports = getNewPairs;

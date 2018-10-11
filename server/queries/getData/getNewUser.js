require('dotenv').config();
const base = require('../../dbConnection');

const getNewUser = new Promise((resolve, reject) => {
  let allRecords = [];
  base('users')
    .select({
      // Selecting the first 3 records in Grid view:
      filterByFormula: 'NOT({welcome_email_sent})',
      fields: ['first_name', 'email'],
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

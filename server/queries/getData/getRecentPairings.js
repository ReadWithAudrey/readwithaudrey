require('dotenv').config();
const base = require('../../dbConnection');

// Returns an array of pairs. If there are no pairs returns empty array. If error returns an object (which doesn't always have a status code)
const getRecentPairings = () => {
  console.log('Querying for recent pairs');
  return new Promise((resolve, reject) => {
    let allRecords = [];
    base('pairings')
      .select({
        filterByFormula:
          'AND({user1_id}, {user2_id}, {reader}, {book_id},{confirm_pairing},NOT({feedback_email_sent}), {pairing_email_sent}, DATETIME_DIFF(NOW(), {pairing_email_sent}, "m") >= 30)',
        fields: ['user1_name', 'user1_email', 'user2_name', 'user2_email'],
      })
      .eachPage(
        (records, fetchNextPage) => {
          allRecords = [...allRecords, ...records];
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
};

module.exports = getRecentPairings;

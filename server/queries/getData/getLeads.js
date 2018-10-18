require('dotenv').config();
const base = require('../../dbConnection');

// Returns an array leads which have been in the DB for at least an hour.
// If there are no pairs returns empty array.
//  If error returns an object (which doesn't always have a status code)
const getLeads = () => {
  console.log('Querying for new leads');
  return new Promise((resolve, reject) => {
    let allRecords = [];
    base('leads')
      .select({
        filterByFormula:
        'AND((DATETIME_DIFF(NOW(), {date_of_lead}, "hours") >= 1), NOT({signup_complete}), NOT({reminder_email_sent}))',
        fields: [
          'email',
          'first_name',
          'surname',
          'date_of_lead',
        ],
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

module.exports = getLeads;

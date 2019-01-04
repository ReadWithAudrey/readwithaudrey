require('dotenv').config();
const { baseAdmin } = require('../../dbConnection');

// Returns an array of pairs. If there are no pairs returns empty array. If error returns an object (which doesn't always have a status code)
const getAmbassadors = () => new Promise((resolve, reject) => {
  let allRecords = [];
  baseAdmin('ambassadors')
    .select({
      filterByFormula: 'AND({code}, {base_id}, {audrey_email}, {approved})',
      fields: [
        'code',
        'base_id',
        'contact_first_name',
        'contact_surname',
        'contact_email',
        'organisation',
        'other_info',
        'audrey_email',
        'approved',
        'email_sent',
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

const getAmbassadorInfo = code => getAmbassadors().then((ambassadors) => {
  let baseId = null;
  let audreyEmail = null;
  ambassadors.forEach((ambassador) => {
    if (ambassador.fields.code == code) {
      baseId = ambassador.fields.base_id;
      audreyEmail = ambassador.fields.audrey_email;
    }
  });
  return { baseId, audreyEmail };
});

// getBaseId(100100).then(id => console.log(id));

module.exports = { getAmbassadorInfo, getAmbassadors };

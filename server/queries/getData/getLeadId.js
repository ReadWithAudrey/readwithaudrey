const base = require('../../dbConnection');

const getLeadId = ({ emailAddress }) => {
  console.log('getting a lead');
  return new Promise((resolve, reject) => {
    base('leads')
      .select({
        filterByFormula: `AND(email='${emailAddress}')`,
      })
      .firstPage((err, records) => {
        if (err) {
          reject(new Error('Server Error'));
        } else if (records.length) {
          resolve(records[0].id);
        } else {
          reject(new Error('Every new user should have a lead'));
        }
      });
  });
};
module.exports = { getLeadId };

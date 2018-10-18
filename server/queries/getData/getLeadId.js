const base = require('../../dbConnection');

const getLeadId = emailAddress => new Promise((resolve, reject) => {
  console.log('getting a lead');
  base('leads')
    .select({
      filterByFormula: `AND(email='${emailAddress}')`
      ,
    }).firstPage((err, records) => {
      if (err) {
        reject(new Error('Server Error'));
      } else if (records) {
        resolve(records[0].id);
      } else {
        console.log('No lead with a matching email');
        resolve();
      }
    });
});

module.exports = { getLeadId };

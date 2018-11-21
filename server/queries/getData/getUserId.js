const base = require('../../dbConnection');

const getUserId = ({ emailAddress }) => new Promise((resolve, reject) => {
  base('users')
    .select({
      filterByFormula: `AND(email='${emailAddress}')`,
    })
    .firstPage((err, records) => {
      if (err) {
        reject(new Error('Server Error'));
      } else if (records.length) {
        resolve(records[0].id);
      } else {
        reject(new Error('unknown error getting the user Id'));
      }
    });
});
module.exports = { getUserId };

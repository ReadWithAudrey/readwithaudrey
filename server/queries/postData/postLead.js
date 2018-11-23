require('dotenv').config();
const base = require('../../dbConnection');

const checkUsersTable = lead => new Promise((resolve, reject) => {
  base('users')
    .select({
      maxRecords: 1,
      filterByFormula: `AND(email='${lead.emailAddress}')`,
      view: 'Grid view',
    })
    .firstPage((err, records) => {
      if (err) {
        reject(new Error('Server Error'));
      } else if (records.length > 0) {
        console.log('email address already exists');
        resolve(false);
      } else {
        console.log('email address does not exist');
        resolve(true);
      }
    });
});

const checkLeadTable = (lead) => {
  base('leads')
    .select({
      maxRecords: 1,
      filterByFormula: `AND(email='${lead.emailAddress}')`,
      view: 'Grid view',
    })
    .firstPage((err, records) => {
      if (err) {
        console.log(err);
      }
      if (records.length > 0) {
        return false;
      }
      return true;
    });
};

const createLead = lead => new Promise((resolve, reject) => {
  base('leads').create(
    {
      first_name: lead.firstName,
      surname: lead.secondName,
      email: lead.emailAddress,
    },
    (err2, record) => {
      if (err2) {
        reject(err2);
      }
      resolve(record.getId());
    },
  );
});

module.exports = { checkUsersTable, checkLeadTable, createLead };

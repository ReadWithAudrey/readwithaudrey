require('dotenv').config();

const checkUsersTable = (base, lead) => new Promise((resolve, reject) => {
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
        resolve(false);
      } else {
        resolve(true);
      }
    });
});

const checkLeadTable = (base, lead) => new Promise((resolve, reject) => {
  base('leads')
    .select({
      maxRecords: 1,
      filterByFormula: `AND(email='${lead.emailAddress}')`,
      view: 'Grid view',
    })
    .firstPage((err, records) => {
      if (err) {
        reject(err);
      } else if (records.length === 0) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
});

const createLead = (base, lead) => new Promise((resolve, reject) => {
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

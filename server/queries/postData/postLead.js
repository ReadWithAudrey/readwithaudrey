require('dotenv').config();
const base = require('../../dbConnection');

const postLead = (lead) => {
  console.log(lead);
  base('leads')
    .select({
      filterByFormula: `AND(email='${lead.emailAddress}')`,
      view: 'Grid view',
    })
    .eachPage(
      (records) => {
        if (records.length === 0) {
          base('leads').create(
            { first_name: lead.firstName, surname: lead.secondName, email: lead.emailAddress },
            (err, record) => {
              if (err) {
                console.error(err);
                return;
              }
              console.log(record.getId());
            },
          );
        }
      },
      (err) => {
        if (err) {
          console.error(err);
        }
      },
    );
};

module.exports = { postLead };

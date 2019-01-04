const { getLeads } = require('../../queries/getData');
const { updateLeadEmailSent } = require('../../queries/postData');
const { sendLeadEmail } = require('./sendLeadEmail');
const { baseGeneral } = require('../../dbConnection');

const sendLeadEmails = (ambassadorFields) => {
  const base = baseGeneral(ambassadorFields.base_id);

  getLeads(base)
    .then((leads) => {
      if (leads.length > 0) {
        leads.forEach((lead) => {
          sendLeadEmail(lead, ambassadorFields)
            .then(() => {
              updateLeadEmailSent(base, lead.id);
            })
            .then(() => console.log('success sending the lead email and updating the status'))
            .catch(e => console.log('Error in the lead email:', e.message));
        });
      }
    })
    .catch(err => console.log(err.message));
};

module.exports = sendLeadEmails;

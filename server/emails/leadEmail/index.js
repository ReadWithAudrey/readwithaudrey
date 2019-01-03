const { getLeads } = require('../../queries/getData');
const { updateLeadEmailSent } = require('../../queries/postData');
const { sendLeadEmail } = require('./sendLeadEmail');

const sendLeadEmails = (base) => {
  getLeads(base)
    .then((leads) => {
      if (leads.length > 0) {
        leads.forEach((lead) => {
          sendLeadEmail(lead)
            .then(() => updateLeadEmailSent(base, lead.id))
            .then(res => console.log('success', res))
            .catch(err => console.log('Error in the lead email:', err));
        });
      }
    })
    .catch(console.log);
};

module.exports = sendLeadEmails;

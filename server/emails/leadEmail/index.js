const { getLeads } = require('../../queries/getData');
const { updateLeadEmailSent } = require('../../queries/postData');
const { sendLeadEmail } = require('./sendLeadEmail');

const sendLeadEmails = (base, ambassadorEmail) => {
  getLeads(base)
    .then((leads) => {
      if (leads.length > 0) {
        leads.forEach((lead) => {
          sendLeadEmail(lead, ambassadorEmail)
            .then(() => updateLeadEmailSent(base, lead.id))
            .then(res => console.log('success', res))
            .catch(e => console.log('Error in the lead email:', e));
        });
      }
    })
    .catch(console.log);
};

module.exports = sendLeadEmails;

const { getLeads } = require('../../queries/getData');
const { updateLeadEmailSent } = require('../../queries/postData');
const { sendLeadEmail } = require('./sendLeadEmail');

const sendLeadEmails = () => {
  getLeads()
    .then((leads) => {
      if (leads.length > 0) {
        leads.forEach((lead) => {
          sendLeadEmail(lead)
            .then(() => updateLeadEmailSent(lead))
            .then(res => console.log('success', res))
            .catch(e => console.log('error for an individual lead', e.message));
        });
      }
    }).catch(console.log);
};

module.exports = sendLeadEmails;

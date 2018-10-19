const { postLead } = require('./postLead');
const { postNewUser } = require('./postNewUser');
const updateLeadEmailSent = require('./updateLeadEmailSent');
const updateFeedbackEmailStatus = require('./updateFeedbackEmailStatus');
const updatePairingEmailStatus = require('./updatePairingEmailStatus');

module.exports = {
  postLead, postNewUser, updateLeadEmailSent, updateFeedbackEmailStatus, updatePairingEmailStatus,
};

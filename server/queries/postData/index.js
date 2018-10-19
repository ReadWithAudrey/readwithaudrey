const { postLead } = require('./postLead');
const postNewUser = require('./postNewUser');
const updateLeadEmailSent = require('./updateLeadEmailSent');
const updateLeadAccStatus = require('./updateLeadAccStatus');
const updateFeedbackEmailStatus = require('./updateFeedbackEmailStatus');
const updatePairingEmailStatus = require('./updatePairingEmailStatus');

module.exports = {
  postLead,
  postNewUser,
  updateLeadEmailSent,
  updateLeadAccStatus,
  updateFeedbackEmailStatus,
  updatePairingEmailStatus,
};

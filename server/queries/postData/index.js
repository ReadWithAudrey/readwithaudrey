const { postLead } = require('./postLead');
const postNewUser = require('./postNewUser');
const updateLeadEmailSent = require('./updateLeadEmailSent');
const updateLeadAccStatus = require('./updateLeadAccStatus');

module.exports = {
  postLead, postNewUser, updateLeadEmailSent, updateLeadAccStatus,
};

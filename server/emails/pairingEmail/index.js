const { getNewPairs } = require('../../queries/getData');
const { updatePairingEmailStatus } = require('../../queries/postData');
const { getUserIdsOfPair } = require('../../queries/getData/getUserIdsOfPair');
const { updateUsersPairStatus } = require('../../queries/postData');
const {
  downloadAttachments,
  formatAttachments,
  orgAttachments,
  sendPairingEmail,
} = require('./sendPairingEmail');
const { baseGeneral } = require('../../dbConnection');

const sendAllPairingEmails = (ambassadorFields) => {
  const base = baseGeneral(ambassadorFields.base_id);
  getNewPairs(base)
    .then((pairs) => {
      pairs.forEach((pair) => {
        downloadAttachments(pair)
          .then(formatAttachments)
          .then(formatedAtt => orgAttachments(pair, formatedAtt))
          .then(orgAtt => sendPairingEmail(pair, orgAtt, ambassadorFields))
          .then(() => updatePairingEmailStatus(base, pair.id))
          .then(() => getUserIdsOfPair(base, pair).then(userIds => userIds.forEach(userId => updateUsersPairStatus(base, userId))))
          .then(() => console.log('Success email sent'))
          .catch(err => console.log('A pair has raised an error', err.message));
      });
    })
    .catch(err => console.log('getting pairs has raised an error', err.message));
};

module.exports = sendAllPairingEmails;

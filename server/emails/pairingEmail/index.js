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

const sendAllPairingEmails = (base, ambassadorEmail) => {
  getNewPairs(base)
    .then((pairs) => {
      pairs.forEach((pair) => {
        downloadAttachments(pair)
          .then(formatAttachments)
          .then(formatedAtt => orgAttachments(pair, formatedAtt))
          .then(orgAtt => sendPairingEmail(pair, orgAtt, ambassadorEmail))
          .then(() => updatePairingEmailStatus(base, pair.id))
          .then(() => getUserIdsOfPair(base, pair).then(userIds => userIds.forEach(userId => updateUsersPairStatus(base, userId))))
          .then(() => console.log('Success email sent'))
          .catch(e => console.log('A pair has raised an error', e));
      });
    })
    .catch(e => console.log('getting pairs has raised an error', e));
};

module.exports = sendAllPairingEmails;

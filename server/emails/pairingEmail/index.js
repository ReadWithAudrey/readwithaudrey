const { getNewPairs } = require('../../queries/getData');
const { updatePairingEmailStatus } = require('../../queries/postData');
const { getUserIdsOfPair } = require('../../queries/getData');
const { updateUsersPairStatus } = require('../../queries/postData');
const {
  downloadAttachments,
  formatAttachments,
  orgAttachments,
  sendPairingEmail,
} = require('./sendPairingEmail');

const sendAllPairingEmails = () => {
  getNewPairs()
    .then((pairs) => {
      pairs.forEach((pair) => {
        downloadAttachments(pair)
          .then(formatAttachments)
          .then(formatedAtt => orgAttachments(pair, formatedAtt))
          .then(orgAtt => sendPairingEmail(pair, orgAtt))
          .then(() => updatePairingEmailStatus(pair))
          .then(() => getUserIdsOfPair(pair))
          .then(users => users.forEach(user => updateUsersPairStatus(user)))
          .then(() => console.log('Success email sent'))
          .catch(e => console.log('A pair has raised an error', e.message));
      });
    })
    .catch(e => console.log('getting pairs has raised an error', e.message));
};

module.exports = sendAllPairingEmails;

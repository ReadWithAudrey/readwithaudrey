const getNewPairs = require('../../queries/getData/getNewPairs');
const updateSentStatus = require('../../queries/postData/updateSentStatus');
const {
  downloadAttachments,
  formatAttachments,
  orgAttachments,
  sendPairingEmail,
} = require('./sendPairingEmail');

const sendAllPairingEmails = () => {
  getNewPairs().then((pairs) => {
    pairs.forEach((pair) => {
      downloadAttachments(pair)
        .then(formatAttachments)
        .then(formatedAtt => orgAttachments(pair, formatedAtt))
        .then(orgAtt => sendPairingEmail(pair, orgAtt))
        .then(() => updateSentStatus(pair))
        .then(() => console.log('Success email sent'))
        .catch(e => console.log('A pair has raised an error', e.message));
    });
  });
};

sendAllPairingEmails();
//
//       }).catch(e => console.log('error during pair query', e)
//     sendPairingEmail(pair)
//       .then((res) => {
//         console.log('matched a pair');
//         const { personalizations } = JSON.parse(res.config.data);
//         const { dynamic_template_data: { pairingId } } = personalizations[0];
//         return updateSentStatus(pairingId);
//       });
//   });
// };
// const pairingEmail = () => {
//   getNewPairs()
//     .then(sendAllPairingEmails).catch(err => console.log(err));
// };
//
//
// pairingEmail();

module.exports = sendAllPairingEmails;

const sendEmail = require('../sendEmail');
const getNewPairs = require('../../../queries/getData/getPairs');
const buildPairingEmail = require('./buildPairingEmail');
const updateSentStatus = require('../../../queries/postData/updateSentStatus');

let pairingId = '';
getNewPairs
  .then((pairs) => {
    pairs.forEach((pair) => {
      pairingId = pair.id;
      buildPairingEmail(pair)
        .then(email => sendEmail(email))
        .then(updateSentStatus(pairingId));
    });
  })
  .catch(err => console.log(`Error retrieving the pairs and/or sending the emails: ${err}`));

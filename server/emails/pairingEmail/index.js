const sendPairingEmail = require('./sendPairingEmail');
const getNewPairs = require('../../queries/getData/getPairs');
const updateSentStatus = require('../../queries/postData/updateSentStatus');

getNewPairs
  .then((pairs) => {
    pairs.forEach((pair) => {
      sendPairingEmail(pair)
        .then(console.log);
      // .then(updateSentStatus(pairingId));
    });
  })
  .catch(err => console.log(err));

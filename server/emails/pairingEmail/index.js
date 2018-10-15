const sendEmail = require('./sendEmail');
const getNewPairs = require('../../queries/getData/getPairs');
const updateSentStatus = require('../../queries/postData/updateSentStatus');

let pairingId = '';
getNewPairs
  .then((pairs) => {
    pairs.forEach((pair) => {
      pairingId = pair.id;
      sendEmail(pair);
      // .then(updateSentStatus(pairingId));
    });
  })
  .catch(err => console.log(err));

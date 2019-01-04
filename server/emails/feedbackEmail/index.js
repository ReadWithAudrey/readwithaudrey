const { getRecentPairings } = require('../../queries/getData');
const sendFeedbackEmail = require('./sendFeedbackEmail');
const { updateFeedbackEmailStatus } = require('../../queries/postData');
const { baseGeneral } = require('../../dbConnection');

const sendFeedbackEmails = (ambassadorFields) => {
  const base = baseGeneral(ambassadorFields.base_id);
  getRecentPairings(base)
    .then((pairs) => {
      pairs.forEach((pair) => {
        Promise.all(sendFeedbackEmail(pair, ambassadorFields))
          .then(() => updateFeedbackEmailStatus(base, pair.id))
          .then(() => console.log('feedback email sent'))
          .catch(e => console.log(e.message));
      });
    })
    .catch(console.log);
};

module.exports = sendFeedbackEmails;

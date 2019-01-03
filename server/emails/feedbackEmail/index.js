const { getRecentPairings } = require('../../queries/getData');
const sendFeedbackEmail = require('./sendFeedbackEmail');
const { updateFeedbackEmailStatus } = require('../../queries/postData');

const sendFeedbackEmails = (base, ambassadorEmail) => {
  getRecentPairings(base)
    .then((pairs) => {
      pairs.forEach((pair) => {
        Promise.all(sendFeedbackEmail(pair, ambassadorEmail))
          .then(() => updateFeedbackEmailStatus(base, pair.id))
          .then(() => console.log('feedback email sent'))
          .catch(e => console.log(e.message));
      });
    })
    .catch(console.log);
};

module.exports = sendFeedbackEmails;

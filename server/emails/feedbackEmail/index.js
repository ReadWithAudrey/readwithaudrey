const { getRecentPairings } = require('../../queries/getData');
const sendFeedbackEmail = require('./sendFeedbackEmail');
const { updateFeedbackEmailStatus } = require('../../queries/postData');

const sendFeedbackEmails = () => {
  getRecentPairings()
    .then((pairs) => {
      pairs.forEach((pair) => {
        Promise.all(sendFeedbackEmail(pair))
          .then(() => updateFeedbackEmailStatus(pair))
          .then(() => console.log('feedback email sent'))
          .catch(e => console.log(e.message));
      });
    })
    .catch(console.log);
};

sendFeedbackEmails();

module.exports = sendFeedbackEmails;

require('dotenv').config();
const base = require('../../dbConnection');

const updateFeedbackEmailStatus = (id) => {
  console.log('Updating sent status');
  return new Promise((resolve, reject) => {
    base('pairings').update(
      id,
      {
        feedback_email_sent: Date.now(),
      },
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      },
    );
  });
};

module.exports = updateFeedbackEmailStatus;

require('dotenv').config();
const base = require('../../dbConnection');

const updateSentStatus = ({ id }) => {
  console.log('Updating sent status');
  return new Promise((resolve, reject) => {
    base('pairings').update(
      id,
      {
        pairing_email_sent: Date.now(),
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
module.exports = updateSentStatus;

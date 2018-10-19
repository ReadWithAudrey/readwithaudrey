require('dotenv').config();
const base = require('../../dbConnection');

const updateLeadEmailSent = ({ id }) => {
  console.log('Updating sent status');
  return new Promise((resolve, reject) => {
    base('leads').update(
      id,
      {
        reminder_email_sent: true,
      },
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve('updated table with email sent status');
        }
      },
    );
  });
};

module.exports = updateLeadEmailSent;

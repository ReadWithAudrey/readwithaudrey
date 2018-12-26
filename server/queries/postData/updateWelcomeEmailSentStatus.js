require('dotenv').config();

const updateWelcomeEmailSentStatus = (base, id) => {
  console.log('Updating sent status');
  return new Promise((resolve, reject) => {
    base('users').update(
      id,
      {
        welcome_email_sent: Date.now(),
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
module.exports = updateWelcomeEmailSentStatus;

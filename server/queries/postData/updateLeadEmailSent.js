require('dotenv').config();

const updateLeadEmailSent = (base, id) => {
  console.log('Updating sent status');
  return new Promise((resolve, reject) => {
    base('leads').update(
      id,
      {
        reminder_email_sent: Date.now(),
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

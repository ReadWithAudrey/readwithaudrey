require('dotenv').config();

const updateSentStatus = (base, id) => {
  console.log('Updating sent status of the base--', base, '--with the id--', id);
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

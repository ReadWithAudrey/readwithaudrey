require('dotenv').config();
const { base } = require('../../dbConnection');

const updateLeadAccStatus = (id) => {
  console.log('Updating lead account status');
  return new Promise((resolve, reject) => {
    base('leads').update(
      id,
      {
        signup_complete: Date.now(),
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

module.exports = updateLeadAccStatus;

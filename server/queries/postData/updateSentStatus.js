require('dotenv').config();
const base = require('../../dbConnection');

const updateSentStatus = (id) => {
  base('pairings').update(
    id,
    {
      pairing_email_sent: true,
    },
    (err) => {
      if (err) {
        console.error(err);
      }
    },
  );
};

module.exports = updateSentStatus;

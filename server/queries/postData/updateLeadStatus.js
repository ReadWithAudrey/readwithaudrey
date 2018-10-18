require('dotenv').config();
const base = require('../../dbConnection');

const updateLeadStatus = (id) => {
  console.log('in update lead status');
  base('leads').update(
    id,
    {
      signup_complete: true,
    },
    (err, res) => {
      if (err) {
        console.log(err);
      } else {
      }
    },
  );
};

module.exports = updateLeadStatus;

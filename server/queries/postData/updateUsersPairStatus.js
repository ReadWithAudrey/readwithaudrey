require('dotenv').config();

const updateUsersPairStatus = (base, id) => new Promise((resolve, reject) => {
  base('users').update(
    id,
    {
      looking_for_pair: false,
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

module.exports = updateUsersPairStatus;

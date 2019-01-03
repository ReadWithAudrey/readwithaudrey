const base = require('../../dbConnection');

const getUserIdsOfPair = pair => new Promise((resolve, reject) => {
  const { user1_email, user2_email } = pair.fields;
  base('users')
    .select({
      filterByFormula: `OR({email} = '${user1_email}', {email} = '${user2_email}')`,
    })
    .firstPage((err, records) => {
      if (err) {
        reject(new Error(`Server Error: ${err})`));
      } else if (records.length) {
        resolve([records[0].id, records[1].id]);
      } else {
        reject(new Error('Could not find users with those email addresses'));
      }
    });
});

module.exports = { getUserIdsOfPair };

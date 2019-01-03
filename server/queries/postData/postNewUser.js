const base = require('../../dbConnection');

const postNewUser = (user) => {
  console.log('Posting new user');
  return new Promise((resolve, reject) => {
    base('users').create(
      {
        first_name: user.firstName,
        surname: user.secondName,
        email: user.emailAddress,
        gender: user.gender,
        age: user.age,
        time_zone: user.timezone,
        reading_preference: user.readlisten,
        book_preference: user.booktype,
        user_bio: user.story,
        special_requirements: user.specialRequests,
        looking_for_pair: true,
      },
      (err) => {
        if (err) {
          reject(err);
        }
        resolve(user);
      },
    );
  });
};

module.exports = postNewUser;

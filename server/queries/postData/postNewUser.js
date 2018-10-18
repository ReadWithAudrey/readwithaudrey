require('dotenv').config();
const base = require('../../dbConnection');

const postNewUser = (user) => {
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
    },
    (err, record) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(record.getId());
    },
  );
};

module.exports = { postNewUser };

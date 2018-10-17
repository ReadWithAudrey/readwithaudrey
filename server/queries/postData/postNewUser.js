require('dotenv').config();
const base = require('../../dbConnection');

const postNewUser = (user) => {
  console.log(user);
};

module.exports = { postNewUser };

require('dotenv').config();
const axios = require('axios');

const saveContact = (user) => {
  console.log('Saving contact');
  const { firstName, emailAddress, secondName } = user;
  return axios('https://sendgrid.com/v3/contactdb/recipients', {
    headers: { Authorization: `Bearer ${process.env.SENDGRID_API_KEY}` },
    method: 'POST',
    data: [
      {
        email: emailAddress,
        first_name: firstName,
        last_name: secondName,
      },
    ],
  });
};


module.exports = saveContact;

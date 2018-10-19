require('dotenv').config();
const axios = require('axios');

const mailingListId = 5541826;

const addContactToList = (resp) => {
  const contactId = resp.data.persisted_recipients;
  console.log('moving contact');
  return axios(`https://sendgrid.com/v3/contactdb/lists/${mailingListId}/recipients`, {
    headers: { Authorization: `Bearer ${process.env.SENDGRID_API_KEY}` },
    method: 'POST',
    data: contactId,
  });
};

module.exports = addContactToList;

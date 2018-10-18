require('dotenv').config();
const axios = require('axios');

const createContact = (email, firstName, surname) => axios('https://sendgrid.com/v3/contactdb/recipients', {
  headers: { Authorization: `Bearer ${process.env.SENDGRID_API_KEY}` },
  method: 'POST',
  data: [
    {
      email,
      first_name: firstName,
      last_name: surname,
    },
  ],
});
const addContactToList = (contactId, listId) => axios(`https://sendgrid.com/v3/contactdb/lists/${listId}/recipients`, {
  headers: { Authorization: `Bearer ${process.env.SENDGRID_API_KEY}` },
  method: 'POST',
  data: contactId,
});

const newUser = (email, firstName, surname, listID) => createContact(email, firstName, surname)
  .then(({ data: { persisted_recipients: contactId } }) => {
    addContactToList(contactId, listID);
  });

module.exports = newUser;

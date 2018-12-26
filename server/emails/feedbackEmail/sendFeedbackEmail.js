/* eslint-disable camelcase */
require('dotenv').config();
const axios = require('axios');

// Send lead email
const sendFeedbackEmail = (pair) => {
  console.log('sending feedback email');
  const { id } = pair;
  const {
    user1_name, user1_email, user2_name, user2_email,
  } = pair.fields;

  const pairArr = [
    { name: user1_name[0], email: user1_email[0] },
    { name: user2_name[0], email: user2_email[0] },
  ];
  return pairArr.map((user, index) => axios('https://sendgrid.com/v3/mail/send', {
    headers: { Authorization: `Bearer ${process.env.SENDGRID_API_KEY}` },
    method: 'POST',
    data: {
      personalizations: [
        {
          to: [user],
          dynamic_template_data: {
            firstName: user.name,
            partnerName: pairArr[index ? 0 : 1].name,
            pairingId: id,
          },
          bcc: [
            {
              email: process.env.EMAIL,
              name: 'Audrey',
            },
          ],
        },
      ],
      from: {
        email: process.env.EMAIL,
        name: 'Audrey',
      },
      reply_to: {
        email: process.env.EMAIL,
        name: 'Audrey',
      },
      template_id: 'd-9eb1e4ed81794e12a3d2c4a1b7ce6302',
    },
  }));
};

module.exports = sendFeedbackEmail;

/* eslint-disable camelcase */
require('dotenv').config();
const axios = require('axios');

// Send lead email
const sendWelcomeEmail = (user) => {
  console.log('sending welcome email');
  const { firstName, emailAddress } = user;
  return axios('https://sendgrid.com/v3/mail/send', {
    headers: { Authorization: `Bearer ${process.env.SENDGRID_API_KEY}` },
    method: 'POST',
    data: {
      personalizations: [
        {
          to: [
            {
              email: emailAddress,
              name: firstName,
            },
          ],
          dynamic_template_data: {
            firstName,
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
      template_id: 'd-203eb51da4104414b16353aca6e54689',
    },
  });
};

module.exports = sendWelcomeEmail;

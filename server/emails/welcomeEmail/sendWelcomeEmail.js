/* eslint-disable camelcase */
require('dotenv').config();
const axios = require('axios');

// Send lead email
const sendWelcomeEmail = (user, ambassadorFields) => {
  const { firstName, emailAddress } = user;
  console.log('sending welcome email from: ', ambassadorFields.audrey_email, ' to ', emailAddress);
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
              email: ambassadorFields.audrey_email,
              name: `Audrey - ${ambassadorFields.organisation}`,
            },
          ],
        },
      ],
      from: {
        email: ambassadorFields.audrey_email,
        name: `Audrey - ${ambassadorFields.organisation}`,
      },
      reply_to: {
        email: ambassadorFields.audrey_email,
        name: `Audrey - ${ambassadorFields.organisation}`,
      },
      template_id: 'd-203eb51da4104414b16353aca6e54689',
    },
  });
};

module.exports = sendWelcomeEmail;

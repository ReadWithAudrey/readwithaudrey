/* eslint-disable camelcase */
require('dotenv').config();
const axios = require('axios');

// Send lead email
const sendLeadEmail = (lead) => {
  console.log('sending lead email');
  const { id } = lead;
  const { first_name, surname, email } = lead.fields;
  return axios('https://sendgrid.com/v3/mail/send', {
    headers: { Authorization: `Bearer ${process.env.SENDGRID_API_KEY}` },
    method: 'POST',
    data: {
      personalizations: [
        {
          to: [
            {
              email,
              name: first_name,
            },
          ],
          dynamic_template_data: {
            first_name,
            surname,
            leadId: id,
          },
          bcc: [
            {
              email: 'rob@readwithaudrey.com',
              name: 'Audrey',
            },
          ],
        },
      ],
      from: {
        email: 'rob@readwithaudrey.com',
        name: 'Audrey',
      },
      reply_to: {
        email: 'rob@readwithaudrey.com',
        name: 'Audrey',
      },
      template_id: 'd-0fa6f8c4980341dda5bc4173b5378d92',
    },
  });
};

module.exports = { sendLeadEmail };

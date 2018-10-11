require('dotenv').config();
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: ['readwithaudrey.data@gmail.com'],
  from: 'readwithaudrey.data@gmail.com',
  templateId: 'd-74d18868e6d84290860df912d769464d',
  dynamic_template_data: {
    user1: 'Denis',
    user2: 'Ben',
  },
};
sgMail.send(msg);

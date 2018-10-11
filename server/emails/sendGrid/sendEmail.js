require('dotenv').config();
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: 'readwithaudrey.data@gmail.com',
  from: 'test@example.com',
  template_id: 'd-74d18868e6d84290860df912d769464d',
};
sgMail.send(msg);

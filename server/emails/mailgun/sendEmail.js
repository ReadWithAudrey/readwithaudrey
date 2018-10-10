require('dotenv').config();

const api_key = process.env.MAILGUN_API_KEY;
const domain = process.env.DOMAIN;
const mailgun = require('mailgun-js')({ apiKey: api_key, domain });

const sendEmail = (email) => {
  mailgun.messages().send(email, (error, body) => {
    if (error) {
      console.log(`Error sending the email: ${error}`);
    } else {
      console.log(body);
    }
  });
};

module.exports = sendEmail;

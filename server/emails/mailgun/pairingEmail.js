require('dotenv').config();

const api_key = process.env.MAILGUN_API_KEY;
const domain = process.env.DOMAIN;
const mailgun = require('mailgun-js')({ apiKey: api_key, domain });

const data = {
  from: 'Rob <readwithaudrey.data@gmail.com>',
  to: '	benjamin-newman@live.co.uk',
  subject: 'Hello Ben! Welcome to readwithaudrey',
  text: 'Testing some Mailgun awesomeness!',
};

mailgun.messages().send(data, (error, body) => {
  if (error) {
    console.log(error);
  } else {
    console.log(body);
  }
});

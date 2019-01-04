require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const controllers = require('./controllers');
const pairingEmail = require('./emails/pairingEmail');
const leadEmail = require('./emails/leadEmail');
const sendFeedbackEmails = require('./emails/feedbackEmail');

const { getAmbassadors } = require('./queries/getData/getAmbassadorInfo');

const app = express();
app.set('PORT', process.env.PORT || 5000);

// check the Airtable for emails to be sent in all the tables
setInterval(() => {
  // check the general audrey table
  const audreyGeneral = {
    base_id: process.env.AIRTABLE_BASE,
    audrey_email: process.env.EMAIL,
    organisation: 'General',
  };
  pairingEmail(audreyGeneral);
  leadEmail(audreyGeneral);
  sendFeedbackEmails(audreyGeneral);

  // check the ambassador tables
  getAmbassadors()
    .then((ambassadors) => {
      ambassadors.forEach((ambassador) => {
        pairingEmail(ambassador.fields);
        leadEmail(ambassador.fields);
        sendFeedbackEmails(ambassador.fields);
      });
    })
    .catch((err) => {
      console.log('Error in getAmbassadors promise chain:', err.message);
    });
}, 1000 * 10);

// Enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', process.env.FRONTEND_SERVER);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(controllers);

module.exports = app;

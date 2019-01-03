require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./controllers');
const pairingEmail = require('./emails/pairingEmail');
const leadEmail = require('./emails/leadEmail');
const sendFeedbackEmails = require('./emails/feedbackEmail');

const app = express();
app.set('PORT', process.env.PORT || 5000);

setInterval(() => {
  pairingEmail();
  leadEmail();
  sendFeedbackEmails();
}, 1000 * 10);

// Enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(controllers);

module.exports = app;

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./controllers');
const pairingEmail = require('./emails/pairingEmail');


const app = express();
app.set('PORT', process.env.PORT || 5000);


setInterval(pairingEmail, 1000 * 60);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(controllers);

module.exports = app;

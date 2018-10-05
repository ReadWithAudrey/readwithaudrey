require('dotenv').config();
const express = require('express');
const controllers = require('./controllers')
const bodyParser = require('body-parser');


const app = express();
app.set('PORT', process.env.PORT || 5000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(controllers);

module.exports = app;

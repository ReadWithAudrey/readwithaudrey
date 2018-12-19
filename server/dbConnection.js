require('dotenv').config();
const Airtable = require('airtable');

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_API_KEY,
});

const base = Airtable.base(process.env.AIRTABLE_BASE);

const organisations = [
  { organisation: 'main', orgCode: 100100, base: 'appTrGvqQ9ItVRYOb' },
  { organisation: 'FAC', orgCode: 100101, base: 'appcbskDQClM2MGhA' },
];

module.exports = base;

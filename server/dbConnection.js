require('dotenv').config();
const Airtable = require('airtable');

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_API_KEY,
});

const baseGeneral = BaseId => Airtable.base(BaseId);

const base = baseGeneral(process.env.AIRTABLE_BASE);
const baseAdmin = baseGeneral(process.env.AIRTABLE_BASE_ADMIN);

module.exports = { base, baseAdmin, baseGeneral };

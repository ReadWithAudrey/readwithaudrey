require('dotenv').config();
const Airtable = require('airtable');

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_API_KEY,
});

const baseGeneral = BaseId => Airtable.base(BaseId);

const base = baseGeneral(process.env.AIRTABLE_BASE);
const baseAdmin = baseGeneral(process.env.AIRTABLE_BASE_ADMIN);
// const base = Airtable.base(process.env.AIRTABLE_BASE);

const organisations = [
  { organisation: 'admin', orgCode: 100000, base: 'appsSVU9iGr00K1v4' },
  { organisation: 'test', orgCode: 100100, base: 'appsSVU9iGr00K1v4' },
  { organisation: 'FAC', orgCode: 100101, base: 'appcbskDQClM2MGhA' },
];

module.exports = { base, baseAdmin, baseGeneral };

require('dotenv').config();
const axios = require('axios');

axios('https://sendgrid.com/v3/contactdb/recipients', {
  headers: { Authorization: `Bearer ${process.env.SENDGRID_API_KEY}` },
  method: 'POST',
  data: [
    {
      email: 'example5@example.com',
      first_name: '5',
      last_name: 'Usaer3',
    },
    {
      email: 'example4@example.com',
      first_name: 'Example5',
      last_name: 'Usera3',
    },
  ],
}).then(console.log)
  .catch(console.log);

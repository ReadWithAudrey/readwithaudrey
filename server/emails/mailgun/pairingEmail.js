require('dotenv').config()

var api_key = process.env.mailgunApiKey
var domain = process.env.domain
var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain })

var data = {
  from: 'Rob <readwithaudrey.data@gmail.com>',
  to: '	benjamin-newman@live.co.uk',
  subject: 'Hello Ben! Welcome to readwithaudrey',
  text: 'Testing some Mailgun awesomeness!',
}

mailgun.messages().send(data, function(error, body) {
  if (error) {
    console.log(error)
  } else {
    console.log(body)
  }
})

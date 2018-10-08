var api_key = 'bcf56ec9023e62c8767b08c7ce3b0dab-c8e745ec-5150a51a'
var domain = 'sandbox72ed9b39d939499a93f0196717424330.mailgun.org'
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

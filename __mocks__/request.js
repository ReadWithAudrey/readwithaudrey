const { twoNewPairs, noNewPairs, airtableConnectionErr } = require('./json')

const getNewPairsURL =
  'https://api.airtable.com/v0/appTrGvqQ9ItVRYOb/pairings?filterByFormula=AND(%7Buser1_id%7D%2C+%7Buser2_id%7D%2C+%7Breader%7D%2C+%7Bbook_id%7D%2C%7Bconfirm_pairing%7D%2C+NOT(%7Bpairing_email_sent%7D))&fields%5B%5D=user1_name&fields%5B%5D=user1_email&fields%5B%5D=user1_bio&fields%5B%5D=user2_name&fields%5B%5D=user2_email&fields%5B%5D=user2_bio&fields%5B%5D=book_name&fields%5B%5D=book_author&fields%5B%5D=book_attachments&fields%5B%5D=book_bio&fields%5B%5D=mini_book_bio&fields%5B%5D=reader'

let getMocks = {}
getMocks[getNewPairsURL] = {
  fullResult: twoNewPairs,
  emptyResult: noNewPairs,
  connectionErr: airtableConnectionErr,
}

let setError = {}
setError[getNewPairsURL] = {
  fullResult: null,
  emptyResult: null,
  connectionErr: 'server error',
}

let setResponse = {}
setResponse[getNewPairsURL] = {
  fullResult: twoNewPairs,
  emptyResult: noNewPairs,
  connectionErr: 400,
}

const request = (options, callback) => {
  if (options.method === 'POST') {
    get(options, callback)
  } else if (options.method === 'GET') {
    get(options, callback)
  } else if (options.method === 'PATCH') {
    get(options, callback)
  }
}
const get = jest.fn((options, callback) => {
  callback(
    setError[options.url].fullResult,
    setResponse[options.url].fullResult,
    setResponse[options.url].fullResult.body
  )
})

module.exports = request

const getNewPairs = require('./getNewPairs');
const { twoNewPairs, noNewPairs, airtableConnectionErr } = require('../../../__mocks__/json');

test('getPairs :: get all valid pairs', () => {
  expect.assertions(1);
  getNewPairs().then((data) => {
    console.log(data);
    expect(data.length).toEqual(2);
  });
});

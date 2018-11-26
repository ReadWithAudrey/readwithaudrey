const getNewPairs = require('./getNewPairs');
const { twoNewPairs, noNewPairs, airtableConnectionErr } = require('../../../__mocks__/json');

test('getPairs :: get all valid pairs', () => {
  getNewPairs().then((data) => {
    expect(data.length).toEqual(2);
  });
});

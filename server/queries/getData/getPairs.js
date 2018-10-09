require('dotenv').config();

const base = require('../../dbConnection');

base('pairings')
  .select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 3,
    view: 'Grid view',
  })
  .eachPage(
    (records, fetchNextPage) => {
      // This function (`page`) will get called for each page of records.

      records.forEach((record) => {
        console.log(record);
        console.log('Retrieved', record.get('id'));
      });

      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();
    },
    (err) => {
      if (err) {
        console.error(err);
      }
    },
  );

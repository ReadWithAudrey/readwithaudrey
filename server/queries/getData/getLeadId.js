const base = require('../../dbConnection');

const getLeadId = emailAddress => new Promise((resolve, reject) => {
  let allRecords = [];
  const leadIds = [];
  base('leads')
    .select({
      filterByFormula: `AND(email='${emailAddress}')`
      ,
    })
    .eachPage(
      (records, fetchNextPage) => {
        allRecords = [...allRecords, ...records];
        fetchNextPage();
      },
      (err) => {
        if (err) {
          reject(err);
        } else {
          allRecords.forEach(record => leadIds.push(record.id));
          resolve(leadIds);
        }
      },
    );
});

getLeadId('testmatt@gmail.com').then(leadIds => console.log(leadIds));

module.exports = getLeadId;

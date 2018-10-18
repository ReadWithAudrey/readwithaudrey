const base = require('../../dbConnection');

const getLeadId = emailAddress => new Promise((resolve, reject) => {
  console.log('getting a lead');
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
          allRecords.forEach((record) => {
            leadIds.push(record.id);
          });
          resolve(leadIds);
        }
      },
    );
});


module.exports = { getLeadId };

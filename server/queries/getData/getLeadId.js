const base = require('../../dbConnection');

// const getLeadId = (emailAddress) => {
//   console.log('getLeadId query');
//   return new Promise((resolve, reject) => {
//     let allRecords = [];
//     const leadIds = [];
//     base('leads')
//       .select({
//         filterByFormula: `AND(email='${emailAddress}')`
//         ,
//       })
//       .eachPage(
//         (records, fetchNextPage) => {
//           allRecords = [...allRecords, ...records];
//           fetchNextPage();
//         },
//         (err) => {
//           if (err) {
//             reject(err);
//           } else {
//             allRecords.forEach(record => leadIds.push(record.id));
//             resolve(leadIds);
//           }
//         },
//       );
//   });
// };


module.exports = getLeadId;

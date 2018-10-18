// require('dotenv').config();
// const base = require('../../dbConnection');
//
// const updateLeadStatus = ({ email }) => {
//   console.log('Updating sent status');
//   return new Promise((resolve, reject) => {
//     base('leads').update(
//       id,
//       {
//         signup_complete: true,
//       },
//       (err) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve();
//         }
//       },
//     );
//   });
// };
// module.exports = updateLeadStatus;

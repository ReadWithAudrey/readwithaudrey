const { checkLeadTable, checkUsersTable, createLead } = require('../queries/postData/postLead');

exports.post = (req, res) => {
//   const lead = req.body;
//   checkUsersTable(lead)
//     .then((uniqueEmail) => {
//       if (!uniqueEmail) {
//         res.end('email exists');
//         return Promise.reject(new Error('E-mail address used'));
//       }
//       return checkLeadTable(lead);
//     })
//     .then((uniqueLead) => {
//       if (!uniqueLead) {
//         res.end('');
//         return Promise.reject(new Error('Lead Exists'));
//       }
//       return createLead(lead);
//     })
//     .then(() => {
//       console.log('Ok');
//       res.end('Ok');
//     })
//     .catch((err) => {
//       console.log(err);
//       res.end('server error');
//     });
// };

exports.post = (req, res) => {
  const lead = req.body;
  checkUsersTable(lead)
  .then((itDoesntExist) => {
    if(itDoesExist){
    checkLeadTable(lead).then((itDoesntExist)=>{
    }
    })
  })
}

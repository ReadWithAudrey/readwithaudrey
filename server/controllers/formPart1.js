const { checkLeadTable, checkUsersTable, createLead } = require('../queries/postData/postLead');

exports.post = (req, res) => {
  console.log('form1 backend -------', req.body);
  const lead = req.body;
  checkUsersTable(lead)
    .then((uniqueEmail) => {
      if (!uniqueEmail) {
        res.end('email exists');
        return Promise.reject(new Error('E-mail address used'));
      }
      return checkLeadTable(lead);
    })
    .then((uniqueLead) => {
      if (!uniqueLead) {
        res.end('');
        return Promise.reject(new Error('Lead Exists'));
      }
      return createLead(lead);
    })
    .then(() => {
      console.log('Ok');
      res.end('Ok');
    })
    .catch((err) => {
      console.log('Error posting to /Form1: ', err);
      res.end('server error');
    });
};

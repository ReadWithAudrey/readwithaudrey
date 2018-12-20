const { checkLeadTable, checkUsersTable, createLead } = require('../queries/postData/postLead');
const getBaseId = require('../queries/getData/getBaseId');
const { baseGeneral } = require('../dbConnection');

exports.post = (req, res) => {
  const lead = req.body;
  console.log(req.body.orgCode);
  getBaseId(req.body.orgCode)
    .then((baseId) => {
      console.log(baseId);
      if (baseId === null) {
        res.end(
          'No organisation with that code. Contact your ambassador or sign up as a general user',
        );
        return Promise.reject(
          new Error(
            'No organisation with that code. Contact your ambassador or sign up as a general user',
          ),
        );
      }
      const base = baseGeneral(baseId);
      return checkUsersTable(base, lead)
        .then((uniqueEmail) => {
          if (!uniqueEmail) {
            res.end('Email already in the users table');
            return Promise.reject(new Error('Email already in the users table'));
          }
          return checkLeadTable(base, lead);
        })
        .then((uniqueLead) => {
          if (!uniqueLead) {
            res.end('Lead already in the leads table');
            return Promise.reject(new Error('Lead already in the leads table'));
          }
          return createLead(base, lead);
        })
        .then(() => {
          res.end('Added the lead to the leads table');
        })
        .catch((err) => {
          res.end(err);
        });
    })
    .catch((err) => {
      res.end(err);
    });
};

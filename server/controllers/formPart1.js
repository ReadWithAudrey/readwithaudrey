const { checkLeadTable, checkUsersTable, createLead } = require('../queries/postData/postLead');
const { getAmbassadorInfo } = require('../queries/getData/getAmbassadorInfo');
const { base, baseGeneral } = require('../dbConnection');

const checkForAndAddLead = (base1, lead, res) => {
  checkUsersTable(base1, lead)
    .then((uniqueEmail) => {
      if (!uniqueEmail) {
        res.end('email exists');
        return Promise.reject(new Error('Email already in the users table'));
      }
      return checkLeadTable(base1, lead);
    })
    .then((uniqueLead) => {
      if (!uniqueLead) {
        res.end('Lead exists');
        return Promise.reject(new Error('Lead already in the leads table'));
      }
      return createLead(base1, lead);
    })
    .then(() => {
      console.log('add');
      res.end('Added the lead to the leads table');
    })
    .catch((err) => {
      console.log(err);
      res.end('server error');
    });
};

exports.post = (req, res) => {
  console.log(req.body);
  const lead = req.body;
  if (req.body.orgCode !== null) {
    console.log('got a code');
    getAmbassadorInfo(req.body.orgCode)
      .then((ambassadorInfo) => {
        console.log(ambassadorInfo.baseId);
        if (!ambassadorInfo.baseId) {
          res.end('No organisation with that code');
          return Promise.reject(
            new Error(
              'No organisation with that code. Contact your ambassador or sign up as a general user',
            ),
          );
        }
        const base1 = baseGeneral(ambassadorInfo.baseId);
        checkForAndAddLead(base1, lead, res);
      })
      .catch((err) => {
        console.log(err);
        res.end('server error');
      });
  } else {
    console.log('not got a code - business as usual', base, lead, res.body);
    checkForAndAddLead(base, lead, res);
  }
};

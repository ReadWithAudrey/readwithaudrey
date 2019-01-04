require('dotenv').config();
const { postNewUser, updateLeadAccStatus } = require('../queries/postData/');
const { getLeadId } = require('../queries/getData/getLeadId');
const { welcomeEmail, saveContact, moveContact } = require('../emails/welcomeEmail');
const { getUserId } = require('../queries/getData/getUserId');
const updateWelcomeEmailSentStatus = require('../queries/postData/updateWelcomeEmailSentStatus');
const { checkUsersTable } = require('../queries/postData/postLead');
const { getAmbassadorInfo } = require('../queries/getData/getAmbassadorInfo');
const { base, baseGeneral } = require('../dbConnection');

const postUser = (user, res, ambassadorFields) => {
  console.log('im in post user, this is the ambassador fields:', ambassadorFields);
  const base1 = baseGeneral(ambassadorFields.base_id);
  checkUsersTable(base, user)
    .then(() => {
      postNewUser(base1, user)
        .then(base1, getLeadId)
        .then(base1, updateLeadAccStatus)
        .then(() => welcomeEmail(user, ambassadorFields))
        .then(() => getUserId(base1, user.emailAddress))
        .then(userId => updateWelcomeEmailSentStatus(base1, userId))
        .then(() => saveContact(user))
        .then(moveContact)
        .then(() => {
          console.log('success!');
          res.sendStatus(200);
        })
        .catch((err) => {
          console.log('Error in PostNewUser. Here is the message: ', err.message);
          res.end('server error');
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.post = (req, res) => {
  console.log('form3 backend -----------', process.env.EMAIL);
  const user = req.body;
  if (req.body.orgCode !== null) {
    getAmbassadorInfo(req.body.orgCode)
      .then((ambassadorFields) => {
        console.log('im the ambassadorInfo>>>>>>>>>>>>>>>>>', ambassadorFields);
        postUser(user, res, ambassadorFields);
      })
      .catch(err => console.log('Error in Form 3: ', err));
  } else {
    const audreyGeneral = {
      base_id: process.env.AIRTABLE_BASE,
      audrey_email: process.env.EMAIL,
      organisation: 'General',
    };
    postUser(user, res, audreyGeneral);
  }
};

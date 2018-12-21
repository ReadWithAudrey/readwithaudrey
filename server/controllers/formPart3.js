const { postNewUser, updateLeadAccStatus } = require('../queries/postData/');
const { getLeadId } = require('../queries/getData/getLeadId');
const { welcomeEmail, saveContact, moveContact } = require('../emails/welcomeEmail');
const { getUserId } = require('../queries/getData/getUserId');
const updateWelcomeEmailSentStatus = require('../queries/postData/updateWelcomeEmailSentStatus');
const { checkUsersTable } = require('../queries/postData/postLead');
const getBaseId = require('../queries/getData/getBaseId');
const { base, baseGeneral } = require('../dbConnection');

const postUser = (base1, user, res) => {
  checkUsersTable(base, user)
    .then(() => {
      postNewUser(base1, user)
        .then(base1, getLeadId)
        .then(base1, updateLeadAccStatus)
        .then(() => welcomeEmail(user))
        .then(() => getUserId(base1, user.emailAddress))
        .then(userId => updateWelcomeEmailSentStatus(base1, userId))
        .then(() => saveContact(user))
        .then(moveContact)
        .then(() => {
          console.log('success!');
          res.sendStatus(200);
        })
        .catch((err) => {
          console.log(err);
          res.end('server error');
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.post = (req, res) => {
  console.log('form3 backend -----------', req.body);
  const user = req.body;
  const base2 = base;
  postUser(base2, user, res);
};

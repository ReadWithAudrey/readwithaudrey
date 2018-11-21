const { postNewUser, updateLeadAccStatus } = require('../queries/postData/');
const { getLeadId } = require('../queries/getData/getLeadId');
const { welcomeEmail, saveContact, moveContact } = require('../emails/welcomeEmail');
const { getUserId } = require('../queries/getData/getUserId');
const updateWelcomeEmailSentStatus = require('../queries/postData/updateWelcomeEmailSentStatus');

exports.post = (req, res) => {
  const user = req.body;
  postNewUser(user)
    .then(getLeadId)
    .then(updateLeadAccStatus)
    .then(() => welcomeEmail(user))
    .then(() => getUserId(user.emailAddress))
    .then(userId => updateWelcomeEmailSentStatus(userId))
    .then(() => saveContact(user))
    .then(moveContact)
    .then(() => {
      console.log('success!');
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err.message);
      res.end('server error');
    });
};

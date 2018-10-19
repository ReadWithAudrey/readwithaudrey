const { postNewUser, updateLeadAccStatus } = require('../queries/postData/');
const { getLeadId } = require('../queries/getData/getLeadId');
const { welcomeEmail, saveContact, moveContact } = require('../emails/welcomeEmail');


exports.post = (req, res) => {
  const user = req.body;
  postNewUser(user)
    .then(getLeadId)
    .then(updateLeadAccStatus)
    .then(() => welcomeEmail(user))
    .then(() => saveContact(user))
    .then(moveContact)
    .then(() => {
      console.log('success!');
      res.sendStatus(200);
    })
    .catch(err => console.log(err.message));
};

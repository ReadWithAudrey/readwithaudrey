const { updateLeadStatus } = require('../queries/postData/updateLeadStatus.js');
const { postNewUser } = require('../queries/postData/postNewUser');
const { getLeadId } = require('../queries/getData/getLeadId');

console.log(updateLeadStatus);

exports.post = (req, res) => {
  const user = req.body;
  postNewUser(user).then(() => {
    getLeadId(user.emailAddress)
      .then((id) => {
        if (id) {
          console.log(id);
          updateLeadStatus(id);
        }
      })
      .catch(err => console.log(err));
  });
  res.sendStatus(200);
};

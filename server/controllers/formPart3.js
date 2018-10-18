const updateLeadStatus = require('../queries/postData/updateLeadStatus.js');
const { postNewUser } = require('../queries/postData/postNewUser');
const { getLeadId } = require('../queries/getData/getLeadId');


exports.post = (req, res) => {
  const user = req.body;
  postNewUser(user).then(() => {
    getLeadId(user.emailAddress)
      .then((id) => {
        if (id) {
          updateLeadStatus(id);
        }
      })
      .catch(err => console.log(err));
  });
  res.sendStatus(200);
};

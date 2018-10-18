const { postNewUser } = require('../queries/postData/');
const { getLeadId } = require('../queries/getData/');

exports.post = (req, res) => {
  const user = req.body;
  postNewUser(user).then(() => { getLeadId(user.emailAddress).then(ids => console.log(ids)); });
  res.sendStatus(200);
};

const { postNewUser } = require('../queries/postData/');
const { getLeadId } = require('../queries/getData/');

exports.post = (req, res) => {
  console.log(req.body);
  console.log(res.body);
  postNewUser(req.body).then((emailAddress) => { getLeadId(emailAddress).then(ids => console.log(ids)); });
  res.sendStatus(200);
};

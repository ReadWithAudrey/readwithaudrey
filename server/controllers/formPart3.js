const { postNewUser } = require('../queries/postData/');

exports.post = (req, res) => {
  console.log(req.body);
  postNewUser(req.body);
  res.sendStatus(200);
};

const { postNewUser } = require('../queries/postData/');

exports.post = (req, res) => {
  postNewUser(req.body);
  res.sendStatus(200);
};

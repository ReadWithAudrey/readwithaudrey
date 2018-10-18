const { postNewUser } = require('../queries/postData/');

exports.post = (req, res) => {
  console.log(req.body);
  postNewUser(req.body).then((emailAddress) => {
    console.log(emailAddress);
  });
  res.sendStatus(200);
};

const { postNewUser } = require('../queries/postData/');

exports.post = (req, res) => {
  postNewUser(req.body);
  res.redirect('http://localhost:8000/thankyou');
};

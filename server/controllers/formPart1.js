const { postLead } = require('../queries/postData/');

exports.post = (req, res) => {
  postLead(req.body);
  res.redirect('http://localhost:8000/form2');
};

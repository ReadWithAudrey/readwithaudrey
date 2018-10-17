const { postLead } = require('../queries/postData/');

exports.post = (req, res) => {
  console.log(req.body);
  res.send(200);
};

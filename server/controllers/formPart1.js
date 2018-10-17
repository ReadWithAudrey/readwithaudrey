const { postLead } = require('../queries/postData/');

exports.post = (req, res) => {
  postLead(req.body);
  res.sendStatus(200);
};

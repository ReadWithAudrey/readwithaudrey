const { postNewUser } = require('../queries/postData/');
const { getLeadId } = require('../queries/getData/getLeadId');

exports.post = (req, res) => {
  const user = req.body;
  postNewUser(user).then(() => {
    getLeadId(user.emailAddress)
      .then((ids) => {
        if (ids.length > 0) {
          console.log(ids[0]);
        }
      })
      .catch(err => console.log(err));
  });
  res.sendStatus(200);
};

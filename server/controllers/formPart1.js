exports.post = (req, res) => {
  console.log(req.body);
  res.redirect('http://localhost:8000/formPart2');
};

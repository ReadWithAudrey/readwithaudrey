const sgMail = require('../emailConnection');

const sendEmail = (pair) => {
  const msg = {
    to: ['yayahupele@rupayamail.com'],
    from: 'readwithaudrey.data@gmail.com',
    templateId: 'd-74d18868e6d84290860df912d769464d',
    dynamic_template_data: {
      pairingId: `${pair.id}`,
      user1: 'Denis',
      user2: 'Ben',
    },
  };
  sgMail
    .send(msg)
    .then(res => console.log(res[0].request.body));
};

module.exports = sendEmail;

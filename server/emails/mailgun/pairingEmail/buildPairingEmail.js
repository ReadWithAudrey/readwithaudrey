const axios = require('axios');

const buildPairingEmail = pair => new Promise((resolve, reject) => {

  let file = [];
  axios(pair.fields.book_attachments[0].url)
    .then((res) => {
      file = res.data;
    })
    .catch(err => console.log(err));
  console.log(file);

  const pairingEmail = {
    from: 'Audrey <readwithaudrey.data@gmail.com>',
    to: `${pair.fields.user2_email}, ${pair.fields.user2_email}`,
    subject: 'You have been paired!',
    attachment: file,
    html: `
      <head>
      <meta name="viewport" content="width=device-width" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <link href="styles.css" media="all" rel="stylesheet" type="text/css" />
      </head>

      <body>
      Hi ${pair.fields.user1_name}, Hi ${pair.fields.user2_name}, <br><br>

      I hope you're both well.<br><br>

      Welcome again to the Audrey community.<br><br>

      The purpose of this email is to introduce you to one another, provide
      you with each other's contact details, inform you about the book
      you’ll be reading, and help to facilitate your first reading session.<br><br>

      <h3>About You</h3>

      By way of background and introduction here are two short bios…<br><br>

      ${pair.fields.user1_name}:<br>
      ${pair.fields.user1_bio}<br><br>

      ${pair.fields.user2_name}:<br>
      ${pair.fields.user1_bio}<br><br>

      <h3>Reader & Listener</h3>

      Can I suggest Denis begins as the reader for the first chapter? Then
      perhaps you can take turns as the reader and listener, alternating
      between chapters? But please choose an arrangement you’re both
      comfortable with.<br><br>

      The reading sessions can take place over the phone (audio only) or you
      can use a messaging app (e.g. Skype, Whatsapp, Facebook Messenger or
      Apple Facetime) where you’ll have access to audio and video. Please
      liaise with each other to decide your preferred medium for the reading
      sessions.<br><br>

      <h3>Book Choice</h3>

      The book we've chosen is called '${pair.fields.book_name}', by
      ${pair.fields.book_author}. ${pair.fields.mini_book_bio}<br><br>

      <i>${pair.fields.book_bio}</i><br><br>

      The book is attached to this email as five chapters to correspond with
      the five separate reading sessions.<br><br>

      <h3>Call time</h3>

      We think Mondays are the best day to begin reading sessions. We're
      trying, gently and slowly, to nurture this habit amongst the Audrey
      community. Monday's Audrey Day! It's helpful for many, but it's not
      practical for everyone. In which case we try to encourage Tuesday as
      the alternative. But of course it's up to you.<br><br>

      Please will you liaise with each other to confirm a suitable time that
      works for you both (bear in mind time zones - London, UK and Belo
      Horizonte, Brazil). And at the end of your first session we suggest
      you agree the date and time for your next reading session.<br><br>

      <h3>Guide</h3>

      Please have a quick read of the attached Audrey Guide before your
      first session. It describes the experience in a little more detail and
      addresses some questions we’re commonly asked.<br><br>

      We hope that you enjoy the shared reading and it’s a meaningful
      experience for you both.<br><br>

      If you have any questions please don’t hesitate to ask.<br><br>

      Kind regards,<br><br>

      Rob<br>
      <a href = 'www.readwithaudrey.com'> www.readwithaudrey.com </a> <br><br>
      <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdU4NAqn-SYQhWSNIy5E9trgNGKVpqn_zikkQukx5ejjOv_wgs' height = 150px width = 150px>
      </body>
    `,
  };
  resolve(pairingEmail);
});

module.exports = buildPairingEmail;

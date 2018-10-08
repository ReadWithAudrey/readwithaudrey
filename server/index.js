const app = require('./app');

app.listen(app.get('PORT'), () => {
  console.log('App running on port', app.get('PORT'));
});

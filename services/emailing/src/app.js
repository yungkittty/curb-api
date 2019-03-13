const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
// const sendMail = require('./services/');
const controllers = require('./controllers');

const app = express();

app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.send(`${process.env.SERVICE_NAME} endpoint`);
});

// TODO
app.post('/verification', controllers.verification);
app.post('/reset', controllers.reset);

// const to = async () => {
//   for (let i = 3; i > 0; i--) {
//     console.log('sending mail..');
//     const resp = await sendMail();
//     console.log('done=>', resp);
//   }
// };

// to();

console.log('yea');
module.exports = app;

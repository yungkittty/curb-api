const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const proxy = require('express-http-proxy');

const app = express();

app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.send(`${process.env.SERVICE_NAME} endpoint`);
});

app.use('/accounts', proxy(process.env.CURB_ACCOUNT));
app.use('/users', proxy(process.env.CURB_USERS));

module.exports = app;

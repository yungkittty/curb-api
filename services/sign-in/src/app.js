'use strict';

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const controllers = require('./controllers');

const app = express();
app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.send(`${process.env.SERVICE_NAME} endpoint`);
});

app.post('/auth/signin', controllers.signIn);
app.post('/auth/signout', controllers.validate, controllers.signOut);
app.post('/auth/refresh', controllers.refresh);
app.post('/auth/validate', controllers.validate);

app.post('/auth/test', controllers.validate, (req, res) => {
  return res.sendStatus(200).json({});
});

module.exports = app;

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const middlewares = require('./middleswares');
const app = express();

app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.send(`${process.env.SERVICE_NAME} endpoint`);
});

app.use(middlewares.error);

module.exports = app;

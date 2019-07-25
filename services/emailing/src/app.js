const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.send(`${process.env.SERVICE_NAME} endpoint`);
});

app.post('/verification', controllers.verification);
app.post('/reset', controllers.reset);
app.post('/feedback', controllers.feedback);

app.use(middlewares.error);

module.exports = app;

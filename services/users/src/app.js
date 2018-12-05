const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const controllers = require('./controllers');

const app = express();

mongoose.set('debug', true);

app.use(bodyParser.json());
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.send(`${process.env.SERVICE_NAME} endpoint`);
});

app.post('/users', controllers.userCreate);
app.get('/users', controllers.userRead);
app.patch('/users', controllers.userUpdate);
app.delete('/users', controllers.userDelete);

module.exports = app;

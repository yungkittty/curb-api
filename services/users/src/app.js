const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const controllers = require('./controllers');

const app = express();

mongoose.set('debug', true);

app.use(bodyParser.json());
app.use(cors());

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.send(`${process.env.SERVICE_NAME} endpoint`);
});

app.post('/', controllers.userCreate);
app.post('/avatars/:userId', controllers.userAvatars);
app.get('/:id', controllers.userRead);
app.patch('/:id', controllers.userUpdate);
app.delete('/:id', controllers.userDelete);


module.exports = app;

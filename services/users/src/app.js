const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const MongoError = require('mongoose').Error;
const cors = require('cors');
const bodyParser = require('body-parser');
const controllers = require('./controllers');
const errors = require('./configurations/error');

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
app.post('/avatar/:userId', controllers.userAvatar);
app.get('/:id', controllers.userRead);
app.patch('/:id', controllers.userUpdate);
app.delete('/:id', controllers.userDelete);

// eslint-disable-next-line
app.use((err, req, res, next) => {
  console.log('MIDDLEWARE ERROR:', err);
  switch (err.constructor) {
    case errors.ApiError:
      return res
        .status(err.status)
        .json({ service: err.service, code: err.code });
    case errors.OtherServiceError:
      return res
        .status(err.status)
        .json({ service: err.service, code: err.code, from: err.from });
    case MongoError:
      return res
        .status(errors.DATABASE_ERROR)
        .json({ service: process.env.SERVICE_NAME, error: 'DATABASE_ERROR' });
    default:
      return res
        .status(500)
        .json({ service: process.env.SERVICE_NAME, error: 'UNDEFINED' });
  }
});

module.exports = app;

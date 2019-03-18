const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoError = require('mongoose').Error;
const cookieParser = require('cookie-parser');

const controllers = require('./controllers');
const middlewares = require('./middlewares');
const errors = require('./configurations/error');

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

// TODO
const corsOptions = {
  origin: function(origin, callback) {
    console.log('origin=>', origin);
    callback(null, true);
  },
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
  maxAge: 86400,
  methods: ['GET', 'POST', 'DELETE', 'PATCH', 'OPTIONS'],
  optionsSuccessStatus: 204
};
// app.options('*', cors(corsOptions));

app.use(cors(corsOptions));

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.send(`${process.env.SERVICE_NAME} endpoint`);
});

app.delete('/:id', middlewares.validate, controllers.accountDelete);
app.patch('/:id', middlewares.validate, controllers.accountUpdate);
app.post('/sign-in', controllers.signIn);
app.post('/sign-out', middlewares.validate, controllers.signOut);
app.post('/sign-up', controllers.signUp);
app.post('/refresh', controllers.refresh);
app.post('/validate', controllers.validate);

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
      return res.status(errors.DATABASE_ERROR).json({
        service: process.env.SERVICE_NAME,
        error: 'DATABASE_ERROR',
        info: err.message ? err.message : undefined
      });
    default:
      return res.status(500).json({
        service: process.env.SERVICE_NAME,
        error: 'UNDEFINED',
        info: err.message ? err.message : undefined
      });
  }
});

module.exports = app;

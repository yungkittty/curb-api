const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoError = require('mongoose').Error;

const controllers = require('./controllers');
const middlewares = require('./middlewares');
const errors = require('./configurations/error');

const app = express();

app.use(bodyParser.json());
app.use(cors());

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

// TODO
// TO DELETE => /code/:id (remplacer par un retour du code dans la rq);
app.post('/code/:id', controllers.accountCode);
app.get('/activate/:id', controllers.accountActivate);

app.delete('/:id', middlewares.validate, controllers.accountDelete);
app.patch('/:id', middlewares.validate, controllers.accountUpdate);

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

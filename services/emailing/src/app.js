const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const controllers = require('./controllers');
const errors = require('./configurations/error');

const app = express();

app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.send(`${process.env.SERVICE_NAME} endpoint`);
});

// TODO + TOTEST (passer les call emails en async (prise de temps
// sur la rq de create ~~ ))
app.post('/verification', controllers.verification);
app.post('/reset', controllers.reset);

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
    default:
      return res.status(500).json({
        service: process.env.SERVICE_NAME,
        error: 'UNDEFINED',
        info: err.message ? err.message : undefined
      });
  }
});

module.exports = app;

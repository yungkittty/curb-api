const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator/check');
const upload = require('./upload');

const app = express();

app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.send(`${process.env.SERVICE_NAME} endpoint`);
});

/**
 * Validation de la requête avec express-validator
 */

app.use('/', [
  check('userId').isUUID(),
  check('groupId').isUUID(),
  check('type').isIn(['img', 'vid', 'txt', 'loc']),
]);

app.use((req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  return next();
});

app.post('/', upload);

module.exports = app;

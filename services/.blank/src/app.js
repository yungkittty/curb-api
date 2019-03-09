const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const errors = require('./configurations/error');

const app = express();

app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.send(`${process.env.SERVICE_NAME} endpoint`);
});

// Ajouter les routes du microservices ici

// middleware des erreurs 
// Les erreurs de mongoose doivent être gerer dans les services
// Dans les services et controlleurs -> throw new Error("ERROR_TAG");
app.use((err, req, res, next) => {
  if (errors[err.message]) {
    return res
      .status(errors[err.message])
      .json({ service: process.env.SERVICE_NAME, code: err.message });
  }
  if (err.message === 'OTHER_SERVICE') {
    return res
      .status(500)
      .json({ service: process.env.SERVICE_NAME, code: 'OTHER_SERVICE' });
  }
  switch (err.constructor) {
    // case MongoError:
    //   return res
    //     .status(500)
    //     .json({ service: process.env.SERVICE_NAME, error: 'DATABASE_ERROR' });
    default:
      return res
        .status(500)
        .json({ service: process.env.SERVICE_NAME, error: 'UNDEFINED' });
  }
});

module.exports = app;

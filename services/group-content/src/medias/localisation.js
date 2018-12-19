const express = require('express');

const localisation = express();

localisation.get('/', (req, res) => (
  res.status(200).end()
));

module.exports = localisation;

const express = require('express');

const text = express();

text.post('/', (req, res) => (
  res.json(200).end()
));

module.exports = text;

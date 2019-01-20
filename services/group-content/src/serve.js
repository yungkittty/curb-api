const express = require('express');

const serve = express();

serve.use((req, res, next) => {
  console.log('Check right to get the requested static file here'); // eslint-disable-line
  next();
});

serve.use(express.static('uploads'));
serve.use(express.static('default'));

module.exports = serve;

const express = require('express');

const serve = express();

serve.use(express.static('uploads'));
serve.use(express.static('default'));

module.exports = serve;

const express = require('express');

const serve = express();

serve.use(express.static('uploads'));

module.exports = serve;

const express = require('express');

const serve = express();

function cacheControl(res, path, stat) {
  res.header('Cache-Control', ['no-cache', 'public', 'max-age=31536000']);
}

serve.use(
  express.static('uploads', {
    setHeaders: cacheControl
  })
);

module.exports = serve;

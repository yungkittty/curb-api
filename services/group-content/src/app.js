const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const medias = require('./medias');
const serve = require('./serve');

const app = express();

app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.send(`${process.env.SERVICE_NAME} endpoint`);
});

app.use('/uploads', serve);
app.use('/images', medias.images);
app.use('/videos', medias.videos);
app.use('/localisation', medias.localisation);
app.use('/avatar', medias.avatar);

module.exports = app;

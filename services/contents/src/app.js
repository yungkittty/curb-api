const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const medias = require('./medias');
const serve = require('./serve');
const controllers = require('./controllers');
const middlewares = require('./middleswares');

const app = express();

app.use(bodyParser.json());
app.use(cors());

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.send(`${process.env.SERVICE_NAME} endpoint`);
});

app.get('/:contentId', controllers.contentRead);
app.patch('/:contentId', controllers.contentUpdate);
app.delete('/:contentId', controllers.contentDelete);

app.use('/uploads', serve);
app.use('/default', serve);
app.use('/images', medias.images);
app.use('/videos', medias.videos);
app.use('/locations', medias.locations);
app.use('/avatars', medias.avatars);
app.use('/texts', medias.texts);

app.use(middlewares.error);

module.exports = app;

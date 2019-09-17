const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const serve = require('./serve');
const controllers = require('./controllers');
const middlewares = require('./middleswares');

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

const whiteList = process.env.DOMAIN_WHITELIST.split(';');

const corsOptions = {
  origin(origin, callback) {
    // if (origin === undefined || whiteList.indexOf(origin) !== -1) {
    callback(null, true);
    // } else {
    // callback(new Error('BAD_CORS'));
    // }
  },
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
  maxAge: 86400,
  methods: ['GET', 'POST', 'DELETE', 'PATCH', 'OPTIONS'],
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.send(`${process.env.SERVICE_NAME} endpoint`);
});

app.get('/:contentId', controllers.contentRead);
app.patch('/:contentId', middlewares.authentication, controllers.contentUpdate);
app.delete(
  '/:contentId/',
  middlewares.authentication,
  middlewares.permissions,
  controllers.contentDelete
);

app.use('/uploads', serve);
app.use('/images', middlewares.authentication, controllers.images);
app.use('/videos', middlewares.authentication, controllers.videos);
app.use('/locations', middlewares.authentication, controllers.locations);
app.use('/avatars', middlewares.authentication, controllers.avatars);
app.use('/texts', middlewares.authentication, controllers.texts);

app.post(
  '/posts/:groupId',
  middlewares.authentication,
  middlewares.permissions,
  controllers.postCreate
);

app.delete(
  '/posts/:postId',
  middlewares.authentication,
  middlewares.permissions,
  controllers.postDelete
);

app.patch(
  '/posts/:postId',
  middlewares.authentication,
  middlewares.permissions,
  controllers.postUpdate
);

app.get(
  '/posts/:postId',
  middlewares.optionalAuthId,
  middlewares.permissions,
  controllers.postRead
);

app.post(
  '/posts/pin/:postId/',
  middlewares.authentication,
  middlewares.permissions,
  controllers.postPin
);

app.post(
  '/posts/reaction/:postId/',
  middlewares.authentication,
  middlewares.permissions,
  controllers.postReaction
);

app.get(
  '/posts/list/:groupId/',
  middlewares.optionalAuthId,
  middlewares.permissions,
  controllers.postList
);

app.use(middlewares.error);

module.exports = app;

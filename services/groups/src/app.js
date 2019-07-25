const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const controllers = require('./controllers');
const middlewares = require('./middlewares');
const initRoutines = require('./routines');

const app = express();

mongoose.set('debug', true);

app.use(bodyParser.json());
app.use(cookieParser());
// const whiteList = process.env.DOMAIN_WHITELIST.split(';');

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

app.get('/list', middlewares.optionalUserId, controllers.groupFromIds);
app.get('/list-random', middlewares.optionalUserId, controllers.groupListRandom);
app.get('/list-global', middlewares.optionalUserId, controllers.groupListGlobal);
app.get('/list-custom', middlewares.authentication, controllers.groupListCustom);

// app.get('/list-media', middlewares.authentication, controllers.groupListMedia);
// app.get('/list-user/', controllers.groupListUser);

app.post('/', middlewares.authentication, controllers.groupCreate);
app.get('/', controllers.groupList);

app.get('/:id', controllers.groupRead);
app.patch('/:id', middlewares.authentication, controllers.groupUpdate);
app.delete('/:id', middlewares.authentication, controllers.groupDelete);

app.post('/avatars/:groupId', controllers.groupAvatars);
app.post('/join/:groupId', middlewares.authentication, controllers.groupJoin);
app.post('/unjoin/:groupId', middlewares.authentication, controllers.groupUnjoin);
app.get('/permissions/:groupId/:userId', controllers.groupPermissions);
app.post('/medias/:groupId/:mediaId', controllers.groupAddPost);
app.delete('/medias/:groupId/:mediaId', controllers.groupDeletePost);
app.get('/invite/:groupId', middlewares.authentication, controllers.groupInvite);

app.use(middlewares.error);

initRoutines();

module.exports = app;

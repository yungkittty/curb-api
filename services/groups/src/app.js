const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(bodyParser.json());
app.use(cors());

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

app.post('/', middlewares.authentication, controllers.groupCreate);
app.get('/', controllers.groupList);
app.get('/:id', controllers.groupRead);
app.patch('/:id', middlewares.authentication, controllers.groupUpdate);
app.delete('/:id', middlewares.authentication, controllers.groupDelete);
app.post('/avatar/:groupId', controllers.groupAvatar);
app.post('/join/:groupId', middlewares.authentication, controllers.groupJoin);
app.post('/unjoin/:groupId', middlewares.authentication, controllers.groupUnjoin);
app.post('/join', middlewares.authentication, controllers.groupTokenJoin);
app.get('/permissions/:groupId/:userId', controllers.groupPermissions);
app.post('/medias/:groupId/:mediaId', controllers.groupAddPost);
app.delete('/medias/:groupId/:mediaId', controllers.groupDeletePost);
app.get(
  '/:groupId/:guestId',
  middlewares.authentication,
  controllers.groupInvite
);

module.exports = app;

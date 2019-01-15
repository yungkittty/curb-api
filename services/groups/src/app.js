const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();
app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

app.post('/', middlewares.authentication, controllers.groupCreate);
app.get('/', controllers.groupList);
app.get('/:id', controllers.groupRead);
app.patch('/:id', middlewares.authentication, controllers.groupUpdate);
app.delete('/:id', middlewares.authentication, controllers.groupDelete);
app.post('/join/:groupId', middlewares.authentication, controllers.groupJoin);
app.post('/join', middlewares.authentication, controllers.groupTokenJoin);
app.get('/permissions/:groupId/:userId', controllers.groupPermissions);
app.post('/medias/:groupId/:mediaId', controllers.groupPost);
app.get(
  '/:groupId/:guestId',
  middlewares.authentication,
  controllers.groupInvite
);

module.exports = app;

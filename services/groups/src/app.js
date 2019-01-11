const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const controllers = require('./controllers');

const app = express();
app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

app.post('/', controllers.groupCreate);
app.get('/', controllers.groupList);
app.get('/:id', controllers.groupRead);
app.patch('/:id', controllers.groupUpdate);
app.delete('/:id', controllers.groupDelete);
app.post('/join/:groupId/:userId', controllers.groupJoin);
app.post('/join', controllers.groupTokenJoin);
app.get('/:groupId/:issuerId/:guestId', controllers.groupInvite);
app.get('/permissions/:groupId/:userId', controllers.groupPermissions);
app.post('/medias/:groupId/:mediaId', controllers.groupPost);

module.exports = app;

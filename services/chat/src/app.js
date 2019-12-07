const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const middlewares = require('./middleswares');
const controllers = require('./controllers');
const app = express();

app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.send(`${process.env.SERVICE_NAME} endpoint`);
});

/***
 * Post group to chat
 * api.curb-app.com/chat/:groupId
 */

app.post('/:groupId', controllers.create);

/***
 * Get posts from group chat
 * api.curb-app.com/chat/:groupId
 */
app.get('/:groupId', controllers.get);

app.use(middlewares.error);

module.exports = app;

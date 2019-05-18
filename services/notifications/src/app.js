const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const middlewares = require('./middleswares');
// const controllers = require('./controllers');

const app = express();
// const http = require('http').Server(app);
// const io = require('socket.io')(http);

// app.use(express.static('test'));

app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.send(`${process.env.SERVICE_NAME} endpoint`);
});

// io.on('connection', function(socket) {
//   console.log('a socket has connected with id :', socket.id);
// });

app.use(middlewares.error);

module.exports = app;

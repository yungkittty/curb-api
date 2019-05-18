require('dotenv').config();
const app = require('./src/app');
const http = require('http').Server(app);
const io = require('socket.io')(http);

http.listen(4000);

// const io = require('socket.io').listen(server);

io.on('connection', function(socket) {
  console.log('a socket has connected with id : ', socket.id);
});

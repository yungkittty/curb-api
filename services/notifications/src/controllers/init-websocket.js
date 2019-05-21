function initWebsocket(server) {
  const io = require('socket.io')(server);

  io.on('connection', function(socket) {
    console.log('a socket has connected with id :', socket.id);
    socket.emit('notifications', { type: 'add', data: 'empty' });
  });
  return io;
}

module.exports = initWebsocket;

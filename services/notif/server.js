const app = require('express')();
const bodyParser = require('body-parser');
const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  socket.on('join', (group) => {
    socket.join(group);
  });

  socket.on('notif', (group, message) => {
    socket.broadcast.to(group).emit('message', message);
  });
});

app.use(bodyParser.json());

app.post('/:groupId/notif', (req, res) => {
  if (!req.body.notif || !req.params.groupId) {
    return res.status(500).end();
  }

  io.to(req.params.groupId).emit('message', req.body.notif);
  return res.status(200).end();
});

server.listen(4000);

const io = require('socket.io-client');
const readline = require('readline');
const socket = io.connect('https://localhost:4000/notifications');

socket.on('connect', function() {
  console.log('Connected to server !');
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line) {
  console.log(line.length);
});

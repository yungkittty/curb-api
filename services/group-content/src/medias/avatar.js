const express = require('express');

const avatar = express();

avatar.use('/group/:groupId', (req, res, next) => {
  console.log('Check right to upload group avatar here'); // eslint-disable-line
  next();
});

avatar.use('/user/:userId', (req, res, next) => {
  console.log('Check right to upload user avatar here'); // eslint-disable-line
  next();
});

avatar.post('/group/:groupId', (req, res) => (
  res.status(200).end()
));

avatar.post('/user/:userId', (req, res) => (
  res.status(200).end()
));

module.exports = avatar;

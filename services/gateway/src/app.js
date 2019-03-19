const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const proxy = require('express-http-proxy');

const app = express();

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

app.use(cors());

app.get('/', (req, res) => {
  res.send(`${process.env.SERVICE_NAME} endpoint`);
});

app.use('/contents', proxy(process.env.CURB_GROUP_CONTENT, {limit: '100mb'}));

app.use(bodyParser.json());

app.use('/accounts', proxy(process.env.CURB_ACCOUNT));
app.use('/users', proxy(process.env.CURB_USERS));
app.use('/groups', proxy(process.env.CURB_GROUPS));

module.exports = app;

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const proxy = require('express-http-proxy');
const cookieParser = require('cookie-parser');

const app = express();

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

const whiteList = [
  'http://localhost:3000',
  'https://localhost:3000',
  'https://curb-app.com'
];
const corsOptions = {
  origin: function(origin, callback) {
    console.log('origin=>', origin);
    if (origin === undefined || whiteList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.log('throw');
      callback(new Error('BAD_CORS'));
    }
  },
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
  maxAge: 86400,
  methods: ['GET', 'POST', 'DELETE', 'PATCH', 'OPTIONS'],
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send(`${process.env.SERVICE_NAME} endpoint`);
});

app.use('/contents', proxy(process.env.CURB_GROUP_CONTENT, {limit: '100mb'}));

app.use(bodyParser.json());
app.use(cookieParser());

app.use('/accounts', proxy(process.env.CURB_ACCOUNT));
app.use('/users', proxy(process.env.CURB_USERS));
app.use('/groups', proxy(process.env.CURB_GROUPS));
app.use('/emailing', proxy(process.env.CURB_EMAILING));

module.exports = app;

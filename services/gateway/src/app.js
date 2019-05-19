const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const proxy = require('http-proxy-middleware');
const cookieParser = require('cookie-parser');

const app = express();

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

const whiteList = process.env.DOMAIN_WHITELIST.split(';');

const corsOptions = {
  origin(origin, callback) {
    console.log('Allow: ', origin);
    if (origin === undefined || whiteList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('BAD_CORS'));
    }
  },
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
  maxAge: 86400,
  methods: ['GET', 'POST', 'DELETE', 'PATCH', 'OPTIONS'],
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send(`${process.env.SERVICE_NAME} endpoint`);
});

// TODO reset la size pour les files , { limit: '100mb' }
app.use(
  '/contents',
  (req, res, next) => {
    console.log('req.socket.bytesRead=>', req.socket.bytesRead);
    console.log('content length=>', req.get('content-length'));
  },
  proxy({ target: process.env.CURB_GROUP_CONTENT }),
);

// OtherWhise break the body for the sub proxy url
// app.use(bodyParser.json());
// app.use(cookieParser());

app.use(
  '/accounts',
  proxy({
    target: process.env.CURB_ACCOUNT,
    logLevel: 'debug',
    pathRewrite: {
      '^/accounts': '',
    },
  }),
);
app.use(
  '/users',
  proxy({
    target: process.env.CURB_USERS,
    pathRewrite: {
      '^/users': '',
    },
  }),
);
app.use(
  '/groups',
  proxy({
    target: process.env.CURB_GROUPS,
    pathRewrite: {
      '^/groups': '',
    },
  }),
);
app.use(
  '/emailing',
  proxy({
    target: process.env.CURB_EMAILING,
    pathRewrite: {
      '^/emailing': '',
    },
  }),
);
app.use(
  '/notifications',
  proxy({
    target: process.env.CURB_NOTIFICATIONS,
    ws: true,
    logLevel: 'debug',
    pathRewrite: {
      '^/notifications': '',
    },
  }),
);

module.exports = app;

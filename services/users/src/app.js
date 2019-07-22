const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

mongoose.set('debug', true);

app.use(bodyParser.json());
app.use(cookieParser());

const corsOptions = {
  origin(origin, callback) {
    // console.log('origin=>', origin);
    // if (origin === undefined || whiteList.indexOf(origin) !== -1) {
    callback(null, true);
    // } else {
    //   callback(new Error('BAD_CORS'));
    // }
  },
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
  maxAge: 86400,
  methods: ['GET', 'POST', 'DELETE', 'PATCH', 'OPTIONS'],
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

// app.get('/', (req, res) => {
//   res.send(`${process.env.SERVICE_NAME} endpoint`);
// });

app.get('/', controllers.userList);
app.post('/', controllers.userCreate);
app.post('/avatars/:userId', controllers.userAvatars);
app.get('/:id', controllers.userRead);
app.patch('/:id', controllers.userUpdate);
app.delete('/:id', controllers.userDelete);

app.use(middlewares.error);

module.exports = app;

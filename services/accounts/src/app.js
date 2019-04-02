const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

const whiteList = [
  'http://localhost:3000',
  'https://localhost:3000',
  'http://curb-app.com',
  'https://curb-app.com'
];
const corsOptions = {
  origin: function(origin, callback) {
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

app.get('/', (req, res) => {
  res.send(`${process.env.SERVICE_NAME} endpoint`);
});

app.get('/:id', controllers.accountRead);
app.post('/email', controllers.accountReadByEmail);
app.delete('/:id', middlewares.validate, controllers.accountDelete);
app.patch('/:id', middlewares.validate, controllers.accountUpdate);
app.post('/sign-in', controllers.signIn);
app.post('/sign-out', middlewares.validate, controllers.signOut);
app.post('/sign-up', controllers.signUp);
app.post('/validate', controllers.validate);

// private route
app.post('/code-verification/:id', controllers.accountCodeVerification);
// private route:
app.post('/code-password/:id', controllers.accountCodePassword);

app.post('/activate/:id', controllers.accountActivate);
app.post('/reset-password/', controllers.accountResetPassword);
app.post('/validate-code-password/', controllers.accountValideCodePassword);

app.get('/auth', middlewares.validate, async (req, res) => {
  console.log('/auth', req.cookies);
  return res.status(200).end();
});

app.use(middlewares.error);

module.exports = app;

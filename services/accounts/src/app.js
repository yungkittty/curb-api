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

const whiteList = process.env.DOMAIN_WHITELIST.split(';');

const corsOptions = {
  origin(origin, callback) {
    // if (origin === undefined || whiteList.indexOf(origin) !== -1) {
    callback(null, true);
    // } else {
    // callback(new Error('BAD_CORS'));
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
app.get('/test', (req, res, next) => {
  console.log(req.baseUrl);
  return res.send(`${process.env.SERVICE_NAME} test`);
});

app.post('/test', (req, res, next) => {
  console.log(req.baseUrl);
  return res.send(`${process.env.SERVICE_NAME} test`);
});

app.get('/', (req, res) => {
  res.send(`${process.env.SERVICE_NAME} endpoint`);
});

// who-am-i
app.get('/me', middlewares.validate, controllers.accountMe);
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

app.post('/activate/', controllers.accountActivate);
app.post('/reset-password/', controllers.accountResetPassword);
app.post('/validate-code-password/', controllers.accountValideCodePassword);

app.use(middlewares.error);

module.exports = app;

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(bodyParser.json());
app.use(cors());

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
app.post('/refresh', controllers.refresh);
app.post('/validate', controllers.validate);

// private route
app.post('/code-verification/:id', controllers.accountCodeVerification);
// private route:
app.post('/code-password/:id', controllers.accountCodePassword);

app.post('/activate/:id', controllers.accountActivate);
app.post('/reset-password/:id', controllers.accountResetPassword);

app.use(middlewares.error);

module.exports = app;

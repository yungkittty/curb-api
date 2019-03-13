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

app.post('/sign-in', controllers.signIn);
app.post('/sign-out', middlewares.validate, controllers.signOut);
app.post('/sign-up', controllers.signUp);
app.post('/refresh', controllers.refresh);
app.post('/validate', controllers.validate);

// TODO
app.post('/code-verification', controllers.codeVerification);
app.get('/validate-account', controllers.validateAccount);

app.delete('/:id', middlewares.validate, controllers.accountDelete);
app.patch('/:id', middlewares.validate, controllers.accountUpdate);

module.exports = app;

const { register } = require('../services/');

async function signUp(req, res) {
  if (!req.body) res.status(401).end();
  if (!req.body.login || !req.body.password) res.status(401).end();
  try {
    const response = await register({
      login: req.body.login,
      password: req.body.password
    });
    if (!response) res.status(409).end();
    res.status(200).end();
  } catch (error) {
    res.status(409).end();
  }
}

module.exports = signUp;

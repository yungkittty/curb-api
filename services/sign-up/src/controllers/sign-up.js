const axios = require('axios');

async function signUp(req, res) {
  if (!req.body) res.status(400).end();
  if (!req.body.name || !req.body.email || !req.body.password) res.status(400).end();
  try {
    const response = await axios({
      method: 'post',
      url: 'http://localhost:3000/users',
      validateStatus: undefined,
      data: {
        email: req.body.email,
        password: req.body.password,
        name: req.body.name
      }
    });
    return res.status(response.status).end();
  } catch (error) {
    res.status(400).end();
  }
}

module.exports = signUp;

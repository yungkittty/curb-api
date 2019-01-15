const axios = require('axios');

async function authentication(req, res, next) {
  if (!req.headers.authorization) return res.status(400).end();
  try {
    const response = await axios({
      method: 'post',
      headers: { Authorization: req.headers.authorization },
      url: 'http://curb-accounts:4000/validate',
      validateStatus: undefined
    });
    if (response.status !== 200) return res.status(response.status).end();
    req.authId = response.data.id;
    return next();
  } catch (error) {
    return res.status(500).end();
  }
}

module.exports = authentication;

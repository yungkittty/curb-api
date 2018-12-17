const verifyEmail = require('../utils/email/verify-email');
const create = require('../services/account/create');

async function signUp(req, res) {
  if (!req.body) res.status(400).end();
  if (!req.body.name || !req.body.email || !req.body.password) {
    res.status(400).end();
  }
  if (!verifyEmail(req.body.email)) return res.status(400).end();
  try {
    const account = await create(req.ip.split(':')[3], {
      email: req.body.email,
      name: req.body.name,
      password: req.body.password
    });
    if (!account) return res.status(400).end();
    return res.status(200).end();
  } catch (error) {
    return res.status(400).end();
  }
}

module.exports = signUp;

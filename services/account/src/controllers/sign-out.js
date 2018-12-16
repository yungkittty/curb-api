const authService = require('../services/account');
const getTokenFromHeader = require('../utils/request/get-token-from-header');

async function signOut(req, res) {
  try {
    const token = getTokenFromHeader(req.headers.authorization);
    if (!token) return res.sendStatus(403).end();
    const response = await authService.logout(token);
    if (!response) return res.status(400).end();
    return res.status(200).end();
  } catch (error) {
    return res.status(400).end();
  }
}

module.exports = signOut;

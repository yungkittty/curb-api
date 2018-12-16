const tokens = require('../services/tokens');
const getTokenFromHeader = require('../utils/request/get-token-from-header');

async function validate(req, res, next) {
  try {
    const token = getTokenFromHeader(req.headers.authorization);
    if (!token) return res.sendStatus(403).end();
    const id = await tokens.verify(token, 'token');
    if (!id) {
      return res.sendStatus(403).end();
    }
    return next();
  } catch (error) {
    return res.sendStatus(400).end();
  }
}

module.exports = validate;

const tokens = require('../services/tokens');
const getTokenFromHeader = require('../utils/request/get-token-from-header');

async function validate(req, res, next) {
  try {
    console.log('0');
    const token = getTokenFromHeader(req.headers.authorization);
    console.log('1');
    if (!token) return res.sendStatus(403).end();
    console.log('2');
    const id = await tokens.verify(token, 'token');
    console.log('~4', id);
    if (!id) {
      return res.sendStatus(403).end();
    }
    return next();
  } catch (error) {
    return res.sendStatus(400).end();
  }
}

module.exports = validate;

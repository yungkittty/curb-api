const tokens = require('../services/tokens');
const getTokenFromHeader = require('../utils/request/get-token-from-header');

async function validate(req, res) {
  try {
    const token = getTokenFromHeader(req.headers.authorization);
    if (!token) return res.sendStatus(403).end();
    const id = await tokens.verify(token, 'token');
    if (!id) {
      return res.sendStatus(403).end();
    }
    return res.sendStatus(200).json({
      id
    });
  } catch (error) {
    return res.sendStatus(403).end();
  }
}

module.exports = validate;

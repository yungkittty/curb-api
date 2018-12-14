const tokens = require('../services/tokens');
const getTokenFromHeader = require('../utils/request/get-token-from-header');

async function validate(req, res) {
  try {
    const token = getTokenFromHeader(req.headers.authorization);
    if (!token) return res.sendStatus(403).end();
    const userId = await tokens.verify(token, 'token');
    if (!userId) {
      return res.sendStatus(403).end();
    }
    return res.sendStatus(200).json({
      id: userId
    });
  } catch (error) {
    return res.sendStatus(403).end();
  }
}

module.exports = validate;

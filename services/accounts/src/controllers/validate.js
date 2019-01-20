const tokens = require('../services/tokens');
const getTokenFromHeader = require('../utils/request/get-token-from-header');

async function validate(req, res) {
  try {
    const token = getTokenFromHeader(req.headers.authorization);
    if (!token) return res.status(403).end();
    const id = await tokens.verify(token, 'token');
    if (!id) {
      return res.status(403).end();
    }
    return res
      .status(200)
      .json({ id })
      .end();
  } catch (error) {
    return res.status(403).end();
  }
}

module.exports = validate;

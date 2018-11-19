const tokens = require('../services/tokens');

async function validate(req, res, next) {
  const { token } = req.body;
  if (!token) {
    return res.send(403).end();
  }
  try {
    const decoded = await tokens.verify(token, 'token');
    if (!decoded) {
      return res.sendStatus(403).end();
    }
    return next();
  } catch (error) {
    return res.sendStatus(403).end();
  }
}

module.exports = validate;

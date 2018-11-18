const tokens = require('../services/tokens');

function validate(req, res, next) {
  const { token, id } = req.body;
  if (!token || !id) {
    return res.send(403).end();
  }
  try {
    const decoded = tokens.verify(token, 'token', id);
    if (!decoded) {
      return res.sendStatus(403).end();
    }
    return next();
  } catch (error) {
    return res.sendStatus(403).end();
  }
}

module.exports = validate;

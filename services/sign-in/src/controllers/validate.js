const jwt = require('jsonwebtoken');
const jwtConfig = require('../configurations/jwt');

function validate(req, res, next) {
  const { token } = req.body;
  if (!token) {
    return res
      .send(403)
      .json({})
      .end();
  }
  try {
    const decoded = jwt.verify(token, jwtConfig.secret);
    if (!decoded) {
      return res
        .sendStatus(403)
        .json({})
        .end();
    }
    return next();
  } catch (error) {
    return res
      .sendStatus(403)
      .json({})
      .end();
  }
}

module.exports = validate;

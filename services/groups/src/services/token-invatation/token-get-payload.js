const jwt = require('jsonwebtoken');

function tokenGetPayload(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = tokenGetPayload;

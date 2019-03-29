const jwt = require('jsonwebtoken');

function tokenGenerate(groupId, issuerId) {
  return jwt.sign({ groupId, issuerId }, process.env.JWT_SECRET, {
    expiresIn: process.env.TOKEN_EXPIRE_DATE
  });
}

module.exports = tokenGenerate;

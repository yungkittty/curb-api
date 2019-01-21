const jwt = require('jsonwebtoken');

function tokenGenerate(groupId, issuerId, guestId) {
  return jwt.sign({ groupId, issuerId, guestId }, process.env.JWT_SECRET);
}

module.exports = tokenGenerate;

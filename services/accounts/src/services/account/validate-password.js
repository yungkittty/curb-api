const bcrypt = require('bcrypt');

async function validatePassword(incomingPassword, trustedPassword) {
  const trusted = await bcrypt.compare(incomingPassword, trustedPassword);
  return trusted;
}

module.exports.validatePassword = validatePassword;

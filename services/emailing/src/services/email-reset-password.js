const { mailResetPassword } = require('./emailing');

async function emailResetPassword({ name, email, id }) {
  const code = await mailResetPassword(name, email);
  return code;
}

module.exports = emailResetPassword;

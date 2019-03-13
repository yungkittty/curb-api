const { mailVerification } = require('./emailing');

async function emailVerification({ name, email, id }) {
  const code = await mailVerification(name, email);
  return code;
}

module.exports = emailVerification;

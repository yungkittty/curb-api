const axios = require('axios');
const generateCode = require('../utils/generate-code');
const { OtherServiceError } = require('../configurations/error');
const sendMail = require('./emailing');
const { getAccountByEmail } = require('../utils/getAccount');

const resetPasswordEmailTemplate = (name, code) => ({
  subject: `Curb: [RESET-PASSWORD] ${name}`,
  text: `Reset Password Code: ${code}`
});

async function mailResetPassword(name, email) {
  const code = await generateCode();
  await sendMail(email, resetPasswordEmailTemplate(name, code));
  return code;
}

async function emailResetPassword(email) {
  const user = await getAccountByEmail(email);
  const code = await mailResetPassword(user.name, user.email);
  const response = await axios({
    method: 'post',
    url: `http://curb-accounts:4000/code-password/${user.id}`,
    validateStatus: undefined,
    headers: { 'Content-Type': 'application/json' },
    data: {
      code
    }
  });
  if (response.status !== 200) {
    throw new OtherServiceError(response);
  }
}

module.exports = emailResetPassword;

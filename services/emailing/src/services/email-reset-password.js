const axios = require('axios');
const { OtherServiceError } = require('../configurations/error');
const { mailResetPassword } = require('./emailing');
const { getAccountByEmail } = require('../utils/getAccount');

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
    throw new OtherServiceError(
      response.data.service,
      response.data.code,
      response.status
    );
  }
}

module.exports = emailResetPassword;

const axios = require('axios');
const { OtherServiceError } = require('../configurations/error');
const { mailResetPassword } = require('./emailing');

async function emailResetPassword({ name, email, id }) {
  const code = await mailResetPassword(name, email);
  const response = await axios({
    method: 'post',
    url: `http://curb-accounts:4000/code-password/${id}`,
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

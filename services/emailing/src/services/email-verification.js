const axios = require('axios');
const { OtherServiceError } = require('../configurations/error');
const { mailVerification } = require('./emailing');

async function emailVerification({ name, email, id }) {
  const code = await mailVerification(name, email);
  const response = await axios({
    method: 'post',
    url: `http://curb-accounts:4000/code-verification/${id}`,
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

module.exports = emailVerification;

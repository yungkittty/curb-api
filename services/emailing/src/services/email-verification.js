const axios = require('axios');
const { ApiError, OtherServiceError } = require('../configurations/error');
const { mailVerification } = require('./emailing');
const { getAccountById } = require('../utils/getAccount');

async function emailVerification(id) {
  const user = await getAccountById(id);
  if (user.active) throw new ApiError('EMAILING_ALREADY_ACTIVE');
  const code = await mailVerification(user.name, user.email);
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

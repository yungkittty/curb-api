const axios = require('axios');
const { ApiError, OtherServiceError } = require('../configurations/error');
const { mailVerification, generateCode } = require('./emailing');
const { getAccountById } = require('../utils/getAccount');

function generateRedirectLink(url, token) {
  return `${url}${token}`;
}

async function emailVerification(id, url) {
  const user = await getAccountById(id);
  if (user.active) throw new ApiError('EMAILING_ALREADY_ACTIVE');
  const code = await generateCode();
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
  await mailVerification(
    user.name,
    user.email,
    generateRedirectLink(url, response.data.token)
  );
}

module.exports = emailVerification;

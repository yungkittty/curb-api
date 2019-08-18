const axios = require('axios');
const { ApiError, OtherServiceError } = require('../configurations/error');
const generateCode = require('../utils/generate-code');
const sendMail = require('./emailing');
const { getAccountById } = require('../utils/getAccount');

const verificationEmailTemplate = (name, redirectLink) => ({
  subject: `Please ${name} verify your email account for Curb`,
  html: `<h1>Redirect link to activate your account:</h1> <a href="${redirectLink}">click here to activate your account</a>`
});

async function mailVerification(name, email, redirectLink) {
  await sendMail(email, verificationEmailTemplate(name, redirectLink));
}

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
    throw new OtherServiceError(response);
  }

  await mailVerification(user.name, user.email, generateRedirectLink(url, response.data.token));
}

module.exports = emailVerification;

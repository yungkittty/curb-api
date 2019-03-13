const axios = require('axios');
const { mailVerification } = require('./emailing');

async function emailVerification({ name, email, id }) {
  const code = mailVerification(name, email);
  const response = await axios({
    method: 'post',
    url: 'http://curb-account:4000/code-verification',
    validateStatus: undefined,
    headers: { 'Content-Type': 'application/json' },
    data: {
      id,
      code
    }
  });
  if (response.status !== 200) throw Error('');
  if (response.data.) // TODO
}

module.exports = emailVerification;

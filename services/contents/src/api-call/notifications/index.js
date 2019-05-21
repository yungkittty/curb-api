const axios = require('axios');
const { OtherServiceError } = require('../../../../../contents/src/configurations/error');

async function notifiation() {
  const response = await axios({
    method: 'post',
    url: process.env.URL_NOTIFICATION,
    validateStatus: undefined
  });
  if (response.status !== 200) {
    throw new OtherServiceError(response.data.service, response.data.code, response.status);
  }
}

module.exports = notifiation;

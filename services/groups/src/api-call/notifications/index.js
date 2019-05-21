const axios = require('axios');
const { OtherServiceError } = require('../../configurations/error');

async function notifiation(data) {
  const response = await axios({
    method: 'post',
    url: process.env.URL_NOTIFICATION,
    validateStatus: undefined,
    data
  });
  if (response.status !== 200) {
    throw new OtherServiceError(response.data.service, response.data.code, response.status);
  }
}

module.exports = notifiation;

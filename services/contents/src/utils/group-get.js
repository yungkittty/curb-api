const axios = require('axios');

async function groupGet(groupId) {
  const response = await axios({
    method: 'get',
    withCredentials: true,
    url: `http://curb-groups:4000/${groupId}`,
    validateStatus: undefined
  });
  return response;
}

module.exports = groupGet;

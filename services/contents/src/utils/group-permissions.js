const axios = require('axios');

async function groupPermissions(groupId, authId) {
  const response = await axios({
    method: 'get',
    withCredentials: true,
    validateStatus: undefined,
    url: `http://curb-groups:4000/permissions/${groupId}/${authId}`
  });
  return response;
}

module.exports = groupPermissions;

const axios = require('axios');

async function groupPermissions(groupId, authId) {
  const response = await axios.get(`http://curb-groups:4000/permissions/${groupId}/${authId}`);
  return response;
}

module.exports = groupPermissions;

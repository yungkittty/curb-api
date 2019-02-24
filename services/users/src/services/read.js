const axios = require('axios');
const User = require('../models/user');

async function read(id, token = undefined) {
  const user = await User.findById(id);
  const headers = token
    ? { Authorization: token, 'Content-Type': 'application/json' }
    : { 'Content-Type': 'application/json' };
  const response = await axios({
    method: 'get',
    url: `http://curb-groups:4000/`,
    headers,
    validateStatus: undefined,
    params: {
      count: 100,
      userId: id
    }
  });
  if (response.status !== 200) return null;
  return { ...user.getPublicFields(), groups: response.data.groups };
}

module.exports = read;

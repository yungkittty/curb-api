const axios = require('axios');
const User = require('../models/user');
const { ApiError, OtherServiceError } = require('../configurations/error');

async function read(id, token = undefined) {
  const user = await User.findById(id);
  if (!user) throw new ApiError('USERS_NOT_FOUND');
  const headers = token
    ? { Cookie: `token=${token}`, 'Content-Type': 'application/json' }
    : { 'Content-Type': 'application/json' };
  const response = await axios({
    method: 'get',
    url: 'http://curb-groups:4000/',
    withCredentials: true,
    headers,
    validateStatus: undefined,
    params: {
      count: 100,
      userId: id
    }
  });
  if (response.status !== 200) {
    throw new OtherServiceError(response);
  }
  return { ...user.getPublicFields(), groups: response.data.groups };
}

module.exports = read;

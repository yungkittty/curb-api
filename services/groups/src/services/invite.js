const axios = require('axios');
const Group = require('../models/group');
const tokenGenerate = require('./token-invatation/token-generate');
const { ApiError, OtherServiceError } = require('../configurations/error');

async function invite(groupId, issuerId, guestId) {
  const group = await Group.findById(groupId);
  if (!group) throw new ApiError('GROUP_NOT_FOUND');
  if (!group.users.includes(issuerId)) {
    throw new ApiError('USER_NOT_IN_GROUP');
  }
  const userResponse = await axios({
    method: 'get',
    url: 'http://curb-users:4000/',
    validateStatus: undefined
  });
  if (userResponse.status !== 200) {
    throw new OtherServiceError(
      userResponse.data.service,
      userResponse.data.code,
      userResponse.status
    );
  }
  return { token: tokenGenerate(groupId, issuerId, guestId) };
}

module.exports = invite;

const axios = require('axios');
const Group = require('../models/group');
const tokenGenerate = require('./token-invitation/token-generate');
const { ApiError, OtherServiceError } = require('../configurations/error');

async function invite(groupId, issuerId) {
  const group = await Group.findById(groupId);
  if (!group) throw new ApiError('GROUPS_NOT_FOUND');
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
  if (!group.users.includes(issuerId)) {
    throw new ApiError('GROUPS_USER_NOT_IN_GROUP');
  }
  return { token: tokenGenerate(groupId, issuerId) };
}

module.exports = invite;

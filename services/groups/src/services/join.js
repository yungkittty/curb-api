const Group = require('../models/group');
const tokenGetPayload = require('./token-invitation/token-get-payload');
const { ApiError } = require('../configurations/error');

async function _getGroup(groupId) {
  const group = await Group.findById(groupId);
  if (!group) throw new ApiError('GROUP_NOT_FOUND');
  return group;
}

async function _join(userId, groupId) {
  const group = await _getGroup(groupId);
  if (group.status === 'private') throw new ApiError('FORBIDEN_JOIN');
  if (group.users.includes(userId)) throw new ApiError('USER_ALREADY_JOIN');
  group.users = [...group.users, userId];
  await group.save();
  return group;
}

async function _tokenJoin(userId, token) {
  const payload = tokenGetPayload(token);
  console.log('payload=>', payload);
  if (!payload) throw new ApiError('INVALID_TOKEN');
  const group = await _getGroup(payload.groupId);
  if (!group.users.includes(payload.issuerId)) {
    throw new ApiError('FORBIDEN_JOIN');
  }
  if (group.users.includes(userId)) throw new ApiError('USER_ALREADY_JOIN');
  group.users = [...group.users, userId];
  await group.save();
  return group;
}

async function join({ groupId, userId, token }) {
  const done = !token
    ? await _join(userId, groupId)
    : await _tokenJoin(userId, token);
  return done;
}

module.exports = join;

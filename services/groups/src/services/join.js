const Group = require('../models/group');
const tokenGetPayload = require('./token-invatation/token-get-payload');

async function _getGroup(groupId) {
  const group = await Group.findById(groupId);
  if (!group) throw new Error('Inexistent ressource');
  return group;
}

async function _join(userId, groupId) {
  const group = await _getGroup(groupId);
  if (group.status === 'private') throw new Error('Unauthorized join');
  group.users = group.users.includes(userId)
    ? group.users
    : [...group.users, userId];
  await group.save();
  return group;
}

async function _tokenJoin(userId, token) {
  const payload = tokenGetPayload(token);
  if (!payload) return null;
  const group = await _getGroup(payload.groupId);
  if (payload.guestId !== userId) return null;
  group.users = group.users.includes(userId)
    ? group.users
    : [...group.users, userId];
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

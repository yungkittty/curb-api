const Group = require('../models/group');
const tokenGetPayload = require('./token-invatation/token-get-payload');

async function _join(groupId, userId) {
  const group = await Group.findById(groupId);
  if (!group) throw new Error('Inexistent ressource');
  else if (group.status === 'private') throw new Error('Unauthorized join');
  group.users = [...group.users, userId];
  await group.save();
  return group;
}

async function _tokenJoin(token) {
  const payload = tokenGetPayload(token);
  if (!payload) return null;
  const group = await Group.findById(payload.groupId);
  if (!group) throw new Error('Inexistent ressource');
  group.users = [...group.users, payload.guestId];
  await group.save();
  return group;
}

async function join({ groupId, userId, token }) {
  const done = !token ? await _join(groupId, userId) : await _tokenJoin(token);
  return done;
}

module.exports = join;

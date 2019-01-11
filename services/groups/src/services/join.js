const Group = require('../models/group');
const tokenGetPayload = require('./token-invatation/token-get-payload');

async function _join(groupId, userId) {
  console.log('normal join');
  const group = await Group.findById(groupId);
  console.log('Found group=>', group);
  if (!group) throw new Error('Inexistent ressource');
  else if (group.status === 'private') throw new Error('Unauthorized join');
  group.users = [...group.users, userId];
  await group.save();
  console.log('Service done');
  return group;
}

async function _tokenJoin(token) {
  console.log('token join');
  const payload = tokenGetPayload(token);
  if (!payload) return null;
  const group = await Group.findById(payload.groupId);
  if (!group) throw new Error('Inexistent ressource');
  group.users = [...group.users, payload.guestId];
  await group.save();
  console.log('Service done');
  return group;
}

async function join(groupId, userId, token) {
  console.log('JOINING ###');
  const done = !token ? await _tokenJoin(groupId, userId) : await _join(token);
  console.log('DONE=>', done);
  return done;
}

module.exports = join;

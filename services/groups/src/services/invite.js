const axios = require('axios');
const Group = require('../models/group');
const tokenGenerate = require('./token-invatation/token-generate');

async function invite(groupId, issuerId, guestId) {
  const group = await Group.findById(groupId);
  console.log('test group');
  if (!group) throw new Error('Inexistent resource');
  console.log(group, 'test issuerId in group');
  if (!group.users.includes(issuerId)) return null;
  console.log('test guestId exist');
  const userResponse = await axios({
    method: 'get',
    url: 'http://curb-users:4000/',
    validateStatus: undefined
  });
  console.log('UserResponse=>', userResponse);
  if (userResponse.status !== 200) {
    return new Error('Inexistent user');
  }
  return { token: tokenGenerate(groupId, issuerId, guestId) };
}

module.exports = invite;

const axios = require('axios');
const Group = require('../models/group');
const tokenGenerate = require('./token-invatation/token-generate');

async function invite(groupId, issuerId, guestId) {
  const group = await Group.findById(groupId);
  if (!group) throw new Error('Inexistent ressource');
  if (!group.users.includes(issuerId)) return null;
  const userResponse = await axios({
    method: 'get',
    url: 'http://curb-users:4000/',
    validateStatus: undefined
  });
  if (userResponse.status !== 200) {
    return new Error('Inexistent user');
  }
  return { token: tokenGenerate(groupId, issuerId, guestId) };
}

module.exports = invite;

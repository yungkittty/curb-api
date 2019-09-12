const { Group } = require('../models/group');
const UserRecommendation = require('../models/user-recommendation');

const tokenGetPayload = require('./token-invitation/token-get-payload');
const ranking = require('./ranking');
const { ApiError } = require('../configurations/error');
const addGroupUser = require('../utils/mongoose/add-group-user');
const isUserInGroup = require('../utils/mongoose/is-user-in-group');

async function getGroup(groupId) {
  const group = await Group.findById(groupId);
  if (!group) throw new ApiError('GROUPS_NOT_FOUND');
  return group;
}

async function basicJoin(userId, groupId) {
  const group = await getGroup(groupId);
  if (group.status === 'private') throw new ApiError('GROUPS_FORBIDEN_JOIN');
  await addGroupUser(group, userId);
  return group._id.toString();
}

async function tokenJoin(userId, token) {
  const payload = tokenGetPayload(token);
  if (!payload) throw new ApiError('GROUPS_INVALID_TOKEN');
  const group = await getGroup(payload.groupId);
  if (!(await isUserInGroup(group._id, payload.issuerId))) throw new ApiError('GROUPS_FORBIDEN_JOIN');
  await addGroupUser(group, userId);
  return group._id.toString();
}

async function join({ groupId, userId, token }) {
  const id = !token ? await basicJoin(userId, groupId) : await tokenJoin(userId, token);
  // userRecommendation => unfill groupId
  const userRecommendation = await UserRecommendation.findOne({ _id: userId });
  if (userRecommendation !== null && userRecommendation.groupIds.includes(groupId)) {
    userRecommendation.groupIds = userRecommendation.map(grpId => grpId !== groupId);
  }
  ranking(groupId);
  return { id };
}

module.exports = join;

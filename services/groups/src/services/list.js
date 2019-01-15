const Group = require('../models/group');

async function list({ page = 1, count = 5, authId, ...filters }) {
  const queryList = Group.find();
  const isUser = !authId ? false : authId === filters.userId;
  const isCreator = !authId ? false : authId === filters.creatorId;
  const skip = (page - 1) * count;
  if (filters.creatorId) queryList.where('creatorId').equals(filters.creatorId);
  if (filters.userId) queryList.where('users').equals(filters.userId);
  if (!isUser && !isCreator) queryList.where('status').equals('public');
  queryList
    .sort('-dateCreation')
    .skip(skip)
    .limit(count);

  queryList.select('_id');
  const results = await queryList.exec();
  const groups = results.map(group => group._id.toString());
  return { groups };
}

module.exports = list;

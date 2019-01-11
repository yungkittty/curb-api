const Group = require('../models/group');

async function list({ maxId, count = 5, authId, ...filters }) {
  const queryList = Group.find();
  const isUser = !authId ? false : authId === filters.userId;
  const isCreator = !authId ? false : authId === filters.creatorId;

  if (filters.creatorId) queryList.where('creatorId').equals(filters.creatorId);
  if (filters.userId) queryList.where('users').equals(filters.userId);
  if (maxId) queryList.where('_id').gt(maxId);

  if (!isUser && !isCreator) queryList.where('status').equals('public');
  queryList.limit(count).sort('-dateCreation');

  const test2 = await queryList.exec();
  console.log('second request=>', test2);

  // TODO chain with upper
  queryList.select('_id');

  const results = await queryList.exec();
  const groups = results.map(group => group._id.toString());
  return { groups };
}

module.exports = list;

const Group = require('../models/group');

async function global(count, mediaType = undefined) {
  const queryList = Group.find({});
  if (mediaType !== undefined) queryList.where('mediaTypes').equals(mediaType);
  queryList
    .where('status')
    .equals('public')
    .sort('-rank')
    .limit(count);
  const results = await queryList.exec();
  const groups = results.map(group => group._id.toString());
  return { category: mediaType === undefined ? 'global' : mediaType, data: groups };
}

async function globalTrending(count) {
  // Get trending for each mediaTypes
  const response = await Promise.all([
    global(count),
    global(count, 'location'),
    global(count, 'image'),
    global(count, 'text'),
    global(count, 'video')
  ]);
  return response;
}

module.exports = globalTrending;

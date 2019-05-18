const Group = require('../models/group');

async function aggregateUserInGroup(userId, pipeline) {
  // AM => $unwid: userId puis $match $eq userId (format) ?
  const groupIdsForUser = await Group.aggregate([
    {
      $match: {
        users: { $in: [userId] }
      }
    },
    ...pipeline,
    {
      $group: { _id: null, ids: { $push: '$_id' } }
    },
    {
      $project: { ids: true, _id: false }
    }
  ]);
  const { ids } = groupIdsForUser[0] || [];
  return ids;
}

module.exports = aggregateUserInGroup;

const { Group } = require('../../models/group');

async function countGroupUser(group) {
  const aggregation = await Group.aggregate([
    {
      $match: { _id: group._id }
    },
    {
      $project: {
        _id: false,
        count: { $size: '$users' }
      }
    }
  ]);
  return aggregation[0].count;
}

module.exports = countGroupUser;

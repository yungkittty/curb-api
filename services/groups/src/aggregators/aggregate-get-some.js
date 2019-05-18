const Group = require('../models/group');

async function aggregateGetSome(count = 1, pipeline = []) {
  const groupIdsForUser = await Group.aggregate([
    ...pipeline,
    {
      $sample: { size: count }
    },
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

module.exports = aggregateGetSome;

const Group = require('../models/group');
const pagination = require('../utils/pagination');

async function listRandom({ page = 1, count = 5, active = undefined }) {
  const list = await Group.aggregate([
    {
      $match: {
        status: { $ne: 'private' }
        // category: category === undefined ? null : { $eq: category }
      }
    },
    {
      $sort: { rank: -1 }
    },
    ...pagination(page, count),
    {
      $group: { _id: null, ids: { $push: '$_id' } }
    },
    {
      $project: { ids: true, _id: false }
    }
  ]);

  const { ids = [] } = list[0] || [];

  return {
    count,
    page,
    groups: ids.reduce((acc, id) => acc.concat(id), [])
  };
}

module.exports = listRandom;

const { Group } = require('../models/group');

const pagination = require('../utils/pagination');

async function listGlobal({
  page = 1, count = 5, category = undefined, authId = undefined
}) {
  const groupGlobalIds = await Group.aggregate([
    {
      $match: {
        status: { $ne: 'private' },
        category: category === undefined ? null : { $eq: category },
        users: authId ? { $ne: authId } : { $ne: null }
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

  const { ids = [] } = groupGlobalIds[0] || [];

  return {
    count,
    page,
    section: 'global',
    groups: ids.reduce((acc, id) => acc.concat(id), [])
  };
}

module.exports = listGlobal;

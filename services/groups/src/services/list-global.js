const { Group } = require('../models/group');

const pagination = require('../utils/pagination');

async function listGlobal({
  page = 1, count = 5, category = undefined, authId = undefined
}) {
  const match = category === undefined
    ? {
      $match: {
        status: { $ne: 'private' },
        users: authId ? { $ne: authId } : { $ne: null }
      }
    }
    : {
      $match: {
        status: { $ne: 'private' },
        category: { $eq: category },
        users: authId ? { $ne: authId } : { $ne: null }
      }
    };
  const groupGlobalIds = await Group.aggregate([
    match,
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
    data: ids.reduce((acc, id) => acc.concat(id), [])
  };
}

module.exports = listGlobal;

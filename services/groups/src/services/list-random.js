const aggregateGetSome = require('../aggregators/aggregate-get-some');

async function listRandom({
  page = 1, count = 5, category = undefined, authId = undefined
}) {
  const pipeline = category === undefined
    ? [
      {
        $match: {
          status: { $ne: 'private' },

          users: authId ? { $ne: authId } : { $ne: null }
        }
      },
      {
        $skip: page === 1 ? 0 : page * count * 2
      },
      {
        $limit: page === 1 ? count * 2 : page * count * 2
      }
    ]
    : [
      {
        $match: {
          status: { $ne: 'private' },
          category: { $eq: category },
          users: authId ? { $ne: authId } : { $ne: null }
        }
      },
      {
        $skip: page === 1 ? 0 : page * count * 2
      },
      {
        $limit: page === 1 ? count * 2 : page * count * 2
      }
    ];

  const randomGroupIds = await aggregateGetSome(count, pipeline);
  return {
    count,
    page,
    section: 'random',
    groups: randomGroupIds.reduce((acc, id) => acc.concat(id), [])
  };
}

module.exports = listRandom;

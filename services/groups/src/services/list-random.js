const aggregateGetSome = require('../aggregators/aggregate-get-some');

async function listRandom({
  page = 1, count = 5, category = undefined, authId = undefined
}) {
  const pipeline = [
    {
      $match: {
        status: { $ne: 'private' },
        category: category === undefined ? null : { $eq: category },
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
    data: randomGroupIds.reduce((acc, id) => acc.concat(id), [])
  };
}

module.exports = listRandom;

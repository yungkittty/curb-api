const User = require('../models/user');
const pagination = require('../utils/pagination');

async function listUser({ page = 1, count = 5 }) {
  const groupGlobalIds = await User.aggregate([
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
    data: ids.reduce((acc, id) => acc.concat(id), [])
  };
}

module.exports = listUser;

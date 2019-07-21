const Group = require('../models/group');
const pagination = require('../utils/pagination');

async function listCustom({
  page = 1, count = 5, category = undefined, userId
}) {
  const groupCustomIds = await Group.aggregate([
    {
      $match: { $users: { $eq: userId } }
    }
  ]);
  const { ids = [] } = groupCustomIds[0] || [];
  return {
    count,
    page,
    section: 'custom',
    groups: ids.reduce((acc, id) => acc.concat(id), [])
  };
}

module.exports = listCustom;

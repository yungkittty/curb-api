const mongoose = require('mongoose');
const UserRecommendation = require('../models/user-recommendation');

async function listCustom({
  page = 1, count = 5, category = undefined, userId
}) {
  const skip = (page - 1) * count;

  const groupCustomIds = await UserRecommendation.aggregate([
    {
      $match: { _id: { $eq: new mongoose.Types.ObjectId(userId) } }
    },
    {
      $project: { _id: 0, ids: { $slice: ['$groupIds', skip, count] } }
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

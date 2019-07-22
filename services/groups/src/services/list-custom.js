const mongoose = require('mongoose');
const UserRecommendation = require('../models/user-recommendation');
const listRandom = require('./list-random');

async function listCustom({
  page = 1, count = 5, category = undefined, userId
}) {
  const response = { page, count, section: 'custom' };
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

  if (ids.length === 0) {
    const recommendation = await UserRecommendation.findOne({ _id: userId });
    if (recommendation === null) {
      const { groups: groupIds } = await listRandom({ page: 1, count: 50 });
      const newRecommendation = new UserRecommendation({
        _id: mongoose.Types.ObjectId(userId),
        groupIds
      });
      await newRecommendation.save();
      return await listCustom({
        page,
        count,
        category,
        userId
      });
    }
    if (recommendation.groupIds.length === 0) {
      const { groups: groupIds } = await listRandom({ page: 1, count: 50 });
      recommendation.groupIds = groupIds;
      await recommendation.save();
      return await listCustom({
        page,
        count,
        category,
        userId
      });
    }
  }

  return { ...response, groups: ids.reduce((acc, id) => acc.concat(id), []) };
}

module.exports = listCustom;

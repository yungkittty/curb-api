const mongoose = require('mongoose');
const UserRecommendation = require('../models/user-recommendation');
const listRandom = require('./list-random');
const customizeTrending = require('./customize-trending');

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
  if (ids === null || ids.length === 0) {
    const recommendation = await UserRecommendation.findOne({ _id: userId });
    if (recommendation === null) {
      const { groups: groupIds } = await listRandom({ page, count });
      const newRecommendation = new UserRecommendation({
        _id: mongoose.Types.ObjectId(userId),
        groupIds
      });
      await newRecommendation.save();
      return { ...response, groups: groupIds };
    }
    if (recommendation.groupIds.length === 0) {
      const { groups } = await listRandom({ page, count });
      recommendation.groupIds = groups;
      await recommendation.save();
      return { ...response, groups };
    }
  }
  return { ...response, groups: ids.reduce((acc, id) => acc.concat(id), []) };
}

module.exports = listCustom;

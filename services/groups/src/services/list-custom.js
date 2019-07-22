const mongoose = require('mongoose');
const UserRecommendation = require('../models/user-recommendation');
const listRandom = require('./list-random');

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

  if (ids.length === 0 && (await UserRecommendation.findOne({ _id: userId })) === null) {
    const { groups: groupIds } = await listRandom({ page: 1, count: 50 });
    const newRecommendation = new UserRecommendation({
      _id: mongoose.Types.ObjectId(userId),
      groupIds
    });
    await newRecommendation.save();
    const response = await listCustom({
      page,
      count,
      category,
      userId
    });
    return response;
  }
  return {
    count,
    page,
    section: 'custom',
    groups: ids.reduce((acc, id) => acc.concat(id), [])
  };
}

module.exports = listCustom;

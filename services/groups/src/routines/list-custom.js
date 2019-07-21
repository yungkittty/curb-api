const axios = require('axios');
const mongoose = require('mongoose');
const UserRecommendation = require('../models/user-recommendation');
const { OtherServiceError } = require('../configurations/error');
const customizeTrending = require('../services/customize-trending');

async function getUserList(page = 1) {
  const response = await axios({
    method: 'get',
    withCredentials: true,
    // headers: { Cookie: `token=${req.cookies.token}` },
    url: 'http://curb-users:4000/',
    validateStatus: undefined,
    params: {
      page,
      count: 5
    }
  });
  if (response.status !== 200) {
    throw new OtherServiceError(response.data.service, response.data.code, response.status);
  }
  return response.data.data;
}

async function getAllUserIds() {
  let userIds = [];
  for (
    let ids = await getUserList(), page = 1;
    ids.length !== 0;
    ids = await getUserList(page++), userIds = [...userIds, ...ids]
  );
  return userIds;
}

async function fillUsersRecommendation() {
  const userIds = await getAllUserIds();
  userIds.forEach(async (userId) => {
    // call list-custom
    const groupIds = await customizeTrending(50, userId);
    // console.log('TYPEOF', typeof groupIds, groupIds);
    console.log('###############"done trending=>', groupIds);
    const doc = await UserRecommendation.findOne({ _id: userId });
    if (doc !== null) {
      doc.groupIds = groupIds;
      // console.log('DONE=>', doc);
      await doc.save();
    } else {
      const newRecommendation = new UserRecommendation({
        _id: mongoose.Types.ObjectId(userId),
        groupIds
      });
      await newRecommendation.save();
    }
  });
}

// get all users
async function userRecommendationRoutine() {
  console.log('call~~~~~~~');
  await fillUsersRecommendation();
}

async function newUserRecommendationRoutine(userId) {
  const groupIds = customizeTrending(50, userId);
  const newRecommendation = new UserRecommendation({
    _id: mongoose.Types.ObjectId(userId),
    groupIds
  });
  await newRecommendation.save();
}

module.exports = {
  userRecommendationRoutine,
  newUserRecommendationRoutine
};

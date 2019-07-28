const mongoose = require('mongoose');
const { Group } = require('../models/group');

// Ajouter optional ID,
async function listRandom({
  page = 1,
  count = 5,
  active = undefined,
  groupId,
  userId = undefined
}) {
  const response = { page, count };
  const skip = (page - 1) * count;
  const list = await Group.aggregate([
    {
      $match: {
        _id: mongoose.Types.ObjectId(groupId),
        status: { $ne: 'private' }
      }
    },
    {
      $project: { _id: false, users: { $slice: ['$users', skip, count] } }
    }
  ]);

  const { users = [] } = list[0] || [];
  console.log('===<', users);
  return { ...response, data: users };
}

module.exports = listRandom;

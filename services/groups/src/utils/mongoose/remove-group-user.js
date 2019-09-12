const { Group } = require('../../models/group');

async function removeGroupUser(group, userId) {
  await Group.updateOne(
    {
      _id: group._id
    },
    {
      $pull: {
        users: {
          userId: { $eq: userId }
        }
      }
    }
  );
  await group.save();
}

module.exports = removeGroupUser;

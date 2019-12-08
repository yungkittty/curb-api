const { Group } = require('../models/group');
const { ApiError } = require('../configurations/error');
const isUserInGroup = require('../utils/mongoose/is-user-in-group');

async function read(groupId, userId = undefined) {
  const group = await Group.findById(groupId);
  if (!group) throw new ApiError('GROUPS_NOT_FOUND');
  // const userInGroup = await isUserInGroup(group._id, userId);
  // if (group.status === 'private' && (!userInGroup || !userId)) {
  //   // TODO Change after DELIVERY @(private / 'ghost' / public) :
  //   const {
  //     id,
  //     name,
  //     avatarUrl,
  //     theme,
  //     status,
  //     description,
  //     category,
  //     users
  //   } = group.getPublicFields();
  //   return {
  //     id,
  //     name,
  //     avatarUrl,
  //     theme,
  //     status,
  //     description,
  //     category,
  //     // users: group.users.length,
  //     users: users.map(user => user.userId)
  //   };
  //   // throw new ApiError('GROUPS_FORBIDEN_READ');
  // }
  // return { ...group.getPublicFields(), users: userNumber };
  const grp = group.getPublicFields();
  return {
    ...grp,
    users: grp.users.map(user => user.userId)
  };
}

module.exports = read;

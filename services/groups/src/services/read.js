const { Group } = require('../models/group');
const { ApiError } = require('../configurations/error');
const isUserInGroup = require('../utils/mongoose/is-user-in-group');

async function read(groupId, userId = undefined) {
  const group = await Group.findById(groupId);
  if (!group) throw new ApiError('GROUPS_NOT_FOUND');
  const userInGroup = await isUserInGroup(group._id, userId);
  if (group.status === 'private' && (!userInGroup || !userId)) {
    // TODO Change after DELIVERY @(private / 'ghost' / public) :
    const {
      id, name, avatarUrl, theme, status, description, category
    } = group.getPublicFields();
    return {
      id,
      name,
      avatarUrl,
      theme,
      status,
      description,
      category
    };
    // throw new ApiError('GROUPS_FORBIDEN_READ');
  }
  return group.getPublicFields();
}

module.exports = read;

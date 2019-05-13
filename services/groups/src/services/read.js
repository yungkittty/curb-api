const Group = require('../models/group');
const { ApiError } = require('../configurations/error');

async function read(groupId, userId = undefined) {
  const group = await Group.findById(groupId);
  if (!group) throw new ApiError('GROUPS_NOT_FOUND');
  if (group.status === 'private' && !userId && !group.users.includes(userId)) {
    // TODO Change after DELIVERY @(private / 'ghost' / public) :
    const {
      name, avatarUrl, theme, status
    } = group.getPublicFields();
    return {
      name,
      avatarUrl,
      theme,
      status
    };
    // throw new ApiError('GROUPS_FORBIDEN_READ');
  }
  return group.getPublicFields();
}

module.exports = read;

const Group = require('../models/group');
const { ApiError } = require('../configurations/error');

async function read(groupId, userId = undefined) {
  const group = await Group.findById(groupId);
  if (!group) throw new ApiError('GROUPS_NOT_FOUND');
  if (group.status === 'private' && (!group.users.includes(userId) || !userId)) {
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

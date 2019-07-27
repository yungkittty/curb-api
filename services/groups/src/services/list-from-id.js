const { Group } = require('../models/group');
const isUserInGroup = require('../utils/mongoose/is-user-in-group');

async function listFromId(groupIds, userId = undefined) {
  const groups = await Group.find({
    _id: { $in: groupIds }
  });

  const response = groups.map(async (group) => {
    const userInGroup = await isUserInGroup(groupIds, userId);
    if (group.status === 'private' && (!userInGroup || !userId)) {
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
    }
    // TODO when group are private/ghost/public
    // skip ==>
    return group.getPublicFields();
  });
  return response;
}

module.exports = listFromId;

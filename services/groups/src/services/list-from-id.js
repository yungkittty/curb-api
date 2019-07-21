const Group = require('../models/group');

async function listFromId(groupIds, userId = undefined) {
  console.log(groupIds, typeof groupIds);
  const groups = await Group.find({
    _id: { $in: groupIds }
  });

  const response = groups.map((group) => {
    if (group.status === 'private' && (!group.users.includes(userId) || !userId)) {
      const {
        id, name, avatarUrl, theme, status
      } = group.getPublicFields();
      return {
        id,
        name,
        avatarUrl,
        theme,
        status
      };
    }
    // TODO when group are private/ghost/public
    // skip ==>
    return group.getPublicFields();
  });
  return response;
}

module.exports = listFromId;

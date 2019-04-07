const Group = require('../models/group');

async function create(group) {
  const newGroup = new Group({
    creatorId: group.creatorId,
    name: group.name,
    status: group.status,
    mediaTypes: group.mediaTypes,
    theme: group.theme,
    dateCreation: new Date()
  });
  newGroup.users = [...newGroup.users, group.creatorId];
  try {
    await newGroup.save();
  } catch (error) {
    throw error;
  }
  return { id: newGroup._id.toString() };
}

module.exports = create;

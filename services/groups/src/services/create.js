const { Group } = require('../models/group');
const addGroupUser = require('../utils/mongoose/add-group-user');

async function create(group) {
  const newGroup = new Group({
    creatorId: group.creatorId,
    name: group.name,
    status: group.status,
    mediaTypes: group.mediaTypes,
    theme: group.theme,
    description: group.description,
    category: group.category,
    dateCreation: new Date()
  });
  await newGroup.save();
  await addGroupUser(newGroup, group.creatorId);

  try {
    await newGroup.save();
  } catch (error) {
    throw error;
  }
  return { id: newGroup._id.toString() };
}

module.exports = create;

const Group = require('../models/group');

async function create(group) {
  const newGroup = new Group({
    creatorId: group.creatorId,
    name: group.name,
    status: group.status,
    dateCreation: new Date()
  });
  newGroup.users = [...newGroup.users, group.creatorId];
  await newGroup.save();
  return { id: newGroup._id };
}

module.exports = create;

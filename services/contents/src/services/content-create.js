const { Content } = require('../models/content');

async function contentCreate(name, inputgroupId, inputuserId, inputData) {
  const newContent = new Content({
    creatorId: inputuserId,
    groupId: inputgroupId,
    dateCreation: new Date(),
    type: name,
    data: inputData
  });
  await newContent.save();
  return newContent;
}

module.exports = contentCreate;

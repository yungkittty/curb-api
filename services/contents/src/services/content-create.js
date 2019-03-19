const Content = require('../models/content');

async function contentCreate(name, req) {
  const newContent = new Content(
    {
      creatorId: req.params.userId,
      groupId: req.params.groupId,
      dateCreation: new Date(),
      type: name,
      file: `/contents/uploads/groups/${req.params.groupId}/${name}/${req.params.userId}/${req.file.filename}`
    }
  );
  const saved = await newContent.save();
  if (!saved) return null;
  return newContent;
}

module.exports = contentCreate;

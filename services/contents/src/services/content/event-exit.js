const { Content } = require('../../models/content');
const { ApiError } = require('../../configurations/error');

async function eventExit(contentId, userId) {
  const content = await Content.findOne({ _id: contentId });
  if (content === null) throw new ApiError('CONTENTS_NOT_FOUND');
  if (content.type !== 'event') {
    throw new ApiError('CONTENTS_FORBIDDEN_OPERATION');
  }
  content.meta.splice(content.meta.indexOf(userId), 1);
  const serialized = JSON.parse(content.data);
  const d = { ...serialized, participants: content.meta };
  content.data = JSON.stringify(d);
  await content.save();
  return content.getPublicFields();
}

module.exports = eventExit;

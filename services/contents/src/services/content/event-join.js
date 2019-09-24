const { Content } = require('../../models/content');
const { ApiError } = require('../../configurations/error');

async function eventJoin(contentId, userId) {
  const content = await Content.findOne({ _id: contentId });
  if (content === null) throw new ApiError('CONTENTS_NOT_FOUND');
  if (content.type !== 'events') throw new ApiError('CONTENTS_FORBIDDEN_OPERATION');
  const added = content.meta.addToSet(userId);
  if (added.length === 0) {
    // user already reacted to the post
    throw new ApiError('CONTENTS_FORBIDEN_OPERATION');
  }
  const serialized = JSON.parse(content.data);
  const d = { ...serialized, participants: content.meta };
  await content.save();
  return { data: JSON.stringify(d) };
}

module.exports = eventJoin;

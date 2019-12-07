const { Content } = require('../../models/content');
const { ApiError } = require('../../configurations/error');

function canVote(meta, userId) {
  return Object.entries(meta).reduce((acc, [option, array]) => {
    if (!acc) return false;
    const result = array.filter(id => id === userId).length === 0;
    return result;
  }, true);
}

async function vote(contentId, userId, option) {
  const content = await Content.findOne({ _id: contentId });
  if (!content) throw new ApiError('CONTENT_NOT_FOUND');
  if (content.type !== 'poll') {
    throw new ApiError('CONTENTS_FORBIDDEN_OPERATION');
  }
  const data = JSON.parse(content.data);
  if (!data.options.find(op => op === option)) {
    throw new ApiError('CONTENTS_FORBIDDEN_OPERATION');
  }
  if (!canVote(content.meta[0], userId)) {
    throw new ApiError('CONTENTS_FORBIDDEN_OPERATION');
  }
  content.update({
    $addToSet: {}
  });
  content.meta[0][option].push(userId);
  const updatedData = { ...data, answers: content.meta[0] };
  await content.markModified('meta');
  await content.save();
  return { data: JSON.stringify(updatedData) };
}

module.exports = vote;

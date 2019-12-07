const { Content } = require('../../models/content');
const { ApiError } = require('../../configurations/error');

function canVote(meta, userId) {
  return (
    meta.filter(option => option.filter(id => id === userId).length === 0)
      .length === 0
  );
}

async function vote(contentId, userId, option) {
  const content = await Content.findOne({ _id: contentId });
  if (!content) throw new ApiError('CONTENT_NOT_FOUND');
  if (content.type !== 'polls') {
    throw new ApiError('CONTENTS_FORBIDDEN_OPERATION');
  }
  const data = JSON.parse(content.data);
  if (data.options.find(op => op === option)) {
    throw new ApiError('CONTENTS_FORBIDDEN_OPERATION');
  }
  if (!canVote(content.meta, userId)) {
    throw new ApiError('CONTENTS_FORBIDDEN_OPERATION');
  }
  const added = content.meta[option].addToSet(userId);
  const updatedData = { ...data, answers: added };
  await content.save();
  return { data: JSON.stringify(updatedData) };
}

module.exports = vote;

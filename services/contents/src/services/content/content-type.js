const { Content } = require('../../models/content');
const { ApiError } = require('../../configurations/error');

async function contentType(contentId) {
  const content = await Content.findOne({ _id: contentId });
  if (content === null) throw new ApiError('CONTENTS_NOT_FOUND');
  return content.type;
}

module.exports = contentType;

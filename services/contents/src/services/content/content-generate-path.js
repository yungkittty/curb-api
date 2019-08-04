const { Post } = require('../../models/post');
const { ApiError } = require('../../configurations/error');

async function contentGeneratePath(postId, type) {
  const { groupId = null } = await Post.findOne({ _id: postId });
  if (groupId === null) throw new ApiError('CONTENTS_FORBIDDEN_WRITE');
  const path = `./uploads/groups/${groupId}/${postId}/${type}`;
  return path;
}

module.exports = contentGeneratePath;

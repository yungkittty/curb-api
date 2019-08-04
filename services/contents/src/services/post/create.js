const { Post } = require('../../models/post');
const groupPostAdd = require('../../utils/group-post-add');
const { OtherServiceError } = require('../../configurations/error');

async function create(token, groupId, creatorId) {
  const post = new Post({
    groupId,
    creatorId
  });
  const response = await groupPostAdd(token, groupId, post.id);
  if (response.status !== 200) {
    throw new OtherServiceError(
      response.data.service,
      response.data.code,
      response.status
    );
  }
  await post.save();
  return { id: post.id };
}

module.exports = create;

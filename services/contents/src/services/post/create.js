const { Post } = require('../../models/post');

async function create(groupId, creatorId) {
  const post = new Post({
    groupId,
    creatorId
  });
  await post.save();
  // TODO CALL GROUP ADD POST;
  return { id: post.id };
}

module.exports = create;

const deletePost = require('../services/delete-post');
const { ApiError } = require('../configurations/error');

async function groupAddPost(req, res, next) {
  if (!req.params.groupId || !req.params.mediaId) {
    return next(new ApiError('GROUPS_BAD_PARAMETER'));
  }
  try {
    await deletePost(req.params.groupId, req.params.mediaId);
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = groupAddPost;

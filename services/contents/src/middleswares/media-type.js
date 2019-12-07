const { OtherServiceError, ApiError } = require('../configurations/error');
const { Post } = require('../models/post');
const groupGet = require('../utils/group-get');

// Inject req.post and req.group and verify mediaType for the upload request
async function mediaType(req, res, next) {
  try {
    if (!req.params.postId) return next();
    const post = await Post.findById(req.params.postId);
    if (!post) return next(new ApiError('POSTS_NOT_FOUND'));
    const response = await groupGet(post.groupId);
    if (response.status !== 200) {
      throw new OtherServiceError(response);
    }
    // mediaType is extracted from the express routing:
    const type = req.baseUrl.slice(1).slice(0, -1);
    if (!response.data.mediaTypes.includes(type)) {
      throw new ApiError('POSTS_UPLOAD_BAD_MEDIATYPE');
    }
    req.post = post;
    req.group = response.data;
    return next();
  } catch (error) {
    return next(error);
  }
}

module.exports = mediaType;

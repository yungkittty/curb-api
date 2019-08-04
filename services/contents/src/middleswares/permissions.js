const { OtherServiceError, ApiError } = require('../configurations/error');
const groupPermissions = require('../utils/group-permissions');
const { Post } = require('../models/post');
const { Content } = require('../models/content');

async function getPermissions(groupId, authId) {
  const response = await groupPermissions(groupId, authId);
  if (response.status !== 200) {
    throw new OtherServiceError(response.data.service, response.data.code, response.status);
  }
  return response.data;
}

async function permissions(req, res, next) {
  try {
    if (!req.authId) {
      return next(new ApiError('CONTENTS_FORBIDEN_OPERATION'));
    }
    if (req.params.groupId) {
      req.permissions = await getPermissions(req.params.groupId, req.authId);
      return next();
    }
    if (req.params.postId) {
      const post = await Post.findOne({ _id: req.params.postId });
      if (post === null) {
        return next(new ApiError('CONTENTS_NOT_FOUND'));
      }
      req.permissions = await getPermissions(post.groupId, req.authId);
      return next();
    }
    if (req.params.contentId) {
      const content = await Content.findOne({ _id: req.params.contentId })
        .populate('post')
        .exec();
      req.permissions = await getPermissions(content.post.groupId, req.authId);
      return next();
    }
    return next(new ApiError('CONTENTS_FORBIDEN_OPERATION'));
  } catch (error) {
    return next(error);
  }
}

module.exports = permissions;

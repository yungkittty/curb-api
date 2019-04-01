const addPost = require('../services/add-post');
const { ApiError } = require('../configurations/error');

async function groupPost(req, res, next) {
  if (!req.params.groupId || !req.params.mediaId || !req.body.type) {
    return next(new ApiError('BAD_PARAMETER'));
  }
  try {
    await addPost(req.params.groupId, req.params.mediaId, req.body.type);
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = groupPost;

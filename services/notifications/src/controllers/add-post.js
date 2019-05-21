const { apiError } = require('../configurations/error');
// Will hit addPost when a new media has been posted in a group
async function addPost(req, res, next) {
  if (!req.body.groupId || req.body.userId || req.body.type) {
    return next(new apiError('BAD_PARAMETER'));
  }
  // WS stuff ws.to('/groupId', "new meda from userId in groupId with type :")
}

module.exports = addPost;

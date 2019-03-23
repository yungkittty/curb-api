const avatar = require('../services/avatar');
const { ApiError } = require('../configurations/error');

<<<<<<< HEAD:services/groups/src/controllers/group-avatars.js
async function groupAvatars(req, res) {
  if (!req.body.avatarUrl || !req.params.groupId) return res.status(400).end();
=======
async function groupAvatar(req, res, next) {
  if (!req.body.avatarUrl || !req.params.groupId) {
    return next(new ApiError('BAD_PARAMETER'));
  }
>>>>>>> develop:services/groups/src/controllers/group-avatar.js
  try {
    await avatar(req.params.groupId, req.body.avatarUrl);
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = groupAvatars;

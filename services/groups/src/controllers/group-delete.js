const remove = require('../services/remove');
const { ApiError } = require('../configurations/error');

/**
 *
 * @api {DELETE} /groups/:id GROUPS DELETE
 * @apiName GROUPS2
 * @apiGroup GROUPS
 * @apiVersion  0.1.0
 *
 *
 * @apiParam {String} groupId //
 *
 * @apiSuccess (200) {String} OK
 *
 * @apiError BAD_PARAMETER 400
 * @apiError GROUP_NOT_FOUND 400
 * @apiError USER_NOT_CREATOR 403
 *
 */

async function groupDelete(req, res, next) {
  if (!req.params.id) return next(new ApiError('BAD_PARAMETER'));
  try {
    await remove(req.params.id, req.authId);
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = groupDelete;

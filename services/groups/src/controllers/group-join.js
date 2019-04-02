const join = require('../services/join');
const { ApiError } = require('../configurations/error');

/**
 *
 * @api {POST} /groups/join GROUPS JOIN
 * @apiName GROUPS6
 * @apiGroup GROUPS
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} userId from token header
 * @apiParam  {String} groupId //
 *
 *
 * @apiSuccess (200) {String} OK
 *
 * @apiError BAD_PARAMETER 400
 * @apiError FORBIDEN_JOIN 403
 * @apiError USER_ALREADY_JOIN 403
 * @apiError UNDEFINED 500
 *
 */

async function groupJoin(req, res, next) {
  if (!req.params.groupId) {
    return next(new ApiError('BAD_PARAMETER'));
  }
  try {
    await join({
      groupId: req.params.groupId,
      userId: req.authId
    });

    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = groupJoin;

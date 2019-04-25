const join = require('../services/join');
const { ApiError } = require('../configurations/error');

/**
 *
 * @api {POST} /groups/join/:id GROUPS JOIN
 * @apiName GROUPS6
 * @apiGroup GROUPS
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} groupId
 *
 *
 * @apiSuccess (200) {String} groupId
 *
 * @apiError BAD_PARAMETER 400
 * @apiError FORBIDEN_JOIN 403
 * @apiError USER_ALREADY_JOIN 403
 * @apiError UNDEFINED 500
 *
 */

async function groupJoin(req, res, next) {
  if (!req.params.groupId) {
    return next(new ApiError('GROUPS_BAD_PARAMETER'));
  }
  try {
    const response = await join({
      groupId: req.params.groupId,
      userId: req.authId
    });

    return res
      .status(200)
      .json(response)
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = groupJoin;

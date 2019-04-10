const join = require('../services/join');
const { ApiError } = require('../configurations/error');

/**
 *
 * @api {POST} /groups/join GROUPS TOKEN JOIN
 * @apiName GROUPS7
 * @apiGroup GROUPS
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} token //
 *
 *
 * @apiSuccess (200) {String} OK
 *
 * @apiError BAD_PARAMETER 400
 * @apiError TOKEN_EXPIRED 403
 * @apiError TOKEN_AHEAD_OF_TIME 400
 * @apiError INVALID_TOKEN 403
 * @apiError FORBIDEN_JOIN 403
 * @apiError USER_ALREADY_JOIN 403
 */

async function groupTokenJoin(req, res, next) {
  if (!req.body.token) {
    return next(new ApiError('GROUPS_BAD_PARAMETER'));
  }
  try {
    await join({ token: req.body.token, userId: req.authId });
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = groupTokenJoin;

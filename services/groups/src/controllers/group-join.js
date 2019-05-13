const join = require('../services/join');
const { ApiError } = require('../configurations/error');

/**
 *
 * @api {POST} /groups/join/:id GROUPS JOIN
 * @apiName GROUPS6
 * @apiGroup GROUPS
 * @apiVersion  0.1.0
 * @apiDescription
 * <h4>Public Group: specify groupId</h4>
 * <h4>Private Group: add the token from invite response in the body </h4><br>
 
 * @apiParam {String} groupId
 * @apiParam {String} [token] field to allow user to join private group
 * 
 * @apiParamExample  {json} Request-Example:
 * {
 *     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.dWVySWQiOiI1Y2I3NTM1NzlkNGIx"
 * }
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
      token: req.body.token ? req.body.token : undefined,
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

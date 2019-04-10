const unjoin = require('../services/unjoin');
const { ApiError } = require('../configurations/error');

/**
 *
 * @api {POST} /groups/unjoin/:groupId GROUPS UNJOIN
 * @apiName GROUPS8
 * @apiGroup GROUPS
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} groupId queryParam
 *
 *
 * @apiSuccess (200) {String} OK
 *
 * @apiError BAD_PARAMETER 400
 * @apiError GROUPS_NOT_FOUND 400
 * @apiError GROUPS_FORBIDEN_UNJOIN 403
 *
 */

async function groupUnjoin(req, res, next) {
  if (!req.params.groupId) {
    return next(new ApiError('GROUPS_BAD_PARAMETER'));
  }
  try {
    await unjoin({
      groupId: req.params.groupId,
      userId: req.authId
    });
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = groupUnjoin;

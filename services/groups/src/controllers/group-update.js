const update = require('../services/update');
const { ApiError } = require('../configurations/error');

/**
 *
 * @api {PATCH} /groups/:id GROUPS UPDATE
 * @apiName GROUPS4
 * @apiGroup GROUPS
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} email //
 * @apiParam  {String} password //
 * @apiParam  {String} name //
 *
 *
 * @apiSuccess (200) {String} id queryParam
 * @apiSuccess (200) [String] name //
 * @apiSuccess (200) [String] status //
 * @apiSuccess (200) [String] mediaTypes //
 * @apiSuccess (200) [String] theme //
 * @apiSuccess (200) [String] description //
 * @apiSuccess (200) [String] category //
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *   "mediaTypes": [
 *       "text",
 *      "image"
 *  ],
 *  "name": "TOkkTO",
 *   "status": "public",
 *    "theme": "blue"
 *  }
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     id: 'uuuid'
 * }
 *
 * @apiError BAD_PARAMETER 400
 * @apiError GROUP_NOT_FOUND 400
 * @apiError USER_NOT_CREATOR 403
 *
 */

async function groupUpdate(req, res, next) {
  if (!req.body) {
    return next(new ApiError('GROUPS_BAD_PARAMETER'));
  }
  if (!req.params.id) {
    return next(new ApiError('GROUPS_BAD_PARAMETER'));
  }
  try {
    await update(req.body, req.params.id, req.authId);
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = groupUpdate;

const create = require('../services/create');
const { ApiError } = require('../configurations/error');

/**
 *
 * @api {POST} /groups/ GROUPS CREATE
 * @apiName GROUPS1
 * @apiGroup GROUPS
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} name //
 * @apiParam {String} status //
 * @apiPram [String] mediaTypes //
 * @apiParam {String} theme //
 * @apiParam  {String} description //
 * @apiParam  {String}  category //
 *
 *
 * @apiSuccess (200) {Object} Group Public field of the group
 *
 * @apiParamExample  {json} Request-Example:
 *
 * {
 *  "name": "a4za4",
 *  "status": "private",
 * "mediaTypes": ["video", "text", "image", "location"],
 * "theme": "red",
 * "category": "Music",
 * "description": "c'est une description"
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     ...group: {Object}
 * }
 *
 * @apiError BAD_PARAMETER 400
 * @apiError UNDEFINED 500
 *
 */

async function groupCreate(req, res, next) {
  if (!req.body) return next(new ApiError('GROUPS_BAD_PARAMETER'));
  const {
    name, status, mediaTypes, theme, description, category
  } = req.body;
  if (!name || !status || !mediaTypes || !theme) {
    return next(new ApiError('GROUPS_BAD_PARAMETER'));
  }
  try {
    const groupId = await create({
      creatorId: req.authId,
      name,
      status,
      mediaTypes,
      theme,
      description,
      category
    });
    return res
      .status(200)
      .json(groupId)
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = groupCreate;

const create = require('../services/create');
const { ApiError } = require('../configurations/error');

/**
 *
 * @param {Object} req /
 * @param {Object} res /
 *
 * Precondition:
 * - The user need to be authenticated.
 *
 * - creatordId will be filled by the userId provided by sign-in 'validate'.
 * - creatorId will be also put in the group's users field.
 *
 * http header:
 *  - Authorization: 'Bearer ' + token
 * parameter:
 *  {
 *    name: {String},
 *    status: {String}
 *  }
 *
 * success: 200.
 * {
 *   id: {Uuid}
 * }
 *
 * failure:
 *
 *  - 400 in case of bad request.
 *  - 403 in case of authentification failure.
 *  - 500 in case of failed database operation.
 */
async function groupCreate(req, res, next) {
  if (!req.body) return res.status(400).end();
  const { name, status, mediaTypes, theme } = req.body;
  if (!name || !status || !mediaTypes || !theme) {
    return next(new ApiError('BAD_PARAMETER'));
  }
  try {
    const groupId = await create({
      creatorId: req.authId,
      name,
      status,
      mediaTypes,
      theme
    });
    return res.status(200).json(groupId);
  } catch (error) {
    return next(error);
  }
}

module.exports = groupCreate;

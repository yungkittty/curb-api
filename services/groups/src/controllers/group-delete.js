const remove = require('../services/remove');
const { ApiError } = require('../configurations/error');

/**
 *
 * @param {Object} req DELETE http request
 * @param {Object} res response
 *
 * Precondition:
 * - The user need to be authenticated.
 *
 *
 * - User id provided will need to match the group's creatorId field.
 *
 * http header:
 *  - Authorization: 'Bearer ' + token
 * parameter: empty.
 * success: 200.
 *
 * failure:
 *  - 400 in case of bad request.
 *  - 401 in case of authentification failure.
 *  - 500 in case of failed database operation.
 */
async function groupDelete(req, res, next) {
  if (!req.params.id) return next(new ApiError('GROUPS_BAD_PARAMETER'));
  try {
    await remove(req.params.id, req.authId);
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = groupDelete;

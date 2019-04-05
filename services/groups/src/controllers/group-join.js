const join = require('../services/join');
const { ApiError } = require('../configurations/error');

/**
 *
 * @param {Object} req /
 * @param {Object} res /
 *
 * POST **groups/:groupId/:userId**
 *
 * Precondition:
 * - The user need to be authenticated (including userId is valid).
 * - Group need to be public.
 *
 * /
 *
 * - Adding userId in the users field.
 *
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
async function groupJoin(req, res, next) {
  if (!req.params.groupId) {
    return next(new ApiError('GROUPS_BAD_PARAMETER'));
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

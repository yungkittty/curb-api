const join = require('../services/join');

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
async function groupJoin(req, res) {
  if (!req.params.groupId) return res.status(400).end();
  try {
    const done = await join({
      groupId: req.params.groupId,
      userId: req.authId
    });
    if (!done) return res.status(500).end();
    return res.status(200).end();
  } catch (error) {
    return res.status(500).end();
  }
}

module.exports = groupJoin;

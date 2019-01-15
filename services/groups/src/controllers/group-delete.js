const remove = require('../services/remove');

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
async function groupDelete(req, res) {
  if (!req.params.id) return res.status(400).end();
  try {
    const group = await remove(req.params.id, req.authId);
    if (!group) return res.status(400).end();
    return res.status(200).end();
  } catch (error) {
    return res.status(500).end();
  }
}

module.exports = groupDelete;

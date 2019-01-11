const axios = require('axios');
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
  if (!req.params.groupId || !req.params.userId) return res.status(400).end();
  if (!req.headers.authorization) return res.status(400).end();
  try {
    const response = await axios({
      method: 'post',
      headers: { Authorization: req.headers.authorization },
      url: 'http://curb-accounts:4000/validate',
      validateStatus: undefined
    });
    console.log('auth call=>', response.status);
    if (response.status !== 200) return res.status(response.status).end();
    console.log('valite response', response.data);
    const done = await join(req.params.groupId, req.params.userId);
    if (!done) return res.status(500).end();
    return res.status(200).end();
  } catch (error) {
    console.log('ERROR', error);
    return res.status(500).end();
  }
}

module.exports = groupJoin;

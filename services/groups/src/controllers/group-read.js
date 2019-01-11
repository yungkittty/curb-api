const axios = require('axios');
const read = require('../services/read');

/**
 *
 * @param {Object} req DELETE http request
 * @param {Object} res response
 *
 * Precondition:
 * - If the group is private the user need to be authenticated.
 *
 *
 * http header:
 *  - Authorization: 'Bearer ' + token will need to be provided when
 * requesting on a private group.
 * parameter:
 * success: 200.
 *
 * failure:
 *  - 400 in case of bad request.
 *  - 401 in case of authentification failure.
 *  - 500 in case of failed database operation.
 */

async function groupRead(req, res) {
  if (!req.params.id) return res.status(400).end();
  try {
    let response;
    if (req.headers.authorization) {
      response = await axios({
        method: 'post',
        headers: { Authorization: req.headers.authorization },
        url: 'http://curb-accounts:4000/validate',
        validateStatus: undefined
      });
      if (response.status !== 200) return res.status(response.status).end();
    }
    const userId = !response.status ? undefined : response.data.id;
    const group = await read(req.params.id, userId);
    if (!group) return res.status(400).end();
    return res
      .status(200)
      .json(group)
      .end();
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}

module.exports = groupRead;

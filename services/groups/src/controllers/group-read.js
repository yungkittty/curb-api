const axios = require('axios');
const read = require('../services/read');
const { ApiError, OtherServiceError } = require('../configurations/error');

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

async function groupRead(req, res, next) {
  if (!req.params.id) {
    return next(new ApiError('GROUPS_BAD_PARAMETER'));
  }
  try {
    let response;
    if (req.cookies.token) {
      response = await axios({
        method: 'post',
        withCredentials: true,
        headers: { Cookie: `token=${req.cookies.token}` },
        url: 'http://curb-accounts:4000/validate',
        validateStatus: undefined
      });
      if (response.status !== 200) {
        return next(
          new OtherServiceError(
            response.data.service,
            response.data.code,
            response.status
          )
        );
      }
    }
    const userId = !response ? undefined : response.data.id;
    const group = await read(req.params.id, userId);
    return res
      .status(200)
      .json(group)
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = groupRead;

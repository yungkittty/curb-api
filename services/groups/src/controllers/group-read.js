const axios = require('axios');
const read = require('../services/read');
const { ApiError, OtherServiceError } = require('../configurations/error');

/**
 *
 * @api {POST} /groups/sign-out ACCOUNT CREATE
 * @apiName TOTO
 * @apiGroup GROUPS
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} email //
 * @apiParam  {String} password //
 * @apiParam  {String} name //
 *
 *
 * @apiSuccess (200) {String} id id of the created account
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     email: 'email.email@email.com',
 *     password: 'password',
 *     name: 'userName',
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     id: 'uuuid'
 * }
 *
 * @apiError BAD_PARAMETER 400
 * @apiError BAD_EMAIL_FORMAT
 * @apiError OTHER_SERVICE_ERROR
 *
 */

async function groupRead(req, res, next) {
  if (!req.params.id) {
    return next(new ApiError('BAD_PARAMETER'));
  }
  try {
    let response;
    if (req.headers.authorization) {
      response = await axios({
        method: 'post',
        headers: { Authorization: req.headers.authorization },
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

const axios = require('axios');
const list = require('../services/list');
const { OtherServiceError } = require('../configurations/error');

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

async function groupList(req, res, next) {
  try {
    let authResponse;
    if (req.headers.authorization) {
      authResponse = await axios({
        method: 'post',
        headers: { Authorization: req.headers.authorization },
        url: 'http://curb-accounts:4000/validate',
        validateStatus: undefined
      });
      if (authResponse.status !== 200) {
        return next(
          new OtherServiceError(
            authResponse.data.service,
            authResponse.data.code,
            authResponse.status
          )
        );
      }
    }
    const authId =
      !authResponse || !authResponse.status ? undefined : authResponse.data.id;
    const response = await list({
      ...req.query,
      count: req.query.count ? parseInt(req.query.count, 10) : undefined,
      authId
    });
    return res
      .status(200)
      .json(response)
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = groupList;

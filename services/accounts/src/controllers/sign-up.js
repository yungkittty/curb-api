const verifyEmail = require('../utils/email/verify-email');
const create = require('../services/account/create');
const { ApiError } = require('../configurations/error');

/**
 *
 * @api {POST} /accounts/sign-up ACCOUNT SIGN-UP CREATE
 * @apiName ACCOUNTS1
 * @apiGroup ACCOUNTS
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
 * @apiError OTHER_SERVICE_ERROR XXX
 * @apiError DATABASE_ERROR 500
 * @apiError UNDEFINED 500
 */

async function signUp(req, res, next) {
  if (!req.body) return next(new ApiError('BAD_PARAMETER'));
  if (!req.body.name || !req.body.email || !req.body.password) {
    return next(new ApiError('BAD_PARAMETER'));
  }
  if (!verifyEmail(req.body.email)) {
    return next(new ApiError('BAD_EMAIL_FORMAT'));
  }
  try {
    const id = await create({
      email: req.body.email,
      name: req.body.name,
      password: req.body.password
    });
    return res
      .status(200)
      .json({ id })
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = signUp;

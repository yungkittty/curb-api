const emailVerification = require('../services/email-verification');
const { ApiError } = require('../configurations/error');

/**
 *
 * @api {POST} /emailing/reset EMAILING RESET PASSWORD
 * @apiName EMAILING2
 * @apiGroup EMAILING
 * @apiVersion  0.1.0
 *
 * @apiParam  {String} email //
 * @apiParam  {String} password //
 * @apiParam  {String} name //
 *
 *
 * @apiSuccess (200) {String} id account id
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     id: 'uuid'
 * }
 *
 * @apiError BAD_PARAMETER 400
 * @apiError OTHER_SERVICE_ERROR XXX
 * @apiError UNDEFINED 500
 *
 */

async function verification(req, res, next) {
  if (!req.body.id) {
    return next(new ApiError('BAD_PARAMETER'));
  }
  try {
    await emailVerification(req.body.id, req.body.url);
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = verification;

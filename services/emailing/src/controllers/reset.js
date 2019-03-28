const emailResetPassword = require('../services/email-reset-password');
const { ApiError } = require('../configurations/error');

/**
 *
 * @api {POST} /emailing/verification EMAILING VALIDATION
 * @apiName EMAILING1
 * @apiGroup EMAILING
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} email //
 *
 *
 * @apiSuccess (200) {String} OK
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     email: 'email.email@email.com'
 * }
 *
 * @apiError BAD_PARAMETER 400
 * @apiError OTHER_SERVICE_ERROR XXX
 * @apiError UNDEFINED 500
 */

async function reset(req, res, next) {
  if (!req.body.email) {
    return next(new ApiError('BAD_PARAMETER'));
  }
  try {
    await emailResetPassword(req.body.email);
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = reset;

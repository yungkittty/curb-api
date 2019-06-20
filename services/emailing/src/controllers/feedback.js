const feedbackUser = require('../services/feedback-user');
const { ApiError } = require('../configurations/error');

/**
 *
 * @api {POST} /emailing/feedback EMAILING FEEDBACK USER
 * @apiName EMAILING3
 * @apiGroup EMAILING
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} data body
 * @apiParam  {String} userId params
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

async function feedback(req, res, next) {
  if (!req.params.id || !req.body.data) {
    return next(new ApiError('EMAILING_BAD_PARAMETER'));
  }
  try {
    await feedbackUser(userId, data);
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = feedback;

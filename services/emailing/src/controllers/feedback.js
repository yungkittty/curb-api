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
 *
 * @apiSuccess (200) {String} OK
 *
 * @apiError BAD_PARAMETER 400
 * @apiError OTHER_SERVICE_ERROR XXX
 * @apiError UNDEFINED 500
 */

async function feedback(req, res, next) {
  if (!req.body.data) {
    return next(new ApiError('EMAILING_BAD_PARAMETER'));
  }
  try {
    await feedbackUser(req.body.data, req.header('User-Agent'));
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = feedback;

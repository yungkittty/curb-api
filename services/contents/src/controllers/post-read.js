const { Content } = require('../models/content');
const { ApiError } = require('../configurations/error');

/**
 *
 * @api {GET} /:id CONTENT POST READ
 * @apiName CONTENTS11
 * @apiGroup CONTENTS
 * @apiVersion  0.1.0
 *
 * @apiParam  {String} id //
 *
 * @apiSuccess (200) {String} OK
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     ...content: {Object}
 * }
 *
 * @apiError CONTENTS_BAD_PARAMETER 400
 * @apiError CONTENTS_INEXISTENT_CONTENT 404
 * @apiError UNDEFINED 500
 *
 */

async function postRead(req, res, next) {
  if (!req.params.contentId) {
    return next(new ApiError('CONTENTS_BAD_PARAMETER'));
  }
  try {
    const content = await Content.findById(req.params.contentId);
    if (!content) return next(new ApiError('CONTENTS_INEXISTENT_CONTENT'));
    return res.status(200).json({
      ...content.getPublicFields()
    });
  } catch (error) {
    return next(error);
  }
}

module.exports = postRead;

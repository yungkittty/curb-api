const { ApiError } = require('../../configurations/error');
const remove = require('../../services/content/remove');

/**
 *
 * @api {DELETE} /:id CONTENT DELETE
 * @apiName CONTENTS6
 * @apiGroup CONTENTS
 * @apiVersion  0.1.0
 *
 * @apiParam {String} contentid //
 *
 * @apiSuccess (200) {String} OK
 *
 * @apiError CONTENTS_BAD_PARAMETER 400
 * @apiError CONTENTS_INEXISTENT_CONTENT 404
 * @apiError UNDEFINED 500
 *
 */

async function contentDelete(req, res, next) {
  if (!req.params.contentId) {
    return next(new ApiError('CONTENTS_BAD_PARAMETER'));
  }
  try {
    if (!req.permissions.creator || !req.permissions.write) {
      return next(new ApiError('CONTENTS_FORBIDEN_OPERATION'));
    }
    await remove(req.params.contentId, true);
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = contentDelete;

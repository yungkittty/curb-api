const { Content } = require('../../models/content');
const { ApiError } = require('../../configurations/error');

/**
 *
 * @api {GET} /:id CONTENT READ BY ID
 * @apiName CONTENTS7
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

async function contentRead(req, res, next) {
  if (!req.params.contentId) {
    return next(new ApiError('CONTENTS_BAD_PARAMETER'));
  }
  try {
    if (!req.permissions.creator || !req.permissions.write) {
      return next(new ApiError('CONTENTS_FORBIDEN_OPERATION'));
    }

    const content = await Content.findById(req.params.contentId);
    if (!content) return next(new ApiError('CONTENTS_INEXISTENT_CONTENT'));
    if (content.type === 'event' || content.type === 'poll') {
      const publicContent = content.getPublicFields();
      const serialized = JSON.parse(content.data);
      switch (content.type) {
        case 'event':
          return res.status(200).json({
            ...publicContent,
            data: JSON.stringify({ ...serialized, participants: content.meta })
          });
        case 'poll':
          return res.status(200).json({
            ...publicContent,
            data: JSON.stringify({ ...serialized, answers: content.meta[0] })
          });
        default:
          break;
      }
    }
    return res.status(200).json({
      ...content.getPublicFields()
    });
  } catch (error) {
    return next(error);
  }
}

module.exports = contentRead;

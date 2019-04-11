const axios = require('axios');
const { ApiError } = require('../configurations/error');
const { OtherServiceError } = require('../configurations/error');

const Content = require('../models/content');

/**
 *
 * @api {DELETE} /:id CONTENT DELETE
 * @apiName CONTENTS6
 * @apiGroup CONTENTS
 * @apiVersion  0.1.0
 *
 * @apiParam  {String} id //
 *
 * @apiSuccess (200) {String} OK
 *
 * @apiError CONTENTS_BAD_PARAMETER 400
 * @apiError CONTENTS_INEXISTENT_CONTENT 404
 * @apiError UNDEFINED 500
 *
 */

async function contentDelete(req, res, next) {
  if (!req.params.contentId || !req.headers.authorization) return next(new ApiError('CONTENTS_BAD_PARAMETER'));
  try {
    const response = await axios({
      method: 'post',
      headers: { Authorization: req.headers.authorization },
      url: 'http://curb-accounts:4000/validate',
      validateStatus: undefined
    });
    if (response.status !== 200) {
      const groupOwner = await axios({
        method: 'get',
        headers: { Authorization: req.headers.authorization },
        url: `http://curb-groups:4000/permissions/${req.params.groupId}/${response.data.id}`,
        validateStatus: undefined
      });
      if (groupOwner.status !== 200) {
        throw new OtherServiceError(
          groupOwner.data.service,
          groupOwner.data.code,
          groupOwner.status
        );
      }
      if (!groupOwner.data.creator) return next(new ApiError('CONTENTS_NOT_GROUP_CREATOR'));
    }
    const remove = await Content.findByIdAndRemove(req.params.contentId);
    if (!remove) return next(new ApiError('CONTENTS_INEXISTENT_CONTENT'));
    return next;
  } catch (error) {
    return next(error);
  }
}

module.exports = contentDelete;

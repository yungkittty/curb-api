const axios = require('axios');
const read = require('../services/read');
const { ApiError, OtherServiceError } = require('../configurations/error');

/**
 *
 * @api {GET} /groups/:id GROUPS READ BY ID
 * @apiName GROUPS3
 * @apiGroup GROUPS
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} id queryParam
 *
 *
 * @apiSuccess (200) {Object} group public field of the group
 *
 * @apiSuccessExample {json} Disconnected:
 * {
 *   "id": "5d7a64f2b25c260080f19057",
 *   "name": " nbbn",
 *   "theme": "red",
 *   "status": "private",
 *   "description": "c'est une description",
 *   "category": "Music"
 * }
 *
 * @apiSuccessExample {json} Log-in:
 * {
 *   "id": "5d7a64f2b25c260080f19057",
 *   "posts": [],
 *   "mediaTypes": [
 *       "video",
 *       "text",
 *       "image",
 *       "location"
 *   ],
 *   "quartile": 0,
 *   "creatorId": "5d499299e1fa4b002a207a06",
 *   "name": " nbbn",
 *   "status": "private",
 *   "theme": "red",
 *   "description": "c'est une description",
 *   "category": "Music",
 *   "dateCreation": "2019-09-12T15:32:02.660Z",
 *   "users": [
 *       {
 *           "active": false,
 *           "activity": 0,
 *           "userId": "5d499299e1fa4b002a207a06",
 *           "updatedAt": "2019-09-12T15:32:02.688Z",
 *           "createdAt": "2019-09-12T15:32:02.688Z",
 *           "id": "5d7a64f2b25c260080f19058"
 *       }
 *   ],
 *   "createdAt": "2019-09-12T15:32:02.667Z",
 *    "updatedAt": "2019-09-12T15:32:02.688Z"
 * }
 *
 * @apiError BAD_PARAMETER 400
 * @apiError GROUP_NOT_FOUND 400
 * @apiError FORBIDEN_READ 403
 * @apiError OTHER_SERVICE_ERROR XXX
 *
 */

async function groupRead(req, res, next) {
  if (!req.params.id) {
    return next(new ApiError('GROUPS_BAD_PARAMETER'));
  }
  try {
    console.log('GETTIG TO GROUP READ ===============<');
    let response;
    if (req.cookies.token) {
      response = await axios({
        method: 'post',
        withCredentials: true,
        headers: { Cookie: `token=${req.cookies.token}` },
        url: 'http://curb-accounts:4000/validate',
        validateStatus: undefined
      });
      if (response.status !== 200) {
        return next(new OtherServiceError(response));
      }
    }
    const userId = !response ? undefined : response.data.id;
    const group = await read(req.params.id, userId);
    return res
      .status(200)
      .json(group)
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = groupRead;

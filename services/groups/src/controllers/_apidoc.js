/**
 * File for api documentation versionning,
 * Copy older version of route here
 */
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

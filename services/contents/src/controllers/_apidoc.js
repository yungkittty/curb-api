/**
 * File for api documentation versionning,
 * Copy older version of route here
 */
/**
 *
 * @api {POST} /texts/:groupId/ CONTENT ADD VIDEO
 * @apiName CONTENTS3
 * @apiGroup CONTENTS
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} groupId //
 * @apiParam  {String} file file path
 *
 * @apiParamExample  {form-data} Request-Example:
 * {
 *     file: '${videoPath}',
 * }
 *
 * @apiSuccess (200) {String} id id of the created content
 * @apiSuccess (200) {String} file file path of the created content
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     id: 'uuid',
 *     file: '/contents/uploads/groups/${groupId}/videos/${userId}/${filename}'
 * }
 *
 *
 * @apiError CONTENTS_BAD_PARAMETER 400
 * @apiError CONTENTS_FORBIDDEN_WRITE 403
 * @apiError CONTENTS_INEXISTENT_CONTENT 404
 * @apiError UNDEFINED 500
 *
 */

/**
 *
 * @api {POST} /images/:groupId/ CONTENT ADD IMAGE
 * @apiName CONTENTS2
 * @apiGroup CONTENTS
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} groupId //
 * @apiParam  {String} file file path
 *
 * @apiParamExample  {form-data} Request-Example:
 * {
 *     file: '${imagePath}',
 * }
 *
 * @apiSuccess (200) {String} id id of the created content
 * @apiSuccess (200) {String} file file path of the created content
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     id: 'uuid',
 *     file: '/contents/uploads/groups/${groupId}/images/${userId}/${filename}'
 * }
 *
 *
 * @apiError CONTENTS_BAD_PARAMETER 400
 * @apiError CONTENTS_FORBIDDEN_WRITE 403
 * @apiError CONTENTS_INEXISTENT_CONTENT 404
 * @apiError UNDEFINED 500
 *
 */

/**
 *
 * @api {POST} /texts/:groupId/ CONTENT ADD TEXT
 * @apiName CONTENTS1
 * @apiGroup CONTENTS
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} groupId //
 * @apiParam  {String} data text
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     data: '${textInput}',
 * }
 *
 * @apiSuccess (200) {String} id id of the created content
 * @apiSuccess (200) {String} data text of the created content
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     id: 'uuid',
 *     data: '${textInput}'
 * }
 *
 *
 * @apiError CONTENTS_BAD_PARAMETER 400
 * @apiError CONTENTS_FORBIDDEN_WRITE 403
 * @apiError CONTENTS_INEXISTENT_CONTENT 404
 * @apiError UNDEFINED 500
 *
 */
/**
 *
 * @api {POST} /locations/:groupId/ CONTENT ADD LOCATIONS
 * @apiName CONTENTS4
 * @apiGroup CONTENTS
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} groupId //
 * @apiParam  {String} data locations data
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     data: '${locationsInput}',
 * }
 *
 * @apiSuccess (200) {String} id id of the created content
 * @apiSuccess (200) {String} data locations data of the created content
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     id: 'uuid',
 *     data: '${locationsInput}'
 * }
 *
 *
 * @apiError CONTENTS_BAD_PARAMETER 400
 * @apiError CONTENTS_FORBIDDEN_WRITE 403
 * @apiError CONTENTS_INEXISTENT_CONTENT 404
 * @apiError UNDEFINED 500
 *
 */

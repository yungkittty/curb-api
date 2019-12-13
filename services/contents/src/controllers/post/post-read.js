const read = require('../../services/post/read');
const { ApiError, OtherServiceError } = require('../../configurations/error');
const groupGet = require('../../utils/group-get');
const { Post } = require('../../models/post');
/**
 *
 * @api {GET} /contents/posts/:postId POST READ
 * @apiName POST3
 * @apiGroup POSTS
 * @apiVersion  0.2.0
 *
 *
 * @apiParam  {String} postId //
 *
 * @apiSuccess (200) {Object} OK
 *
 *
 * @apiSuccessExample {json} Success-Response:
{
    "id": "5d7f8af330243d00300c79ec",
    "creatorId": "5d499299e1fa4b002a207a06",
    "groupId": "5d7f8aed4244b60030c9a8e0",
    "pinned": false,
    "reaction": {
        "number": 0,
        "ids": []
    },
    "createdAt": "2019-09-16T13:15:31.182Z",
    "updatedAt": "2019-09-16T13:15:55.866Z",
    "medias": [
        {
            "id": "5d7f8af930243d00300c79ed",
            "postId": "5d7f8af330243d00300c79ec",
            "type": "text",
            "data": "aze",
            "createdAt": "2019-09-16T13:15:37.303Z",
            "updatedAt": "2019-09-16T13:15:37.303Z"
        },
        {
            "id": "5d7f8afe30243d00300c79ee",
            "postId": "5d7f8af330243d00300c79ec",
            "type": "location",
            "data": "l:10;l:20",
            "createdAt": "2019-09-16T13:15:42.159Z",
            "updatedAt": "2019-09-16T13:15:42.159Z"
        },
        {
            "id": "5d7f8b0130243d00300c79ef",
            "postId": "5d7f8af330243d00300c79ec",
            "type": "text",
            "data": "aze",
            "createdAt": "2019-09-16T13:15:45.860Z",
            "updatedAt": "2019-09-16T13:15:45.860Z"
        },
        {
            "id": "5d7f8b0530243d00300c79f0",
            "postId": "5d7f8af330243d00300c79ec",
            "type": "image",
            "data": "/contents/uploads/groups/5d7f8aed4244b60030c/.../3e75e7d.jpeg",
            "createdAt": "2019-09-16T13:15:49.726Z",
            "updatedAt": "2019-09-16T13:15:49.726Z"
        },
        {
            "id": "5d7f8b0b30243d00300c79f1",
            "postId": "5d7f8af330243d00300c79ec",
            "type": "video",
            "data": "/contents/uploads/groups/5d7f8aed4244b60030/.../d2.mp4",
            "createdAt": "2019-09-16T13:15:55.861Z",
            "updatedAt": "2019-09-16T13:15:55.861Z"
        }
    ]
}
 *
 * @apiError BAD_PARAMETER 400
 * @apiError UNDEFINED 500
 *
 */

async function postRead(req, res, next) {
  try {
    if (!req.authId) {
      const post = await Post.findById(req.params.postId);
      if (!post) throw new ApiError('POSTS_NOT_FOUND');
      const response = await groupGet(post.groupId);
      if (response.status !== 200) {
        throw new OtherServiceError(response);
      }
      if (response.data.status === 'private') {
        throw new ApiError('POSTS_FORBIDEN_OPERATION');
      }
    }
    const post = await read(req.params.postId);

    return res
      .status(200)
      .json(post)
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = postRead;

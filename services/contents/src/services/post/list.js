const { Post } = require('../../models/post');
const pagination = require('../../utils/pagination');

/**
 *
 * test on :
 * GroupId: 5d4d8bf0eb9a5b0029bbf763
 * PostIds :
 * 5d4d8c0e73cdd8016c824645 : contains: 3 image, 0 videos, 2 text, 0 loc
 * 5d4d8cd373cdd8016c82464b : contains: 2 images, 3 videos, 1 text, 0 loc
 * 5d4d8d0f73cdd8016c824651 : contains: 0 images, 1 videos, 0 text, 2 loc
 * 5d4d8d2f73cdd8016c824655 : contains: 0 images, 0 videos, 0 text, 2 loc
 * 5d4d953ed297d2044cd6f462 : contains: 1 images, 0 videos, 0 text, 0 loc
 * 5d4d955f169b97045ac8213d : contains: 0 images, 0 videos, 1 text, 0 loc
 * 5d4d9639e8b3e304685f7790 : contains: 0 images, 0 videos, 0 text, 0 loc
 * 5d4d964d985489047653c2a7: contains: 0 images, 0 videos, 0 text, 0 loc
 */

async function list({
  groupId, page = 1, count = 5, mediaType = undefined
}) {
  const aggregation = await Post.aggregate([
    {
      $match: {
        groupId: { $eq: groupId }
      }
    },
    {
      $sort: {
        createdAt: -1
      }
    },
    {
      $lookup: {
        from: 'contents',
        localField: 'medias',
        foreignField: '_id',
        as: 'medias'
      }
    },
    {
      $unwind: '$medias'
    },
    {
      $match: mediaType
        ? {
          $or: mediaType.map(media => ({ 'medias.type': media }))
        }
        : { 'medias.type': { $ne: null } }
    },
    {
      $group: {
        _id: {
          _id: '$_id',
          creatorId: '$creatorId',
          groupId: '$groupId',
          pinned: '$pinned',
          reaction: '$reaction',
          createdAt: '$createdAt',
          updateAt: '$updateAt'
        },
        medias: {
          $push: '$medias'
        }
      }
    },
    ...pagination(page, count),
    {
      $project: {
        _id: false,
        post: {
          _id: '$_id._id',
          creatorId: '$_id.creatorId',
          groupId: '$_id.groupId',
          pinned: '$_id.pinned',
          reaction: '$_id.reaction',
          createdAt: '$_id.createdAt',
          updateAt: '$_id.updateAt',
          medias: '$medias'
        }
      }
    }
  ]);

  return {
    count,
    page,
    mediaType,
    data: aggregation.map((p) => {
      const { post } = p;
      return post;
    })
  };
}

module.exports = list;

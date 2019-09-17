const mongoose = require('mongoose');
const { Post } = require('../../models/post');

async function read(postId) {
  console.log(postId);
  const aggregation = await Post.aggregate([
    {
      $match: {
        _id: { $eq: new mongoose.Types.ObjectId(postId) }
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
      $project: {
        _id: false,
        id: '$_id',
        reaction: '$reaction',
        pinned: '$pinned',
        groupId: '$groupId',
        creatorId: '$creatorId',
        createdAt: '$createdAt',
        updatedAt: '$updatedAt',
        medias: {
          id: '$medias._id',
          postId: '$medias.post',
          type: '$medias.type',
          data: '$medias.data',
          createdAt: '$medias.createdAt',
          updatedAt: '$medias.updatedAt'
        }
      }
    },
    {
      $group: {
        _id: {
          id: '$id',
          creatorId: '$creatorId',
          groupId: '$groupId',
          pinned: '$pinned',
          reaction: '$reaction',
          createdAt: '$createdAt',
          updatedAt: '$updatedAt'
        },
        medias: {
          $push: '$medias'
        }
      }
    },
    {
      $project: {
        _id: false,
        post: {
          id: '$_id.id',
          creatorId: '$_id.creatorId',
          groupId: '$_id.groupId',
          pinned: '$_id.pinned',
          reaction: '$_id.reaction',
          createdAt: '$_id.createdAt',
          updatedAt: '$_id.updatedAt',
          medias: '$medias'
        }
      }
    }
  ]);
  const { post = [] } = aggregation[0] || [];
  return post;
}

module.exports = read;

const { Post } = require('../../models/post');
const pagination = require('../../utils/pagination');

/**
 *
 * test on :
 * GroupId: 5d4836c84c93b50030848da8
 * PostIds :
 * 5d4836edad199803ea707adf : contains: 3 image, 0 videos, 2 text, 0 loc
 * 5d483721ad199803ea707ae6 : contains: 2 images, 3 videos, 1 text, 0 loc
 * 5d483756ad199803ea707aed : contains: 0 images, 1 videos, 0 text, 2 loc
 * 5d483795ad199803ea707af1 : contains: 0 images, 0 videos, 0 text, 2 loc
 */

// $addFields: {
//         "hashes": {
//             $setUnion: [
//                 [ { $size: "$items.hash" } ], // total number of hashes
//                 [ { $size: { $setUnion: "$items.hash" } } ] // number of distinct hashes
//             ]
//         }
//     }

async function list({
  groupId, page = 1, count = 5, mediaType = undefined
}) {
  console.log(mediaType);
  const posts = await Post.aggregate([
    {
      $match: {
        groupId: { $eq: groupId }
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
    {},
    // {
    //   $match: {
    //     medias: mediaType
    //       ? { $in: ['medias.type', [mediaType]] }
    //       : { $nin: ['medias.type', [null]] }
    //   }
    // },
    ...pagination(page, count)
  ]);
  console.log(posts);

  console.log('LENGTH=>', posts.length);
  return posts;
}

module.exports = list;

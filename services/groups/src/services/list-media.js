const { Group } = require('../models/group');

const pagination = require('../utils/pagination');

async function listMedia({
  groupId,
  page = 1,
  count = 5,
  mediaType = undefined,
  userId = undefined
}) {
  const queryList = Group.findOne({ _id: groupId });
  //  queryList.where('mediaType').in(mediaType);

  const mediaIds = await queryList.exec();

  return mediaIds;
  // const { ids = [] } = mediaIds[0] || [];

  // return {
  //   count,
  //   page,
  //   mediaType,
  //   medias: ids.reduce((acc, id) => acc.concat(id), [])
  // };
}

module.exports = listMedia;

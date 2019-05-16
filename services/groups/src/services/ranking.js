const Group = require('../models/group');
const { ApiError } = require('../configurations/error/index');

// Ranking formule :
// (Media + 0.5User)
// ___________________
//
// 1 + 0.4(hours between dateCreation and lastUpdate)

async function ranking(id) {
  const group = await Group.findById(id);
  if (!group) throw new ApiError('GROUPS_NOT_FOUND');
  const numberOfMedia = group.medias.length;
  const numberOfUser = group.users.length;
  const rank = (numberOfMedia + 0.5 * numberOfUser)
    / (1 + 0.4 * ((Date.now() - new Date(group.updatedAt).getTime()) / 3600000));
  group.rank = rank;
  await group.save();
}

module.exports = ranking;

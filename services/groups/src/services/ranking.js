const Group = require('../models/group');
const { ApiError } = require('../configurations/error/index');

async function ranking(id) {
  try {
    // TODO supr try catch
    const group = await Group.findById(id);
    if (!group) throw new ApiError('GROUPS_NOT_FOUND');
    const numberOfMedia = group.medias.length;
    const numberOfUser = group.users.length;
    const rank = numberOfMedia / numberOfUser;
    group.rank = rank;
    await group.save();
  } catch (error) {
    console.log('==>', error);
  }
}

module.exports = ranking;

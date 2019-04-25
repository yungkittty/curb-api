const Groups = require('../models/group');

async function groups(req, res, next) {
  try {
    console.log('endpoint /aggregate/groups');
    const grps = await Groups.find({});
    console.log(typeof grps);
    const transformedGroups = grps.map(group => group.toJSON());
    res
      .status(200)
      .json(transformedGroups)
      .end();
  } catch (error) {
    console.log('error=>', error);
    next(error);
  }
}

module.exports = groups;

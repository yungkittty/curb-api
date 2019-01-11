const permissions = require('../services/permissions');

async function groupPermissions(res, req) {
  if (!req.params.groupId || !req.params.userId) return res.status(400).end();
  try {
    const rights = await permissions(req.params.groupId, req.params.userId);
    if (!rights) res.status(400).end();
    return res
      .status(200)
      .json(rights)
      .end();
  } catch (error) {
    console.log('ERROR', error);
    return res.status(500).end();
  }
}

module.exports = groupPermissions;

const groupCreate = require('./group-create');
const groupRead = require('./group-read');
const groupUpdate = require('./group-update');
const groupDelete = require('./group-delete');
const groupList = require('./group-list');
const groupJoin = require('./group-join');
const groupTokenJoin = require('./group-token-join');
const groupPermissions = require('./group-permissions');
const groupPost = require('./group-post');
const groupInvite = require('./group-invite');
const groupAvatar = require('./group-avatar');

module.exports = {
  groupCreate,
  groupRead,
  groupUpdate,
  groupDelete,
  groupList,
  groupJoin,
  groupPermissions,
  groupPost,
  groupInvite,
  groupTokenJoin,
  groupAvatar
};

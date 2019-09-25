const groupCreate = require('./group-create');
const groupRead = require('./group-read');
const groupUpdate = require('./group-update');
const groupDelete = require('./group-delete');
const groupList = require('./group-list');
const groupJoin = require('./group-join');
const groupPermissions = require('./group-permissions');
const groupAddPost = require('./group-add-post');
const groupDeletePost = require('./group-delete-post');
const groupInvite = require('./group-invite');
const groupAvatars = require('./group-avatars');
const groupUnjoin = require('./group-unjoin');
const groupListRandom = require('./group-list-random');
const groupListGlobal = require('./group-list-global');
const groupListCustom = require('./group-list-custom');
const groupListUser = require('./group-list-user');
const groupFromIds = require('./group-list-from-id');

module.exports = {
  groupCreate,
  groupRead,
  groupUpdate,
  groupDelete,
  groupList,
  groupJoin,
  groupPermissions,
  groupAddPost,
  groupDeletePost,
  groupInvite,
  groupAvatars,
  groupUnjoin,
  groupListRandom,
  groupListGlobal,
  groupListCustom,
  groupListUser,
  groupFromIds
};

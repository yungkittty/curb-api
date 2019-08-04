const axios = require('axios');

async function groupPostDelete(token, groupId, postId, userId) {
  const response = await axios({
    method: 'delete',
    withCredentials: true,
    headers: { Cookie: `token=${token}` },
    data: {
      type: 'image',
      userId
    },
    url: `http://curb-groups:4000/posts/${groupId}/${postId}`,
    validateStatus: undefined
  });
  return response;
}

module.exports = groupPostDelete;

const axios = require('axios');

async function groupPostAdd(token, groupId, postId, userId) {
  const response = await axios({
    method: 'post',
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

module.exports = groupPostAdd;

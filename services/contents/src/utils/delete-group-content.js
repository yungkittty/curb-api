const axios = require('axios');

async function deleteGroupContent(token, groupId, contentId, userId) {
  const response = await axios({
    method: 'delete',
    headers: { Cookie: `token=${token}` },
    data: {
      type: 'image',
      userId
    },
    url: `http://curb-groups:4000/medias/${groupId}/${contentId}`,
    validateStatus: undefined
  });
  return response;
}

module.exports = deleteGroupContent;

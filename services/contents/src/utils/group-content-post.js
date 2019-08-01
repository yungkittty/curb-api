const axios = require('axios');

async function postGroupContent(token, groupId, contentId, userId) {
  const response = await axios({
    method: 'post',
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

module.exports = postGroupContent;

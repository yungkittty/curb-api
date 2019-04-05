const axios = require('axios');
const list = require('../services/list');
const { OtherServiceError } = require('../configurations/error');

async function groupList(req, res, next) {
  try {
    let authResponse;
    if (req.cookies.token) {
      authResponse = await axios({
        method: 'post',
        withCredentials: true,
        headers: { Cookie: `token=${req.cookies.token}` },
        url: 'http://curb-accounts:4000/validate',
        validateStatus: undefined
      });
      if (authResponse.status !== 200) {
        return next(
          new OtherServiceError(
            authResponse.data.service,
            authResponse.data.code,
            authResponse.status
          )
        );
      }
    }
    const authId =
      !authResponse || !authResponse.status ? undefined : authResponse.data.id;
    const response = await list({
      ...req.query,
      count: req.query.count ? parseInt(req.query.count, 10) : undefined,
      authId
    });
    return res
      .status(200)
      .json(response)
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = groupList;

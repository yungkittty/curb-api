const jwtConfig = {
  secret: process.env.JWT_SECRET,
  tokenExpiration: process.env.JWT_TOKEN_EXPIRE_DATE
};

module.exports = jwtConfig;

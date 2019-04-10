const jwtConfig = {
  secret: process.env.JWT_SECRET,
  tokenExpiration: process.env.JWT_TOKEN_EXPIRE_DATE,
  refreshTokenExpiration: process.env.JWT_REFRESH_TOKEN_EXPIRE_DATE,
  emailingTokenExpiration: process.env.JWT_EMAILING_TOKEN_EXPIRE
};

module.exports = jwtConfig;

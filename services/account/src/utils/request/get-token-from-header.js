function getTokenFromHeader(authorization) {
  if (!authorization) return null;
  const split = authorization.split(' ');
  if (split.length !== 2 || split[0] !== 'Bearer') return null;
  return split[1];
}

module.exports = getTokenFromHeader;

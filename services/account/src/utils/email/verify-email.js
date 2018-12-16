function verifyEmail(email) {
  const emailRegex = new RegExp('^([\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4})?$');
  return emailRegex.test(email);
}

module.exports = verifyEmail;

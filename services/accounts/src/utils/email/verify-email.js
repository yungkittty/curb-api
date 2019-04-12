function verifyEmail(email) {
  const emailRegex = new RegExp('^([\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4})?$');
  return emailRegex.test(email);
}

// TODO => make regex on create ie:sign-up i.e message Jimmy
// email:
// "^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$",
// username: "^(?=(?![0-9])?[A-Za-z0-9]?[._-]?[A-Za-z0-9]+).{4,20}$",
// password: "^(?=.*\\d)(?=.*[a-z]).{6,20}$"

module.exports = verifyEmail;

const User = require('../models/user');
const { ApiError } = require('../configurations/error');

async function update(id, newFields) {
  const user = await User.findById({ _id: id });
  if (!user) throw new ApiError('USER_NOT_FOUND');
  const operationFields = Object.keys(newFields);
  operationFields.map(attribute => {
    user[attribute] = newFields[attribute];
  });
  await user.save();
  return user.getPublicFields();
}

module.exports = update;

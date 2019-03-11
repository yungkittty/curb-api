const User = require('../models/user');

async function update(id, newFields) {
  const user = await User.findById({ _id: id });
  const operationFields = Object.keys(newFields);
  operationFields.map(attribute => {
    user[attribute] = newFields[attribute];
  });
  await user.save();
  return user.getPublicFields();
}

module.exports = update;

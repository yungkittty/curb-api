const axios = require('axios');
const Account = require('../../models/account');

async function create(account) {
  const newAccount = new Account({
    name: account.name,
    email: account.email,
    password: account.password
  });
  const saved = await newAccount.save();
  if (!saved) return null;

  // TODO
  // const response = await axios({
  //   method: 'post',
  //   url: 'http://localhost:3000/users',
  //   validateStatus: undefined,
  //   data: {
  //     id: saved._id.toString(),
  //     name: saved.name
  //   }
  // });
  // if (response.status !== 200) return null;
  // return response.data.id;
  return saved._id.toString();
}

module.exports = create;

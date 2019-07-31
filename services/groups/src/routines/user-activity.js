const mongoose = require('mongoose');
const { UserGroup } = require('../models/user-group');
const { Group } = require('../models/group');

function quantile(arr, q) {
  const pos = (arr.length - 1) * q;
  const base = Math.floor(pos);
  const rest = pos - base;
  console.log(pos, base, rest);
  if (arr[base + 1] !== undefined) {
    return arr[base] + rest * (arr[base + 1] - arr[base]);
  }
  return arr[base];
}

async function computeThirdQuartile(group) {
  try {
    const users = group.toObject().users.sort((first, second) => first.activity - second.activity);
    const arr = users.map(x => x.activity);
    const result = quantile(arr, 0.75);
    console.log(
      `Q1 ${quantile(arr, 0.25)}, Q2/Mediane ${quantile(arr, 0.5)}, Q3 ${quantile(arr, 0.75)}`
    );
    const q2 = quantile(arr, 0, 5);
    // TODO cas Q1/Q2/Q3 = 0, etendu faible,
    if (q2 === result) {
      return;
    }
    group.quartile = result;
    group.users.map((user) => {
      user.active = user.activity >= result;
      return user;
    });
    await group.save();
  } catch (e) {
    console.log('=====> ERROR ON =>', e, group);
  }
}

async function* getAllGroups() {
  const cursor = await Group.find({}).cursor();
  for (let group = await cursor.next(); group !== null; group = await cursor.next()) {
    await computeThirdQuartile(group); // ParallelSaveError (mongoose) + await
    yield group;
  }
  return '~';
}

async function userActivityPerGroup() {
  const gen = getAllGroups();
  for (let call = await gen.next(); call.done !== true; call = await gen.next()) {
    computeThirdQuartile(call.value);
  }

  // const group = await Group.findOne({ _id: mongoose.Types.ObjectId('5d406ddfcc0ed201c229e0cd') });
  // // console.log(group);
  // await computeThirdQuartile(group);
}

module.exports = userActivityPerGroup;

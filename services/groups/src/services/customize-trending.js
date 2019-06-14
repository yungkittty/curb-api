const _ = require('lodash');
const mongoose = require('mongoose');
// const uniq = require('lodash/uniq');
// const shuffle = require('lodash/shuffle');
const Group = require('../models/group');
const aggregateGetSome = require('../aggregators/aggregate-get-some');
// TEST SUR 5cdcf05889c110001cdef5a8

/**
 * Améloriation possible:
 * Prendre average user / groupe pour définir la portion de groupe \
 *  à prendre dans les 'userIdsFriendly'
 * Prendre les 3 premiers quartiles des ranks des groupes
 *  {
 *   - l'user ne découvrira potentielement pas de nouveau / petit groupe'(Discovery pour ça?).
 *   + Sur un large set de groupes, masquera les groupes useless
 *
 *  }
 *
 * A tester sur large set de group (allowDiskUse) + time les aggregation
 *
 * TODO: Move aggregation
 */

function getRandomElements(array, count) {
  const arr = [...array];
  return [...Array(count)].map(() => arr.splice(Math.floor(Math.random() * arr.length), 1)[0]);
}

async function aggregateUserInGroup(userId) {
  // AM => $unwid: userId => $match $eq userId (formatting) ?
  const groupIdsForUser = await Group.aggregate([
    {
      $match: {
        users: { $in: [userId] },
        status: { $ne: 'private' }
      }
    },
    {
      $group: { _id: null, ids: { $push: '$_id' } }
    },
    {
      $project: { ids: true, _id: false }
    }
  ]);
  const { ids } = groupIdsForUser[0] || [];
  return ids;
}

// MapReduce for a specific user on mediaType
// AM => $setIntersection for more mapping => image-video type
async function aggregateMedia(groupIds = []) {
  const mediaTypes = await Group.aggregate([
    {
      $match: {
        _id: { $in: groupIds.map(id => new mongoose.Types.ObjectId(id)) },
        status: { $ne: 'private' }
      }
    },
    {
      $unwind: '$mediaTypes'
    },
    {
      $sortByCount: '$mediaTypes'
    },
    {
      $project: { _id: false, type: '$_id', count: true }
    }
  ]);
  return mediaTypes;
}

async function aggregateUserIdsFriendly(userId) {
  const userIdsFriendly = await Group.aggregate([
    {
      $match: {
        users: { $in: [userId] },
        status: { $ne: 'private' }
      }
    },
    {
      $unwind: '$users'
    },
    {
      $match: {
        users: { $ne: userId }
      }
    },
    {
      $group: {
        _id: '$users'
      }
    },
    {
      $project: {
        _id: false,
        id: '$_id'
      }
    }
  ]);
  return userIdsFriendly.reduce((acc, obj) => {
    acc.push(obj.id);
    return acc;
  }, []);
}

async function aggregateUsersFriendlyGroupIds(userId, excludeUserId) {
  const groupIds = await Group.aggregate([
    {
      $match: {
        users: { $in: [userId] },
        status: { $ne: 'private' }
      }
    },
    {
      $match: {
        users: { $nin: [excludeUserId] } // $ne behaviour on ObjectId when evaluate array
      }
    },
    {
      $group: { _id: null, id: { $push: '$_id' } }
    },
    {
      $project: { id: true, _id: false }
    }
  ]);
  const { id } = groupIds[0] || [];
  return id;
}

async function fillFromMedia(userId, count, countPerMedia) {
  const samples = [0.5, 0.3, 0.15, 0.15];
  const pendings = countPerMedia.map(async (media, idx) => {
    const aggregate = await aggregateGetSome(samples[idx] * count, [
      {
        $match: {
          mediaTypes: { $in: [media.type] },
          users: { $nin: [userId] },
          status: { $ne: 'private' }
        }
      }
    ]);
    const resp = aggregate.reduce((acc, ids) => acc.concat(ids), []);
    return resp;
  });
  const groupIdsFromMedia = (await Promise.all(pendings))
    .filter(arr => arr != null)
    .reduce((acc, ids) => acc.concat(ids), []);
  return groupIdsFromMedia;
}

async function customizeTrending(count, userId) {
  const groupIdsForUser = await aggregateUserInGroup(userId);
  const countPerMedia = await aggregateMedia(groupIdsForUser);
  const aggregationUsersFriendly = await aggregateUserIdsFriendly(userId);

  const promises = aggregationUsersFriendly.map(async (id) => {
    const resp = await aggregateUsersFriendlyGroupIds(id, userId);
    return resp;
  });
  const friendlyGroupIds = (await Promise.all(promises)).filter(arr => arr != null);

  // merge all the arrays from users where there is only one occurence
  const groupIdsFoundOnce = friendlyGroupIds.reduce((acc, array) => {
    if (array.length > 1) return acc;
    return acc.concat(array);
  }, []);

  // get array from users where there is more than one occurence
  const groupIdsFound = friendlyGroupIds.filter(array => array.length > 1);

  // Will be slow if users has large set of groupsIds
  const sample = 0.7;
  const randomsFromgroupIdsFound = groupIdsFound
    .map(ids => getRandomElements(ids, parseInt(ids.length * sample, 10)))
    .reduce((acc, ids) => acc.concat(ids), []);
  const randomsFromgroupIdsFoundOnce = getRandomElements(
    groupIdsFoundOnce,
    parseInt(groupIdsFoundOnce.length * sample, 10)
  );
  let groupIds = [...randomsFromgroupIdsFound, ...randomsFromgroupIdsFoundOnce];

  // (Not gonna happen frequently) Not enough friendlyUsers => getSome from best media :
  if (count > groupIds.length) {
    const fromMedia = await fillFromMedia(userId, count - groupIds.length, countPerMedia);
    groupIds = [...groupIds, ...fromMedia];
  }

  // TODO Regler ce problème :
  const stringified = JSON.stringify(groupIds);
  const array = JSON.parse(stringified);
  const uniqueIds = _.uniq(array);
  //

  console.log('after/before=>', groupIds.length, uniqueIds.length);
  return { category: 'custom', data: _.shuffle(uniqueIds) };
}

module.exports = customizeTrending;

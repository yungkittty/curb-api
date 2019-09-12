const schedule = require('node-schedule');
const { userRecommendation } = require('./user-recommendation');
const userActivityPerGroup = require('./user-activity');

function initRoutines(routines = []) {
  userRecommendation().then(userActivityPerGroup());

  schedule.scheduleJob('0 4 * * *', () => {
    userRecommendation();
    userActivityPerGroup();
  });
}

module.exports = initRoutines;

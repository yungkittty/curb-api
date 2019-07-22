const schedule = require('node-schedule');
const { userRecommendation } = require('./user-recommendation');

function initRoutines(routines = []) {
  userRecommendation();

  schedule.scheduleJob('0 4 * * *', () => {
    userRecommendation();
  });
}

module.exports = initRoutines;

const schedule = require('node-schedule');
const { userRecommendationRoutine } = require('./list-custom');

function initRoutines(routines = []) {
  userRecommendationRoutine();

  schedule.scheduleJob('0 4 * * *', () => {
    userRecommendationRoutine();
  });
}

module.exports = initRoutines;

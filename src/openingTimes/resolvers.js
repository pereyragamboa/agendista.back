const { profiles, getOpeningTimesId } = require('../mockData');
const { compareIndex } = require('../utils/compareIndex');

function addOpeningTimes(openingTimes) {
  const targetProfile = profiles.find(compareIndex(profile, openingTimes.profile.id));
  openingTimes.id = getOpeningTimesId();
  targetProfile.openingTimes.add(openingTimes);
  return openingTimes;
}

function deleteOpeningTimes(timesId) {
  let timesIndex = -1;
  const targetProfile = profiles.find(
      profile => {
        timesIndex = profile.openingTimes.findIndex(
            times => compareIndex(times, timesId));
        return timesIndex >= 0;
      });
  if (targetProfile !== undefined) {
    targetProfile.openingTimes.splice(timesIndex, 1);
    return true;
  }
  return false;
}

function getOpeningTimes(profileId, dayOfWeek) {
  return profiles.find(
      profile => compareIndex(profile, profileId)
  ).filter(
      times => dayOfWeek === undefined || times.dayOfWeek === dayOfWeek
  );
}

function updateOpeningTimes(timesId, times) {
  let timesIndex = -1;
  const targetProfile = profiles.find(
      profile => {
        timesIndex = profile.openingTimes.findIndex(
            times => compareIndex(times, timesId));
        return timesIndex >= 0;
      });
  if (targetProfile !== undefined) {
    const update = { ...targetProfile.openingTimes[timesIndex], ...times};
    targetProfile.openingTimes[timesIndex] = update;
    return update;
  }
  return null;
}

module.exports = {
  addOpeningTimes,
  deleteOpeningTimes,
  getOpeningTimes,
  updateOpeningTimes
};
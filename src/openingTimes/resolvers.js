const { profiles, getOpeningTimesId } = require('../mockData');
const { compareIndex } = require('../utils/compareIndex');

function addOpeningTimes(profileId, openingTimes) {
  const targetProfile = profiles.find(profile => compareIndex(profile, profileId));
  if (targetProfile !== undefined) {
    openingTimes.id = getOpeningTimesId();
    targetProfile.openingTimes.push(openingTimes);
    openingTimes.profile = { id: profileId };
    return openingTimes;
  }
  return null;
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

function getOpeningTimes(timesId) {
  return profiles.flatMap(profile => profile.openingTimes)
                 .find(times => compareIndex(times, timesId));
}

function getOpeningTimesByProfile(profileId, businessDay) {
  return profiles.find(
      profile => compareIndex(profile, profileId)
  ).openingTimes.filter(
      times => businessDay === undefined || times.day === businessDay
  ).map(times => { return { ...times, profile: { profileId } }});
}

function updateOpeningTimes(timesId, times) {
  let timesIndex = -1;
  const targetProfile = profiles.find(
      profile => {
        timesIndex = profile.openingTimes.findIndex(
            t => compareIndex(t, timesId));
        return timesIndex >= 0;
      });
  if (targetProfile !== undefined) {
    const update = {
      ...targetProfile.openingTimes[timesIndex],
      ...times
    };
    targetProfile.openingTimes[timesIndex] = update;
    return update;
  }
  return null;
}

module.exports = {
  addOpeningTimes,
  deleteOpeningTimes,
  getOpeningTimes,
  getOpeningTimesByProfile,
  updateOpeningTimes
};
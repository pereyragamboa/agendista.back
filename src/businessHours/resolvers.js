const { profiles, getOpeningTimesId } = require('../mockData');
const { compareIndex } = require('../utils/compareIndex');

function addBusinessHours(profileId, businessHours) {
  const targetProfile = profiles.find(profile => compareIndex(profile, profileId));
  if (targetProfile !== undefined) {
    businessHours.id = getOpeningTimesId();
    targetProfile.openingTimes.push(businessHours);
    businessHours.profile = { id: profileId };
    return businessHours;
  }
  return null;
}

function deleteBusinessHours(timesId) {
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

function getBusinessHours(timesId) {
  return profiles.flatMap(profile => profile.openingTimes)
                 .find(times => compareIndex(times, timesId));
}

function getBusinessHoursByProfile(profileId, businessDay) {
  console.log(`\tGetting business hours for ${profileId}...`);
  return profiles.find(
      profile => compareIndex(profile, profileId)
  ).openingTimes.filter(
      times => businessDay === undefined || times.day === businessDay
  ).map(times => { return { ...times, profile: { profileId } }});
}

function updateBusinessHours(timesId, businessHours) {
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
      ...businessHours
    };
    targetProfile.openingTimes[timesIndex] = update;
    return update;
  }
  return null;
}

module.exports = {
  addBusinessHours,
  deleteBusinessHours,
  getBusinessHours,
  getBusinessHoursByProfile,
  updateBusinessHours
};
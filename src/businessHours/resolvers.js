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

function clearBusinessHours(profileId) {
  const targetProfile = profiles.find(profile => compareIndex(profile, profileId));
  if (targetProfile !== undefined) {
    targetProfile.openingTimes = [];
    return profileId;
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
    return timesId;
  }
  return null;
}

function getBusinessHours(timesId) {
  return profiles.flatMap(profile => profile.openingTimes)
                 .find(times => compareIndex(times, timesId));
}

function getBusinessHoursByProfile(profileId, businessDay) {
  return profiles.find(
      profile => compareIndex(profile, profileId)
  ).openingTimes.filter(
      times => businessDay === undefined || times.day === businessDay
  ).map(times => { return { ...times, profile: { profileId } }});
}

function setBusinessHours(profileId, businessHourList) {
  const targetProfile = profiles.find(profile => compareIndex(profile, profileId));
  if (targetProfile !== undefined) {
    const newBusinessHours = businessHourList.map(businessHour => {
      return { ...businessHour, id: getOpeningTimesId() }
    });
    targetProfile.openingTimes = newBusinessHours;
    return newBusinessHours;
  }
  return [];
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
  clearBusinessHours,
  deleteBusinessHours,
  getBusinessHours,
  getBusinessHoursByProfile,
  setBusinessHours,
  updateBusinessHours
};
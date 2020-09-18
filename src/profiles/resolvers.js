const { profiles } = require('../mockData');
const { compareIndex } = require('../utils/compareIndex');

function getProfile(profileId) {
  return profiles.find(profile => compareIndex(profile, profileId));
}

function deleteProfile(profileId) {
  const indexFound = profiles.findIndex(profile => compareIndex(profile, profileId));
  if (indexFound >= 0) {
    profiles.splice(indexFound, 1);
    return profileId;
  }
  return null;
}

function updateProfile(profileId, profile) {
  const indexFound = profiles.findIndex(profile => compareIndex(profile, profileId));
  if (indexFound >= 0) {
    const update = { ...profiles[indexFound], ...profile};
    profiles[indexFound] = update;
    return update;
  }
  return null;
}

module.exports = {
  deleteProfile, getProfile, updateProfile
};
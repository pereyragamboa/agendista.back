const { profiles } = require('../mockData');

function getProfile(profileId) {
  return profiles.find(profile => compareIndex(profile, profileId));
}

function deleteProfile(profileId) {
  const indexFound = profiles.findIndex(profile => compareIndex(profile, profileId));
  if (indexFound >= 0) {
    profiles.splice(indexFound, 1);
    return true;
  }
  return false;
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

function compareIndex(profile, profileId) {
  return profile.id === Number.parseInt(profileId);
}

module.exports = {
  deleteProfile, getProfile, updateProfile
};
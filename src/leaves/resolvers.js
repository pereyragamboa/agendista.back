const { profiles, getLeaveId } = require('../mockData');
const { compareIndex } = require('../utils/compareIndex');

function addLeave(profileId, leave) {
  const profileIndex = profiles.findIndex(p => compareIndex(p, profileId));
  if (profileIndex >= 0) {
    const profile = profiles[profileIndex];
    leave.id = getLeaveId();
    profile.leaves.push(leave);
    return leave;
  } else return null;
}

function deleteLeave(leaveId) {
  let leaveIndex = -1;
  const profileIndex = profiles.findIndex(p => {
    leaveIndex = p.leaves.findIndex(l => compareIndex(l, leaveId));
    return leaveIndex >= 0;
  });
  if (profileIndex >= 0) {
    profiles[profileIndex].leaves.splice(leaveIndex, 0);
    return true;
  } else return false;
}

function getLeave(leaveId) {
  let leave = undefined;
  profiles.find(p => {
    leave = p.leaves.find(l => compareIndex(l, leaveId));
    return leave !== undefined;
  });
  return leave ? leave : null;
}

function getLeaves(profileId) {
  const profile = profiles.find(p => compareIndex(p, profileId));
  return profile.leaves;
}

module.exports = { addLeave, deleteLeave, getLeave, getLeaves };
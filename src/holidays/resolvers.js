const { profiles, getHolidayId } = require('../mockData');
const { compareIndex } = require('../utils/compareIndex');

function addHoliday(profileId, holiday) {
  const profile = profiles.find(profile => compareIndex(profile, profileId));
  if (profile !== undefined) {
    holiday.id = getHolidayId();
    if (!profile.holidays) profile.holidays = [];
    profile.holidays.push(holiday);
    return holiday;
  }
  return null;
}

function deleteHoliday(holidayId) {
  let holidayIndex = -1;
  const profile = profiles.find(
      p => {
        if (p.holidays === undefined) return false;
        holidayIndex = p.holidays.findIndex(
            h => compareIndex(h, holidayId));
        return holidayId >= 0;
      });
  if (profile !== undefined) {
    profile.holidays.splice(holidayIndex, 1);
    return true;
  }
  return false;
}

function getHoliday(holidayId) {
  let holiday = undefined;
  profiles.find(p => {
    holiday = p.holidays.find(h => compareIndex(h, holidayId));
    return holiday !== undefined;
  });
  return holiday === undefined ? null : holiday;
}

function getHolidays(profileId) {
  const profile = profiles.find(profile => compareIndex(profile, profileId));
  if (profile !== undefined) {
    return profile.holidays ? profile.holidays : [];
  }
  return [];
}

module.exports = {
  addHoliday, deleteHoliday, getHoliday, getHolidays
};
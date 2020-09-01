const validate = (team) => {
  if(!team.name || team.name === '') {
    return false;
  }
  if (!team.fullname || team.fullname === '') {
    return false;
  }
  if (!team.manufacturer || team.manufacturer === '') {
    return false;
  }
  if (!team.countryId || team.countryId === 0) {
    return false;
  }
  return true;
};

module.exports = { validate };
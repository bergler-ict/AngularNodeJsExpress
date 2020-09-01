const validate = (driver) => {
  if (!driver.name || driver.name === '') {
    return false;
  }
  return true;
};

module.exports = { validate };
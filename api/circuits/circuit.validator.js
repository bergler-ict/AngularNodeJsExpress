const validate = (circuit) => {
  if (!circuit.name || circuit.name === '') {
    return false;
  }
  if (!circuit.countryId || circuit.countryId === 0) {
    return false;
  }

  return true;
};

module.exports = { validate };
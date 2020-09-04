const validate = (grandprix) => {
  if (!grandprix.name || grandprix.name === '') {
    return false;
  }
  if (!grandprix.date) {
    return false;
  }
  
  return true;
};

module.exports = { validate };
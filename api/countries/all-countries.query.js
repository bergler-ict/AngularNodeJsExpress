class AllCountriesQuery {
  get queryText() {
    return `SELECT 
              id, 
              name
            FROM Countries
            ORDER BY name`;
  }

  get inputParameters() {
    return [];
  }
}

function create() {
  return new AllCountriesQuery();
}

module.exports = {
  create
};

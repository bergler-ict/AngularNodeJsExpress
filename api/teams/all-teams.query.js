class AllTeamsQuery {
  get queryText() {
    return `SELECT 
              T.id, 
              T.name,
              T.fullname, 
              T.manufacturer,
              C.Id AS countryId
            FROM Teams T
            INNER JOIN Countries C ON C.Id = T.CountryId
            ORDER BY name`;
  }

  get inputParameters() {
    return [];
  }
}

function create() {
  return new AllTeamsQuery();
}

module.exports = {
  create
}
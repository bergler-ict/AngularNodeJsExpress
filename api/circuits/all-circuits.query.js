class AllCircuitsQuery {
  get queryText() {
    return `SELECT 
              C.id, 
              C.[name], 
              C.length,
              C.lapRecord,
              CNT.[Name] as country,
              C.countryId
            FROM Circuits C
            LEFT JOIN Countries CNT ON CNT.Id = C.CountryId
            ORDER BY C.[Name]`;
  }

  get inputParameters() {
    return [];
  }
}

function create() {
  return new AllCircuitsQuery();
}

module.exports = {
  create
}
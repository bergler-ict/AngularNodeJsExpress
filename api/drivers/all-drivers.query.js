class AllDriversQuery {
  get queryText() {
    return `SELECT 
              D.id as id, 
              D.[name], 
              CASE WHEN ISNULL(D.BirthDate, '') = '' THEN 0 ELSE FLOOR(DATEDIFF(DAY, D.BirthDate,getdate()) / 365.25) END as age,
              D.birthDate,
              D.grandPrixs, 
              D.podiums, 
              D.startNumber,
              T.[Name] as team,
              D.teamId,
              C.[Name] as country,
              D.countryId
            FROM Driver D
            LEFT JOIN TEAMS T ON T.Id = D.TeamId
            LEFT JOIN Countries C ON C.Id = D.CountryId
            ORDER BY D.[Name]`;
  }

  get inputParameters() {
    return [];
  }
}

function create() {
  return new AllDriversQuery();
}

module.exports = {
  create
}
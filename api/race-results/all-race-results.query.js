const mssql = require('mssql/msnodesqlv8');

class AllRaceResultsQuery {

  constructor(grandPrixId) {
    this._grandPrixId = grandPrixId;
  }

  get queryText() {
    return `SELECT 
              D.Name,
              RR.position,
              RR.time,
              RR.laps,
              ST.Score as points
            FROM RaceResults RR
            INNER JOIN Driver D ON D.Id = RR.DriverId
            LEFT JOIN ScoreTable ST ON ST.Position = RR.Position
            WHERE RR.GrandPrixId = @GrandPrixID
            ORDER BY position`;
  }

  get inputParameters() {
    return [
      {
        name: 'GrandPrixID',
        type: mssql.Int(),
        value: this._grandPrixId
      }
    ];
  }
}

function create(grandPrixId) {
  return new AllRaceResultsQuery(grandPrixId);
}

module.exports = {
  create
}

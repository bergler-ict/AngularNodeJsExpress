const mssql = require('mssql/msnodesqlv8');

class AllRaceResultsQuery {

  constructor(grandPrixId) {
    this._grandPrixId = grandPrixId;
  }

  get queryText() {
    return `SELECT 
              grandprixId,
              driverId,
              position,
              time,
              laps,
              PulledFastestLap as fastestLap
            FROM RaceResults
            WHERE GrandprixId = @GrandprixId
            ORDER BY Position`;
  }

  get inputParameters() {
    return [
      {
        name: 'GrandprixId',
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

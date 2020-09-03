const mssql = require('mssql/msnodesqlv8');

class DriverRankingsQuery {

  constructor(year) {
    this._year = year;
  }

  get queryText() {
    return `SELECT D.startNumber, D.[name], SUM(ST.Score + (CASE WHEN RR.PulledFastestLap = 1 THEN 1 ELSE 0 END)) as score
            FROM Driver D
            INNER JOIN RaceResults RR ON RR.DriverId = D.Id
            INNER JOIN GrandPrix GP ON GP.Id = RR.GrandPrixId
            INNER JOIN ScoreTable ST ON ST.Position = RR.Position
            WHERE GP.[Year] = 2020
            GROUP BY D.StartNumber, D.Name
            ORDER by Score desc`;
  }

  get inputParameters() {
    return [
      {
        name: 'Year',
        type: mssql.Int(),
        value: this._year
      }
    ];
  }
}

function create(year) {
  return new DriverRankingsQuery(year);
}

module.exports = {
  create
}

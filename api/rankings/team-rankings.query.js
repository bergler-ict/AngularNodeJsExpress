const mssql = require('mssql/msnodesqlv8');

class TeamRankingsQuery {

  constructor(year) {
    this._year = year;
  }

  get queryText() {
    return `SELECT TMS.[name], SUM(ST.Score) as score
            FROM Driver D
            INNER JOIN RaceResults RR ON RR.DriverId = D.Id
            INNER JOIN GrandPrix GP ON GP.Id = RR.GrandPrixId
            INNER JOIN ScoreTable ST ON ST.Position = RR.Position
            INNER JOIN Teams TMS ON TMS.Id = D.TeamId 
            WHERE GP.[Year] = YEAR(GETDATE())
            GROUP BY TMS.[Name]
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
  return new TeamRankingsQuery(year);
}

module.exports = {
  create
}

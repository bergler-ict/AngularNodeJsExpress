const mssql = require('mssql/msnodesqlv8');

class InsertGrandprixCommand {

  constructor(grandprix) {
    this._grandprix = grandprix;
  }

  get queryText() {
    return `INSERT INTO GrandPrix (Name, CircuitId, Year, [Date])
            VALUES(@Name, @CircuitId, @Year, @Date)

            DECLARE @GrandprixId INT;
            SELECT @GrandprixId = SCOPE_IDENTITY();

            SELECT G.id, G.name, G.circuitId, C.[Name] as circuit, G.year, G.[date]
            FROM GrandPrix G
            INNER JOIN Circuits C ON C.id = G.CircuitId
            WHERE G.id = @GrandprixId`
  }

  get inputParameters() {
    return [
      {
        name: 'Name',
        type: mssql.NVarChar(),
        value: this._grandprix.name
      },
      {
        name: 'CircuitId',
        type: mssql.Int(),
        value: this._grandprix.circuitId
      },
      {
        name: 'Year',
        type: mssql.Int(),
        value: this._grandprix.year
      },
      {
        name: 'Date',
        type: mssql.Date(),
        value: this._grandprix.date
      }
    ];
  }
}

function create(team) {
  return new InsertGrandprixCommand(team);
}

module.exports = { create };

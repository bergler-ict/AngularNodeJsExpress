const mssql = require('mssql/msnodesqlv8');

class UpdateGrandprixCommand {

  constructor(grandprix) {
    this._grandprix = grandprix;
  }

  get queryText() {
    return `UPDATE GrandPrix
            SET Name = @Name, [Date] = @Date, CircuitId = @CircuitId
            WHERE Id = @GrandPrixId
            
            SELECT G.id, G.name, G.circuitId, C.[Name] as circuit, G.year, G.[date]
            FROM GrandPrix G
            INNER JOIN Circuits C ON C.id = G.CircuitId
            WHERE G.id = @GrandprixId
            `;
  }

  get inputParameters() {
    return [
      {
        name: 'Name',
        type: mssql.NVarChar(),
        value: this._grandprix.name
      },
      {
        name: 'GrandPrixId',
        type: mssql.Int(),
        value: this._grandprix.id
      },
      {
        name: 'Date',
        type: mssql.Date(),
        value: this._grandprix.date
      },
      {
        name: 'CircuitId',
        type: mssql.Int(),
        value: this._grandprix.circuitId
      }
    ];
  }
}

function create(grandprix) {
  return new UpdateGrandprixCommand(grandprix);
}

module.exports = { create };

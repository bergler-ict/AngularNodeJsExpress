const mssql = require('mssql/msnodesqlv8');

class UpdateCircuitCommand {

  constructor(circuit) {
    this._circuit = circuit;
  }

  get queryText() {
    return `UPDATE Circuits
            SET Name = @Name, Length = @Length, LapRecord = @LapRecord, CountryId = @CountryId
            WHERE Id = @CircuitId
            
            SELECT C.id, C.name, C.length, C.lapRecord, C.countryId, CNT.[name] as country
            FROM Circuits C
            INNER JOIN Countries CNT ON CNT.id = C.CountryId
            WHERE C.Id = @CircuitId`;
  }

  get inputParameters() {
    return [
      {
        name: 'CircuitId',
        type: mssql.Int(),
        value: this._circuit.id
      },
      {
        name: 'Name',
        type: mssql.NVarChar(),
        value: this._circuit.name
      },
      {
        name: 'Length',
        type: mssql.Decimal(10,3),
        value: this._circuit.length
      },
      {
        name: 'LapRecord',
        type: mssql.NVarChar(),
        value: this._circuit.lapRecord
      },
      {
        name: 'CountryId',
        type: mssql.Int(),
        value: this._circuit.countryId
      }
    ];
  }
}

function create(team) {
  return new UpdateCircuitCommand(team);
}

module.exports = { create };

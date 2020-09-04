const mssql = require('mssql/msnodesqlv8');

class InsertCircuitCommand {

  constructor(circuit) {
    this._circuit = circuit;
  }

  get queryText() {
    return `INSERT INTO Circuits (Name, Length, LapRecord, CountryId)
            VALUES(@Name, @Length, @LapRecord, @CountryId)

            DECLARE @CircuitId INT;
            SELECT @CircuitId = SCOPE_IDENTITY();
            
            SELECT C.id, C.name, C.length, C.lapRecord, C.countryId, CNT.[name] as country
            FROM Circuits C
            INNER JOIN Countries CNT ON CNT.id = C.CountryId
            WHERE C.Id = @CircuitId`
  }

  get inputParameters() {
    return [
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
        value: this._circuit.manufacturer
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
  return new InsertCircuitCommand(team);
}

module.exports = { create };

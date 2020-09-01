const mssql = require('mssql/msnodesqlv8');

class UpdateRaceResultsCommand {

  constructor(options) {
    this._options = options;
    this._inputParameters = [];
    this.setInputParameters();
  }

  get queryText() {
    return `BEGIN TRANSACTION
            DELETE FROM RaceResults WHERE GrandPrixId = @GrandPrixId

            ${this.getValues()}
                        
            COMMIT TRANSACTION`;
  }

  get inputParameters() {
    return this._inputParameters;
  }

  getValues() {
    let queryValues = '';
    let index = 0;
    this._options.raceResults.forEach(rr => {
      index = index + 1;
      queryValues = queryValues + `
      INSERT INTO RaceResults (GrandPrixId, DriverId, Position, Time, Laps)
      VALUES(@GrandPrixId${index}, @DriverId${index}, @Position${index}, @Time${index}, @Laps${index})`
    });

    return queryValues;
  }

  setInputParameters() {
    this._inputParameters.push({ name: 'GrandPrixId', type: mssql.Int(), value: this._options.grandPrixId });
    let index = 0;
    this._options.raceResults.forEach(rr => {
      index = index + 1;
      this._inputParameters.push({ name: 'GrandPrixId' + index.toString(), type: mssql.Int(), value: this._options.grandPrixId });
      this._inputParameters.push({ name: 'DriverId' + index.toString(), type: mssql.Int(), value: rr.driverId });
      this._inputParameters.push({ name: 'Position' + index.toString(), type: mssql.Int(), value: rr.position });
      this._inputParameters.push({ name: 'Time' + index.toString(), type: mssql.NVarChar(25), value: rr.time });
      this._inputParameters.push({ name: 'Laps' + index.toString(), type: mssql.Int(), value: rr.laps });
    });
  }
}

function create(grandPrixId, raceResults) {
  return new UpdateRaceResultsCommand({ grandPrixId: grandPrixId, raceResults: raceResults});
}

module.exports = { create };

const mssql = require('mssql/msnodesqlv8');

class InsertTeamCommand {

  constructor(team) {
    this._team = team;
  }

  get queryText() {
    return `INSERT INTO Teams (Name, Fullname, Manufacturer, CountryId)
            VALUES(@Name, @Fullname, @Manufacturer, @CountryId)

            DECLARE @TeamId INT;
            SELECT @TeamId = SCOPE_IDENTITY();
            
            SELECT 
              T.id, 
              T.name,
              T.fullname, 
              T.manufacturer,
              C.Id AS countryId
            FROM Teams T
            INNER JOIN Countries C ON C.Id = T.CountryId
            WHERE T.Id = @TeamId`;
  }

  get inputParameters() {
    return [
      {
        name: 'Name',
        type: mssql.NVarChar(),
        value: this._team.name
      },
      {
        name: 'Fullname',
        type: mssql.NVarChar(),
        value: this._team.fullname
      },
      {
        name: 'Manufacturer',
        type: mssql.NVarChar(),
        value: this._team.manufacturer
      },
      {
        name: 'CountryId',
        type: mssql.Int(),
        value: this._team.countryId
      }
    ];
  }
}

function create(team) {
  return new InsertTeamCommand(team);
}

module.exports = { create };

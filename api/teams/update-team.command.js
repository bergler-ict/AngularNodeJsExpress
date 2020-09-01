const mssql = require('mssql/msnodesqlv8');

class UpdateTeamCommand {

  constructor(team) {
    this._team = team;
  }

  get queryText() {
    return `UPDATE Teams
            SET Name = @Name, FullName = @Fullname, Manufacturer = @Manufacturer, CountryId = @CountryId
            WHERE Id = @Id`;
  }

  get inputParameters() {
    return [
      {
        name: 'Id',
        type: mssql.Int(),
        value: this._team.id
      },
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
  return new UpdateTeamCommand(team);
}

module.exports = { create };

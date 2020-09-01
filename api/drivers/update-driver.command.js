const mssql = require('mssql/msnodesqlv8');

class UpdateDriverCommand {

  constructor(driver) {
    this._driver = driver;
  }

  get queryText() {
    return `UPDATE Driver
            SET Name = @Name, BirthDate = @BirthDate, StartNumber = @StartNumber, 
                GrandPrixs = @GrandPrixs, Podiums= @Podiums, TeamId = @TeamId, CountryId = @CountryId
            WHERE Id = @DriverId
            
            SELECT 
              D.id, 
              D.[name], 
              CASE WHEN ISNULL(D.BirthDate, '') = '' THEN 0 ELSE FLOOR(DATEDIFF(DAY, D.BirthDate,getdate()) / 365.25) END as age,
              D.birthDate,
              D.grandPrixs, 
              D.podiums, 
              D.startNumber,
              T.[Name] as team,
              D.teamId,
              C.[Name] as country,
              D.countryId
            FROM Driver D
            LEFT JOIN TEAMS T ON T.Id = D.TeamId
            LEFT JOIN Countries C ON C.Id = D.CountryId
            WHERE D.Id = @DriverId
            `;
  }

  get inputParameters() {
    return [
      {
        name: 'DriverId',
        type: mssql.Int(),
        value: this._driver.id
      },
      {
        name: 'Name',
        type: mssql.NVarChar(),
        value: this._driver.name
      },
      {
        name: 'BirthDate',
        type: mssql.VarChar(),
        value: this._driver.birthDate
      }, 
      {
        name: 'StartNumber',
        type: mssql.Int(),
        value: this._driver.startNumber
      },
      {
        name: 'GrandPrixs',
        type: mssql.Int(),
        value: this._driver.grandPrixs
      },
      {
        name: 'Podiums',
        type: mssql.Int(),
        value: this._driver.podiums
      },
      {
        name: 'TeamId',
        type: mssql.Int(),
        value: this._driver.teamId
      },
      {
        name: 'CountryId',
        type: mssql.Int(),
        value: this._driver.countryId
      }
    ];
  }
}

function create(team) {
  return new UpdateDriverCommand(team);
}

module.exports = { create };

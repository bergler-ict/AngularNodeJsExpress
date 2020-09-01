const mssql = require('mssql/msnodesqlv8');

class DeleteTeamCommand {

  constructor(id) {
    this._id = id;
  }

  get queryText() {
    return `BEGIN TRANSACTION
    
            UPDATE Driver
            Set TeamId = NULL
            Where TeamID = @Id;
            
            DELETE 
            FROM Teams 
            WHERE Id = @Id

            COMMIT TRANSACTION`;
  }

  get inputParameters() {
    return [
      {
        name: 'Id',
        type: mssql.Int(),
        value: this._id
      }
    ];
  }
}

function create(id) {
  return new DeleteTeamCommand(id);
}

module.exports = { create };

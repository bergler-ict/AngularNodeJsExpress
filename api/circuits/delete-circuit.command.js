const mssql = require('mssql/msnodesqlv8');

class DeleteCircuitCommand {

  constructor(id) {
    this._id = id;
  }

  get queryText() {
    return `DELETE 
            FROM Circuits
            WHERE Id = @Id`;
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
  return new DeleteCircuitCommand(id);
}

module.exports = { create };

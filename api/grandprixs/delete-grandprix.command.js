const mssql = require('mssql/msnodesqlv8');

class DeleteGrandprixCommand {

  constructor(id) {
    this._id = id;
  }

  get queryText() {
    return `DELETE 
            FROM GrandPrix
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
  return new DeleteGrandprixCommand(id);
}

module.exports = { create };

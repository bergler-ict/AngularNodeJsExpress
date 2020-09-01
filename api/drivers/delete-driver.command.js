const mssql = require('mssql/msnodesqlv8');

class DeleteDriverCommand {

  constructor(id) {
    this._id = id;
  }

  get queryText() {
    return `DELETE 
            FROM Driver 
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
  return new DeleteDriverCommand(id);
}

module.exports = { create };

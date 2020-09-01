const mssql = require('mssql');

class AllGrandprixsQuery {

  constructor(options) {
    this._options = options;
  }

  get queryText() {
    return `SELECT GP.id, GP.[name], C.[name] as circuit, GP.[year], GP.[date]
            FROM GrandPrix GP
            INNER JOIN Circuits C ON C.Id = GP.CircuitId
            WHERE GP.[Year] = @Year`;
  }

  get inputParameters() {
    return [{
      name: 'Year',
      type: mssql.Int(),
      value: this._options.year
    }];
  }
}

function create(year) {
  return new AllGrandprixsQuery({year: year});
}

module.exports = {
  create
}
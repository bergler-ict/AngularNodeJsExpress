const mssql = require('mssql/msnodesqlv8');

class AllGrandprixsQuery {

  constructor(options) {
    this._options = options;
  }

  get queryText() {
    return `SELECT GP.id, GP.[name], C.[name] as circuit, GP.[year], GP.[date], C.Id as circuitId
            FROM GrandPrix GP
            INNER JOIN Circuits C ON C.Id = GP.CircuitId
            WHERE GP.[Year] = @Year
            ORDER BY GP.[Date] asc`;
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
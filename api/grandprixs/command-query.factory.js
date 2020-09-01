const database = require('../bin/database');
const allGrandprixsQuery = require('./all-grandprixs.query');

const createGetAllGrandprixsQuery = (year) => {
  const query = allGrandprixsQuery.create(year);
  return database.createSqlCommand(query.queryText, query.inputParameters);
}

module.exports = {
  createGetAllGrandprixsQuery
}

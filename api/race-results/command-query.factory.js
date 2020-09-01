const database = require('../bin/database');
const allRaceResultsQuery = require('./all-race-results.query');

const createGetAllRaceResultsQuery = (grandPrixId) => {
  const query = allRaceResultsQuery.create(grandPrixId);
  return database.createSqlCommand(query.queryText, query.inputParameters);
}

module.exports = {
  createGetAllRaceResultsQuery
}

const database = require('../bin/database');
const allRaceResultsQuery = require('./all-race-results.query');
const updateResultsCommand = require('./update-race-results.command');

const createGetAllRaceResultsQuery = (grandPrixId) => {
  const query = allRaceResultsQuery.create(grandPrixId);
  return database.createSqlCommand(query.queryText, query.inputParameters);
}

const updateRaceResultsCommand = (grandPrixId, raceResults) => {
  const query = updateResultsCommand.create(grandPrixId, raceResults);
  return database.createSqlCommand(query.queryText, query.inputParameters);
}

module.exports = {
  createGetAllRaceResultsQuery,
  updateRaceResultsCommand
}

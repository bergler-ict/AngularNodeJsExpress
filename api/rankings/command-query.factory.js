const database = require('../bin/database');
const driverRankingsQuery = require('./driver-rankings.query');
const teamRankingsQuery = require('./team-rankings.query');

const createDriverRankingsQuery = (year) => {
  const query = driverRankingsQuery.create(year);
  return database.createSqlCommand(query.queryText, query.inputParameters);
}

const createTeamRankingsQuery = (year) => {
  const query = teamRankingsQuery.create(year);
  return database.createSqlCommand(query.queryText, query.inputParameters);
}

module.exports = {
  createDriverRankingsQuery,
  createTeamRankingsQuery
}

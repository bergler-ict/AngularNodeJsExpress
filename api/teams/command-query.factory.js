const database = require('../bin/database');
const allTeamsQuery = require('./all-teams.query');
const deleteTeamCommand = require('./delete-team.command');
const insertTeamCommand = require('./insert-team.command');
const updateTeamCommand = require('./update-team.command');

const createGetAllTeamsQuery = () => {
  const query = allTeamsQuery.create();
  return database.createSqlCommand(query.queryText, query.inputParameters);
}

const createInsertTeamCommand = (team) => {
  const command = insertTeamCommand.create(team);
  return database.createSqlCommand(command.queryText, command.inputParameters);
}

const createUpdateTeamCommand = (team) => {
  const command = updateTeamCommand.create(team);
  return database.createSqlCommand(command.queryText, command.inputParameters);
}

const createDeleteTeamCommand = (id) => {
    const command = deleteTeamCommand.create(id);
    return database.createSqlCommand(command.queryText, command.inputParameters);
}

module.exports = {
  createGetAllTeamsQuery,
  createInsertTeamCommand,
  createUpdateTeamCommand,
  createDeleteTeamCommand
}

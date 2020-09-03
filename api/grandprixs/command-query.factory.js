const database = require('../bin/database');
const allGrandprixsQuery = require('./all-grandprixs.query');
const insertGrandprixCommand = require('./insert-grandprix.command');
const updateGrandprixCommand = require('./update-grandprix.command');
const deleteGrandprixCommand = require('./delete-grandprix.command');

const createGetAllGrandprixsQuery = (year) => {
  const query = allGrandprixsQuery.create(year);
  return database.createSqlCommand(query.queryText, query.inputParameters);
}

const createInsertGrandprixCommand = (grandprix) => {
  const command = insertGrandprixCommand.create(grandprix);
  return database.createSqlCommand(command.queryText, command.inputParameters);
}

const createUpdateGrandprixCommand = (id) => {
  const command = updateGrandprixCommand.create(id);
  return database.createSqlCommand(command.queryText, command.inputParameters);
}

const createDeleteGrandprixCommand = (id) => {
  const command = deleteGrandprixCommand.create(id);
  return database.createSqlCommand(command.queryText, command.inputParameters);
}

module.exports = {
  createGetAllGrandprixsQuery,
  createInsertGrandprixCommand,
  createUpdateGrandprixCommand,
  createDeleteGrandprixCommand
}

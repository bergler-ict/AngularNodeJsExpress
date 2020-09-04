const database = require('../bin/database');
const allCircuitsQuery = require('./all-circuits.query');
const deleteCircuitCommand = require('./delete-circuit.command');
const insertCircuitCommand = require('./insert-circuit.command');
const updateCircuitCommand = require('./update-circuit.command');

const createGetAllCircuitsQuery = () => {
  const query = allCircuitsQuery.create();
  return database.createSqlCommand(query.queryText, query.inputParameters);
}

const createInsertCircuitCommand = (circuit) => {
  const command = insertCircuitCommand.create(circuit);
  return database.createSqlCommand(command.queryText, command.inputParameters);
}

const createUpdateCircuitCommand = (circuit) => {
  const command = updateCircuitCommand.create(circuit);
  return database.createSqlCommand(command.queryText, command.inputParameters);
}

const createDeleteCircuitCommand = (id) => {
    const command = deleteCircuitCommand.create(id);
    return database.createSqlCommand(command.queryText, command.inputParameters);
}

module.exports = {
  createGetAllCircuitsQuery,
  createInsertCircuitCommand,
  createUpdateCircuitCommand,
  createDeleteCircuitCommand
}

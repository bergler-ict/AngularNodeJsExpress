const database = require('../bin/database');
const allCircuitsQuery = require('./all-circuits.query');
// const deleteDriverCommand = require('./delete-driver.command');
// const insertDriverCommand = require('./insert-driver.command');
// const updateDriverCommand = require('./update-driver.command.js');

const createGetAllCircuitsQuery = () => {
  const query = allCircuitsQuery.create();
  return database.createSqlCommand(query.queryText, query.inputParameters);
}

// const createInsertDriverCommand = (driver) => {
//   const command = insertDriverCommand.create(driver);
//   return database.createSqlCommand(command.queryText, command.inputParameters);
// }

// const createUpdateDriverCommand = (team) => {
//   const command = updateDriverCommand.create(team);
//   return database.createSqlCommand(command.queryText, command.inputParameters);
// }

// const createDeleteDriverCommand = (id) => {
//     const command = deleteDriverCommand.create(id);
//     return database.createSqlCommand(command.queryText, command.inputParameters);
// }

module.exports = {
  createGetAllCircuitsQuery,
  // createInsertDriverCommand,
  // createUpdateDriverCommand,
  // createDeleteDriverCommand
}

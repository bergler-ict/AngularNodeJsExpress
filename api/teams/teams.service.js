const database = require('../bin/database');
const factory = require('./command-query.factory');

const getAllTeams = async () => {
  /* 
    Creates a database command / query object with the following structure: { text: '<QUERY text>', inputParameters: <Array of SQL input parameters> } 
    If there are no SQL input parameters, pass in an empty array.
  */
  const sqlQuery = factory.createGetAllTeamsQuery();

  /* The executeSql function expects a database command / query object as input */
  const result = await database.executeSql(sqlQuery);

  /* A database query result exists of an object with the following structure:
    { 
      recordsets: [[]],
      output: {},
      rowsAffected: []
    }

    Our query only queries for 1 resultset, so we are only interested in the first array of results within the recordsets array.
  */
  return result.recordsets[0];    
}

const insertTeam = async (team) => {
  const sqlCommand = factory.createInsertTeamCommand(team);
  const result = await database.executeSql(sqlCommand);
  return result.recordset[0]; // returns the new team object.
}

const updateTeam = async (team) => {
  const sqlCommand = factory.createUpdateTeamCommand(team);
  const result = await database.executeSql(sqlCommand);
  console.log('Update result', result);
  return result.recordsets[0][0]; // returns the updated team object.
}

const deleteTeam = async (id) => {
  const sqlCommand = factory.createDeleteTeamCommand(id);
  const result = await database.executeSql(sqlCommand);
  return result.rowsAffected[1];
}

module.exports = { 
  all: getAllTeams,
  create: insertTeam,
  modify: updateTeam,
  delete: deleteTeam
 };
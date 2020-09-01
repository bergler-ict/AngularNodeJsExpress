const database = require('../bin/database');
const factory = require('./command-query.factory');

const getAllGrandprixs = async (year) => {
  /* 
    Creates a database command / query object with the following structure: { text: '<QUERY text>', inputParameters: <Array of SQL input parameters> } 
    If there are no SQL input parameters, pass in an empty array.
  */
  const sqlQuery = factory.createGetAllGrandprixsQuery(year);

  /* The executeSql function expects a database command / query object as input */
  database.previewParameterizedQuery(sqlQuery.text, sqlQuery.inputParameters);
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

module.exports = {
  all: getAllGrandprixs,
  // create: insertTeam,
  // modify: updateTeam,
  // delete: deleteTeam
};
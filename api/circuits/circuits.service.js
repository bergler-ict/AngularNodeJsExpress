const database = require('../bin/database');
const factory = require('./command-query.factory');

const getAllCircuits = async () => {
  /* 
    Creates a database command / query object with the following structure: { text: '<QUERY text>', inputParameters: <Array of SQL input parameters> } 
    If there are no SQL input parameters, pass in an empty array.
  */
  const sqlQuery = factory.createGetAllCircuitsQuery()

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

const getAllCircuitsSelectItems = async () => {
  const results = await getAllCircuits();
  return results.map(r => { return { label: r.name, value: r.id } });
}
// const insertDriver = async (driver) => {
//   const sqlCommand = factory.createInsertDriverCommand(driver);
//   const result = await database.executeSql(sqlCommand);
//   return result.recordset[0]; // returns the new created driver object.
// }

// const updateDriver = async (driver) => {
//   const sqlCommand = factory.createUpdateDriverCommand(driver);
//   const result = await database.executeSql(sqlCommand);
//   return result.recordsets[0][0]; // returns updated driver object
// }

// const deleteDriver = async (id) => {
//   const sqlCommand = factory.createDeleteDriverCommand(id);
//   const result = await database.executeSql(sqlCommand);
//   return result.rowsAffected[0];
// }

module.exports = {
  all: getAllCircuits,
  compact: getAllCircuitsSelectItems
  // create: insertDriver,
  // modify: updateDriver,
  // delete: deleteDriver
};
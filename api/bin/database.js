const mssql = require('mssql/msnodesqlv8');
const dbConfig = require('./config');
const chalk = require('chalk');

const executeSql = async (sqlCommand) => {
 
  const pool = new mssql.ConnectionPool(dbConfig);

  pool.on('error', (err) => {
    console.log(chalk.red('sql errors', JSON.stringify(err)));
  });

  try {
    await pool.connect();
    
    let request = pool.request();

    if (sqlCommand.inputParameters) {
      // Add all input parameters to the request object.
      sqlCommand.inputParameters.forEach((sqlParam) => (request = request.input(sqlParam.name, sqlParam.type, sqlParam.value)));
    }

    // Execute the query and return result object.
    return await request.query(sqlCommand.text);
  } catch (err) {
    console.log(chalk.red('Error while executing sql statement: ' + sqlCommand.text + ' : ' + err));
    // Throw custom error object
    throw { status: 500, message: 'An unexpected error occured while reading from or writing to the database.' };
  } finally {
    pool.close();
  }
}

const createSqlCommand = (text, inputParameters) => {
  return { text, inputParameters };
};

const previewParameterizedQuery = (query, sqlParamsIn) => {
    sqlParamsIn.forEach(
      x =>
      (query = query.replace(
        '@' + x.name,
        x.type.length ? "'" + x.value + "'" : x.value
      ))
    );

    console.log(chalk.yellow('Preview ParameterizedQuery : ' + query));
  }
module.exports = { executeSql, createSqlCommand, previewParameterizedQuery };
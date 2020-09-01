const database = require('../bin/database');
const allCountriesQuery = require('./all-countries.query');

const createGetAllCountriesQuery = () => {
  const query = allCountriesQuery.create();
  return database.createSqlCommand(query.queryText, query.inputParameters);
}

module.exports = {
  createGetAllCountriesQuery
};

const dbConfig = {
  server: process.env.SQLSERVER,
  database: process.env.DATABASE,
  driver: 'msnodesqlv8',
  options: {}
}

if (process.env.SQLSERVERPORT) {
  dbConfig.port = process.env.SQLSERVERPORT;
}

if (process.env.USEWINDOWSAUTHENTICATION) {
  dbConfig.options.trustedConnection = true;
} else {
  dbConfig.user = process.env.USER;
  dbConfig.password = process.env.PASSWORD;
}

module.exports = dbConfig;
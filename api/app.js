const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const createError = require('http-errors');
const responses = require('./bin/responses');

const countryRouter = require('./routes/countries');
const teamsRouter = require('./routes/teams');
const driversRouter = require('./routes/drivers');
const raceResultsRouter = require('./routes/raceresults');
const rankingsRouter = require('./routes/rankings');
const grandprixRouter = require('./routes/grandprixs');
const circuitsRouter = require('./routes/circuits');

const app = express();
const routePrefix = '/api';

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(`${routePrefix}/countries`, countryRouter);
app.use(`${routePrefix}/teams`, teamsRouter);
app.use(`${routePrefix}/drivers`, driversRouter);
app.use(`${routePrefix}/raceresults`, raceResultsRouter);
app.use(`${routePrefix}/rankings`, rankingsRouter);
app.use(`${routePrefix}/grandprixs`, grandprixRouter);
app.use(`${routePrefix}/circuits`, circuitsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // return standard error response
  responses.buildResponse(err, null, res);
});

module.exports = app;

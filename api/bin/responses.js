class SuccessResponseSingleResult {
  constructor(status, data) {
    this.data = data[0];
    this.status = status;
  }
}
class SuccessResponseMultipleResults {
  constructor(status, data) {
    this.data = data;
    this.status = status;
  }
}
class ErrorResponse {
  constructor(error, message) {
    if (error.code && error.code === 'EREQUEST') {
      this.error = new Error(500, 'An unforeseen database error occured.')
    } else {
      this.error = new Error(error.statusCode === undefined ? 500 : error.statusCode, message);
    }
  }

  get status() {
    return this.error.status;
  }
  set status(status) {
    this.error.status = status;
  }
}

class PagedResponse {
  constructor(status, data) {
    this.data = data[1];
    this.totalNumberOfItems = data[0][0][''];
    this.status = status;
  }
}

class Error {
  constructor(status, message) {
    this.status = status;
    this.message = message;
  }
}

function successSingleResult(status, items) {
  return new SuccessResponseSingleResult(status, items);
}

function successMultipleResults(status, items) {
  return new SuccessResponseMultipleResults(status, items);
}

function pagedSuccess(status, result) {
  return new PagedResponse(status, result);
}

function error(error, message) {
  return new ErrorResponse(error, message);
}

function buildResponse(err, result, res) {
  const response = err ?
    error(err, err.message) :
    successSingleResult(result.statusCode ? result.statusCode : 200, result);
  res.status(response.status).json(response);
}

function buildResponseMultipleResults(err, result, res) {
  const response = err ?
    error(err, err.message) :
    successMultipleResults(result.statusCode ? result.statusCode : 200, result);
  res.status(response.status).json(response);
}

function buildPagedResponse(err, result, res) {
  const response = err ?
    error(err, err.message) :
    pagedSuccess(result.statusCode ? result.statusCode : 200, result);
  res.status(response.status).json(response);
}

module.exports = {
  buildResponse,
  buildResponseMultipleResults,
  buildPagedResponse
};

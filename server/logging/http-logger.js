// HTTP logger using Morgan.
// Morgan catches HTTP requests, formats the request,
// and passes the request to an application logger that takes care of the actual logging.
// Import this module and pass in an app instance to initialize the HTTP logger.

const morgan = require('morgan');
const appLogger = require('./app-logger'); // Depends on an app-logger to enable logging of http-requests to log-files.

// Logging http requests with winston via morgan
const env = process.env.NODE_ENV || 'development';
const format = (env === 'development' ? 'dev' : 'combined');

// Initializes the HTTP logger when called
function HttpLogger(app) {
  // Skips logging info if status code is *not ok* (>= 400)
  app.use(morgan(format, {
    skip(req, res) {
      return res.statusCode >= 400;
    },
    stream: appLogger.infoStream,
  }));

  app.use(morgan(format, {
    // Skips logging error if status code is *ok* (< 400)
    skip(req, res) {
      return res.statusCode < 400;
    },
    stream: appLogger.errorStream,
  }));
}

module.exports = HttpLogger;
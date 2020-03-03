const http = require('http');
const path = require('path');
const appLogger = require('../logging/app-logger'); // Get application logger
const app = require('../devApp');
// Get serverPort from config and store in Express.
const { port } = require('../config/server-config.js');

const normalizePort = function parsePortConfig(val) {
    const port = parseInt(val, 10);
    if (Number.isNaN(port)) {
      // named pipe
      return val;
    }
    if (port >= 1025) {
      // port number
      return port;
    }
    throw new Error('Invalid port number!');
  };

const serverPort = normalizePort(port || '3000');
app.set('port', serverPort);

// Event listener for HTTP server "error" event.
const failAndExit = function failAndExit(err) {
  appLogger.error(err.stack);

  if (err.syscall !== 'listen') {
    throw err;
  }

  const bind = typeof serverPort === 'string' ? `Pipe ${serverPort}` : `Port ${serverPort}`;

  // handle specific listen errors with friendly messages
  switch (err.code) {
    case 'EACCES':
      appLogger.error(`${bind} requires elevated privileges`);
      process.exitCode = 1;
      break;
    case 'EADDRINUSE':
      appLogger.error(`${bind} is already in use`);
      process.exitCode = 1;
      break;
    default:
      throw err;
  }
};

// Event listener for HTTP server "listening" event.
const uponListening = function uponServerStarted() {
  const bind = typeof serverPort === 'string' ? `pipe ${serverPort}` : `port ${serverPort}`;
  appLogger.info(`Server listening on ${bind}`);
};

/**
 * Create HTTP server.
 */
const server = http.createServer(app);
server.on('error', failAndExit);
server.on('listening', uponListening);

server.listen(serverPort);
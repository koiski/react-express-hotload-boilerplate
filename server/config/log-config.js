const path = require('path');

// Configs for logging with the Winston module
// Defines different configs for development, testing, and production

// Custom timestamp function
const localTime = () => (new Date()).toISOString();

const config = Object.freeze({
  development: {
    application: {
      filename: path.join(__dirname, '../', 'logs/development', 'log'), // Prepend log to filename
      datePattern: 'dd-MM-yyyy.',
      prepend: true,
      localTime: true,
      level: 'debug',
      handleExceptions: true,
      json: true,
      maxsize: 1024 * 1024 * 1, // 1MB
      maxFiles: 10,
      colorize: false,
      timestamp: localTime,
    },
    console: {
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true,
      timestamp: localTime,
    },
  },
  test: {
    application: {
      filename: path.join(__dirname, '../', 'logs/test', 'log'), // Prepend log to filename
      datePattern: 'dd-MM-yyyy.',
      prepend: true,
      localTime: true,
      level: 'info',
      handleExceptions: true,
      json: true,
      maxsize: 1024 * 1024 * 100, // 100MB
      maxFiles: 10,
      colorize: false,
      timestamp: localTime,
    },
    console: {
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true,
      timestamp: localTime,
    },
  },
  production: {
    application: {
      name: 'applog',
      filename: path.join(__dirname, '../', 'logs/production', 'log'), // Prepend log to filename
      datePattern: 'dd-MM-yyyy.',
      prepend: true,
      localTime: true,
      level: 'info',
      handleExceptions: true,
      json: true,
      maxsize: 1024 * 1024 * 100, // 100MB
      maxFiles: 10,
      colorize: false,
      timestamp: localTime,
    },
    console: {
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true,
      timestamp: localTime,
    },
  },
});
module.exports = config;
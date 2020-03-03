// Logging using Winston
// Using winston-daily-rotate-file to create a new log file on a daily basis
// Winston log levels: { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 }

const winston = require('winston');
require('winston-daily-rotate-file');
const md = require('make-dir');
const path = require('path');

const env = process.env.NODE_ENV || 'development';
const configs = require('../config/log-config.js');

/**
 * @function createDirectory
 *
 * Uses make-dir to create one directory and corresponding subdirectories
 * */
const createDirectory = function waitForDir(name) {
  md(path.join(__dirname, '../', name), { mode: 0o640 });
};

let conf;
switch (env) {
  case 'development':
    conf = configs.development;
    createDirectory('logs/development');
    break;
  case 'test':
    conf = configs.test;
    createDirectory('logs/test');
    break;
  case 'production':
    conf = configs.production;
    createDirectory('logs/production');
    break;
  default:
    throw new Error('Invalid value for process.env.NODE_ENV');
}

const appLogger = winston.createLogger({
  transports: [
    new winston.transports.DailyRotateFile(conf.application), // Log to file
    new winston.transports.Console(conf.console), // Log to console
  ],
  exitOnError: false,
});

module.exports = appLogger;
module.exports.infoStream = {
  write(message) {
    appLogger.info(message);
  },
};
module.exports.errorStream = {
  write(error) {
    appLogger.error(error);
  },
};
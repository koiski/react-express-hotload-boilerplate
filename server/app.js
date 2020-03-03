const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');


// Get HTTP logger
const httpLogger = require('./logging/http-logger');

// Initialise application
const app = express();
app.use(helmet());
app.use(cors());

// Initialize HTTP logging for the application
httpLogger(app);

// Express setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set up routes to index.html, css and js
app.use('/assets', express.static(path.join(__dirname, '../static', 'assets')));
app.use('/favicon.ico', express.static(path.join(__dirname, '../static/favicon.ico')));
// Route the bundled js-file produced webpack client config
app.use('/js', express.static(path.join(__dirname, '../static', 'js')));



// Export
module.exports = app;

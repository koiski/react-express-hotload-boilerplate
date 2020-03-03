const app = require('./app');

const markup = require('./markup');


// Routes
app.get('/*', markup);

module.exports = app;

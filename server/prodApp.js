const app = require('./app');
const path = require('path');
//const compression = require('compression')
//const express = require('express');

//app.use(express.compression);
// Routes
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../static', 'index.html'));
});

module.exports = app;

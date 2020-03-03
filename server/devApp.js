const app = require('./app');
const path = require('path');
const { hot, dev } = require('./devTools');


app.use(dev());
app.use(hot());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../static', 'index.html'));
});

module.exports = app;

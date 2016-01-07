var express = require('express');
var app = express();

var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
module.exports = app;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var indexHtmlPath = path.join(__dirname, '/views/index.html');

app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', function (req, res) {
   res.sendFile(indexHtmlPath);
});

app.use('/guestbook', require('./routes/guestbook.js'));


app.use(function (err, req, res, next) {
    console.error(err);
    res.status(500).send(err.message);
});

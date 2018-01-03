var express = require('express');
var logger = require('morgan');
var http = require('http');
var bodyParser = require('body-parser');

var port = parseInt(process.env.PORT) || 3000;

var app = express().set('port', port);

app.use(logger('dev')); // Use morgan
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Our routes */
require('./server/routes')(app);

/* Base */
app.get('*', function(req, res){
    res.status(200).send({message: 'API Working'})
});

var server = http.createServer(app).listen(port);
console.log('Server OK, make requests to http://localhost:' + port);

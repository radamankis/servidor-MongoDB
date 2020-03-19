var express = require('express')
var db= require('./db')
var app= express();
var bodyParser = require('body-parser');
var router = require('./network/router')
app.use(bodyParser.json())
db('mongodb+srv://admin:r20636247@clusterrn-odz2j.mongodb.net/clusterrn?retryWrites=true&w=majority')

router(app);


app.listen(3000);
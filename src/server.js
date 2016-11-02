const express = require('express');
const app = express();
var mongoose = require('mongoose');
var Crime = require('./models/crimes');
const path = require('path');

app.set('view engine', 'jade');
app.use("/", express.static(path.join(__dirname, 'public')));

//Connexion
app.get('/api/login', function(req, res) {
    mongoose.connect('mongodb://mongo/mydb', function(err) {
        if (err) {
            throw err;
        }
        else {
            res.send('connected');
        }
    });
});


//Tout afficher
app.get('/api/showAll', function(req, res) {
    Crime.find({} ,function (err, data) {
        if (err) throw err;
        res.json(data);
    });
});


//Chercher par date

var crimeKey = "fromdate";
var crimeValue= "2015-05-12T00:10:00";
var query = {};
query[crimeKey] = crimeValue;

app.get('/api/search', function(req, res) {
    Crime.find(query ,function (err, data) {
        if (err) throw err;
        res.json(data);
    });
});

//Chercher et supprimer

var crimeKey = "compnos";
var crimeValue= "152038711";
var query = {};
query[crimeKey] = crimeValue;

app.get('/api/delete', function(req, res) {
    Crime.find(query).remove().exec();
});

//Chercher et updater


//Deconnexion
app.get('/api/logout', function(req, res) {
    mongoose.connection.close( function(err) {
        if (err) {
            throw err;
        }
        else {
            res.send('disconnected');
        }
    });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


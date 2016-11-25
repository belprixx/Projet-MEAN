const express = require('express');
const app = express();
var mongoose = require('mongoose');
var Crime = require('./models/crimes');
const path = require('path');

var crimeKey = "compnos";
var crimeValue= "152038703";
var query = {};
query[crimeKey] = crimeValue;

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


//Chercher

//var crimeKey = "fromdate";
//var crimeValue= "2015-05-12T00:10:00";
//var query = {};
//query[crimeKey] = crimeValue;

app.get('/api/search', function(req, res) {
    Crime.find(query ,function (err, data) {
        if (err) throw err;
        res.json(data);
    });
});

//Chercher et supprimer


app.get('/api/delete', function(req, res) {
    Crime.find(query).remove().exec();
});

//Créer

var test = new Crime({
    compnos: '123456789',
    naturecode: 'testnaturecode',
    incident_type_description: 'testIncident_type_desc',
    main_crimecode: 'testMain_crimecode',
    reptdistrict: 'test_repdistrict',
    reportingarea: '6',
    fromdate: '2016-06-06T06:06:06',
    weapontype: 'testweapontype',
    shooting: 'True',
    domestic: 'True',
    shift: 'Last',
    year: '2016',
    month: '6',
    day_week: 'Tuesday',
    ucrpart: 'Part One',
    x: '666666.6666',
    y: '666666.6666',
    streetname: 'Hell St',
    xstreetname: 'Damnation st'
});

app.get('/api/add', function(req, res) {
    test.save(function (err, test) {
        if (err) return console.error(err);
        console.dir(test);
    });
});


//Chercher et updater


//app.get('/api/update', function(req, res) {

//});


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


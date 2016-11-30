const express = require('express');
const app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Crime = require('./models/crimes');
const path = require('path');

var crimeKey = "compnos";
var crimeValue= "152038707";
var query = {};
query[crimeKey] = crimeValue;

app.set('view engine', 'jade');
app.use("/", express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://mongo/mydb', function(err) {
    if (err) {
        throw err;
    }
    else {
        console.log("connected")
    }
});


//Tout afficher
app.get('/api/showAll', function(req, res) {
    Crime.find({} ,function (err, data) {
        if (err) throw err;
        res.json(data);
    });
});

//Chercher

app.get('/api/search', function(req, res) {
    Crime.find(query ,function (err, data) {
        if (err) throw err;
        res.json(data);
    });
});

//Chercher et supprimer

app.get('/api/delete', function(req, res) {
    Crime.find(query).remove().exec();
    res.send('Deleted');
});

//Créer

app.post('/api/add', function(req, res) {
    var createCrime = new Crime({
        compnos: req.body.compnos,
        naturecode: req.body.naturecode,
        incident_type_description: req.body.incident_type_description,
        main_crimecode: req.body.main_crimecode,
        reptdistrict: req.body.repdistrict,
        reportingarea: req.body.reportingarea,
        fromdate: req.body.fromdate,
        weapontype: req.body.weapontype,
        shooting: req.body.shooting,
        domestic: req.body.domestic,
        shift: req.body.shift,
        year: req.body.year,
        month: req.body.month,
        day_week: req.body.day_week,
        ucrpart: req.body.ucrpart,
        x: req.body.x,
        y: req.body.y,
        streetname: req.body.streetname,
        xstreetname: req.body.xstreetname,
        location: req.body.location
    });
    createCrime.save(function (err) {
        if (err){
            console.log(err);
            res.send(err);
        }
        else {
            res.json({message: "YOLO"});
        }
    });
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


const express = require('express');
const app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Crime = require('./models/crimes');
const path = require('path');
var User = require('./models/users');

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

// get User TEST
app.post('/api/userTEST', function(req, res){
  console.log(req.body);
  User.findOne({"username": req.body.username, "password": req.body.password},function (err, data){
    if (err) console.log(err);
    res.json(data);
  });
});

// get User List
app.get('/api/userList', function(req, res){
   User.find({}, function(err, data){
     if(err) console.log(err);
       res.json(data);
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

app.post('/api/search', function(req, res) {
    var query = req.body;
    Crime.find(query ,function (err, data) {
        if (err) throw err;
        res.json(data);
    });
});

//Chercher et supprimer

app.post('/api/delete', function(req, res) {
    var query = req.body;
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
        reptdistrict: req.body.reptdistrict,
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
            res.json({message: "Crime added"});
        }
    });
});

//Updater

app.post('/api/update', function(req, res) {
    Crime.findById(req.body._id, function(err, crime) {
        if (err){
            console.log(err);
            res.send(err);
        }
        crime.compnos = req.body.compnos || crime.compnos;
        crime.naturecode = req.body.naturecode || crime.naturecode;
        crime.incident_type_description = req.body.incident_type_description || crime.incident_type_description;
        crime.main_crimecode = req.body.main_crimecode || crime.main_crimecode;
        crime.reptdistrict = req.body.reptdistrict || crime.reptdistrict;
        crime.reportingarea = req.body.reportingarea || crime.reportingarea;
        crime.fromdate = req.body.fromdate || crime.fromdate;
        crime.weapontype = req.body.weapontype || crime.weapontype;
        crime.shooting = req.body.shooting || crime.shooting;
        crime.domestic = req.body.domestic || crime.domestic;
        crime.shift = req.body.shift || crime.shift;
        crime.year = req.body.year || crime.year;
        crime.month = req.body.month || crime.month;
        crime.day_week = req.body.day_week || crime.day_week;
        crime.ucrpart = req.body.ucrpart || crime.ucrpart;
        crime.x = req.body.x || crime.x;
        crime.y = req.body.y || crime.y;
        crime.streetname = req.body.streetname || crime.streetname;
        crime.xstreetname = req.body.xstreetname || crime.xstreetname;
        crime.location = req.body.location || crime.location;

        crime.save(function(err) {
            if (err){
                console.log(err);
                res.send(err);
            }
            else {
                res.json({message: "Crime updated"});
                console.log('User successfully updated!');
            }
        });
    });
});

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

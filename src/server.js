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
app.get('/api/showByDate', function(req, res) {
    Crime.find({} ,function (err, data) {
        if (err) throw err;
        res.json(data);
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


const express = require('express');
const app = express();
var mongoose = require('mongoose');

var Crime = require('./models/crimes');

app.set('view engine', 'jade');
app.get('/', function(req, res) {
    res.sendfile('./src/public/index.html')
});

app.get('/api/login', function(req, res) {
    mongoose.connect('mongodb://mongo/mydb/', function(err) {
        if (err) {
            throw err;
        }
        else {
            //res.send('connected');
            Crime.find({}, function(err, crimes) {
                if (err) throw err;

                // object of all the users
                console.log('hello');
            });
        }
        mongoose.connection.close();
    });
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


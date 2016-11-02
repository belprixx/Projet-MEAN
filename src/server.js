const express = require('express');
const app = express();
var mongoose = require('mongoose');
var Crime = require('./models/crimes');
const path = require('path');

app.set('view engine', 'jade');
app.use("/", express.static(path.join(__dirname, 'public')));

app.get('/api/login', function(req, res) {
    mongoose.connect('mongodb://mongo/mydb', function(err) {
        if (err) {
            throw err;
        }
        else {
            //res.send('connected');
            Crime.find({} ,function (err, data) {
                if (err) throw err;
                res.json(data);
            });
        }
    });
    //mongoose.connection.close();
});




app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


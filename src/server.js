const express = require('express');
const app = express();

app.set('view engine', 'jade');
app.get('/', function(req, res) {
    res.sendfile('./src/public/index.html')
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

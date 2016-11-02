const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'jade');
app.use("/", express.static(path.join(__dirname, 'public')));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

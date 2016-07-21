var express = require('express');

var app = express();

app.use(express.static('public'));

app.listen(8800, function (){
  console.log('Server running on port 8800');
});
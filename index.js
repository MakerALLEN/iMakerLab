var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.sendFile(__dirname + 'index.html');
});

http.createServer(app).listen(process.env.PORT, function(){
  console.log('Express server listening on port ' + process.env.PORT || 3000);
});

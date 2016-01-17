var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/', function(request, response){
  response.sendFile(__dirname + '/views/index.html');
});

var server = app.listen(5000, function(){
  var port = server.address().port;
  console.log('Listening on port', port);
});

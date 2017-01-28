var express = require('express');
var server = express();

var port = 8080;

server.use(express.static(__dirname + '/public'));

server.get('/', function(request, response){
  response.sendFile('index.html', { root: __dirname + '/public/html'});
});

server.get('/signup', function(request, response){
  response.sendFile('signup.html', { root: __dirname + '/public/html'});
});

server.get('/login', function(request, response){
  response.sendFile('login.html', { root: __dirname + '/public/html'});
});

server.listen(port, function(){
  console.log("Now listening on port...", port);
});

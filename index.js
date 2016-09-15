// Setup basic express server
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;
/*var OpenfiscaAPI = require('gouv-openfisca-api');
 
var Openfisca = new OpenfiscaAPI();
console.log(Openfisca)*/
/*Openfisca.entities(null, function(error, result) {
  console.log(error, result);
});*/
/*var data='{"V_ANREV":2014,"TSHALLOV":30000,"V_0DA":1980}';
 
Openfisca.calculate(JSON.stringify(data), function(error, result) {
	console.log("123");
  console.log(error, result);
});*/

server.listen(port, function () {
	console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(__dirname + '/public'));

//Socket.IO
io.on('connect', function(){
	console.log("connecte");
});
io.on('event', function(data){
	console.log(data);
});
io.on('disconnect', function(){
	console.log("deconnecte");
});





 

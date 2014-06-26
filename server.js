var http = require('http');  
var connect = require('connect');  
var app = connect(); 
var port = 8080;
app.use(connect.static(__dirname + '/'));
http.createServer(app).listen(port);
console.log('httpServer at http://localhost:' + port);
var SimpleHTTPServer = require("./server/SimpleHTTPServer");
var mappings=require("./mappings").mappings;
console.log(mappings);
var server= new SimpleHTTPServer.Server(mappings);
server.start();

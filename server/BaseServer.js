var http = require("http");
var url = require("url");
var util = require("util");

function BaseServer(router) {
	this.router = router;
}
BaseServer.prototype.start = function(port) {
	var self = this;
	port = port || 8888;
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		self.router.route(pathname, response, request);
	}
	http.createServer(onRequest).listen(port);
	console.log("Server has started.");
};
exports.Server = BaseServer;
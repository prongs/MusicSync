var util = require("util");
var BaseServer = require("./BaseServer");
var SimpleRouter = require("../router/SimpleRouter");
var router = new SimpleRouter.Router();

function SimpleHTTPServer(mapping) {
	this.router = new SimpleRouter.Router(mapping);
}
util.inherits(SimpleHTTPServer, BaseServer.Server);
exports.Server = SimpleHTTPServer;
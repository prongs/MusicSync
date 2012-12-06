var fs = require("fs");
var SimpleController = require("../controller/SimpleController");
var BaseRouter = require("./BaseRouter");
var util = require("util");

function SimpleRouter(mapping) {
	SimpleRouter.super_.call(this, mapping, null, SimpleController.Controller);
}
util.inherits(SimpleRouter, BaseRouter.Router)
exports.SimpleRouter = SimpleRouter;
exports.Router = SimpleRouter;
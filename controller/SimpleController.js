var BaseController = require("./BaseController");
var util = require("util");

function SimpleController(request, response, responderFunc) {
	SimpleController.super_.call(this, request, response, responderFunc);
}
util.inherits(SimpleController, BaseController.Controller)
exports.Controller = SimpleController;
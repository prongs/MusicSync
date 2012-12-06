function BaseController(request, response, responderFunc) {
	this.request = request;
	this.response = response;
	this.respond = responderFunc;
}
exports.Controller = BaseController;
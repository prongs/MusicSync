var fs = require("fs");

function BaseRouter(mappings, base, controller) {
    this.setupRouts(mappings);
    this.fileBase = base || "./files";
    this.Controller = controller;
}

BaseRouter.prototype.setupRouts = function(mappings) {
    this.mappings = mappings;
}
BaseRouter.prototype.route = function(path, response, request) {
    //make this async,maybe
    for(var key in this.mappings) {
        if(this.mappings.hasOwnProperty(key)) {
            var m = path.match(key);
            if(m) {
                var cont = new this.Controller(request, response, this.mappings[key]);
                return cont.respond.apply(this, m);
            }
        }
    }
    fs.readFile(this.fileBase + "/" + path, function(err, html) {
        if(err) {
            console.log("error: " + err);
            response.writeHeader(500);
            response.end();
        } else {
            response.writeHeader(200);
            response.write(html);
            response.end();
        }
    });
}
exports.BaseRouter = BaseRouter;
exports.Router = BaseRouter;
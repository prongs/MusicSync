var fs = require("fs");
var mime = require("mime");
function BaseRouter(mappings, base, controller) {
    this.setupRouts(mappings);
    this.fileBase = base || "./files";
    this.Controller = controller;
}

BaseRouter.prototype.setupRouts = function(mappings) {
    this.mappings = mappings;
};
BaseRouter.prototype.route = function(path, response, request) {
    //make this async,maybe
    for(var key in this.mappings) {
        if(this.mappings.hasOwnProperty(key)) {
            var m = path.match(new RegExp(key));
            if(m) {
                console.log("matched key "+key);
                var cont = new this.Controller(request, response, this.mappings[key]);
                return cont.respond.apply(this, m);
            }
        }
    }
    var fullFileName = this.fileBase + "/" + path;
    var type = mime.lookup(fullFileName);
    fs.readFile(fullFileName, function(err, html) {
        if(err) {
            console.log("error: " + err);
            response.writeHeader(500);
            response.write("<h1>File not found: "+path+"</h1>");
            response.end();
        } else {
            response.writeHeader(200, {
                'Content-Type' : type
            });
            response.write(html);
            response.end();
        }
    });
};
exports.BaseRouter = BaseRouter;
exports.Router = BaseRouter;
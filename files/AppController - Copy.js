define(["dojo/_base/declare","./MainViewWidget","dojo/dom"],
function(declare,MainViewWidget,dom){
    return declare([], {
        init: function(){
            var self=this;
            var people=[
            {
                name: "Rajat Khandelwal",
                status: 1,
                status_msg: "Available"
            },
            {
                name: "Rajat",
                status: 2,
                status_msg: "I'm online!"
            },
            {
                name: "Khandelwal",
                status: 3,
                status_msg: "GoW!!"
            }
            ];
            var args={people:people};
            self.viewController= new MainViewWidget(args);
            self.viewController.placeAt(dom.byId("mainViewWidgetDiv"));
            }
        });
    });

define(["dojo/_base/declare","dojo/_base/array", "dojo/dom","dijit/_WidgetBase", "dijit/_TemplatedMixin", "dojo/text!./templates/PersonWidget.html","dojo/dom-class",

"dijit/layout/TabContainer","dijit/layout/ContentPane","dijit/layout/AccordionContainer"
],
function(declare,array,dom,WidgetBase, TemplatedMixin,template,domClass){
    return declare("chat.PersonWidget",[WidgetBase, TemplatedMixin], {
        templateString:template,
        constructor: function(args){
            self.person=args.person;
            self.mainWidget=args.mainWidget;
        },
        startup: function(){
            var self=this;
            self.setStatus(self.person.status);
        },
        setStatus: function(new_status)
        {
            var self=this;
            var status_class_name="";
            switch(new_status)
            {
                case "online":
                case 1: status_class_name="status_online"; break;
                case "busy":
                case 2: status_class_name="status_busy"; break;
                case "away":
                case 3: status_class_name="status_away"; break;
                case "offline":
                case 4: status_class_name="status_offline"; break;
                default: break;
            }
            domClass.replace(self._status_img_div, "status_img "+status_class_name);
            self.person.status=new_status;
        },
        _onHover: function()
        {
            domClass.replace(this._table, "hover","unhover");
        },
        _onUnHover: function()
        {
            domClass.replace(this._table, "unhover","hover");
        },
        _onClick: function()
        {
           var self=this;
           self.mainWidget.startChat(self.person);
        }
        });
    });

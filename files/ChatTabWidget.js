define(["dojo/_base/declare","dojo/_base/array", "dojo/dom","dijit/_WidgetBase", "dijit/_TemplatedMixin", "dojo/text!./templates/ChatTabWidget.html","dijit/registry",

"dijit/layout/TabContainer","dijit/layout/ContentPane","dijit/layout/AccordionContainer"],
function(declare,array,dom,WidgetBase, TemplatedMixin,template,registry,
TabContainer,ContentPane
){
    return declare("chat.ChatTabWidget",[TemplatedMixin, WidgetBase], {
        templateString:template,
        constructor: function(args){
            var self=this;
            self.person=args.person;
        },
        });
    });

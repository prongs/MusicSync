define(["dojo/_base/declare","dojo/ready","dojo/_base/array", "dojo/dom","dijit/_WidgetBase", "dijit/_TemplatedMixin", "dojo/text!./templates/MainViewWidget.html","./PersonWidget","dijit/registry","./ChatTabWidget",

"dijit/layout/TabContainer","dijit/layout/ContentPane","dijit/layout/AccordionContainer"],
function(declare,ready,array,dom,WidgetBase, TemplatedMixin,template,PersonWidget,registry,ChatTabWidget,
TabContainer,ContentPane
){
    return declare("chat.MainViewWidget",[WidgetBase, TemplatedMixin], {
        templateString:template,
        //widgetsInTemplate:true,
        constructor: function(args){
            var self=this;
            self.people=args.people;
        },
    startup: function(){
                 var self=this;
                 ready(function(){
                     self.tabContainer= new TabContainer({
                         style: "height: 100%; width: 100%;"
                     },"ll");
                     self.tabContainer.startup();
                     array.forEach(self.people, function(person){
                         var args={person:person,mainWidget:self};
                         var p=new PersonWidget(args);
                         p.startup();
                         p.placeAt(self._friendList,"last");
                     });
                 });
             },
    startChat: function(person){
                   var self=this;
            var tab= new ChatTabWidget({person:person,title:person.name, closable:true});
            var cp= new ContentPane({title:person.name, closable:true,content:"<div><div data-dojo-type='dijit.layout.ContentPane'> hi</div><input type='text' value='sample' ></div>"});

            self.tabContainer.addChild(cp);
        },
        });
    });

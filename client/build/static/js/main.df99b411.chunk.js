(this["webpackJsonpkeeper-part-3-completed"]=this["webpackJsonpkeeper-part-3-completed"]||[]).push([[0],{24:function(e,t,n){e.exports=n(50)},50:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(23),r=n.n(l),o=n(11);var u=function(){return c.a.createElement("header",null,c.a.createElement("h1",null,"Keeper"))},i=n(7),m=n(8);var f=function(e){return c.a.createElement("div",{className:"note"},c.a.createElement("h1",null,e.title),c.a.createElement("p",null,e.content),c.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},c.a.createElement(i.a,{icon:m.b})))},p=n(9),E=n(12),s=n(10),d=n.n(s);var v=function(e){var t=Object(a.useState)({title:"",content:""}),n=Object(o.a)(t,2),l=n[0],r=n[1];function u(e){var t=e.target,n=t.name,a=t.value;r((function(e){return Object(E.a)(Object(E.a)({},e),{},Object(p.a)({},n,a))}))}return c.a.createElement("div",null,c.a.createElement("form",null,c.a.createElement("input",{name:"title",onChange:u,value:l.title,placeholder:"Title"}),c.a.createElement("textarea",{name:"content",onChange:u,value:l.content,placeholder:"Take a note...",rows:"3"}),c.a.createElement("button",{onClick:function(e){r({title:"",content:""}),e.preventDefault();var t={title:l.title,content:l.content};d.a.post("http://localhost:8080/create",t)}},c.a.createElement(i.a,{icon:m.a}))))};var h=function(){var e=Object(a.useState)([{title:"",content:""}]),t=Object(o.a)(e,2),n=t[0],l=t[1];function r(e){d.a.delete("/delete/".concat(e))}return Object(a.useEffect)((function(){fetch("/notes").then((function(e){if(e.ok)return e.json()})).then((function(e){return l(e)}))})),c.a.createElement("div",null,c.a.createElement(u,null),c.a.createElement(v,null),n.map((function(e,t){return c.a.createElement(f,{key:t,id:e._id,title:e.title,content:e.content,onDelete:r})})))};r.a.render(c.a.createElement(h,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.df99b411.chunk.js.map
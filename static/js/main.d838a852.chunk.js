(this.webpackJsonpblock_preview=this.webpackJsonpblock_preview||[]).push([[0],[,,,,,function(e,t,a){},,,,,,function(e,t,a){e.exports=a(25)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(9),c=a.n(l),r=a(3),i=(a(16),a(17),a(4)),u=a(10),s=a(2);function m(e,t,a){var n=document.getElementById("main-box");({"height-plus":function(){var e=t.heigth+1;n.style.height="".concat(e,"px"),a(Object(s.a)({},t,{heigth:e}))},"height-minus":function(){var e=t.heigth-1;n.style.height="".concat(e,"px"),a(Object(s.a)({},t,{heigth:e}))},"width-plus":function(){var e=t.width+1;n.style.width="".concat(e,"px"),a(Object(s.a)({},t,{width:e}))},"width-minus":function(){var e=t.width-1;n.style.width="".concat(e,"px"),a(Object(s.a)({},t,{width:e}))}})[e]()}a(23);function d(){var e=Object(n.useState)({heigth:150,width:150}),t=Object(r.a)(e,2),a=t[0],l=t[1];function c(e){return o.a.createElement(u.a,{icon:e})}return o.a.createElement("div",{id:"main-box-area"},o.a.createElement("span",{className:"box-size"},a.width,"x",a.heigth,"px"),o.a.createElement("div",{id:"main-box"}),o.a.createElement("div",{className:"size-change"},o.a.createElement("section",null,o.a.createElement("span",null,"w"),o.a.createElement("span",{className:"size-changer size-changer-minus size-width-minus",onClick:function(){return m("width-minus",a,l)}},c(i.a)),o.a.createElement("span",{className:"size-changer size-changer-plus size-width-plus",onClick:function(){return m("width-plus",a,l)}},c(i.b))),o.a.createElement("section",null,o.a.createElement("span",null,"h"),o.a.createElement("span",{className:"size-changer size-changer-minus size-height-minus",onClick:function(){return m("height-minus",a,l)}},c(i.a)),o.a.createElement("span",{className:"size-changer size-changer-plus size-height-plus",onClick:function(){return m("height-plus",a,l)}},c(i.b)))))}a(5);function p(e,t,a){var n=e;({top:function(){n.style.borderTopStyle=t},right:function(){n.style.borderRightStyle=t},bottom:function(){n.style.borderBottomStyle=t},left:function(){n.style.borderLeftStyle=t}})[a]()}function E(e,t,a){var n=e;({top:function(){n.style.borderTopColor=t},right:function(){n.style.borderRightColor=t},bottom:function(){n.style.borderBottomColor=t},left:function(){n.style.borderLeftColor=t}})[a]()}function g(e,t,a){var n=e;({top:function(){n.style.borderTopWidth="".concat(t,"px")},right:function(){n.style.borderRightWidth="".concat(t,"px")},bottom:function(){n.style.borderBottomWidth="".concat(t,"px")},left:function(){n.style.borderLeftWidth="".concat(t,"px")}})[a]()}function v(e,t,a){var n=e;({top:function(){n.style.borderTopLeftRadius="".concat(t,"%")},right:function(){n.style.borderTopRightRadius="".concat(t,"%")},bottom:function(){n.style.borderBottomRightRadius="".concat(t,"%")},left:function(){n.style.borderBottomLeftRadius="".concat(t,"%")}})[a]()}function h(e){var t=e.stateTop,a=e.setStateTop;return o.a.createElement("div",{className:"custumize-section"},o.a.createElement("p",null,"Top"),o.a.createElement("div",{className:"costumize-area"},"Style"," ",o.a.createElement("select",{onChange:function(e){a(Object(s.a)({},t,{style:e.target.value})),p(document.getElementById("main-box"),e.target.value,"top")}},o.a.createElement("option",{value:"solid",selected:!0},"solid"),o.a.createElement("option",{value:"dashed"},"dashed"),o.a.createElement("option",{value:"double"},"double"),o.a.createElement("option",{value:"dotted"},"dotted"),o.a.createElement("option",{value:"groove"},"groove"),o.a.createElement("option",{value:"ridge"},"ridge"),o.a.createElement("option",{value:"inset"},"inset"),o.a.createElement("option",{value:"outset"},"outset"),o.a.createElement("option",{value:"hidden"},"hidden"))),o.a.createElement("br",null),o.a.createElement("div",{className:"costumize-area"},"Color"," ",o.a.createElement("input",{name:"color",type:"color",onChange:function(e){a(Object(s.a)({},t,{color:e.target.value})),E(document.getElementById("main-box"),e.target.value,"top")}})),o.a.createElement("br",null),o.a.createElement("div",{className:"costumize-area"},"Size"," ",o.a.createElement("input",{name:"size",type:"number",onChange:function(e){a(Object(s.a)({},t,{size:"".concat(e.target.value,"px")})),g(document.getElementById("main-box"),e.target.value,"top")}})),o.a.createElement("br",null),o.a.createElement("div",{className:"costumize-area"},"Radius"," ",o.a.createElement("input",{name:"radius",type:"range",value:t.radius,step:"1",min:"0",max:"100",onChange:function(e){a(Object(s.a)({},t,{radius:e.target.value})),v(document.getElementById("main-box"),e.target.value,"top")}}),o.a.createElement("span",null,"".concat(t.radius,"%"))))}function b(e){var t=e.stateRight,a=e.setStateRight;return o.a.createElement("div",{className:"custumize-section"},o.a.createElement("p",null,"Right"),o.a.createElement("div",{className:"costumize-area"},"Style"," ",o.a.createElement("select",{onChange:function(e){a(Object(s.a)({},t,{style:e.target.value})),p(document.getElementById("main-box"),e.target.value,"right")}},o.a.createElement("option",{value:"solid",selected:!0},"solid"),o.a.createElement("option",{value:"dashed"},"dashed"),o.a.createElement("option",{value:"double"},"double"),o.a.createElement("option",{value:"dotted"},"dotted"),o.a.createElement("option",{value:"groove"},"groove"),o.a.createElement("option",{value:"ridge"},"ridge"),o.a.createElement("option",{value:"inset"},"inset"),o.a.createElement("option",{value:"outset"},"outset"),o.a.createElement("option",{value:"hidden"},"hidden"))),o.a.createElement("br",null),o.a.createElement("div",{className:"costumize-area"},"Color"," ",o.a.createElement("input",{name:"color",type:"color",onChange:function(e){a(Object(s.a)({},t,{color:e.target.value})),E(document.getElementById("main-box"),e.target.value,"right")}})),o.a.createElement("br",null),o.a.createElement("div",{className:"costumize-area"},"Size"," ",o.a.createElement("input",{name:"size",type:"number",onChange:function(e){a(Object(s.a)({},t,{size:"".concat(e.target.value,"px")})),g(document.getElementById("main-box"),e.target.value,"right")}})),o.a.createElement("br",null),o.a.createElement("div",{className:"costumize-area"},"Radius"," ",o.a.createElement("input",{name:"radius",type:"range",value:t.radius,step:"1",min:"0",max:"100",onChange:function(e){a(Object(s.a)({},t,{radius:e.target.value})),v(document.getElementById("main-box"),e.target.value,"right")}})," ",o.a.createElement("span",null,"".concat(t.radius,"%"))))}function f(e){var t=e.stateBottom,a=e.setStateBottom;return o.a.createElement("div",{className:"custumize-section"},o.a.createElement("p",null,"Bottom"),o.a.createElement("div",{className:"costumize-area"},"Style"," ",o.a.createElement("select",{onChange:function(e){a(Object(s.a)({},t,{style:e.target.value})),p(document.getElementById("main-box"),e.target.value,"bottom")}},o.a.createElement("option",{value:"solid",selected:!0},"solid"),o.a.createElement("option",{value:"dashed"},"dashed"),o.a.createElement("option",{value:"double"},"double"),o.a.createElement("option",{value:"dotted"},"dotted"),o.a.createElement("option",{value:"groove"},"groove"),o.a.createElement("option",{value:"ridge"},"ridge"),o.a.createElement("option",{value:"inset"},"inset"),o.a.createElement("option",{value:"outset"},"outset"),o.a.createElement("option",{value:"hidden"},"hidden"))),o.a.createElement("br",null),o.a.createElement("div",{className:"costumize-area"},"Color"," ",o.a.createElement("input",{name:"color",type:"color",onChange:function(e){a(Object(s.a)({},t,{color:e.target.value})),E(document.getElementById("main-box"),e.target.value,"bottom")}})),o.a.createElement("br",null),o.a.createElement("div",{className:"costumize-area"},"Size"," ",o.a.createElement("input",{name:"size",type:"number",onChange:function(e){a(Object(s.a)({},t,{size:"".concat(e.target.value,"px")})),g(document.getElementById("main-box"),e.target.value,"bottom")}})),o.a.createElement("br",null),o.a.createElement("div",{className:"costumize-area"},"Radius"," ",o.a.createElement("input",{name:"radius",type:"range",value:t.radius,step:"1",min:"0",max:"100",onChange:function(e){a(Object(s.a)({},t,{radius:e.target.value})),v(document.getElementById("main-box"),e.target.value,"bottom")}})," ",o.a.createElement("span",null,"".concat(t.radius,"%"))))}function y(e){var t=e.stateLeft,a=e.setStateLeft;return o.a.createElement("div",{className:"custumize-section"},o.a.createElement("p",null,"Left"),o.a.createElement("div",{className:"costumize-area"},"Style"," ",o.a.createElement("select",{onChange:function(e){a(Object(s.a)({},t,{style:e.target.value})),p(document.getElementById("main-box"),e.target.value,"left")}},o.a.createElement("option",{value:"solid",selected:!0},"solid"),o.a.createElement("option",{value:"dashed"},"dashed"),o.a.createElement("option",{value:"double"},"double"),o.a.createElement("option",{value:"dotted"},"dotted"),o.a.createElement("option",{value:"groove"},"groove"),o.a.createElement("option",{value:"ridge"},"ridge"),o.a.createElement("option",{value:"inset"},"inset"),o.a.createElement("option",{value:"outset"},"outset"),o.a.createElement("option",{value:"hidden"},"hidden"))),o.a.createElement("br",null),o.a.createElement("div",{className:"costumize-area"},"Color"," ",o.a.createElement("input",{name:"color",type:"color",onChange:function(e){a(Object(s.a)({},t,{color:e.target.value})),E(document.getElementById("main-box"),e.target.value,"left")}})),o.a.createElement("br",null),o.a.createElement("div",{className:"costumize-area"},"Size"," ",o.a.createElement("input",{name:"size",type:"number",onChange:function(e){a(Object(s.a)({},t,{size:"".concat(e.target.value,"px")})),g(document.getElementById("main-box"),e.target.value,"left")}})),o.a.createElement("br",null),o.a.createElement("div",{className:"costumize-area"},"Radius"," ",o.a.createElement("input",{name:"radius",type:"range",value:t.radius,step:"1",min:"0",max:"100",onChange:function(e){a(Object(s.a)({},t,{radius:e.target.value})),v(document.getElementById("main-box"),e.target.value,"left")}})," ",o.a.createElement("span",null,"".concat(t.radius,"%"))))}a(24);function z(e){var t=e.stateTop,a=e.stateRight,n=e.stateButtom,l=e.stateLeft,c="\nborder-style: ".concat(t.style," ").concat(a.style," ").concat(n.style," ").concat(l.style,";\nborder-color: ").concat(t.color," ").concat(a.color," ").concat(n.color," ").concat(l.color,";\nborder-width: ").concat(t.size," ").concat(a.size," ").concat(n.size," ").concat(l.size,";\nborder-radius: ").concat(t.radius,"% ").concat(a.radius,"% ").concat(n.radius,"% ").concat(l.radius,"%;\n    ");return o.a.createElement("div",null,o.a.createElement("div",{className:"css-area"},o.a.createElement("h3",null,"CSS"),o.a.createElement("textarea",{id:"text-to-copy",type:"text",value:c}),o.a.createElement("br",null)),o.a.createElement("button",{onClick:function(){document.getElementById("text-to-copy").select(),document.execCommand("copy")},type:"button"},"Copy css to clipboard"))}var x=function(){var e=Object(n.useState)({style:"solid",color:"#fff",size:"5px",radius:"0"}),t=Object(r.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)({style:"solid",color:"#fff",size:"5px",radius:"0"}),i=Object(r.a)(c,2),u=i[0],s=i[1],m=Object(n.useState)({style:"solid",color:"#fff",size:"5px",radius:"0"}),p=Object(r.a)(m,2),E=p[0],g=p[1],v=Object(n.useState)({style:"solid",color:"#fff",size:"5px",radius:"0"}),x=Object(r.a)(v,2),C=x[0],B=x[1];return o.a.createElement("div",{className:"App"},o.a.createElement(d,null),o.a.createElement("div",{id:"area"},o.a.createElement(h,{stateTop:a,setStateTop:l}),o.a.createElement(b,{stateRight:u,setStateRight:s}),o.a.createElement(f,{stateBottom:E,setStateBottom:g}),o.a.createElement(y,{stateLeft:C,setStateLeft:B})),o.a.createElement(z,{stateTop:a,stateRight:u,stateButtom:E,stateLeft:C}))};c.a.render(o.a.createElement(x,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.d838a852.chunk.js.map
(this.webpackJsonpfirst=this.webpackJsonpfirst||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),o=a(4),l=a.n(o),n=(a(9),a(2)),r=a(0);function i(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{style:{color:"dark"===e.mode?"red":"black"},children:"About Us"}),Object(r.jsxs)("div",{className:"container py-5",style:e.sstyle,children:[Object(r.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(r.jsxs)("div",{className:"accordion-item",style:e.sstyle,children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingOne",style:e.sstyle,children:Object(r.jsx)("button",{style:e.sstyle,className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:"Accordion Item #1"})}),Object(r.jsx)("div",{id:"collapseOne",style:e.sstyle,className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{className:"accordion-body",children:[Object(r.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(r.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(r.jsxs)("div",{className:"accordion-item",style:e.sstyle,children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingThree",style:e.sstyle,children:Object(r.jsx)("button",{style:e.sstyle,className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:"Accordion Item #3"})}),Object(r.jsx)("div",{id:"collapseThree",style:e.sstyle,className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{className:"accordion-body",children:[Object(r.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(r.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]}),Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("button",{type:"button",onClick:e.abtfun,className:"mx-2 my-3 btn btn-primary",children:e.titlebtn})})]})]})}function d(e){return e.alertmsg&&Object(r.jsxs)("div",{className:"alert alert-".concat(e.alertmsg.type," alert-primary"),role:"alert",children:[Object(r.jsxs)("strong",{children:[function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alertmsg.type),":"]})," ",e.alertmsg.msg]})}function b(e){return Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode," ").concat(e.clsnm),children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)("a",{className:"navbar-brand",href:"/",children:e.title}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link",href:"/",children:"Services"})})}),Object(r.jsx)("div",{className:"form-check form-switch ".concat(e.textlight),children:Object(r.jsx)("input",{className:"foryellowpalt form-check-input ".concat(e.addcls),type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:e.enableyellow})}),Object(r.jsxs)("div",{className:"form-check form-switch ".concat(e.textlight),children:[Object(r.jsx)("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:e.myfunname}),Object(r.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:e.darkmodestatus})]})]})]})})}function h(e){var t=Object(c.useState)("Enter the text"),a=Object(n.a)(t,2),s=a[0],o=a[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("label",{htmlFor:"exampleFormControlTextarea",className:"my-5 form-label",style:e.sstyle,children:e.title}),Object(r.jsx)("textarea",{style:e.sstyle,onChange:function(e){o(e.target.value)},className:"form-control",value:s,id:"exampleFormControlTextarea",rows:"8"}),Object(r.jsx)("button",{disabled:""===s,type:"button",onClick:function(){var t=s.toUpperCase();o(t),e.showalert("Text converted to uppercase","success")},className:"mx-2 my-3 btn btn-".concat(e.btnclr),children:"Uppercase"}),Object(r.jsx)("button",{disabled:""===s,type:"button",onClick:function(){var t=s.toLowerCase();o(t),e.showalert("Text converted to lowercase","success")},className:"mx-2 my-3 btn btn-".concat(e.btnclr),children:"Lowercase"}),Object(r.jsx)("button",{type:"button",disabled:""===s,onClick:function(){var e=s.replace(/\s/g,"");o(e)},className:"mx-2 my-3 btn btn-".concat(e.btnclr),children:"Remove Space"}),Object(r.jsx)("button",{type:"button",disabled:""===s,onClick:function(t){o(""),e.showalert("Textarea cleared","success")},className:"mx-2 my-3 btn btn-".concat(e.btnclr),children:"Cleat text"})]}),Object(r.jsxs)("div",{className:"container",style:e.sstyle,children:[Object(r.jsx)("h1",{children:"Text Summary"}),Object(r.jsxs)("p",{children:["Number of characters: ",s.replace(/\s+/g,"").length," "]}),Object(r.jsxs)("p",{children:["Number of words: ",s.split(" ").length," "]}),Object(r.jsx)("h2",{children:"Preview"}),Object(r.jsxs)("p",{children:[s," "]})]})]})}b.defaultProps={about:"About me"};a(11);var j=function(){var e=Object(c.useState)("light"),t=Object(n.a)(e,2),a=t[0],s=t[1],o=Object(c.useState)("Dark mode off"),l=Object(n.a)(o,2),j=l[0],m=l[1],u=Object(c.useState)("text-light"),p=Object(n.a)(u,2),x=p[0],y=p[1],O=Object(c.useState)("Dark mode on"),g=Object(n.a)(O,2),f=g[0],k=g[1],v=Object(c.useState)({backgroundColor:"white",color:"black"}),w=Object(n.a)(v,2),C=w[0],N=w[1],S=Object(c.useState)(null),T=Object(n.a)(S,2),D=T[0],F=T[1],I=Object(c.useState)(!1),L=Object(n.a)(I,2),E=L[0],A=L[1],P=Object(c.useState)(""),U=Object(n.a)(P,2),Y=U[0],M=U[1],B=Object(c.useState)(""),H=Object(n.a)(B,2),J=H[0],R=H[1],q=Object(c.useState)({backgroundColor:"white"}),z=Object(n.a)(q,2),G=z[0],K=z[1],Q=Object(c.useState)("primary"),V=Object(n.a)(Q,2),W=V[0],X=V[1],Z=function(e,t){F({msg:e,type:t}),setTimeout((function(){F(null)}),1500)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(b,{mode:a,myfunname:function(){"light"===a?(s("dark"),m("Dark mode on"),y("text-light"),document.body.style.backgroundColor="black",N({backgroundColor:"black",color:"white"}),k("Dark mode on"),Z("drak mode has been enabled","success"),X("ccc")):(s("light"),m("Dark mode off"),y("text-dark"),document.body.style.backgroundColor="white",N({backgroundColor:"white",color:"black"}),k("Dark mode off"),Z("drak mode has been disabled","success"),X("primary"))},darkmodestatus:j,textlight:x,enableyellow:function(){"white"===G.backgroundColor?(K({backgroundColor:"yellow"}),A(!0),M("ylwclass"),R("rgylw"),document.body.style.backgroundColor="yellow",k("Yellow mode on"),X("c13")):(K({backgroundColor:"white"}),A(!1),M(""),R(""),document.body.style.backgroundColor="",k("Yellow mode off"),X("primary"))},bkgcolr:G,chk:E,addcls:Y,clsnm:J}),Object(r.jsx)(d,{alertmsg:D}),Object(r.jsxs)("div",{className:"container ".concat(J),children:[Object(r.jsx)(h,{title:"Enter your text here",sstyle:C,showalert:Z,clsnm:J,btnclr:W}),Object(r.jsx)(i,{sstyle:C,abtfun:function(){"black"===C.color?(N({backgroundColor:"black",color:"white"}),k("Dark mode off"),Z("drak mode has been enabled")):(N({backgroundColor:"white",color:"black"}),k("Dark mode on"),Z("drak mode has been disabled"))},titlebtn:f,mode:a})]})]})},m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,o=t.getLCP,l=t.getTTFB;a(e),c(e),s(e),o(e),l(e)}))};l.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(j,{})}),document.getElementById("root")),m()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.e27bd3ba.chunk.js.map
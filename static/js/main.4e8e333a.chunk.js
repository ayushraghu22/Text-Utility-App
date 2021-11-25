(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(4),s=a.n(r),l=(a(9),a(2)),o=(a(10),a(0));function i(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode," shadow"),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(o.jsxs)("div",{className:"form-check form-switch mx-3 text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Dark Mode"})]})]})]})})}function b(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],r=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container my-4",style:{color:"light"===e.mode?"black":"white"},children:[Object(o.jsx)("h1",{children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",id:"myBox",style:{backgroundColor:"light"===e.mode?"white":"grey",color:"light"===e.mode?"black":"white"},value:c,onChange:function(e){r(e.target.value)},rows:"8"})}),Object(o.jsx)("button",{className:"btn btn-primary",onClick:function(){r(c.toUpperCase())},children:"Convert to Uppercase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){r(c.toLowerCase())},children:"Convert to Lowercase"}),Object(o.jsx)("button",{className:"btn btn-primary",onClick:function(){for(var e=c.split(" "),t=0;t<e.length;t++)e[t]=e[t].charAt(0).toUpperCase()+e[t].substr(1);r(e.join(" "))},children:"Capitalize Case"}),Object(o.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){for(var e=c.split(" "),t="",a=0;a<e.length;a++)""!==e[a]&&(t+=e[a]+" ");r(t)},children:"Remove extra space"}),Object(o.jsx)("button",{className:"btn btn-primary",onClick:function(){var e=c.split(" "),t=0;e[0]=e[0].charAt(0).toUpperCase()+e[0].substr(1);for(var a=0;a<e.length;a++)1===t&&(e[a]=e[a].charAt(0).toUpperCase()+e[a].substring(1),t=0),"."===e[a].charAt(e[a].length-1)&&(t=1);r(e.join(" "))},children:"Sentence"}),Object(o.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){navigator.clipboard.writeText(c),e.showAlert("success","Text copied to clipboard.")},children:"Copy to clipboard"}),Object(o.jsx)("button",{className:"btn btn-danger",onClick:function(){r("")},children:"Reset"})]}),Object(o.jsxs)("div",{className:"container my-4",style:{color:"light"===e.mode?"black":"white"},children:[Object(o.jsx)("h3",{children:"Your text summary :"}),Object(o.jsxs)("p",{children:[c.split(" ").length," words and ",c.length," characters"]}),Object(o.jsxs)("p",{children:[.008*c.split(" ").length," word count"]}),Object(o.jsx)("h3",{children:"Preview:"}),Object(o.jsx)("p",{children:c})]})]})}function d(e){var t;return e.alert&&Object(o.jsxs)("div",{class:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsxs)("strong",{children:[(t=e.alert.type,t.charAt(0).toUpperCase()+t.substr(1)),"!"]})," ",e.alert.message]})}i.defaultProps={title:"Title",About:"Enter-about"},b.defaultProps={heading:"Enter heading"};var h=function(){var e=Object(n.useState)("light"),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),s=Object(l.a)(r,2),h=s[0],j=s[1],u=function(e,t){j({message:t,type:e}),setTimeout((function(){j(null)}),2e3)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"TextUtils",About:"About",mode:a,toggleMode:function(){"light"===a?(c("dark"),document.body.style.backgroundColor="rgb(48 72 109)",u("success","Dark Mode enabled.")):(c("light"),document.body.style.backgroundColor="white",u("success","Light Mode enabled."))}}),Object(o.jsx)(d,{alert:h}),Object(o.jsx)(b,{heading:"Enter your Text",mode:a,showAlert:u})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),j()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.4e8e333a.chunk.js.map
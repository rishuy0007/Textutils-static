(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var l=a(0),c=a.n(l),n=a(3),o=a.n(n),r=(a(13),a(1));a(14);function s(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},c.a.createElement("div",{className:"container-fluid"},c.a.createElement("a",{className:"navbar-brand",style:{color:"red"===e.mode?"white":"blue"===e.mode?"white":"dark"===e.mode?"white":"black"},href:"#"},"Textutils"),c.a.createElement("div",{className:"collapse navbar-collapse justify-between",id:"navbarSupportedContent",style:{color:"red"===e.mode?"white":"blue"===e.mode?"white":"dark"===e.mode?"white":"black"}},c.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link active","aria-current":"page",style:{color:"red"===e.mode?"white":"blue"===e.mode?"white":"dark"===e.mode?"white":"black"},href:"#"},"Home")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",style:{color:"red"===e.mode?"white":"blue"===e.mode?"white":"dark"===e.mode?"white":"black"},href:"/about"},"About"))),c.a.createElement("ul",{className:"navbar-nav me-auto mb-lg-0 "},c.a.createElement("li",null,c.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"red":"light")},c.a.createElement("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:e.toggleModeRed}),c.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"RedMode"))),c.a.createElement("li",null,c.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"blue":"light")},c.a.createElement("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:e.toggleModeBlue}),c.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"BlueMode"))),c.a.createElement("li",null,c.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},c.a.createElement("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:e.toggleMode}),c.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"DarkMode"))))))))}function m(e){var t=Object(l.useState)(""),a=Object(r.a)(t,2),n=a[0],o=a[1],s=function(e){o(e.target.value)};return c.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"}},c.a.createElement("h3",{style:{color:"red"===e.mode?"white":"blue"===e.mode?"white":"dark"===e.mode?"white":"black"}},e.heading),c.a.createElement("div",{className:"mb-3 "}),c.a.createElement("div",{className:"mb-3"},c.a.createElement("textarea",{className:"form-control",style:{backgroundColor:"red"===e.mode?"#d50b0b":"blue"===e.mode?"#1223ce":"dark"===e.mode?"#1f2753":"white",color:"red"===e.mode?"white":"blue"===e.mode?"white":"dark"===e.mode?"white":"black"},value:n,onChange:s,id:"exampleFormControlTextarea1",rows:10})),c.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){var t=n.toUpperCase();o(t),e.showAlert("Converted to uppercase","success")}},"Convert To Uppercase"),c.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){var t=n.toLowerCase();o(t),e.showAlert("Converted to lowercase","success")},onChange:s},"Convert To Lowercase"),c.a.createElement("button",{className:"btn btn-primary mx-2 my-2",onClick:function(){var t=n.replace(/ /g,"");o(t),e.showAlert("Spaces are deleted","success")},onChange:s},"Delete Spaces"),c.a.createElement("div",{className:"container my-3",style:{color:"light"===e.mode?"black":"white"}},c.a.createElement("h1",null,"Your text summary"),c.a.createElement("p",null,n.split(" ").length," words and ",n.length," characters"," "),c.a.createElement("p",null,.008*n.split(" ").length," minutes read"),c.a.createElement("h2",null,"Preview"),c.a.createElement("p",null,n),c.a.createElement("p",null,n.length>0?n:"Enter your text")))}var i=function(e){return e.alert&&c.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},c.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)),":",e.alert.msg)};var d=function(){var e=Object(l.useState)("light"),t=Object(r.a)(e,2),a=t[0],n=t[1],o=Object(l.useState)(null),d=Object(r.a)(o,2),u=d[0],h=d[1],b=function(e,t){h({msg:e,type:t}),setTimeout(function(){h(null)},1500)};return c.a.createElement(c.a.Fragment,null,c.a.createElement(s,{title:"textutils",mode:a,toggleMode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="#1f2753",b("Dark mode is enabled successfully","success"),document.title="TextUtils-Dark mode"):(n("light"),document.body.style.backgroundColor="white",b("Light mode is enabled successfully","success"),document.title="TextUtils-Light mode")},toggleModeRed:function(){"light"===a?(n("red"),document.body.style.backgroundColor="#d50b0b",b("Dark mode is enabled successfully","success"),document.title="TextUtils-Red mode"):(n("light"),document.body.style.backgroundColor="white",b("Light mode is enabled successfully","success"),document.title="TextUtils-Light mode")},toggleModeBlue:function(){"light"===a?(n("blue"),document.body.style.backgroundColor="#1223ce",b("Dark mode is enabled successfully","success"),document.title="TextUtils-Blue mode"):(n("light"),document.body.style.backgroundColor="white",b("Light mode is enabled successfully","success"),document.title="TextUtils-Light mode")}}),c.a.createElement(i,{alert:u}),c.a.createElement("div",{className:"container my-3"},c.a.createElement(m,{heading:"Enter text to analyse",mode:a,showAlert:b})))},u=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then(function(t){var a=t.getCLS,l=t.getFID,c=t.getFCP,n=t.getLCP,o=t.getTTFB;a(e),l(e),c(e),n(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null))),u()},4:function(e,t,a){e.exports=a(15)}},[[4,1,2]]]);
//# sourceMappingURL=main.ed6ce4aa.chunk.js.map
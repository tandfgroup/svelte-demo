!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("lwc")):"function"==typeof define&&define.amd?define(["lwc"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).button=t(e.lwc)}(this,(function(e){"use strict";var t=[function(e,t,n){var s=e?"["+e+"]":"";return"main"+s+" {margin: 30px;display: flex;flex-direction: column;align-items: center;}h1"+s+" {color: #1798c1;}"}];var n=[function(e,t,n){var s=e?"["+e+"]":"";return"main"+s+" {margin: 30px;display: flex;flex-direction: column;align-items: center;}h1"+s+" {color: #1798c1;}"}];const s={key:0},l={attrs:{src:"./recipes-logo.png",alt:"logo"},key:1},o={key:2};function r(e,t,n,r){const{h:i,d:c,t:u,b:a}=e,{_m0:m}=r;return[i("main",s,[i("img",l),i("h1",o,[u(c(t.message))]),i("input",{props:{value:t.message},key:3,on:{input:m||(r._m0=a(t.handleInput))}})])]}var i=e.registerTemplate(r);r.stylesheets=[],n&&r.stylesheets.push.apply(r.stylesheets,n),n&&(r.stylesheetToken="tnf-list_list");class c extends e.LightningElement{constructor(...e){super(...e),this.message="Hello World"}handleInput(e){this.message=e.target.value}}e.registerDecorators(c,{fields:["message"]});var u=e.registerComponent(c,{tmpl:i});customElements.define("tnf-list-ce",c.CustomElementConstructor);const a={key:1};function m(e,t,n,s){const{b:l,d:o,t:r,h:i,c:c}=e,{_m0:m}=s;return[i("button",{key:0,on:{click:m||(s._m0=l(t.onClick))}},[r(o(t.label))]),c("tnf-list",u,a)]}var p=e.registerTemplate(m);m.stylesheets=[],t&&m.stylesheets.push.apply(m.stylesheets,t),t&&(m.stylesheetToken="tnf-button_button");class f extends e.LightningElement{constructor(...e){super(...e),this.label="Submit"}onClick(){alert(`${this.label} button clicked`)}}e.registerDecorators(f,{publicProps:{label:{config:0}}});var g=e.registerComponent(f,{tmpl:p});return customElements.define("tnf-button-ce",f.CustomElementConstructor),g}));
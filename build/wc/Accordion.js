!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).Accordion={})}(this,(function(t){"use strict";function n(){}function e(t){return t()}function o(){return Object.create(null)}function s(t){t.forEach(e)}function c(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function r(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function a(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function d(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function f(t){return document.createTextNode(t)}function h(){return f(" ")}function p(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function m(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function g(t){const n={};for(const e of t)n[e.name]=e.value;return n}let $;function _(t){$=t}const y=[],b=[],x=[],v=[],w=Promise.resolve();let k=!1;function A(t){x.push(t)}const E=new Set;let O=0;function C(){const t=$;do{for(;O<y.length;){const t=y[O];O++,_(t),S(t.$$)}for(_(null),y.length=0,O=0;b.length;)b.pop()();for(let t=0;t<x.length;t+=1){const n=x[t];E.has(n)||(E.add(n),n())}x.length=0}while(y.length);for(;v.length;)v.pop()();k=!1,E.clear(),_(t)}function S(t){if(null!==t.fragment){t.update(),s(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const T=new Set;function j(t,n){-1===t.$$.dirty[0]&&(y.push(t),k||(k=!0,w.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function L(t,i,r,l,u,d,f,h=[-1]){const p=$;_(t);const m=t.$$={fragment:null,ctx:null,props:d,update:n,not_equal:u,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(p?p.$$.context:[])),callbacks:o(),dirty:h,skip_bound:!1,root:i.target||p.$$.root};f&&f(m.root);let g=!1;if(m.ctx=r?r(t,i.props||{},((n,e,...o)=>{const s=o.length?o[0]:e;return m.ctx&&u(m.ctx[n],m.ctx[n]=s)&&(!m.skip_bound&&m.bound[n]&&m.bound[n](s),g&&j(t,n)),e})):[],m.update(),g=!0,s(m.before_update),m.fragment=!!l&&l(m.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);m.fragment&&m.fragment.l(t),t.forEach(a)}else m.fragment&&m.fragment.c();i.intro&&((y=t.$$.fragment)&&y.i&&(T.delete(y),y.i(b))),function(t,n,o,i){const{fragment:r,on_mount:l,on_destroy:a,after_update:u}=t.$$;r&&r.m(n,o),i||A((()=>{const n=l.map(e).filter(c);a?a.push(...n):s(n),t.$$.on_mount=[]})),u.forEach(A)}(t,i.target,i.anchor,i.customElement),C()}var y,b;_(p)}let M;function N(t,n,e){const o=t.slice();return o[5]=n[e],o[7]=e,o}function B(t){let n,e,o,s,c,i,g,$,_,y,b,x,v,w,k,A,E,O,C=t[5].title+"",S=t[5].content+"";function T(...n){return t[2](t[7],...n)}return{c(){var r,l;n=u("li"),e=u("section"),o=u("div"),s=u("h2"),c=u("button"),i=d("svg"),g=d("use"),$=h(),_=u("span"),y=f(C),x=h(),v=u("div"),w=f(S),A=h(),r="xlink:href",l="/assets/icons/utility-sprite/svg/symbols.svg#switch",g.setAttributeNS("http://www.w3.org/1999/xlink",r,l),p(i,"class","slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left"),p(i,"aria-hidden","true"),p(_,"class","slds-accordion__summary-content"),p(c,"class","slds-button slds-button_reset slds-accordion__summary-action"),p(c,"aria-controls","referenceId-42"),p(c,"aria-expanded","true"),p(c,"title",b=t[5].title),p(s,"class","slds-accordion__summary-heading"),p(o,"class","slds-accordion__summary"),p(v,"class","slds-accordion__content"),p(v,"id","referenceId-42"),p(e,"class",k="slds-accordion__section "+(t[5].isOpen&&"slds-is-open")),p(n,"class","slds-accordion__list-item")},m(t,a){var u,d,f,h;l(t,n,a),r(n,e),r(e,o),r(o,s),r(s,c),r(c,i),r(i,g),r(c,$),r(c,_),r(_,y),r(e,x),r(e,v),r(v,w),r(n,A),E||(d="click",f=T,(u=n).addEventListener(d,f,h),O=()=>u.removeEventListener(d,f,h),E=!0)},p(n,o){t=n,1&o&&C!==(C=t[5].title+"")&&m(y,C),1&o&&b!==(b=t[5].title)&&p(c,"title",b),1&o&&S!==(S=t[5].content+"")&&m(w,S),1&o&&k!==(k="slds-accordion__section "+(t[5].isOpen&&"slds-is-open"))&&p(e,"class",k)},d(t){t&&a(n),E=!1,O()}}}function D(t){let e,o=t[0],s=[];for(let n=0;n<o.length;n+=1)s[n]=B(N(t,o,n));return{c(){e=u("ul");for(let t=0;t<s.length;t+=1)s[t].c();this.c=n,p(e,"class","slds-accordion")},m(t,n){l(t,e,n);for(let t=0;t<s.length;t+=1)s[t].m(e,null)},p(t,[n]){if(3&n){let c;for(o=t[0],c=0;c<o.length;c+=1){const i=N(t,o,c);s[c]?s[c].p(i,n):(s[c]=B(i),s[c].c(),s[c].m(e,null))}for(;c<s.length;c+=1)s[c].d(1);s.length=o.length}},i:n,o:n,d(t){t&&a(e),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(s,t)}}}function H(t,n,e){const o=[{title:"Accordion Summary A",content:"Accordion Details A",isOpen:!0},{title:"Accordion Summary B",content:"Accordion Details B",isOpen:!1},{title:"Accordion Summary C",content:"Accordion Details C",isOpen:!1}];let s=0;const c=t=>{t!==s&&(e(0,o[s].isOpen=!1,o),e(0,o[t].isOpen=!0,o),s=t)};return[o,c,(t,n)=>c(t)]}"function"==typeof HTMLElement&&(M=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(e).filter(c);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,n,e){this[t]=e}disconnectedCallback(){s(this.$$.on_disconnect)}$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(s(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=n}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class I extends M{constructor(t){super(),this.shadowRoot.innerHTML='<style>@import "./assets/styles/salesforce-lightning-design-system.min.css";:host{display:flex;flex-direction:column;align-items:center;--slds-c-accordion-color-border:pink\n  }.heading{color:blueviolet}</style>',L(this,{target:this.shadowRoot,props:g(this.attributes),customElement:!0},H,D,i,{},null),t&&t.target&&l(t.target,this,t.anchor)}}customElements.define("tnf-accordion",I),t.Accordion=I,Object.defineProperty(t,"__esModule",{value:!0})}));

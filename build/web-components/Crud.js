!function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function i(t){return"function"==typeof t}function r(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function l(t,n){t.appendChild(n)}function s(t,n,e){t.insertBefore(n,e||null)}function c(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function f(){return u(" ")}function d(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function h(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function p(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function m(t,n){t.value=null==n?"":n}function $(t,n){for(let e=0;e<t.options.length;e+=1){const o=t.options[e];if(o.__value===n)return void(o.selected=!0)}t.selectedIndex=-1}function g(t){const n={};for(const e of t)n[e.name]=e.value;return n}let b;function v(t){b=t}const y=[],_=[],x=[],k=[],E=Promise.resolve();let w=!1;function C(t){x.push(t)}const L=new Set;let M=0;function T(){const t=b;do{for(;M<y.length;){const t=y[M];M++,v(t),j(t.$$)}for(v(null),y.length=0,M=0;_.length;)_.pop()();for(let t=0;t<x.length;t+=1){const n=x[t];L.has(n)||(L.add(n),n())}x.length=0}while(y.length);for(;k.length;)k.pop()();w=!1,L.clear(),v(t)}function j(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(C)}}const z=new Set;function A(t,n){-1===t.$$.dirty[0]&&(y.push(t),w||(w=!0,E.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function H(r,l,s,a,u,f,d,h=[-1]){const p=b;v(r);const m=r.$$={fragment:null,ctx:null,props:f,update:t,not_equal:u,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l.context||(p?p.$$.context:[])),callbacks:e(),dirty:h,skip_bound:!1,root:l.target||p.$$.root};d&&d(m.root);let $=!1;if(m.ctx=s?s(r,l.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return m.ctx&&u(m.ctx[t],m.ctx[t]=o)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](o),$&&A(r,t)),n})):[],m.update(),$=!0,o(m.before_update),m.fragment=!!a&&a(m.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);m.fragment&&m.fragment.l(t),t.forEach(c)}else m.fragment&&m.fragment.c();l.intro&&((g=r.$$.fragment)&&g.i&&(z.delete(g),g.i(y))),function(t,e,r,l){const{fragment:s,on_mount:c,on_destroy:a,after_update:u}=t.$$;s&&s.m(e,r),l||C((()=>{const e=c.map(n).filter(i);a?a.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(C)}(r,l.target,l.anchor,l.customElement),T()}var g,y;v(p)}let O;function S(t,n,e){const o=t.slice();return o[15]=n[e],o[3]=e,o}function N(t){let n,e,o,i,r,f=t[15].last+"",d=t[15].first+"";return{c(){n=a("option"),e=u(f),o=u(", "),i=u(d),n.__value=r=t[3],n.value=n.__value},m(t,r){s(t,n,r),l(n,e),l(n,o),l(n,i)},p(t,n){2&n&&f!==(f=t[15].last+"")&&p(e,f),2&n&&d!==(d=t[15].first+"")&&p(i,d)},d(t){t&&c(n)}}}function R(n){let e,i,r,p,g,b,v,y,_,x,k,E,w,L,M,T,j,z,A,H,O,R,q,B,I,P,W,D,F=n[1],G=[];for(let t=0;t<F.length;t+=1)G[t]=N(S(n,F,t));return{c(){e=a("div"),i=a("div"),r=a("div"),p=a("input"),g=f(),b=a("select");for(let t=0;t<G.length;t+=1)G[t].c();v=f(),y=a("div"),_=a("label"),x=a("input"),k=f(),E=a("label"),w=a("input"),L=f(),M=a("div"),T=a("button"),j=u("create"),A=f(),H=a("button"),O=u("update"),q=f(),B=a("button"),I=u("delete"),this.c=t,h(p,"placeholder","filter prefix"),h(b,"size",5),void 0===n[3]&&C((()=>n[11].call(b))),h(r,"class","select-items"),h(x,"placeholder","first"),h(w,"placeholder","last"),h(i,"class","actions"),T.disabled=z=!n[4]||!n[5],H.disabled=R=!n[4]||!n[5]||!n[2],B.disabled=P=!n[2],h(M,"class","buttons")},m(t,o){s(t,e,o),l(e,i),l(i,r),l(r,p),m(p,n[0]),l(r,g),l(r,b);for(let t=0;t<G.length;t+=1)G[t].m(b,null);$(b,n[3]),l(i,v),l(i,y),l(y,_),l(_,x),m(x,n[4]),l(y,k),l(y,E),l(E,w),m(w,n[5]),l(e,L),l(e,M),l(M,T),l(T,j),l(M,A),l(M,H),l(H,O),l(M,q),l(M,B),l(B,I),W||(D=[d(p,"input",n[10]),d(b,"change",n[11]),d(x,"input",n[12]),d(w,"input",n[13]),d(T,"click",n[6]),d(H,"click",n[7]),d(B,"click",n[8])],W=!0)},p(t,[n]){if(1&n&&p.value!==t[0]&&m(p,t[0]),2&n){let e;for(F=t[1],e=0;e<F.length;e+=1){const o=S(t,F,e);G[e]?G[e].p(o,n):(G[e]=N(o),G[e].c(),G[e].m(b,null))}for(;e<G.length;e+=1)G[e].d(1);G.length=F.length}8&n&&$(b,t[3]),16&n&&x.value!==t[4]&&m(x,t[4]),32&n&&w.value!==t[5]&&m(w,t[5]),48&n&&z!==(z=!t[4]||!t[5])&&(T.disabled=z),52&n&&R!==(R=!t[4]||!t[5]||!t[2])&&(H.disabled=R),4&n&&P!==(P=!t[2])&&(B.disabled=P)},i:t,o:t,d(t){t&&c(e),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(G,t),W=!1,o(D)}}}function q(t,n,e){let o,i,r=[{first:"Hans",last:"Emil"},{first:"Max",last:"Mustermann"},{first:"Roman",last:"Tisch"}],l="",s="",c="",a=0;return t.$$.update=()=>{var n;513&t.$$.dirty&&e(1,o=l?r.filter((t=>`${t.last}, ${t.first}`.toLowerCase().startsWith(l.toLowerCase()))):r),10&t.$$.dirty&&e(2,i=o[a]),4&t.$$.dirty&&(e(4,s=(n=i)?n.first:""),e(5,c=n?n.last:""))},[l,o,i,a,s,c,function(){e(9,r=r.concat({first:s,last:c})),e(3,a=r.length-1),e(4,s=e(5,c=""))},function(){e(2,i.first=s,i),e(2,i.last=c,i),e(9,r)},function(){const t=r.indexOf(i);e(9,r=[...r.slice(0,t),...r.slice(t+1)]),e(4,s=e(5,c="")),e(3,a=Math.min(a,o.length-2))},r,function(){l=this.value,e(0,l)},function(){a=function(t){const n=t.querySelector(":checked")||t.options[0];return n&&n.__value}(this),e(3,a)},function(){s=this.value,e(4,s)},function(){c=this.value,e(5,c)}]}"function"==typeof HTMLElement&&(O=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(n).filter(i);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,n,e){this[t]=e}disconnectedCallback(){o(this.$$.on_disconnect)}$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class B extends O{constructor(t){super(),this.shadowRoot.innerHTML="<style>:host{display:flex;flex-direction:column;align-items:center}.actions{display:flex;flex-direction:row;justify-content:center;margin-bottom:var(--vertical-gap, 0.5em)}.select-items{display:flex;flex-direction:column;margin-right:var(--horizontal-gap, 0.5em)}*{font-family:inherit;font-size:inherit}.buttons{display:flex;justify-content:center}.buttons>button{color:var(--buttons-clr, none);margin-right:var(--horizontal-gap, 0.5em)}.buttons>button:last-child{color:var(--buttons-clr, none);margin-right:0em}</style>",H(this,{target:this.shadowRoot,props:g(this.attributes),customElement:!0},q,R,r,{},null),t&&t.target&&s(t.target,this,t.anchor)}}customElements.define("crud-app",B)}();
//# sourceMappingURL=Crud.js.map

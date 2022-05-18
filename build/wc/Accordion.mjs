function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function r(t,n){t.appendChild(n)}function i(t,n,e){t.insertBefore(n,e||null)}function l(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function u(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function d(t){return document.createTextNode(t)}function f(){return d(" ")}function h(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function m(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function p(t){const n={};for(const e of t)n[e.name]=e.value;return n}let g;function $(t){g=t}const _=[],y=[],b=[],x=[],v=Promise.resolve();let w=!1;function k(t){b.push(t)}const A=new Set;let E=0;function O(){const t=g;do{for(;E<_.length;){const t=_[E];E++,$(t),C(t.$$)}for($(null),_.length=0,E=0;y.length;)y.pop()();for(let t=0;t<b.length;t+=1){const n=b[t];A.has(n)||(A.add(n),n())}b.length=0}while(_.length);for(;x.length;)x.pop()();w=!1,A.clear(),$(t)}function C(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}const S=new Set;function T(t,n){-1===t.$$.dirty[0]&&(_.push(t),w||(w=!0,v.then(O)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function L(c,r,i,a,u,d,f,h=[-1]){const m=g;$(c);const p=c.$$={fragment:null,ctx:null,props:d,update:t,not_equal:u,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(m?m.$$.context:[])),callbacks:e(),dirty:h,skip_bound:!1,root:r.target||m.$$.root};f&&f(p.root);let _=!1;if(p.ctx=i?i(c,r.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return p.ctx&&u(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),_&&T(c,t)),n})):[],p.update(),_=!0,o(p.before_update),p.fragment=!!a&&a(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(l)}else p.fragment&&p.fragment.c();r.intro&&((y=c.$$.fragment)&&y.i&&(S.delete(y),y.i(b))),function(t,e,c,r){const{fragment:i,on_mount:l,on_destroy:a,after_update:u}=t.$$;i&&i.m(e,c),r||k((()=>{const e=l.map(n).filter(s);a?a.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(k)}(c,r.target,r.anchor,r.customElement),O()}var y,b;$(m)}let N;function M(t,n,e){const o=t.slice();return o[6]=n[e],o[8]=e,o}function H(t){let n,e,o,s=t[1],c=[];for(let n=0;n<s.length;n+=1)c[n]=j(M(t,s,n));return{c(){n=a("h3"),n.innerHTML="<slot></slot>",e=f(),o=a("ul");for(let t=0;t<c.length;t+=1)c[t].c();h(n,"class","heading text-center"),h(o,"class","slds-accordion")},m(t,s){i(t,n,s),i(t,e,s),i(t,o,s);for(let t=0;t<c.length;t+=1)c[t].m(o,null)},p(t,n){if(6&n){let e;for(s=t[1],e=0;e<s.length;e+=1){const r=M(t,s,e);c[e]?c[e].p(r,n):(c[e]=j(r),c[e].c(),c[e].m(o,null))}for(;e<c.length;e+=1)c[e].d(1);c.length=s.length}},d(t){t&&l(n),t&&l(e),t&&l(o),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(c,t)}}}function j(t){let n,e,o,s,c,p,g,$,_,y,b,x,v,w,k,A,E,O,C=t[6].title+"",S=t[6].content+"";function T(...n){return t[3](t[8],...n)}return{c(){var r,i;n=a("li"),e=a("section"),o=a("div"),s=a("h2"),c=a("button"),p=u("svg"),g=u("use"),$=f(),_=a("span"),y=d(C),x=f(),v=a("div"),w=d(S),A=f(),r="xlink:href",i="/assets/icons/utility-sprite/svg/symbols.svg#switch",g.setAttributeNS("http://www.w3.org/1999/xlink",r,i),h(p,"class","slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left"),h(p,"aria-hidden","true"),h(_,"class","slds-accordion__summary-content"),h(c,"class","slds-button slds-button_reset slds-accordion__summary-action"),h(c,"aria-controls","referenceId-42"),h(c,"aria-expanded","true"),h(c,"title",b=t[6].title),h(s,"class","slds-accordion__summary-heading"),h(o,"class","slds-accordion__summary"),h(v,"class","slds-accordion__content"),h(v,"id","referenceId-42"),h(e,"class",k="slds-accordion__section "+(t[6].isOpen&&"slds-is-open")),h(n,"class","slds-accordion__list-item")},m(t,l){var a,u,d,f;i(t,n,l),r(n,e),r(e,o),r(o,s),r(s,c),r(c,p),r(p,g),r(c,$),r(c,_),r(_,y),r(e,x),r(e,v),r(v,w),r(n,A),E||(u="click",d=T,(a=n).addEventListener(u,d,f),O=()=>a.removeEventListener(u,d,f),E=!0)},p(n,o){t=n,2&o&&C!==(C=t[6].title+"")&&m(y,C),2&o&&b!==(b=t[6].title)&&h(c,"title",b),2&o&&S!==(S=t[6].content+"")&&m(w,S),2&o&&k!==(k="slds-accordion__section "+(t[6].isOpen&&"slds-is-open"))&&h(e,"class",k)},d(t){t&&l(n),E=!1,O()}}}function B(n){let e,o=n[0]&&H(n);return{c(){o&&o.c(),e=d(""),this.c=t},m(t,n){o&&o.m(t,n),i(t,e,n)},p(t,[n]){t[0]?o?o.p(t,n):(o=H(t),o.c(),o.m(e.parentNode,e)):o&&(o.d(1),o=null)},i:t,o:t,d(t){o&&o.d(t),t&&l(e)}}}function D(t,n,e){let o=!1;setTimeout((()=>{e(0,o=!0)}),100);const s=[{title:"Accordion Summary A",content:"Accordion Details A",isOpen:!0},{title:"Accordion Summary B",content:"Accordion Details B",isOpen:!1},{title:"Accordion Summary C",content:"Accordion Details C",isOpen:!1}];let c=0;const r=t=>{t!==c&&(e(1,s[c].isOpen=!1,s),e(1,s[t].isOpen=!0,s),c=t)};return[o,s,r,(t,n)=>r(t)]}"function"==typeof HTMLElement&&(N=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(n).filter(s);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,n,e){this[t]=e}disconnectedCallback(){o(this.$$.on_disconnect)}$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class I extends N{constructor(t){super(),this.shadowRoot.innerHTML='<style>@import "/assets/styles/salesforce-lightning-design-system.min.css";:host{display:flex;flex-direction:column;align-items:center;--slds-c-accordion-color-border:pink;margin:5em}.heading{color:blueviolet}</style>',L(this,{target:this.shadowRoot,props:p(this.attributes),customElement:!0},D,B,c,{},null),t&&t.target&&i(t.target,this,t.anchor)}}customElements.define("tnf-accordion",I);export{I as Accordion};
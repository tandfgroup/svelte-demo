function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function r(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t){return 0===Object.keys(t).length}function i(t,n){t.appendChild(n)}function u(t,n,e){t.insertBefore(n,e||null)}function l(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function f(t){const n={};for(const e of t)n[e.name]=e.value;return n}let d;function $(t){d=t}const h=[],p=[],m=[],g=[],b=Promise.resolve();let _=!1;function y(t){m.push(t)}const x=new Set;let k=0;function E(){const t=d;do{for(;k<h.length;){const t=h[k];k++,$(t),C(t.$$)}for($(null),h.length=0,k=0;p.length;)p.pop()();for(let t=0;t<m.length;t+=1){const n=m[t];x.has(n)||(x.add(n),n())}m.length=0}while(h.length);for(;g.length;)g.pop()();_=!1,x.clear(),$(t)}function C(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(y)}}const v=new Set;let w;function T(t,n){t&&t.i&&(v.delete(t),t.i(n))}function H(t,e,r,c){const{fragment:i,on_mount:u,on_destroy:l,after_update:a}=t.$$;i&&i.m(e,r),c||y((()=>{const e=u.map(n).filter(s);l?l.push(...e):o(e),t.$$.on_mount=[]})),a.forEach(y)}function O(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function j(t,n){-1===t.$$.dirty[0]&&(h.push(t),_||(_=!0,b.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function M(n,s,r,c,i,u,a,f=[-1]){const h=d;$(n);const p=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:i,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(h?h.$$.context:[])),callbacks:e(),dirty:f,skip_bound:!1,root:s.target||h.$$.root};a&&a(p.root);let m=!1;if(p.ctx=r?r(n,s.props||{},((t,e,...o)=>{const s=o.length?o[0]:e;return p.ctx&&i(p.ctx[t],p.ctx[t]=s)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](s),m&&j(n,t)),e})):[],p.update(),m=!0,o(p.before_update),p.fragment=!!c&&c(p.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);p.fragment&&p.fragment.l(t),t.forEach(l)}else p.fragment&&p.fragment.c();s.intro&&T(n.$$.fragment),H(n,s.target,s.anchor,s.customElement),E()}$(h)}"function"==typeof HTMLElement&&(w=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(n).filter(s);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,n,e){this[t]=e}disconnectedCallback(){o(this.$$.on_disconnect)}$destroy(){O(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){this.$$set&&!c(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});function N(n){let e;return{c(){e=a("div"),e.textContent="Hello from Child"},m(t,n){u(t,e,n)},p:t,i:t,o:t,d(t){t&&l(e)}}}class S extends class{$destroy(){O(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){this.$$set&&!c(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),M(this,t,null,N,r,{})}}function L(n){let e,o,s,r,c;return r=new S({}),{c(){var n,c;e=a("div"),o=a("slot"),n="\n\tHello from Test\n\t",s=document.createTextNode(n),(c=r.$$.fragment)&&c.c(),this.c=t},m(t,n){u(t,e,n),i(e,o),i(e,s),H(r,e,null),c=!0},p:t,i(t){c||(T(r.$$.fragment,t),c=!0)},o(t){!function(t,n,e,o){if(t&&t.o){if(v.has(t))return;v.add(t),(void 0).c.push((()=>{v.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}(r.$$.fragment,t),c=!1},d(t){t&&l(e),O(r)}}}class q extends w{constructor(t){super(),M(this,{target:this.shadowRoot,props:f(this.attributes),customElement:!0},null,L,r,{},null),t&&t.target&&u(t.target,this,t.anchor)}}customElements.define("test-element",q);export{S as Child,q as Test};

var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t){t.parentNode.removeChild(t)}let s;function a(t){s=t}const f=[],l=[],i=[],d=[],p=Promise.resolve();let $=!1;function h(t){i.push(t)}const m=new Set;let g=0;function y(){const t=s;do{for(;g<f.length;){const t=f[g];g++,a(t),b(t.$$)}for(a(null),f.length=0,g=0;l.length;)l.pop()();for(let t=0;t<i.length;t+=1){const n=i[t];m.has(n)||(m.add(n),n())}i.length=0}while(f.length);for(;d.length;)d.pop()();$=!1,m.clear(),a(t)}function b(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(h)}}const _=new Set;function k(t,n){-1===t.$$.dirty[0]&&(f.push(t),$||($=!0,p.then(y)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function x(c,f,l,i,d,p,$,m=[-1]){const g=s;a(c);const b=c.$$={fragment:null,ctx:null,props:p,update:t,not_equal:d,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f.context||(g?g.$$.context:[])),callbacks:e(),dirty:m,skip_bound:!1,root:f.target||g.$$.root};$&&$(b.root);let x=!1;if(b.ctx=l?l(c,f.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return b.ctx&&d(b.ctx[t],b.ctx[t]=o)&&(!b.skip_bound&&b.bound[t]&&b.bound[t](o),x&&k(c,t)),n})):[],b.update(),x=!0,o(b.before_update),b.fragment=!!i&&i(b.ctx),f.target){if(f.hydrate){const t=function(t){return Array.from(t.childNodes)}(f.target);b.fragment&&b.fragment.l(t),t.forEach(u)}else b.fragment&&b.fragment.c();f.intro&&((v=c.$$.fragment)&&v.i&&(_.delete(v),v.i(w))),function(t,e,c,u){const{fragment:s,on_mount:a,on_destroy:f,after_update:l}=t.$$;s&&s.m(e,c),u||h((()=>{const e=a.map(n).filter(r);f?f.push(...e):o(e),t.$$.on_mount=[]})),l.forEach(h)}(c,f.target,f.anchor,f.customElement),y()}var v,w;a(g)}function v(n){let e;return{c(){var t,n,o,r;t="main",e=document.createElement(t),e.innerHTML='<h1 class="tnf-k1y3kd">Welcome to Svelte!</h1> \n\t<crud-app class="tnf-k1y3kd"></crud-app>',n=e,o="class",null==(r="tnf-k1y3kd")?n.removeAttribute(o):n.getAttribute(o)!==r&&n.setAttribute(o,r)},m(t,n){!function(t,n,e){t.insertBefore(n,e||null)}(t,e,n)},p:t,i:t,o:t,d(t){t&&u(e)}}}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),x(this,t,null,v,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
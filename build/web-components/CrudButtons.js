import{S as t,i as s,a as e,b as a,u as i,s as r,e as n,t as l,g as o,n as c,h as d,c as u,o as b,f as h,r as f,v as p}from"./index-3714687b.js";function $(t){let s,e,i,r,p,$,g,m,x,v,k,y,j,w;return{c(){s=n("div"),e=n("button"),i=l("create"),p=o(),$=n("button"),g=l("update"),x=o(),v=n("button"),k=l("delete"),this.c=c,e.disabled=r=!t[0]||!t[1],$.disabled=m=!t[0]||!t[1]||!t[2],v.disabled=y=!t[2],d(s,"class","buttons")},m(r,n){a(r,s,n),u(s,e),u(e,i),u(s,p),u(s,$),u($,g),u(s,x),u(s,v),u(v,k),j||(w=[b(e,"click",t[4]),b($,"click",t[5]),b(v,"click",t[6])],j=!0)},p(t,[s]){3&s&&r!==(r=!t[0]||!t[1])&&(e.disabled=r),7&s&&m!==(m=!t[0]||!t[1]||!t[2])&&($.disabled=m),4&s&&y!==(y=!t[2])&&(v.disabled=y)},i:c,o:c,d(t){t&&h(s),j=!1,f(w)}}}function g(t,s,e){let{first:a}=s,{last:i}=s,{selected:r}=s;const n=p();function l(t){n("buttonClicked",t)}return t.$$set=t=>{"first"in t&&e(0,a=t.first),"last"in t&&e(1,i=t.last),"selected"in t&&e(2,r=t.selected)},[a,i,r,l,t=>l("create"),t=>l("update"),t=>l("delete")]}class m extends t{constructor(t){super(),this.shadowRoot.innerHTML="<style>.buttons{display:flex;justify-content:center}.buttons>button{color:var(--buttons-clr, none);margin-right:var(--horizontal-gap, 0em)}.buttons>button:last-child{color:var(--buttons-clr, none);margin-right:0em}</style>",s(this,{target:this.shadowRoot,props:e(this.attributes),customElement:!0},g,$,r,{first:0,last:1,selected:2},null),t&&(t.target&&a(t.target,this,t.anchor),t.props&&(this.$set(t.props),i()))}static get observedAttributes(){return["first","last","selected"]}get first(){return this.$$.ctx[0]}set first(t){this.$$set({first:t}),i()}get last(){return this.$$.ctx[1]}set last(t){this.$$set({last:t}),i()}get selected(){return this.$$.ctx[2]}set selected(t){this.$$set({selected:t}),i()}}customElements.define("crud-app-buttons",m);export{m as default};
//# sourceMappingURL=CrudButtons.js.map
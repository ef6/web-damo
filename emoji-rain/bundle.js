var rain=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function a(t,n,e){t.insertBefore(n,e||null)}function f(t){t.parentNode.removeChild(t)}function u(t){return document.createTextNode(t)}function l(t,n,e,r){t.style.setProperty(n,e,r?"important":"")}let i;function s(t){i=t}const d=[],p=[],h=[],m=[],$=Promise.resolve();let g=!1;function y(t){h.push(t)}function b(){const t=new Set;do{for(;d.length;){const t=d.shift();s(t),x(t.$$)}for(;p.length;)p.pop()();for(let n=0;n<h.length;n+=1){const e=h[n];t.has(e)||(e(),t.add(e))}h.length=0}while(d.length);for(;m.length;)m.pop()();g=!1}function x(t){t.fragment&&(t.update(t.dirty),r(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(y))}const _=new Set;function v(t,n){t.$$.dirty||(d.push(t),g||(g=!0,$.then(b)),t.$$.dirty=e()),t.$$.dirty[n]=!0}function w(c,a,f,u,l,d){const p=i;s(c);const h=a.props||{},m=c.$$={fragment:null,ctx:null,props:d,update:t,not_equal:l,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:e(),dirty:null};let $=!1;var g,x,w;m.ctx=f?f(c,h,(t,n,e=n)=>(m.ctx&&l(m.ctx[t],m.ctx[t]=e)&&(m.bound[t]&&m.bound[t](e),$&&v(c,t)),n)):h,m.update(),$=!0,r(m.before_update),m.fragment=u(m.ctx),a.target&&(a.hydrate?m.fragment.l((w=a.target,Array.from(w.childNodes))):m.fragment.c(),a.intro&&((g=c.$$.fragment)&&g.i&&(_.delete(g),g.i(x))),function(t,e,c){const{fragment:a,on_mount:f,on_destroy:u,after_update:l}=t.$$;a.m(e,c),y(()=>{const e=f.map(n).filter(o);u?u.push(...e):r(e),t.$$.on_mount=[]}),l.forEach(y)}(c,a.target,a.anchor),b()),s(p)}class A{$destroy(){var n,e;e=1,(n=this).$$.fragment&&(r(n.$$.on_destroy),n.$$.fragment.d(e),n.$$.on_destroy=n.$$.fragment=null,n.$$.ctx={}),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}function k(t,n,e){const r=Object.create(t);return r.c=n[e],r}function E(t){var n,e,r=t.c.character+"";return{c(){var o,c,a,f;o="span",n=document.createElement(o),e=u(r),l(n,"left",t.c.x+"%"),l(n,"top",t.c.y+"%"),l(n,"transform","scale("+t.c.r+")"),c=n,a="class",null==(f="svelte-k27eab")?c.removeAttribute(a):c.setAttribute(a,f)},m(t,r){a(t,n,r),function(t,n){t.appendChild(n)}(n,e)},p(t,o){var c,a;t.confetti&&r!==(r=o.c.character+"")&&(a=""+(a=r),(c=e).data!==a&&(c.data=a)),t.confetti&&(l(n,"left",o.c.x+"%"),l(n,"top",o.c.y+"%"),l(n,"transform","scale("+o.c.r+")"))},d(t){t&&f(n)}}}function M(n){var e;let r=n.confetti,o=[];for(let t=0;t<r.length;t+=1)o[t]=E(k(n,r,t));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=u("")},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);a(t,e,n)},p(t,n){if(t.confetti){let c;for(r=n.confetti,c=0;c<r.length;c+=1){const a=k(n,r,c);o[c]?o[c].p(t,a):(o[c]=E(a),o[c].c(),o[c].m(e.parentNode,e))}for(;c<o.length;c+=1)o[c].d(1);o.length=r.length}},i:t,o:t,d(t){!function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(o,t),t&&f(e)}}}let N=80;function j(t,n,e){let r=["❤","💛","💚","💙","💜"],o=new Array(N).fill().map((t,n)=>({character:r[n%r.length],x:100*Math.random(),y:-5-100*Math.random(),r:.2+1*Math.random()})).sort((t,n)=>t.r-n.r);return function t(){e("confetti",o=o.map(t=>(t.y+=.7*t.r,t.y>100&&(t.y=-5),t))),requestAnimationFrame(t)}(),{confetti:o}}return new class extends A{constructor(t){super(),w(this,t,j,M,c,[])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
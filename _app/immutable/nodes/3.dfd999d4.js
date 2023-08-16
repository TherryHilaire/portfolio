import{s as ue,f as _,a as I,l as U,g as v,h as E,c as y,d,m as X,j as k,i as se,I as m,p as re,K as ve,e as oe}from"../chunks/scheduler.e949bcc4.js";import{S as he,i as $e,b as V,d as L,m as M,a as g,t as C,e as P,g as de,c as ge}from"../chunks/index.42c33976.js";import{e as G,u as Ee,o as ke}from"../chunks/each.9bfefcd6.js";import{c as Ce,g as ie}from"../chunks/MainTitle.b7718d98.js";import{C as we}from"../chunks/Card.7391bbe3.js";import{C as xe}from"../chunks/CardLogo.24165a3f.js";import{C as Ie,a as ye}from"../chunks/ChipIcon.ba0dfcc4.js";import{C as be}from"../chunks/Chip.afd08144.js";import{g as J,E as De}from"../chunks/params.0c63b47c.js";import{S as Se}from"../chunks/SearchPage.afe54d5b.js";import{i as Ve}from"../chunks/index.97b3c5e0.js";function ce(o,t,n){const e=o.slice();return e[5]=t[n],e}function fe(o){let t,n;return t=new ye({props:{logo:J(o[5].logo),name:o[5].name}}),{c(){V(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,r){M(t,e,r),n=!0},p(e,r){const s={};r&1&&(s.logo=J(e[5].logo)),r&1&&(s.name=e[5].name),t.$set(s)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){C(t.$$.fragment,e),n=!1},d(e){P(t,e)}}}function Le(o){let t,n,e,r,s,u,i,a,h,x,O,B,A=o[0].company+"",H,Q,N,W,Z,q,F=o[0].location+"",K,ee,z,R=o[0].description+"",T,te,b,D;n=new xe({props:{src:J(o[0].logo),alt:o[0].company,size:75}}),u=new Ie({props:{title:o[0].name}}),x=new be({props:{label:o[0].contract,size:"0.75em"}});let S=G(o[0].skills),c=[];for(let l=0;l<S.length;l+=1)c[l]=fe(ce(o,S,l));const _e=l=>C(c[l],1,1,()=>{c[l]=null});return{c(){t=_("div"),V(n.$$.fragment),e=I(),r=_("div"),s=_("h3"),V(u.$$.fragment),i=I(),a=_("div"),h=I(),V(x.$$.fragment),O=I(),B=_("span"),H=U(A),Q=I(),N=_("div"),W=U(o[1]),Z=I(),q=_("div"),K=U(F),ee=I(),z=_("div"),T=U(R),te=I(),b=_("div");for(let l=0;l<c.length;l+=1)c[l].c();this.h()},l(l){t=v(l,"DIV",{class:!0});var f=E(t);L(n.$$.fragment,f),e=y(f),r=v(f,"DIV",{class:!0});var p=E(r);s=v(p,"H3",{class:!0});var w=E(s);L(u.$$.fragment,w),i=y(w),a=v(w,"DIV",{class:!0}),E(a).forEach(d),h=y(w),L(x.$$.fragment,w),w.forEach(d),O=y(p),B=v(p,"SPAN",{class:!0});var Y=E(B);H=X(Y,A),Y.forEach(d),Q=y(p),N=v(p,"DIV",{class:!0});var $=E(N);W=X($,o[1]),$.forEach(d),Z=y(p),q=v(p,"DIV",{class:!0});var j=E(q);K=X(j,F),j.forEach(d),ee=y(p),z=v(p,"DIV",{class:!0});var ae=E(z);T=X(ae,R),ae.forEach(d),te=y(p),b=v(p,"DIV",{class:!0});var le=E(b);for(let ne=0;ne<c.length;ne+=1)c[ne].l(le);le.forEach(d),p.forEach(d),f.forEach(d),this.h()},h(){k(a,"class","experience-title-divider svelte-1pe2n5d"),k(s,"class","experience-title svelte-1pe2n5d"),k(B,"class","experience-company-name svelte-1pe2n5d"),k(N,"class","experience-period svelte-1pe2n5d"),k(q,"class","experience-location svelte-1pe2n5d"),k(z,"class","experience-description svelte-1pe2n5d"),k(b,"class","experience-skills svelte-1pe2n5d"),k(r,"class","experience-data svelte-1pe2n5d"),k(t,"class","experience svelte-1pe2n5d")},m(l,f){se(l,t,f),M(n,t,null),m(t,e),m(t,r),m(r,s),M(u,s,null),m(s,i),m(s,a),m(s,h),M(x,s,null),m(r,O),m(r,B),m(B,H),m(r,Q),m(r,N),m(N,W),m(r,Z),m(r,q),m(q,K),m(r,ee),m(r,z),m(z,T),m(r,te),m(r,b);for(let p=0;p<c.length;p+=1)c[p]&&c[p].m(b,null);D=!0},p(l,f){const p={};f&1&&(p.src=J(l[0].logo)),f&1&&(p.alt=l[0].company),n.$set(p);const w={};f&1&&(w.title=l[0].name),u.$set(w);const Y={};if(f&1&&(Y.label=l[0].contract),x.$set(Y),(!D||f&1)&&A!==(A=l[0].company+"")&&re(H,A),(!D||f&1)&&F!==(F=l[0].location+"")&&re(K,F),(!D||f&1)&&R!==(R=l[0].description+"")&&re(T,R),f&1){S=G(l[0].skills);let $;for($=0;$<S.length;$+=1){const j=ce(l,S,$);c[$]?(c[$].p(j,f),g(c[$],1)):(c[$]=fe(j),c[$].c(),g(c[$],1),c[$].m(b,null))}for(de(),$=S.length;$<c.length;$+=1)_e($);ge()}},i(l){if(!D){g(n.$$.fragment,l),g(u.$$.fragment,l),g(x.$$.fragment,l);for(let f=0;f<S.length;f+=1)g(c[f]);D=!0}},o(l){C(n.$$.fragment,l),C(u.$$.fragment,l),C(x.$$.fragment,l),c=c.filter(Boolean);for(let f=0;f<c.length;f+=1)C(c[f]);D=!1},d(l){l&&d(t),P(n),P(u),P(x),ve(c,l)}}}function Me(o){let t,n;return t=new we({props:{margin:"0px 0px 20px 0px",tiltDegree:2,$$slots:{default:[Le]},$$scope:{ctx:o}}}),{c(){V(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,r){M(t,e,r),n=!0},p(e,[r]){const s={};r&257&&(s.$$scope={dirty:r,ctx:e}),t.$set(s)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){C(t.$$.fragment,e),n=!1},d(e){P(t,e)}}}function Pe(o,t,n){let{experience:e}=t;const r=Ce(e.period.from,e.period.to),s=`${ie(e.period.from.getMonth())} ${e.period.from.getFullYear()}`,u=e.period.to?`${ie(e.period.to.getMonth())} ${e.period.to.getFullYear()}`:"Present",i=`${s} - ${u} · ${r} month${r>1?"s":""}`;return o.$$set=a=>{"experience"in a&&n(0,e=a.experience)},[e,i]}class Be extends he{constructor(t){super(),$e(this,t,Pe,Me,ue,{experience:0})}}function pe(o,t,n){const e=o.slice();return e[4]=t[n],e}function me(o,t){let n,e,r;return e=new Be({props:{experience:t[4]}}),{key:o,first:null,c(){n=oe(),V(e.$$.fragment),this.h()},l(s){n=oe(),L(e.$$.fragment,s),this.h()},h(){this.first=n},m(s,u){se(s,n,u),M(e,s,u),r=!0},p(s,u){t=s;const i={};u&1&&(i.experience=t[4]),e.$set(i)},i(s){r||(g(e.$$.fragment,s),r=!0)},o(s){C(e.$$.fragment,s),r=!1},d(s){s&&d(n),P(e,s)}}}function Ne(o){let t,n=[],e=new Map,r,s=G(o[0]);const u=i=>i[4].slug;for(let i=0;i<s.length;i+=1){let a=pe(o,s,i),h=u(a);e.set(h,n[i]=me(h,a))}return{c(){t=_("div");for(let i=0;i<n.length;i+=1)n[i].c();this.h()},l(i){t=v(i,"DIV",{class:!0});var a=E(t);for(let h=0;h<n.length;h+=1)n[h].l(a);a.forEach(d),this.h()},h(){k(t,"class","experiences svelte-ibrtgx")},m(i,a){se(i,t,a);for(let h=0;h<n.length;h+=1)n[h]&&n[h].m(t,null);r=!0},p(i,a){a&1&&(s=G(i[0]),de(),n=Ee(n,a,u,1,i,s,e,t,ke,me,null,pe),ge())},i(i){if(!r){for(let a=0;a<s.length;a+=1)g(n[a]);r=!0}},o(i){for(let a=0;a<n.length;a+=1)C(n[a]);r=!1},d(i){i&&d(t);for(let a=0;a<n.length;a+=1)n[a].d()}}}function qe(o){let t,n;return t=new Se({props:{title:o[1],$$slots:{default:[Ne]},$$scope:{ctx:o}}}),t.$on("search",o[2]),{c(){V(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,r){M(t,e,r),n=!0},p(e,[r]){const s={};r&129&&(s.$$scope={dirty:r,ctx:e}),t.$set(s)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){C(t.$$.fragment,e),n=!1},d(e){P(t,e)}}}function ze(o,t,n){const{items:e,title:r}=De;let s=e;return[s,r,i=>{const a=i.detail.search;Ve(a)&&n(0,s=e),n(0,s=e.filter(h=>h.name.toLowerCase().includes(a)||h.company.toLowerCase().includes(a)||h.description.toLowerCase().includes(a)))}]}class Je extends he{constructor(t){super(),$e(this,t,ze,qe,ue,{})}}export{Je as component};
import{s as l,n as o,V as c,d}from"./scheduler.e949bcc4.js";import{S as m,i as u}from"./index.42c33976.js";import{T as a}from"./params.7db052b6.js";import{u as r}from"./MainTitle.b7718d98.js";function f(n){let t;return document.title=t=r(n[0],a),{c:o,l(s){c("svelte-gorrxo",document.head).forEach(d)},m:o,p(s,[e]){e&1&&t!==(t=r(s[0],a))&&(document.title=t)},i:o,o,d:o}}function _(n,t,s){let{title:e}=t;return n.$$set=i=>{"title"in i&&s(0,e=i.title)},[e]}class x extends m{constructor(t){super(),u(this,t,_,f,l,{title:0})}}export{x as T};
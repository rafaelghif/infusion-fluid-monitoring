System.register(["./index-legacy-9ea4624f.js","./useQuery-legacy-f5bec2d7.js"],(function(e,t){"use strict";var r,a,c,s,n,l,i,o,u,d,y;return{setters:[e=>{r=e.N,a=e.t,c=e._,s=e.v,n=e.F,l=e.x,i=e.C,o=e.D,u=e.E,d=e.G},e=>{y=e.u}],execute:function(){const f=a.lazy((()=>c((()=>t.import("./TableReport-legacy-c158297b.js")),void 0)));e("default",(()=>{const e=a.useCallback((async()=>await(async()=>{try{return await r("reports")}catch(e){return Promise.reject(e)}})()),[]),{data:t,refetch:c}=y(["reports"],e);return s(n,{children:l(i,{title:"Data Reports",children:[s(o,{slot:"fixed",onIonRefresh:async e=>{c(),e.detail.complete()},children:s(u,{})}),s(a.Suspense,{fallback:s(d,{name:"crescent"}),children:t?s(f,{data:t}):s(d,{name:"crescent"})})]})})}))}}}));

System.register(["./index-legacy-2b429800.js","./useQuery-legacy-d8150b22.js"],(function(e,n){"use strict";var a,t,l,s,i,d,o,r,c,u,m,p,h,v,y,b,f,I,g,S,D;return{setters:[e=>{a=e.u,t=e.l,l=e.m,s=e.o,i=e.q,d=e.t,o=e.v,r=e.M,c=e.x,u=e.I,m=e.y,p=e.z,h=e.A,v=e._,y=e.B,b=e.F,f=e.C,I=e.D,g=e.E,S=e.G},e=>{D=e.u}],execute:function(){const x=({isOpen:e,data:n,onDidDismiss:v})=>{const[y,b]=d.useState({}),{mutate:f}=(()=>{const e=a(),{successToast:n}=t(),{setLoading:d}=l();return s({mutationFn:e=>i(e),onMutate:()=>{d(!0)},onError:async e=>{console.log(e)},onSuccess:async a=>{n(`Success Update User ${a}`),e.invalidateQueries({queryKey:["users"]})},onSettled:()=>{d(!1)}})})(),I=(e,n)=>{b((a=>({...a,[e]:n})))};return d.useEffect((()=>{n&&b({id:n.id,username:n.username,password:n.password,name:n.name,isAdmin:n.isAdmin})}),[n]),o(r,{title:"Update User",isOpen:e,onDidDismiss:v,children:c("form",{onSubmit:e=>{e.preventDefault(),f(y),v()},children:[o(u,{children:o(m,{type:"text",label:"Id",labelPlacement:"floating",value:null==y?void 0:y.id,onIonInput:e=>I("id",e.detail.value),disabled:!0})}),o(u,{children:o(m,{type:"text",label:"Username",labelPlacement:"floating",value:null==y?void 0:y.username,onIonInput:e=>I("username",e.detail.value)})}),o(u,{children:o(m,{type:"password",label:"Password",labelPlacement:"floating",value:null==y?void 0:y.password,onIonInput:e=>I("password",e.detail.value)})}),o(u,{children:o(m,{type:"text",label:"Name",labelPlacement:"floating",value:null==y?void 0:y.name,onIonInput:e=>I("name",e.detail.value)})}),o(u,{children:o(p,{checked:null==y?void 0:y.isAdmin,onIonChange:e=>I("isAdmin",e.detail.checked),children:"Is Admin"})}),o(h,{type:"submit",expand:"block",children:"Submit"})]})})},w=d.lazy((()=>v((()=>n.import("./TableUser-legacy-22cc6962.js")),void 0)));e("default",(()=>{const e=d.useCallback((async()=>await y()),[]),{data:n,refetch:a}=D(["users"],e),[t,l]=d.useState(),[s,i]=d.useState(!1);return c(b,{children:[c(f,{title:"Data Users",children:[o(I,{slot:"fixed",onIonRefresh:async e=>{a(),e.detail.complete()},children:o(g,{})}),o(d.Suspense,{fallback:o(S,{name:"crescent"}),children:n?o(w,{data:n,handleClickBtnEdit:e=>(l(e),void i(!0))}):o(S,{name:"crescent"})})]}),o(x,{isOpen:s,data:t,onDidDismiss:()=>i(!1)})]})}))}}}));

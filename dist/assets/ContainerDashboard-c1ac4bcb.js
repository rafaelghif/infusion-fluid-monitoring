import{t as e,_ as u,H as l,J as d,v as s,G as b,L as f}from"./index-15752f1b.js";const g=e.lazy(()=>u(()=>import("./RadialChart-5abaf4c5.js"),["assets/RadialChart-5abaf4c5.js","assets/index-15752f1b.js","assets/index-b6f9f69a.css"])),m=()=>{const[a,n]=e.useState([0]),[c,r]=e.useState("bg-white dark:bg-[#121212]");return e.useEffect(()=>{let i=l(d(f,"measurement","data"),o=>{const t=o.data();n([(t==null?void 0:t.value)/500*100])});return()=>i()},[]),e.useEffect(()=>{a[0]<=10?r("blinking-background"):r("bg-white dark:bg-[#121212]")},[a]),s("div",{className:`flex items-center justify-center w-screen h-full ${c}`,children:s(e.Suspense,{fallback:s(b,{name:"crescent"}),children:s(g,{series:a})})})};export{m as default};

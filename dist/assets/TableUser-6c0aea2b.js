import{t as n,v as r,a2 as a,A as l}from"./index-42c79485.js";import{T as u}from"./Table-cab42e1b.js";const m=({data:s,handleClickBtnEdit:t})=>{const o=n.useMemo(()=>[{name:"Id",selector:e=>e.id,sortable:!0,wrap:!0},{name:"Name",selector:e=>e.name,sortable:!0,wrap:!0},{name:"Username",selector:e=>e.username,sortable:!0,wrap:!0},{name:"Password",selector:e=>e.password,sortable:!0,wrap:!0},{name:"IsAdmin",cell:e=>e.isAdmin?r(a,{color:"success",children:"Yes"}):r(a,{color:"danger",children:"No"}),sortable:!0,wrap:!0},{name:"Edit",cell:e=>r(l,{fill:"clear",color:"warning",onClick:()=>{t(e)},children:"Edit"}),center:!0}],[t]);return r(u,{columns:o,data:s,responsive:!0,pagination:!0,striped:!0,highlightOnHover:!0})};export{m as default};
import{Q as i,d as u,O as r,U as l,x as d,a as m,_ as p,z as _}from"./q-2e1691b4.js";import{b}from"./q-f3717a90.js";const f=a=>{const e=i(a,["action","spaReset","reloadDocument","onSubmit$"]),s=b();return u("form",{...e,children:l(d,null,3,"BC_0"),onSubmit$:m(()=>p(()=>Promise.resolve().then(()=>S),void 0),"s_p9MSze0ojs4",[s])},{action:"get","preventdefault:submit":r(t=>!t.reloadDocument,[a],"!p0.reloadDocument"),"data-spa-reset":r(t=>t.spaReset?"true":void 0,[a],'p0.spaReset?"true":undefined')},0,"BC_1")},v=async(a,e)=>{const[s]=_(),t=new FormData(e),o=new URLSearchParams;t.forEach((n,c)=>{typeof n=="string"&&o.append(c,n)}),s("?"+o.toString(),!0).then(()=>{e.getAttribute("data-spa-reset")==="true"&&e.reset(),e.dispatchEvent(new CustomEvent("submitcompleted",{bubbles:!1,cancelable:!1,composed:!1,detail:{status:200}}))})},S=Object.freeze(Object.defineProperty({__proto__:null,s_Nk9PlpjQm9Y:f,s_p9MSze0ojs4:v},Symbol.toStringTag,{value:"Module"}));export{f as s_Nk9PlpjQm9Y,v as s_p9MSze0ojs4};

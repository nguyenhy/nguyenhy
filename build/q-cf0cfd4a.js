import{a as c}from"./q-5ab10227.js";const P={itemPerPage:5,maxPreviousPage:3,maxNextPage:3,includeFirstPage:!0,includeLastPage:!0};function p(a){const u=c("itemPerPage",a,P),o=c("maxPreviousPage",a,P),f=c("maxNextPage",a,P),m=c("includeFirstPage",a,P),I=c("includeLastPage",a,P);let t=a.currentPageIndex,r=a.totalItems;r<=0&&(r=t*u);const l=Math.ceil(r/u),s=0,i=l-1;t>i?t=i:t<s&&(t=s);const d=e=>e>=s&&e<=i,h=e=>{d(e)&&n.unshift(e)},x=e=>{d(e)&&n.push(e)},n=[];for(let e=0;e<o;e++){const g=t-1-e;h(g)}x(t);for(let e=0;e<f;e++){const g=t+1+e;x(g)}return m&&!n.includes(s)&&n.unshift(s),I&&!n.includes(i)&&n.push(i),{pages:n,firstPageIndex:s,lastPageIndex:i,totalPages:l,currentPageIndex:t,options:a}}export{p as c};
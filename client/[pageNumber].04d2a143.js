import{S as e,i as a,s,o as p,p as t,q as r,l as n,m as g,r as o}from"./client.ba4c128a.js";import{p as m,a as u,P as i}from"./PaginatedPosts.6681157f.js";function f(e){let a,s;return a=new i({props:{posts:e[0],pageNumber:e[2],pageRange:u}}),{c(){p(a.$$.fragment)},l(e){t(a.$$.fragment,e)},m(e,p){r(a,e,p),s=!0},p(e,[s]){const p={};1&s&&(p.posts=e[0]),4&s&&(p.pageNumber=e[2]),2&s&&(p.pageRange=u),a.$set(p)},i(e){s||(n(a.$$.fragment,e),s=!0)},o(e){g(a.$$.fragment,e),s=!1},d(e){o(a,e)}}}function $(e){return{posts:m(e.params.pageNumber-1),pageNumber:parseInt(e.params.pageNumber),pageRange:u}}function b(e,a,s){let{posts:p}=a,{pageRange:t}=a,{pageNumber:r}=a;return e.$$set=e=>{"posts"in e&&s(0,p=e.posts),"pageRange"in e&&s(1,t=e.pageRange),"pageNumber"in e&&s(2,r=e.pageNumber)},[p,t,r]}export default class extends e{constructor(e){super(),a(this,e,b,f,s,{posts:0,pageRange:1,pageNumber:2})}}export{$ as preload};

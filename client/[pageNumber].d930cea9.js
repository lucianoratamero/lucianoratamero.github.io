import{S as e,i as a,s as t,J as s,c as n,j as o,n as r,p as m,r as p,u as c,e as g,a as u,q as i,b as l,d as f,f as $,k as d,l as b,m as N,E as R,X as h,Y as P,T as E,Z as T,D as v,o as x}from"./client.311a5b93.js";import{p as j,a as y,P as w}from"./PaginatedPosts.6aad8932.js";function A(e){return s((()=>{setTimeout((()=>{document.documentElement.scrollTop=0}),50)})),[]}class L extends e{constructor(e){super(),a(this,e,A,null,t,{})}}const{document:k}=T;function q(e){let a,t;return a=new L({}),{c(){n(a.$$.fragment)},l(e){o(a.$$.fragment,e)},m(e,s){r(a,e,s),t=!0},i(e){t||(m(a.$$.fragment,e),t=!0)},o(e){p(a.$$.fragment,e),t=!1},d(e){c(a,e)}}}function B(e){let a,s,h,P,E,T,j,A=e[3];k.title=a="Recent posts - Page "+e[2]+" - luciano@ratamero.com";let L=q();return T=new w({props:{posts:e[0],pageNumber:e[2],pageRange:y}}),{c(){s=g("meta"),P=u(),L.c(),E=u(),n(T.$$.fragment),this.h()},l(e){const a=i('[data-svelte="svelte-1goiyvt"]',k.head);s=l(a,"META",{name:!0,content:!0}),a.forEach(f),P=$(e),L.l(e),E=$(e),o(T.$$.fragment,e),this.h()},h(){d(s,"name","description"),d(s,"content",h="Luciano Ratamero's recent blog posts - Page "+e[2])},m(e,a){b(k.head,s),N(e,P,a),L.m(e,a),N(e,E,a),r(T,e,a),j=!0},p(e,[n]){(!j||4&n)&&a!==(a="Recent posts - Page "+e[2]+" - luciano@ratamero.com")&&(k.title=a),(!j||4&n&&h!==(h="Luciano Ratamero's recent blog posts - Page "+e[2]))&&d(s,"content",h),8&n&&t(A,A=e[3])&&(v(),p(L,1,1,x),R(),L=q(),L.c(),m(L),L.m(E.parentNode,E));const o={};1&n&&(o.posts=e[0]),4&n&&(o.pageNumber=e[2]),2&n&&(o.pageRange=y),T.$set(o)},i(e){j||(m(L),m(T.$$.fragment,e),j=!0)},o(e){p(L),p(T.$$.fragment,e),j=!1},d(e){f(s),e&&f(P),L.d(e),e&&f(E),c(T,e)}}}function D(e){return{posts:j(e.params.pageNumber-1),pageNumber:parseInt(e.params.pageNumber),pageRange:y}}function I(e,a,t){let s,{posts:n}=a,{pageRange:o}=a,{pageNumber:r}=a;const{page:m}=h();return P(e,m,(e=>t(3,s=e))),E((()=>{const e=document.getElementsByTagName("title");Array.from(e).map(((e,a)=>{a>0&&e.remove()}))})),e.$$set=e=>{"posts"in e&&t(0,n=e.posts),"pageRange"in e&&t(1,o=e.pageRange),"pageNumber"in e&&t(2,r=e.pageNumber)},[n,o,r,s,m]}export default class extends e{constructor(e){super(),a(this,e,I,B,t,{posts:0,pageRange:1,pageNumber:2})}}export{D as preload};

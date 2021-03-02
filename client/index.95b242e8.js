import{S as e,i as t,s as a,c as o,a as r,e as s,t as n,q as i,j as h,d as l,f as u,b as c,g as f,h as d,k as p,n as g,m,l as b,p as w,r as v,u as y,H as E}from"./client.311a5b93.js";import"./Icon.06acf308.js";import{M as x,P as k}from"./MetaTags.39c5eacd.js";import{s as B,w as S,o as O,a as A,c as $,t as I}from"./test-alert.e7d207c8.js";function L(e){let t,a,E,L,G,P,R,j,T,z,M,N,C,H,U,D,W,q,K,F,J,Q,V,X,Y,Z,_,ee,te,ae,oe,re,se,ne,ie,he,le,ue,ce,fe,de,pe,ge,me,be,we,ve,ye,Ee,xe,ke,Be,Se,Oe,Ae,$e,Ie,Le,Ge,Pe,Re,je,Te,ze,Me,Ne,Ce,He,Ue,De,We,qe,Ke,Fe,Je,Qe,Ve,Xe,Ye,Ze,_e,et,tt,at,ot,rt,st,nt,it,ht,lt,ut,ct,ft,dt,pt,gt,mt,bt,wt,vt,yt,Et,xt,kt,Bt,St,Ot,At,$t,It,Lt,Gt,Pt,Rt,jt,Tt,zt,Mt,Nt,Ct,Ht,Ut,Dt,Wt,qt,Kt,Ft,Jt,Qt,Vt,Xt,Yt,Zt,_t,ea;return t=new x({props:{title:"using streamlabs and OBS on linux",description:"in this post, I'll show you how to use Streamlabs with alerts for follows, subs and bits, using OBS on Linux :]",keywords:"streamlabs,obs,linux,alerts"}}),R=new k({props:{date:"2019-01-03",text:e[1]}}),{c(){o(t.$$.fragment),a=r(),E=s("h1"),L=s("mark"),G=n("using streamlabs and OBS on linux"),P=r(),o(R.$$.fragment),j=r(),T=s("article"),z=s("a"),M=s("img"),C=r(),H=s("p"),U=s("strong"),D=n("edit: most linux distros and alternative installations (like snap)\n      currently already ship with Linux Browser enabled. be sure to check before\n      following this guide!"),W=r(),q=s("p"),K=n("lately I've been watching a lot of streams on twitch. even if I'm doing\n    something or just want to turn my brain off, I always leave a tab open; but\n    the streams are always related to video games. with that in mind, I was\n    thinking about streaming some coding sessions for a change."),F=r(),J=s("p"),Q=n("but if you're streaming, it's important to keep an eye on people chatting\n    and watching, so it nice to have a couple of alerts for certain user\n    interactions, like who followed you or subscribed to you, for example. for\n    that, people from\n    "),V=s("a"),X=n("streamlabs"),Y=n("\n    offer\n    "),Z=s("a"),_=n("their open sourced\n      version"),ee=n("\n    of the famous Open Broadcaster Studio - aka\n    "),te=s("a"),ae=n("OBS"),oe=n("\n    - with their own tweaks, to make it easy to handle stream related alerts."),re=r(),se=s("p"),ne=n("the only catch: "),ie=s("strong"),he=n("it doesn't work on linux"),le=n("."),ue=r(),ce=s("h3"),fe=n("there's always a way"),de=r(),pe=s("p"),ge=n("for these cases, streamlabs offers an url to a private web page that shows\n    these alerts: the\n    "),me=s("strong"),be=n("Alert Box"),we=n(". if you want to find the url to yours, log into\n    streamlabs, click on\n    "),ve=s("strong"),ye=n("Widgets"),Ee=n(", then\n    "),xe=s("strong"),ke=n("Alert Box"),Be=n("\n    and you'll have the option to copy the url to your Alert Box page."),Se=r(),Oe=s("a"),Ae=s("img"),Ie=r(),Le=s("p"),Ge=n("with that, all we need is to have OBS treat this web page as a real input\n    device. it's here that the magic happens."),Pe=r(),Re=s("h3"),je=n("obs-linuxbrowser"),Te=r(),ze=s("a"),Me=s("img"),Ce=r(),He=s("p"),Ue=n("the user\n    "),De=s("a"),We=n("bazukas"),qe=n("\n    has published this beautiful plugin that does all the grunt work for us:\n    "),Ke=s("a"),Fe=n("obs-linuxbrowser"),Je=n(".\n    this plugin uses chromium behind the scenes to render any web page as an OBS\n    input - and yeah,\n    "),Qe=s("strong"),Ve=n("it works on linux"),Xe=n("."),Ye=r(),Ze=s("p"),_e=n("with OBS installed, to use the pugin, you only need to download the latest\n    version from their\n    "),et=s("a"),tt=n("releases page"),at=n("\n    and unpack it to your OBS' plugins directory. the default directory is\n    "),ot=s("code"),rt=n("~/.config/obs-studio/plugins"),st=n("."),nt=r(),it=s("p"),ht=n("tldr:"),lt=r(),ut=s("ul"),ct=s("li"),ft=n("download the plugin"),dt=r(),pt=s("li"),gt=s("code"),mt=n("mkdir -p ~/.config/obs-studio/plugins/"),bt=r(),wt=s("li"),vt=s("code"),yt=n("tar -zxvf linuxbrowser0.5.2-obs21.1.2-64bit.tgz -C\n        ~/.config/obs-studio/plugins/"),Et=r(),xt=s("p"),kt=n("with that done, a new source type will appear in the add sources menu on\n    OBS, called\n    "),Bt=s("strong"),St=n("Linux Browser"),Ot=n("."),At=r(),$t=s("a"),It=s("img"),Gt=r(),Pt=s("p"),Rt=n("you just need to add it by clicking on +, then\n    "),jt=s("strong"),Tt=n("Linux Browser"),zt=n("\n    and put your\n    "),Mt=s("strong"),Nt=n("Alert Box"),Ct=n("\n    url in the URL field."),Ht=r(),Ut=s("a"),Dt=s("img"),qt=r(),Kt=s("p"),Ft=n("you could test if the alerts are appearing on OBS by going to streamlabs and\n    clicking the test buttons!"),Jt=r(),Qt=s("a"),Vt=s("img"),Yt=r(),Zt=s("p"),_t=n("that's it for today! if you have any tips or suggestions on how to improve\n    this post, just ping me in the comments section. see you!"),this.h()},l(e){const o=i('[data-svelte="svelte-5mtm1e"]',document.head);h(t.$$.fragment,o),o.forEach(l),a=u(e),E=c(e,"H1",{});var r=f(E);L=c(r,"MARK",{});var s=f(L);G=d(s,"using streamlabs and OBS on linux"),s.forEach(l),r.forEach(l),P=u(e),h(R.$$.fragment,e),j=u(e),T=c(e,"ARTICLE",{});var n=f(T);z=c(n,"A",{href:!0});var p=f(z);M=c(p,"IMG",{src:!0,alt:!0}),p.forEach(l),C=u(n),H=c(n,"P",{});var g=f(H);U=c(g,"STRONG",{});var m=f(U);D=d(m,"edit: most linux distros and alternative installations (like snap)\n      currently already ship with Linux Browser enabled. be sure to check before\n      following this guide!"),m.forEach(l),g.forEach(l),W=u(n),q=c(n,"P",{});var b=f(q);K=d(b,"lately I've been watching a lot of streams on twitch. even if I'm doing\n    something or just want to turn my brain off, I always leave a tab open; but\n    the streams are always related to video games. with that in mind, I was\n    thinking about streaming some coding sessions for a change."),b.forEach(l),F=u(n),J=c(n,"P",{});var w=f(J);Q=d(w,"but if you're streaming, it's important to keep an eye on people chatting\n    and watching, so it nice to have a couple of alerts for certain user\n    interactions, like who followed you or subscribed to you, for example. for\n    that, people from\n    "),V=c(w,"A",{href:!0});var v=f(V);X=d(v,"streamlabs"),v.forEach(l),Y=d(w,"\n    offer\n    "),Z=c(w,"A",{href:!0});var y=f(Z);_=d(y,"their open sourced\n      version"),y.forEach(l),ee=d(w,"\n    of the famous Open Broadcaster Studio - aka\n    "),te=c(w,"A",{href:!0});var x=f(te);ae=d(x,"OBS"),x.forEach(l),oe=d(w,"\n    - with their own tweaks, to make it easy to handle stream related alerts."),w.forEach(l),re=u(n),se=c(n,"P",{});var k=f(se);ne=d(k,"the only catch: "),ie=c(k,"STRONG",{});var B=f(ie);he=d(B,"it doesn't work on linux"),B.forEach(l),le=d(k,"."),k.forEach(l),ue=u(n),ce=c(n,"H3",{});var S=f(ce);fe=d(S,"there's always a way"),S.forEach(l),de=u(n),pe=c(n,"P",{});var O=f(pe);ge=d(O,"for these cases, streamlabs offers an url to a private web page that shows\n    these alerts: the\n    "),me=c(O,"STRONG",{});var A=f(me);be=d(A,"Alert Box"),A.forEach(l),we=d(O,". if you want to find the url to yours, log into\n    streamlabs, click on\n    "),ve=c(O,"STRONG",{});var $=f(ve);ye=d($,"Widgets"),$.forEach(l),Ee=d(O,", then\n    "),xe=c(O,"STRONG",{});var I=f(xe);ke=d(I,"Alert Box"),I.forEach(l),Be=d(O,"\n    and you'll have the option to copy the url to your Alert Box page."),O.forEach(l),Se=u(n),Oe=c(n,"A",{href:!0});var N=f(Oe);Ae=c(N,"IMG",{src:!0,alt:!0}),N.forEach(l),Ie=u(n),Le=c(n,"P",{});var $e=f(Le);Ge=d($e,"with that, all we need is to have OBS treat this web page as a real input\n    device. it's here that the magic happens."),$e.forEach(l),Pe=u(n),Re=c(n,"H3",{});var Ne=f(Re);je=d(Ne,"obs-linuxbrowser"),Ne.forEach(l),Te=u(n),ze=c(n,"A",{href:!0});var Lt=f(ze);Me=c(Lt,"IMG",{src:!0,alt:!0}),Lt.forEach(l),Ce=u(n),He=c(n,"P",{});var Wt=f(He);Ue=d(Wt,"the user\n    "),De=c(Wt,"A",{href:!0});var Xt=f(De);We=d(Xt,"bazukas"),Xt.forEach(l),qe=d(Wt,"\n    has published this beautiful plugin that does all the grunt work for us:\n    "),Ke=c(Wt,"A",{href:!0});var ea=f(Ke);Fe=d(ea,"obs-linuxbrowser"),ea.forEach(l),Je=d(Wt,".\n    this plugin uses chromium behind the scenes to render any web page as an OBS\n    input - and yeah,\n    "),Qe=c(Wt,"STRONG",{});var ta=f(Qe);Ve=d(ta,"it works on linux"),ta.forEach(l),Xe=d(Wt,"."),Wt.forEach(l),Ye=u(n),Ze=c(n,"P",{});var aa=f(Ze);_e=d(aa,"with OBS installed, to use the pugin, you only need to download the latest\n    version from their\n    "),et=c(aa,"A",{href:!0});var oa=f(et);tt=d(oa,"releases page"),oa.forEach(l),at=d(aa,"\n    and unpack it to your OBS' plugins directory. the default directory is\n    "),ot=c(aa,"CODE",{});var ra=f(ot);rt=d(ra,"~/.config/obs-studio/plugins"),ra.forEach(l),st=d(aa,"."),aa.forEach(l),nt=u(n),it=c(n,"P",{});var sa=f(it);ht=d(sa,"tldr:"),sa.forEach(l),lt=u(n),ut=c(n,"UL",{});var na=f(ut);ct=c(na,"LI",{});var ia=f(ct);ft=d(ia,"download the plugin"),ia.forEach(l),dt=u(na),pt=c(na,"LI",{});var ha=f(pt);gt=c(ha,"CODE",{});var la=f(gt);mt=d(la,"mkdir -p ~/.config/obs-studio/plugins/"),la.forEach(l),ha.forEach(l),bt=u(na),wt=c(na,"LI",{});var ua=f(wt);vt=c(ua,"CODE",{});var ca=f(vt);yt=d(ca,"tar -zxvf linuxbrowser0.5.2-obs21.1.2-64bit.tgz -C\n        ~/.config/obs-studio/plugins/"),ca.forEach(l),ua.forEach(l),na.forEach(l),Et=u(n),xt=c(n,"P",{});var fa=f(xt);kt=d(fa,"with that done, a new source type will appear in the add sources menu on\n    OBS, called\n    "),Bt=c(fa,"STRONG",{});var da=f(Bt);St=d(da,"Linux Browser"),da.forEach(l),Ot=d(fa,"."),fa.forEach(l),At=u(n),$t=c(n,"A",{href:!0});var pa=f($t);It=c(pa,"IMG",{src:!0,alt:!0}),pa.forEach(l),Gt=u(n),Pt=c(n,"P",{});var ga=f(Pt);Rt=d(ga,"you just need to add it by clicking on +, then\n    "),jt=c(ga,"STRONG",{});var ma=f(jt);Tt=d(ma,"Linux Browser"),ma.forEach(l),zt=d(ga,"\n    and put your\n    "),Mt=c(ga,"STRONG",{});var ba=f(Mt);Nt=d(ba,"Alert Box"),ba.forEach(l),Ct=d(ga,"\n    url in the URL field."),ga.forEach(l),Ht=u(n),Ut=c(n,"A",{href:!0});var wa=f(Ut);Dt=c(wa,"IMG",{src:!0,alt:!0}),wa.forEach(l),qt=u(n),Kt=c(n,"P",{});var va=f(Kt);Ft=d(va,"you could test if the alerts are appearing on OBS by going to streamlabs and\n    clicking the test buttons!"),va.forEach(l),Jt=u(n),Qt=c(n,"A",{href:!0});var ya=f(Qt);Vt=c(ya,"IMG",{src:!0,alt:!0}),ya.forEach(l),Yt=u(n),Zt=c(n,"P",{});var Ea=f(Zt);_t=d(Ea,"that's it for today! if you have any tips or suggestions on how to improve\n    this post, just ping me in the comments section. see you!"),Ea.forEach(l),n.forEach(l),this.h()},h(){M.src!==(N=B)&&p(M,"src",N),p(M,"alt","Logos from Streamlabs, Linux and OBS"),p(z,"href",B),p(V,"href","https://streamlabs.com"),p(Z,"href","https://github.com/stream-labs/streamlabs-obs/"),p(te,"href","https://obsproject.com/"),Ae.src!==($e=S)&&p(Ae,"src",$e),p(Ae,"alt","Where to find the Alert Box URL"),p(Oe,"href",S),Me.src!==(Ne=O)&&p(Me,"src",Ne),p(Me,"alt","obs-linuxbrowser on Github"),p(ze,"href",O),p(De,"href","https://github.com/bazukas/"),p(Ke,"href","https://github.com/bazukas/obs-linuxbrowser/"),p(et,"href","https://github.com/bazukas/obs-linuxbrowser/releases"),It.src!==(Lt=A)&&p(It,"src",Lt),p(It,"alt","How to add an input on OBS"),p($t,"href",A),Dt.src!==(Wt=$)&&p(Dt,"src",Wt),p(Dt,"alt","Config Linux Browser screen"),p(Ut,"href",$),Vt.src!==(Xt=I)&&p(Vt,"src",Xt),p(Vt,"alt","Sample of a test alert"),p(Qt,"href",I)},m(o,r){g(t,document.head,null),m(o,a,r),m(o,E,r),b(E,L),b(L,G),m(o,P,r),g(R,o,r),m(o,j,r),m(o,T,r),b(T,z),b(z,M),b(T,C),b(T,H),b(H,U),b(U,D),b(T,W),b(T,q),b(q,K),b(T,F),b(T,J),b(J,Q),b(J,V),b(V,X),b(J,Y),b(J,Z),b(Z,_),b(J,ee),b(J,te),b(te,ae),b(J,oe),b(T,re),b(T,se),b(se,ne),b(se,ie),b(ie,he),b(se,le),b(T,ue),b(T,ce),b(ce,fe),b(T,de),b(T,pe),b(pe,ge),b(pe,me),b(me,be),b(pe,we),b(pe,ve),b(ve,ye),b(pe,Ee),b(pe,xe),b(xe,ke),b(pe,Be),b(T,Se),b(T,Oe),b(Oe,Ae),b(T,Ie),b(T,Le),b(Le,Ge),b(T,Pe),b(T,Re),b(Re,je),b(T,Te),b(T,ze),b(ze,Me),b(T,Ce),b(T,He),b(He,Ue),b(He,De),b(De,We),b(He,qe),b(He,Ke),b(Ke,Fe),b(He,Je),b(He,Qe),b(Qe,Ve),b(He,Xe),b(T,Ye),b(T,Ze),b(Ze,_e),b(Ze,et),b(et,tt),b(Ze,at),b(Ze,ot),b(ot,rt),b(Ze,st),b(T,nt),b(T,it),b(it,ht),b(T,lt),b(T,ut),b(ut,ct),b(ct,ft),b(ut,dt),b(ut,pt),b(pt,gt),b(gt,mt),b(ut,bt),b(ut,wt),b(wt,vt),b(vt,yt),b(T,Et),b(T,xt),b(xt,kt),b(xt,Bt),b(Bt,St),b(xt,Ot),b(T,At),b(T,$t),b($t,It),b(T,Gt),b(T,Pt),b(Pt,Rt),b(Pt,jt),b(jt,Tt),b(Pt,zt),b(Pt,Mt),b(Mt,Nt),b(Pt,Ct),b(T,Ht),b(T,Ut),b(Ut,Dt),b(T,qt),b(T,Kt),b(Kt,Ft),b(T,Jt),b(T,Qt),b(Qt,Vt),b(T,Yt),b(T,Zt),b(Zt,_t),e[2](T),ea=!0},p(e,[t]){const a={};2&t&&(a.text=e[1]),R.$set(a)},i(e){ea||(w(t.$$.fragment,e),w(R.$$.fragment,e),ea=!0)},o(e){v(t.$$.fragment,e),v(R.$$.fragment,e),ea=!1},d(o){y(t),o&&l(a),o&&l(E),o&&l(P),y(R,o),o&&l(j),o&&l(T),e[2](null)}}}function G(e,t,a){let o,r;return e.$$.update=()=>{1&e.$$.dirty&&a(1,r=o&&o.textContent)},[o,r,function(e){E[e?"unshift":"push"]((()=>{o=e,a(0,o)}))}]}export default class extends e{constructor(e){super(),t(this,e,G,L,a,{})}}

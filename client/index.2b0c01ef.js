import{S as a,i as o,s as e,c as s,a as r,e as n,t,q as i,j as c,d as u,f as m,b as d,g as l,h as p,k as f,n as h,m as g,l as v,p as b,r as E,u as x,H as B}from"./client.311a5b93.js";import"./Icon.06acf308.js";import{M as O,P as S}from"./MetaTags.39c5eacd.js";import{s as w,w as q,o as z,a as G,c as $,t as A}from"./test-alert.e7d207c8.js";function j(a){let o,e,B,j,I,L,R,P,T,k,M,N,U,C,F,H,D,y,W,K,J,Q,V,X,Y,Z,_,aa,oa,ea,sa,ra,na,ta,ia,ca,ua,ma,da,la,pa,fa,ha,ga,va,ba,Ea,xa,Ba,Oa,Sa,wa,qa,za,Ga,$a,Aa,ja,Ia,La,Ra,Pa,Ta,ka,Ma,Na,Ua,Ca,Fa,Ha,Da,ya,Wa,Ka,Ja,Qa,Va,Xa,Ya,Za,_a,ao,oo,eo,so,ro,no,to,io,co,uo,mo,lo,po,fo,ho,go,vo,bo,Eo,xo,Bo,Oo,So,wo,qo,zo,Go,$o,Ao,jo,Io,Lo,Ro,Po,To,ko,Mo,No,Uo,Co,Fo,Ho,Do,yo,Wo,Ko,Jo,Qo,Vo,Xo,Yo,Zo,_o,ae,oe,ee,se,re;return o=new O({props:{title:"usando streamlabs com OBS no linux",description:"nesse post, mostro como usar o Streamlabs com alertas de follow, sub e bits, dentro do OBS em uma distro Linux. chega mais :]",keywords:"streamlabs,obs,linux,alertas"}}),R=new S({props:{date:"2019-01-04",text:a[1]}}),{c(){s(o.$$.fragment),e=r(),B=n("h1"),j=n("mark"),I=t("usando streamlabs com OBS no linux"),L=r(),s(R.$$.fragment),P=r(),T=n("article"),k=n("a"),M=n("figure"),N=n("img"),C=r(),F=n("p"),H=n("strong"),D=t("edit: as versões de grande parte das distros, além da snap, já vêm\n      com suporte a Linux Browser, então verifique antes de ler o post!"),y=r(),W=n("p"),K=t("ultimamente eu ando assistindo a muitos canais no twitch durante meu tempo\n    livre. mesmo que tenha algo pra fazer ou só esteja cansado demais pra\n    pensar, acabo sempre deixando uma aba aberta; mas é sempre com algo\n    relacionado a algum jogo eletrônico. pensando nisso, tenho tido bastante\n    vontade de começar a fazer streams de desenvolvimento de código."),J=r(),Q=n("p"),V=t("mas se é pra fazer streams, é importante se manter em contato com quem tá\n    ali contigo, te assistindo ou seguindo, e se faz necessário o uso de alertas\n    visuais e sonoros pra certas interações do usuário, como novos assinantes ou\n    doadores. pra suprir essa demanda, o pessoal da\n    "),X=n("a"),Y=t("streamlabs"),Z=t("\n    oferece\n    "),_=n("a"),aa=t("sua versão open\n      source"),oa=t("\n    do Open Broadcaster Studio, o famoso\n    "),ea=n("a"),sa=t("OBS"),ra=t(", com suas alterações, facilitando\n    a vida de quem faz transmissões ao-vivo."),na=r(),ta=n("p"),ia=t("só tem um problema: "),ca=n("strong"),ua=t("não funciona no linux"),ma=t("."),da=r(),la=n("h3"),pa=t("sempre há um jeitinho"),fa=r(),ha=n("p"),ga=t("pra esses casos, o streamlabs oferece uma url pra uma página que exibe esses\n    alertas - o que chamam de\n    "),va=n("strong"),ba=t("Alert Box"),Ea=t(". pra você achar o endereço do seu, faça login no\n    streamlabs, clique em\n    "),xa=n("strong"),Ba=t("Widgets"),Oa=t(", depois em\n    "),Sa=n("strong"),wa=t("Alert Box"),qa=t(". nessa página, você terá a opção de copiar a url\n    da página de alertas."),za=r(),Ga=n("a"),$a=n("figure"),Aa=n("img"),Ia=r(),La=n("p"),Ra=t("com isso em mãos, tudo que a gente precisa fazer é abrir uma página web\n    dentro do OBS como uma fonte de vídeo. é aí que entra o pulo do gato."),Pa=r(),Ta=n("h3"),ka=t("obs-linuxbrowser"),Ma=r(),Na=n("a"),Ua=n("figure"),Ca=n("img"),Ha=r(),Da=n("p"),ya=t("o usuário\n    "),Wa=n("a"),Ka=t("bazukas"),Ja=t("\n    publicou no github esse plugin lindo que faz todo o trabalho, o\n    "),Qa=n("a"),Va=t("obs-linuxbrowser"),Xa=t(".\n    o plugin usa o chromium por baixo dos panos pra conseguir usar uma página\n    web como input de vídeo no OBS - e esse sim funciona no linux!"),Ya=r(),Za=n("p"),_a=t("supondo que você já tenha o OBS instalado, pra usar o plugin, é só baixar a\n    versão mais nova da\n    "),ao=n("a"),oo=t("página de\n      releases"),eo=t("\n    e descompactar ela pra pasta de plugins do OBS. essa pasta geralmente fica\n    em\n    "),so=n("code"),ro=t("~/.config/obs-studio/plugins"),no=t("."),to=r(),io=n("p"),co=t("resumindo:"),uo=r(),mo=n("ul"),lo=n("li"),po=t("baixe o plugin"),fo=r(),ho=n("li"),go=n("code"),vo=t("mkdir -p ~/.config/obs-studio/plugins/"),bo=r(),Eo=n("li"),xo=n("code"),Bo=t("tar -zxvf linuxbrowser0.5.2-obs21.1.2-64bit.tgz -C\n        ~/.config/obs-studio/plugins/"),Oo=r(),So=n("p"),wo=t("com isso, uma nova opção de fonte irá aparecer no menu de fontes do OBS,\n    chamada\n    "),qo=n("strong"),zo=t("Linux Browser"),Go=t("."),$o=r(),Ao=n("figure"),jo=n("a"),Io=n("img"),Ro=r(),Po=n("p"),To=t("basta adicionar clicando no +, selecionar\n    "),ko=n("strong"),Mo=t("Linux Browser"),No=t("\n    e colocar como url a sua url de\n    "),Uo=n("strong"),Co=t("Alert Box"),Fo=t("."),Ho=r(),Do=n("figure"),yo=n("a"),Wo=n("img"),Jo=r(),Qo=n("p"),Vo=t("vale a pena também testar e ver se ela aparece no OBS; comigo funcionou de\n    primeira!"),Xo=r(),Yo=n("figure"),Zo=n("a"),_o=n("img"),oe=r(),ee=n("p"),se=t("por hoje é só! se tiverem dicas ou sugestões pra melhorar esse texto, só me\n    cutucar nos comentários. abraços!"),this.h()},l(a){const s=i('[data-svelte="svelte-69dq1u"]',document.head);c(o.$$.fragment,s),s.forEach(u),e=m(a),B=d(a,"H1",{});var r=l(B);j=d(r,"MARK",{});var n=l(j);I=p(n,"usando streamlabs com OBS no linux"),n.forEach(u),r.forEach(u),L=m(a),c(R.$$.fragment,a),P=m(a),T=d(a,"ARTICLE",{});var t=l(T);k=d(t,"A",{href:!0});var f=l(k);M=d(f,"FIGURE",{});var h=l(M);N=d(h,"IMG",{src:!0,alt:!0}),h.forEach(u),f.forEach(u),C=m(t),F=d(t,"P",{});var g=l(F);H=d(g,"STRONG",{});var v=l(H);D=p(v,"edit: as versões de grande parte das distros, além da snap, já vêm\n      com suporte a Linux Browser, então verifique antes de ler o post!"),v.forEach(u),g.forEach(u),y=m(t),W=d(t,"P",{});var b=l(W);K=p(b,"ultimamente eu ando assistindo a muitos canais no twitch durante meu tempo\n    livre. mesmo que tenha algo pra fazer ou só esteja cansado demais pra\n    pensar, acabo sempre deixando uma aba aberta; mas é sempre com algo\n    relacionado a algum jogo eletrônico. pensando nisso, tenho tido bastante\n    vontade de começar a fazer streams de desenvolvimento de código."),b.forEach(u),J=m(t),Q=d(t,"P",{});var E=l(Q);V=p(E,"mas se é pra fazer streams, é importante se manter em contato com quem tá\n    ali contigo, te assistindo ou seguindo, e se faz necessário o uso de alertas\n    visuais e sonoros pra certas interações do usuário, como novos assinantes ou\n    doadores. pra suprir essa demanda, o pessoal da\n    "),X=d(E,"A",{href:!0});var x=l(X);Y=p(x,"streamlabs"),x.forEach(u),Z=p(E,"\n    oferece\n    "),_=d(E,"A",{href:!0});var O=l(_);aa=p(O,"sua versão open\n      source"),O.forEach(u),oa=p(E,"\n    do Open Broadcaster Studio, o famoso\n    "),ea=d(E,"A",{href:!0});var S=l(ea);sa=p(S,"OBS"),S.forEach(u),ra=p(E,", com suas alterações, facilitando\n    a vida de quem faz transmissões ao-vivo."),E.forEach(u),na=m(t),ta=d(t,"P",{});var w=l(ta);ia=p(w,"só tem um problema: "),ca=d(w,"STRONG",{});var q=l(ca);ua=p(q,"não funciona no linux"),q.forEach(u),ma=p(w,"."),w.forEach(u),da=m(t),la=d(t,"H3",{});var z=l(la);pa=p(z,"sempre há um jeitinho"),z.forEach(u),fa=m(t),ha=d(t,"P",{});var G=l(ha);ga=p(G,"pra esses casos, o streamlabs oferece uma url pra uma página que exibe esses\n    alertas - o que chamam de\n    "),va=d(G,"STRONG",{});var $=l(va);ba=p($,"Alert Box"),$.forEach(u),Ea=p(G,". pra você achar o endereço do seu, faça login no\n    streamlabs, clique em\n    "),xa=d(G,"STRONG",{});var A=l(xa);Ba=p(A,"Widgets"),A.forEach(u),Oa=p(G,", depois em\n    "),Sa=d(G,"STRONG",{});var U=l(Sa);wa=p(U,"Alert Box"),U.forEach(u),qa=p(G,". nessa página, você terá a opção de copiar a url\n    da página de alertas."),G.forEach(u),za=m(t),Ga=d(t,"A",{href:!0});var ja=l(Ga);$a=d(ja,"FIGURE",{});var Fa=l($a);Aa=d(Fa,"IMG",{src:!0,alt:!0}),Fa.forEach(u),ja.forEach(u),Ia=m(t),La=d(t,"P",{});var Lo=l(La);Ra=p(Lo,"com isso em mãos, tudo que a gente precisa fazer é abrir uma página web\n    dentro do OBS como uma fonte de vídeo. é aí que entra o pulo do gato."),Lo.forEach(u),Pa=m(t),Ta=d(t,"H3",{});var Ko=l(Ta);ka=p(Ko,"obs-linuxbrowser"),Ko.forEach(u),Ma=m(t),Na=d(t,"A",{href:!0});var ae=l(Na);Ua=d(ae,"FIGURE",{});var re=l(Ua);Ca=d(re,"IMG",{src:!0,alt:!0}),re.forEach(u),ae.forEach(u),Ha=m(t),Da=d(t,"P",{});var ne=l(Da);ya=p(ne,"o usuário\n    "),Wa=d(ne,"A",{href:!0});var te=l(Wa);Ka=p(te,"bazukas"),te.forEach(u),Ja=p(ne,"\n    publicou no github esse plugin lindo que faz todo o trabalho, o\n    "),Qa=d(ne,"A",{href:!0});var ie=l(Qa);Va=p(ie,"obs-linuxbrowser"),ie.forEach(u),Xa=p(ne,".\n    o plugin usa o chromium por baixo dos panos pra conseguir usar uma página\n    web como input de vídeo no OBS - e esse sim funciona no linux!"),ne.forEach(u),Ya=m(t),Za=d(t,"P",{});var ce=l(Za);_a=p(ce,"supondo que você já tenha o OBS instalado, pra usar o plugin, é só baixar a\n    versão mais nova da\n    "),ao=d(ce,"A",{href:!0});var ue=l(ao);oo=p(ue,"página de\n      releases"),ue.forEach(u),eo=p(ce,"\n    e descompactar ela pra pasta de plugins do OBS. essa pasta geralmente fica\n    em\n    "),so=d(ce,"CODE",{});var me=l(so);ro=p(me,"~/.config/obs-studio/plugins"),me.forEach(u),no=p(ce,"."),ce.forEach(u),to=m(t),io=d(t,"P",{});var de=l(io);co=p(de,"resumindo:"),de.forEach(u),uo=m(t),mo=d(t,"UL",{});var le=l(mo);lo=d(le,"LI",{});var pe=l(lo);po=p(pe,"baixe o plugin"),pe.forEach(u),fo=m(le),ho=d(le,"LI",{});var fe=l(ho);go=d(fe,"CODE",{});var he=l(go);vo=p(he,"mkdir -p ~/.config/obs-studio/plugins/"),he.forEach(u),fe.forEach(u),bo=m(le),Eo=d(le,"LI",{});var ge=l(Eo);xo=d(ge,"CODE",{});var ve=l(xo);Bo=p(ve,"tar -zxvf linuxbrowser0.5.2-obs21.1.2-64bit.tgz -C\n        ~/.config/obs-studio/plugins/"),ve.forEach(u),ge.forEach(u),le.forEach(u),Oo=m(t),So=d(t,"P",{});var be=l(So);wo=p(be,"com isso, uma nova opção de fonte irá aparecer no menu de fontes do OBS,\n    chamada\n    "),qo=d(be,"STRONG",{});var Ee=l(qo);zo=p(Ee,"Linux Browser"),Ee.forEach(u),Go=p(be,"."),be.forEach(u),$o=m(t),Ao=d(t,"FIGURE",{});var xe=l(Ao);jo=d(xe,"A",{href:!0});var Be=l(jo);Io=d(Be,"IMG",{src:!0,alt:!0}),Be.forEach(u),xe.forEach(u),Ro=m(t),Po=d(t,"P",{});var Oe=l(Po);To=p(Oe,"basta adicionar clicando no +, selecionar\n    "),ko=d(Oe,"STRONG",{});var Se=l(ko);Mo=p(Se,"Linux Browser"),Se.forEach(u),No=p(Oe,"\n    e colocar como url a sua url de\n    "),Uo=d(Oe,"STRONG",{});var we=l(Uo);Co=p(we,"Alert Box"),we.forEach(u),Fo=p(Oe,"."),Oe.forEach(u),Ho=m(t),Do=d(t,"FIGURE",{});var qe=l(Do);yo=d(qe,"A",{href:!0});var ze=l(yo);Wo=d(ze,"IMG",{src:!0,alt:!0}),ze.forEach(u),qe.forEach(u),Jo=m(t),Qo=d(t,"P",{});var Ge=l(Qo);Vo=p(Ge,"vale a pena também testar e ver se ela aparece no OBS; comigo funcionou de\n    primeira!"),Ge.forEach(u),Xo=m(t),Yo=d(t,"FIGURE",{});var $e=l(Yo);Zo=d($e,"A",{href:!0});var Ae=l(Zo);_o=d(Ae,"IMG",{src:!0,alt:!0}),Ae.forEach(u),$e.forEach(u),oe=m(t),ee=d(t,"P",{});var je=l(ee);se=p(je,"por hoje é só! se tiverem dicas ou sugestões pra melhorar esse texto, só me\n    cutucar nos comentários. abraços!"),je.forEach(u),t.forEach(u),this.h()},h(){N.src!==(U=w)&&f(N,"src",U),f(N,"alt","Logo do Streamlabs, do Linux e do OBS"),f(k,"href",w),f(X,"href","https://streamlabs.com"),f(_,"href","https://github.com/stream-labs/streamlabs-obs/"),f(ea,"href","https://obsproject.com/"),Aa.src!==(ja=q)&&f(Aa,"src",ja),f(Aa,"alt","Lugar do site onde achamos a URL da página de alertas"),f(Ga,"href",q),Ca.src!==(Fa=z)&&f(Ca,"src",Fa),f(Ca,"alt","obslinuxbrowser no Github"),f(Na,"href",z),f(Wa,"href","https://github.com/bazukas/"),f(Qa,"href","https://github.com/bazukas/obs-linuxbrowser/"),f(ao,"href","https://github.com/bazukas/obs-linuxbrowser/releases"),Io.src!==(Lo=G)&&f(Io,"src",Lo),f(Io,"alt","Onde clicar para adicionar o Input"),f(jo,"href",G),Wo.src!==(Ko=$)&&f(Wo,"src",Ko),f(Wo,"alt","Tela de config do Linux Browser"),f(yo,"href",$),_o.src!==(ae=A)&&f(_o,"src",ae),f(_o,"alt","Teste dos alertas"),f(Zo,"href",A)},m(s,r){h(o,document.head,null),g(s,e,r),g(s,B,r),v(B,j),v(j,I),g(s,L,r),h(R,s,r),g(s,P,r),g(s,T,r),v(T,k),v(k,M),v(M,N),v(T,C),v(T,F),v(F,H),v(H,D),v(T,y),v(T,W),v(W,K),v(T,J),v(T,Q),v(Q,V),v(Q,X),v(X,Y),v(Q,Z),v(Q,_),v(_,aa),v(Q,oa),v(Q,ea),v(ea,sa),v(Q,ra),v(T,na),v(T,ta),v(ta,ia),v(ta,ca),v(ca,ua),v(ta,ma),v(T,da),v(T,la),v(la,pa),v(T,fa),v(T,ha),v(ha,ga),v(ha,va),v(va,ba),v(ha,Ea),v(ha,xa),v(xa,Ba),v(ha,Oa),v(ha,Sa),v(Sa,wa),v(ha,qa),v(T,za),v(T,Ga),v(Ga,$a),v($a,Aa),v(T,Ia),v(T,La),v(La,Ra),v(T,Pa),v(T,Ta),v(Ta,ka),v(T,Ma),v(T,Na),v(Na,Ua),v(Ua,Ca),v(T,Ha),v(T,Da),v(Da,ya),v(Da,Wa),v(Wa,Ka),v(Da,Ja),v(Da,Qa),v(Qa,Va),v(Da,Xa),v(T,Ya),v(T,Za),v(Za,_a),v(Za,ao),v(ao,oo),v(Za,eo),v(Za,so),v(so,ro),v(Za,no),v(T,to),v(T,io),v(io,co),v(T,uo),v(T,mo),v(mo,lo),v(lo,po),v(mo,fo),v(mo,ho),v(ho,go),v(go,vo),v(mo,bo),v(mo,Eo),v(Eo,xo),v(xo,Bo),v(T,Oo),v(T,So),v(So,wo),v(So,qo),v(qo,zo),v(So,Go),v(T,$o),v(T,Ao),v(Ao,jo),v(jo,Io),v(T,Ro),v(T,Po),v(Po,To),v(Po,ko),v(ko,Mo),v(Po,No),v(Po,Uo),v(Uo,Co),v(Po,Fo),v(T,Ho),v(T,Do),v(Do,yo),v(yo,Wo),v(T,Jo),v(T,Qo),v(Qo,Vo),v(T,Xo),v(T,Yo),v(Yo,Zo),v(Zo,_o),v(T,oe),v(T,ee),v(ee,se),a[2](T),re=!0},p(a,[o]){const e={};2&o&&(e.text=a[1]),R.$set(e)},i(a){re||(b(o.$$.fragment,a),b(R.$$.fragment,a),re=!0)},o(a){E(o.$$.fragment,a),E(R.$$.fragment,a),re=!1},d(s){x(o),s&&u(e),s&&u(B),s&&u(L),x(R,s),s&&u(P),s&&u(T),a[2](null)}}}function I(a,o,e){let s,r;return a.$$.update=()=>{1&a.$$.dirty&&e(1,r=s&&s.textContent)},[s,r,function(a){B[a?"unshift":"push"]((()=>{s=a,e(0,s)}))}]}export default class extends a{constructor(a){super(),o(this,a,I,j,e,{})}}

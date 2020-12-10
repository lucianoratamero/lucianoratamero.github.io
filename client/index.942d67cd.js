import{S as e,i as a,s as o,E as s,w as r,F as n,G as t,c as i,e as m,x as c,d,H as u,k as p,I as l,g as v,n as f}from"./client.ba4c128a.js";import{c as h,i as g,a as q,b as E,d as b}from"./4-registering-component.61f1b1f9.js";function x(e){let a,o,x,P,z,C,M,T,j,I,D,N,S,L,O,A,k,R,G,H,w,F,U,y,V,Z,B,K,J,Q,W,X,Y,$,_,ee,ae,oe,se,re,ne,te,ie,me,ce,de,ue,pe,le,ve,fe,he,ge,qe,Ee,be,xe,Pe,ze,Ce,Me,Te,je,Ie,De,Ne,Se,Le,Oe,Ae,ke,Re,Ge,He,we,Fe,Ue,ye,Ve,Ze,Be,Ke,Je,Qe,We,Xe,Ye,$e,_e,ea,aa,oa,sa,ra,na,ta,ia,ma,ca,da,ua,pa,la,va,fa,ha,ga,qa,Ea,ba,xa,Pa,za,Ca,Ma,Ta,ja,Ia,Da,Na,Sa,La,Oa,Aa,ka,Ra,Ga,Ha,wa,Fa,Ua,ya,Va,Za,Ba,Ka,Ja,Qa,Wa,Xa,Ya,$a,_a,eo,ao,oo,so,ro,no,to,io,mo,co,uo,po,lo,vo,fo,ho,go,qo,Eo,bo,xo,Po,zo,Co,Mo,To,jo,Io,Do,No,So,Lo,Oo,Ao,ko,Ro,Go,Ho,wo;return{c(){a=s("meta"),o=s("meta"),x=r(),P=s("h1"),z=s("mark"),C=n("Mantendo o estado global de uma maneira sã com rel-events"),M=r(),T=s("p"),j=n("2019-09-19"),I=r(),D=s("figure"),N=s("img"),L=r(),O=s("p"),A=s("em"),k=n("for native english speakers,\n    "),R=s("a"),G=n("here's\n      the translated post"),H=r(),w=s("p"),F=n("Manter uma aplicação react grande e complexa não é um trabalho pra amadores.\n  Não importa o que você escolher para lidar com a máquina de estados da\n  aplicação, é quase certo de que é algo difícil de aprender, como redux, ou\n  realmente complicado, como fazer uma camada de serviços na mão. Com o objetivo\n  de fazer com que novas pessoas possam entrar fácil nos projetos, a galera da\n  Labcodes decidiu que tava na hora de dar mais atenção e uma verdadeira solução\n  pra esse tipo de problema. Nossa resposta foi criar a biblioteca\n  "),U=s("a"),y=n("rel-events"),V=n("."),Z=r(),B=s("h2"),K=n("Pra que mais uma biblioteca para gerenciar estado?"),J=r(),Q=s("p"),W=s("a"),X=s("img"),$=r(),_=s("p"),ee=n("Sempre que eu penso em criar uma biblioteca nova, essa tirinha do xkcd vem me\n  assombrar. Acreditem, eu não quero ser o tipo de pessoa que faz tudo por conta\n  própria em vez de contribuir com algo que já existe, e esse é um dos problemas\n  com essa mentalidade de forkar tudo. No entanto, eu sempre quis resolver um\n  problema com o qual eu lido diariamente: usar uma biblioteca qualquer pra\n  separar lógica de negócio/domínio dos meus componentes react."),ae=r(),oe=s("p"),se=n("Mas no fim do dia, depois de pensar muito, acabo me rendendo e rodando o\n  clássico\n  "),re=s("code"),ne=n("npm install redux react-redux --save"),te=n(". Eu até compartilhei algumas\n  das ferramentas que eu uso com redux na nossa outra lib\n  "),ie=s("a"),me=s("code"),ce=n("react-redux-api-tools"),de=n("."),ue=r(),pe=s("p"),le=n("Não ache que eu odeio o redux; pelo contrário, eu amo. Ele cumpre sua função,\n  é ultra flexível, com poucos efeitos colaterais. Mas vamos ser sinceros: o\n  desconforto quando lemos\n  "),ve=s("code"),fe=n("mapStateToProps"),he=n("\n  pela primeira vez é\n  "),ge=s("strong"),qe=n("real"),Ee=n(". Demorei um bom tempo pra entender o que tava\n  acontecendo de verdade. E ainda tem actions, action creators, reducers,\n  dispatches e middlewares, e sagas, e async dispatches; o aprendizado nunca\n  acaba."),be=r(),xe=s("p"),Pe=n("Depois dos primeiros confusos meses, lidar com o redux fica mais fácil (como\n  quase tudo na vida), mas muito,\n  "),ze=s("strong"),Ce=n("muito"),Me=n("\n  mais verboso. Eu sempre pensei que o redux parecia uma biblioteca muito baixo\n  nível e que eu sempre sou obrigado a especificar, passo a passo, exatamente e\n  estritamente o que precisa ser feito. Zero abstração. E muita cópia e cola."),Te=r(),je=s("p"),Ie=n("Cheguei à conclusão de que seria ótimo ter todas as features que gosto na\n  minha configuração do redux - um fluxo para HTTP bem definido, menos\n  repetição, conexão semântica entre actions e reducers -, sem sacrificar nada.\n  Daí me deram a luz verde pra desenvolver internamente uma solução pra isso:\n  "),De=s("code"),Ne=n("rel-events"),Se=n("."),Le=r(),Oe=s("h2"),Ae=n("Legal, mas o que raios é "),ke=s("code"),Re=n("rel-events"),Ge=n("?"),He=r(),we=s("p"),Fe=s("code"),Ue=n("rel-events"),ye=n("\n  é uma biblioteca de eventos para react (React Events Library, por isso rel\n  ;]). Ela leva o conceito de eventos, que já existe no redux, pra um nível mais\n  alto de abstração. É uma camada fina por cima do redux que permite que você\n  pare de pensar em actions, reducers, stores e middlewares, pra que você possa\n  focar no que precisa ser feito, que é executar lógica de negócio de forma\n  reativa quando eventos acontecem."),Ve=r(),Ze=s("p"),Be=n("Pra isso, vou propor que a gente imagine um cenário bem comum: precisamos\n  fazer com que um usuário faça login na nossa aplicação."),Ke=r(),Je=s("p"),Qe=n("Nós poderíamos fazer todo o fluxo de requisições dentro dos próprios\n  componentes, mas\n  "),We=s("a"),Xe=n("como\n    dissemos no nosso outro post"),Ye=n(", nós não exatamente recomendamos esse\n  caminho - sempre termina com código macarronado. Nós poderíamos usar redux,\n  mas aí nossos devs juniors precisariam antes passar pela barreira do\n  "),$e=s("code"),_e=n("mapStateToProps"),ea=n(", e às vezes nós não temos tempo de falar sobre\n  absolutamente tudo de redux antes de entregar nossos projetos. Nós poderíamos\n  usar sagas, mas aí o redux volta pra nos atazanar em dobro."),aa=r(),oa=s("p"),sa=n("Então, vamos por uns minutos esquecer de actions e reducers e imaginemos um\n  objeto chamado LoginEvent. Sempre que executamos algo sobre esse objeto\n  passando email e senha, coisas acontecem e os dados corretos (de sucesso ou\n  falha do login) são passados pros componentes. Imagine que você não precise\n  saber nada sobre esse objeto, apenas seu nome. Sem reducers, sem actions, sem\n  "),ra=s("code"),na=n("connect"),ta=n("\n  ou\n  "),ia=s("code"),ma=n("mapStateToProps"),ca=n(". Seria algo mais ou menos assim:"),da=r(),ua=s("figure"),pa=s("img"),va=r(),fa=s("p"),ha=n("Legal, mas onde colocaríamos todo seu comportamento? Onde tá o código que faz\n  a requisição? Como lidar com casos de erro? Digamos que, além do objeto de\n  evento, nós tenhamos algo que gerencia todo o fluxo do evento, que chamaríamos\n  de Event Manager:"),ga=r(),qa=s("figure"),Ea=s("img"),xa=r(),Pa=s("p"),za=n("Melhor. Mas como esse manager tá implementado? Porque, se a gente precisa\n  lidar com o fluxo inteiro dentro dele, ele precisa saber de muita coisa: como\n  fazer a requisição, por exemplo, ou o que fazer com o estado global quando a\n  requisição tiver sucesso ou falha. Ah, e seria bom ter um estado intermediário\n  quando a requisição começa, porque a gente ama spinners de loading! Eita,\n  esqueci que eu preciso de um estado inicial pra esse evento também, pra gente\n  ter dados antes mesmo da requisição. Calma, calma, vamo lá:"),Ca=r(),Ma=s("figure"),Ta=s("img"),Ia=r(),Da=s("p"),Na=n("É mais ou menos isso que a gente precisa, né? Mas então, como que a gente\n  faria pra registrar quais Componentes que poderiam disparar esse Evento? Como\n  que o Componente pegaria os dados desse evento? Tamo quase lá:"),Sa=r(),La=s("figure"),Oa=s("img"),ka=r(),Ra=s("p"),Ga=n("E essa é exatamente a API atual para um Evento HTTP (HTTPEvent) da lib\n  "),Ha=s("code"),wa=n("rel-events"),Fa=n(". Nada de actions nem reducers, nada de acoplar as\n  camadas de domínio com a de componentes, nada. Claro, a gente precisaria antes\n  configurar como nossa lib se encaixa com o redux, mas geralmente é uma\n  configuração de uma vez só, e muito bem documentada\n  "),Ua=s("a"),ya=n("na nossa\n    documentação (ainda só em inglês, com português em breve"),Va=n(")."),Za=r(),Ba=s("h2"),Ka=n("Isso parece... bom! Mas e as funcionalidades? Eu quero features!"),Ja=r(),Qa=s("p"),Wa=n("Na nossa atual versão beta (0.1.3, de Setembro de 2019), você pode:"),Xa=r(),Ya=s("ul"),$a=s("li"),_a=n("usar um Evento (Event) básico (pras horas em que você não precisa fazer\n    requisições);"),eo=r(),ao=s("li"),oo=n("encadear um Event/HTTPEvent em outro (útil pra quando você quer buscar mais\n    dados depois que um evento teve sucesso);"),so=r(),ro=s("li"),no=n("ter múltiplos Events registrados para um mesmo Componente (porque você\n    provavelmente vai ter um Componente que precisa ler dados de vários\n    lugares);"),to=r(),io=s("li"),mo=n("executar código depois das mudanças de estado de um Evento que foi disparado\n    (usando\n    "),co=s("code"),uo=n("afterDispatch"),po=n(");"),lo=r(),vo=s("li"),fo=n("executar código depois das mudanças de estado de uma requisição que teve\n    sucesso (usando\n    "),ho=s("code"),go=n("afterSuccess"),qo=n(");"),Eo=r(),bo=s("li"),xo=n("executar código depois das mudanças de estado de uma requisição que falhou\n    (usando\n    "),Po=s("code"),zo=n("afterFailure"),Co=n(");"),Mo=r(),To=s("li"),jo=n("avaliar se um evento deve ser disparado ou não (com o método\n    "),Io=s("code"),Do=n("shouldDispatch"),No=n("\n    do EventManager)."),So=r(),Lo=s("p"),Oo=n("E muito mais! Tudo isso sem a carga cognitiva, sem as constantes aleatórias,\n  sem os nomes de store manuais e toda a má experiência de desenvolvimento do\n  redux. E a melhor parte: sem uma grande curva de aprendizado. Esse post tem\n  basicamente tudo que você precisa saber pra usar nossa biblioteca no\n  dia-a-dia. Mesmo. Eu sei, porque tô usando!"),Ao=r(),ko=s("p"),Ro=n("Então se você gostou,\n  "),Go=s("a"),Ho=n("dá uma olhada no nosso\n    repositório no github"),wo=n("\n  pra começar a usar e comparilhe o amor! Valeu pela atenção, e eu vejo vocês na\n  próxima!"),this.h()},l(e){const s=t('[data-svelte="svelte-nu5ue2"]',document.head);a=i(s,"META",{name:!0,content:!0}),o=i(s,"META",{name:!0,content:!0}),s.forEach(m),x=c(e),P=i(e,"H1",{});var r=d(P);z=i(r,"MARK",{});var n=d(z);C=u(n,"Mantendo o estado global de uma maneira sã com rel-events"),n.forEach(m),r.forEach(m),M=c(e),T=i(e,"P",{class:!0});var p=d(T);j=u(p,"2019-09-19"),p.forEach(m),I=c(e),D=i(e,"FIGURE",{});var l=d(D);N=i(l,"IMG",{src:!0,alt:!0}),l.forEach(m),L=c(e),O=i(e,"P",{});var v=d(O);A=i(v,"EM",{});var f=d(A);k=u(f,"for native english speakers,\n    "),R=i(f,"A",{href:!0});var h=d(R);G=u(h,"here's\n      the translated post"),h.forEach(m),f.forEach(m),v.forEach(m),H=c(e),w=i(e,"P",{});var g=d(w);F=u(g,"Manter uma aplicação react grande e complexa não é um trabalho pra amadores.\n  Não importa o que você escolher para lidar com a máquina de estados da\n  aplicação, é quase certo de que é algo difícil de aprender, como redux, ou\n  realmente complicado, como fazer uma camada de serviços na mão. Com o objetivo\n  de fazer com que novas pessoas possam entrar fácil nos projetos, a galera da\n  Labcodes decidiu que tava na hora de dar mais atenção e uma verdadeira solução\n  pra esse tipo de problema. Nossa resposta foi criar a biblioteca\n  "),U=i(g,"A",{href:!0});var q=d(U);y=u(q,"rel-events"),q.forEach(m),V=u(g,"."),g.forEach(m),Z=c(e),B=i(e,"H2",{});var E=d(B);K=u(E,"Pra que mais uma biblioteca para gerenciar estado?"),E.forEach(m),J=c(e),Q=i(e,"P",{});var b=d(Q);W=i(b,"A",{href:!0});var S=d(W);X=i(S,"IMG",{src:!0,alt:!0}),S.forEach(m),b.forEach(m),$=c(e),_=i(e,"P",{});var Y=d(_);ee=u(Y,"Sempre que eu penso em criar uma biblioteca nova, essa tirinha do xkcd vem me\n  assombrar. Acreditem, eu não quero ser o tipo de pessoa que faz tudo por conta\n  própria em vez de contribuir com algo que já existe, e esse é um dos problemas\n  com essa mentalidade de forkar tudo. No entanto, eu sempre quis resolver um\n  problema com o qual eu lido diariamente: usar uma biblioteca qualquer pra\n  separar lógica de negócio/domínio dos meus componentes react."),Y.forEach(m),ae=c(e),oe=i(e,"P",{});var la=d(oe);se=u(la,"Mas no fim do dia, depois de pensar muito, acabo me rendendo e rodando o\n  clássico\n  "),re=i(la,"CODE",{});var ba=d(re);ne=u(ba,"npm install redux react-redux --save"),ba.forEach(m),te=u(la,". Eu até compartilhei algumas\n  das ferramentas que eu uso com redux na nossa outra lib\n  "),ie=i(la,"A",{href:!0});var ja=d(ie);me=i(ja,"CODE",{});var Aa=d(me);ce=u(Aa,"react-redux-api-tools"),Aa.forEach(m),ja.forEach(m),de=u(la,"."),la.forEach(m),ue=c(e),pe=i(e,"P",{});var Fo=d(pe);le=u(Fo,"Não ache que eu odeio o redux; pelo contrário, eu amo. Ele cumpre sua função,\n  é ultra flexível, com poucos efeitos colaterais. Mas vamos ser sinceros: o\n  desconforto quando lemos\n  "),ve=i(Fo,"CODE",{});var Uo=d(ve);fe=u(Uo,"mapStateToProps"),Uo.forEach(m),he=u(Fo,"\n  pela primeira vez é\n  "),ge=i(Fo,"STRONG",{});var yo=d(ge);qe=u(yo,"real"),yo.forEach(m),Ee=u(Fo,". Demorei um bom tempo pra entender o que tava\n  acontecendo de verdade. E ainda tem actions, action creators, reducers,\n  dispatches e middlewares, e sagas, e async dispatches; o aprendizado nunca\n  acaba."),Fo.forEach(m),be=c(e),xe=i(e,"P",{});var Vo=d(xe);Pe=u(Vo,"Depois dos primeiros confusos meses, lidar com o redux fica mais fácil (como\n  quase tudo na vida), mas muito,\n  "),ze=i(Vo,"STRONG",{});var Zo=d(ze);Ce=u(Zo,"muito"),Zo.forEach(m),Me=u(Vo,"\n  mais verboso. Eu sempre pensei que o redux parecia uma biblioteca muito baixo\n  nível e que eu sempre sou obrigado a especificar, passo a passo, exatamente e\n  estritamente o que precisa ser feito. Zero abstração. E muita cópia e cola."),Vo.forEach(m),Te=c(e),je=i(e,"P",{});var Bo=d(je);Ie=u(Bo,"Cheguei à conclusão de que seria ótimo ter todas as features que gosto na\n  minha configuração do redux - um fluxo para HTTP bem definido, menos\n  repetição, conexão semântica entre actions e reducers -, sem sacrificar nada.\n  Daí me deram a luz verde pra desenvolver internamente uma solução pra isso:\n  "),De=i(Bo,"CODE",{});var Ko=d(De);Ne=u(Ko,"rel-events"),Ko.forEach(m),Se=u(Bo,"."),Bo.forEach(m),Le=c(e),Oe=i(e,"H2",{});var Jo=d(Oe);Ae=u(Jo,"Legal, mas o que raios é "),ke=i(Jo,"CODE",{});var Qo=d(ke);Re=u(Qo,"rel-events"),Qo.forEach(m),Ge=u(Jo,"?"),Jo.forEach(m),He=c(e),we=i(e,"P",{});var Wo=d(we);Fe=i(Wo,"CODE",{});var Xo=d(Fe);Ue=u(Xo,"rel-events"),Xo.forEach(m),ye=u(Wo,"\n  é uma biblioteca de eventos para react (React Events Library, por isso rel\n  ;]). Ela leva o conceito de eventos, que já existe no redux, pra um nível mais\n  alto de abstração. É uma camada fina por cima do redux que permite que você\n  pare de pensar em actions, reducers, stores e middlewares, pra que você possa\n  focar no que precisa ser feito, que é executar lógica de negócio de forma\n  reativa quando eventos acontecem."),Wo.forEach(m),Ve=c(e),Ze=i(e,"P",{});var Yo=d(Ze);Be=u(Yo,"Pra isso, vou propor que a gente imagine um cenário bem comum: precisamos\n  fazer com que um usuário faça login na nossa aplicação."),Yo.forEach(m),Ke=c(e),Je=i(e,"P",{});var $o=d(Je);Qe=u($o,"Nós poderíamos fazer todo o fluxo de requisições dentro dos próprios\n  componentes, mas\n  "),We=i($o,"A",{href:!0});var _o=d(We);Xe=u(_o,"como\n    dissemos no nosso outro post"),_o.forEach(m),Ye=u($o,", nós não exatamente recomendamos esse\n  caminho - sempre termina com código macarronado. Nós poderíamos usar redux,\n  mas aí nossos devs juniors precisariam antes passar pela barreira do\n  "),$e=i($o,"CODE",{});var es=d($e);_e=u(es,"mapStateToProps"),es.forEach(m),ea=u($o,", e às vezes nós não temos tempo de falar sobre\n  absolutamente tudo de redux antes de entregar nossos projetos. Nós poderíamos\n  usar sagas, mas aí o redux volta pra nos atazanar em dobro."),$o.forEach(m),aa=c(e),oa=i(e,"P",{});var as=d(oa);sa=u(as,"Então, vamos por uns minutos esquecer de actions e reducers e imaginemos um\n  objeto chamado LoginEvent. Sempre que executamos algo sobre esse objeto\n  passando email e senha, coisas acontecem e os dados corretos (de sucesso ou\n  falha do login) são passados pros componentes. Imagine que você não precise\n  saber nada sobre esse objeto, apenas seu nome. Sem reducers, sem actions, sem\n  "),ra=i(as,"CODE",{});var os=d(ra);na=u(os,"connect"),os.forEach(m),ta=u(as,"\n  ou\n  "),ia=i(as,"CODE",{});var ss=d(ia);ma=u(ss,"mapStateToProps"),ss.forEach(m),ca=u(as,". Seria algo mais ou menos assim:"),as.forEach(m),da=c(e),ua=i(e,"FIGURE",{});var rs=d(ua);pa=i(rs,"IMG",{src:!0,alt:!0}),rs.forEach(m),va=c(e),fa=i(e,"P",{});var ns=d(fa);ha=u(ns,"Legal, mas onde colocaríamos todo seu comportamento? Onde tá o código que faz\n  a requisição? Como lidar com casos de erro? Digamos que, além do objeto de\n  evento, nós tenhamos algo que gerencia todo o fluxo do evento, que chamaríamos\n  de Event Manager:"),ns.forEach(m),ga=c(e),qa=i(e,"FIGURE",{});var ts=d(qa);Ea=i(ts,"IMG",{src:!0,alt:!0}),ts.forEach(m),xa=c(e),Pa=i(e,"P",{});var is=d(Pa);za=u(is,"Melhor. Mas como esse manager tá implementado? Porque, se a gente precisa\n  lidar com o fluxo inteiro dentro dele, ele precisa saber de muita coisa: como\n  fazer a requisição, por exemplo, ou o que fazer com o estado global quando a\n  requisição tiver sucesso ou falha. Ah, e seria bom ter um estado intermediário\n  quando a requisição começa, porque a gente ama spinners de loading! Eita,\n  esqueci que eu preciso de um estado inicial pra esse evento também, pra gente\n  ter dados antes mesmo da requisição. Calma, calma, vamo lá:"),is.forEach(m),Ca=c(e),Ma=i(e,"FIGURE",{});var ms=d(Ma);Ta=i(ms,"IMG",{src:!0,alt:!0}),ms.forEach(m),Ia=c(e),Da=i(e,"P",{});var cs=d(Da);Na=u(cs,"É mais ou menos isso que a gente precisa, né? Mas então, como que a gente\n  faria pra registrar quais Componentes que poderiam disparar esse Evento? Como\n  que o Componente pegaria os dados desse evento? Tamo quase lá:"),cs.forEach(m),Sa=c(e),La=i(e,"FIGURE",{});var ds=d(La);Oa=i(ds,"IMG",{src:!0,alt:!0}),ds.forEach(m),ka=c(e),Ra=i(e,"P",{});var us=d(Ra);Ga=u(us,"E essa é exatamente a API atual para um Evento HTTP (HTTPEvent) da lib\n  "),Ha=i(us,"CODE",{});var ps=d(Ha);wa=u(ps,"rel-events"),ps.forEach(m),Fa=u(us,". Nada de actions nem reducers, nada de acoplar as\n  camadas de domínio com a de componentes, nada. Claro, a gente precisaria antes\n  configurar como nossa lib se encaixa com o redux, mas geralmente é uma\n  configuração de uma vez só, e muito bem documentada\n  "),Ua=i(us,"A",{href:!0});var ls=d(Ua);ya=u(ls,"na nossa\n    documentação (ainda só em inglês, com português em breve"),ls.forEach(m),Va=u(us,")."),us.forEach(m),Za=c(e),Ba=i(e,"H2",{});var vs=d(Ba);Ka=u(vs,"Isso parece... bom! Mas e as funcionalidades? Eu quero features!"),vs.forEach(m),Ja=c(e),Qa=i(e,"P",{});var fs=d(Qa);Wa=u(fs,"Na nossa atual versão beta (0.1.3, de Setembro de 2019), você pode:"),fs.forEach(m),Xa=c(e),Ya=i(e,"UL",{});var hs=d(Ya);$a=i(hs,"LI",{});var gs=d($a);_a=u(gs,"usar um Evento (Event) básico (pras horas em que você não precisa fazer\n    requisições);"),gs.forEach(m),eo=c(hs),ao=i(hs,"LI",{});var qs=d(ao);oo=u(qs,"encadear um Event/HTTPEvent em outro (útil pra quando você quer buscar mais\n    dados depois que um evento teve sucesso);"),qs.forEach(m),so=c(hs),ro=i(hs,"LI",{});var Es=d(ro);no=u(Es,"ter múltiplos Events registrados para um mesmo Componente (porque você\n    provavelmente vai ter um Componente que precisa ler dados de vários\n    lugares);"),Es.forEach(m),to=c(hs),io=i(hs,"LI",{});var bs=d(io);mo=u(bs,"executar código depois das mudanças de estado de um Evento que foi disparado\n    (usando\n    "),co=i(bs,"CODE",{});var xs=d(co);uo=u(xs,"afterDispatch"),xs.forEach(m),po=u(bs,");"),bs.forEach(m),lo=c(hs),vo=i(hs,"LI",{});var Ps=d(vo);fo=u(Ps,"executar código depois das mudanças de estado de uma requisição que teve\n    sucesso (usando\n    "),ho=i(Ps,"CODE",{});var zs=d(ho);go=u(zs,"afterSuccess"),zs.forEach(m),qo=u(Ps,");"),Ps.forEach(m),Eo=c(hs),bo=i(hs,"LI",{});var Cs=d(bo);xo=u(Cs,"executar código depois das mudanças de estado de uma requisição que falhou\n    (usando\n    "),Po=i(Cs,"CODE",{});var Ms=d(Po);zo=u(Ms,"afterFailure"),Ms.forEach(m),Co=u(Cs,");"),Cs.forEach(m),Mo=c(hs),To=i(hs,"LI",{});var Ts=d(To);jo=u(Ts,"avaliar se um evento deve ser disparado ou não (com o método\n    "),Io=i(Ts,"CODE",{});var js=d(Io);Do=u(js,"shouldDispatch"),js.forEach(m),No=u(Ts,"\n    do EventManager)."),Ts.forEach(m),hs.forEach(m),So=c(e),Lo=i(e,"P",{});var Is=d(Lo);Oo=u(Is,"E muito mais! Tudo isso sem a carga cognitiva, sem as constantes aleatórias,\n  sem os nomes de store manuais e toda a má experiência de desenvolvimento do\n  redux. E a melhor parte: sem uma grande curva de aprendizado. Esse post tem\n  basicamente tudo que você precisa saber pra usar nossa biblioteca no\n  dia-a-dia. Mesmo. Eu sei, porque tô usando!"),Is.forEach(m),Ao=c(e),ko=i(e,"P",{});var Ds=d(ko);Ro=u(Ds,"Então se você gostou,\n  "),Go=i(Ds,"A",{href:!0});var Ns=d(Go);Ho=u(Ns,"dá uma olhada no nosso\n    repositório no github"),Ns.forEach(m),wo=u(Ds,"\n  pra começar a usar e comparilhe o amor! Valeu pela atenção, e eu vejo vocês na\n  próxima!"),Ds.forEach(m),this.h()},h(){document.title="\n    Mantendo o estado global de uma maneira sã com rel-events -\n    luciano@ratamero.com\n  ",p(a,"name","description"),p(a,"content","Nesse post, discutiremos como usar a rel-events para lidar com o estado global de sua app React de uma maneira mais fácil e sã :]"),p(o,"name","keywords"),p(o,"content","Luciano Ratamero, rel-events, react, redux, grandes projetos, arquitetura, planejamento, frontend, javascript, frameworks"),p(T,"class","meta"),N.src!==(S=h)&&p(N,"src",S),p(N,"alt","Ilustração com as logos do React e do Redux"),p(R,"href","/en/keeping-global-state-management-sane-with-rel-events/"),p(U,"href","https://github.com/labcodes/rel-events"),X.src!==(Y="https://imgs.xkcd.com/comics/standards.png")&&p(X,"src","https://imgs.xkcd.com/comics/standards.png"),p(X,"alt","xkcd tá sempre certo"),p(W,"href","https://xkcd.com/927/"),p(ie,"href","https://github.com/labcodes/react-redux-api-tools/"),p(We,"href","https://labcodes.com.br/blog/pt/mantendo-o-estado-global-de-uma-maneira-sa-com-rel-events.html"),pa.src!==(la=g)&&p(pa,"src",la),p(pa,"alt","Evento Imaginário"),Ea.src!==(ba=q)&&p(Ea,"src",ba),p(Ea,"alt","Basic rel-events HTTPEvent"),Ta.src!==(ja=E)&&p(Ta,"src",ja),p(Ta,"alt","LoginEventManager"),Oa.src!==(Aa=b)&&p(Oa,"src",Aa),p(Oa,"alt","Registering the component"),p(Ua,"href","https://github.com/labcodes/rel-events/tree/master/docs"),p(Go,"href","https://github.com/labcodes/rel-events")},m(e,s){l(document.head,a),l(document.head,o),v(e,x,s),v(e,P,s),l(P,z),l(z,C),v(e,M,s),v(e,T,s),l(T,j),v(e,I,s),v(e,D,s),l(D,N),v(e,L,s),v(e,O,s),l(O,A),l(A,k),l(A,R),l(R,G),v(e,H,s),v(e,w,s),l(w,F),l(w,U),l(U,y),l(w,V),v(e,Z,s),v(e,B,s),l(B,K),v(e,J,s),v(e,Q,s),l(Q,W),l(W,X),v(e,$,s),v(e,_,s),l(_,ee),v(e,ae,s),v(e,oe,s),l(oe,se),l(oe,re),l(re,ne),l(oe,te),l(oe,ie),l(ie,me),l(me,ce),l(oe,de),v(e,ue,s),v(e,pe,s),l(pe,le),l(pe,ve),l(ve,fe),l(pe,he),l(pe,ge),l(ge,qe),l(pe,Ee),v(e,be,s),v(e,xe,s),l(xe,Pe),l(xe,ze),l(ze,Ce),l(xe,Me),v(e,Te,s),v(e,je,s),l(je,Ie),l(je,De),l(De,Ne),l(je,Se),v(e,Le,s),v(e,Oe,s),l(Oe,Ae),l(Oe,ke),l(ke,Re),l(Oe,Ge),v(e,He,s),v(e,we,s),l(we,Fe),l(Fe,Ue),l(we,ye),v(e,Ve,s),v(e,Ze,s),l(Ze,Be),v(e,Ke,s),v(e,Je,s),l(Je,Qe),l(Je,We),l(We,Xe),l(Je,Ye),l(Je,$e),l($e,_e),l(Je,ea),v(e,aa,s),v(e,oa,s),l(oa,sa),l(oa,ra),l(ra,na),l(oa,ta),l(oa,ia),l(ia,ma),l(oa,ca),v(e,da,s),v(e,ua,s),l(ua,pa),v(e,va,s),v(e,fa,s),l(fa,ha),v(e,ga,s),v(e,qa,s),l(qa,Ea),v(e,xa,s),v(e,Pa,s),l(Pa,za),v(e,Ca,s),v(e,Ma,s),l(Ma,Ta),v(e,Ia,s),v(e,Da,s),l(Da,Na),v(e,Sa,s),v(e,La,s),l(La,Oa),v(e,ka,s),v(e,Ra,s),l(Ra,Ga),l(Ra,Ha),l(Ha,wa),l(Ra,Fa),l(Ra,Ua),l(Ua,ya),l(Ra,Va),v(e,Za,s),v(e,Ba,s),l(Ba,Ka),v(e,Ja,s),v(e,Qa,s),l(Qa,Wa),v(e,Xa,s),v(e,Ya,s),l(Ya,$a),l($a,_a),l(Ya,eo),l(Ya,ao),l(ao,oo),l(Ya,so),l(Ya,ro),l(ro,no),l(Ya,to),l(Ya,io),l(io,mo),l(io,co),l(co,uo),l(io,po),l(Ya,lo),l(Ya,vo),l(vo,fo),l(vo,ho),l(ho,go),l(vo,qo),l(Ya,Eo),l(Ya,bo),l(bo,xo),l(bo,Po),l(Po,zo),l(bo,Co),l(Ya,Mo),l(Ya,To),l(To,jo),l(To,Io),l(Io,Do),l(To,No),v(e,So,s),v(e,Lo,s),l(Lo,Oo),v(e,Ao,s),v(e,ko,s),l(ko,Ro),l(ko,Go),l(Go,Ho),l(ko,wo)},p:f,i:f,o:f,d(e){m(a),m(o),e&&m(x),e&&m(P),e&&m(M),e&&m(T),e&&m(I),e&&m(D),e&&m(L),e&&m(O),e&&m(H),e&&m(w),e&&m(Z),e&&m(B),e&&m(J),e&&m(Q),e&&m($),e&&m(_),e&&m(ae),e&&m(oe),e&&m(ue),e&&m(pe),e&&m(be),e&&m(xe),e&&m(Te),e&&m(je),e&&m(Le),e&&m(Oe),e&&m(He),e&&m(we),e&&m(Ve),e&&m(Ze),e&&m(Ke),e&&m(Je),e&&m(aa),e&&m(oa),e&&m(da),e&&m(ua),e&&m(va),e&&m(fa),e&&m(ga),e&&m(qa),e&&m(xa),e&&m(Pa),e&&m(Ca),e&&m(Ma),e&&m(Ia),e&&m(Da),e&&m(Sa),e&&m(La),e&&m(ka),e&&m(Ra),e&&m(Za),e&&m(Ba),e&&m(Ja),e&&m(Qa),e&&m(Xa),e&&m(Ya),e&&m(So),e&&m(Lo),e&&m(Ao),e&&m(ko)}}}export default class extends e{constructor(e){super(),a(this,e,null,x,o,{})}}

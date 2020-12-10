import{S as e,i as a,s as o,E as s,w as r,F as n,G as m,c as i,e as t,x as d,d as u,H as c,k as p,I as l,g as f,n as v}from"./client.ba4c128a.js";function g(e){let a,o,g,b,h,q,j,z,E,k,x,P,O,R,S,T,y,G,N,w,H,L,M,A,Q,I,D,J,U,V,W,X,Y,$,_,B,C,F,K,Z,ee,ae,oe,se,re,ne,me,ie,te,de,ue,ce,pe,le,fe,ve,ge,be,he,qe,je,ze,Ee,ke,xe,Pe,Oe,Re,Se,Te,ye,Ge,Ne,we,He,Le,Me,Ae,Qe,Ie,De,Je,Ue,Ve,We,Xe,Ye,$e,_e,Be,Ce,Fe,Ke,Ze,ea,aa,oa,sa,ra,na,ma,ia,ta,da,ua,ca,pa,la,fa,va,ga,ba,ha,qa,ja,za,Ea,ka,xa,Pa,Oa,Ra,Sa,Ta,ya,Ga,Na,wa,Ha,La,Ma,Aa,Qa,Ia,Da,Ja,Ua,Va,Wa,Xa,Ya,$a,_a,Ba,Ca,Fa,Ka,Za,eo,ao,oo,so,ro,no,mo,io,to,uo,co,po,lo,fo,vo,go,bo,ho,qo,jo,zo,Eo,ko,xo,Po,Oo,Ro,So,To,yo,Go,No,wo,Ho,Lo,Mo,Ao,Qo,Io,Do,Jo,Uo,Vo,Wo,Xo,Yo,$o,_o,Bo,Co,Fo,Ko,Zo,es,as,os,ss,rs,ns,ms,is,ts,ds,us,cs,ps,ls,fs,vs,gs,bs,hs,qs,js,zs,Es,ks,xs,Ps,Os,Rs,Ss,Ts,ys,Gs,Ns,ws,Hs,Ls,Ms,As,Qs,Is,Ds,Js,Us,Vs,Ws,Xs,Ys,$s,_s,Bs,Cs,Fs,Ks,Zs,er,ar,or,sr,rr,nr,mr,ir,tr,dr;return{c(){a=s("meta"),o=s("meta"),g=r(),b=s("h1"),h=s("mark"),q=n("O estado atual do desenvolvimento frontend"),j=r(),z=s("p"),E=n("2016-10-27"),k=r(),x=s("p"),P=s("small"),O=s("em"),R=n("ou\n      "),S=s("strong"),T=n("parem de usar javascript pra tudo, caceta"),y=n("."),G=s("br"),N=n("a\n  web definitivamente mudou desde quando eu era criança. tudo era bem mais\n  engessado, muito por conta da imaturidade, da falta de ferramentas e de\n  processamento. sou, como a grande maioria que ainda faz a web, de uma época\n  anterior ao google, anterior ao git. uma época de frames, gifs brilhantes,\n  comic sans EVERYWHERE. a época do flash. e digo que não sinto a\n  "),w=s("strong"),H=n("menor"),L=n("\n  falta de grande parte disso. mas sinto que tá na hora de a gente ter uma\n  conversinha sobre o estado atual do desenvolvimento frontend."),M=r(),A=s("p"),Q=n("o negócio é o seguinte, a mensagem é bem simples: fomos longe demais. demais.\n  tipo, muito. paramos de pensar no que é desenvolver no cliente, para o\n  cliente, e isso é tudo culpa do javascript."),I=r(),D=s("h3"),J=n("ei, ei, calma aí, se esse é um post JS hater, vou embora"),U=r(),V=s("p"),W=n("sossega aí, eu amo javascript. foi a linguagem que me permitiu sair da minha\n  formação (jornalismo) pra programação, e mesmo depois de tanto tempo\n  programando quase que exclusivamente com Python (que é lindo demais), eu sinto\n  falta e acabo sempre voltando ao javascript."),X=r(),Y=s("p"),$=n("o fato é que\n  "),_=s("strong"),B=n("o javascript evoluiu de uma forma impressionante"),C=n(". eu me\n  lembro do que era só usar jQuery num projeto, fazer tudo na mão, e vejo onde\n  chegamos: temos servidores rodando js, bancos de dados escritos em js, cara,\n  temos sistemas operacionais inteiros baseados em html/javascript. acho isso\n  lindo demais."),F=r(),K=s("p"),Z=n("e é ótimo ver que a comunidade tá cada dia mais ativa, mais madura, mais\n  preparada pra transformar uma linguagem de navegadores em uma verdadeira\n  ferramenta pra qualquer negócio. meu problema não é com a comunidade, ou com a\n  linguagem, ou com a evolução da web; meu problema é que, hoje, se usa\n  javascript pra\n  "),ee=s("strong"),ae=n("tudo"),oe=n("."),se=r(),re=s("h3"),ne=n("isso é porque nós podemos usar pra tudo! isso não é bom?"),me=r(),ie=s("p"),te=n("isso é ótimo.\n  "),de=s("strong"),ue=n("a possbilidade de podermos usar javascript pra tudo me encanta."),ce=n("\n  o problema não é a possbilidade, mas o fato de que\n  "),pe=s("em"),le=n("boa parte dos projetos hoje em dia são feitos puramente em js, ou com o\n    mínimo de outras ferramentas"),fe=n(". não consigo me lembrar da última vez em\n  que entrei em um projeto que tivesse menos de 50% do seu código de frontend\n  escrito com react ou angular."),ve=r(),ge=s("p"),be=n("vou explicar melhor sobre alguns dos problemas que vejo nesse tipo de\n  abordagem:"),he=r(),qe=s("ul"),je=s("li"),ze=n("curva de aprendizado;"),Ee=r(),ke=s("li"),xe=n("manutenção do projeto;"),Pe=r(),Oe=s("li"),Re=n("custo de carregamento e processamento."),Se=r(),Te=s("p"),ye=n("também vou discutir alguns prós de se usar js pra tudo e propor soluções\n  fáceis pra elas:"),Ge=r(),Ne=s("ul"),we=s("li"),He=n("não ter recarregamento da página, tanto do ponto de vista visual quanto do\n    funcional;"),Le=r(),Me=s("li"),Ae=n("projetos desacoplados;"),Qe=r(),Ie=s("li"),De=n("código organizado;"),Je=r(),Ue=s("li"),Ve=n("performance."),We=r(),Xe=s("p"),Ye=n("sem mais delongas, vamos começar."),$e=r(),_e=s("h4"),Be=n("curva de aprendizado"),Ce=r(),Fe=s("p"),Ke=n("faz um mês em que peguei dois projetos em react pra fazer, e vou dizer que não\n  foi fácil pegar um ritmo decente. claro que ter tido bastante experiência com\n  js no passado me fez aprender relativamente rápido, mas\n  "),Ze=s("strong"),ea=n("se você precisa de um mês pra fazer uma página básica, tem alguma\n    coisa errada"),aa=n(". por mais simples que pareça, a máquina de estados do\n  react deixa bastante coisa implícita - e estamos falando somente de uma\n  biblioteca pra renderizar partes dinâmicas de html. quando junta com redux\n  então, a brincadeira fica mais complicada."),oa=r(),sa=s("p"),ra=n("vejo que faz mais de um mês de aprendizado e\n  "),na=s("strong"),ma=n("só agora eu tô entendendo como fazer um ajax direito"),ia=n(". não sei\n  se vocês lembram, mas, usando jQuery, é só, bem, chamar\n  "),ta=s("code"),da=n("$.ajax"),ua=n("\n  passando a url e meio que tá pronto. e a gente ainda não falou de webpack,\n  es2015, typescript, promises, observables... tanta coisa junta exige\n  conhecimento, empenho, um profissional dedicado, e isso nem sempre é bom."),ca=r(),pa=s("h4"),la=n("manutenção do projeto"),fa=r(),va=s("p"),ga=n("sei que sou sempre o cara chato que fala sobre manutenção, mas cada dia que\n  passa eu sinto que tô mais e mais certo sobre isso. hoje, estamos vendo o\n  problema que foi termos usado angular pra tudo. tá cada vez mais difícil achar\n  gente que saiba bastante de angular, porque estamos migrando pro react, pro\n  angular 2, pro vue, e precisamos cada vez mais de uma pessoa dedicada a esse\n  código legado.\n  "),ba=s("strong"),ha=n("código legado feito a menos de dois anos."),qa=r(),ja=s("p"),za=n("e isso vai continuar acontecendo enquanto nós focarmos em conhecimento de\n  frameworks/bibliotecas em vez de focarmos em aprender mais sobre o navegador,\n  sobre design e sobre backend. fazer um código legível, com menos restrições de\n  frameworks e com maior facilidade de testar faz com que o código seja mais\n  fácil de manter e mais próximo do que um backend seria capaz de fazer - o que\n  melhora em muito a facilidade de ter um projeto fácil de manter em longa data."),Ea=r(),ka=s("p"),xa=n("sobre alguns detalhes desse tipo de pensamento, dêem uma olhada no\n  "),Pa=s("a"),Oa=n("meu post sobre o uso da jQuery em grandes projetos"),Ra=n("."),Sa=r(),Ta=s("h4"),ya=n("custo de carregamento e processamento"),Ga=r(),Na=s("p"),wa=n("uma das grandes naturezas de fazer projetos somente com js é o fato de que,\n  bem,\n  "),Ha=s("strong"),La=n("o site todo é em js"),Ma=n(". isso significa que, na prática, temos 1\n  (hum) grande (gigantesco) arquivo js que é carregado assim que a página\n  carrega. e por mais que isso seja bom na hora que a pessoa tá navegando, isso\n  significa que não há cache e que cada micro alteração no código vai fazer com\n  que todos seus usuários baixem o troço todo de novo."),Aa=r(),Qa=s("p"),Ia=n("um exemplo: refiz meu site (do qual esse blog faz parte) faz pouco tempo. a\n  princípio, pensei em usar react ou algo do tipo, já que o github pages (no\n  qual esse site está hospedado) só aceita páginas estáticas. no entanto, assim\n  que eu fiz o setup do projeto, ainda sem nada implementado, e vi que, com o\n  que eu precisava, ia ter um arquivo js de mais de 800k (sim, sem\n  "),Da=s("strong"),Ja=n("nada"),Ua=n("\n  implementado). desisti. hoje, tenho as mesmas funcionalidades com somente\n  140k, com\n  "),Va=s("strong"),Wa=n("tudo"),Xa=n("\n  implementado, e features idênticas: roteamento com push state, animações bem\n  feitas, otimizações mil. e o melhor:\n  "),Ya=s("em"),$a=n("sem toda aquela doideira de compilar nada"),_a=n(". só tenho um minificador e\n  tá valendo."),Ba=r(),Ca=s("p"),Fa=n("além disso, há um custo de não fazermos a renderização do html no backend: o\n  de renderizar o html no cliente. pode parecer besteira, mas deixar pro cliente\n  renderizar dinamicamente as páginas em vez de renderizar no backend faz com\n  que você dependa do poder de processamento do cliente, o que pode piorar (e\n  muito) a experiência do usuário em casos específicos (ou se o código for mal\n  implementado). quem abriu a página mobile do facebook em um celular antigo\n  sabe do que eu tô falando: é\n  "),Ka=s("strong"),Za=n("impossível"),eo=n("\n  de usar."),ao=r(),oo=s("h3"),so=n("ah, Luciano, mas muitas vezes é necessário usar algo como o react pra ter um\n  número maior de features, além da performance do virtual DOM"),ro=r(),no=s("p"),mo=n("olha, é\n  "),io=s("em"),to=n("claro"),uo=n("\n  que há vantagens\n  "),co=s("em"),po=n("absurdas"),lo=n("\n  em usar algo do tipo. em alguns lugares é até necessário. então agora vou\n  falar um pouco mais sobre isso, ou seja, como ter uma aplicação equilibrada."),fo=r(),vo=s("h4"),go=n("não ter recarregamento de página é lindo, cara"),bo=r(),ho=s("p"),qo=n("sim, é lindo! sou super a favor de uma interface que seja transparente pro\n  usuário, ou seja,\n  "),jo=s("strong"),zo=n("que o usuário não perceba o meio, e sim a mensagem"),Eo=n(". mas, ó, o\n  conceito de AJAX não é novo, a implementação está longe de ser complexa, e o\n  que não falta é renderizador de templates em js. podemos - e digo mais,\n  "),ko=s("em"),xo=n("devemos"),Po=n("\n  - usar algo mais simples quando for possível."),Oo=r(),Ro=s("h5"),So=n("mas aí não tem fetch, não tem Promise, não tem..."),To=r(),yo=s("p"),Go=n("na boa, tem. se você\n  "),No=s("strong"),wo=n("realmente não puder viver sem"),Ho=n("\n  essas features, você pode. basta adicionar ao seu projeto um polyfill de\n  Promises, um polyfill de fetch, ou seja lá o que raios você acha que precisa\n  usar. ah, e só lembrando,\n  "),Lo=s("strong"),Mo=s("a"),Ao=n("até a jQuery já usa a interface de Promises"),Qo=n(",\n  abstraindo lindamente toda essa questão de compatibilidade de browsers."),Io=r(),Do=s("h4"),Jo=n("mas é bom ter projetos desacoplados entre front e back, não é?"),Uo=r(),Vo=s("p"),Wo=n("é mesmo? sei lá, até hoje eu só tive problema com o fato de não entender como\n  o backend ou o frontend funcionam. já trabalhei bastante com os dois lados da\n  moeda: em aplicações backend que servem apis rest e em aplicações frontend que\n  só consomem apis rest. em ambos os casos, tive ruídos de comunicação com a\n  outra equipe e, muitas vezes, não pude prosseguir a tarefa que tinha que\n  cumprir por algum problema de especificação."),Xo=r(),Yo=s("p"),$o=n("pra se ter um projeto de backend desacoplado do frontend de maneira saudável,\n  é\n  "),_o=s("strong"),Bo=n("extremamente"),Co=n("\n  necessário que\n  "),Fo=s("strong"),Ko=n("alguém"),Zo=n("\n  faça\n  "),es=s("strong"),as=n("bem"),os=n("\n  o trabalho de articulação; e isso é\n  "),ss=s("strong"),rs=n("muito"),ns=n("\n  raro. no entanto, se nós, como frontends, entendermos minimamente bem como o\n  backend funciona, teremos uma facilidade imensa de detectar erros de\n  especificação, resolver bugs de back que estejam impedindo o progresso de uma\n  tarefa de front e não precisaremos de uma interação e gerenciamento tão\n  fortes."),ms=r(),is=s("h5"),ts=n("Luciano, entendi, mas eu sei um bocado de backend. se você souber, acho que\n  não tem problema desacoplar, né?"),ds=r(),us=s("p"),cs=s("strong"),ps=n("o problema não é desacoplar os projetos ou não"),ls=n("; até porque\n  todo grande framework de backend tem suas formas de tornar o trabalho de front\n  mais desacoplado do de back."),fs=r(),vs=s("p"),gs=s("strong"),bs=n("o problema é incentivar que os fronts só saibam de front e os backs só\n    saibam de back."),hs=n("\n  criar feudos nos projetos é sempre (sim, sempre) um problema, porque pessoas\n  são falhas. elas erram, elas saem de férias, elas ficam doentes, elas tomam um\n  porre e não atendem o celular -\n  "),qs=s("strong"),js=n("elas têm direito a viver além do trabalho"),zs=n(". ao criarmos\n  feudos, impedimos a máquina do projeto de estar sempre funcionando, já que,\n  assim que uma peça quebrar, a máquina para, em vez de sempre termos peças que\n  se encaixem."),Es=r(),ks=s("h4"),xs=n("uma coisa você tem que concordar, que fazermos projetos js puros faz nosso\n  código ficar bem organizado"),Ps=r(),Os=s("p"),Rs=n("yep, concordo. mesmo que seja à força, ter o código bem organizado é sempre\n  importante pro projeto crescer e evoluir de uma forma sustentável. uma das\n  coisas que mais amo em Python, por exemplo, é o fato dele te forçar a escrever\n  um código mais legível e sempre te dar mais exemplos de como fazer um bom\n  código, já que os sintomas de um código ruim aparecem rapidinho."),Ss=r(),Ts=s("p"),ys=n("o mesmo não acontece com js, então os frameworks e bibliotecas tomaram pra si\n  o papel de obrigar um certo nível de organização do código - e isso é ótimo.\n  mas o que eles estão te obrigando a fazer, cara,\n  "),Gs=s("strong"),Ns=n("não deveria ser mais do que sua obrigação"),ws=n(". organizar o código\n  deveria ser parte do seu fluxo natural de desenvolvimento, então faça um favor\n  e pratique fazer códigos js bem organizados sem a necessidade de um\n  framework/biblioteca. o mundo agradece."),Hs=r(),Ls=s("h4"),Ms=n("ai, que ranzinza! vem cá, uma coisa que você não tem como negar: react (e\n  afins) performam melhor que jQuery"),As=r(),Qs=s("p"),Is=n("sim, sim. o advento do virtual DOM foi um grande possibilitador de aplicações\n  js fazerem o que fazem hoje. é muito difícil fazer um dashboard gigantesco ou\n  uma manipulação de gráficos performática sem algum tipo de\n  framework/biblioteca que faça a gerência de memória/performance."),Ds=r(),Js=s("p"),Us=s("strong"),Vs=n("então vamos usar react sim! vamos usar vue sim! até angular, o\n    desespero da minha alma, vamos usar!"),Ws=n("\n  mas ó, vamos combinar só um negócio: vamos usar\n  "),Xs=s("strong"),Ys=n("só quando necessário, com o mínimo de complexidade possivel?"),$s=n("\n  porque, novamente, alguém vai ter que manter essa budega, e manter uma página\n  é muito mais fácil do que manter uma aplicação inteira. precisa de lidar com\n  complexidade nessa página,\n  "),_s=s("strong"),Bs=n("use nessa página, e só nela"),Cs=n("."),Fs=r(),Ks=s("hr"),Zs=r(),er=s("p"),ar=n("pra terminar, meu último ponto é o seguinte: vamos começar a pensar mais o\n  futuro, sim?\n  "),or=s("strong"),sr=n("não sobre o que usaremos no futuro, mas sobre o que\n    "),rr=s("em"),nr=n("ainda vamos ter que usar"),mr=n(". ainda vamos precisar manter\n  aquele site em backbone ou knockout, ou ember. ainda vamos ter que manter\n  aquele site em react e redux (e rxjs, e webpack, e es6, tudo junto). mas com o\n  nosso aparente déficit de atenção, nós vamos acabar fazendo muita coisa e\n  abandonando ainda mais."),ir=r(),tr=s("p"),dr=n("então estudemos react sim. e elm. e vue. mas antes de começar aquele\n  projetinho novo, volta aqui, lê de novo e vê se o que você tá fazendo vai\n  valer a pena. se sim, manda ver, e como sempre, desejo sucesso pra todo mundo!\n  abraço, e até a próxima o/"),this.h()},l(e){const s=m('[data-svelte="svelte-8zkiy0"]',document.head);a=i(s,"META",{name:!0,content:!0}),o=i(s,"META",{name:!0,content:!0}),s.forEach(t),g=d(e),b=i(e,"H1",{});var r=u(b);h=i(r,"MARK",{});var n=u(h);q=c(n,"O estado atual do desenvolvimento frontend"),n.forEach(t),r.forEach(t),j=d(e),z=i(e,"P",{class:!0});var p=u(z);E=c(p,"2016-10-27"),p.forEach(t),k=d(e),x=i(e,"P",{});var l=u(x);P=i(l,"SMALL",{});var f=u(P);O=i(f,"EM",{});var v=u(O);R=c(v,"ou\n      "),S=i(v,"STRONG",{});var ur=u(S);T=c(ur,"parem de usar javascript pra tudo, caceta"),ur.forEach(t),y=c(v,"."),v.forEach(t),f.forEach(t),G=i(l,"BR",{}),N=c(l,"a\n  web definitivamente mudou desde quando eu era criança. tudo era bem mais\n  engessado, muito por conta da imaturidade, da falta de ferramentas e de\n  processamento. sou, como a grande maioria que ainda faz a web, de uma época\n  anterior ao google, anterior ao git. uma época de frames, gifs brilhantes,\n  comic sans EVERYWHERE. a época do flash. e digo que não sinto a\n  "),w=i(l,"STRONG",{});var cr=u(w);H=c(cr,"menor"),cr.forEach(t),L=c(l,"\n  falta de grande parte disso. mas sinto que tá na hora de a gente ter uma\n  conversinha sobre o estado atual do desenvolvimento frontend."),l.forEach(t),M=d(e),A=i(e,"P",{});var pr=u(A);Q=c(pr,"o negócio é o seguinte, a mensagem é bem simples: fomos longe demais. demais.\n  tipo, muito. paramos de pensar no que é desenvolver no cliente, para o\n  cliente, e isso é tudo culpa do javascript."),pr.forEach(t),I=d(e),D=i(e,"H3",{});var lr=u(D);J=c(lr,"ei, ei, calma aí, se esse é um post JS hater, vou embora"),lr.forEach(t),U=d(e),V=i(e,"P",{});var fr=u(V);W=c(fr,"sossega aí, eu amo javascript. foi a linguagem que me permitiu sair da minha\n  formação (jornalismo) pra programação, e mesmo depois de tanto tempo\n  programando quase que exclusivamente com Python (que é lindo demais), eu sinto\n  falta e acabo sempre voltando ao javascript."),fr.forEach(t),X=d(e),Y=i(e,"P",{});var vr=u(Y);$=c(vr,"o fato é que\n  "),_=i(vr,"STRONG",{});var gr=u(_);B=c(gr,"o javascript evoluiu de uma forma impressionante"),gr.forEach(t),C=c(vr,". eu me\n  lembro do que era só usar jQuery num projeto, fazer tudo na mão, e vejo onde\n  chegamos: temos servidores rodando js, bancos de dados escritos em js, cara,\n  temos sistemas operacionais inteiros baseados em html/javascript. acho isso\n  lindo demais."),vr.forEach(t),F=d(e),K=i(e,"P",{});var br=u(K);Z=c(br,"e é ótimo ver que a comunidade tá cada dia mais ativa, mais madura, mais\n  preparada pra transformar uma linguagem de navegadores em uma verdadeira\n  ferramenta pra qualquer negócio. meu problema não é com a comunidade, ou com a\n  linguagem, ou com a evolução da web; meu problema é que, hoje, se usa\n  javascript pra\n  "),ee=i(br,"STRONG",{});var hr=u(ee);ae=c(hr,"tudo"),hr.forEach(t),oe=c(br,"."),br.forEach(t),se=d(e),re=i(e,"H3",{});var qr=u(re);ne=c(qr,"isso é porque nós podemos usar pra tudo! isso não é bom?"),qr.forEach(t),me=d(e),ie=i(e,"P",{});var jr=u(ie);te=c(jr,"isso é ótimo.\n  "),de=i(jr,"STRONG",{});var zr=u(de);ue=c(zr,"a possbilidade de podermos usar javascript pra tudo me encanta."),zr.forEach(t),ce=c(jr,"\n  o problema não é a possbilidade, mas o fato de que\n  "),pe=i(jr,"EM",{});var Er=u(pe);le=c(Er,"boa parte dos projetos hoje em dia são feitos puramente em js, ou com o\n    mínimo de outras ferramentas"),Er.forEach(t),fe=c(jr,". não consigo me lembrar da última vez em\n  que entrei em um projeto que tivesse menos de 50% do seu código de frontend\n  escrito com react ou angular."),jr.forEach(t),ve=d(e),ge=i(e,"P",{});var kr=u(ge);be=c(kr,"vou explicar melhor sobre alguns dos problemas que vejo nesse tipo de\n  abordagem:"),kr.forEach(t),he=d(e),qe=i(e,"UL",{});var xr=u(qe);je=i(xr,"LI",{});var Pr=u(je);ze=c(Pr,"curva de aprendizado;"),Pr.forEach(t),Ee=d(xr),ke=i(xr,"LI",{});var Or=u(ke);xe=c(Or,"manutenção do projeto;"),Or.forEach(t),Pe=d(xr),Oe=i(xr,"LI",{});var Rr=u(Oe);Re=c(Rr,"custo de carregamento e processamento."),Rr.forEach(t),xr.forEach(t),Se=d(e),Te=i(e,"P",{});var Sr=u(Te);ye=c(Sr,"também vou discutir alguns prós de se usar js pra tudo e propor soluções\n  fáceis pra elas:"),Sr.forEach(t),Ge=d(e),Ne=i(e,"UL",{});var Tr=u(Ne);we=i(Tr,"LI",{});var yr=u(we);He=c(yr,"não ter recarregamento da página, tanto do ponto de vista visual quanto do\n    funcional;"),yr.forEach(t),Le=d(Tr),Me=i(Tr,"LI",{});var Gr=u(Me);Ae=c(Gr,"projetos desacoplados;"),Gr.forEach(t),Qe=d(Tr),Ie=i(Tr,"LI",{});var Nr=u(Ie);De=c(Nr,"código organizado;"),Nr.forEach(t),Je=d(Tr),Ue=i(Tr,"LI",{});var wr=u(Ue);Ve=c(wr,"performance."),wr.forEach(t),Tr.forEach(t),We=d(e),Xe=i(e,"P",{});var Hr=u(Xe);Ye=c(Hr,"sem mais delongas, vamos começar."),Hr.forEach(t),$e=d(e),_e=i(e,"H4",{});var Lr=u(_e);Be=c(Lr,"curva de aprendizado"),Lr.forEach(t),Ce=d(e),Fe=i(e,"P",{});var Mr=u(Fe);Ke=c(Mr,"faz um mês em que peguei dois projetos em react pra fazer, e vou dizer que não\n  foi fácil pegar um ritmo decente. claro que ter tido bastante experiência com\n  js no passado me fez aprender relativamente rápido, mas\n  "),Ze=i(Mr,"STRONG",{});var Ar=u(Ze);ea=c(Ar,"se você precisa de um mês pra fazer uma página básica, tem alguma\n    coisa errada"),Ar.forEach(t),aa=c(Mr,". por mais simples que pareça, a máquina de estados do\n  react deixa bastante coisa implícita - e estamos falando somente de uma\n  biblioteca pra renderizar partes dinâmicas de html. quando junta com redux\n  então, a brincadeira fica mais complicada."),Mr.forEach(t),oa=d(e),sa=i(e,"P",{});var Qr=u(sa);ra=c(Qr,"vejo que faz mais de um mês de aprendizado e\n  "),na=i(Qr,"STRONG",{});var Ir=u(na);ma=c(Ir,"só agora eu tô entendendo como fazer um ajax direito"),Ir.forEach(t),ia=c(Qr,". não sei\n  se vocês lembram, mas, usando jQuery, é só, bem, chamar\n  "),ta=i(Qr,"CODE",{});var Dr=u(ta);da=c(Dr,"$.ajax"),Dr.forEach(t),ua=c(Qr,"\n  passando a url e meio que tá pronto. e a gente ainda não falou de webpack,\n  es2015, typescript, promises, observables... tanta coisa junta exige\n  conhecimento, empenho, um profissional dedicado, e isso nem sempre é bom."),Qr.forEach(t),ca=d(e),pa=i(e,"H4",{});var Jr=u(pa);la=c(Jr,"manutenção do projeto"),Jr.forEach(t),fa=d(e),va=i(e,"P",{});var Ur=u(va);ga=c(Ur,"sei que sou sempre o cara chato que fala sobre manutenção, mas cada dia que\n  passa eu sinto que tô mais e mais certo sobre isso. hoje, estamos vendo o\n  problema que foi termos usado angular pra tudo. tá cada vez mais difícil achar\n  gente que saiba bastante de angular, porque estamos migrando pro react, pro\n  angular 2, pro vue, e precisamos cada vez mais de uma pessoa dedicada a esse\n  código legado.\n  "),ba=i(Ur,"STRONG",{});var Vr=u(ba);ha=c(Vr,"código legado feito a menos de dois anos."),Vr.forEach(t),Ur.forEach(t),qa=d(e),ja=i(e,"P",{});var Wr=u(ja);za=c(Wr,"e isso vai continuar acontecendo enquanto nós focarmos em conhecimento de\n  frameworks/bibliotecas em vez de focarmos em aprender mais sobre o navegador,\n  sobre design e sobre backend. fazer um código legível, com menos restrições de\n  frameworks e com maior facilidade de testar faz com que o código seja mais\n  fácil de manter e mais próximo do que um backend seria capaz de fazer - o que\n  melhora em muito a facilidade de ter um projeto fácil de manter em longa data."),Wr.forEach(t),Ea=d(e),ka=i(e,"P",{});var Xr=u(ka);xa=c(Xr,"sobre alguns detalhes desse tipo de pensamento, dêem uma olhada no\n  "),Pa=i(Xr,"A",{href:!0,target:!0});var Yr=u(Pa);Oa=c(Yr,"meu post sobre o uso da jQuery em grandes projetos"),Yr.forEach(t),Ra=c(Xr,"."),Xr.forEach(t),Sa=d(e),Ta=i(e,"H4",{});var $r=u(Ta);ya=c($r,"custo de carregamento e processamento"),$r.forEach(t),Ga=d(e),Na=i(e,"P",{});var _r=u(Na);wa=c(_r,"uma das grandes naturezas de fazer projetos somente com js é o fato de que,\n  bem,\n  "),Ha=i(_r,"STRONG",{});var Br=u(Ha);La=c(Br,"o site todo é em js"),Br.forEach(t),Ma=c(_r,". isso significa que, na prática, temos 1\n  (hum) grande (gigantesco) arquivo js que é carregado assim que a página\n  carrega. e por mais que isso seja bom na hora que a pessoa tá navegando, isso\n  significa que não há cache e que cada micro alteração no código vai fazer com\n  que todos seus usuários baixem o troço todo de novo."),_r.forEach(t),Aa=d(e),Qa=i(e,"P",{});var Cr=u(Qa);Ia=c(Cr,"um exemplo: refiz meu site (do qual esse blog faz parte) faz pouco tempo. a\n  princípio, pensei em usar react ou algo do tipo, já que o github pages (no\n  qual esse site está hospedado) só aceita páginas estáticas. no entanto, assim\n  que eu fiz o setup do projeto, ainda sem nada implementado, e vi que, com o\n  que eu precisava, ia ter um arquivo js de mais de 800k (sim, sem\n  "),Da=i(Cr,"STRONG",{});var Fr=u(Da);Ja=c(Fr,"nada"),Fr.forEach(t),Ua=c(Cr,"\n  implementado). desisti. hoje, tenho as mesmas funcionalidades com somente\n  140k, com\n  "),Va=i(Cr,"STRONG",{});var Kr=u(Va);Wa=c(Kr,"tudo"),Kr.forEach(t),Xa=c(Cr,"\n  implementado, e features idênticas: roteamento com push state, animações bem\n  feitas, otimizações mil. e o melhor:\n  "),Ya=i(Cr,"EM",{});var Zr=u(Ya);$a=c(Zr,"sem toda aquela doideira de compilar nada"),Zr.forEach(t),_a=c(Cr,". só tenho um minificador e\n  tá valendo."),Cr.forEach(t),Ba=d(e),Ca=i(e,"P",{});var en=u(Ca);Fa=c(en,"além disso, há um custo de não fazermos a renderização do html no backend: o\n  de renderizar o html no cliente. pode parecer besteira, mas deixar pro cliente\n  renderizar dinamicamente as páginas em vez de renderizar no backend faz com\n  que você dependa do poder de processamento do cliente, o que pode piorar (e\n  muito) a experiência do usuário em casos específicos (ou se o código for mal\n  implementado). quem abriu a página mobile do facebook em um celular antigo\n  sabe do que eu tô falando: é\n  "),Ka=i(en,"STRONG",{});var an=u(Ka);Za=c(an,"impossível"),an.forEach(t),eo=c(en,"\n  de usar."),en.forEach(t),ao=d(e),oo=i(e,"H3",{});var on=u(oo);so=c(on,"ah, Luciano, mas muitas vezes é necessário usar algo como o react pra ter um\n  número maior de features, além da performance do virtual DOM"),on.forEach(t),ro=d(e),no=i(e,"P",{});var sn=u(no);mo=c(sn,"olha, é\n  "),io=i(sn,"EM",{});var rn=u(io);to=c(rn,"claro"),rn.forEach(t),uo=c(sn,"\n  que há vantagens\n  "),co=i(sn,"EM",{});var nn=u(co);po=c(nn,"absurdas"),nn.forEach(t),lo=c(sn,"\n  em usar algo do tipo. em alguns lugares é até necessário. então agora vou\n  falar um pouco mais sobre isso, ou seja, como ter uma aplicação equilibrada."),sn.forEach(t),fo=d(e),vo=i(e,"H4",{});var mn=u(vo);go=c(mn,"não ter recarregamento de página é lindo, cara"),mn.forEach(t),bo=d(e),ho=i(e,"P",{});var tn=u(ho);qo=c(tn,"sim, é lindo! sou super a favor de uma interface que seja transparente pro\n  usuário, ou seja,\n  "),jo=i(tn,"STRONG",{});var dn=u(jo);zo=c(dn,"que o usuário não perceba o meio, e sim a mensagem"),dn.forEach(t),Eo=c(tn,". mas, ó, o\n  conceito de AJAX não é novo, a implementação está longe de ser complexa, e o\n  que não falta é renderizador de templates em js. podemos - e digo mais,\n  "),ko=i(tn,"EM",{});var un=u(ko);xo=c(un,"devemos"),un.forEach(t),Po=c(tn,"\n  - usar algo mais simples quando for possível."),tn.forEach(t),Oo=d(e),Ro=i(e,"H5",{});var cn=u(Ro);So=c(cn,"mas aí não tem fetch, não tem Promise, não tem..."),cn.forEach(t),To=d(e),yo=i(e,"P",{});var pn=u(yo);Go=c(pn,"na boa, tem. se você\n  "),No=i(pn,"STRONG",{});var ln=u(No);wo=c(ln,"realmente não puder viver sem"),ln.forEach(t),Ho=c(pn,"\n  essas features, você pode. basta adicionar ao seu projeto um polyfill de\n  Promises, um polyfill de fetch, ou seja lá o que raios você acha que precisa\n  usar. ah, e só lembrando,\n  "),Lo=i(pn,"STRONG",{});var fn=u(Lo);Mo=i(fn,"A",{href:!0,target:!0});var vn=u(Mo);Ao=c(vn,"até a jQuery já usa a interface de Promises"),vn.forEach(t),fn.forEach(t),Qo=c(pn,",\n  abstraindo lindamente toda essa questão de compatibilidade de browsers."),pn.forEach(t),Io=d(e),Do=i(e,"H4",{});var gn=u(Do);Jo=c(gn,"mas é bom ter projetos desacoplados entre front e back, não é?"),gn.forEach(t),Uo=d(e),Vo=i(e,"P",{});var bn=u(Vo);Wo=c(bn,"é mesmo? sei lá, até hoje eu só tive problema com o fato de não entender como\n  o backend ou o frontend funcionam. já trabalhei bastante com os dois lados da\n  moeda: em aplicações backend que servem apis rest e em aplicações frontend que\n  só consomem apis rest. em ambos os casos, tive ruídos de comunicação com a\n  outra equipe e, muitas vezes, não pude prosseguir a tarefa que tinha que\n  cumprir por algum problema de especificação."),bn.forEach(t),Xo=d(e),Yo=i(e,"P",{});var hn=u(Yo);$o=c(hn,"pra se ter um projeto de backend desacoplado do frontend de maneira saudável,\n  é\n  "),_o=i(hn,"STRONG",{});var qn=u(_o);Bo=c(qn,"extremamente"),qn.forEach(t),Co=c(hn,"\n  necessário que\n  "),Fo=i(hn,"STRONG",{});var jn=u(Fo);Ko=c(jn,"alguém"),jn.forEach(t),Zo=c(hn,"\n  faça\n  "),es=i(hn,"STRONG",{});var zn=u(es);as=c(zn,"bem"),zn.forEach(t),os=c(hn,"\n  o trabalho de articulação; e isso é\n  "),ss=i(hn,"STRONG",{});var En=u(ss);rs=c(En,"muito"),En.forEach(t),ns=c(hn,"\n  raro. no entanto, se nós, como frontends, entendermos minimamente bem como o\n  backend funciona, teremos uma facilidade imensa de detectar erros de\n  especificação, resolver bugs de back que estejam impedindo o progresso de uma\n  tarefa de front e não precisaremos de uma interação e gerenciamento tão\n  fortes."),hn.forEach(t),ms=d(e),is=i(e,"H5",{});var kn=u(is);ts=c(kn,"Luciano, entendi, mas eu sei um bocado de backend. se você souber, acho que\n  não tem problema desacoplar, né?"),kn.forEach(t),ds=d(e),us=i(e,"P",{});var xn=u(us);cs=i(xn,"STRONG",{});var Pn=u(cs);ps=c(Pn,"o problema não é desacoplar os projetos ou não"),Pn.forEach(t),ls=c(xn,"; até porque\n  todo grande framework de backend tem suas formas de tornar o trabalho de front\n  mais desacoplado do de back."),xn.forEach(t),fs=d(e),vs=i(e,"P",{});var On=u(vs);gs=i(On,"STRONG",{});var Rn=u(gs);bs=c(Rn,"o problema é incentivar que os fronts só saibam de front e os backs só\n    saibam de back."),Rn.forEach(t),hs=c(On,"\n  criar feudos nos projetos é sempre (sim, sempre) um problema, porque pessoas\n  são falhas. elas erram, elas saem de férias, elas ficam doentes, elas tomam um\n  porre e não atendem o celular -\n  "),qs=i(On,"STRONG",{});var Sn=u(qs);js=c(Sn,"elas têm direito a viver além do trabalho"),Sn.forEach(t),zs=c(On,". ao criarmos\n  feudos, impedimos a máquina do projeto de estar sempre funcionando, já que,\n  assim que uma peça quebrar, a máquina para, em vez de sempre termos peças que\n  se encaixem."),On.forEach(t),Es=d(e),ks=i(e,"H4",{});var Tn=u(ks);xs=c(Tn,"uma coisa você tem que concordar, que fazermos projetos js puros faz nosso\n  código ficar bem organizado"),Tn.forEach(t),Ps=d(e),Os=i(e,"P",{});var yn=u(Os);Rs=c(yn,"yep, concordo. mesmo que seja à força, ter o código bem organizado é sempre\n  importante pro projeto crescer e evoluir de uma forma sustentável. uma das\n  coisas que mais amo em Python, por exemplo, é o fato dele te forçar a escrever\n  um código mais legível e sempre te dar mais exemplos de como fazer um bom\n  código, já que os sintomas de um código ruim aparecem rapidinho."),yn.forEach(t),Ss=d(e),Ts=i(e,"P",{});var Gn=u(Ts);ys=c(Gn,"o mesmo não acontece com js, então os frameworks e bibliotecas tomaram pra si\n  o papel de obrigar um certo nível de organização do código - e isso é ótimo.\n  mas o que eles estão te obrigando a fazer, cara,\n  "),Gs=i(Gn,"STRONG",{});var Nn=u(Gs);Ns=c(Nn,"não deveria ser mais do que sua obrigação"),Nn.forEach(t),ws=c(Gn,". organizar o código\n  deveria ser parte do seu fluxo natural de desenvolvimento, então faça um favor\n  e pratique fazer códigos js bem organizados sem a necessidade de um\n  framework/biblioteca. o mundo agradece."),Gn.forEach(t),Hs=d(e),Ls=i(e,"H4",{});var wn=u(Ls);Ms=c(wn,"ai, que ranzinza! vem cá, uma coisa que você não tem como negar: react (e\n  afins) performam melhor que jQuery"),wn.forEach(t),As=d(e),Qs=i(e,"P",{});var Hn=u(Qs);Is=c(Hn,"sim, sim. o advento do virtual DOM foi um grande possibilitador de aplicações\n  js fazerem o que fazem hoje. é muito difícil fazer um dashboard gigantesco ou\n  uma manipulação de gráficos performática sem algum tipo de\n  framework/biblioteca que faça a gerência de memória/performance."),Hn.forEach(t),Ds=d(e),Js=i(e,"P",{});var Ln=u(Js);Us=i(Ln,"STRONG",{});var Mn=u(Us);Vs=c(Mn,"então vamos usar react sim! vamos usar vue sim! até angular, o\n    desespero da minha alma, vamos usar!"),Mn.forEach(t),Ws=c(Ln,"\n  mas ó, vamos combinar só um negócio: vamos usar\n  "),Xs=i(Ln,"STRONG",{});var An=u(Xs);Ys=c(An,"só quando necessário, com o mínimo de complexidade possivel?"),An.forEach(t),$s=c(Ln,"\n  porque, novamente, alguém vai ter que manter essa budega, e manter uma página\n  é muito mais fácil do que manter uma aplicação inteira. precisa de lidar com\n  complexidade nessa página,\n  "),_s=i(Ln,"STRONG",{});var Qn=u(_s);Bs=c(Qn,"use nessa página, e só nela"),Qn.forEach(t),Cs=c(Ln,"."),Ln.forEach(t),Fs=d(e),Ks=i(e,"HR",{}),Zs=d(e),er=i(e,"P",{});var In=u(er);ar=c(In,"pra terminar, meu último ponto é o seguinte: vamos começar a pensar mais o\n  futuro, sim?\n  "),or=i(In,"STRONG",{});var Dn=u(or);sr=c(Dn,"não sobre o que usaremos no futuro, mas sobre o que\n    "),rr=i(Dn,"EM",{});var Jn=u(rr);nr=c(Jn,"ainda vamos ter que usar"),Jn.forEach(t),Dn.forEach(t),mr=c(In,". ainda vamos precisar manter\n  aquele site em backbone ou knockout, ou ember. ainda vamos ter que manter\n  aquele site em react e redux (e rxjs, e webpack, e es6, tudo junto). mas com o\n  nosso aparente déficit de atenção, nós vamos acabar fazendo muita coisa e\n  abandonando ainda mais."),In.forEach(t),ir=d(e),tr=i(e,"P",{});var Un=u(tr);dr=c(Un,"então estudemos react sim. e elm. e vue. mas antes de começar aquele\n  projetinho novo, volta aqui, lê de novo e vê se o que você tá fazendo vai\n  valer a pena. se sim, manda ver, e como sempre, desejo sucesso pra todo mundo!\n  abraço, e até a próxima o/"),Un.forEach(t),this.h()},h(){document.title="\n    O estado atual do desenvolvimento frontend - luciano@ratamero.com\n  ",p(a,"name","description"),p(a,"content","Nesse post, apelidado de 'parem de usar js pra tudo, caceta', falo sobre por que sinto que tá na hora de a gente ter uma conversinha sobre o estado atual do desenvolvimento frontend. :]"),p(o,"name","keywords"),p(o,"content","Luciano Ratamero, javascript, frontend, react, webpack, es6, desespero"),p(z,"class","meta"),p(Pa,"href","http://lucianoratamero.github.io/blog/a-jquery-nao-e-a-vila-voce-e-uma-discussao-sobre-o-uso-da-jquery-em-grandes-projetos/"),p(Pa,"target","_blank"),p(Mo,"href","http://blog.monkey.codes/sequential-ajax-and-jquerys-promise/"),p(Mo,"target","_blank")},m(e,s){l(document.head,a),l(document.head,o),f(e,g,s),f(e,b,s),l(b,h),l(h,q),f(e,j,s),f(e,z,s),l(z,E),f(e,k,s),f(e,x,s),l(x,P),l(P,O),l(O,R),l(O,S),l(S,T),l(O,y),l(x,G),l(x,N),l(x,w),l(w,H),l(x,L),f(e,M,s),f(e,A,s),l(A,Q),f(e,I,s),f(e,D,s),l(D,J),f(e,U,s),f(e,V,s),l(V,W),f(e,X,s),f(e,Y,s),l(Y,$),l(Y,_),l(_,B),l(Y,C),f(e,F,s),f(e,K,s),l(K,Z),l(K,ee),l(ee,ae),l(K,oe),f(e,se,s),f(e,re,s),l(re,ne),f(e,me,s),f(e,ie,s),l(ie,te),l(ie,de),l(de,ue),l(ie,ce),l(ie,pe),l(pe,le),l(ie,fe),f(e,ve,s),f(e,ge,s),l(ge,be),f(e,he,s),f(e,qe,s),l(qe,je),l(je,ze),l(qe,Ee),l(qe,ke),l(ke,xe),l(qe,Pe),l(qe,Oe),l(Oe,Re),f(e,Se,s),f(e,Te,s),l(Te,ye),f(e,Ge,s),f(e,Ne,s),l(Ne,we),l(we,He),l(Ne,Le),l(Ne,Me),l(Me,Ae),l(Ne,Qe),l(Ne,Ie),l(Ie,De),l(Ne,Je),l(Ne,Ue),l(Ue,Ve),f(e,We,s),f(e,Xe,s),l(Xe,Ye),f(e,$e,s),f(e,_e,s),l(_e,Be),f(e,Ce,s),f(e,Fe,s),l(Fe,Ke),l(Fe,Ze),l(Ze,ea),l(Fe,aa),f(e,oa,s),f(e,sa,s),l(sa,ra),l(sa,na),l(na,ma),l(sa,ia),l(sa,ta),l(ta,da),l(sa,ua),f(e,ca,s),f(e,pa,s),l(pa,la),f(e,fa,s),f(e,va,s),l(va,ga),l(va,ba),l(ba,ha),f(e,qa,s),f(e,ja,s),l(ja,za),f(e,Ea,s),f(e,ka,s),l(ka,xa),l(ka,Pa),l(Pa,Oa),l(ka,Ra),f(e,Sa,s),f(e,Ta,s),l(Ta,ya),f(e,Ga,s),f(e,Na,s),l(Na,wa),l(Na,Ha),l(Ha,La),l(Na,Ma),f(e,Aa,s),f(e,Qa,s),l(Qa,Ia),l(Qa,Da),l(Da,Ja),l(Qa,Ua),l(Qa,Va),l(Va,Wa),l(Qa,Xa),l(Qa,Ya),l(Ya,$a),l(Qa,_a),f(e,Ba,s),f(e,Ca,s),l(Ca,Fa),l(Ca,Ka),l(Ka,Za),l(Ca,eo),f(e,ao,s),f(e,oo,s),l(oo,so),f(e,ro,s),f(e,no,s),l(no,mo),l(no,io),l(io,to),l(no,uo),l(no,co),l(co,po),l(no,lo),f(e,fo,s),f(e,vo,s),l(vo,go),f(e,bo,s),f(e,ho,s),l(ho,qo),l(ho,jo),l(jo,zo),l(ho,Eo),l(ho,ko),l(ko,xo),l(ho,Po),f(e,Oo,s),f(e,Ro,s),l(Ro,So),f(e,To,s),f(e,yo,s),l(yo,Go),l(yo,No),l(No,wo),l(yo,Ho),l(yo,Lo),l(Lo,Mo),l(Mo,Ao),l(yo,Qo),f(e,Io,s),f(e,Do,s),l(Do,Jo),f(e,Uo,s),f(e,Vo,s),l(Vo,Wo),f(e,Xo,s),f(e,Yo,s),l(Yo,$o),l(Yo,_o),l(_o,Bo),l(Yo,Co),l(Yo,Fo),l(Fo,Ko),l(Yo,Zo),l(Yo,es),l(es,as),l(Yo,os),l(Yo,ss),l(ss,rs),l(Yo,ns),f(e,ms,s),f(e,is,s),l(is,ts),f(e,ds,s),f(e,us,s),l(us,cs),l(cs,ps),l(us,ls),f(e,fs,s),f(e,vs,s),l(vs,gs),l(gs,bs),l(vs,hs),l(vs,qs),l(qs,js),l(vs,zs),f(e,Es,s),f(e,ks,s),l(ks,xs),f(e,Ps,s),f(e,Os,s),l(Os,Rs),f(e,Ss,s),f(e,Ts,s),l(Ts,ys),l(Ts,Gs),l(Gs,Ns),l(Ts,ws),f(e,Hs,s),f(e,Ls,s),l(Ls,Ms),f(e,As,s),f(e,Qs,s),l(Qs,Is),f(e,Ds,s),f(e,Js,s),l(Js,Us),l(Us,Vs),l(Js,Ws),l(Js,Xs),l(Xs,Ys),l(Js,$s),l(Js,_s),l(_s,Bs),l(Js,Cs),f(e,Fs,s),f(e,Ks,s),f(e,Zs,s),f(e,er,s),l(er,ar),l(er,or),l(or,sr),l(or,rr),l(rr,nr),l(er,mr),f(e,ir,s),f(e,tr,s),l(tr,dr)},p:v,i:v,o:v,d(e){t(a),t(o),e&&t(g),e&&t(b),e&&t(j),e&&t(z),e&&t(k),e&&t(x),e&&t(M),e&&t(A),e&&t(I),e&&t(D),e&&t(U),e&&t(V),e&&t(X),e&&t(Y),e&&t(F),e&&t(K),e&&t(se),e&&t(re),e&&t(me),e&&t(ie),e&&t(ve),e&&t(ge),e&&t(he),e&&t(qe),e&&t(Se),e&&t(Te),e&&t(Ge),e&&t(Ne),e&&t(We),e&&t(Xe),e&&t($e),e&&t(_e),e&&t(Ce),e&&t(Fe),e&&t(oa),e&&t(sa),e&&t(ca),e&&t(pa),e&&t(fa),e&&t(va),e&&t(qa),e&&t(ja),e&&t(Ea),e&&t(ka),e&&t(Sa),e&&t(Ta),e&&t(Ga),e&&t(Na),e&&t(Aa),e&&t(Qa),e&&t(Ba),e&&t(Ca),e&&t(ao),e&&t(oo),e&&t(ro),e&&t(no),e&&t(fo),e&&t(vo),e&&t(bo),e&&t(ho),e&&t(Oo),e&&t(Ro),e&&t(To),e&&t(yo),e&&t(Io),e&&t(Do),e&&t(Uo),e&&t(Vo),e&&t(Xo),e&&t(Yo),e&&t(ms),e&&t(is),e&&t(ds),e&&t(us),e&&t(fs),e&&t(vs),e&&t(Es),e&&t(ks),e&&t(Ps),e&&t(Os),e&&t(Ss),e&&t(Ts),e&&t(Hs),e&&t(Ls),e&&t(As),e&&t(Qs),e&&t(Ds),e&&t(Js),e&&t(Fs),e&&t(Ks),e&&t(Zs),e&&t(er),e&&t(ir),e&&t(tr)}}}export default class extends e{constructor(e){super(),a(this,e,null,g,o,{})}}

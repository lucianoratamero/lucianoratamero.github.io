import{S as e,i as a,s as o,c as r,a as s,e as n,t as m,q as i,j as t,d,f as u,b as c,g as p,h as l,k as f,n as v,m as g,l as b,p as h,r as q,u as j,H as z}from"./client.311a5b93.js";import"./Icon.06acf308.js";import{M as E,P as k}from"./MetaTags.39c5eacd.js";function x(e){let a,o,z,x,P,O,R,S,w,T,N,G,y,$,H,L,M,I,A,Q,D,J,C,U,V,W,X,Y,B,K,_,F,Z,ee,ae,oe,re,se,ne,me,ie,te,de,ue,ce,pe,le,fe,ve,ge,be,he,qe,je,ze,Ee,ke,xe,Pe,Oe,Re,Se,we,Te,Ne,Ge,ye,$e,He,Le,Me,Ie,Ae,Qe,De,Je,Ce,Ue,Ve,We,Xe,Ye,Be,Ke,_e,Fe,Ze,ea,aa,oa,ra,sa,na,ma,ia,ta,da,ua,ca,pa,la,fa,va,ga,ba,ha,qa,ja,za,Ea,ka,xa,Pa,Oa,Ra,Sa,wa,Ta,Na,Ga,ya,$a,Ha,La,Ma,Ia,Aa,Qa,Da,Ja,Ca,Ua,Va,Wa,Xa,Ya,Ba,Ka,_a,Fa,Za,eo,ao,oo,ro,so,no,mo,io,to,uo,co,po,lo,fo,vo,go,bo,ho,qo,jo,zo,Eo,ko,xo,Po,Oo,Ro,So,wo,To,No,Go,yo,$o,Ho,Lo,Mo,Io,Ao,Qo,Do,Jo,Co,Uo,Vo,Wo,Xo,Yo,Bo,Ko,_o,Fo,Zo,er,ar,or,rr,sr,nr,mr,ir,tr,dr,ur,cr,pr,lr,fr,vr,gr,br,hr,qr,jr,zr,Er,kr,xr,Pr,Or,Rr,Sr,wr,Tr,Nr,Gr,yr,$r,Hr,Lr,Mr,Ir,Ar,Qr,Dr,Jr,Cr,Ur,Vr,Wr,Xr,Yr,Br,Kr,_r,Fr,Zr,es,as,os,rs,ss,ns,ms,is,ts,ds,us;return a=new E({props:{title:"O estado atual do desenvolvimento frontend",description:"Nesse post, apelidado de 'parem de usar js pra tudo, caceta', falo sobre por que sinto que tá na hora de a gente ter uma conversinha sobre o estado atual do desenvolvimento frontend. :]",keywords:"javascript, frontend, react, webpack, es6, desespero"}}),R=new k({props:{date:"2016-10-27",text:e[1]}}),{c(){r(a.$$.fragment),o=s(),z=n("h1"),x=n("mark"),P=m("O estado atual do desenvolvimento frontend"),O=s(),r(R.$$.fragment),S=s(),w=n("article"),T=n("p"),N=n("small"),G=n("em"),y=m("ou\n        "),$=n("strong"),H=m("parem de usar javascript pra tudo, caceta"),L=m("."),M=n("br"),I=m("a\n    web definitivamente mudou desde quando eu era criança. tudo era bem mais\n    engessado, muito por conta da imaturidade, da falta de ferramentas e de\n    processamento. sou, como a grande maioria que ainda faz a web, de uma época\n    anterior ao google, anterior ao git. uma época de frames, gifs brilhantes,\n    comic sans EVERYWHERE. a época do flash. e digo que não sinto a\n    "),A=n("strong"),Q=m("menor"),D=m("\n    falta de grande parte disso. mas sinto que tá na hora de a gente ter uma\n    conversinha sobre o estado atual do desenvolvimento frontend."),J=s(),C=n("p"),U=m("o negócio é o seguinte, a mensagem é bem simples: fomos longe demais.\n    demais. tipo, muito. paramos de pensar no que é desenvolver no cliente, para\n    o cliente, e isso é tudo culpa do javascript."),V=s(),W=n("h3"),X=m("ei, ei, calma aí, se esse é um post JS hater, vou embora"),Y=s(),B=n("p"),K=m("sossega aí, eu amo javascript. foi a linguagem que me permitiu sair da minha\n    formação (jornalismo) pra programação, e mesmo depois de tanto tempo\n    programando quase que exclusivamente com Python (que é lindo demais), eu\n    sinto falta e acabo sempre voltando ao javascript."),_=s(),F=n("p"),Z=m("o fato é que\n    "),ee=n("strong"),ae=m("o javascript evoluiu de uma forma impressionante"),oe=m(". eu me\n    lembro do que era só usar jQuery num projeto, fazer tudo na mão, e vejo onde\n    chegamos: temos servidores rodando js, bancos de dados escritos em js, cara,\n    temos sistemas operacionais inteiros baseados em html/javascript. acho isso\n    lindo demais."),re=s(),se=n("p"),ne=m("e é ótimo ver que a comunidade tá cada dia mais ativa, mais madura, mais\n    preparada pra transformar uma linguagem de navegadores em uma verdadeira\n    ferramenta pra qualquer negócio. meu problema não é com a comunidade, ou com\n    a linguagem, ou com a evolução da web; meu problema é que, hoje, se usa\n    javascript pra\n    "),me=n("strong"),ie=m("tudo"),te=m("."),de=s(),ue=n("h3"),ce=m("isso é porque nós podemos usar pra tudo! isso não é bom?"),pe=s(),le=n("p"),fe=m("isso é ótimo.\n    "),ve=n("strong"),ge=m("a possbilidade de podermos usar javascript pra tudo me encanta."),be=m("\n    o problema não é a possbilidade, mas o fato de que\n    "),he=n("em"),qe=m("boa parte dos projetos hoje em dia são feitos puramente em js, ou com o\n      mínimo de outras ferramentas"),je=m(". não consigo me lembrar da última vez em\n    que entrei em um projeto que tivesse menos de 50% do seu código de frontend\n    escrito com react ou angular."),ze=s(),Ee=n("p"),ke=m("vou explicar melhor sobre alguns dos problemas que vejo nesse tipo de\n    abordagem:"),xe=s(),Pe=n("ul"),Oe=n("li"),Re=m("curva de aprendizado;"),Se=s(),we=n("li"),Te=m("manutenção do projeto;"),Ne=s(),Ge=n("li"),ye=m("custo de carregamento e processamento."),$e=s(),He=n("p"),Le=m("também vou discutir alguns prós de se usar js pra tudo e propor soluções\n    fáceis pra elas:"),Me=s(),Ie=n("ul"),Ae=n("li"),Qe=m("não ter recarregamento da página, tanto do ponto de vista visual quanto do\n      funcional;"),De=s(),Je=n("li"),Ce=m("projetos desacoplados;"),Ue=s(),Ve=n("li"),We=m("código organizado;"),Xe=s(),Ye=n("li"),Be=m("performance."),Ke=s(),_e=n("p"),Fe=m("sem mais delongas, vamos começar."),Ze=s(),ea=n("h4"),aa=m("curva de aprendizado"),oa=s(),ra=n("p"),sa=m("faz um mês em que peguei dois projetos em react pra fazer, e vou dizer que\n    não foi fácil pegar um ritmo decente. claro que ter tido bastante\n    experiência com js no passado me fez aprender relativamente rápido, mas\n    "),na=n("strong"),ma=m("se você precisa de um mês pra fazer uma página básica, tem alguma\n      coisa errada"),ia=m(". por mais simples que pareça, a máquina de estados\n    do react deixa bastante coisa implícita - e estamos falando somente de uma\n    biblioteca pra renderizar partes dinâmicas de html. quando junta com redux\n    então, a brincadeira fica mais complicada."),ta=s(),da=n("p"),ua=m("vejo que faz mais de um mês de aprendizado e\n    "),ca=n("strong"),pa=m("só agora eu tô entendendo como fazer um ajax direito"),la=m(". não\n    sei se vocês lembram, mas, usando jQuery, é só, bem, chamar\n    "),fa=n("code"),va=m("$.ajax"),ga=m("\n    passando a url e meio que tá pronto. e a gente ainda não falou de webpack,\n    es2015, typescript, promises, observables... tanta coisa junta exige\n    conhecimento, empenho, um profissional dedicado, e isso nem sempre é bom."),ba=s(),ha=n("h4"),qa=m("manutenção do projeto"),ja=s(),za=n("p"),Ea=m("sei que sou sempre o cara chato que fala sobre manutenção, mas cada dia que\n    passa eu sinto que tô mais e mais certo sobre isso. hoje, estamos vendo o\n    problema que foi termos usado angular pra tudo. tá cada vez mais difícil\n    achar gente que saiba bastante de angular, porque estamos migrando pro\n    react, pro angular 2, pro vue, e precisamos cada vez mais de uma pessoa\n    dedicada a esse código legado.\n    "),ka=n("strong"),xa=m("código legado feito a menos de dois anos."),Pa=s(),Oa=n("p"),Ra=m("e isso vai continuar acontecendo enquanto nós focarmos em conhecimento de\n    frameworks/bibliotecas em vez de focarmos em aprender mais sobre o\n    navegador, sobre design e sobre backend. fazer um código legível, com menos\n    restrições de frameworks e com maior facilidade de testar faz com que o\n    código seja mais fácil de manter e mais próximo do que um backend seria\n    capaz de fazer - o que melhora em muito a facilidade de ter um projeto fácil\n    de manter em longa data."),Sa=s(),wa=n("h4"),Ta=m("custo de carregamento e processamento"),Na=s(),Ga=n("p"),ya=m("uma das grandes naturezas de fazer projetos somente com js é o fato de que,\n    bem,\n    "),$a=n("strong"),Ha=m("o site todo é em js"),La=m(". isso significa que, na prática, temos\n    1 (hum) grande (gigantesco) arquivo js que é carregado assim que a página\n    carrega. e por mais que isso seja bom na hora que a pessoa tá navegando,\n    isso significa que não há cache e que cada micro alteração no código vai\n    fazer com que todos seus usuários baixem o troço todo de novo."),Ma=s(),Ia=n("p"),Aa=m("um exemplo: refiz meu site (do qual esse blog faz parte) faz pouco tempo. a\n    princípio, pensei em usar react ou algo do tipo, já que o github pages (no\n    qual esse site está hospedado) só aceita páginas estáticas. no entanto,\n    assim que eu fiz o setup do projeto, ainda sem nada implementado, e vi que,\n    com o que eu precisava, ia ter um arquivo js de mais de 800k (sim, sem\n    "),Qa=n("strong"),Da=m("nada"),Ja=m("\n    implementado). desisti. hoje, tenho as mesmas funcionalidades com somente\n    140k, com\n    "),Ca=n("strong"),Ua=m("tudo"),Va=m("\n    implementado, e features idênticas: roteamento com push state, animações bem\n    feitas, otimizações mil. e o melhor:\n    "),Wa=n("em"),Xa=m("sem toda aquela doideira de compilar nada"),Ya=m(". só tenho um minificador\n    e tá valendo."),Ba=s(),Ka=n("p"),_a=m("além disso, há um custo de não fazermos a renderização do html no backend: o\n    de renderizar o html no cliente. pode parecer besteira, mas deixar pro\n    cliente renderizar dinamicamente as páginas em vez de renderizar no backend\n    faz com que você dependa do poder de processamento do cliente, o que pode\n    piorar (e muito) a experiência do usuário em casos específicos (ou se o\n    código for mal implementado). quem abriu a página mobile do facebook em um\n    celular antigo sabe do que eu tô falando: é\n    "),Fa=n("strong"),Za=m("impossível"),eo=m("\n    de usar."),ao=s(),oo=n("h3"),ro=m("ah, Luciano, mas muitas vezes é necessário usar algo como o react pra ter um\n    número maior de features, além da performance do virtual DOM"),so=s(),no=n("p"),mo=m("olha, é\n    "),io=n("em"),to=m("claro"),uo=m("\n    que há vantagens\n    "),co=n("em"),po=m("absurdas"),lo=m("\n    em usar algo do tipo. em alguns lugares é até necessário. então agora vou\n    falar um pouco mais sobre isso, ou seja, como ter uma aplicação equilibrada."),fo=s(),vo=n("h4"),go=m("não ter recarregamento de página é lindo, cara"),bo=s(),ho=n("p"),qo=m("sim, é lindo! sou super a favor de uma interface que seja transparente pro\n    usuário, ou seja,\n    "),jo=n("strong"),zo=m("que o usuário não perceba o meio, e sim a mensagem"),Eo=m(". mas, ó,\n    o conceito de AJAX não é novo, a implementação está longe de ser complexa, e\n    o que não falta é renderizador de templates em js. podemos - e digo mais,\n    "),ko=n("em"),xo=m("devemos"),Po=m("\n    - usar algo mais simples quando for possível."),Oo=s(),Ro=n("h5"),So=m("mas aí não tem fetch, não tem Promise, não tem..."),wo=s(),To=n("p"),No=m("na boa, tem. se você\n    "),Go=n("strong"),yo=m("realmente não puder viver sem"),$o=m("\n    essas features, você pode. basta adicionar ao seu projeto um polyfill de\n    Promises, um polyfill de fetch, ou seja lá o que raios você acha que precisa\n    usar. ah, e só lembrando,\n    "),Ho=n("strong"),Lo=n("a"),Mo=m("até a jQuery já usa a interface de Promises"),Io=m(",\n    abstraindo lindamente toda essa questão de compatibilidade de browsers."),Ao=s(),Qo=n("h4"),Do=m("mas é bom ter projetos desacoplados entre front e back, não é?"),Jo=s(),Co=n("p"),Uo=m("é mesmo? sei lá, até hoje eu só tive problema com o fato de não entender\n    como o backend ou o frontend funcionam. já trabalhei bastante com os dois\n    lados da moeda: em aplicações backend que servem apis rest e em aplicações\n    frontend que só consomem apis rest. em ambos os casos, tive ruídos de\n    comunicação com a outra equipe e, muitas vezes, não pude prosseguir a tarefa\n    que tinha que cumprir por algum problema de especificação."),Vo=s(),Wo=n("p"),Xo=m("pra se ter um projeto de backend desacoplado do frontend de maneira\n    saudável, é\n    "),Yo=n("strong"),Bo=m("extremamente"),Ko=m("\n    necessário que\n    "),_o=n("strong"),Fo=m("alguém"),Zo=m("\n    faça\n    "),er=n("strong"),ar=m("bem"),or=m("\n    o trabalho de articulação; e isso é\n    "),rr=n("strong"),sr=m("muito"),nr=m("\n    raro. no entanto, se nós, como frontends, entendermos minimamente bem como o\n    backend funciona, teremos uma facilidade imensa de detectar erros de\n    especificação, resolver bugs de back que estejam impedindo o progresso de\n    uma tarefa de front e não precisaremos de uma interação e gerenciamento tão\n    fortes."),mr=s(),ir=n("h5"),tr=m("Luciano, entendi, mas eu sei um bocado de backend. se você souber, acho que\n    não tem problema desacoplar, né?"),dr=s(),ur=n("p"),cr=n("strong"),pr=m("o problema não é desacoplar os projetos ou não"),lr=m("; até porque\n    todo grande framework de backend tem suas formas de tornar o trabalho de\n    front mais desacoplado do de back."),fr=s(),vr=n("p"),gr=n("strong"),br=m("o problema é incentivar que os fronts só saibam de front e os backs\n      só saibam de back."),hr=m("\n    criar feudos nos projetos é sempre (sim, sempre) um problema, porque pessoas\n    são falhas. elas erram, elas saem de férias, elas ficam doentes, elas tomam\n    um porre e não atendem o celular -\n    "),qr=n("strong"),jr=m("elas têm direito a viver além do trabalho"),zr=m(". ao criarmos\n    feudos, impedimos a máquina do projeto de estar sempre funcionando, já que,\n    assim que uma peça quebrar, a máquina para, em vez de sempre termos peças\n    que se encaixem."),Er=s(),kr=n("h4"),xr=m("uma coisa você tem que concordar, que fazermos projetos js puros faz nosso\n    código ficar bem organizado"),Pr=s(),Or=n("p"),Rr=m("yep, concordo. mesmo que seja à força, ter o código bem organizado é sempre\n    importante pro projeto crescer e evoluir de uma forma sustentável. uma das\n    coisas que mais amo em Python, por exemplo, é o fato dele te forçar a\n    escrever um código mais legível e sempre te dar mais exemplos de como fazer\n    um bom código, já que os sintomas de um código ruim aparecem rapidinho."),Sr=s(),wr=n("p"),Tr=m("o mesmo não acontece com js, então os frameworks e bibliotecas tomaram pra\n    si o papel de obrigar um certo nível de organização do código - e isso é\n    ótimo. mas o que eles estão te obrigando a fazer, cara,\n    "),Nr=n("strong"),Gr=m("não deveria ser mais do que sua obrigação"),yr=m(". organizar o\n    código deveria ser parte do seu fluxo natural de desenvolvimento, então faça\n    um favor e pratique fazer códigos js bem organizados sem a necessidade de um\n    framework/biblioteca. o mundo agradece."),$r=s(),Hr=n("h4"),Lr=m("ai, que ranzinza! vem cá, uma coisa que você não tem como negar: react (e\n    afins) performam melhor que jQuery"),Mr=s(),Ir=n("p"),Ar=m("sim, sim. o advento do virtual DOM foi um grande possibilitador de\n    aplicações js fazerem o que fazem hoje. é muito difícil fazer um dashboard\n    gigantesco ou uma manipulação de gráficos performática sem algum tipo de\n    framework/biblioteca que faça a gerência de memória/performance."),Qr=s(),Dr=n("p"),Jr=n("strong"),Cr=m("então vamos usar react sim! vamos usar vue sim! até angular, o\n      desespero da minha alma, vamos usar!"),Ur=m("\n    mas ó, vamos combinar só um negócio: vamos usar\n    "),Vr=n("strong"),Wr=m("só quando necessário, com o mínimo de complexidade possivel?"),Xr=m("\n    porque, novamente, alguém vai ter que manter essa budega, e manter uma\n    página é muito mais fácil do que manter uma aplicação inteira. precisa de\n    lidar com complexidade nessa página,\n    "),Yr=n("strong"),Br=m("use nessa página, e só nela"),Kr=m("."),_r=s(),Fr=n("hr"),Zr=s(),es=n("p"),as=m("pra terminar, meu último ponto é o seguinte: vamos começar a pensar mais o\n    futuro, sim?\n    "),os=n("strong"),rs=m("não sobre o que usaremos no futuro, mas sobre o que\n      "),ss=n("em"),ns=m("ainda vamos ter que usar"),ms=m(". ainda vamos precisar manter\n    aquele site em backbone ou knockout, ou ember. ainda vamos ter que manter\n    aquele site em react e redux (e rxjs, e webpack, e es6, tudo junto). mas com\n    o nosso aparente déficit de atenção, nós vamos acabar fazendo muita coisa e\n    abandonando ainda mais."),is=s(),ts=n("p"),ds=m("então estudemos react sim. e elm. e vue. mas antes de começar aquele\n    projetinho novo, volta aqui, lê de novo e vê se o que você tá fazendo vai\n    valer a pena. se sim, manda ver, e como sempre, desejo sucesso pra todo\n    mundo! abraço, e até a próxima o/"),this.h()},l(e){const r=i('[data-svelte="svelte-17wejbh"]',document.head);t(a.$$.fragment,r),r.forEach(d),o=u(e),z=c(e,"H1",{});var s=p(z);x=c(s,"MARK",{});var n=p(x);P=l(n,"O estado atual do desenvolvimento frontend"),n.forEach(d),s.forEach(d),O=u(e),t(R.$$.fragment,e),S=u(e),w=c(e,"ARTICLE",{});var m=p(w);T=c(m,"P",{});var f=p(T);N=c(f,"SMALL",{});var v=p(N);G=c(v,"EM",{});var g=p(G);y=l(g,"ou\n        "),$=c(g,"STRONG",{});var b=p($);H=l(b,"parem de usar javascript pra tudo, caceta"),b.forEach(d),L=l(g,"."),g.forEach(d),v.forEach(d),M=c(f,"BR",{}),I=l(f,"a\n    web definitivamente mudou desde quando eu era criança. tudo era bem mais\n    engessado, muito por conta da imaturidade, da falta de ferramentas e de\n    processamento. sou, como a grande maioria que ainda faz a web, de uma época\n    anterior ao google, anterior ao git. uma época de frames, gifs brilhantes,\n    comic sans EVERYWHERE. a época do flash. e digo que não sinto a\n    "),A=c(f,"STRONG",{});var h=p(A);Q=l(h,"menor"),h.forEach(d),D=l(f,"\n    falta de grande parte disso. mas sinto que tá na hora de a gente ter uma\n    conversinha sobre o estado atual do desenvolvimento frontend."),f.forEach(d),J=u(m),C=c(m,"P",{});var q=p(C);U=l(q,"o negócio é o seguinte, a mensagem é bem simples: fomos longe demais.\n    demais. tipo, muito. paramos de pensar no que é desenvolver no cliente, para\n    o cliente, e isso é tudo culpa do javascript."),q.forEach(d),V=u(m),W=c(m,"H3",{});var j=p(W);X=l(j,"ei, ei, calma aí, se esse é um post JS hater, vou embora"),j.forEach(d),Y=u(m),B=c(m,"P",{});var E=p(B);K=l(E,"sossega aí, eu amo javascript. foi a linguagem que me permitiu sair da minha\n    formação (jornalismo) pra programação, e mesmo depois de tanto tempo\n    programando quase que exclusivamente com Python (que é lindo demais), eu\n    sinto falta e acabo sempre voltando ao javascript."),E.forEach(d),_=u(m),F=c(m,"P",{});var k=p(F);Z=l(k,"o fato é que\n    "),ee=c(k,"STRONG",{});var us=p(ee);ae=l(us,"o javascript evoluiu de uma forma impressionante"),us.forEach(d),oe=l(k,". eu me\n    lembro do que era só usar jQuery num projeto, fazer tudo na mão, e vejo onde\n    chegamos: temos servidores rodando js, bancos de dados escritos em js, cara,\n    temos sistemas operacionais inteiros baseados em html/javascript. acho isso\n    lindo demais."),k.forEach(d),re=u(m),se=c(m,"P",{});var cs=p(se);ne=l(cs,"e é ótimo ver que a comunidade tá cada dia mais ativa, mais madura, mais\n    preparada pra transformar uma linguagem de navegadores em uma verdadeira\n    ferramenta pra qualquer negócio. meu problema não é com a comunidade, ou com\n    a linguagem, ou com a evolução da web; meu problema é que, hoje, se usa\n    javascript pra\n    "),me=c(cs,"STRONG",{});var ps=p(me);ie=l(ps,"tudo"),ps.forEach(d),te=l(cs,"."),cs.forEach(d),de=u(m),ue=c(m,"H3",{});var ls=p(ue);ce=l(ls,"isso é porque nós podemos usar pra tudo! isso não é bom?"),ls.forEach(d),pe=u(m),le=c(m,"P",{});var fs=p(le);fe=l(fs,"isso é ótimo.\n    "),ve=c(fs,"STRONG",{});var vs=p(ve);ge=l(vs,"a possbilidade de podermos usar javascript pra tudo me encanta."),vs.forEach(d),be=l(fs,"\n    o problema não é a possbilidade, mas o fato de que\n    "),he=c(fs,"EM",{});var gs=p(he);qe=l(gs,"boa parte dos projetos hoje em dia são feitos puramente em js, ou com o\n      mínimo de outras ferramentas"),gs.forEach(d),je=l(fs,". não consigo me lembrar da última vez em\n    que entrei em um projeto que tivesse menos de 50% do seu código de frontend\n    escrito com react ou angular."),fs.forEach(d),ze=u(m),Ee=c(m,"P",{});var bs=p(Ee);ke=l(bs,"vou explicar melhor sobre alguns dos problemas que vejo nesse tipo de\n    abordagem:"),bs.forEach(d),xe=u(m),Pe=c(m,"UL",{});var hs=p(Pe);Oe=c(hs,"LI",{});var qs=p(Oe);Re=l(qs,"curva de aprendizado;"),qs.forEach(d),Se=u(hs),we=c(hs,"LI",{});var js=p(we);Te=l(js,"manutenção do projeto;"),js.forEach(d),Ne=u(hs),Ge=c(hs,"LI",{});var zs=p(Ge);ye=l(zs,"custo de carregamento e processamento."),zs.forEach(d),hs.forEach(d),$e=u(m),He=c(m,"P",{});var Es=p(He);Le=l(Es,"também vou discutir alguns prós de se usar js pra tudo e propor soluções\n    fáceis pra elas:"),Es.forEach(d),Me=u(m),Ie=c(m,"UL",{});var ks=p(Ie);Ae=c(ks,"LI",{});var xs=p(Ae);Qe=l(xs,"não ter recarregamento da página, tanto do ponto de vista visual quanto do\n      funcional;"),xs.forEach(d),De=u(ks),Je=c(ks,"LI",{});var Ps=p(Je);Ce=l(Ps,"projetos desacoplados;"),Ps.forEach(d),Ue=u(ks),Ve=c(ks,"LI",{});var Os=p(Ve);We=l(Os,"código organizado;"),Os.forEach(d),Xe=u(ks),Ye=c(ks,"LI",{});var Rs=p(Ye);Be=l(Rs,"performance."),Rs.forEach(d),ks.forEach(d),Ke=u(m),_e=c(m,"P",{});var Ss=p(_e);Fe=l(Ss,"sem mais delongas, vamos começar."),Ss.forEach(d),Ze=u(m),ea=c(m,"H4",{});var ws=p(ea);aa=l(ws,"curva de aprendizado"),ws.forEach(d),oa=u(m),ra=c(m,"P",{});var Ts=p(ra);sa=l(Ts,"faz um mês em que peguei dois projetos em react pra fazer, e vou dizer que\n    não foi fácil pegar um ritmo decente. claro que ter tido bastante\n    experiência com js no passado me fez aprender relativamente rápido, mas\n    "),na=c(Ts,"STRONG",{});var Ns=p(na);ma=l(Ns,"se você precisa de um mês pra fazer uma página básica, tem alguma\n      coisa errada"),Ns.forEach(d),ia=l(Ts,". por mais simples que pareça, a máquina de estados\n    do react deixa bastante coisa implícita - e estamos falando somente de uma\n    biblioteca pra renderizar partes dinâmicas de html. quando junta com redux\n    então, a brincadeira fica mais complicada."),Ts.forEach(d),ta=u(m),da=c(m,"P",{});var Gs=p(da);ua=l(Gs,"vejo que faz mais de um mês de aprendizado e\n    "),ca=c(Gs,"STRONG",{});var ys=p(ca);pa=l(ys,"só agora eu tô entendendo como fazer um ajax direito"),ys.forEach(d),la=l(Gs,". não\n    sei se vocês lembram, mas, usando jQuery, é só, bem, chamar\n    "),fa=c(Gs,"CODE",{});var $s=p(fa);va=l($s,"$.ajax"),$s.forEach(d),ga=l(Gs,"\n    passando a url e meio que tá pronto. e a gente ainda não falou de webpack,\n    es2015, typescript, promises, observables... tanta coisa junta exige\n    conhecimento, empenho, um profissional dedicado, e isso nem sempre é bom."),Gs.forEach(d),ba=u(m),ha=c(m,"H4",{});var Hs=p(ha);qa=l(Hs,"manutenção do projeto"),Hs.forEach(d),ja=u(m),za=c(m,"P",{});var Ls=p(za);Ea=l(Ls,"sei que sou sempre o cara chato que fala sobre manutenção, mas cada dia que\n    passa eu sinto que tô mais e mais certo sobre isso. hoje, estamos vendo o\n    problema que foi termos usado angular pra tudo. tá cada vez mais difícil\n    achar gente que saiba bastante de angular, porque estamos migrando pro\n    react, pro angular 2, pro vue, e precisamos cada vez mais de uma pessoa\n    dedicada a esse código legado.\n    "),ka=c(Ls,"STRONG",{});var Ms=p(ka);xa=l(Ms,"código legado feito a menos de dois anos."),Ms.forEach(d),Ls.forEach(d),Pa=u(m),Oa=c(m,"P",{});var Is=p(Oa);Ra=l(Is,"e isso vai continuar acontecendo enquanto nós focarmos em conhecimento de\n    frameworks/bibliotecas em vez de focarmos em aprender mais sobre o\n    navegador, sobre design e sobre backend. fazer um código legível, com menos\n    restrições de frameworks e com maior facilidade de testar faz com que o\n    código seja mais fácil de manter e mais próximo do que um backend seria\n    capaz de fazer - o que melhora em muito a facilidade de ter um projeto fácil\n    de manter em longa data."),Is.forEach(d),Sa=u(m),wa=c(m,"H4",{});var As=p(wa);Ta=l(As,"custo de carregamento e processamento"),As.forEach(d),Na=u(m),Ga=c(m,"P",{});var Qs=p(Ga);ya=l(Qs,"uma das grandes naturezas de fazer projetos somente com js é o fato de que,\n    bem,\n    "),$a=c(Qs,"STRONG",{});var Ds=p($a);Ha=l(Ds,"o site todo é em js"),Ds.forEach(d),La=l(Qs,". isso significa que, na prática, temos\n    1 (hum) grande (gigantesco) arquivo js que é carregado assim que a página\n    carrega. e por mais que isso seja bom na hora que a pessoa tá navegando,\n    isso significa que não há cache e que cada micro alteração no código vai\n    fazer com que todos seus usuários baixem o troço todo de novo."),Qs.forEach(d),Ma=u(m),Ia=c(m,"P",{});var Js=p(Ia);Aa=l(Js,"um exemplo: refiz meu site (do qual esse blog faz parte) faz pouco tempo. a\n    princípio, pensei em usar react ou algo do tipo, já que o github pages (no\n    qual esse site está hospedado) só aceita páginas estáticas. no entanto,\n    assim que eu fiz o setup do projeto, ainda sem nada implementado, e vi que,\n    com o que eu precisava, ia ter um arquivo js de mais de 800k (sim, sem\n    "),Qa=c(Js,"STRONG",{});var Cs=p(Qa);Da=l(Cs,"nada"),Cs.forEach(d),Ja=l(Js,"\n    implementado). desisti. hoje, tenho as mesmas funcionalidades com somente\n    140k, com\n    "),Ca=c(Js,"STRONG",{});var Us=p(Ca);Ua=l(Us,"tudo"),Us.forEach(d),Va=l(Js,"\n    implementado, e features idênticas: roteamento com push state, animações bem\n    feitas, otimizações mil. e o melhor:\n    "),Wa=c(Js,"EM",{});var Vs=p(Wa);Xa=l(Vs,"sem toda aquela doideira de compilar nada"),Vs.forEach(d),Ya=l(Js,". só tenho um minificador\n    e tá valendo."),Js.forEach(d),Ba=u(m),Ka=c(m,"P",{});var Ws=p(Ka);_a=l(Ws,"além disso, há um custo de não fazermos a renderização do html no backend: o\n    de renderizar o html no cliente. pode parecer besteira, mas deixar pro\n    cliente renderizar dinamicamente as páginas em vez de renderizar no backend\n    faz com que você dependa do poder de processamento do cliente, o que pode\n    piorar (e muito) a experiência do usuário em casos específicos (ou se o\n    código for mal implementado). quem abriu a página mobile do facebook em um\n    celular antigo sabe do que eu tô falando: é\n    "),Fa=c(Ws,"STRONG",{});var Xs=p(Fa);Za=l(Xs,"impossível"),Xs.forEach(d),eo=l(Ws,"\n    de usar."),Ws.forEach(d),ao=u(m),oo=c(m,"H3",{});var Ys=p(oo);ro=l(Ys,"ah, Luciano, mas muitas vezes é necessário usar algo como o react pra ter um\n    número maior de features, além da performance do virtual DOM"),Ys.forEach(d),so=u(m),no=c(m,"P",{});var Bs=p(no);mo=l(Bs,"olha, é\n    "),io=c(Bs,"EM",{});var Ks=p(io);to=l(Ks,"claro"),Ks.forEach(d),uo=l(Bs,"\n    que há vantagens\n    "),co=c(Bs,"EM",{});var _s=p(co);po=l(_s,"absurdas"),_s.forEach(d),lo=l(Bs,"\n    em usar algo do tipo. em alguns lugares é até necessário. então agora vou\n    falar um pouco mais sobre isso, ou seja, como ter uma aplicação equilibrada."),Bs.forEach(d),fo=u(m),vo=c(m,"H4",{});var Fs=p(vo);go=l(Fs,"não ter recarregamento de página é lindo, cara"),Fs.forEach(d),bo=u(m),ho=c(m,"P",{});var Zs=p(ho);qo=l(Zs,"sim, é lindo! sou super a favor de uma interface que seja transparente pro\n    usuário, ou seja,\n    "),jo=c(Zs,"STRONG",{});var en=p(jo);zo=l(en,"que o usuário não perceba o meio, e sim a mensagem"),en.forEach(d),Eo=l(Zs,". mas, ó,\n    o conceito de AJAX não é novo, a implementação está longe de ser complexa, e\n    o que não falta é renderizador de templates em js. podemos - e digo mais,\n    "),ko=c(Zs,"EM",{});var an=p(ko);xo=l(an,"devemos"),an.forEach(d),Po=l(Zs,"\n    - usar algo mais simples quando for possível."),Zs.forEach(d),Oo=u(m),Ro=c(m,"H5",{});var on=p(Ro);So=l(on,"mas aí não tem fetch, não tem Promise, não tem..."),on.forEach(d),wo=u(m),To=c(m,"P",{});var rn=p(To);No=l(rn,"na boa, tem. se você\n    "),Go=c(rn,"STRONG",{});var sn=p(Go);yo=l(sn,"realmente não puder viver sem"),sn.forEach(d),$o=l(rn,"\n    essas features, você pode. basta adicionar ao seu projeto um polyfill de\n    Promises, um polyfill de fetch, ou seja lá o que raios você acha que precisa\n    usar. ah, e só lembrando,\n    "),Ho=c(rn,"STRONG",{});var nn=p(Ho);Lo=c(nn,"A",{href:!0,target:!0});var mn=p(Lo);Mo=l(mn,"até a jQuery já usa a interface de Promises"),mn.forEach(d),nn.forEach(d),Io=l(rn,",\n    abstraindo lindamente toda essa questão de compatibilidade de browsers."),rn.forEach(d),Ao=u(m),Qo=c(m,"H4",{});var tn=p(Qo);Do=l(tn,"mas é bom ter projetos desacoplados entre front e back, não é?"),tn.forEach(d),Jo=u(m),Co=c(m,"P",{});var dn=p(Co);Uo=l(dn,"é mesmo? sei lá, até hoje eu só tive problema com o fato de não entender\n    como o backend ou o frontend funcionam. já trabalhei bastante com os dois\n    lados da moeda: em aplicações backend que servem apis rest e em aplicações\n    frontend que só consomem apis rest. em ambos os casos, tive ruídos de\n    comunicação com a outra equipe e, muitas vezes, não pude prosseguir a tarefa\n    que tinha que cumprir por algum problema de especificação."),dn.forEach(d),Vo=u(m),Wo=c(m,"P",{});var un=p(Wo);Xo=l(un,"pra se ter um projeto de backend desacoplado do frontend de maneira\n    saudável, é\n    "),Yo=c(un,"STRONG",{});var cn=p(Yo);Bo=l(cn,"extremamente"),cn.forEach(d),Ko=l(un,"\n    necessário que\n    "),_o=c(un,"STRONG",{});var pn=p(_o);Fo=l(pn,"alguém"),pn.forEach(d),Zo=l(un,"\n    faça\n    "),er=c(un,"STRONG",{});var ln=p(er);ar=l(ln,"bem"),ln.forEach(d),or=l(un,"\n    o trabalho de articulação; e isso é\n    "),rr=c(un,"STRONG",{});var fn=p(rr);sr=l(fn,"muito"),fn.forEach(d),nr=l(un,"\n    raro. no entanto, se nós, como frontends, entendermos minimamente bem como o\n    backend funciona, teremos uma facilidade imensa de detectar erros de\n    especificação, resolver bugs de back que estejam impedindo o progresso de\n    uma tarefa de front e não precisaremos de uma interação e gerenciamento tão\n    fortes."),un.forEach(d),mr=u(m),ir=c(m,"H5",{});var vn=p(ir);tr=l(vn,"Luciano, entendi, mas eu sei um bocado de backend. se você souber, acho que\n    não tem problema desacoplar, né?"),vn.forEach(d),dr=u(m),ur=c(m,"P",{});var gn=p(ur);cr=c(gn,"STRONG",{});var bn=p(cr);pr=l(bn,"o problema não é desacoplar os projetos ou não"),bn.forEach(d),lr=l(gn,"; até porque\n    todo grande framework de backend tem suas formas de tornar o trabalho de\n    front mais desacoplado do de back."),gn.forEach(d),fr=u(m),vr=c(m,"P",{});var hn=p(vr);gr=c(hn,"STRONG",{});var qn=p(gr);br=l(qn,"o problema é incentivar que os fronts só saibam de front e os backs\n      só saibam de back."),qn.forEach(d),hr=l(hn,"\n    criar feudos nos projetos é sempre (sim, sempre) um problema, porque pessoas\n    são falhas. elas erram, elas saem de férias, elas ficam doentes, elas tomam\n    um porre e não atendem o celular -\n    "),qr=c(hn,"STRONG",{});var jn=p(qr);jr=l(jn,"elas têm direito a viver além do trabalho"),jn.forEach(d),zr=l(hn,". ao criarmos\n    feudos, impedimos a máquina do projeto de estar sempre funcionando, já que,\n    assim que uma peça quebrar, a máquina para, em vez de sempre termos peças\n    que se encaixem."),hn.forEach(d),Er=u(m),kr=c(m,"H4",{});var zn=p(kr);xr=l(zn,"uma coisa você tem que concordar, que fazermos projetos js puros faz nosso\n    código ficar bem organizado"),zn.forEach(d),Pr=u(m),Or=c(m,"P",{});var En=p(Or);Rr=l(En,"yep, concordo. mesmo que seja à força, ter o código bem organizado é sempre\n    importante pro projeto crescer e evoluir de uma forma sustentável. uma das\n    coisas que mais amo em Python, por exemplo, é o fato dele te forçar a\n    escrever um código mais legível e sempre te dar mais exemplos de como fazer\n    um bom código, já que os sintomas de um código ruim aparecem rapidinho."),En.forEach(d),Sr=u(m),wr=c(m,"P",{});var kn=p(wr);Tr=l(kn,"o mesmo não acontece com js, então os frameworks e bibliotecas tomaram pra\n    si o papel de obrigar um certo nível de organização do código - e isso é\n    ótimo. mas o que eles estão te obrigando a fazer, cara,\n    "),Nr=c(kn,"STRONG",{});var xn=p(Nr);Gr=l(xn,"não deveria ser mais do que sua obrigação"),xn.forEach(d),yr=l(kn,". organizar o\n    código deveria ser parte do seu fluxo natural de desenvolvimento, então faça\n    um favor e pratique fazer códigos js bem organizados sem a necessidade de um\n    framework/biblioteca. o mundo agradece."),kn.forEach(d),$r=u(m),Hr=c(m,"H4",{});var Pn=p(Hr);Lr=l(Pn,"ai, que ranzinza! vem cá, uma coisa que você não tem como negar: react (e\n    afins) performam melhor que jQuery"),Pn.forEach(d),Mr=u(m),Ir=c(m,"P",{});var On=p(Ir);Ar=l(On,"sim, sim. o advento do virtual DOM foi um grande possibilitador de\n    aplicações js fazerem o que fazem hoje. é muito difícil fazer um dashboard\n    gigantesco ou uma manipulação de gráficos performática sem algum tipo de\n    framework/biblioteca que faça a gerência de memória/performance."),On.forEach(d),Qr=u(m),Dr=c(m,"P",{});var Rn=p(Dr);Jr=c(Rn,"STRONG",{});var Sn=p(Jr);Cr=l(Sn,"então vamos usar react sim! vamos usar vue sim! até angular, o\n      desespero da minha alma, vamos usar!"),Sn.forEach(d),Ur=l(Rn,"\n    mas ó, vamos combinar só um negócio: vamos usar\n    "),Vr=c(Rn,"STRONG",{});var wn=p(Vr);Wr=l(wn,"só quando necessário, com o mínimo de complexidade possivel?"),wn.forEach(d),Xr=l(Rn,"\n    porque, novamente, alguém vai ter que manter essa budega, e manter uma\n    página é muito mais fácil do que manter uma aplicação inteira. precisa de\n    lidar com complexidade nessa página,\n    "),Yr=c(Rn,"STRONG",{});var Tn=p(Yr);Br=l(Tn,"use nessa página, e só nela"),Tn.forEach(d),Kr=l(Rn,"."),Rn.forEach(d),_r=u(m),Fr=c(m,"HR",{}),Zr=u(m),es=c(m,"P",{});var Nn=p(es);as=l(Nn,"pra terminar, meu último ponto é o seguinte: vamos começar a pensar mais o\n    futuro, sim?\n    "),os=c(Nn,"STRONG",{});var Gn=p(os);rs=l(Gn,"não sobre o que usaremos no futuro, mas sobre o que\n      "),ss=c(Gn,"EM",{});var yn=p(ss);ns=l(yn,"ainda vamos ter que usar"),yn.forEach(d),Gn.forEach(d),ms=l(Nn,". ainda vamos precisar manter\n    aquele site em backbone ou knockout, ou ember. ainda vamos ter que manter\n    aquele site em react e redux (e rxjs, e webpack, e es6, tudo junto). mas com\n    o nosso aparente déficit de atenção, nós vamos acabar fazendo muita coisa e\n    abandonando ainda mais."),Nn.forEach(d),is=u(m),ts=c(m,"P",{});var $n=p(ts);ds=l($n,"então estudemos react sim. e elm. e vue. mas antes de começar aquele\n    projetinho novo, volta aqui, lê de novo e vê se o que você tá fazendo vai\n    valer a pena. se sim, manda ver, e como sempre, desejo sucesso pra todo\n    mundo! abraço, e até a próxima o/"),$n.forEach(d),m.forEach(d),this.h()},h(){f(Lo,"href","http://blog.monkey.codes/sequential-ajax-and-jquerys-promise/"),f(Lo,"target","_blank")},m(r,s){v(a,document.head,null),g(r,o,s),g(r,z,s),b(z,x),b(x,P),g(r,O,s),v(R,r,s),g(r,S,s),g(r,w,s),b(w,T),b(T,N),b(N,G),b(G,y),b(G,$),b($,H),b(G,L),b(T,M),b(T,I),b(T,A),b(A,Q),b(T,D),b(w,J),b(w,C),b(C,U),b(w,V),b(w,W),b(W,X),b(w,Y),b(w,B),b(B,K),b(w,_),b(w,F),b(F,Z),b(F,ee),b(ee,ae),b(F,oe),b(w,re),b(w,se),b(se,ne),b(se,me),b(me,ie),b(se,te),b(w,de),b(w,ue),b(ue,ce),b(w,pe),b(w,le),b(le,fe),b(le,ve),b(ve,ge),b(le,be),b(le,he),b(he,qe),b(le,je),b(w,ze),b(w,Ee),b(Ee,ke),b(w,xe),b(w,Pe),b(Pe,Oe),b(Oe,Re),b(Pe,Se),b(Pe,we),b(we,Te),b(Pe,Ne),b(Pe,Ge),b(Ge,ye),b(w,$e),b(w,He),b(He,Le),b(w,Me),b(w,Ie),b(Ie,Ae),b(Ae,Qe),b(Ie,De),b(Ie,Je),b(Je,Ce),b(Ie,Ue),b(Ie,Ve),b(Ve,We),b(Ie,Xe),b(Ie,Ye),b(Ye,Be),b(w,Ke),b(w,_e),b(_e,Fe),b(w,Ze),b(w,ea),b(ea,aa),b(w,oa),b(w,ra),b(ra,sa),b(ra,na),b(na,ma),b(ra,ia),b(w,ta),b(w,da),b(da,ua),b(da,ca),b(ca,pa),b(da,la),b(da,fa),b(fa,va),b(da,ga),b(w,ba),b(w,ha),b(ha,qa),b(w,ja),b(w,za),b(za,Ea),b(za,ka),b(ka,xa),b(w,Pa),b(w,Oa),b(Oa,Ra),b(w,Sa),b(w,wa),b(wa,Ta),b(w,Na),b(w,Ga),b(Ga,ya),b(Ga,$a),b($a,Ha),b(Ga,La),b(w,Ma),b(w,Ia),b(Ia,Aa),b(Ia,Qa),b(Qa,Da),b(Ia,Ja),b(Ia,Ca),b(Ca,Ua),b(Ia,Va),b(Ia,Wa),b(Wa,Xa),b(Ia,Ya),b(w,Ba),b(w,Ka),b(Ka,_a),b(Ka,Fa),b(Fa,Za),b(Ka,eo),b(w,ao),b(w,oo),b(oo,ro),b(w,so),b(w,no),b(no,mo),b(no,io),b(io,to),b(no,uo),b(no,co),b(co,po),b(no,lo),b(w,fo),b(w,vo),b(vo,go),b(w,bo),b(w,ho),b(ho,qo),b(ho,jo),b(jo,zo),b(ho,Eo),b(ho,ko),b(ko,xo),b(ho,Po),b(w,Oo),b(w,Ro),b(Ro,So),b(w,wo),b(w,To),b(To,No),b(To,Go),b(Go,yo),b(To,$o),b(To,Ho),b(Ho,Lo),b(Lo,Mo),b(To,Io),b(w,Ao),b(w,Qo),b(Qo,Do),b(w,Jo),b(w,Co),b(Co,Uo),b(w,Vo),b(w,Wo),b(Wo,Xo),b(Wo,Yo),b(Yo,Bo),b(Wo,Ko),b(Wo,_o),b(_o,Fo),b(Wo,Zo),b(Wo,er),b(er,ar),b(Wo,or),b(Wo,rr),b(rr,sr),b(Wo,nr),b(w,mr),b(w,ir),b(ir,tr),b(w,dr),b(w,ur),b(ur,cr),b(cr,pr),b(ur,lr),b(w,fr),b(w,vr),b(vr,gr),b(gr,br),b(vr,hr),b(vr,qr),b(qr,jr),b(vr,zr),b(w,Er),b(w,kr),b(kr,xr),b(w,Pr),b(w,Or),b(Or,Rr),b(w,Sr),b(w,wr),b(wr,Tr),b(wr,Nr),b(Nr,Gr),b(wr,yr),b(w,$r),b(w,Hr),b(Hr,Lr),b(w,Mr),b(w,Ir),b(Ir,Ar),b(w,Qr),b(w,Dr),b(Dr,Jr),b(Jr,Cr),b(Dr,Ur),b(Dr,Vr),b(Vr,Wr),b(Dr,Xr),b(Dr,Yr),b(Yr,Br),b(Dr,Kr),b(w,_r),b(w,Fr),b(w,Zr),b(w,es),b(es,as),b(es,os),b(os,rs),b(os,ss),b(ss,ns),b(es,ms),b(w,is),b(w,ts),b(ts,ds),e[2](w),us=!0},p(e,[a]){const o={};2&a&&(o.text=e[1]),R.$set(o)},i(e){us||(h(a.$$.fragment,e),h(R.$$.fragment,e),us=!0)},o(e){q(a.$$.fragment,e),q(R.$$.fragment,e),us=!1},d(r){j(a),r&&d(o),r&&d(z),r&&d(O),j(R,r),r&&d(S),r&&d(w),e[2](null)}}}function P(e,a,o){let r,s;return e.$$.update=()=>{1&e.$$.dirty&&o(1,s=r&&r.textContent)},[r,s,function(e){z[e?"unshift":"push"]((()=>{r=e,o(0,r)}))}]}export default class extends e{constructor(e){super(),a(this,e,P,x,o,{})}}

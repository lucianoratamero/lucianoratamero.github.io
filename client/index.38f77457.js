import{S as o,i as e,s as a,M as r,c as s,a as n,e as t,t as i,q as c,j as m,d,f as l,b as u,g as p,h as f,k as g,n as h,m as v,l as b,p as q,r as E,u as k,H as $}from"./client.311a5b93.js";import"./Icon.06acf308.js";import{M as j,P as x}from"./MetaTags.39c5eacd.js";import{H as y,y as w,d as P}from"./index.ec9d7c60.js";var L="/client/de8110e97a62ab01.jpg";function _(o){let e,a,$,_,z,A,O,C,D,R,H,I,G,M,T,N,S,F,U,K,B,J,Q,V,W,X,Y,Z,oo,eo,ao,ro,so,no,to,io,co,mo,lo,uo,po,fo,go,ho,vo,bo,qo,Eo,ko,$o,jo,xo,yo,wo,Po,Lo,_o,zo,Ao,Oo,Co,Do,Ro,Ho,Io,Go,Mo,To,No,So,Fo,Uo,Ko,Bo,Jo,Qo,Vo,Wo,Xo,Yo,Zo,oe,ee,ae,re,se,ne,te,ie,ce,me,de,le,ue,pe,fe,ge,he,ve,be,qe,Ee,ke,$e,je,xe,ye,we,Pe,Le,_e,ze,Ae,Oe,Ce,De,Re,He,Ie,Ge,Me,Te,Ne,Se,Fe,Ue,Ke,Be,Je,Qe,Ve,We,Xe,Ye,Ze,oa,ea,aa,ra,sa,na,ta,ia,ca,ma,da,la,ua,pa,fa,ga,ha,va,ba,qa,Ea,ka,$a,ja,xa,ya,wa,Pa,La,_a,za,Aa,Oa,Ca,Da,Ra,Ha,Ia,Ga,Ma,Ta,Na,Sa,Fa,Ua,Ka,Ba,Ja,Qa,Va,Wa;return e=new j({props:{title:"Lektor parte 2: deploy, macros, admin e plugins",description:"agora que já expliquei o básico de como utilizar o Lektor pra desenvolver seu site estático, vou começar a explicar alguns aspectos mais avançados. :]",keywords:"lektor, python, site estático, deploy, macros, admin, plugins"}}),O=new x({props:{date:"2016-02-03",text:o[1]}}),yo=new y({props:{language:w,code:r("\n[servers.ghpages]\ntarget = ghpages+https://lucianoratamero/blog\n")}}),So=new y({props:{language:P,code:r('\n{% macro render_blog_post(post, from_index=false) %}\n  <div class="blog-post">\n  {% if from_index %}\n    <h2><a href="{{ post|url }}">{{ post.title }}</a></h2>\n  {% else %}\n    <h2>{{ post.title }}</h2>\n  {% endif %}\n  <p class="meta">\n    {{ post.pub_date }}\n  </p>\n  {{ post.body }}\n  </div>\n{% endmacro %}\n')}}),Wo=new y({props:{language:P,code:r('\n{% extends "layout.html" %}\n{% from "macros/blog.html" import render_blog_post %}\n{% from "macros/pagination.html" import render_pagination %}\n\n{% block title %}\n  {% if this.title %}{{ this.title }}{% else %}olar{% endif %}\n{% endblock %}\n\n{% block body %}\n  {% for child in this.pagination.items %}\n    {{ render_blog_post(child, from_index=true) }}\n  {% endfor %}\n\n  {{ render_pagination(this.pagination) }}\n{% endblock %}\n')}}),na=new y({props:{language:w,code:r("\n[packages]\nlektor-disqus-comments = 0.1\n")}}),Ga=new y({props:{language:P,code:r('\n{% extends "layout.html" %}\n{% from "macros/blog.html" import render_blog_post %}\n{% block title %}{{ this.title }}{% endblock %}\n{% block tags %}{{ this.tags }}{% endblock %}\n{% block body %}\n  {{ render_blog_post(this) }}\n  <div class="comments">{{ render_disqus_comments() }}</div>\n{% endblock %}\n')}}),{c(){s(e.$$.fragment),a=n(),$=t("h1"),_=t("mark"),z=i("Lektor parte 2: deploy, macros, admin e plugins"),A=n(),s(O.$$.fragment),C=n(),D=t("article"),R=t("figure"),H=t("a"),I=t("img"),M=n(),T=t("p"),N=i("agora que já expliquei o básico de como utilizar o Lektor pra desenvolver\n    seu site estático, vou começar a explicar alguns aspectos mais avançados.\n    não pretendo ser muito detalhista, mas fiquem a vontade para pedir mais\n    informações nos comentários. aí vai!"),S=n(),F=t("hr"),U=n(),K=t("h3"),B=i("deploy"),J=n(),Q=t("p"),V=i("sim, o Lektor vem pronto para uma série de opções para deploy facilitado:\n    "),W=t("a"),X=i("rsync"),Y=i(",\n    "),Z=t("a"),oo=i("ftp"),eo=i(",\n    "),ao=t("a"),ro=i("github pages"),so=i("\n    e, via plugin,\n    "),no=t("a"),to=i("s3"),io=i(". isso significa que\n    basta ter um local remoto para manter seus arquivos estáticos que você tem\n    um site pronto, com deploy e tudo."),co=n(),mo=t("p"),lo=i("o deploy dele é facilmente configurado e bem inteligente, já que ele\n    verifica somente os arquivos que precisam ser alterados e os sobrescreve.\n    para configurar, basta seguir\n    "),uo=t("a"),po=i("a\n      documentação"),fo=i("\n    do método escolhido e rodar\n    "),go=t("code"),ho=i("lektor build lektor deploy"),vo=i(". esse processo garante que o Lektor\n    pegará a versão mais nova antes de sincronizar com o servidor."),bo=n(),qo=t("p"),Eo=i("no meu caso, foi só (juro que foi só isso) colocar o seguinte no meu arquivo\n    de projeto, o\n    "),ko=t("code"),$o=i("blog.lektorproject"),jo=i(":"),xo=n(),s(yo.$$.fragment),wo=n(),Po=t("p"),Lo=i("não cheguei a ver os outros, mas\n    "),_o=t("strong"),zo=i("duvido"),Ao=i("\n    que sejam muito mais complicados que isso."),Oo=n(),Co=t("h3"),Do=i("macros"),Ro=n(),Ho=t("p"),Io=i("quando você tiver brincado o suficiente com os modelos do Lektor, você vai\n    sentir falta de iteradores de template. um exemplo clássico é uma página de\n    resumo dos posts de um blog, como a que eu tenho na home desse aqui."),Go=n(),Mo=t("p"),To=i("pra isso, existem as macros. elas são templates com lógicas embutidas. mais\n    fácil de explicar mostrando um exemplo."),No=n(),s(So.$$.fragment),Fo=n(),Uo=t("p"),Ko=i("o papel dessa macro é receber um objeto\n    "),Bo=t("code"),Jo=i("post"),Qo=i("\n    e formatá-lo de acordo com o template. ele é usado pelo template de blog da\n    seguinte forma:"),Vo=n(),s(Wo.$$.fragment),Xo=n(),Yo=t("p"),Zo=i("vemos assim que só é necessário importar a macro criada e passar os objetos\n    corretos. pra saber quais objetos e como usá-los, é só dar uma olhada na\n    documentação da\n    "),oe=t("a"),ee=i("API de tratamento de dados"),ae=i("\n    do Lektor."),re=n(),se=t("h3"),ne=i("admin"),te=n(),ie=t("p"),ce=i("ah, sim, o Lektor, quando usado localmente, oferece uma interface\n    administrativa pra edição e criação de conteúdo. pra usá-la, basta rodar o\n    servidor com\n    "),me=t("code"),de=i("lektor server"),le=i(", acessar a página\n    "),ue=t("code"),pe=i("localhost:5000"),fe=i("\n    e clicar no ícone do lápis do canto da tela."),ge=n(),he=t("a"),ve=t("figure"),be=t("img"),Ee=n(),ke=t("p"),$e=i("isso te levará pra uma página do admin similar à essa:"),je=n(),xe=t("a"),ye=t("figure"),we=t("img"),Le=n(),_e=t("p"),ze=i("todas as alterações feitas nela refletirão nos seus arquivos do projeto e\n    vice-versa. fica na sua preferência utilizar a interface administrativa ou\n    editar os arquivos\n    "),Ae=t("code"),Oe=i("content.lr"),Ce=i("\n    diretamente. :) mais um pouco e já poderemos colocar isso na mão dos\n    próprios clientes!"),De=n(),Re=t("h3"),He=i("plugins"),Ie=n(),Ge=t("p"),Me=i("como o Lektor é bem documentado e extensível, ficou fácil pra (pequena)\n    comunidade criar plugins que adicionam novos comportamentos. vocês devem ter\n    notado que uso o disqus como plataforma de comentários, e não tive trabalho\n    quase nenhum pra colocá-lo no blog, quase nenhum\n    "),Te=t("strong"),Ne=i("mesmo"),Se=i("."),Fe=n(),Ue=t("p"),Ke=i("pra usar um plugin, é só procurar na\n    "),Be=t("a"),Je=i("página de plugins do\n      Lektor"),Qe=i("\n    o plugin que quer usar e seguir a própria documentação. vou demonstrar pra\n    vocês como foi fácil colocar o\n    "),Ve=t("a"),We=i("plugin de\n      comentários do disqus"),Xe=i("."),Ye=n(),Ze=t("p"),oa=i("o que eu fiz foi abrir o aquivo\n    "),ea=t("code"),aa=i("blog.lektorproject"),ra=i("\n    na raiz do meu projeto (o nome do arquivo varia com o nome do projeto) e\n    colocar as seguintes linhas:"),sa=n(),s(na.$$.fragment),ta=n(),ia=t("p"),ca=i("isso fez com que, quando eu rodasse\n    "),ma=t("code"),da=i("lektor server"),la=i("\n    ou\n    "),ua=t("code"),pa=i("lektor build"),fa=i(", ele detectasse minha intenção, instalasse as\n    dependências e ficasse pronto pra usar o plugin."),ga=n(),ha=t("p"),va=i("depois disso, fui no\n    "),ba=t("a"),qa=i("disqus"),Ea=i("\n    e criei uma comunidade pro blog (é bem autoexplicativo o processo, não me\n    demorou dois minutos)."),ka=n(),$a=t("p"),ja=i("com o nome da comunidade em mãos, criei uma pasta\n    "),xa=t("code"),ya=i("configs/"),wa=i("\n    na raiz do projeto com um arquivo\n    "),Pa=t("code"),La=i("disqus-comments.ini"),_a=i("\n    dentro. nesse arquivo, só precisei declarar o shortname da comunidade."),za=n(),Aa=t("pre"),Oa=t("code"),Ca=i("shortname = lucianoratamerosblog"),Da=n(),Ra=t("p"),Ha=i("com o disqus configurado, escolhi o template de blog-post pra habilitar os\n    comentários e os coloquei assim:"),Ia=n(),s(Ga.$$.fragment),Ma=n(),Ta=t("p"),Na=i("só precisei botar mesmo a div de comentários. daí foi recarregar a página e\n    voilá, tudo funcionando\n    "),Sa=t("strong"),Fa=i("lindamente"),Ua=i("."),Ka=n(),Ba=t("hr"),Ja=n(),Qa=t("p"),Va=i("enfim, espero ter abordado um pouco melhor alguns detalhes e features\n    interessantes do Lektor. caso tenham alguma pergunta ou dúvida, só mandarem\n    ver nos comentários. é isso por enquanto, minha gente, vejo vocês na\n    próxima! o/"),this.h()},l(o){const r=c('[data-svelte="svelte-f40f7d"]',document.head);m(e.$$.fragment,r),r.forEach(d),a=l(o),$=u(o,"H1",{});var s=p($);_=u(s,"MARK",{});var n=p(_);z=f(n,"Lektor parte 2: deploy, macros, admin e plugins"),n.forEach(d),s.forEach(d),A=l(o),m(O.$$.fragment,o),C=l(o),D=u(o,"ARTICLE",{});var t=p(D);R=u(t,"FIGURE",{});var i=p(R);H=u(i,"A",{target:!0,href:!0});var g=p(H);I=u(g,"IMG",{src:!0,alt:!0}),g.forEach(d),i.forEach(d),M=l(t),T=u(t,"P",{});var h=p(T);N=f(h,"agora que já expliquei o básico de como utilizar o Lektor pra desenvolver\n    seu site estático, vou começar a explicar alguns aspectos mais avançados.\n    não pretendo ser muito detalhista, mas fiquem a vontade para pedir mais\n    informações nos comentários. aí vai!"),h.forEach(d),S=l(t),F=u(t,"HR",{}),U=l(t),K=u(t,"H3",{});var v=p(K);B=f(v,"deploy"),v.forEach(d),J=l(t),Q=u(t,"P",{});var b=p(Q);V=f(b,"sim, o Lektor vem pronto para uma série de opções para deploy facilitado:\n    "),W=u(b,"A",{href:!0});var q=p(W);X=f(q,"rsync"),q.forEach(d),Y=f(b,",\n    "),Z=u(b,"A",{href:!0});var E=p(Z);oo=f(E,"ftp"),E.forEach(d),eo=f(b,",\n    "),ao=u(b,"A",{href:!0});var k=p(ao);ro=f(k,"github pages"),k.forEach(d),so=f(b,"\n    e, via plugin,\n    "),no=u(b,"A",{href:!0});var j=p(no);to=f(j,"s3"),j.forEach(d),io=f(b,". isso significa que\n    basta ter um local remoto para manter seus arquivos estáticos que você tem\n    um site pronto, com deploy e tudo."),b.forEach(d),co=l(t),mo=u(t,"P",{});var x=p(mo);lo=f(x,"o deploy dele é facilmente configurado e bem inteligente, já que ele\n    verifica somente os arquivos que precisam ser alterados e os sobrescreve.\n    para configurar, basta seguir\n    "),uo=u(x,"A",{href:!0});var y=p(uo);po=f(y,"a\n      documentação"),y.forEach(d),fo=f(x,"\n    do método escolhido e rodar\n    "),go=u(x,"CODE",{});var w=p(go);ho=f(w,"lektor build lektor deploy"),w.forEach(d),vo=f(x,". esse processo garante que o Lektor\n    pegará a versão mais nova antes de sincronizar com o servidor."),x.forEach(d),bo=l(t),qo=u(t,"P",{});var P=p(qo);Eo=f(P,"no meu caso, foi só (juro que foi só isso) colocar o seguinte no meu arquivo\n    de projeto, o\n    "),ko=u(P,"CODE",{});var L=p(ko);$o=f(L,"blog.lektorproject"),L.forEach(d),jo=f(P,":"),P.forEach(d),xo=l(t),m(yo.$$.fragment,t),wo=l(t),Po=u(t,"P",{});var G=p(Po);Lo=f(G,"não cheguei a ver os outros, mas\n    "),_o=u(G,"STRONG",{});var qe=p(_o);zo=f(qe,"duvido"),qe.forEach(d),Ao=f(G,"\n    que sejam muito mais complicados que isso."),G.forEach(d),Oo=l(t),Co=u(t,"H3",{});var Pe=p(Co);Do=f(Pe,"macros"),Pe.forEach(d),Ro=l(t),Ho=u(t,"P",{});var Wa=p(Ho);Io=f(Wa,"quando você tiver brincado o suficiente com os modelos do Lektor, você vai\n    sentir falta de iteradores de template. um exemplo clássico é uma página de\n    resumo dos posts de um blog, como a que eu tenho na home desse aqui."),Wa.forEach(d),Go=l(t),Mo=u(t,"P",{});var Xa=p(Mo);To=f(Xa,"pra isso, existem as macros. elas são templates com lógicas embutidas. mais\n    fácil de explicar mostrando um exemplo."),Xa.forEach(d),No=l(t),m(So.$$.fragment,t),Fo=l(t),Uo=u(t,"P",{});var Ya=p(Uo);Ko=f(Ya,"o papel dessa macro é receber um objeto\n    "),Bo=u(Ya,"CODE",{});var Za=p(Bo);Jo=f(Za,"post"),Za.forEach(d),Qo=f(Ya,"\n    e formatá-lo de acordo com o template. ele é usado pelo template de blog da\n    seguinte forma:"),Ya.forEach(d),Vo=l(t),m(Wo.$$.fragment,t),Xo=l(t),Yo=u(t,"P",{});var or=p(Yo);Zo=f(or,"vemos assim que só é necessário importar a macro criada e passar os objetos\n    corretos. pra saber quais objetos e como usá-los, é só dar uma olhada na\n    documentação da\n    "),oe=u(or,"A",{href:!0});var er=p(oe);ee=f(er,"API de tratamento de dados"),er.forEach(d),ae=f(or,"\n    do Lektor."),or.forEach(d),re=l(t),se=u(t,"H3",{});var ar=p(se);ne=f(ar,"admin"),ar.forEach(d),te=l(t),ie=u(t,"P",{});var rr=p(ie);ce=f(rr,"ah, sim, o Lektor, quando usado localmente, oferece uma interface\n    administrativa pra edição e criação de conteúdo. pra usá-la, basta rodar o\n    servidor com\n    "),me=u(rr,"CODE",{});var sr=p(me);de=f(sr,"lektor server"),sr.forEach(d),le=f(rr,", acessar a página\n    "),ue=u(rr,"CODE",{});var nr=p(ue);pe=f(nr,"localhost:5000"),nr.forEach(d),fe=f(rr,"\n    e clicar no ícone do lápis do canto da tela."),rr.forEach(d),ge=l(t),he=u(t,"A",{href:!0});var tr=p(he);ve=u(tr,"FIGURE",{});var ir=p(ve);be=u(ir,"IMG",{src:!0,alt:!0}),ir.forEach(d),tr.forEach(d),Ee=l(t),ke=u(t,"P",{});var cr=p(ke);$e=f(cr,"isso te levará pra uma página do admin similar à essa:"),cr.forEach(d),je=l(t),xe=u(t,"A",{href:!0});var mr=p(xe);ye=u(mr,"FIGURE",{});var dr=p(ye);we=u(dr,"IMG",{src:!0,alt:!0}),dr.forEach(d),mr.forEach(d),Le=l(t),_e=u(t,"P",{});var lr=p(_e);ze=f(lr,"todas as alterações feitas nela refletirão nos seus arquivos do projeto e\n    vice-versa. fica na sua preferência utilizar a interface administrativa ou\n    editar os arquivos\n    "),Ae=u(lr,"CODE",{});var ur=p(Ae);Oe=f(ur,"content.lr"),ur.forEach(d),Ce=f(lr,"\n    diretamente. :) mais um pouco e já poderemos colocar isso na mão dos\n    próprios clientes!"),lr.forEach(d),De=l(t),Re=u(t,"H3",{});var pr=p(Re);He=f(pr,"plugins"),pr.forEach(d),Ie=l(t),Ge=u(t,"P",{});var fr=p(Ge);Me=f(fr,"como o Lektor é bem documentado e extensível, ficou fácil pra (pequena)\n    comunidade criar plugins que adicionam novos comportamentos. vocês devem ter\n    notado que uso o disqus como plataforma de comentários, e não tive trabalho\n    quase nenhum pra colocá-lo no blog, quase nenhum\n    "),Te=u(fr,"STRONG",{});var gr=p(Te);Ne=f(gr,"mesmo"),gr.forEach(d),Se=f(fr,"."),fr.forEach(d),Fe=l(t),Ue=u(t,"P",{});var hr=p(Ue);Ke=f(hr,"pra usar um plugin, é só procurar na\n    "),Be=u(hr,"A",{href:!0});var vr=p(Be);Je=f(vr,"página de plugins do\n      Lektor"),vr.forEach(d),Qe=f(hr,"\n    o plugin que quer usar e seguir a própria documentação. vou demonstrar pra\n    vocês como foi fácil colocar o\n    "),Ve=u(hr,"A",{href:!0});var br=p(Ve);We=f(br,"plugin de\n      comentários do disqus"),br.forEach(d),Xe=f(hr,"."),hr.forEach(d),Ye=l(t),Ze=u(t,"P",{});var qr=p(Ze);oa=f(qr,"o que eu fiz foi abrir o aquivo\n    "),ea=u(qr,"CODE",{});var Er=p(ea);aa=f(Er,"blog.lektorproject"),Er.forEach(d),ra=f(qr,"\n    na raiz do meu projeto (o nome do arquivo varia com o nome do projeto) e\n    colocar as seguintes linhas:"),qr.forEach(d),sa=l(t),m(na.$$.fragment,t),ta=l(t),ia=u(t,"P",{});var kr=p(ia);ca=f(kr,"isso fez com que, quando eu rodasse\n    "),ma=u(kr,"CODE",{});var $r=p(ma);da=f($r,"lektor server"),$r.forEach(d),la=f(kr,"\n    ou\n    "),ua=u(kr,"CODE",{});var jr=p(ua);pa=f(jr,"lektor build"),jr.forEach(d),fa=f(kr,", ele detectasse minha intenção, instalasse as\n    dependências e ficasse pronto pra usar o plugin."),kr.forEach(d),ga=l(t),ha=u(t,"P",{});var xr=p(ha);va=f(xr,"depois disso, fui no\n    "),ba=u(xr,"A",{href:!0});var yr=p(ba);qa=f(yr,"disqus"),yr.forEach(d),Ea=f(xr,"\n    e criei uma comunidade pro blog (é bem autoexplicativo o processo, não me\n    demorou dois minutos)."),xr.forEach(d),ka=l(t),$a=u(t,"P",{});var wr=p($a);ja=f(wr,"com o nome da comunidade em mãos, criei uma pasta\n    "),xa=u(wr,"CODE",{});var Pr=p(xa);ya=f(Pr,"configs/"),Pr.forEach(d),wa=f(wr,"\n    na raiz do projeto com um arquivo\n    "),Pa=u(wr,"CODE",{});var Lr=p(Pa);La=f(Lr,"disqus-comments.ini"),Lr.forEach(d),_a=f(wr,"\n    dentro. nesse arquivo, só precisei declarar o shortname da comunidade."),wr.forEach(d),za=l(t),Aa=u(t,"PRE",{});var _r=p(Aa);Oa=u(_r,"CODE",{});var zr=p(Oa);Ca=f(zr,"shortname = lucianoratamerosblog"),zr.forEach(d),_r.forEach(d),Da=l(t),Ra=u(t,"P",{});var Ar=p(Ra);Ha=f(Ar,"com o disqus configurado, escolhi o template de blog-post pra habilitar os\n    comentários e os coloquei assim:"),Ar.forEach(d),Ia=l(t),m(Ga.$$.fragment,t),Ma=l(t),Ta=u(t,"P",{});var Or=p(Ta);Na=f(Or,"só precisei botar mesmo a div de comentários. daí foi recarregar a página e\n    voilá, tudo funcionando\n    "),Sa=u(Or,"STRONG",{});var Cr=p(Sa);Fa=f(Cr,"lindamente"),Cr.forEach(d),Ua=f(Or,"."),Or.forEach(d),Ka=l(t),Ba=u(t,"HR",{}),Ja=l(t),Qa=u(t,"P",{});var Dr=p(Qa);Va=f(Dr,"enfim, espero ter abordado um pouco melhor alguns detalhes e features\n    interessantes do Lektor. caso tenham alguma pergunta ou dúvida, só mandarem\n    ver nos comentários. é isso por enquanto, minha gente, vejo vocês na\n    próxima! o/"),Dr.forEach(d),t.forEach(d),this.h()},h(){I.src!==(G="/client/7f6171fa788e09ea.png")&&g(I,"src","/client/7f6171fa788e09ea.png"),g(I,"alt","Lektor's logo"),g(H,"target","_blank"),g(H,"href","https://getlektor.com/"),g(W,"href","https://www.getlektor.com/docs/deployment/rsync/"),g(Z,"href","https://www.getlektor.com/docs/deployment/ftp/"),g(ao,"href","https://www.getlektor.com/docs/deployment/ghpages/"),g(no,"href","https://github.com/spenczar/lektor-s3"),g(uo,"href","https://www.getlektor.com/docs/deployment/#lektor-assisted-deployments"),g(oe,"href","https://www.getlektor.com/docs/api/db/"),be.src!==(qe="/client/3d21ea6f427f981f.jpg")&&g(be,"src","/client/3d21ea6f427f981f.jpg"),g(be,"alt","Mostrando o link do admin no topo direito da tela"),g(he,"href","/client/3d21ea6f427f981f.jpg"),we.src!==(Pe=L)&&g(we,"src","/client/de8110e97a62ab01.jpg"),g(we,"alt","Exemplo de página de admin"),g(xe,"href",L),g(Be,"href","https://www.getlektor.com/docs/plugins/"),g(Ve,"href","https://github.com/lektor/lektor-disqus-comments"),g(ba,"href","https://publishers.disqus.com/engage?utm_source=Home-Nav")},m(r,s){h(e,document.head,null),v(r,a,s),v(r,$,s),b($,_),b(_,z),v(r,A,s),h(O,r,s),v(r,C,s),v(r,D,s),b(D,R),b(R,H),b(H,I),b(D,M),b(D,T),b(T,N),b(D,S),b(D,F),b(D,U),b(D,K),b(K,B),b(D,J),b(D,Q),b(Q,V),b(Q,W),b(W,X),b(Q,Y),b(Q,Z),b(Z,oo),b(Q,eo),b(Q,ao),b(ao,ro),b(Q,so),b(Q,no),b(no,to),b(Q,io),b(D,co),b(D,mo),b(mo,lo),b(mo,uo),b(uo,po),b(mo,fo),b(mo,go),b(go,ho),b(mo,vo),b(D,bo),b(D,qo),b(qo,Eo),b(qo,ko),b(ko,$o),b(qo,jo),b(D,xo),h(yo,D,null),b(D,wo),b(D,Po),b(Po,Lo),b(Po,_o),b(_o,zo),b(Po,Ao),b(D,Oo),b(D,Co),b(Co,Do),b(D,Ro),b(D,Ho),b(Ho,Io),b(D,Go),b(D,Mo),b(Mo,To),b(D,No),h(So,D,null),b(D,Fo),b(D,Uo),b(Uo,Ko),b(Uo,Bo),b(Bo,Jo),b(Uo,Qo),b(D,Vo),h(Wo,D,null),b(D,Xo),b(D,Yo),b(Yo,Zo),b(Yo,oe),b(oe,ee),b(Yo,ae),b(D,re),b(D,se),b(se,ne),b(D,te),b(D,ie),b(ie,ce),b(ie,me),b(me,de),b(ie,le),b(ie,ue),b(ue,pe),b(ie,fe),b(D,ge),b(D,he),b(he,ve),b(ve,be),b(D,Ee),b(D,ke),b(ke,$e),b(D,je),b(D,xe),b(xe,ye),b(ye,we),b(D,Le),b(D,_e),b(_e,ze),b(_e,Ae),b(Ae,Oe),b(_e,Ce),b(D,De),b(D,Re),b(Re,He),b(D,Ie),b(D,Ge),b(Ge,Me),b(Ge,Te),b(Te,Ne),b(Ge,Se),b(D,Fe),b(D,Ue),b(Ue,Ke),b(Ue,Be),b(Be,Je),b(Ue,Qe),b(Ue,Ve),b(Ve,We),b(Ue,Xe),b(D,Ye),b(D,Ze),b(Ze,oa),b(Ze,ea),b(ea,aa),b(Ze,ra),b(D,sa),h(na,D,null),b(D,ta),b(D,ia),b(ia,ca),b(ia,ma),b(ma,da),b(ia,la),b(ia,ua),b(ua,pa),b(ia,fa),b(D,ga),b(D,ha),b(ha,va),b(ha,ba),b(ba,qa),b(ha,Ea),b(D,ka),b(D,$a),b($a,ja),b($a,xa),b(xa,ya),b($a,wa),b($a,Pa),b(Pa,La),b($a,_a),b(D,za),b(D,Aa),b(Aa,Oa),b(Oa,Ca),b(D,Da),b(D,Ra),b(Ra,Ha),b(D,Ia),h(Ga,D,null),b(D,Ma),b(D,Ta),b(Ta,Na),b(Ta,Sa),b(Sa,Fa),b(Ta,Ua),b(D,Ka),b(D,Ba),b(D,Ja),b(D,Qa),b(Qa,Va),o[2](D),Wa=!0},p(o,[e]){const a={};2&e&&(a.text=o[1]),O.$set(a)},i(o){Wa||(q(e.$$.fragment,o),q(O.$$.fragment,o),q(yo.$$.fragment,o),q(So.$$.fragment,o),q(Wo.$$.fragment,o),q(na.$$.fragment,o),q(Ga.$$.fragment,o),Wa=!0)},o(o){E(e.$$.fragment,o),E(O.$$.fragment,o),E(yo.$$.fragment,o),E(So.$$.fragment,o),E(Wo.$$.fragment,o),E(na.$$.fragment,o),E(Ga.$$.fragment,o),Wa=!1},d(r){k(e),r&&d(a),r&&d($),r&&d(A),k(O,r),r&&d(C),r&&d(D),k(yo),k(So),k(Wo),k(na),k(Ga),o[2](null)}}}function z(o,e,a){let r,s;return o.$$.update=()=>{1&o.$$.dirty&&a(1,s=r&&r.textContent)},[r,s,function(o){$[o?"unshift":"push"]((()=>{r=o,a(0,r)}))}]}export default class extends o{constructor(o){super(),e(this,o,z,_,a,{})}}

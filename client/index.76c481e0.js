import{S as e,i as t,s as a,E as o,w as n,F as r,G as s,c as i,e as h,x as c,d as l,H as d,k as u,I as m,g as f,n as g}from"./client.ba4c128a.js";import{c as p,i as v,a as w,b,d as y}from"./4-registering-component.61f1b1f9.js";function E(e){let t,a,E,k,I,x,T,P,A,C,O,H,q,W,L,D,R,S,j,G,M,B,N,F,U,K,z,Y,J,Q,V,X,Z,$,_,ee,te,ae,oe,ne,re,se,ie,he,ce,le,de,ue,me,fe,ge,pe,ve,we,be,ye,Ee,ke,Ie,xe,Te,Pe,Ae,Ce,Oe,He,qe,We,Le,De,Re,Se,je,Ge,Me,Be,Ne,Fe,Ue,Ke,ze,Ye,Je,Qe,Ve,Xe,Ze,$e,_e,et,tt,at,ot,nt,rt,st,it,ht,ct,lt,dt,ut,mt,ft,gt,pt,vt,wt,bt,yt,Et,kt,It,xt,Tt,Pt,At,Ct,Ot,Ht,qt,Wt,Lt,Dt,Rt,St,jt,Gt,Mt,Bt,Nt,Ft,Ut,Kt,zt,Yt,Jt,Qt,Vt,Xt,Zt,$t,_t,ea,ta,aa,oa,na,ra,sa,ia,ha,ca,la,da,ua,ma,fa,ga,pa,va,wa,ba,ya,Ea,ka,Ia,xa,Ta,Pa,Aa,Ca,Oa,Ha,qa,Wa;return{c(){t=o("meta"),a=o("meta"),E=n(),k=o("h1"),I=o("mark"),x=r("Keeping global state management sane with rel-events"),T=n(),P=o("p"),A=r("2019-10-19"),C=n(),O=o("figure"),H=o("img"),W=n(),L=o("p"),D=r("Maintaining a big and complex react app is not for amateurs. Whatever you may\n  choose to manage your app state, chances are that it's hard to pick up, like\n  redux, or really convoluted, like making yourself a service layer. With the\n  goal of making it easy for new developers to jump into our projects, we at\n  Labcodes decided it was time to give this problem a little more thought. Our\n  answer was\n  "),R=o("a"),S=r("rel-events"),j=r("."),G=n(),M=o("h2"),B=r("Why another library to manage states?"),N=n(),F=o("p"),U=o("a"),K=o("img"),Y=n(),J=o("p"),Q=r("Whenever I think of making something new and shiny, this xkcd strip comes to\n  haunt me. Believe me, I don't want to be the kind of person that does\n  everything themselves, and that's one of my grievances with the fork\n  mentality. However, it was about time I did something to address a pesky\n  problem I deal with daily: using whatever library to separate business logic\n  from react components."),V=n(),X=o("p"),Z=r("At the end of the day, after much thought, I always end up surrendering and\n  running\n  "),$=o("code"),_=r("npm install redux react-redux --save"),ee=r(". I even shared my basic\n  tools to deal with redux on our\n  "),te=o("a"),ae=o("code"),oe=r("react-redux-api-tools"),ne=r("\n  package."),re=n(),se=o("p"),ie=r("And by no means I hate redux; in fact, I love it. It gets the job done, it's\n  ultra flexible, with low side effects. But let's be frank here: the discomfort\n  of reading\n  "),he=o("code"),ce=r("mapStateToProps"),le=r("\n  for the first time is\n  "),de=o("strong"),ue=r("real"),me=r(". It took me a long while to properly understand what was\n  going on. Then there are actions, action creators, reducers, dispatches and\n  middlewares, and sagas, and async dispatches; it's neverending."),fe=n(),ge=o("p"),pe=r("After those confusing and long first months, things started to get easier, but\n  way,\n  "),ve=o("strong"),we=r("way"),be=r("\n  too verbose. I always thought that redux felt a lower level tool, and that I\n  was always in need of specifying, step by step, exactly and strictly what and\n  how things should be done. No abstraction at all. A lot of copy and paste,\n  though."),ye=n(),Ee=o("p"),ke=r("I came to the conclusion that it would be nice to have all the features I\n  would like in my redux configuration - a proper HTTP request flow, less\n  repetition, meaningful connection between actions and reducers -, without\n  sacrificing anything. I got the green light to develop internally a solution\n  for that:\n  "),Ie=o("code"),xe=r("rel-events"),Te=r("."),Pe=n(),Ae=o("h2"),Ce=r("Cool, but what's "),Oe=o("code"),He=r("rel-events"),qe=r("?"),We=n(),Le=o("p"),De=o("code"),Re=r("rel-events"),Se=r("\n  is a React Events Library that takes the concept of events, present in redux,\n  to a higher level of abstraction. It's a thin layer over redux that enables\n  you to stop thinking about actions, reducers, stores and middlewares, so you\n  can focus on what needs to be done: executing domain logic reactively when\n  events pop up."),je=n(),Ge=o("p"),Me=r("To do that, let's imagine a simple scenario: we need to enable a user to log\n  into our app."),Be=n(),Ne=o("p"),Fe=r("You could do the whole request flow inside your components, but\n  "),Ue=o("a"),Ke=r("as\n    we stated on our previous blog post"),ze=r(", we don't really recommend doing\n  that - it always ends up messy. We could use redux, but then our junior\n  developers would need to pass that\n  "),Ye=o("code"),Je=r("mapStateToProps"),Qe=r("\n  hurdle, and sometimes we don't have the luxury of taking our time. We could\n  use sagas, but then redux is back with a vengeance."),Ve=n(),Xe=o("p"),Ze=r("Now, forget about actions and reducers and imagine we have an object called\n  LoginEvent. Whenever we call it passing an email and password, things get done\n  and data comes through to the component. Imagine you don't need to know\n  anything but its name. No reducers, no actions, no\n  "),$e=o("code"),_e=r("connect"),et=r("\n  or\n  "),tt=o("code"),at=r("mapStateToProps"),ot=r(". It would be something like this:"),nt=n(),rt=o("figure"),st=o("img"),ht=n(),ct=o("p"),lt=r("Cool, but what about the whole behavior? Where's the logic to make the\n  request? How to deal with bad requests? Let's say, besides the Event, we have\n  something that manages the event flow, an Event Manager:"),dt=n(),ut=o("figure"),mt=o("img"),gt=n(),pt=o("p"),vt=r("That's better. But how is this manager implemented? Because, if it needs to\n  deal with the event flow, it needs to do a lot of stuff: know how to make the\n  request and what to do when the request succeeds or fails. Oh, and we need an\n  intermediary state, because we love loading spinners! Hell, I forgot about the\n  inital state of the event as well! Ok, ok, let's see:"),wt=n(),bt=o("figure"),yt=o("img"),kt=n(),It=o("p"),xt=r("That's about it, right? But, hey, how do we trigger it? And how do I make the\n  Event register which Components are able to trigger it? How does the component\n  get the data from it? We're almost there:"),Tt=n(),Pt=o("figure"),At=o("img"),Ot=n(),Ht=o("p"),qt=r("And that's exactly the current API for a HTTPEvent from\n  "),Wt=o("code"),Lt=r("rel-events"),Dt=r(". No actions, no reducers, no coupling between the\n  logic and the component layers, nothing. Of course, it needs some\n  configuration to hook it up with redux, but it's mostly a one time setup, very\n  well documented\n  "),Rt=o("a"),St=r("in our docs"),jt=r("."),Gt=n(),Mt=o("h2"),Bt=r("That sounds... nice! But what about features? I want features!"),Nt=n(),Ft=o("p"),Ut=r("With our current beta version (0.1.3 as of September 2019), you're able to:"),Kt=n(),zt=o("ul"),Yt=o("li"),Jt=r("use a basic Event type (for the times you don't need to make HTTP requests);"),Qt=n(),Vt=o("li"),Xt=r("chain Events/HTTPEvents (useful for fetching more data when a request is\n    done);"),Zt=n(),$t=o("li"),_t=r("have multiple Events registering to the same Component (you'll probably have\n    a Component that needs to listen to multiple Events);"),ea=n(),ta=o("li"),aa=r("execute code after dispatching an Event (with\n    "),oa=o("code"),na=r("afterDispatch"),ra=r(");"),sa=n(),ia=o("li"),ha=r("execute code after a request is successful (with\n    "),ca=o("code"),la=r("afterSuccess"),da=r(");"),ua=n(),ma=o("li"),fa=r("execute code after a request has failed (with\n    "),ga=o("code"),pa=r("afterFailure"),va=r(");"),wa=n(),ba=o("li"),ya=r("evaluate if an event should be dispatched or not (with the\n    "),Ea=o("code"),ka=r("shouldDispatch"),Ia=r("\n    method)."),xa=n(),Ta=o("p"),Pa=r("And more! All that without the cognitive burden, the crazy constants, the\n  store names and all the bad developer experience from redux. The best part: no\n  huge learning curve. This post has basically all you need to know to use our\n  lib. Really."),Aa=n(),Ca=o("p"),Oa=r("So if you liked it,\n  "),Ha=o("a"),qa=r("take a look at our github\n    repo"),Wa=r("\n  to get started and share the love! Thanks for your attention, and see you next\n  time!"),this.h()},l(e){const o=s('[data-svelte="svelte-18ccvxm"]',document.head);t=i(o,"META",{name:!0,content:!0}),a=i(o,"META",{name:!0,content:!0}),o.forEach(h),E=c(e),k=i(e,"H1",{});var n=l(k);I=i(n,"MARK",{});var r=l(I);x=d(r,"Keeping global state management sane with rel-events"),r.forEach(h),n.forEach(h),T=c(e),P=i(e,"P",{class:!0});var u=l(P);A=d(u,"2019-10-19"),u.forEach(h),C=c(e),O=i(e,"FIGURE",{});var m=l(O);H=i(m,"IMG",{src:!0,alt:!0}),m.forEach(h),W=c(e),L=i(e,"P",{});var f=l(L);D=d(f,"Maintaining a big and complex react app is not for amateurs. Whatever you may\n  choose to manage your app state, chances are that it's hard to pick up, like\n  redux, or really convoluted, like making yourself a service layer. With the\n  goal of making it easy for new developers to jump into our projects, we at\n  Labcodes decided it was time to give this problem a little more thought. Our\n  answer was\n  "),R=i(f,"A",{href:!0});var g=l(R);S=d(g,"rel-events"),g.forEach(h),j=d(f,"."),f.forEach(h),G=c(e),M=i(e,"H2",{});var p=l(M);B=d(p,"Why another library to manage states?"),p.forEach(h),N=c(e),F=i(e,"P",{});var v=l(F);U=i(v,"A",{href:!0});var w=l(U);K=i(w,"IMG",{src:!0,alt:!0}),w.forEach(h),v.forEach(h),Y=c(e),J=i(e,"P",{});var b=l(J);Q=d(b,"Whenever I think of making something new and shiny, this xkcd strip comes to\n  haunt me. Believe me, I don't want to be the kind of person that does\n  everything themselves, and that's one of my grievances with the fork\n  mentality. However, it was about time I did something to address a pesky\n  problem I deal with daily: using whatever library to separate business logic\n  from react components."),b.forEach(h),V=c(e),X=i(e,"P",{});var y=l(X);Z=d(y,"At the end of the day, after much thought, I always end up surrendering and\n  running\n  "),$=i(y,"CODE",{});var q=l($);_=d(q,"npm install redux react-redux --save"),q.forEach(h),ee=d(y,". I even shared my basic\n  tools to deal with redux on our\n  "),te=i(y,"A",{href:!0});var z=l(te);ae=i(z,"CODE",{});var it=l(ae);oe=d(it,"react-redux-api-tools"),it.forEach(h),z.forEach(h),ne=d(y,"\n  package."),y.forEach(h),re=c(e),se=i(e,"P",{});var ft=l(se);ie=d(ft,"And by no means I hate redux; in fact, I love it. It gets the job done, it's\n  ultra flexible, with low side effects. But let's be frank here: the discomfort\n  of reading\n  "),he=i(ft,"CODE",{});var Et=l(he);ce=d(Et,"mapStateToProps"),Et.forEach(h),le=d(ft,"\n  for the first time is\n  "),de=i(ft,"STRONG",{});var Ct=l(de);ue=d(Ct,"real"),Ct.forEach(h),me=d(ft,". It took me a long while to properly understand what was\n  going on. Then there are actions, action creators, reducers, dispatches and\n  middlewares, and sagas, and async dispatches; it's neverending."),ft.forEach(h),fe=c(e),ge=i(e,"P",{});var La=l(ge);pe=d(La,"After those confusing and long first months, things started to get easier, but\n  way,\n  "),ve=i(La,"STRONG",{});var Da=l(ve);we=d(Da,"way"),Da.forEach(h),be=d(La,"\n  too verbose. I always thought that redux felt a lower level tool, and that I\n  was always in need of specifying, step by step, exactly and strictly what and\n  how things should be done. No abstraction at all. A lot of copy and paste,\n  though."),La.forEach(h),ye=c(e),Ee=i(e,"P",{});var Ra=l(Ee);ke=d(Ra,"I came to the conclusion that it would be nice to have all the features I\n  would like in my redux configuration - a proper HTTP request flow, less\n  repetition, meaningful connection between actions and reducers -, without\n  sacrificing anything. I got the green light to develop internally a solution\n  for that:\n  "),Ie=i(Ra,"CODE",{});var Sa=l(Ie);xe=d(Sa,"rel-events"),Sa.forEach(h),Te=d(Ra,"."),Ra.forEach(h),Pe=c(e),Ae=i(e,"H2",{});var ja=l(Ae);Ce=d(ja,"Cool, but what's "),Oe=i(ja,"CODE",{});var Ga=l(Oe);He=d(Ga,"rel-events"),Ga.forEach(h),qe=d(ja,"?"),ja.forEach(h),We=c(e),Le=i(e,"P",{});var Ma=l(Le);De=i(Ma,"CODE",{});var Ba=l(De);Re=d(Ba,"rel-events"),Ba.forEach(h),Se=d(Ma,"\n  is a React Events Library that takes the concept of events, present in redux,\n  to a higher level of abstraction. It's a thin layer over redux that enables\n  you to stop thinking about actions, reducers, stores and middlewares, so you\n  can focus on what needs to be done: executing domain logic reactively when\n  events pop up."),Ma.forEach(h),je=c(e),Ge=i(e,"P",{});var Na=l(Ge);Me=d(Na,"To do that, let's imagine a simple scenario: we need to enable a user to log\n  into our app."),Na.forEach(h),Be=c(e),Ne=i(e,"P",{});var Fa=l(Ne);Fe=d(Fa,"You could do the whole request flow inside your components, but\n  "),Ue=i(Fa,"A",{href:!0});var Ua=l(Ue);Ke=d(Ua,"as\n    we stated on our previous blog post"),Ua.forEach(h),ze=d(Fa,", we don't really recommend doing\n  that - it always ends up messy. We could use redux, but then our junior\n  developers would need to pass that\n  "),Ye=i(Fa,"CODE",{});var Ka=l(Ye);Je=d(Ka,"mapStateToProps"),Ka.forEach(h),Qe=d(Fa,"\n  hurdle, and sometimes we don't have the luxury of taking our time. We could\n  use sagas, but then redux is back with a vengeance."),Fa.forEach(h),Ve=c(e),Xe=i(e,"P",{});var za=l(Xe);Ze=d(za,"Now, forget about actions and reducers and imagine we have an object called\n  LoginEvent. Whenever we call it passing an email and password, things get done\n  and data comes through to the component. Imagine you don't need to know\n  anything but its name. No reducers, no actions, no\n  "),$e=i(za,"CODE",{});var Ya=l($e);_e=d(Ya,"connect"),Ya.forEach(h),et=d(za,"\n  or\n  "),tt=i(za,"CODE",{});var Ja=l(tt);at=d(Ja,"mapStateToProps"),Ja.forEach(h),ot=d(za,". It would be something like this:"),za.forEach(h),nt=c(e),rt=i(e,"FIGURE",{});var Qa=l(rt);st=i(Qa,"IMG",{src:!0,alt:!0}),Qa.forEach(h),ht=c(e),ct=i(e,"P",{});var Va=l(ct);lt=d(Va,"Cool, but what about the whole behavior? Where's the logic to make the\n  request? How to deal with bad requests? Let's say, besides the Event, we have\n  something that manages the event flow, an Event Manager:"),Va.forEach(h),dt=c(e),ut=i(e,"FIGURE",{});var Xa=l(ut);mt=i(Xa,"IMG",{src:!0,alt:!0}),Xa.forEach(h),gt=c(e),pt=i(e,"P",{});var Za=l(pt);vt=d(Za,"That's better. But how is this manager implemented? Because, if it needs to\n  deal with the event flow, it needs to do a lot of stuff: know how to make the\n  request and what to do when the request succeeds or fails. Oh, and we need an\n  intermediary state, because we love loading spinners! Hell, I forgot about the\n  inital state of the event as well! Ok, ok, let's see:"),Za.forEach(h),wt=c(e),bt=i(e,"FIGURE",{});var $a=l(bt);yt=i($a,"IMG",{src:!0,alt:!0}),$a.forEach(h),kt=c(e),It=i(e,"P",{});var _a=l(It);xt=d(_a,"That's about it, right? But, hey, how do we trigger it? And how do I make the\n  Event register which Components are able to trigger it? How does the component\n  get the data from it? We're almost there:"),_a.forEach(h),Tt=c(e),Pt=i(e,"FIGURE",{});var eo=l(Pt);At=i(eo,"IMG",{src:!0,alt:!0}),eo.forEach(h),Ot=c(e),Ht=i(e,"P",{});var to=l(Ht);qt=d(to,"And that's exactly the current API for a HTTPEvent from\n  "),Wt=i(to,"CODE",{});var ao=l(Wt);Lt=d(ao,"rel-events"),ao.forEach(h),Dt=d(to,". No actions, no reducers, no coupling between the\n  logic and the component layers, nothing. Of course, it needs some\n  configuration to hook it up with redux, but it's mostly a one time setup, very\n  well documented\n  "),Rt=i(to,"A",{href:!0});var oo=l(Rt);St=d(oo,"in our docs"),oo.forEach(h),jt=d(to,"."),to.forEach(h),Gt=c(e),Mt=i(e,"H2",{});var no=l(Mt);Bt=d(no,"That sounds... nice! But what about features? I want features!"),no.forEach(h),Nt=c(e),Ft=i(e,"P",{});var ro=l(Ft);Ut=d(ro,"With our current beta version (0.1.3 as of September 2019), you're able to:"),ro.forEach(h),Kt=c(e),zt=i(e,"UL",{});var so=l(zt);Yt=i(so,"LI",{});var io=l(Yt);Jt=d(io,"use a basic Event type (for the times you don't need to make HTTP requests);"),io.forEach(h),Qt=c(so),Vt=i(so,"LI",{});var ho=l(Vt);Xt=d(ho,"chain Events/HTTPEvents (useful for fetching more data when a request is\n    done);"),ho.forEach(h),Zt=c(so),$t=i(so,"LI",{});var co=l($t);_t=d(co,"have multiple Events registering to the same Component (you'll probably have\n    a Component that needs to listen to multiple Events);"),co.forEach(h),ea=c(so),ta=i(so,"LI",{});var lo=l(ta);aa=d(lo,"execute code after dispatching an Event (with\n    "),oa=i(lo,"CODE",{});var uo=l(oa);na=d(uo,"afterDispatch"),uo.forEach(h),ra=d(lo,");"),lo.forEach(h),sa=c(so),ia=i(so,"LI",{});var mo=l(ia);ha=d(mo,"execute code after a request is successful (with\n    "),ca=i(mo,"CODE",{});var fo=l(ca);la=d(fo,"afterSuccess"),fo.forEach(h),da=d(mo,");"),mo.forEach(h),ua=c(so),ma=i(so,"LI",{});var go=l(ma);fa=d(go,"execute code after a request has failed (with\n    "),ga=i(go,"CODE",{});var po=l(ga);pa=d(po,"afterFailure"),po.forEach(h),va=d(go,");"),go.forEach(h),wa=c(so),ba=i(so,"LI",{});var vo=l(ba);ya=d(vo,"evaluate if an event should be dispatched or not (with the\n    "),Ea=i(vo,"CODE",{});var wo=l(Ea);ka=d(wo,"shouldDispatch"),wo.forEach(h),Ia=d(vo,"\n    method)."),vo.forEach(h),so.forEach(h),xa=c(e),Ta=i(e,"P",{});var bo=l(Ta);Pa=d(bo,"And more! All that without the cognitive burden, the crazy constants, the\n  store names and all the bad developer experience from redux. The best part: no\n  huge learning curve. This post has basically all you need to know to use our\n  lib. Really."),bo.forEach(h),Aa=c(e),Ca=i(e,"P",{});var yo=l(Ca);Oa=d(yo,"So if you liked it,\n  "),Ha=i(yo,"A",{href:!0});var Eo=l(Ha);qa=d(Eo,"take a look at our github\n    repo"),Eo.forEach(h),Wa=d(yo,"\n  to get started and share the love! Thanks for your attention, and see you next\n  time!"),yo.forEach(h),this.h()},h(){document.title="\n    Keeping global state management sane with rel-events - luciano@ratamero.com\n  ",u(t,"name","description"),u(t,"content","In this post, we'll discuss how to use rel-events to keep your React app's state sane :]"),u(a,"name","keywords"),u(a,"content","Luciano Ratamero, rel-events, react, redux, big projects, architecture, planning, frontend, javascript, frameworks"),u(P,"class","meta"),H.src!==(q=p)&&u(H,"src",q),u(H,"alt","Logos from React and Redux"),u(R,"href","https://github.com/labcodes/rel-events"),K.src!==(z="https://imgs.xkcd.com/comics/standards.png")&&u(K,"src","https://imgs.xkcd.com/comics/standards.png"),u(K,"alt","xkcd is always right"),u(U,"href","https://xkcd.com/927/"),u(te,"href","https://github.com/labcodes/react-redux-api-tools/"),u(Ue,"href","https://labcodes.com.br/blog/en/decoupling-logic-from-react-components.html"),st.src!==(it=v)&&u(st,"src",it),u(st,"alt","Imaginary Event"),mt.src!==(ft=w)&&u(mt,"src",ft),u(mt,"alt","Basic rel-events HTTPEvent"),yt.src!==(Et=b)&&u(yt,"src",Et),u(yt,"alt","LoginEventManager"),At.src!==(Ct=y)&&u(At,"src",Ct),u(At,"alt","Registering the component"),u(Rt,"href","https://github.com/labcodes/rel-events/tree/master/docs"),u(Ha,"href","https://github.com/labcodes/rel-events")},m(e,o){m(document.head,t),m(document.head,a),f(e,E,o),f(e,k,o),m(k,I),m(I,x),f(e,T,o),f(e,P,o),m(P,A),f(e,C,o),f(e,O,o),m(O,H),f(e,W,o),f(e,L,o),m(L,D),m(L,R),m(R,S),m(L,j),f(e,G,o),f(e,M,o),m(M,B),f(e,N,o),f(e,F,o),m(F,U),m(U,K),f(e,Y,o),f(e,J,o),m(J,Q),f(e,V,o),f(e,X,o),m(X,Z),m(X,$),m($,_),m(X,ee),m(X,te),m(te,ae),m(ae,oe),m(X,ne),f(e,re,o),f(e,se,o),m(se,ie),m(se,he),m(he,ce),m(se,le),m(se,de),m(de,ue),m(se,me),f(e,fe,o),f(e,ge,o),m(ge,pe),m(ge,ve),m(ve,we),m(ge,be),f(e,ye,o),f(e,Ee,o),m(Ee,ke),m(Ee,Ie),m(Ie,xe),m(Ee,Te),f(e,Pe,o),f(e,Ae,o),m(Ae,Ce),m(Ae,Oe),m(Oe,He),m(Ae,qe),f(e,We,o),f(e,Le,o),m(Le,De),m(De,Re),m(Le,Se),f(e,je,o),f(e,Ge,o),m(Ge,Me),f(e,Be,o),f(e,Ne,o),m(Ne,Fe),m(Ne,Ue),m(Ue,Ke),m(Ne,ze),m(Ne,Ye),m(Ye,Je),m(Ne,Qe),f(e,Ve,o),f(e,Xe,o),m(Xe,Ze),m(Xe,$e),m($e,_e),m(Xe,et),m(Xe,tt),m(tt,at),m(Xe,ot),f(e,nt,o),f(e,rt,o),m(rt,st),f(e,ht,o),f(e,ct,o),m(ct,lt),f(e,dt,o),f(e,ut,o),m(ut,mt),f(e,gt,o),f(e,pt,o),m(pt,vt),f(e,wt,o),f(e,bt,o),m(bt,yt),f(e,kt,o),f(e,It,o),m(It,xt),f(e,Tt,o),f(e,Pt,o),m(Pt,At),f(e,Ot,o),f(e,Ht,o),m(Ht,qt),m(Ht,Wt),m(Wt,Lt),m(Ht,Dt),m(Ht,Rt),m(Rt,St),m(Ht,jt),f(e,Gt,o),f(e,Mt,o),m(Mt,Bt),f(e,Nt,o),f(e,Ft,o),m(Ft,Ut),f(e,Kt,o),f(e,zt,o),m(zt,Yt),m(Yt,Jt),m(zt,Qt),m(zt,Vt),m(Vt,Xt),m(zt,Zt),m(zt,$t),m($t,_t),m(zt,ea),m(zt,ta),m(ta,aa),m(ta,oa),m(oa,na),m(ta,ra),m(zt,sa),m(zt,ia),m(ia,ha),m(ia,ca),m(ca,la),m(ia,da),m(zt,ua),m(zt,ma),m(ma,fa),m(ma,ga),m(ga,pa),m(ma,va),m(zt,wa),m(zt,ba),m(ba,ya),m(ba,Ea),m(Ea,ka),m(ba,Ia),f(e,xa,o),f(e,Ta,o),m(Ta,Pa),f(e,Aa,o),f(e,Ca,o),m(Ca,Oa),m(Ca,Ha),m(Ha,qa),m(Ca,Wa)},p:g,i:g,o:g,d(e){h(t),h(a),e&&h(E),e&&h(k),e&&h(T),e&&h(P),e&&h(C),e&&h(O),e&&h(W),e&&h(L),e&&h(G),e&&h(M),e&&h(N),e&&h(F),e&&h(Y),e&&h(J),e&&h(V),e&&h(X),e&&h(re),e&&h(se),e&&h(fe),e&&h(ge),e&&h(ye),e&&h(Ee),e&&h(Pe),e&&h(Ae),e&&h(We),e&&h(Le),e&&h(je),e&&h(Ge),e&&h(Be),e&&h(Ne),e&&h(Ve),e&&h(Xe),e&&h(nt),e&&h(rt),e&&h(ht),e&&h(ct),e&&h(dt),e&&h(ut),e&&h(gt),e&&h(pt),e&&h(wt),e&&h(bt),e&&h(kt),e&&h(It),e&&h(Tt),e&&h(Pt),e&&h(Ot),e&&h(Ht),e&&h(Gt),e&&h(Mt),e&&h(Nt),e&&h(Ft),e&&h(Kt),e&&h(zt),e&&h(xa),e&&h(Ta),e&&h(Aa),e&&h(Ca)}}}export default class extends e{constructor(e){super(),t(this,e,null,E,a,{})}}

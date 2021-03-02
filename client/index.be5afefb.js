import{S as e,i as t,s as n,M as o,c as a,a as s,e as r,t as i,q as d,j as c,d as l,f as h,b as u,g as p,h as f,k as m,n as g,m as w,l as v,p as b,r as y,u as E,H as x}from"./client.311a5b93.js";import"./Icon.06acf308.js";import{M as $,P as k}from"./MetaTags.39c5eacd.js";import{H as T,j as I}from"./index.ec9d7c60.js";import{c as R}from"./cover.e41aed43.js";function S(e){let t,n,x,S,C,L,P,q,j,O,A,D,G,M,U,F,N,H,_,B,W,z,Y,Q,K,J,V,X,Z,ee,te,ne,oe,ae,se,re,ie,de,ce,le,he,ue,pe,fe,me,ge,we,ve,be,ye,Ee,xe,$e,ke,Te,Ie,Re,Se,Ce,Le,Pe,qe,je,Oe,Ae,De,Ge,Me,Ue,Fe,Ne,He,_e,Be,We,ze,Ye,Qe,Ke,Je,Ve,Xe,Ze,et,tt,nt,ot,at,st,rt,it,dt,ct,lt,ht,ut,pt,ft,mt,gt,wt,vt,bt,yt,Et,xt,$t,kt,Tt,It,Rt,St,Ct,Lt,Pt,qt,jt,Ot,At,Dt,Gt,Mt,Ut,Ft,Nt,Ht,_t,Bt,Wt,zt,Yt,Qt,Kt,Jt,Vt,Xt,Zt,en,tn,nn,on,an,sn,rn,dn,cn,ln,hn,un,pn,fn,mn,gn,wn,vn,bn,yn,En,xn,$n,kn,Tn,In,Rn,Sn,Cn,Ln,Pn,qn,jn,On,An,Dn,Gn,Mn,Un,Fn,Nn,Hn,_n,Bn,Wn,zn,Yn,Qn,Kn,Jn,Vn,Xn,Zn,eo,to,no,oo;return t=new $({props:{title:"Decoupling logic from react components",description:"In this post, we'll discuss how to decouple rendering from domain login using React and Redux :]",keywords:"react, redux, big projects, architecture, planning, frontend, javascript, frameworks"}}),P=new k({props:{date:"2019-07-23",text:e[1]}}),Z=new T({props:{language:I,code:o('\nexport default class Product extends React.Component {\n  // ...\n  componentDidMount() {\n    fetch("/api/products/1/")\n      .then(response => response.json())\n      .then(data => this.setState({...data}));\n  }\n  //...\n}\n')}}),He=new T({props:{language:I,code:o('\nexport default class Product extends React.Component {\n  // ...\n  componentDidMount() {\n    const { fetchProductIsLoading, setProductData } = this.props;\n    // turns on the loading spinner via redux\n    fetchProductIsLoading();\n\n    // starts the request and puts data on the redux\'s store\n    fetch("/api/products/1/")\n      .then(response => response.json())\n      .then(data => setProductData(data));\n  }\n  //...\n  render() {\n    const { productIsLoading, productData } = this.props;\n    // ...\n  }\n}\n')}}),jt=new T({props:{language:I,code:o("\nexport default class Product extends React.Component {\n  // ...\n  componentDidMount() {\n    const { fetchProduct } = this.props;\n    fetchProduct();\n  }\n  //...\n  render() {\n    const { productIsLoading, productData } = this.props;\n    // ...\n  }\n}\n")}}),kn=new T({props:{language:I,code:o("\nexport function fetchProduct(id) {\n  return {\n    types: {\n      request: FETCH_PRODUCT_REQUEST,\n      success: FETCH_PRODUCT_SUCCESS,\n      failure: FETCH_PRODUCT_FAILURE,\n    },\n    apiCallFunction: () => fetch(`/api/products/${id}`),\n  }\n}\n")}}),Dn=new T({props:{language:I,code:o("\nexport default class Product extends React.Component {\n  // ...\n  componentDidMount() {\n    const { fetchProduct } = this.props;\n    fetchProduct();\n  }\n  //...\n  render() {\n    const { productIsLoading, productData } = this.props;\n    // ...\n  }\n}\n")}}),Mn=new T({props:{language:I,code:o("\nexport const productReducer = (state = initialState, action) => {\n  switch(action.type) {\n    case FETCH_PRODUCT_REQUEST:\n      return {\n        ...state,\n        error: null,\n        productIsLoading: true,\n      }\n    case FETCH_PRODUCT_SUCCESS:\n      // here, you may execute any business logic\n      businessLogic();\n\n      return {\n        ...state,\n        error: null,\n        productIsLoading: initialState.productIsLoading,\n        productData: action.response.data,\n      }\n    case FETCH_PRODUCT_FAILURE:\n      return {\n        ...state,\n        productIsLoading: initialState.productIsLoading,\n        error: action.response.data,\n      }\n    default:\n      return state;\n  }\n}\n")}}),{c(){a(t.$$.fragment),n=s(),x=r("h1"),S=r("mark"),C=i("Decoupling logic from react components"),L=s(),a(P.$$.fragment),q=s(),j=r("figure"),O=r("img"),D=s(),G=r("article"),M=r("p"),U=i("Whenever there’s a new React project, most frontend developers will fumble\n    around with the basic configurations. Patterns of style implementation,\n    component decoupling and folder structure will emerge -\n    "),F=r("strong"),N=i("not always for the good"),H=i(". The worst part is that every\n    single frontend dev I’ve ever seen will solve the biggest problem of them\n    all, the\n    "),_=r("em"),B=i("business logic"),W=i("\n    conundrum, in a different way. In an effort to create a standard to solve\n    the domain layer issue at Labcodes, I’ve researched a bit and found a good\n    and sustainable way to deal with requests and data processing. The end\n    result: react-redux-api-tools."),z=s(),Y=r("h2"),Q=i("Let’s imagine a common scenario: CRUD"),K=s(),J=r("p"),V=i("Since javascript is too permissive, there are endless ways to make a CRUD\n    SPA. Limiting the scope to react helps a bit, but there are still way too\n    many different possible implementations. One of them is to use lifecycle\n    hooks to make requests. Your code may look a bit like this:"),X=s(),a(Z.$$.fragment),ee=s(),te=r("p"),ne=i("I think I don’t need to say this, but I’ll do it anyway: this\n    implementation, even though it’s completely valid, has some\n    "),oe=r("strong"),ae=i("big"),se=i("\n    drawbacks."),re=s(),ie=r("p"),de=i("1.The request is being made inside a component, which, in theory, should\n    have only one job:\n    "),ce=r("strong"),le=i("render data"),he=i(". If, for example, you needed to clear out a\n    user’s session or any other business logic, it would probably be here, and\n    that’s\n    "),ue=r("strong"),pe=i("even worse"),fe=i(";"),me=r("br"),ge=i("\n    2. The response data lives\n    "),we=r("strong"),ve=i("inside"),be=i("\n    the component’s state, and that means that it’s gone as soon as the\n    component unmounts;"),ye=r("br"),Ee=i("\n    3. You’ll have to\n    "),xe=r("strong"),$e=i("always"),ke=i("\n    fetch the data for each instance of the component, even if that specific\n    request was already done a billion times;"),Te=r("br"),Ie=i("\n    4. There is no specific middle state between the request start and the\n    response, so no loading spinners (though you may be able to implement it\n    using setState callback hells);"),Re=r("br"),Se=i("\n    5. Since react components are hierarchical, if you need this data inside a\n    child or a parent component, you’ll need to implement contexts/props and\n    callbacks.\n    "),Ce=r("strong"),Le=i("It gets messy. FAST."),Pe=r("br"),qe=s(),je=r("p"),Oe=i("To make it better, most of us prefer to use a library to provide a global\n    application state; one that lives outside all components."),Ae=s(),De=r("h2"),Ge=i("Second step: use Redux"),Me=s(),Ue=r("p"),Fe=i("Redux is one of the most amazing tools for the job. So let’s say you’re\n    using redux to manage the data and business logic. Assuming you’ll be using\n    the reducers to deal with business logic and data formatting, your component\n    code will probably look a bit like this:"),Ne=s(),a(He.$$.fragment),_e=s(),Be=r("p"),We=i("This solves most of the issues, but I would argue that this solution makes\n    everything\n    "),ze=r("strong"),Ye=i("even more coupled"),Qe=i("\n    and, for sure,\n    "),Ke=r("strong"),Je=i("worse to read and maintain"),Ve=i(". The root cause of the issue is\n    that the component is still being responsible for\n    "),Xe=r("strong"),Ze=i("everything"),et=i(": fetching the data and orchestrating redux\n    actions, when it’s only supposed to... render stuff. The ideal flow to solve\n    all issues,\n    "),tt=r("em"),nt=i("at least the best for most cases"),ot=i(", would be something akin to the\n    following flowchart:"),at=s(),st=r("ul"),rt=r("li"),it=i("Component mounts and dispatches isLoading signal to redux"),dt=s(),ct=r("li"),lt=i("Redux's action starts the request and triggers isLoading reducer"),ht=s(),ut=r("li"),pt=i("Component renders loading spinner"),ft=s(),mt=r("li"),gt=i("Request is fullfilled asynchronously and triggers success or failure\n      reducer"),wt=s(),vt=r("li"),bt=i("Component renders sucess or failure based on redux's data"),yt=s(),Et=r("p"),xt=i("Note that the only way to remove completely the business logic from the\n    component is to trigger the ‘Success’ and ‘Failure’ use cases\n    "),$t=r("strong"),kt=i("outside"),Tt=i("\n    of the component. Components should render stuff, not deal with\n    "),It=r("strong"),Rt=i("application-wide"),St=i("\n    state management. That means that the component should only dispatch one\n    event (the\n    "),Ct=r("em"),Lt=i("‘get me the data’"),Pt=i("\n    event), then react to it whenever the data is there. For that, our component\n    code would need to be as simple as this:"),qt=s(),a(jt.$$.fragment),Ot=s(),At=r("p"),Dt=i("And that means that… the actions should fetch the data? And reducers would\n    dispatch actions? Sounds weird, right? Because it is. And it’s not what I’m\n    suggesting whatsoever."),Gt=s(),Mt=r("h2"),Ut=i("Enter the middlewares"),Ft=s(),Nt=r("p"),Ht=i("To deliver the ideal data flow,\n    "),_t=r("strong"),Bt=i("redux middlewares are amazing"),Wt=i(". Let’s say we want our\n    component to be exactly like that last bit of code. If we had something in\n    between actions and reducers, for example, we could make this\n    "),zt=r("strong"),Yt=i("inbetween"),Qt=i("\n    code deal with fetching the data and figuring out which reducers to fire,\n    leaving redux to do its job of managing state and events, while leaving\n    components focused on their jobs of rendering, and rendering only. The data\n    flow would be something like this:"),Kt=s(),Jt=r("ul"),Vt=r("li"),Xt=i("Component mounts and dispatches signal for redux to start the request"),Zt=s(),en=r("li"),tn=i("Redux's action describes success and failure reducers, along with which\n      function will make the request"),nn=s(),on=r("li"),an=r("strong"),sn=i("Middleware calls the request function, saves the promise and\n        triggers the isLoading reducer"),rn=s(),dn=r("li"),cn=i("Component renders loading spinner"),ln=s(),hn=r("li"),un=r("strong"),pn=i("Middleware awaits the request and triggers the success or failure\n        reducer based on the action's specifications"),fn=s(),mn=r("li"),gn=i("Success or failure reducer executes business logic and persists response's\n      data on the redux's store"),wn=s(),vn=r("li"),bn=i("Component renders sucess or failure based on redux's data"),yn=s(),En=r("p"),xn=i("With this proposed flow, our action could look like this:"),$n=s(),a(kn.$$.fragment),Tn=s(),In=r("p"),Rn=i("Ok, let’s slow down. What you see above is the current API for a request\n    action, using the middleware included in our\n    "),Sn=r("a"),Cn=r("code"),Ln=i("react-redux-api-tools"),Pn=i("\n    npm package. Dispatching this action would configure the middleware to make\n    the request (by calling\n    "),qn=r("code"),jn=i("apiCallFunction"),On=i(") and to use the correct reducer whenever the\n    request is done. Meanwhile, our component and reducers would remain\n    unaltered:"),An=s(),a(Dn.$$.fragment),Gn=s(),a(Mn.$$.fragment),Un=s(),Fn=r("p"),Nn=i("And "),Hn=r("em"),_n=i("voilá"),Bn=i(", the flow is much cleaner, simpler and decoupled!"),Wn=s(),zn=r("h2"),Yn=i("If you liked this or it seems too magical..."),Qn=s(),Kn=r("p"),Jn=i("Have you enjoyed this middleware API, want to develop your react-redux app\n    like this or are just curious on how this all works? Then consider using and\n    contributing to our\n    "),Vn=r("a"),Xn=i("react-redux-api-tools"),Zn=i("\n    npm package. Bugs and feature proposals are welcome! And this is only the\n    start;\n    "),eo=r("a"),to=i("react-redux-api-tools"),no=i("\n    has a bunch of other features I’ve not talked about. Give our docs a good\n    read to find out how to further improve and simplify your code using our\n    tools! Thanks, and see you later!"),this.h()},l(e){const o=d('[data-svelte="svelte-g7bw9a"]',document.head);c(t.$$.fragment,o),o.forEach(l),n=h(e),x=u(e,"H1",{});var a=p(x);S=u(a,"MARK",{});var s=p(S);C=f(s,"Decoupling logic from react components"),s.forEach(l),a.forEach(l),L=h(e),c(P.$$.fragment,e),q=h(e),j=u(e,"FIGURE",{});var r=p(j);O=u(r,"IMG",{src:!0,alt:!0}),r.forEach(l),D=h(e),G=u(e,"ARTICLE",{});var i=p(G);M=u(i,"P",{});var m=p(M);U=f(m,"Whenever there’s a new React project, most frontend developers will fumble\n    around with the basic configurations. Patterns of style implementation,\n    component decoupling and folder structure will emerge -\n    "),F=u(m,"STRONG",{});var g=p(F);N=f(g,"not always for the good"),g.forEach(l),H=f(m,". The worst part is that every\n    single frontend dev I’ve ever seen will solve the biggest problem of them\n    all, the\n    "),_=u(m,"EM",{});var w=p(_);B=f(w,"business logic"),w.forEach(l),W=f(m,"\n    conundrum, in a different way. In an effort to create a standard to solve\n    the domain layer issue at Labcodes, I’ve researched a bit and found a good\n    and sustainable way to deal with requests and data processing. The end\n    result: react-redux-api-tools."),m.forEach(l),z=h(i),Y=u(i,"H2",{});var v=p(Y);Q=f(v,"Let’s imagine a common scenario: CRUD"),v.forEach(l),K=h(i),J=u(i,"P",{});var b=p(J);V=f(b,"Since javascript is too permissive, there are endless ways to make a CRUD\n    SPA. Limiting the scope to react helps a bit, but there are still way too\n    many different possible implementations. One of them is to use lifecycle\n    hooks to make requests. Your code may look a bit like this:"),b.forEach(l),X=h(i),c(Z.$$.fragment,i),ee=h(i),te=u(i,"P",{});var y=p(te);ne=f(y,"I think I don’t need to say this, but I’ll do it anyway: this\n    implementation, even though it’s completely valid, has some\n    "),oe=u(y,"STRONG",{});var E=p(oe);ae=f(E,"big"),E.forEach(l),se=f(y,"\n    drawbacks."),y.forEach(l),re=h(i),ie=u(i,"P",{});var $=p(ie);de=f($,"1.The request is being made inside a component, which, in theory, should\n    have only one job:\n    "),ce=u($,"STRONG",{});var k=p(ce);le=f(k,"render data"),k.forEach(l),he=f($,". If, for example, you needed to clear out a\n    user’s session or any other business logic, it would probably be here, and\n    that’s\n    "),ue=u($,"STRONG",{});var T=p(ue);pe=f(T,"even worse"),T.forEach(l),fe=f($,";"),me=u($,"BR",{}),ge=f($,"\n    2. The response data lives\n    "),we=u($,"STRONG",{});var I=p(we);ve=f(I,"inside"),I.forEach(l),be=f($,"\n    the component’s state, and that means that it’s gone as soon as the\n    component unmounts;"),ye=u($,"BR",{}),Ee=f($,"\n    3. You’ll have to\n    "),xe=u($,"STRONG",{});var R=p(xe);$e=f(R,"always"),R.forEach(l),ke=f($,"\n    fetch the data for each instance of the component, even if that specific\n    request was already done a billion times;"),Te=u($,"BR",{}),Ie=f($,"\n    4. There is no specific middle state between the request start and the\n    response, so no loading spinners (though you may be able to implement it\n    using setState callback hells);"),Re=u($,"BR",{}),Se=f($,"\n    5. Since react components are hierarchical, if you need this data inside a\n    child or a parent component, you’ll need to implement contexts/props and\n    callbacks.\n    "),Ce=u($,"STRONG",{});var A=p(Ce);Le=f(A,"It gets messy. FAST."),A.forEach(l),Pe=u($,"BR",{}),$.forEach(l),qe=h(i),je=u(i,"P",{});var oo=p(je);Oe=f(oo,"To make it better, most of us prefer to use a library to provide a global\n    application state; one that lives outside all components."),oo.forEach(l),Ae=h(i),De=u(i,"H2",{});var ao=p(De);Ge=f(ao,"Second step: use Redux"),ao.forEach(l),Me=h(i),Ue=u(i,"P",{});var so=p(Ue);Fe=f(so,"Redux is one of the most amazing tools for the job. So let’s say you’re\n    using redux to manage the data and business logic. Assuming you’ll be using\n    the reducers to deal with business logic and data formatting, your component\n    code will probably look a bit like this:"),so.forEach(l),Ne=h(i),c(He.$$.fragment,i),_e=h(i),Be=u(i,"P",{});var ro=p(Be);We=f(ro,"This solves most of the issues, but I would argue that this solution makes\n    everything\n    "),ze=u(ro,"STRONG",{});var io=p(ze);Ye=f(io,"even more coupled"),io.forEach(l),Qe=f(ro,"\n    and, for sure,\n    "),Ke=u(ro,"STRONG",{});var co=p(Ke);Je=f(co,"worse to read and maintain"),co.forEach(l),Ve=f(ro,". The root cause of the issue is\n    that the component is still being responsible for\n    "),Xe=u(ro,"STRONG",{});var lo=p(Xe);Ze=f(lo,"everything"),lo.forEach(l),et=f(ro,": fetching the data and orchestrating redux\n    actions, when it’s only supposed to... render stuff. The ideal flow to solve\n    all issues,\n    "),tt=u(ro,"EM",{});var ho=p(tt);nt=f(ho,"at least the best for most cases"),ho.forEach(l),ot=f(ro,", would be something akin to the\n    following flowchart:"),ro.forEach(l),at=h(i),st=u(i,"UL",{class:!0});var uo=p(st);rt=u(uo,"LI",{});var po=p(rt);it=f(po,"Component mounts and dispatches isLoading signal to redux"),po.forEach(l),dt=h(uo),ct=u(uo,"LI",{});var fo=p(ct);lt=f(fo,"Redux's action starts the request and triggers isLoading reducer"),fo.forEach(l),ht=h(uo),ut=u(uo,"LI",{});var mo=p(ut);pt=f(mo,"Component renders loading spinner"),mo.forEach(l),ft=h(uo),mt=u(uo,"LI",{});var go=p(mt);gt=f(go,"Request is fullfilled asynchronously and triggers success or failure\n      reducer"),go.forEach(l),wt=h(uo),vt=u(uo,"LI",{});var wo=p(vt);bt=f(wo,"Component renders sucess or failure based on redux's data"),wo.forEach(l),uo.forEach(l),yt=h(i),Et=u(i,"P",{});var vo=p(Et);xt=f(vo,"Note that the only way to remove completely the business logic from the\n    component is to trigger the ‘Success’ and ‘Failure’ use cases\n    "),$t=u(vo,"STRONG",{});var bo=p($t);kt=f(bo,"outside"),bo.forEach(l),Tt=f(vo,"\n    of the component. Components should render stuff, not deal with\n    "),It=u(vo,"STRONG",{});var yo=p(It);Rt=f(yo,"application-wide"),yo.forEach(l),St=f(vo,"\n    state management. That means that the component should only dispatch one\n    event (the\n    "),Ct=u(vo,"EM",{});var Eo=p(Ct);Lt=f(Eo,"‘get me the data’"),Eo.forEach(l),Pt=f(vo,"\n    event), then react to it whenever the data is there. For that, our component\n    code would need to be as simple as this:"),vo.forEach(l),qt=h(i),c(jt.$$.fragment,i),Ot=h(i),At=u(i,"P",{});var xo=p(At);Dt=f(xo,"And that means that… the actions should fetch the data? And reducers would\n    dispatch actions? Sounds weird, right? Because it is. And it’s not what I’m\n    suggesting whatsoever."),xo.forEach(l),Gt=h(i),Mt=u(i,"H2",{});var $o=p(Mt);Ut=f($o,"Enter the middlewares"),$o.forEach(l),Ft=h(i),Nt=u(i,"P",{});var ko=p(Nt);Ht=f(ko,"To deliver the ideal data flow,\n    "),_t=u(ko,"STRONG",{});var To=p(_t);Bt=f(To,"redux middlewares are amazing"),To.forEach(l),Wt=f(ko,". Let’s say we want our\n    component to be exactly like that last bit of code. If we had something in\n    between actions and reducers, for example, we could make this\n    "),zt=u(ko,"STRONG",{});var Io=p(zt);Yt=f(Io,"inbetween"),Io.forEach(l),Qt=f(ko,"\n    code deal with fetching the data and figuring out which reducers to fire,\n    leaving redux to do its job of managing state and events, while leaving\n    components focused on their jobs of rendering, and rendering only. The data\n    flow would be something like this:"),ko.forEach(l),Kt=h(i),Jt=u(i,"UL",{class:!0});var Ro=p(Jt);Vt=u(Ro,"LI",{});var So=p(Vt);Xt=f(So,"Component mounts and dispatches signal for redux to start the request"),So.forEach(l),Zt=h(Ro),en=u(Ro,"LI",{});var Co=p(en);tn=f(Co,"Redux's action describes success and failure reducers, along with which\n      function will make the request"),Co.forEach(l),nn=h(Ro),on=u(Ro,"LI",{});var Lo=p(on);an=u(Lo,"STRONG",{});var Po=p(an);sn=f(Po,"Middleware calls the request function, saves the promise and\n        triggers the isLoading reducer"),Po.forEach(l),Lo.forEach(l),rn=h(Ro),dn=u(Ro,"LI",{});var qo=p(dn);cn=f(qo,"Component renders loading spinner"),qo.forEach(l),ln=h(Ro),hn=u(Ro,"LI",{});var jo=p(hn);un=u(jo,"STRONG",{});var Oo=p(un);pn=f(Oo,"Middleware awaits the request and triggers the success or failure\n        reducer based on the action's specifications"),Oo.forEach(l),jo.forEach(l),fn=h(Ro),mn=u(Ro,"LI",{});var Ao=p(mn);gn=f(Ao,"Success or failure reducer executes business logic and persists response's\n      data on the redux's store"),Ao.forEach(l),wn=h(Ro),vn=u(Ro,"LI",{});var Do=p(vn);bn=f(Do,"Component renders sucess or failure based on redux's data"),Do.forEach(l),Ro.forEach(l),yn=h(i),En=u(i,"P",{});var Go=p(En);xn=f(Go,"With this proposed flow, our action could look like this:"),Go.forEach(l),$n=h(i),c(kn.$$.fragment,i),Tn=h(i),In=u(i,"P",{});var Mo=p(In);Rn=f(Mo,"Ok, let’s slow down. What you see above is the current API for a request\n    action, using the middleware included in our\n    "),Sn=u(Mo,"A",{href:!0,target:!0,rel:!0});var Uo=p(Sn);Cn=u(Uo,"CODE",{});var Fo=p(Cn);Ln=f(Fo,"react-redux-api-tools"),Fo.forEach(l),Uo.forEach(l),Pn=f(Mo,"\n    npm package. Dispatching this action would configure the middleware to make\n    the request (by calling\n    "),qn=u(Mo,"CODE",{});var No=p(qn);jn=f(No,"apiCallFunction"),No.forEach(l),On=f(Mo,") and to use the correct reducer whenever the\n    request is done. Meanwhile, our component and reducers would remain\n    unaltered:"),Mo.forEach(l),An=h(i),c(Dn.$$.fragment,i),Gn=h(i),c(Mn.$$.fragment,i),Un=h(i),Fn=u(i,"P",{});var Ho=p(Fn);Nn=f(Ho,"And "),Hn=u(Ho,"EM",{});var _o=p(Hn);_n=f(_o,"voilá"),_o.forEach(l),Bn=f(Ho,", the flow is much cleaner, simpler and decoupled!"),Ho.forEach(l),Wn=h(i),zn=u(i,"H2",{});var Bo=p(zn);Yn=f(Bo,"If you liked this or it seems too magical..."),Bo.forEach(l),Qn=h(i),Kn=u(i,"P",{});var Wo=p(Kn);Jn=f(Wo,"Have you enjoyed this middleware API, want to develop your react-redux app\n    like this or are just curious on how this all works? Then consider using and\n    contributing to our\n    "),Vn=u(Wo,"A",{href:!0});var zo=p(Vn);Xn=f(zo,"react-redux-api-tools"),zo.forEach(l),Zn=f(Wo,"\n    npm package. Bugs and feature proposals are welcome! And this is only the\n    start;\n    "),eo=u(Wo,"A",{href:!0});var Yo=p(eo);to=f(Yo,"react-redux-api-tools"),Yo.forEach(l),no=f(Wo,"\n    has a bunch of other features I’ve not talked about. Give our docs a good\n    read to find out how to further improve and simplify your code using our\n    tools! Thanks, and see you later!"),Wo.forEach(l),i.forEach(l),this.h()},h(){O.src!==(A=R)&&m(O,"src",A),m(O,"alt","Logos of React and Redux"),m(st,"class","callout"),m(Jt,"class","callout"),m(Sn,"href","https://www.npmjs.com/package/react-redux-api-tools"),m(Sn,"target","_blank"),m(Sn,"rel","noopener"),m(Vn,"href","https://www.npmjs.com/package/react-redux-api-tools"),m(eo,"href","https://www.npmjs.com/package/react-redux-api-tools")},m(o,a){g(t,document.head,null),w(o,n,a),w(o,x,a),v(x,S),v(S,C),w(o,L,a),g(P,o,a),w(o,q,a),w(o,j,a),v(j,O),w(o,D,a),w(o,G,a),v(G,M),v(M,U),v(M,F),v(F,N),v(M,H),v(M,_),v(_,B),v(M,W),v(G,z),v(G,Y),v(Y,Q),v(G,K),v(G,J),v(J,V),v(G,X),g(Z,G,null),v(G,ee),v(G,te),v(te,ne),v(te,oe),v(oe,ae),v(te,se),v(G,re),v(G,ie),v(ie,de),v(ie,ce),v(ce,le),v(ie,he),v(ie,ue),v(ue,pe),v(ie,fe),v(ie,me),v(ie,ge),v(ie,we),v(we,ve),v(ie,be),v(ie,ye),v(ie,Ee),v(ie,xe),v(xe,$e),v(ie,ke),v(ie,Te),v(ie,Ie),v(ie,Re),v(ie,Se),v(ie,Ce),v(Ce,Le),v(ie,Pe),v(G,qe),v(G,je),v(je,Oe),v(G,Ae),v(G,De),v(De,Ge),v(G,Me),v(G,Ue),v(Ue,Fe),v(G,Ne),g(He,G,null),v(G,_e),v(G,Be),v(Be,We),v(Be,ze),v(ze,Ye),v(Be,Qe),v(Be,Ke),v(Ke,Je),v(Be,Ve),v(Be,Xe),v(Xe,Ze),v(Be,et),v(Be,tt),v(tt,nt),v(Be,ot),v(G,at),v(G,st),v(st,rt),v(rt,it),v(st,dt),v(st,ct),v(ct,lt),v(st,ht),v(st,ut),v(ut,pt),v(st,ft),v(st,mt),v(mt,gt),v(st,wt),v(st,vt),v(vt,bt),v(G,yt),v(G,Et),v(Et,xt),v(Et,$t),v($t,kt),v(Et,Tt),v(Et,It),v(It,Rt),v(Et,St),v(Et,Ct),v(Ct,Lt),v(Et,Pt),v(G,qt),g(jt,G,null),v(G,Ot),v(G,At),v(At,Dt),v(G,Gt),v(G,Mt),v(Mt,Ut),v(G,Ft),v(G,Nt),v(Nt,Ht),v(Nt,_t),v(_t,Bt),v(Nt,Wt),v(Nt,zt),v(zt,Yt),v(Nt,Qt),v(G,Kt),v(G,Jt),v(Jt,Vt),v(Vt,Xt),v(Jt,Zt),v(Jt,en),v(en,tn),v(Jt,nn),v(Jt,on),v(on,an),v(an,sn),v(Jt,rn),v(Jt,dn),v(dn,cn),v(Jt,ln),v(Jt,hn),v(hn,un),v(un,pn),v(Jt,fn),v(Jt,mn),v(mn,gn),v(Jt,wn),v(Jt,vn),v(vn,bn),v(G,yn),v(G,En),v(En,xn),v(G,$n),g(kn,G,null),v(G,Tn),v(G,In),v(In,Rn),v(In,Sn),v(Sn,Cn),v(Cn,Ln),v(In,Pn),v(In,qn),v(qn,jn),v(In,On),v(G,An),g(Dn,G,null),v(G,Gn),g(Mn,G,null),v(G,Un),v(G,Fn),v(Fn,Nn),v(Fn,Hn),v(Hn,_n),v(Fn,Bn),v(G,Wn),v(G,zn),v(zn,Yn),v(G,Qn),v(G,Kn),v(Kn,Jn),v(Kn,Vn),v(Vn,Xn),v(Kn,Zn),v(Kn,eo),v(eo,to),v(Kn,no),e[2](G),oo=!0},p(e,[t]){const n={};2&t&&(n.text=e[1]),P.$set(n)},i(e){oo||(b(t.$$.fragment,e),b(P.$$.fragment,e),b(Z.$$.fragment,e),b(He.$$.fragment,e),b(jt.$$.fragment,e),b(kn.$$.fragment,e),b(Dn.$$.fragment,e),b(Mn.$$.fragment,e),oo=!0)},o(e){y(t.$$.fragment,e),y(P.$$.fragment,e),y(Z.$$.fragment,e),y(He.$$.fragment,e),y(jt.$$.fragment,e),y(kn.$$.fragment,e),y(Dn.$$.fragment,e),y(Mn.$$.fragment,e),oo=!1},d(o){E(t),o&&l(n),o&&l(x),o&&l(L),E(P,o),o&&l(q),o&&l(j),o&&l(D),o&&l(G),E(Z),E(He),E(jt),E(kn),E(Dn),E(Mn),e[2](null)}}}function C(e,t,n){let o,a;return e.$$.update=()=>{1&e.$$.dirty&&n(1,a=o&&o.textContent)},[o,a,function(e){x[e?"unshift":"push"]((()=>{o=e,n(0,o)}))}]}export default class extends e{constructor(e){super(),t(this,e,C,S,n,{})}}

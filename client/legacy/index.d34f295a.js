import{_ as e,a as t,b as n,c as o,i as a,d as s,S as r,s as i,T as c,g as d,f as l,e as u,t as h,q as f,n as p,j as m,k as g,h as w,l as v,m as b,o as y,u as E,r as x,p as $,C as k,w as R,x as T,y as I,M as S}from"./client.eda691f8.js";import"./Icon.0e3deb14.js";import{M as C,P as L}from"./MetaTags.6b7c1de8.js";import{H as P,j as q}from"./index.9c2fd222.js";import{c as j}from"./cover.e41aed43.js";function D(e){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,s=t(e);if(o){var r=t(this).constructor;a=Reflect.construct(s,arguments,r)}else a=s.apply(this,arguments);return n(this,a)}}function O(e){var t,n,o,a,s,r,i,S,D,O,A,G,M,U,F,N,H,_,B,W,z,Y,Q,K,J,V,X,Z,ee,te,ne,oe,ae,se,re,ie,ce,de,le,ue,he,fe,pe,me,ge,we,ve,be,ye,Ee,xe,$e,ke,Re,Te,Ie,Se,Ce,Le,Pe,qe,je,De,Oe,Ae,Ge,Me,Ue,Fe,Ne,He,_e,Be,We,ze,Ye,Qe,Ke,Je,Ve,Xe,Ze,et,tt,nt,ot,at,st,rt,it,ct,dt,lt,ut,ht,ft,pt,mt,gt,wt,vt,bt,yt,Et,xt,$t,kt,Rt,Tt,It,St,Ct,Lt,Pt,qt,jt,Dt,Ot,At,Gt,Mt,Ut,Ft,Nt,Ht,_t,Bt,Wt,zt,Yt,Qt,Kt,Jt,Vt,Xt,Zt,en,tn,nn,on,an,sn,rn,cn,dn,ln,un,hn,fn,pn,mn,gn,wn,vn,bn,yn,En,xn,$n,kn,Rn,Tn,In,Sn,Cn,Ln,Pn,qn,jn,Dn,On,An,Gn,Mn,Un,Fn,Nn,Hn,_n,Bn,Wn,zn,Yn,Qn,Kn,Jn,Vn,Xn,Zn,eo,to,no,oo,ao;return t=new C({props:{title:"Decoupling logic from react components",description:"In this post, we'll discuss how to decouple rendering from domain login using React and Redux :]",keywords:"react, redux, big projects, architecture, planning, frontend, javascript, frameworks"}}),i=new L({props:{date:"2019-07-23",text:e[1]}}),ee=new P({props:{language:q,code:c('\nexport default class Product extends React.Component {\n  // ...\n  componentDidMount() {\n    fetch("/api/products/1/")\n      .then(response => response.json())\n      .then(data => this.setState({...data}));\n  }\n  //...\n}\n')}}),_e=new P({props:{language:q,code:c('\nexport default class Product extends React.Component {\n  // ...\n  componentDidMount() {\n    const { fetchProductIsLoading, setProductData } = this.props;\n    // turns on the loading spinner via redux\n    fetchProductIsLoading();\n\n    // starts the request and puts data on the redux\'s store\n    fetch("/api/products/1/")\n      .then(response => response.json())\n      .then(data => setProductData(data));\n  }\n  //...\n  render() {\n    const { productIsLoading, productData } = this.props;\n    // ...\n  }\n}\n')}}),Dt=new P({props:{language:q,code:c("\nexport default class Product extends React.Component {\n  // ...\n  componentDidMount() {\n    const { fetchProduct } = this.props;\n    fetchProduct();\n  }\n  //...\n  render() {\n    const { productIsLoading, productData } = this.props;\n    // ...\n  }\n}\n")}}),Rn=new P({props:{language:q,code:c("\nexport function fetchProduct(id) {\n  return {\n    types: {\n      request: FETCH_PRODUCT_REQUEST,\n      success: FETCH_PRODUCT_SUCCESS,\n      failure: FETCH_PRODUCT_FAILURE,\n    },\n    apiCallFunction: () => fetch(`/api/products/${id}`),\n  }\n}\n")}}),Gn=new P({props:{language:q,code:c("\nexport default class Product extends React.Component {\n  // ...\n  componentDidMount() {\n    const { fetchProduct } = this.props;\n    fetchProduct();\n  }\n  //...\n  render() {\n    const { productIsLoading, productData } = this.props;\n    // ...\n  }\n}\n")}}),Un=new P({props:{language:q,code:c("\nexport const productReducer = (state = initialState, action) => {\n  switch(action.type) {\n    case FETCH_PRODUCT_REQUEST:\n      return {\n        ...state,\n        error: null,\n        productIsLoading: true,\n      }\n    case FETCH_PRODUCT_SUCCESS:\n      // here, you may execute any business logic\n      businessLogic();\n\n      return {\n        ...state,\n        error: null,\n        productIsLoading: initialState.productIsLoading,\n        productData: action.response.data,\n      }\n    case FETCH_PRODUCT_FAILURE:\n      return {\n        ...state,\n        productIsLoading: initialState.productIsLoading,\n        error: action.response.data,\n      }\n    default:\n      return state;\n  }\n}\n")}}),{c:function(){d(t.$$.fragment),n=l(),o=u("h1"),a=u("mark"),s=h("Decoupling logic from react components"),r=l(),d(i.$$.fragment),S=l(),D=u("figure"),O=u("img"),G=l(),M=u("article"),U=u("p"),F=h("Whenever there’s a new React project, most frontend developers will fumble\n    around with the basic configurations. Patterns of style implementation,\n    component decoupling and folder structure will emerge -\n    "),N=u("strong"),H=h("not always for the good"),_=h(". The worst part is that every\n    single frontend dev I’ve ever seen will solve the biggest problem of them\n    all, the\n    "),B=u("em"),W=h("business logic"),z=h("\n    conundrum, in a different way. In an effort to create a standard to solve\n    the domain layer issue at Labcodes, I’ve researched a bit and found a good\n    and sustainable way to deal with requests and data processing. The end\n    result: react-redux-api-tools."),Y=l(),Q=u("h2"),K=h("Let’s imagine a common scenario: CRUD"),J=l(),V=u("p"),X=h("Since javascript is too permissive, there are endless ways to make a CRUD\n    SPA. Limiting the scope to react helps a bit, but there are still way too\n    many different possible implementations. One of them is to use lifecycle\n    hooks to make requests. Your code may look a bit like this:"),Z=l(),d(ee.$$.fragment),te=l(),ne=u("p"),oe=h("I think I don’t need to say this, but I’ll do it anyway: this\n    implementation, even though it’s completely valid, has some\n    "),ae=u("strong"),se=h("big"),re=h("\n    drawbacks."),ie=l(),ce=u("p"),de=h("1.The request is being made inside a component, which, in theory, should\n    have only one job:\n    "),le=u("strong"),ue=h("render data"),he=h(". If, for example, you needed to clear out a\n    user’s session or any other business logic, it would probably be here, and\n    that’s\n    "),fe=u("strong"),pe=h("even worse"),me=h(";"),ge=u("br"),we=h("\n    2. The response data lives\n    "),ve=u("strong"),be=h("inside"),ye=h("\n    the component’s state, and that means that it’s gone as soon as the\n    component unmounts;"),Ee=u("br"),xe=h("\n    3. You’ll have to\n    "),$e=u("strong"),ke=h("always"),Re=h("\n    fetch the data for each instance of the component, even if that specific\n    request was already done a billion times;"),Te=u("br"),Ie=h("\n    4. There is no specific middle state between the request start and the\n    response, so no loading spinners (though you may be able to implement it\n    using setState callback hells);"),Se=u("br"),Ce=h("\n    5. Since react components are hierarchical, if you need this data inside a\n    child or a parent component, you’ll need to implement contexts/props and\n    callbacks.\n    "),Le=u("strong"),Pe=h("It gets messy. FAST."),qe=u("br"),je=l(),De=u("p"),Oe=h("To make it better, most of us prefer to use a library to provide a global\n    application state; one that lives outside all components."),Ae=l(),Ge=u("h2"),Me=h("Second step: use Redux"),Ue=l(),Fe=u("p"),Ne=h("Redux is one of the most amazing tools for the job. So let’s say you’re\n    using redux to manage the data and business logic. Assuming you’ll be using\n    the reducers to deal with business logic and data formatting, your component\n    code will probably look a bit like this:"),He=l(),d(_e.$$.fragment),Be=l(),We=u("p"),ze=h("This solves most of the issues, but I would argue that this solution makes\n    everything\n    "),Ye=u("strong"),Qe=h("even more coupled"),Ke=h("\n    and, for sure,\n    "),Je=u("strong"),Ve=h("worse to read and maintain"),Xe=h(". The root cause of the issue is\n    that the component is still being responsible for\n    "),Ze=u("strong"),et=h("everything"),tt=h(": fetching the data and orchestrating redux\n    actions, when it’s only supposed to... render stuff. The ideal flow to solve\n    all issues,\n    "),nt=u("em"),ot=h("at least the best for most cases"),at=h(", would be something akin to the\n    following flowchart:"),st=l(),rt=u("ul"),it=u("li"),ct=h("Component mounts and dispatches isLoading signal to redux"),dt=l(),lt=u("li"),ut=h("Redux's action starts the request and triggers isLoading reducer"),ht=l(),ft=u("li"),pt=h("Component renders loading spinner"),mt=l(),gt=u("li"),wt=h("Request is fullfilled asynchronously and triggers success or failure\n      reducer"),vt=l(),bt=u("li"),yt=h("Component renders sucess or failure based on redux's data"),Et=l(),xt=u("p"),$t=h("Note that the only way to remove completely the business logic from the\n    component is to trigger the ‘Success’ and ‘Failure’ use cases\n    "),kt=u("strong"),Rt=h("outside"),Tt=h("\n    of the component. Components should render stuff, not deal with\n    "),It=u("strong"),St=h("application-wide"),Ct=h("\n    state management. That means that the component should only dispatch one\n    event (the\n    "),Lt=u("em"),Pt=h("‘get me the data’"),qt=h("\n    event), then react to it whenever the data is there. For that, our component\n    code would need to be as simple as this:"),jt=l(),d(Dt.$$.fragment),Ot=l(),At=u("p"),Gt=h("And that means that… the actions should fetch the data? And reducers would\n    dispatch actions? Sounds weird, right? Because it is. And it’s not what I’m\n    suggesting whatsoever."),Mt=l(),Ut=u("h2"),Ft=h("Enter the middlewares"),Nt=l(),Ht=u("p"),_t=h("To deliver the ideal data flow,\n    "),Bt=u("strong"),Wt=h("redux middlewares are amazing"),zt=h(". Let’s say we want our\n    component to be exactly like that last bit of code. If we had something in\n    between actions and reducers, for example, we could make this\n    "),Yt=u("strong"),Qt=h("inbetween"),Kt=h("\n    code deal with fetching the data and figuring out which reducers to fire,\n    leaving redux to do its job of managing state and events, while leaving\n    components focused on their jobs of rendering, and rendering only. The data\n    flow would be something like this:"),Jt=l(),Vt=u("ul"),Xt=u("li"),Zt=h("Component mounts and dispatches signal for redux to start the request"),en=l(),tn=u("li"),nn=h("Redux's action describes success and failure reducers, along with which\n      function will make the request"),on=l(),an=u("li"),sn=u("strong"),rn=h("Middleware calls the request function, saves the promise and\n        triggers the isLoading reducer"),cn=l(),dn=u("li"),ln=h("Component renders loading spinner"),un=l(),hn=u("li"),fn=u("strong"),pn=h("Middleware awaits the request and triggers the success or failure\n        reducer based on the action's specifications"),mn=l(),gn=u("li"),wn=h("Success or failure reducer executes business logic and persists response's\n      data on the redux's store"),vn=l(),bn=u("li"),yn=h("Component renders sucess or failure based on redux's data"),En=l(),xn=u("p"),$n=h("With this proposed flow, our action could look like this:"),kn=l(),d(Rn.$$.fragment),Tn=l(),In=u("p"),Sn=h("Ok, let’s slow down. What you see above is the current API for a request\n    action, using the middleware included in our\n    "),Cn=u("a"),Ln=u("code"),Pn=h("react-redux-api-tools"),qn=h("\n    npm package. Dispatching this action would configure the middleware to make\n    the request (by calling\n    "),jn=u("code"),Dn=h("apiCallFunction"),On=h(") and to use the correct reducer whenever the\n    request is done. Meanwhile, our component and reducers would remain\n    unaltered:"),An=l(),d(Gn.$$.fragment),Mn=l(),d(Un.$$.fragment),Fn=l(),Nn=u("p"),Hn=h("And "),_n=u("em"),Bn=h("voilá"),Wn=h(", the flow is much cleaner, simpler and decoupled!"),zn=l(),Yn=u("h2"),Qn=h("If you liked this or it seems too magical..."),Kn=l(),Jn=u("p"),Vn=h("Have you enjoyed this middleware API, want to develop your react-redux app\n    like this or are just curious on how this all works? Then consider using and\n    contributing to our\n    "),Xn=u("a"),Zn=h("react-redux-api-tools"),eo=h("\n    npm package. Bugs and feature proposals are welcome! And this is only the\n    start;\n    "),to=u("a"),no=h("react-redux-api-tools"),oo=h("\n    has a bunch of other features I’ve not talked about. Give our docs a good\n    read to find out how to further improve and simplify your code using our\n    tools! Thanks, and see you later!"),this.h()},l:function(e){var c=f('[data-svelte="svelte-g7bw9a"]',document.head);p(t.$$.fragment,c),c.forEach(m),n=g(e),o=w(e,"H1",{});var d=v(o);a=w(d,"MARK",{});var l=v(a);s=b(l,"Decoupling logic from react components"),l.forEach(m),d.forEach(m),r=g(e),p(i.$$.fragment,e),S=g(e),D=w(e,"FIGURE",{});var u=v(D);O=w(u,"IMG",{src:!0,alt:!0}),u.forEach(m),G=g(e),M=w(e,"ARTICLE",{});var h=v(M);U=w(h,"P",{});var y=v(U);F=b(y,"Whenever there’s a new React project, most frontend developers will fumble\n    around with the basic configurations. Patterns of style implementation,\n    component decoupling and folder structure will emerge -\n    "),N=w(y,"STRONG",{});var E=v(N);H=b(E,"not always for the good"),E.forEach(m),_=b(y,". The worst part is that every\n    single frontend dev I’ve ever seen will solve the biggest problem of them\n    all, the\n    "),B=w(y,"EM",{});var x=v(B);W=b(x,"business logic"),x.forEach(m),z=b(y,"\n    conundrum, in a different way. In an effort to create a standard to solve\n    the domain layer issue at Labcodes, I’ve researched a bit and found a good\n    and sustainable way to deal with requests and data processing. The end\n    result: react-redux-api-tools."),y.forEach(m),Y=g(h),Q=w(h,"H2",{});var $=v(Q);K=b($,"Let’s imagine a common scenario: CRUD"),$.forEach(m),J=g(h),V=w(h,"P",{});var k=v(V);X=b(k,"Since javascript is too permissive, there are endless ways to make a CRUD\n    SPA. Limiting the scope to react helps a bit, but there are still way too\n    many different possible implementations. One of them is to use lifecycle\n    hooks to make requests. Your code may look a bit like this:"),k.forEach(m),Z=g(h),p(ee.$$.fragment,h),te=g(h),ne=w(h,"P",{});var R=v(ne);oe=b(R,"I think I don’t need to say this, but I’ll do it anyway: this\n    implementation, even though it’s completely valid, has some\n    "),ae=w(R,"STRONG",{});var T=v(ae);se=b(T,"big"),T.forEach(m),re=b(R,"\n    drawbacks."),R.forEach(m),ie=g(h),ce=w(h,"P",{});var I=v(ce);de=b(I,"1.The request is being made inside a component, which, in theory, should\n    have only one job:\n    "),le=w(I,"STRONG",{});var C=v(le);ue=b(C,"render data"),C.forEach(m),he=b(I,". If, for example, you needed to clear out a\n    user’s session or any other business logic, it would probably be here, and\n    that’s\n    "),fe=w(I,"STRONG",{});var L=v(fe);pe=b(L,"even worse"),L.forEach(m),me=b(I,";"),ge=w(I,"BR",{}),we=b(I,"\n    2. The response data lives\n    "),ve=w(I,"STRONG",{});var P=v(ve);be=b(P,"inside"),P.forEach(m),ye=b(I,"\n    the component’s state, and that means that it’s gone as soon as the\n    component unmounts;"),Ee=w(I,"BR",{}),xe=b(I,"\n    3. You’ll have to\n    "),$e=w(I,"STRONG",{});var q=v($e);ke=b(q,"always"),q.forEach(m),Re=b(I,"\n    fetch the data for each instance of the component, even if that specific\n    request was already done a billion times;"),Te=w(I,"BR",{}),Ie=b(I,"\n    4. There is no specific middle state between the request start and the\n    response, so no loading spinners (though you may be able to implement it\n    using setState callback hells);"),Se=w(I,"BR",{}),Ce=b(I,"\n    5. Since react components are hierarchical, if you need this data inside a\n    child or a parent component, you’ll need to implement contexts/props and\n    callbacks.\n    "),Le=w(I,"STRONG",{});var j=v(Le);Pe=b(j,"It gets messy. FAST."),j.forEach(m),qe=w(I,"BR",{}),I.forEach(m),je=g(h),De=w(h,"P",{});var A=v(De);Oe=b(A,"To make it better, most of us prefer to use a library to provide a global\n    application state; one that lives outside all components."),A.forEach(m),Ae=g(h),Ge=w(h,"H2",{});var ao=v(Ge);Me=b(ao,"Second step: use Redux"),ao.forEach(m),Ue=g(h),Fe=w(h,"P",{});var so=v(Fe);Ne=b(so,"Redux is one of the most amazing tools for the job. So let’s say you’re\n    using redux to manage the data and business logic. Assuming you’ll be using\n    the reducers to deal with business logic and data formatting, your component\n    code will probably look a bit like this:"),so.forEach(m),He=g(h),p(_e.$$.fragment,h),Be=g(h),We=w(h,"P",{});var ro=v(We);ze=b(ro,"This solves most of the issues, but I would argue that this solution makes\n    everything\n    "),Ye=w(ro,"STRONG",{});var io=v(Ye);Qe=b(io,"even more coupled"),io.forEach(m),Ke=b(ro,"\n    and, for sure,\n    "),Je=w(ro,"STRONG",{});var co=v(Je);Ve=b(co,"worse to read and maintain"),co.forEach(m),Xe=b(ro,". The root cause of the issue is\n    that the component is still being responsible for\n    "),Ze=w(ro,"STRONG",{});var lo=v(Ze);et=b(lo,"everything"),lo.forEach(m),tt=b(ro,": fetching the data and orchestrating redux\n    actions, when it’s only supposed to... render stuff. The ideal flow to solve\n    all issues,\n    "),nt=w(ro,"EM",{});var uo=v(nt);ot=b(uo,"at least the best for most cases"),uo.forEach(m),at=b(ro,", would be something akin to the\n    following flowchart:"),ro.forEach(m),st=g(h),rt=w(h,"UL",{class:!0});var ho=v(rt);it=w(ho,"LI",{});var fo=v(it);ct=b(fo,"Component mounts and dispatches isLoading signal to redux"),fo.forEach(m),dt=g(ho),lt=w(ho,"LI",{});var po=v(lt);ut=b(po,"Redux's action starts the request and triggers isLoading reducer"),po.forEach(m),ht=g(ho),ft=w(ho,"LI",{});var mo=v(ft);pt=b(mo,"Component renders loading spinner"),mo.forEach(m),mt=g(ho),gt=w(ho,"LI",{});var go=v(gt);wt=b(go,"Request is fullfilled asynchronously and triggers success or failure\n      reducer"),go.forEach(m),vt=g(ho),bt=w(ho,"LI",{});var wo=v(bt);yt=b(wo,"Component renders sucess or failure based on redux's data"),wo.forEach(m),ho.forEach(m),Et=g(h),xt=w(h,"P",{});var vo=v(xt);$t=b(vo,"Note that the only way to remove completely the business logic from the\n    component is to trigger the ‘Success’ and ‘Failure’ use cases\n    "),kt=w(vo,"STRONG",{});var bo=v(kt);Rt=b(bo,"outside"),bo.forEach(m),Tt=b(vo,"\n    of the component. Components should render stuff, not deal with\n    "),It=w(vo,"STRONG",{});var yo=v(It);St=b(yo,"application-wide"),yo.forEach(m),Ct=b(vo,"\n    state management. That means that the component should only dispatch one\n    event (the\n    "),Lt=w(vo,"EM",{});var Eo=v(Lt);Pt=b(Eo,"‘get me the data’"),Eo.forEach(m),qt=b(vo,"\n    event), then react to it whenever the data is there. For that, our component\n    code would need to be as simple as this:"),vo.forEach(m),jt=g(h),p(Dt.$$.fragment,h),Ot=g(h),At=w(h,"P",{});var xo=v(At);Gt=b(xo,"And that means that… the actions should fetch the data? And reducers would\n    dispatch actions? Sounds weird, right? Because it is. And it’s not what I’m\n    suggesting whatsoever."),xo.forEach(m),Mt=g(h),Ut=w(h,"H2",{});var $o=v(Ut);Ft=b($o,"Enter the middlewares"),$o.forEach(m),Nt=g(h),Ht=w(h,"P",{});var ko=v(Ht);_t=b(ko,"To deliver the ideal data flow,\n    "),Bt=w(ko,"STRONG",{});var Ro=v(Bt);Wt=b(Ro,"redux middlewares are amazing"),Ro.forEach(m),zt=b(ko,". Let’s say we want our\n    component to be exactly like that last bit of code. If we had something in\n    between actions and reducers, for example, we could make this\n    "),Yt=w(ko,"STRONG",{});var To=v(Yt);Qt=b(To,"inbetween"),To.forEach(m),Kt=b(ko,"\n    code deal with fetching the data and figuring out which reducers to fire,\n    leaving redux to do its job of managing state and events, while leaving\n    components focused on their jobs of rendering, and rendering only. The data\n    flow would be something like this:"),ko.forEach(m),Jt=g(h),Vt=w(h,"UL",{class:!0});var Io=v(Vt);Xt=w(Io,"LI",{});var So=v(Xt);Zt=b(So,"Component mounts and dispatches signal for redux to start the request"),So.forEach(m),en=g(Io),tn=w(Io,"LI",{});var Co=v(tn);nn=b(Co,"Redux's action describes success and failure reducers, along with which\n      function will make the request"),Co.forEach(m),on=g(Io),an=w(Io,"LI",{});var Lo=v(an);sn=w(Lo,"STRONG",{});var Po=v(sn);rn=b(Po,"Middleware calls the request function, saves the promise and\n        triggers the isLoading reducer"),Po.forEach(m),Lo.forEach(m),cn=g(Io),dn=w(Io,"LI",{});var qo=v(dn);ln=b(qo,"Component renders loading spinner"),qo.forEach(m),un=g(Io),hn=w(Io,"LI",{});var jo=v(hn);fn=w(jo,"STRONG",{});var Do=v(fn);pn=b(Do,"Middleware awaits the request and triggers the success or failure\n        reducer based on the action's specifications"),Do.forEach(m),jo.forEach(m),mn=g(Io),gn=w(Io,"LI",{});var Oo=v(gn);wn=b(Oo,"Success or failure reducer executes business logic and persists response's\n      data on the redux's store"),Oo.forEach(m),vn=g(Io),bn=w(Io,"LI",{});var Ao=v(bn);yn=b(Ao,"Component renders sucess or failure based on redux's data"),Ao.forEach(m),Io.forEach(m),En=g(h),xn=w(h,"P",{});var Go=v(xn);$n=b(Go,"With this proposed flow, our action could look like this:"),Go.forEach(m),kn=g(h),p(Rn.$$.fragment,h),Tn=g(h),In=w(h,"P",{});var Mo=v(In);Sn=b(Mo,"Ok, let’s slow down. What you see above is the current API for a request\n    action, using the middleware included in our\n    "),Cn=w(Mo,"A",{href:!0,target:!0,rel:!0});var Uo=v(Cn);Ln=w(Uo,"CODE",{});var Fo=v(Ln);Pn=b(Fo,"react-redux-api-tools"),Fo.forEach(m),Uo.forEach(m),qn=b(Mo,"\n    npm package. Dispatching this action would configure the middleware to make\n    the request (by calling\n    "),jn=w(Mo,"CODE",{});var No=v(jn);Dn=b(No,"apiCallFunction"),No.forEach(m),On=b(Mo,") and to use the correct reducer whenever the\n    request is done. Meanwhile, our component and reducers would remain\n    unaltered:"),Mo.forEach(m),An=g(h),p(Gn.$$.fragment,h),Mn=g(h),p(Un.$$.fragment,h),Fn=g(h),Nn=w(h,"P",{});var Ho=v(Nn);Hn=b(Ho,"And "),_n=w(Ho,"EM",{});var _o=v(_n);Bn=b(_o,"voilá"),_o.forEach(m),Wn=b(Ho,", the flow is much cleaner, simpler and decoupled!"),Ho.forEach(m),zn=g(h),Yn=w(h,"H2",{});var Bo=v(Yn);Qn=b(Bo,"If you liked this or it seems too magical..."),Bo.forEach(m),Kn=g(h),Jn=w(h,"P",{});var Wo=v(Jn);Vn=b(Wo,"Have you enjoyed this middleware API, want to develop your react-redux app\n    like this or are just curious on how this all works? Then consider using and\n    contributing to our\n    "),Xn=w(Wo,"A",{href:!0});var zo=v(Xn);Zn=b(zo,"react-redux-api-tools"),zo.forEach(m),eo=b(Wo,"\n    npm package. Bugs and feature proposals are welcome! And this is only the\n    start;\n    "),to=w(Wo,"A",{href:!0});var Yo=v(to);no=b(Yo,"react-redux-api-tools"),Yo.forEach(m),oo=b(Wo,"\n    has a bunch of other features I’ve not talked about. Give our docs a good\n    read to find out how to further improve and simplify your code using our\n    tools! Thanks, and see you later!"),Wo.forEach(m),h.forEach(m),this.h()},h:function(){O.src!==(A=j)&&y(O,"src",A),y(O,"alt","Logos of React and Redux"),y(rt,"class","callout"),y(Vt,"class","callout"),y(Cn,"href","https://www.npmjs.com/package/react-redux-api-tools"),y(Cn,"target","_blank"),y(Cn,"rel","noopener"),y(Xn,"href","https://www.npmjs.com/package/react-redux-api-tools"),y(to,"href","https://www.npmjs.com/package/react-redux-api-tools")},m:function(c,d){E(t,document.head,null),x(c,n,d),x(c,o,d),$(o,a),$(a,s),x(c,r,d),E(i,c,d),x(c,S,d),x(c,D,d),$(D,O),x(c,G,d),x(c,M,d),$(M,U),$(U,F),$(U,N),$(N,H),$(U,_),$(U,B),$(B,W),$(U,z),$(M,Y),$(M,Q),$(Q,K),$(M,J),$(M,V),$(V,X),$(M,Z),E(ee,M,null),$(M,te),$(M,ne),$(ne,oe),$(ne,ae),$(ae,se),$(ne,re),$(M,ie),$(M,ce),$(ce,de),$(ce,le),$(le,ue),$(ce,he),$(ce,fe),$(fe,pe),$(ce,me),$(ce,ge),$(ce,we),$(ce,ve),$(ve,be),$(ce,ye),$(ce,Ee),$(ce,xe),$(ce,$e),$($e,ke),$(ce,Re),$(ce,Te),$(ce,Ie),$(ce,Se),$(ce,Ce),$(ce,Le),$(Le,Pe),$(ce,qe),$(M,je),$(M,De),$(De,Oe),$(M,Ae),$(M,Ge),$(Ge,Me),$(M,Ue),$(M,Fe),$(Fe,Ne),$(M,He),E(_e,M,null),$(M,Be),$(M,We),$(We,ze),$(We,Ye),$(Ye,Qe),$(We,Ke),$(We,Je),$(Je,Ve),$(We,Xe),$(We,Ze),$(Ze,et),$(We,tt),$(We,nt),$(nt,ot),$(We,at),$(M,st),$(M,rt),$(rt,it),$(it,ct),$(rt,dt),$(rt,lt),$(lt,ut),$(rt,ht),$(rt,ft),$(ft,pt),$(rt,mt),$(rt,gt),$(gt,wt),$(rt,vt),$(rt,bt),$(bt,yt),$(M,Et),$(M,xt),$(xt,$t),$(xt,kt),$(kt,Rt),$(xt,Tt),$(xt,It),$(It,St),$(xt,Ct),$(xt,Lt),$(Lt,Pt),$(xt,qt),$(M,jt),E(Dt,M,null),$(M,Ot),$(M,At),$(At,Gt),$(M,Mt),$(M,Ut),$(Ut,Ft),$(M,Nt),$(M,Ht),$(Ht,_t),$(Ht,Bt),$(Bt,Wt),$(Ht,zt),$(Ht,Yt),$(Yt,Qt),$(Ht,Kt),$(M,Jt),$(M,Vt),$(Vt,Xt),$(Xt,Zt),$(Vt,en),$(Vt,tn),$(tn,nn),$(Vt,on),$(Vt,an),$(an,sn),$(sn,rn),$(Vt,cn),$(Vt,dn),$(dn,ln),$(Vt,un),$(Vt,hn),$(hn,fn),$(fn,pn),$(Vt,mn),$(Vt,gn),$(gn,wn),$(Vt,vn),$(Vt,bn),$(bn,yn),$(M,En),$(M,xn),$(xn,$n),$(M,kn),E(Rn,M,null),$(M,Tn),$(M,In),$(In,Sn),$(In,Cn),$(Cn,Ln),$(Ln,Pn),$(In,qn),$(In,jn),$(jn,Dn),$(In,On),$(M,An),E(Gn,M,null),$(M,Mn),E(Un,M,null),$(M,Fn),$(M,Nn),$(Nn,Hn),$(Nn,_n),$(_n,Bn),$(Nn,Wn),$(M,zn),$(M,Yn),$(Yn,Qn),$(M,Kn),$(M,Jn),$(Jn,Vn),$(Jn,Xn),$(Xn,Zn),$(Jn,eo),$(Jn,to),$(to,no),$(Jn,oo),e[2](M),ao=!0},p:function(e,t){var n={};2&k(t,1)[0]&&(n.text=e[1]),i.$set(n)},i:function(e){ao||(R(t.$$.fragment,e),R(i.$$.fragment,e),R(ee.$$.fragment,e),R(_e.$$.fragment,e),R(Dt.$$.fragment,e),R(Rn.$$.fragment,e),R(Gn.$$.fragment,e),R(Un.$$.fragment,e),ao=!0)},o:function(e){T(t.$$.fragment,e),T(i.$$.fragment,e),T(ee.$$.fragment,e),T(_e.$$.fragment,e),T(Dt.$$.fragment,e),T(Rn.$$.fragment,e),T(Gn.$$.fragment,e),T(Un.$$.fragment,e),ao=!1},d:function(a){I(t),a&&m(n),a&&m(o),a&&m(r),I(i,a),a&&m(S),a&&m(D),a&&m(G),a&&m(M),I(ee),I(_e),I(Dt),I(Rn),I(Gn),I(Un),e[2](null)}}}function A(e,t,n){var o,a;return e.$$.update=function(){1&e.$$.dirty&&n(1,a=o&&o.textContent)},[o,a,function(e){S[e?"unshift":"push"]((function(){n(0,o=e)}))}]}var G=function(t){e(c,r);var n=D(c);function c(e){var t;return o(this,c),t=n.call(this),a(s(t),e,A,O,i,{}),t}return c}();export default G;

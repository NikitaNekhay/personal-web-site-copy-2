import{S as _t,i as mt,s as bt,e as i,t as E,a as v,p as Ht,c,b as d,d as y,f as o,g as _,q as Lt,u as n,h as Q,j as t,w as Ue,o as Mt,k as N,E as $e,I as Jt,F as je,J as Yt,r as jt,l as Qt,K as Wt,v as pt,n as Ce,N as Zt,B as gt,C as wt,D as kt,G as Et,x as Rt,H as ht,z as er}from"../chunks/index.b32834ed.js";import{X as tr}from"../chunks/runtime.esm.2ece9166.js";import{a as rr,u as lr,h as Gt}from"../chunks/user.2c72d1b0.js";import{b as vt}from"../chunks/paths.f19bd6bd.js";import{L as ar}from"../chunks/LoadingSpinner.2f071f8c.js";function qt(e,l,s){const a=e.slice();return a[19]=l[s],a[20]=l,a[21]=s,a}function zt(e){const l=e.slice(),s=l[8](l[0][0],0);return l[22]=s,l}function Ft(e){let l,s,a,r,f,u=e[0].length&&Kt(zt(e));const m=[or,nr,sr],x=[];function D(p,k){return p[2]?0:p[3]?1:2}return s=D(e),a=x[s]=m[s](e),{c(){u&&u.c(),l=v(),a.c(),r=pt()},l(p){u&&u.l(p),l=_(p),a.l(p),r=pt()},m(p,k){u&&u.m(p,k),Q(p,l,k),x[s].m(p,k),Q(p,r,k),f=!0},p(p,k){p[0].length?u||(u=Kt(zt(p)),u.c(),u.m(l.parentNode,l)):u&&(u.d(1),u=null);let T=s;s=D(p),s===T?x[s].p(p,k):(Jt(),je(x[T],1,1,()=>{x[T]=null}),Yt(),a=x[s],a?a.p(p,k):(a=x[s]=m[s](p),a.c()),$e(a,1),a.m(r.parentNode,r))},i(p){f||($e(a),f=!0)},o(p){je(a),f=!1},d(p){u&&u.d(p),p&&o(l),x[s].d(p),p&&o(r)}}}function Kt(e){let l,s;return{c(){l=i("p"),s=E("1"),this.h()},l(a){l=c(a,"P",{class:!0});var r=d(l);s=y(r,"1"),r.forEach(o),this.h()},h(){n(l,"class","text-transparent")},m(a,r){Q(a,l,r),t(l,s)},d(a){a&&o(l)}}}function sr(e){let l,s=e[1],a=[];for(let r=0;r<s.length;r+=1)a[r]=Xt(qt(e,s,r));return{c(){for(let r=0;r<a.length;r+=1)a[r].c();l=pt()},l(r){for(let f=0;f<a.length;f+=1)a[f].l(r);l=pt()},m(r,f){for(let u=0;u<a.length;u+=1)a[u]&&a[u].m(r,f);Q(r,l,f)},p(r,f){if(f&50){s=r[1];let u;for(u=0;u<s.length;u+=1){const m=qt(r,s,u);a[u]?a[u].p(m,f):(a[u]=Xt(m),a[u].c(),a[u].m(l.parentNode,l))}for(;u<a.length;u+=1)a[u].d(1);a.length=s.length}},i:Ce,o:Ce,d(r){Zt(a,r),r&&o(l)}}}function nr(e){let l,s,a=e[4]("NO USERS | FOUND")+"",r;return{c(){l=i("div"),s=i("h1"),r=E(a),this.h()},l(f){l=c(f,"DIV",{class:!0});var u=d(l);s=c(u,"H1",{class:!0});var m=d(s);r=y(m,a),m.forEach(o),u.forEach(o),this.h()},h(){n(s,"class","font-abril text-3xl uppercase tracking-widest text-black-1"),n(l,"class","grid h-screen place-content-center bg-white px-4")},m(f,u){Q(f,l,u),t(l,s),t(s,r)},p(f,u){u&16&&a!==(a=f[4]("NO USERS | FOUND")+"")&&N(r,a)},i:Ce,o:Ce,d(f){f&&o(l)}}}function or(e){let l,s,a;return s=new ar({}),{c(){l=i("div"),gt(s.$$.fragment),this.h()},l(r){l=c(r,"DIV",{class:!0});var f=d(l);wt(s.$$.fragment,f),f.forEach(o),this.h()},h(){n(l,"class","w-full")},m(r,f){Q(r,l,f),kt(s,l,null),a=!0},p:Ce,i(r){a||($e(s.$$.fragment,r),a=!0)},o(r){je(s.$$.fragment,r),a=!1},d(r){r&&o(l),Et(s)}}}function ir(e){let l=e[4]("User")+"",s;return{c(){s=E(l)},l(a){s=y(a,l)},m(a,r){Q(a,s,r)},p(a,r){r&16&&l!==(l=a[4]("User")+"")&&N(s,l)},d(a){a&&o(s)}}}function cr(e){let l=e[4]("Admin")+"",s;return{c(){s=E(l)},l(a){s=y(a,l)},m(a,r){Q(a,s,r)},p(a,r){r&16&&l!==(l=a[4]("Admin")+"")&&N(s,l)},d(a){a&&o(s)}}}function ur(e){let l=e[19].messages.length+"",s;return{c(){s=E(l)},l(a){s=y(a,l)},m(a,r){Q(a,s,r)},p(a,r){r&2&&l!==(l=a[19].messages.length+"")&&N(s,l)},d(a){a&&o(s)}}}function dr(e){let l;return{c(){l=E("0")},l(s){l=y(s,"0")},m(s,a){Q(s,l,a)},p:Ce,d(s){s&&o(l)}}}function Xt(e){let l,s,a,r,f,u,m,x,D,p=e[4]("Enter the name")+"",k,T,O,A,H,K,U,ce,X,L,h,b,P,$=e[4]("Enter email")+"",M,re,F,W,C,Z,J,ue,Be,ee,de=e[19].id+"",Ee,He,te,Y,fe,R,le,ye,he,pe,xe,De,be,G,ae,Ie,ve,_e,Ne,Le,se,V;function Me(){e[9].call(m,e[20],e[21])}function Re(B,w){return B[19].email==="ktofreesapiens@gmail.com"||B[19].email==="vaper20041337@gmail.com"?cr:ir}let Se=Re(e),q=Se(e);function Qe(){e[10].call(h,e[20],e[21])}function We(B,w){return B[19].messages.length==0?dr:ur}let ge=We(e),z=ge(e);function st(){return e[11](e[19])}function Ge(){return e[12](e[19])}function Ze(){return e[13](e[19])}function nt(){return e[14](e[19])}return{c(){l=i("tr"),s=i("td"),a=i("div"),r=i("div"),f=i("div"),u=i("label"),m=i("input"),x=v(),D=i("span"),k=E(p),T=v(),O=i("td"),A=i("p"),q.c(),H=v(),K=i("td"),U=i("div"),ce=i("div"),X=i("div"),L=i("label"),h=i("input"),b=v(),P=i("span"),M=E($),re=v(),F=i("td"),W=i("p"),z.c(),C=v(),Z=i("td"),J=i("span"),ue=i("span"),Be=v(),ee=i("span"),Ee=E(de),He=v(),te=i("td"),Y=i("div"),fe=i("div"),R=i("div"),le=i("span"),ye=v(),he=i("span"),pe=i("img"),De=v(),be=i("div"),G=i("div"),ae=i("span"),Ie=v(),ve=i("span"),_e=i("img"),Le=v(),this.h()},l(B){l=c(B,"TR",{});var w=d(l);s=c(w,"TD",{class:!0});var et=d(s);a=c(et,"DIV",{class:!0});var Oe=d(a);r=c(Oe,"DIV",{class:!0});var qe=d(r);f=c(qe,"DIV",{class:!0});var tt=d(f);u=c(tt,"LABEL",{class:!0,for:!0});var we=d(u);m=c(we,"INPUT",{class:!0,type:!0,id:!0,autocomplete:!0}),x=_(we),D=c(we,"SPAN",{class:!0});var ze=d(D);k=y(ze,p),ze.forEach(o),we.forEach(o),tt.forEach(o),qe.forEach(o),Oe.forEach(o),et.forEach(o),T=_(w),O=c(w,"TD",{class:!0});var rt=d(O);A=c(rt,"P",{class:!0});var me=d(A);q.l(me),me.forEach(o),rt.forEach(o),H=_(w),K=c(w,"TD",{class:!0});var ke=d(K);U=c(ke,"DIV",{class:!0});var Ve=d(U);ce=c(Ve,"DIV",{class:!0});var Fe=d(ce);X=c(Fe,"DIV",{class:!0});var lt=d(X);L=c(lt,"LABEL",{class:!0,for:!0});var ne=d(L);h=c(ne,"INPUT",{class:!0,type:!0,id:!0,autocomplete:!0}),b=_(ne),P=c(ne,"SPAN",{class:!0});var Pe=d(P);M=y(Pe,$),Pe.forEach(o),ne.forEach(o),lt.forEach(o),Fe.forEach(o),Ve.forEach(o),ke.forEach(o),re=_(w),F=c(w,"TD",{class:!0});var Ke=d(F);W=c(Ke,"P",{class:!0});var I=d(W);z.l(I),I.forEach(o),Ke.forEach(o),C=_(w),Z=c(w,"TD",{class:!0});var at=d(Z);J=c(at,"SPAN",{class:!0});var Xe=d(J);ue=c(Xe,"SPAN",{"aria-hidden":!0,class:!0}),d(ue).forEach(o),Be=_(Xe),ee=c(Xe,"SPAN",{class:!0});var S=d(ee);Ee=y(S,de),S.forEach(o),Xe.forEach(o),at.forEach(o),He=_(w),te=c(w,"TD",{class:!0});var oe=d(te);Y=c(oe,"DIV",{class:!0});var g=d(Y);fe=c(g,"DIV",{class:!0});var Je=d(fe);R=c(Je,"DIV",{class:!0,id:!0,"aria-expanded":!0,"aria-haspopup":!0});var Te=d(R);le=c(Te,"SPAN",{class:!0}),d(le).forEach(o),ye=_(Te),he=c(Te,"SPAN",{class:!0});var ot=d(he);pe=c(ot,"IMG",{class:!0,alt:!0,src:!0}),ot.forEach(o),Te.forEach(o),Je.forEach(o),De=_(g),be=c(g,"DIV",{});var it=d(be);G=c(it,"DIV",{class:!0,id:!0,"aria-expanded":!0,"aria-haspopup":!0});var Ae=d(G);ae=c(Ae,"SPAN",{class:!0}),d(ae).forEach(o),Ie=_(Ae),ve=c(Ae,"SPAN",{class:!0});var Ye=d(ve);_e=c(Ye,"IMG",{class:!0,alt:!0,src:!0}),Ye.forEach(o),Ae.forEach(o),it.forEach(o),g.forEach(o),oe.forEach(o),Le=_(w),w.forEach(o),this.h()},h(){n(m,"class","peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"),n(m,"type","text"),m.required=!0,n(m,"id","name"),n(m,"autocomplete","given-name"),n(D,"class","whitespace-no-wrap absolute start-3 top-3 -translate-y-1/2 cursor-text text-xs text-gray-900 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"),n(u,"class","relative block overflow-hidden rounded-md border border-transparent px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1 focus-within:ring-white-2"),n(u,"for","first-name"),n(f,"class","w-full px-3"),n(r,"class","place -mx-3 mb-6 flex flex-wrap place-content-center"),n(a,"class","mt-4 flex"),n(s,"class","border-b border-gray-200 bg-white px-5 py-5 text-sm"),n(A,"class","whitespace-no-wrap text-gray-900"),n(O,"class","border-b border-gray-200 bg-white px-5 py-5 text-sm"),n(h,"class","peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"),n(h,"type","text"),h.required=!0,n(h,"id","email"),n(h,"autocomplete","given-name"),n(P,"class","whitespace-no-wrap absolute start-3 top-3 -translate-y-1/2 cursor-text text-xs text-gray-900 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"),n(L,"class","relative block overflow-hidden rounded-md border border-transparent px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1 focus-within:ring-white-2"),n(L,"for","first-name"),n(X,"class","w-full px-3"),n(ce,"class","place -mx-3 mb-6 flex flex-wrap place-content-center"),n(U,"class","mt-4 flex"),n(K,"class","border-b border-gray-200 bg-white px-5 py-5 text-sm"),n(W,"class","whitespace-no-wrap text-gray-900"),n(F,"class","border-b border-gray-200 bg-white px-5 py-5 text-sm"),n(ue,"aria-hidden",""),n(ue,"class","absolute inset-0 rounded-full bg-green-200 opacity-50"),n(ee,"class","relative"),n(J,"class","relative inline-block px-3 py-1 font-semibold leading-tight text-green-900"),n(Z,"class","border-b border-gray-200 bg-white px-5 py-5 text-sm"),n(le,"class","absolute inset-0 translate-x-0 translate-y-0 bg-navy-1 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"),n(pe,"class","mr-1"),n(pe,"alt","setting"),Rt(pe.src,xe=vt+"/media/edit.svg")||n(pe,"src",xe),n(he,"class","relative block border border-current bg-white px-8 py-3"),n(R,"class","group relative inline-block text-sm font-medium text-black-1 hover:cursor-pointer focus:outline-none focus:ring active:text-black-1"),n(R,"id","menu-button"),n(R,"aria-expanded","true"),n(R,"aria-haspopup","true"),n(fe,"class",""),n(ae,"class","absolute inset-0 translate-x-0 translate-y-0 bg-navy-1 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"),n(_e,"class","mr-1"),n(_e,"alt","setting"),Rt(_e.src,Ne=vt+"/media/trash.svg")||n(_e,"src",Ne),n(ve,"class","relative block border border-current bg-white px-8 py-3"),n(G,"class","group relative inline-block text-sm font-medium text-black-1 hover:cursor-pointer focus:outline-none focus:ring active:text-black-1"),n(G,"id","menu-button"),n(G,"aria-expanded","true"),n(G,"aria-haspopup","true"),n(Y,"class","flex justify-items-center gap-4"),n(te,"class","border-b border-gray-200 bg-white px-5 py-5 text-sm")},m(B,w){Q(B,l,w),t(l,s),t(s,a),t(a,r),t(r,f),t(f,u),t(u,m),ht(m,e[19].name),t(u,x),t(u,D),t(D,k),t(l,T),t(l,O),t(O,A),q.m(A,null),t(l,H),t(l,K),t(K,U),t(U,ce),t(ce,X),t(X,L),t(L,h),ht(h,e[19].email),t(L,b),t(L,P),t(P,M),t(l,re),t(l,F),t(F,W),z.m(W,null),t(l,C),t(l,Z),t(Z,J),t(J,ue),t(J,Be),t(J,ee),t(ee,Ee),t(l,He),t(l,te),t(te,Y),t(Y,fe),t(fe,R),t(R,le),t(R,ye),t(R,he),t(he,pe),t(Y,De),t(Y,be),t(be,G),t(G,ae),t(G,Ie),t(G,ve),t(ve,_e),t(l,Le),se||(V=[Ue(m,"input",Me),Ue(h,"input",Qe),Ue(R,"click",st),Ue(R,"keypress",Ge),Ue(G,"click",Ze),Ue(G,"keypress",nt)],se=!0)},p(B,w){e=B,w&2&&m.value!==e[19].name&&ht(m,e[19].name),w&16&&p!==(p=e[4]("Enter the name")+"")&&N(k,p),Se===(Se=Re(e))&&q?q.p(e,w):(q.d(1),q=Se(e),q&&(q.c(),q.m(A,null))),w&2&&h.value!==e[19].email&&ht(h,e[19].email),w&16&&$!==($=e[4]("Enter email")+"")&&N(M,$),ge===(ge=We(e))&&z?z.p(e,w):(z.d(1),z=ge(e),z&&(z.c(),z.m(W,null))),w&2&&de!==(de=e[19].id+"")&&N(Ee,de)},d(B){B&&o(l),q.d(),z.d(),se=!1,jt(V)}}}function fr(e){let l,s,a,r,f=e[4]("Table of users")+"",u,m,x,D=e[4]("All users")+"",p,k,T,O,A,H,K,U,ce,X,L,h=e[4]("Create")+"",b,P,$,M,re,F,W,C,Z,J=e[4]("User name")+"",ue,Be,ee,de=e[4]("Role")+"",Ee,He,te,Y=e[4]("Email")+"",fe,R,le,ye=e[4]("Liked products")+"",he,pe,xe,De=e[4]("Status")+"",be,G,ae,Ie=e[4]("Actions")+"",ve,_e,Ne,Le,se,V,Me=e[4]("Showing")+"",Re,Se,q=e[0].indexOf(e[1][0])+1+"",Qe,We,ge=e[4]("to")+"",z,st,Ge=e[0].indexOf(e[1][e[1].length-1])+1+"",Ze,nt,B=e[4]("of")+"",w,et,Oe=e[0].length+"",qe,tt,we=e[4]("users")+"",ze,rt,me,ke,Ve=e[4]("BACK")+"",Fe,lt,ne,Pe=e[4]("NEXT")+"",Ke,I,at,Xe,S=e[0].length!=0&&e[0].length!=null&&Ft(e);return{c(){l=i("div"),s=i("div"),a=i("div"),r=i("h2"),u=E(f),m=v(),x=i("span"),p=E(D),k=v(),T=i("div"),O=i("div"),A=Ht("svg"),H=Ht("path"),K=v(),U=i("input"),ce=v(),X=i("div"),L=i("button"),b=E(h),P=v(),$=i("div"),M=i("div"),re=i("div"),F=i("table"),W=i("thead"),C=i("tr"),Z=i("th"),ue=E(J),Be=v(),ee=i("th"),Ee=E(de),He=v(),te=i("th"),fe=E(Y),R=v(),le=i("th"),he=E(ye),pe=v(),xe=i("th"),be=E(De),G=v(),ae=i("th"),ve=E(Ie),_e=v(),Ne=i("tbody"),S&&S.c(),Le=v(),se=i("div"),V=i("span"),Re=E(Me),Se=v(),Qe=E(q),We=v(),z=E(ge),st=v(),Ze=E(Ge),nt=v(),w=E(B),et=v(),qe=E(Oe),tt=v(),ze=E(we),rt=v(),me=i("div"),ke=i("button"),Fe=E(Ve),lt=E(`\r
               \r
            `),ne=i("button"),Ke=E(Pe),this.h()},l(oe){l=c(oe,"DIV",{class:!0});var g=d(l);s=c(g,"DIV",{class:!0});var Je=d(s);a=c(Je,"DIV",{});var Te=d(a);r=c(Te,"H2",{class:!0});var ot=d(r);u=y(ot,f),ot.forEach(o),m=_(Te),x=c(Te,"SPAN",{class:!0});var it=d(x);p=y(it,D),it.forEach(o),Te.forEach(o),k=_(Je),T=c(Je,"DIV",{class:!0});var Ae=d(T);O=c(Ae,"DIV",{class:!0});var Ye=d(O);A=Lt(Ye,"svg",{xmlns:!0,class:!0,viewBox:!0,fill:!0});var yt=d(A);H=Lt(yt,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),d(H).forEach(o),yt.forEach(o),K=_(Ye),U=c(Ye,"INPUT",{class:!0,type:!0,name:!0,id:!0,placeholder:!0}),Ye.forEach(o),ce=_(Ae),X=c(Ae,"DIV",{class:!0});var xt=d(X);L=c(xt,"BUTTON",{class:!0});var Dt=d(L);b=y(Dt,h),Dt.forEach(o),xt.forEach(o),Ae.forEach(o),Je.forEach(o),P=_(g),$=c(g,"DIV",{});var It=d($);M=c(It,"DIV",{class:!0});var Nt=d(M);re=c(Nt,"DIV",{class:!0});var ct=d(re);F=c(ct,"TABLE",{class:!0});var ut=d(F);W=c(ut,"THEAD",{});var Tt=d(W);C=c(Tt,"TR",{});var ie=d(C);Z=c(ie,"TH",{class:!0});var At=d(Z);ue=y(At,J),At.forEach(o),Be=_(ie),ee=c(ie,"TH",{class:!0});var St=d(ee);Ee=y(St,de),St.forEach(o),He=_(ie),te=c(ie,"TH",{class:!0});var Ot=d(te);fe=y(Ot,Y),Ot.forEach(o),R=_(ie),le=c(ie,"TH",{class:!0});var Vt=d(le);he=y(Vt,ye),Vt.forEach(o),pe=_(ie),xe=c(ie,"TH",{class:!0});var Pt=d(xe);be=y(Pt,De),Pt.forEach(o),G=_(ie),ae=c(ie,"TH",{class:!0});var Ut=d(ae);ve=y(Ut,Ie),Ut.forEach(o),ie.forEach(o),Tt.forEach(o),_e=_(ut),Ne=c(ut,"TBODY",{});var $t=d(Ne);S&&S.l($t),$t.forEach(o),ut.forEach(o),Le=_(ct),se=c(ct,"DIV",{class:!0});var dt=d(se);V=c(dt,"SPAN",{class:!0});var j=d(V);Re=y(j,Me),Se=_(j),Qe=y(j,q),We=_(j),z=y(j,ge),st=_(j),Ze=y(j,Ge),nt=_(j),w=y(j,B),et=_(j),qe=y(j,Oe),tt=_(j),ze=y(j,we),j.forEach(o),rt=_(dt),me=c(dt,"DIV",{class:!0});var ft=d(me);ke=c(ft,"BUTTON",{class:!0});var Ct=d(ke);Fe=y(Ct,Ve),Ct.forEach(o),lt=y(ft,`\r
               \r
            `),ne=c(ft,"BUTTON",{class:!0});var Bt=d(ne);Ke=y(Bt,Pe),Bt.forEach(o),ft.forEach(o),dt.forEach(o),ct.forEach(o),Nt.forEach(o),It.forEach(o),g.forEach(o),this.h()},h(){n(r,"class","font-semibold text-gray-600"),n(x,"class","text-xs"),n(H,"fill-rule","evenodd"),n(H,"d","M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"),n(H,"clip-rule","evenodd"),n(A,"xmlns","http://www.w3.org/2000/svg"),n(A,"class","h-5 w-5 text-gray-400"),n(A,"viewBox","0 0 20 20"),n(A,"fill","currentColor"),n(U,"class","ml-1 block bg-gray-50 outline-none"),n(U,"type","text"),n(U,"name",""),n(U,"id",""),n(U,"placeholder","search..."),n(O,"class","flex items-center bg-white-2 p-2"),n(L,"class","cursor-pointer rounded-md bg-orange-0 px-4 py-2 font-semibold tracking-wide text-white"),n(X,"class","ml-10 space-x-8 lg:ml-40"),n(T,"class","flex items-center justify-between"),n(s,"class","flex items-center justify-between pb-6"),n(Z,"class","border-b-2 border-gray-200 bg-white-2 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"),n(ee,"class","border-b-2 border-gray-200 bg-white-2 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"),n(te,"class","border-b-2 border-gray-200 bg-white-2 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"),n(le,"class","border-b-2 border-gray-200 bg-white-2 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"),n(xe,"class","border-b-2 border-gray-200 bg-white-2 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"),n(ae,"class","border-b-2 border-gray-200 bg-white-2 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"),n(F,"class","min-w-full leading-normal"),n(V,"class","xs:text-sm text-xs text-gray-900"),n(ke,"class","rounded-l bg-indigo-600 px-4 py-2 text-sm font-semibold text-indigo-50 transition duration-150 hover:bg-indigo-500"),n(ne,"class","rounded-r bg-indigo-600 px-4 py-2 text-sm font-semibold text-indigo-50 transition duration-150 hover:bg-indigo-500"),n(me,"class","xs:mt-0 mt-2 inline-flex"),n(se,"class","xs:flex-row xs:justify-between flex flex-col items-center border-t bg-white px-5 py-5"),n(re,"class","inline-block min-w-full overflow-hidden rounded-lg shadow"),n(M,"class","-mx-4 overflow-x-auto px-4 py-4 sm:-mx-8 sm:px-8"),n(l,"class","w-full rounded-md bg-white-1 p-8 font-anonymous")},m(oe,g){Q(oe,l,g),t(l,s),t(s,a),t(a,r),t(r,u),t(a,m),t(a,x),t(x,p),t(s,k),t(s,T),t(T,O),t(O,A),t(A,H),t(O,K),t(O,U),t(T,ce),t(T,X),t(X,L),t(L,b),t(l,P),t(l,$),t($,M),t(M,re),t(re,F),t(F,W),t(W,C),t(C,Z),t(Z,ue),t(C,Be),t(C,ee),t(ee,Ee),t(C,He),t(C,te),t(te,fe),t(C,R),t(C,le),t(le,he),t(C,pe),t(C,xe),t(xe,be),t(C,G),t(C,ae),t(ae,ve),t(F,_e),t(F,Ne),S&&S.m(Ne,null),t(re,Le),t(re,se),t(se,V),t(V,Re),t(V,Se),t(V,Qe),t(V,We),t(V,z),t(V,st),t(V,Ze),t(V,nt),t(V,w),t(V,et),t(V,qe),t(V,tt),t(V,ze),t(se,rt),t(se,me),t(me,ke),t(ke,Fe),t(me,lt),t(me,ne),t(ne,Ke),I=!0,at||(Xe=[Ue(ke,"click",function(){Mt(e[7](e[1][0]))&&e[7](e[1][0]).apply(this,arguments)}),Ue(ne,"click",function(){Mt(e[6](e[1][e[1].length-1]))&&e[6](e[1][e[1].length-1]).apply(this,arguments)})],at=!0)},p(oe,[g]){e=oe,(!I||g&16)&&f!==(f=e[4]("Table of users")+"")&&N(u,f),(!I||g&16)&&D!==(D=e[4]("All users")+"")&&N(p,D),(!I||g&16)&&h!==(h=e[4]("Create")+"")&&N(b,h),(!I||g&16)&&J!==(J=e[4]("User name")+"")&&N(ue,J),(!I||g&16)&&de!==(de=e[4]("Role")+"")&&N(Ee,de),(!I||g&16)&&Y!==(Y=e[4]("Email")+"")&&N(fe,Y),(!I||g&16)&&ye!==(ye=e[4]("Liked products")+"")&&N(he,ye),(!I||g&16)&&De!==(De=e[4]("Status")+"")&&N(be,De),(!I||g&16)&&Ie!==(Ie=e[4]("Actions")+"")&&N(ve,Ie),e[0].length!=0&&e[0].length!=null?S?(S.p(e,g),g&1&&$e(S,1)):(S=Ft(e),S.c(),$e(S,1),S.m(Ne,null)):S&&(Jt(),je(S,1,1,()=>{S=null}),Yt()),(!I||g&16)&&Me!==(Me=e[4]("Showing")+"")&&N(Re,Me),(!I||g&3)&&q!==(q=e[0].indexOf(e[1][0])+1+"")&&N(Qe,q),(!I||g&16)&&ge!==(ge=e[4]("to")+"")&&N(z,ge),(!I||g&3)&&Ge!==(Ge=e[0].indexOf(e[1][e[1].length-1])+1+"")&&N(Ze,Ge),(!I||g&16)&&B!==(B=e[4]("of")+"")&&N(w,B),(!I||g&1)&&Oe!==(Oe=e[0].length+"")&&N(qe,Oe),(!I||g&16)&&we!==(we=e[4]("users")+"")&&N(ze,we),(!I||g&16)&&Ve!==(Ve=e[4]("BACK")+"")&&N(Fe,Ve),(!I||g&16)&&Pe!==(Pe=e[4]("NEXT")+"")&&N(Ke,Pe)},i(oe){I||($e(S),I=!0)},o(oe){je(S),I=!1},d(oe){oe&&o(l),S&&S.d(),at=!1,jt(Xe)}}}function hr(e,l,s){let a;Qt(e,tr,h=>s(4,a=h));let r=[],f=[],u=!0,m=!1,x=!1,D=0;Wt(async()=>{try{s(0,r=await rr()),D=r.length;const h=setInterval(()=>{u&&r.length===0&&s(3,m=!0),s(2,u=!1),x=!0},2e3);return()=>clearInterval(h)}catch(h){console.error("fetched the user from db got error:",h)}});async function p(h){try{await lr(r[r.indexOf(h)].id,r[r.indexOf(h)].name,r[r.indexOf(h)].email,r[r.indexOf(h)].phone,r[r.indexOf(h)].country,r[r.indexOf(h)].description,r[r.indexOf(h)].messages).then(()=>{console.log("Profile updated successfully.")}).catch(b=>{console.error("Error updating profile:",b.message)})}catch(b){console.error(b)}}function k(h){try{r[r.indexOf(h)+1]!==void 0&&A(r[r.indexOf(h)+1],r.indexOf(h)+1)}catch(b){console.error("error while nextclicking..",b)}}function T(h){try{r[r.indexOf(h)-1]!==void 0&&O(r[r.indexOf(h)-1],r.indexOf(h)-1)}catch(b){console.error("error while backclicking..",b)}}function O(h,b){if(b>=3){s(1,f.length=0,f);var P=0,$=b;for($;P<4;$--)f.unshift(r[$]),P++;return 1}}function A(h,b){let P=4;f.length>=4&&s(1,f.length=0,f),r.length-b%4!==0&&r.length-b<=4?P=r.length-b:r.length>4?P=P-b%4:b!==0?P=b%4:P=r.length;for(var $=0,M=b;$<P&&($=0,!(M%4===0&&M!==b));M++){if(r[M]===void 0)break;f.push(r[M]),$++}return 1}function H(h,b){h[b].name=this.value,s(1,f)}function K(h,b){h[b].email=this.value,s(1,f)}return[r,f,u,m,a,p,k,T,A,H,K,h=>p(h),h=>p(h),h=>{Gt(h.id),console.log("clicked delete"),window.location.href=`${vt}/dashboard/#`,location.reload()},h=>{Gt(h.id),console.log("clicked delete"),window.location.href=`${vt}/dashboard/#`,location.reload()}]}class pr extends _t{constructor(l){super(),mt(this,l,hr,fr,bt,{})}}function vr(e){let l,s,a,r,f,u,m,x,D,p;return D=new pr({}),{c(){l=i("main"),s=i("div"),a=i("div"),r=i("h1"),f=E(`MANAGING USERS ACCOUNTS\r
      `),u=i("h1"),m=v(),x=i("div"),gt(D.$$.fragment),this.h()},l(k){l=c(k,"MAIN",{});var T=d(l);s=c(T,"DIV",{class:!0});var O=d(s);a=c(O,"DIV",{});var A=d(a);r=c(A,"H1",{class:!0});var H=d(r);f=y(H,`MANAGING USERS ACCOUNTS\r
      `),u=c(H,"H1",{});var K=d(u);K.forEach(o),H.forEach(o),A.forEach(o),m=_(O),x=c(O,"DIV",{});var U=d(x);wt(D.$$.fragment,U),U.forEach(o),O.forEach(o),T.forEach(o),this.h()},h(){n(r,"class","tracking-widest text-black-1 uppercase font-abril text-3xl"),n(s,"class","grid h-screen px-4 bg-white place-content-center gap-y-20")},m(k,T){Q(k,l,T),t(l,s),t(s,a),t(a,r),t(r,f),t(r,u),t(s,m),t(s,x),kt(D,x,null),p=!0},p:Ce,i(k){p||($e(D.$$.fragment,k),p=!0)},o(k){je(D.$$.fragment,k),p=!1},d(k){k&&o(l),Et(D)}}}class _r extends _t{constructor(l){super(),mt(this,l,null,vr,bt,{})}}function mr(e){let l,s,a,r;return document.title="Sandbox of users",a=new _r({}),{c(){l=i("meta"),s=v(),gt(a.$$.fragment),this.h()},l(f){const u=er("svelte-4ijm2u",document.head);l=c(u,"META",{name:!0,content:!0}),u.forEach(o),s=_(f),wt(a.$$.fragment,f),this.h()},h(){n(l,"name","dashboard"),n(l,"content","Admin dashboard, manage users ")},m(f,u){t(document.head,l),Q(f,s,u),kt(a,f,u),r=!0},p:Ce,i(f){r||($e(a.$$.fragment,f),r=!0)},o(f){je(a.$$.fragment,f),r=!1},d(f){o(l),f&&o(s),Et(a,f)}}}class yr extends _t{constructor(l){super(),mt(this,l,null,mr,bt,{})}}export{yr as default};

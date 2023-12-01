import{s as je,f as i,a as x,g as d,h as c,d as o,c as V,j as u,i as ye,r as t,x as Ne,o as Re,l as y,m as b,n as k,v as ue,E as Xe}from"../chunks/scheduler.b3080bb7.js";import{S as qe,i as Oe,b as be,d as xe,m as Ve,g as ze,t as ee,c as Be,a as te,e as Ie}from"../chunks/index.46c9a90c.js";import{a as Fe}from"../chunks/user.f032205a.js";import{a as Ge}from"../chunks/firebase.d82ae59d.js";import{i as He}from"../chunks/store.dbefa99f.js";import"../chunks/paths.8357d7d2.js";import{P as Je}from"../chunks/ProfileOptions.cd52eb45.js";import{X as Ke}from"../chunks/runtime.esm.133179ec.js";import{L as Qe}from"../chunks/LoadingSpinner.69a90c28.js";function We(m){let s,l,r,n,a,e,h=m[3]("User name")+"",E,g,I,D=m[1].name+"",U,f,p=m[2].value+"",$,fe,P,C,X=m[3]("Email address")+"",se,pe,L,z=m[1].email+"",ae,ge,w,S,B=m[3]("Country")+"",re,_e,M,F=m[1].country+"",le,ve,A,N,G=m[3]("Number phone")+"",oe,he,j,H=m[1].phone+"",ne,De,T,q,J=m[3]("About")+"",ie,Ee,O,K=m[1].description+"",de;return{c(){s=i("div"),l=i("div"),r=i("div"),n=i("dl"),a=i("div"),e=i("dt"),E=y(h),g=x(),I=i("dd"),U=y(D),f=y(" - is admin? - "),$=y(p),fe=x(),P=i("div"),C=i("dt"),se=y(X),pe=x(),L=i("dd"),ae=y(z),ge=x(),w=i("div"),S=i("dt"),re=y(B),_e=x(),M=i("dd"),le=y(F),ve=x(),A=i("div"),N=i("dt"),oe=y(G),he=x(),j=i("dd"),ne=y(H),De=x(),T=i("div"),q=i("dt"),ie=y(J),Ee=x(),O=i("dd"),de=y(K),this.h()},l(_){s=d(_,"DIV",{});var v=c(s);l=d(v,"DIV",{class:!0});var $e=c(l);r=d($e,"DIV",{class:!0});var ke=c(r);n=d(ke,"DL",{class:!0});var R=c(n);a=d(R,"DIV",{class:!0});var Q=c(a);e=d(Q,"DT",{class:!0});var Pe=c(e);E=b(Pe,h),Pe.forEach(o),g=V(Q),I=d(Q,"DD",{class:!0});var ce=c(I);U=b(ce,D),f=b(ce," - is admin? - "),$=b(ce,p),ce.forEach(o),fe=V(Q),Q.forEach(o),P=d(R,"DIV",{class:!0});var W=c(P);C=d(W,"DT",{class:!0});var we=c(C);se=b(we,X),we.forEach(o),pe=V(W),L=d(W,"DD",{class:!0});var Ae=c(L);ae=b(Ae,z),Ae.forEach(o),ge=V(W),W.forEach(o),w=d(R,"DIV",{class:!0});var Y=c(w);S=d(Y,"DT",{class:!0});var Te=c(S);re=b(Te,B),Te.forEach(o),_e=V(Y),M=d(Y,"DD",{class:!0});var Ue=c(M);le=b(Ue,F),Ue.forEach(o),ve=V(Y),Y.forEach(o),A=d(R,"DIV",{class:!0});var Z=c(A);N=d(Z,"DT",{class:!0});var Ce=c(N);oe=b(Ce,G),Ce.forEach(o),he=V(Z),j=d(Z,"DD",{class:!0});var Le=c(j);ne=b(Le,H),Le.forEach(o),De=V(Z),Z.forEach(o),T=d(R,"DIV",{class:!0});var me=c(T);q=d(me,"DT",{class:!0});var Se=c(q);ie=b(Se,J),Se.forEach(o),Ee=V(me),O=d(me,"DD",{class:!0});var Me=c(O);de=b(Me,K),Me.forEach(o),me.forEach(o),R.forEach(o),ke.forEach(o),$e.forEach(o),v.forEach(o),this.h()},h(){u(e,"class","text-sm font-medium leading-6 text-gray-900"),u(I,"class","mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"),u(a,"class","grid grid-cols-4 gap-4 px-4 py-6 sm:px-0"),u(C,"class","text-sm font-medium leading-6 text-gray-900"),u(L,"class","mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"),u(P,"class","grid grid-cols-4 gap-4 px-4 py-6 sm:px-0"),u(S,"class","text-sm font-medium leading-6 text-gray-900"),u(M,"class","mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"),u(w,"class","grid grid-cols-4 gap-4 px-4 py-6 sm:px-0"),u(N,"class","text-sm font-medium leading-6 text-gray-900"),u(j,"class","mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"),u(A,"class","grid grid-cols-4 gap-4 px-4 py-6 sm:px-0"),u(q,"class","text-sm font-medium leading-6 text-gray-900"),u(O,"class","mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"),u(T,"class","grid grid-cols-4 gap-4 px-4 py-6 sm:px-0"),u(n,"class","divide-y divide-gray-100"),u(r,"class","ml-8"),u(l,"class","mt-6 border-t border-gray-100")},m(_,v){ye(_,s,v),t(s,l),t(l,r),t(r,n),t(n,a),t(a,e),t(e,E),t(a,g),t(a,I),t(I,U),t(I,f),t(I,$),t(a,fe),t(n,P),t(P,C),t(C,se),t(P,pe),t(P,L),t(L,ae),t(P,ge),t(n,w),t(w,S),t(S,re),t(w,_e),t(w,M),t(M,le),t(w,ve),t(n,A),t(A,N),t(N,oe),t(A,he),t(A,j),t(j,ne),t(A,De),t(n,T),t(T,q),t(q,ie),t(T,Ee),t(T,O),t(O,de)},p(_,v){v&8&&h!==(h=_[3]("User name")+"")&&k(E,h),v&2&&D!==(D=_[1].name+"")&&k(U,D),v&4&&p!==(p=_[2].value+"")&&k($,p),v&8&&X!==(X=_[3]("Email address")+"")&&k(se,X),v&2&&z!==(z=_[1].email+"")&&k(ae,z),v&8&&B!==(B=_[3]("Country")+"")&&k(re,B),v&2&&F!==(F=_[1].country+"")&&k(le,F),v&8&&G!==(G=_[3]("Number phone")+"")&&k(oe,G),v&2&&H!==(H=_[1].phone+"")&&k(ne,H),v&8&&J!==(J=_[3]("About")+"")&&k(ie,J),v&2&&K!==(K=_[1].description+"")&&k(de,K)},i:ue,o:ue,d(_){_&&o(s)}}}function Ye(m){let s,l;return s=new Qe({}),{c(){be(s.$$.fragment)},l(r){xe(s.$$.fragment,r)},m(r,n){Ve(s,r,n),l=!0},p:ue,i(r){l||(te(s.$$.fragment,r),l=!0)},o(r){ee(s.$$.fragment,r),l=!1},d(r){Ie(s,r)}}}function Ze(m){let s,l,r,n,a,e,h,E,g;r=new Je({});const I=[Ye,We],D=[];function U(f,p){return f[0]?0:1}return a=U(m),e=D[a]=I[a](m),{c(){s=i("div"),l=i("div"),be(r.$$.fragment),n=x(),e.c(),h=x(),E=i("div"),this.h()},l(f){s=d(f,"DIV",{class:!0});var p=c(s);l=d(p,"DIV",{});var $=c(l);xe(r.$$.fragment,$),$.forEach(o),n=V(p),e.l(p),h=V(p),E=d(p,"DIV",{}),c(E).forEach(o),p.forEach(o),this.h()},h(){u(s,"class","isolate bg-white px-10 pt-36")},m(f,p){ye(f,s,p),t(s,l),Ve(r,l,null),t(s,n),D[a].m(s,null),t(s,h),t(s,E),g=!0},p(f,[p]){let $=a;a=U(f),a===$?D[a].p(f,p):(ze(),ee(D[$],1,1,()=>{D[$]=null}),Be(),e=D[a],e?e.p(f,p):(e=D[a]=I[a](f),e.c()),te(e,1),e.m(s,h))},i(f){g||(te(r.$$.fragment,f),te(e),g=!0)},o(f){ee(r.$$.fragment,f),ee(e),g=!1},d(f){f&&o(s),Ie(r),D[a].d()}}}function et(m,s,l){let r,n;Ne(m,He,h=>l(2,r=h)),Ne(m,Ke,h=>l(3,n=h));let a=!0,e={name:"",email:"",phone:"",country:"",description:"",messages:[]};return Re(()=>(console.log("updating profile..."),console.log("isadmin in profile in mounting...",r),r.value,Ge.onAuthStateChanged(async E=>{try{let g=await Fe(E);E?(l(1,e.name=g.name??e.name,e),l(1,e.email=g.email??e.email,e),l(1,e.phone=g.phone??e.phone,e),l(1,e.country=g.country??e.country,e),l(1,e.description=g.description??e.description,e),l(1,e.messages=g.messages??e.messages,e),l(0,a=!1)):console.log("no user in Profile.svelte")}catch(g){console.error("error while updating profile",g)}}))),[a,e,r,n]}class tt extends qe{constructor(s){super(),Oe(this,s,et,Ze,je,{})}}function st(m){let s,l,r,n;return document.title="User Profile",r=new tt({}),{c(){s=i("meta"),l=x(),be(r.$$.fragment),this.h()},l(a){const e=Xe("svelte-5kmet8",document.head);s=d(e,"META",{name:!0,content:!0}),e.forEach(o),l=V(a),xe(r.$$.fragment,a),this.h()},h(){u(s,"name","description"),u(s,"content","User Profile")},m(a,e){t(document.head,s),ye(a,l,e),Ve(r,a,e),n=!0},p:ue,i(a){n||(te(r.$$.fragment,a),n=!0)},o(a){ee(r.$$.fragment,a),n=!1},d(a){a&&o(l),o(s),Ie(r,a)}}}class ut extends qe{constructor(s){super(),Oe(this,s,null,st,je,{})}}export{ut as component};

import{S as ye,i as Ee,s as we,k as l,q as R,a as B,e as be,l as i,m as r,r as W,c as C,h as a,n as e,b as se,C as t,u as Y,E as me,G as ke,I as oe,J as ne,D as te,F as pe,K as de,H as Ie}from"./index.4d33c6d3.js";import{b as ie}from"./paths.f91ddd47.js";import{c as De}from"./clickOutside.d9638a43.js";import{X as Ve,m as Pe,e as Ae,x as je,a as Be}from"./en.4acc708b.js";function Ce(p){let s,c,P,n,d,w,y,u,f,g,_,x,m,v,A,U,T,k,M=p[2]("View")+"",S,J,E,I,O,L,z,K=p[2]("Edit")+"",N,D,h,o,b,j,G,X,F=p[2]("Deactivate")+"",Q,$,Z;return{c(){s=l("div"),c=l("span"),P=B(),n=l("span"),d=l("img"),y=B(),u=oe("svg"),f=oe("path"),g=B(),_=l("div"),x=l("div"),m=l("div"),v=l("a"),A=l("img"),T=B(),k=l("p"),S=R(M),J=B(),E=l("a"),I=l("img"),L=B(),z=l("p"),N=R(K),D=B(),h=l("div"),o=l("a"),b=l("img"),G=B(),X=l("p"),Q=R(F),this.h()},l(V){s=i(V,"DIV",{class:!0,id:!0,"aria-expanded":!0,"aria-haspopup":!0});var H=r(s);c=i(H,"SPAN",{class:!0}),r(c).forEach(a),P=C(H),n=i(H,"SPAN",{class:!0});var q=r(n);d=i(q,"IMG",{class:!0,alt:!0,src:!0}),y=C(q),u=ne(q,"svg",{class:!0,viewBox:!0,fill:!0,"aria-hidden":!0});var ae=r(u);f=ne(ae,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),r(f).forEach(a),ae.forEach(a),q.forEach(a),H.forEach(a),g=C(V),_=i(V,"DIV",{class:!0,role:!0,"aria-orientation":!0,"aria-labelledby":!0,tabindex:!0});var ue=r(_);x=i(ue,"DIV",{class:!0,role:!0});var re=r(x);m=i(re,"DIV",{class:!0});var ee=r(m);v=i(ee,"A",{href:!0,class:!0,role:!0,tabindex:!0,id:!0});var le=r(v);A=i(le,"IMG",{class:!0,src:!0,alt:!0}),T=C(le),k=i(le,"P",{class:!0});var ce=r(k);S=W(ce,M),ce.forEach(a),le.forEach(a),J=C(ee),E=i(ee,"A",{href:!0,class:!0,role:!0,tabindex:!0,id:!0});var ve=r(E);I=i(ve,"IMG",{class:!0,src:!0,alt:!0}),L=C(ve),z=i(ve,"P",{class:!0});var he=r(z);N=W(he,K),he.forEach(a),ve.forEach(a),ee.forEach(a),D=C(re),h=i(re,"DIV",{class:!0});var _e=r(h);o=i(_e,"A",{class:!0,role:!0,tabindex:!0,id:!0});var fe=r(o);b=i(fe,"IMG",{class:!0,src:!0,alt:!0}),G=C(fe),X=i(fe,"P",{class:!0});var ge=r(X);Q=W(ge,F),ge.forEach(a),fe.forEach(a),_e.forEach(a),re.forEach(a),ue.forEach(a),this.h()},h(){e(c,"class","absolute inset-0 translate-x-0 translate-y-0 bg-navy-1 transition-transform group-hover:translate-y-0.5 group-hover:-translate-x-0.5"),e(d,"class","mr-1"),e(d,"alt","setting"),de(d.src,w=ie+"/media/settings.svg")||e(d,"src",w),e(f,"fill-rule","evenodd"),e(f,"d","M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"),e(f,"clip-rule","evenodd"),e(u,"class","-mr-1 h-5 w-5 text-gray-400"),e(u,"viewBox","0 0 20 20"),e(u,"fill","currentColor"),e(u,"aria-hidden","true"),e(n,"class","relative block border border-current bg-white px-8 py-3"),e(s,"class","group relative inline-block text-sm font-medium text-black-1 focus:outline-none focus:ring active:text-black-1"),e(s,"id","menu-button"),e(s,"aria-expanded","true"),e(s,"aria-haspopup","true"),e(A,"class","mr-2 group-hover:text-yellow-0"),de(A.src,U=ie+"/media/user.svg")||e(A,"src",U),e(A,"alt","user icon"),e(k,"class","self-center group-hover:text-yellow-0"),e(v,"href",ie+"/profile"),e(v,"class","group text-gray-700 flex px-4 py-2 text-sm transition duration-100"),e(v,"role","menuitem"),e(v,"tabindex","-1"),e(v,"id","menu-item-0"),e(I,"class","mr-2 group-hover:text-yellow-0 stroke-current"),de(I.src,O=ie+"/media/user-edit.svg")||e(I,"src",O),e(I,"alt","user edit icon"),e(z,"class","self-center group-hover:text-yellow-0"),e(E,"href",ie+"/profile/edit"),e(E,"class","flex text-gray-700 px-4 py-2 text-sm transition duration-100 group"),e(E,"role","menuitem"),e(E,"tabindex","-1"),e(E,"id","menu-item-0"),e(m,"class","p-2 border-1 shadow-white-2 shadow text-left"),e(b,"class","mr-2 "),de(b.src,j=ie+"/media/user-x.svg")||e(b,"src",j),e(b,"alt","user delete icon"),e(X,"class","self-center "),e(o,"class","cursor-pointer flex text-gray-700 px-4 py-2 text-sm transition stroke-current duration-100 hover:text-red-2 hover:stroke-current"),e(o,"role","menuitem"),e(o,"tabindex","-1"),e(o,"id","menu-item-1"),e(h,"class","p-2"),e(x,"class","py-1"),e(x,"role","none"),e(_,"class","absolute z-0 md:ml-[672px] w-50 h-42 origin-center bg-white-0 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border-x-4 border-navy-1"),e(_,"role","menu"),e(_,"aria-orientation","vertical"),e(_,"aria-labelledby","menu-button"),e(_,"tabindex","-1")},m(V,H){se(V,s,H),t(s,c),t(s,P),t(s,n),t(n,d),t(n,y),t(n,u),t(u,f),se(V,g,H),se(V,_,H),t(_,x),t(x,m),t(m,v),t(v,A),t(v,T),t(v,k),t(k,S),t(m,J),t(m,E),t(E,I),t(E,L),t(E,z),t(z,N),t(x,D),t(x,h),t(h,o),t(o,b),t(o,G),t(o,X),t(X,Q),$||(Z=[te(s,"click",p[3]),te(s,"keypress",p[3]),te(o,"click",p[5]),te(o,"keypress",p[5]),Ie(De.call(null,x)),te(x,"click_outside",p[4])],$=!0)},p(V,H){H&4&&M!==(M=V[2]("View")+"")&&Y(S,M),H&4&&K!==(K=V[2]("Edit")+"")&&Y(N,K),H&4&&F!==(F=V[2]("Deactivate")+"")&&Y(Q,F)},d(V){V&&a(s),V&&a(g),V&&a(_),$=!1,pe(Z)}}}function Me(p){let s,c,P,n,d,w,y,u,f,g,_;return{c(){s=l("div"),c=l("span"),P=B(),n=l("span"),d=l("img"),y=B(),u=oe("svg"),f=oe("path"),this.h()},l(x){s=i(x,"DIV",{class:!0,id:!0,"aria-expanded":!0,"aria-haspopup":!0});var m=r(s);c=i(m,"SPAN",{class:!0}),r(c).forEach(a),P=C(m),n=i(m,"SPAN",{class:!0});var v=r(n);d=i(v,"IMG",{class:!0,alt:!0,src:!0}),y=C(v),u=ne(v,"svg",{class:!0,viewBox:!0,fill:!0,"aria-hidden":!0});var A=r(u);f=ne(A,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),r(f).forEach(a),A.forEach(a),v.forEach(a),m.forEach(a),this.h()},h(){e(c,"class","absolute inset-0 translate-x-0 translate-y-0 bg-navy-1 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"),e(d,"class","mr-1"),e(d,"alt","setting"),de(d.src,w=ie+"/media/settings.svg")||e(d,"src",w),e(f,"fill-rule","evenodd"),e(f,"d","M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"),e(f,"clip-rule","evenodd"),e(u,"class","-mr-1 h-5 w-5 text-gray-400"),e(u,"viewBox","0 0 20 20"),e(u,"fill","currentColor"),e(u,"aria-hidden","true"),e(n,"class","relative block border border-current bg-white px-8 py-3"),e(s,"class","group relative inline-block text-sm font-medium text-black-1 focus:outline-none focus:ring active:text-black-1"),e(s,"id","menu-button"),e(s,"aria-expanded","true"),e(s,"aria-haspopup","true")},m(x,m){se(x,s,m),t(s,c),t(s,P),t(s,n),t(n,d),t(n,y),t(n,u),t(u,f),g||(_=[te(s,"click",p[3]),te(s,"keypress",p[3])],g=!0)},p:me,d(x){x&&a(s),g=!1,pe(_)}}}function xe(p){let s,c,P,n,d,w,y,u,f,g,_,x,m,v,A=p[2]("Deactivate account")+"",U,T,k,M,S=p[2]("Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.")+"",J,E,I,O,L=p[2]("Deactivate")+"",z,K,N,D=p[2]("Cancel")+"",h,o,b;return{c(){s=l("div"),c=l("div"),P=B(),n=l("div"),d=l("div"),w=l("div"),y=l("div"),u=l("div"),f=l("div"),g=oe("svg"),_=oe("path"),x=B(),m=l("div"),v=l("h3"),U=R(A),T=B(),k=l("div"),M=l("p"),J=R(S),E=B(),I=l("div"),O=l("button"),z=R(L),K=B(),N=l("button"),h=R(D),this.h()},l(j){s=i(j,"DIV",{class:!0,"aria-labelledby":!0,role:!0,"aria-modal":!0});var G=r(s);c=i(G,"DIV",{class:!0}),r(c).forEach(a),P=C(G),n=i(G,"DIV",{class:!0});var X=r(n);d=i(X,"DIV",{class:!0});var F=r(d);w=i(F,"DIV",{class:!0});var Q=r(w);y=i(Q,"DIV",{class:!0});var $=r(y);u=i($,"DIV",{class:!0});var Z=r(u);f=i(Z,"DIV",{class:!0});var V=r(f);g=ne(V,"svg",{class:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,"aria-hidden":!0});var H=r(g);_=ne(H,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),r(_).forEach(a),H.forEach(a),V.forEach(a),x=C(Z),m=i(Z,"DIV",{class:!0});var q=r(m);v=i(q,"H3",{class:!0,id:!0});var ae=r(v);U=W(ae,A),ae.forEach(a),T=C(q),k=i(q,"DIV",{class:!0});var ue=r(k);M=i(ue,"P",{class:!0});var re=r(M);J=W(re,S),re.forEach(a),ue.forEach(a),q.forEach(a),Z.forEach(a),$.forEach(a),E=C(Q),I=i(Q,"DIV",{class:!0});var ee=r(I);O=i(ee,"BUTTON",{type:!0,class:!0});var le=r(O);z=W(le,L),le.forEach(a),K=C(ee),N=i(ee,"BUTTON",{type:!0,class:!0});var ce=r(N);h=W(ce,D),ce.forEach(a),ee.forEach(a),Q.forEach(a),F.forEach(a),X.forEach(a),G.forEach(a),this.h()},h(){e(c,"class","fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"),e(_,"stroke-linecap","round"),e(_,"stroke-linejoin","round"),e(_,"d","M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"),e(g,"class","h-6 w-6 text-red-600"),e(g,"fill","none"),e(g,"viewBox","0 0 24 24"),e(g,"stroke-width","1.5"),e(g,"stroke","currentColor"),e(g,"aria-hidden","true"),e(f,"class","mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"),e(v,"class","text-base font-semibold leading-6 text-gray-900"),e(v,"id","modal-title"),e(M,"class","text-sm text-gray-500"),e(k,"class","mt-2"),e(m,"class","mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"),e(u,"class","sm:flex sm:items-start"),e(y,"class","bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4"),e(O,"type","button"),e(O,"class","inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"),e(N,"type","button"),e(N,"class","mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"),e(I,"class","bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"),e(w,"class","relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"),e(d,"class","flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"),e(n,"class","fixed inset-0 z-10 overflow-y-auto"),e(s,"class","relative z-10"),e(s,"aria-labelledby","modal-title"),e(s,"role","dialog"),e(s,"aria-modal","true")},m(j,G){se(j,s,G),t(s,c),t(s,P),t(s,n),t(n,d),t(d,w),t(w,y),t(y,u),t(u,f),t(f,g),t(g,_),t(u,x),t(u,m),t(m,v),t(v,U),t(m,T),t(m,k),t(k,M),t(M,J),t(w,E),t(w,I),t(I,O),t(O,z),t(I,K),t(I,N),t(N,h),o||(b=[te(O,"click",Be.deactivate),te(N,"click",p[5])],o=!0)},p(j,G){G&4&&A!==(A=j[2]("Deactivate account")+"")&&Y(U,A),G&4&&S!==(S=j[2]("Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.")+"")&&Y(J,S),G&4&&L!==(L=j[2]("Deactivate")+"")&&Y(z,L),G&4&&D!==(D=j[2]("Cancel")+"")&&Y(h,D)},d(j){j&&a(s),o=!1,pe(b)}}}function ze(p){let s,c,P,n,d,w=p[2]("Applicant Information")+"",y,u,f,g=p[2]("Personal details and application.")+"",_,x,m,v,A,U,T,k,M=p[2]("Applicant Information")+"",S,J,E,I=p[2]("Personal details and application.")+"",O,L,z;function K(o,b){return o[0]?Ce:Me}let N=K(p),D=N(p),h=p[1]&&xe(p);return{c(){s=l("div"),c=l("div"),P=l("div"),n=l("div"),d=l("h3"),y=R(w),u=B(),f=l("p"),_=R(g),x=B(),m=l("div"),v=l("div"),D.c(),A=B(),U=l("div"),T=l("div"),k=l("h3"),S=R(M),J=B(),E=l("p"),O=R(I),L=B(),h&&h.c(),z=be(),this.h()},l(o){s=i(o,"DIV",{class:!0});var b=r(s);c=i(b,"DIV",{class:!0});var j=r(c);P=i(j,"DIV",{});var G=r(P);n=i(G,"DIV",{class:!0});var X=r(n);d=i(X,"H3",{class:!0});var F=r(d);y=W(F,w),u=C(F),f=i(F,"P",{class:!0});var Q=r(f);_=W(Q,g),Q.forEach(a),F.forEach(a),X.forEach(a),G.forEach(a),x=C(j),m=i(j,"DIV",{class:!0});var $=r(m);v=i($,"DIV",{class:!0});var Z=r(v);D.l(Z),Z.forEach(a),$.forEach(a),A=C(j),U=i(j,"DIV",{});var V=r(U);T=i(V,"DIV",{class:!0});var H=r(T);k=i(H,"H3",{class:!0});var q=r(k);S=W(q,M),J=C(q),E=i(q,"P",{class:!0});var ae=r(E);O=W(ae,I),ae.forEach(a),q.forEach(a),H.forEach(a),V.forEach(a),j.forEach(a),b.forEach(a),L=C(o),h&&h.l(o),z=be(),this.h()},h(){e(f,"class","mt-1 max-w-2xl text-sm leading-6 text-gray-500"),e(d,"class","text-base font-semibold leading-7 text-gray-900"),e(n,"class","justify-items-start"),e(v,"class","grid justify-items-center"),e(m,"class","ml-16"),e(E,"class","mt-1 max-w-2xl text-sm leading-6 text-transparent"),e(k,"class","text-base font-semibold leading-7 text-transparent"),e(T,"class","flex"),e(c,"class","grid items-center justify-items-center grid-rows-1 grid-cols-3"),e(s,"class","px-6 sm:px-0")},m(o,b){se(o,s,b),t(s,c),t(c,P),t(P,n),t(n,d),t(d,y),t(d,u),t(d,f),t(f,_),t(c,x),t(c,m),t(m,v),D.m(v,null),t(c,A),t(c,U),t(U,T),t(T,k),t(k,S),t(k,J),t(k,E),t(E,O),se(o,L,b),h&&h.m(o,b),se(o,z,b)},p(o,[b]){b&4&&w!==(w=o[2]("Applicant Information")+"")&&Y(y,w),b&4&&g!==(g=o[2]("Personal details and application.")+"")&&Y(_,g),N===(N=K(o))&&D?D.p(o,b):(D.d(1),D=N(o),D&&(D.c(),D.m(v,null))),b&4&&M!==(M=o[2]("Applicant Information")+"")&&Y(S,M),b&4&&I!==(I=o[2]("Personal details and application.")+"")&&Y(O,I),o[1]?h?h.p(o,b):(h=xe(o),h.c(),h.m(z.parentNode,z)):h&&(h.d(1),h=null)},i:me,o:me,d(o){o&&a(s),D.d(),o&&a(L),h&&h.d(o),o&&a(z)}}}function Ne(p,s,c){let P;ke(p,Ve,f=>c(2,P=f)),Pe("en",Ae),je.set("en");let n=!1;function d(){c(0,n=!n)}function w(){c(0,n=!1)}let y=!1;function u(){c(1,y=!y)}return[n,y,P,d,w,u]}class Te extends ye{constructor(s){super(),Ee(this,s,Ne,ze,we,{})}}export{Te as P};

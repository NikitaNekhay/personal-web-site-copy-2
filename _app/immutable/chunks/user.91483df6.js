import{r as l,b as n,d as c,J as h,c as m,e as y,t as w,f as D}from"./firebase.80003ae4.js";async function U(e,r,o,d,f,g){try{const a=l(n(c,"user"),e.uid);await m(c,async t=>{const i=await t.get(a);if(!i.exists())throw new Error("User does not exist");const s=i.data();console.log(s);const u={name:r??s.name,email:o??s.email,phone:d??s.phone,country:f??s.country,description:g??s.description,messages:[""]};t.update(a,u),console.log(u)});const p=y(n(a,"messages"));(await w(p)).forEach(t=>{D(t.ref,{email:o??e.email})})}catch(a){console.error("Error updating user:",a)}}async function b(e){try{console.log(e.uid);const r=l(n(c,"user"),e.uid),o=await h(r);return o.exists()?o.data():null}catch(r){console.error("Error fetching user:",r)}}export{b as g,U as u};

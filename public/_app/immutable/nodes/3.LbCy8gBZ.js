import{t as _,a as u}from"../chunks/BLBjSD1j.js";import{y as Ke,s as t,f as me,B as a,A as Qe,J as p,a7 as E,C as e,q as o,a8 as it,z as C,l as pt}from"../chunks/CjMKQPc5.js";import{a as $,p as y}from"../chunks/CmI1mrV9.js";import{e as le,b as X,r as Y,i as se,s as vt,S as dt,a as ze,c as We,H as ut,F as _t}from"../chunks/UDfi6Asi.js";import{d as Xe,s as v,e as ht}from"../chunks/CHB7VOKY.js";import{i as N}from"../chunks/BHaxyKbt.js";import{o as mt}from"../chunks/BOx9Rgfy.js";const he=k=>{navigator.clipboard.writeText(k.target.textContent),console.log(`Se copió el texto: ${k.target.textContent}`)};var kt=(k,s)=>s("bdv"),ft=_('<h3>Titular:</h3> <h4 class="svelte-yh4q2y"> </h4> <h4 class="svelte-yh4q2y"> </h4> <h4 class="svelte-yh4q2y"> </h4> <p> </p>',1),gt=(k,s)=>s("zelle"),bt=_('<h4 class="svelte-yh4q2y"> </h4>  <p> </p>',1),yt=_('<h4 class="svelte-yh4q2y">La compra minima por zelle es de 7 Boletos</h4>'),xt=_('<h1 class="svelte-yh4q2y">Seleccione su método de pago</h1> <section class="metodo-pago svelte-yh4q2y"><article class="bdv-box svelte-yh4q2y"><figure><img id="bdv" src="/banesco.png" alt="bdv" class="svelte-yh4q2y"></figure> <!></article> <article class="zelle-box svelte-yh4q2y"><figure><img id="zelle" src="/zelle.png" alt="Zelle" class="svelte-yh4q2y"></figure> <!></article></section> <!> <article class="data-pago svelte-yh4q2y"></article>',1);function wt(k,s){Ke(s,!0);let c=E(!1),h=E(!1),S=E(!1),M=$(s,"ticketValue",7),F=$(s,"totalZelle",7);const V=[{nombre:"Banesco",telefono:"04127631825",cedula:"20681512",titular:"Alberto Gonzalez"},{nombre:"Zelle",telefono:"+13179660928",correo:"soraysidanielamedinagarcia@gmail.com",name:"Ronald Sukdhai"}],r=x=>{x==="bdv"&&(M(120),p(c,!0),p(h,!1)),x==="zelle"&&(M(1.5),F(s.selectedTicket.length*M()),p(c,!1),p(h,!0),s.selectedTicket.length>14&&(p(S,!0),console.log("se detecta que haya 4 tickets o menos")))};var R=xt(),D=t(me(R),2),T=a(D),i=a(T),G=a(i);G.__click=[kt,r],e(i);var re=t(i,2);{var oe=x=>{var J=ft(),Z=t(me(J),2);Z.__click=[he];var ie=a(Z,!0);e(Z);var j=t(Z,2);j.__click=[he];var K=a(j,!0);e(j);var U=t(j,2);U.__click=[he];var ue=a(U,!0);e(U);var te=t(U,2),fe=a(te);e(te),C(()=>{v(ie,V[0].titular),v(K,V[0].telefono),v(ue,V[0].cedula),v(fe,`${M()*s.selectedTicket.length} BS`)}),u(x,J)};N(re,x=>{o(c)&&x(oe)})}e(T);var ce=t(T,2),ee=a(ce),ve=a(ee);ve.__click=[gt,r],e(ee);var de=t(ee,2);{var ne=x=>{var J=bt(),Z=me(J);Z.__click=[he];var ie=a(Z,!0);e(Z);var j=t(Z,2),K=a(j);e(j),C(U=>{v(ie,V[1].correo),v(K,`${U??""} $`)},[()=>Math.round(F()*10)/10]),u(x,J)};N(de,x=>{o(h)&&x(ne)})}e(ce),e(D);var H=t(D,2);{var ke=x=>{var J=yt();u(x,J)};N(H,x=>{o(S)&&x(ke)})}it(2),u(k,R),Qe()}Xe(["click"]);const St=async(k,s,c,h,S,M)=>{try{const r=(await(await fetch(`${s}/flash/ticketselected`)).json()).find(R=>R.ci===o(c));r?(p(h,y([...r.tickets])),p(S,y(r)),p(M,!0)):(console.log("Usuario no encontrado"),p(h,y([])),p(M,!1))}catch(F){console.error("Error al obtener usuarios:",F),p(h,y([])),p(S,null),p(M,!1)}},$e=(k,s,c,h)=>{p(s,!1),c({}),h([]),window.location.reload()},Tt=(k,s,c,h)=>{p(s,y(c().filter(S=>S.value.includes(h()))))},qt=(k,s)=>{console.log("clic"),p(s,!0)},Be=(k,s,c)=>{s().name.length<4&&p(c,"El nombre debe tener al menos 4 caracteres."),s().name.length>4&&p(c,null),s().phone.length<11&&p(c,"El número de telefono debe tener al menos 11 caracteres."),s().phone.length>11&&p(c,null)};var At=(k,s,c)=>s(o(c).id,o(c).value,o(c)),Ct=_("<p> </p>"),Nt=_('<article class="find-number-box svelte-kp197t"><section class="generate-numbers números svelte-kp197t"></section></article>'),Mt=(k,s,c)=>s(o(c).id,o(c).value,o(c)),Vt=_("<p> </p>"),Pt=_('<article class="números numbers-available-container svelte-kp197t"></article>'),zt=_('<p class="selected-content svelte-kp197t"> </p>'),Bt=_('<p class="selected-content svelte-kp197t">Agrega otro ticket</p>'),Et=(k,s,c)=>s(o(c).id,o(c)),Ot=_("<p> </p>"),Ft=_('<section class="flotante svelte-kp197t"><section class="data-selected svelte-kp197t"><!> <!></section> <section class="selectedTicket svelte-kp197t"></section></section>'),Rt=_('<h2 class="notificacion svelte-kp197t" style="text-align: center;">Se han agotado todos los tickets. Atento al sorteo</h2>'),Zt=_('<section class="números-container svelte-kp197t"><!> <!> <!> <!></section>'),It=_('<p class="svelte-kp197t"> </p>'),Lt=_('<p style="display: inline;" class="svelte-kp197t"> </p>'),Dt=_('<section class="data-finded svelte-kp197t"><p class="svelte-kp197t"> </p> <p class="svelte-kp197t">Sus tickets comprados son:</p> <section class="tickets svelte-kp197t" style="display: flex; flex-wrap: wrap; flex-direction: row; "></section></section>'),Gt=_('<p style="color: red;" class="svelte-kp197t"> </p>'),jt=(k,s,c,h)=>{p(s,!1),c(),p(h,!0)},Ht=(k,s)=>p(s,!1),Jt=_('<dialog class="svelte-kp197t"><h2 class="svelte-kp197t">Tus datos ingresados son:</h2> <article class="svelte-kp197t"><p class="svelte-kp197t"> </p> <p class="svelte-kp197t"> </p> <p class="svelte-kp197t"> </p> <p class="svelte-kp197t"> </p></article> <h2 class="svelte-kp197t">Desea continuar?</h2> <article class="button-dialogs svelte-kp197t"><p class="svelte-kp197t">Si</p> <p class="svelte-kp197t">No</p></article></dialog>'),Ut=_('<p style=" height: max-content; padding: 0;" class="svelte-kp197t"> </p>'),Wt=_(`<dialog class="svelte-kp197t"><h1 style="padding: 10px;" class="svelte-kp197t">!Felicidades! Estas participando.</h1> <h2 class="svelte-kp197t">En 24hrs será verificado tu pago y te llegará un whatsapp de confirmación. Para aumentar tus
				posibilidades sigue comprando mas boletos</h2> <h1 class="svelte-kp197t">Datos de tu compra:</h1> <p class="svelte-kp197t"> </p> <p class="svelte-kp197t"> </p> <p class="svelte-kp197t"> </p> <p class="svelte-kp197t"> </p> <p class="svelte-kp197t"> </p> <section style="display: flex; flex-direction: row; gap: 10px; width: auto; flex-wrap: wrap; max-width: 300px;" class="svelte-kp197t"></section> <p style="padding: 10px; text-wrap: pretty;" class="svelte-kp197t">Para mayor seguridad envia tu comprobante de pago por whatsapp</p> <article class="dialog-contact svelte-kp197t"><a href="https://api.whatsapp.com/send?phone=584124676100&amp;text=Hola%20Alberto.%20Me%20comunico%20contigo%20para%20" target="_blank" class="svelte-kp197t"><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" class="svelte-kp197t"><path fill="#fff" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" class="svelte-kp197t"></path></svg> +584124676100</a></article> <button class="svelte-kp197t">✔ Listo</button></dialog>`),$t=_(`<article class="banner svelte-kp197t"><figure class="svelte-kp197t"><img class="main-poster svelte-kp197t" src="/nueva.webp" alt="main poster"></figure> <section class="svelte-kp197t"><progress class="range svelte-kp197t" max="100"></progress> <h1 class="svelte-kp197t"> </h1> <article class="banner-item svelte-kp197t"><h1 class="title svelte-kp197t">⚡️ FLASH ⚡️</h1></article> <h1 class="premio-mayor svelte-kp197t">Gana 300$ en efectivo, zelle o pago movil</h1> <h1 class="premio-mayor svelte-kp197t">1 SOLO GANADOR</h1> <h1 class="premio-mayor svelte-kp197t">Chance A 7:00PM</h1> <h2 class="text-bold svelte-kp197t"><strong class="svelte-kp197t">PAGO MOVIL</strong></h2> <p class="svelte-kp197t">¿Cómo participo?</p> <p style=" text-wrap: pretty; width: 100%; " class="svelte-kp197t">Selecciona tús números (mínimo 2 para que tengas aun más chance de ganar familia) <br class="svelte-kp197t"> <br class="svelte-kp197t"> Luego selecciona tu metodo de pago (pago móvil o zelle) al selecionar el metodo de pago, te
			aparecen los datos del mismo, sales y haces tu pago. <br class="svelte-kp197t"> <br class="svelte-kp197t"> Al volver, colocas muy bien tus datos personales, número de teléfono y referencia del págo y
			listo! 🚀🙏🏼 <br class="svelte-kp197t"> <br class="svelte-kp197t"> El sorteo se realizará por la Loteria Chance A (000 al 999) de las 7:00PM. ¡Muchisima
			suerte a todos los participantes! Son unas personas increibles!❤️🤝</p> <h4 class="svelte-kp197t">Whatsapp de soporte</h4> <p class="whatsapp svelte-kp197t"> </p></section></article> <br class="svelte-kp197t"> <br class="svelte-kp197t"> <section class="find-number svelte-kp197t"><input class="input-finder svelte-kp197t" type="text" name="" id="" placeholder="Buscar numero"></section> <!> <!> <section class="find-ticket-container svelte-kp197t"><input type="text" placeholder="BUSCAR TICKET " class="svelte-kp197t"> <button type="submit" class="svelte-kp197t">🔍 Buscar ticket</button></section> <!> <!> <form class="payment-form svelte-kp197t"><!> <section class="svelte-kp197t"><label for="name" class="svelte-kp197t">Nombre y apellido <input type="text" name="name" id="name" placeholder="Ingresa tu nombre y apellido" minlength="4" required class="svelte-kp197t"></label> <label for="ci" class="svelte-kp197t">Cedula de identidad <input type="text" name="ci" id="ci" placeholder="Ingresa tu cedula de identidad" minlength="8" required class="svelte-kp197t"></label></section> <section class="svelte-kp197t"><label for="phone" class="svelte-kp197t">Telefono <input type="text" name="phone" id="phone" placeholder="Número de teléfono sin el +" minlength="10" required class="svelte-kp197t"></label></section> <section class="svelte-kp197t"><label for="reference" class="svelte-kp197t">Referencia <input type="text" name="reference" id="reference" placeholder="Referencia de su pago" required class="svelte-kp197t"></label></section> <section class="svelte-kp197t"><label for="amount" class="svelte-kp197t">Monto <input type="text" name="amount" id="amount" placeholder="Monto a pagar" required class="svelte-kp197t"></label></section> <button class="submit-button svelte-kp197t">Confirmar y enviar por whatsapp</button> <!> <!></form>`,1);function Kt(k,s){Ke(s,!0);let c="https://backend-rifas-tico.onrender.com",h=E(!1),S=E(!1),M=E(""),F=E(!0),V=$(s,"rangoValue",15),r=$(s,"formData",7),R=$(s,"totalZelle",7),D=$(s,"findNumber",7),T=$(s,"numbersAvailable",7),i=$(s,"selectedTicket",7),G=E(""),re=y([]),oe=E(""),ce=E(!1),ee=E(y([])),ve=E(y([])),de=E(y([]));y([]);const ne=async()=>{try{const n=await(await fetch(`${c}/flash/items`,{method:"GET",headers:{"Content-Type":"application/json"}})).json();p(ve,y(n)),T(o(ve).slice(0,-1)),p(F,!1)}catch(l){console.log(`Se ha producido un error: ${l}`)}};mt(()=>{ne()});let H=y({});const ke=async()=>{try{const g=(await(await fetch("https://backend-rifas-tico.onrender.com/api/users")).json()).map(w=>w.tickets.map(P=>P.value)).flat();if(i().map(w=>w.value).some(w=>g.includes(w))){alert("Otra persona ha comprado este ticket"),p(F,!0),ne(),i([]);return}}catch(l){console.error("Error al obtener usuarios:",l)}},x=async(l,n,d)=>{H[l]=!H[l];const g=i().find(f=>f.value===n);if(console.log(g),g){const f=i().filter(O=>O.value!==n);i([...f]);return}i([...i(),d]),R(i().length*s.ticketValue),console.log(R()),r().amount=R(),await ke()},J=(l,n)=>{H[l]=!H[l];const d=i().filter(g=>g!==n);i([...d]),console.log(i(),"removido")},Z=l=>{l.preventDefault()},ie=async()=>{try{const l=await fetch(`${c}/flash/alo`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:r().name,ci:r().ci,phone:r().phone,amount:r().amount,tickets:i(),reference:r().reference})})}catch(l){console.error("Error al realizar la petición:",l)}ne()};pt(()=>{T().length>0&&(V(Math.floor((1-T().length/999)*100)),V(Math.max(V(),0)))});var j=$t(),K=me(j),U=t(a(K),2),ue=a(U),te=t(ue,2),fe=a(te);e(te);var Ee=t(te,18),Ye=a(Ee);e(Ee),e(U),e(K);var ge=t(K,6),be=a(ge);Y(be),be.__input=[Tt,M,T,D],e(ge);var Oe=t(ge,2);{var et=l=>{dt(l)},tt=l=>{var n=Zt(),d=a(n);{var g=m=>{var b=Nt(),q=a(b);le(q,21,()=>o(M),se,(A,z)=>{var I=Ct();I.__click=[At,x,z];var pe=a(I,!0);e(I),C(()=>{ze(I,1,We(H[o(z).id]?"clickeado":"numero-click"),"svelte-kp197t"),v(pe,o(z).value)}),u(A,I)}),e(q),e(b),u(m,b)};N(d,m=>{D().length>0&&m(g)})}var f=t(d,2);{var O=m=>{var b=Pt();le(b,21,T,se,(q,A)=>{var z=Vt();z.__click=[Mt,x,A];var I=a(z,!0);e(z),C(()=>{ze(z,1,We(H[o(A).id]?"clickeado":"numero-click"),"svelte-kp197t"),v(I,o(A).value)}),u(q,z)}),e(b),u(m,b)};N(f,m=>{T().length>0&&m(O)})}var w=t(f,2);{var P=m=>{var b=Ft(),q=a(b),A=a(q);{var z=B=>{var L=zt(),Q=a(L);e(L),C(()=>v(Q,`${i().length??""} de ${i().length??""} selectedTicket ${i().length*s.ticketValue} BS`)),u(B,L)};N(A,B=>{i().length>2&&B(z)})}var I=t(A,2);{var pe=B=>{var L=Bt();u(B,L)};N(I,B=>{i().length===1&&B(pe)})}e(q);var _e=t(q,2);le(_e,21,i,se,(B,L)=>{var Q=Ot();Q.__click=[Et,J,L];var nt=a(Q,!0);e(Q),C(()=>{ze(Q,1,`tickets-selected ${H[o(L).id]?"clickeado":"numero-click"}`,"svelte-kp197t"),v(nt,o(L).value)}),u(B,Q)}),e(_e),e(b),u(m,b)};N(w,m=>{i().length>0&&m(P)})}var W=t(w,2);{var ae=m=>{var b=Rt();u(m,b)};N(W,m=>{T().length===0&&m(ae)})}e(n),u(l,n)};N(Oe,l=>{o(F)?l(et):l(tt,!1)})}var Fe=t(Oe,2);le(Fe,17,()=>re,se,(l,n)=>{var d=It(),g=a(d);e(d),C(f=>v(g,`tickets ${f??""} ${o(n).name??""} ${o(n).amount??""}`),[()=>o(n).tickets.map(f=>f.value)]),u(l,d)});var ye=t(Fe,2),xe=a(ye);Y(xe);var at=t(xe,2);at.__click=[St,c,oe,de,ee,ce],e(ye);var Re=t(ye,2);{var lt=l=>{var n=Dt(),d=a(n),g=a(d,!0);e(d);var f=t(d,4);le(f,21,()=>o(de),se,(O,w)=>{var P=Lt(),W=a(P,!0);e(P),C(()=>v(W,o(w).value)),u(O,P)}),e(f),e(n),C(()=>v(g,o(ee).name)),u(l,n)};N(Re,l=>{o(ce)&&l(lt)})}var Ze=t(Re,2);wt(Ze,{get selectedTicket(){return i()},get ticketValue(){return s.ticketValue},get totalZelle(){return R()}});var we=t(Ze,2),Ie=a(we);{var st=l=>{var n=Gt(),d=a(n,!0);e(n),C(()=>v(d,o(G))),u(l,n)};N(Ie,l=>{o(G)&&l(st)})}var Se=t(Ie,2),Te=a(Se),qe=t(a(Te));Y(qe),qe.__change=[Be,r,G],e(Te);var Le=t(Te,2),Ae=t(a(Le));Y(Ae),Ae.__change=[Be,r,G],e(Le),e(Se);var Ce=t(Se,2),De=a(Ce),Ne=t(a(De));Y(Ne),Ne.__change=[Be,r,G],e(De),e(Ce);var Me=t(Ce,2),Ge=a(Me),je=t(a(Ge));Y(je),e(Ge),e(Me);var Ve=t(Me,2),He=a(Ve),Je=t(a(He));Y(Je),e(He),e(Ve);var Pe=t(Ve,2);Pe.__click=[qt,S];var Ue=t(Pe,2);{var rt=l=>{var n=Jt(),d=t(a(n),2),g=a(d),f=a(g);e(g);var O=t(g,2),w=a(O);e(O);var P=t(O,2),W=a(P);e(P);var ae=t(P,2),m=a(ae);e(ae),e(d);var b=t(d,4),q=a(b);q.__click=[jt,S,ie,h];var A=t(q,2);A.__click=[Ht,S],e(b),e(n),C(()=>{n.open=o(S),v(f,`Nombre: ${r().name??""}`),v(w,`Numero: ${r().phone??""}`),v(W,`Monto: ${r().amount??""}`),v(m,`Referencia: ${r().reference??""}`)}),u(l,n)};N(Ue,l=>{o(S)&&l(rt)})}var ot=t(Ue,2);{var ct=l=>{var n=Wt(),d=t(a(n),6),g=a(d);e(d);var f=t(d,2),O=a(f);e(f);var w=t(f,2),P=a(w);e(w);var W=t(w,2),ae=a(W);e(W);var m=t(W,2),b=a(m);e(m);var q=t(m,2);le(q,21,i,se,(pe,_e)=>{var B=Ut(),L=a(B);e(B),C(()=>v(L,`${o(_e).value??""} ,`)),u(pe,B)}),e(q);var A=t(q,4),z=a(A);z.__click=[$e,h,r,i],e(A);var I=t(A,2);I.__click=[$e,h,r,i],e(n),C(()=>{n.open=o(h),v(g,`Nombre: ${r().name??""}`),v(O,`Cedula: ${r().ci??""}`),v(P,`Número: ${r().phone??""}`),v(ae,`Monto: ${r().amount??""}`),v(b,`Referencia: ${r().reference??""}`)}),u(l,n)};N(ot,l=>{o(h)&&l(ct)})}e(we),C(()=>{vt(ue,V()),v(fe,`Se han vendido ${V()??""}% de los números`),v(Ye,`+${s.mainPhone??""}`),Pe.disabled=i().length<2}),X(be,D),X(xe,()=>o(oe),l=>p(oe,l)),ht("submit",we,Z),X(qe,()=>r().name,l=>r().name=l),X(Ae,()=>r().ci,l=>r().ci=l),X(Ne,()=>r().phone,l=>r().phone=l),X(je,()=>r().reference,l=>r().reference=l),X(Je,()=>r().amount,l=>r().amount=l),u(k,j),Qe()}Xe(["input","click","change"]);var Qt=_("<main><!> <!> <!></main>");function ra(k){let s="10 de Enero",c="MOTO AVA TIGRITO 175CC 2024 IMPECABLE",h=0;y([]),y([]);let S=y([]),M="",F=50,V=y({}),r=y([]),R=y([]),D="584124676100";var T=Qt(),i=a(T);ut(i,{});var G=t(i,2);Kt(G,{get rangoValue(){return h},get ticketValue(){return F},get formData(){return V},fechaSorteo:s,premioMayor:c,get totalZelle(){return M},get findNumber(){return S},mainPhone:D,get numbersAvailable(){return r},get selectedTicket(){return R}});var re=t(G,2);_t(re,{mainPhone:D}),e(T),u(k,T)}export{ra as component};

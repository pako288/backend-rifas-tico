import{t as y,a as j}from"./BLBjSD1j.js";import"./CQRCeh5-.js";import{b as qa,h as K,a as Pa,q as u,Q as Oa,c as Va,r as ra,d as Oe,e as Ve,j as ge,ai as za,g as _a,i as ha,p as Ba,as as ze,am as pa,L as na,at as ca,Z as La,G as oa,O as Ha,au as De,av as Da,al as Fa,aw as Za,a1 as Ga,ax as Fe,ay as Ua,ag as Ya,a3 as Ja,a2 as Wa,az as ba,ad as Ka,aA as Xa,aB as Qa,aC as $a,aD as et,aE as at,n as tt,ap as st,y as Ze,A as Ge,s as n,f as je,B as r,J as S,a7 as Y,C as l,a8 as ma,z as D,l as lt}from"./CjMKQPc5.js";import{i as rt}from"./CZI6oNqR.js";import{a as nt,l as ct,d as ga,s as m,e as ot}from"./CHB7VOKY.js";import{i as F}from"./BHaxyKbt.js";import{a as ce,p as le}from"./CmI1mrV9.js";import{o as it}from"./BOx9Rgfy.js";import{P as vt}from"./BX_DCXmI.js";function we(a,e){return e}function ut(a,e,t,s){for(var i=[],v=e.length,_=0;_<v;_++)Da(e[_].e,i,!0);var c=v>0&&i.length===0&&t!==null;if(c){var T=t.parentNode;Fa(T),T.append(t),s.clear(),oe(a,e[0].prev,e[v-1].next)}Za(i,()=>{for(var A=0;A<v;A++){var g=e[A];c||(s.delete(g.k),oe(a,g.prev,g.next)),Ga(g.e,!c)}})}function ke(a,e,t,s,i,v=null){var _=a,c={flags:e,items:new Map,first:null},T=(e&ba)!==0;if(T){var A=a;_=K?Oe(Ja(A)):A.appendChild(Wa())}K&&Pa();var g=null,p=!1,h=Oa(()=>{var x=t();return Ha(x)?x:x==null?[]:pa(x)});qa(()=>{var x=u(h),d=x.length;if(p&&d===0)return;p=d===0;let Z=!1;if(K){var I=_.data===Va;I!==(d===0)&&(_=ra(),Oe(_),Ve(!1),Z=!0)}if(K){for(var P=null,B,R=0;R<d;R++){if(ge.nodeType===8&&ge.data===za){_=ge,Z=!0,Ve(!1);break}var f=x[R],w=s(f,R);B=wa(ge,c,P,null,f,w,R,i,e,t),c.items.set(w,B),P=B}d>0&&Oe(ra())}K||dt(x,c,_,i,e,s,t),v!==null&&(d===0?g?_a(g):g=ha(()=>v(_)):g!==null&&Ba(g,()=>{g=null})),Z&&Ve(!0),u(h)}),K&&(_=ge)}function dt(a,e,t,s,i,v,_){var ae,te,se,he;var c=(i&Xa)!==0,T=(i&(Fe|De))!==0,A=a.length,g=e.items,p=e.first,h=p,x,d=null,Z,I=[],P=[],B,R,f,w;if(c)for(w=0;w<A;w+=1)B=a[w],R=v(B,w),f=g.get(R),f!==void 0&&((ae=f.a)==null||ae.measure(),(Z??(Z=new Set)).add(f));for(w=0;w<A;w+=1){if(B=a[w],R=v(B,w),f=g.get(R),f===void 0){var _e=h?h.e.nodes_start:t;d=wa(_e,e,d,d===null?e.first:d.next,B,R,w,s,i,_),g.set(R,d),I=[],P=[],h=d.next;continue}if(T&&ft(f,B,w,i),(f.e.f&ze)!==0&&(_a(f.e),c&&((te=f.a)==null||te.unfix(),(Z??(Z=new Set)).delete(f))),f!==h){if(x!==void 0&&x.has(f)){if(I.length<P.length){var E=P[0],O;d=E.prev;var H=I[0],$=I[I.length-1];for(O=0;O<I.length;O+=1)ia(I[O],E,t);for(O=0;O<P.length;O+=1)x.delete(P[O]);oe(e,H.prev,$.next),oe(e,d,H),oe(e,$,E),h=E,d=$,w-=1,I=[],P=[]}else x.delete(f),ia(f,h,t),oe(e,f.prev,f.next),oe(e,f,d===null?e.first:d.next),oe(e,d,f),d=f;continue}for(I=[],P=[];h!==null&&h.k!==R;)(h.e.f&ze)===0&&(x??(x=new Set)).add(h),P.push(h),h=h.next;if(h===null)continue;f=h}I.push(f),d=f,h=f.next}if(h!==null||x!==void 0){for(var q=x===void 0?[]:pa(x);h!==null;)(h.e.f&ze)===0&&q.push(h),h=h.next;var ee=q.length;if(ee>0){var L=(i&ba)!==0&&A===0?t:null;if(c){for(w=0;w<ee;w+=1)(se=q[w].a)==null||se.measure();for(w=0;w<ee;w+=1)(he=q[w].a)==null||he.fix()}ut(e,q,L,g)}}c&&Ka(()=>{var pe;if(Z!==void 0)for(f of Z)(pe=f.a)==null||pe.apply()}),na.first=e.first&&e.first.e,na.last=d&&d.e}function ft(a,e,t,s){(s&Fe)!==0&&ca(a.v,e),(s&De)!==0?ca(a.i,t):a.i=t}function wa(a,e,t,s,i,v,_,c,T,A){var g=(T&Fe)!==0,p=(T&Ua)===0,h=g?p?La(i):oa(i):i,x=(T&De)===0?_:oa(_),d={i:x,v:h,k:v,a:null,e:null,prev:t,next:s};try{return d.e=ha(()=>c(a,h,x,A),K),d.e.prev=t&&t.e,d.e.next=s&&s.e,t===null?e.first=d:(t.next=d,t.e.next=d.e),s!==null&&(s.prev=d,s.e.prev=d.e),d}finally{}}function ia(a,e,t){for(var s=a.next?a.next.e.nodes_start:t,i=e?e.e.nodes_start:t,v=a.e.nodes_start;v!==s;){var _=Ya(v);i.before(v),v=_}}function oe(a,e,t){e===null?a.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function ka(a){var e,t,s="";if(typeof a=="string"||typeof a=="number")s+=a;else if(typeof a=="object")if(Array.isArray(a)){var i=a.length;for(e=0;e<i;e++)a[e]&&(t=ka(a[e]))&&(s&&(s+=" "),s+=t)}else for(t in a)a[t]&&(s&&(s+=" "),s+=t);return s}function _t(){for(var a,e,t=0,s="",i=arguments.length;t<i;t++)(a=arguments[t])&&(e=ka(a))&&(s&&(s+=" "),s+=e);return s}function va(a){return typeof a=="object"?_t(a):a??""}function ht(a,e,t){var s=a==null?"":""+a;return e&&(s=s?s+" "+e:e),s===""?null:s}function Be(a,e,t,s,i,v){var _=a.__className;if(K||_!==t){var c=ht(t,s);(!K||c!==a.getAttribute("class"))&&(c==null?a.removeAttribute("class"):a.className=c),a.__className=t}return v}const pt=Symbol("is custom element"),bt=Symbol("is html");function de(a){if(K){var e=!1,t=()=>{if(!e){if(e=!0,a.hasAttribute("value")){var s=a.value;ua(a,"value",null),a.value=s}if(a.hasAttribute("checked")){var i=a.checked;ua(a,"checked",null),a.checked=i}}};a.__on_r=t,Qa(t),nt()}}function is(a,e){var t=xa(a);t.value===(t.value=e??void 0)||a.value===e&&(e!==0||a.nodeName!=="PROGRESS")||(a.value=e??"")}function ua(a,e,t,s){var i=xa(a);K&&(i[e]=a.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&a.nodeName==="LINK")||i[e]!==(i[e]=t)&&(e==="loading"&&(a[$a]=t),a.removeAttribute(e))}function xa(a){return a.__attributes??(a.__attributes={[pt]:a.nodeName.includes("-"),[bt]:a.namespaceURI===et})}function fe(a,e,t=e){var s=at();ct(a,"input",i=>{var v=i?a.defaultValue:a.value;if(v=Le(a)?He(v):v,t(v),s&&v!==(v=e())){var _=a.selectionStart,c=a.selectionEnd;a.value=v??"",c!==null&&(a.selectionStart=_,a.selectionEnd=Math.min(c,a.value.length))}}),(K&&a.defaultValue!==a.value||tt(e)==null&&a.value)&&t(Le(a)?He(a.value):a.value),st(()=>{var i=e();Le(a)&&i===He(a.value)||a.type==="date"&&!i&&!a.value||i!==a.value&&(a.value=i??"")})}function Le(a){var e=a.type;return e==="number"||e==="range"}function He(a){return a===""?null:+a}var mt=y('<header class="svelte-az0be1"><figure class="svelte-az0be1"><img src="/logo.webp" alt="logo" height="90" class="svelte-az0be1"></figure> <nav class="svelte-az0be1"><a href="/" class="svelte-az0be1">Inicio</a></nav> <label for="check" class="fa-solid fa-bars svelte-az0be1"><input type="checkbox" name="" id="check" class="input svelte-az0be1"></label></header>');function vs(a,e){Ze(e,!1),rt();var t=mt();j(a,t),Ge()}const me=a=>{navigator.clipboard.writeText(a.target.textContent),console.log(`Se copió el texto: ${a.target.textContent}`)};var gt=(a,e)=>e("bdv"),wt=y('<h3>Titular:</h3> <h4 class="svelte-xulqhu"> </h4> <h4 class="svelte-xulqhu"> </h4> <h4 class="svelte-xulqhu"> </h4> <p> </p>',1),kt=(a,e)=>e("zelle"),xt=y('<h4 class="svelte-xulqhu"> </h4> <h4 class="svelte-xulqhu"> </h4> <h4 class="svelte-xulqhu"> </h4> <p> </p>',1),jt=y('<h4 class="svelte-xulqhu">La compra minima por zelle es de 15 tickets</h4>'),yt=y('<h1 class="svelte-xulqhu">Seleccione su método de pago</h1> <section class="metodo-pago svelte-xulqhu"><article class="bdv-box svelte-xulqhu"><figure><img id="bdv" src="/bdv.png" alt="bdv" class="svelte-xulqhu"></figure> <!></article> <article class="zelle-box svelte-xulqhu"><figure><img id="zelle" src="/zelle.png" alt="Zelle" class="svelte-xulqhu"></figure> <!></article></section> <!> <article class="data-pago svelte-xulqhu"></article>',1);function At(a,e){Ze(e,!0);let t=Y(!1),s=Y(!1),i=Y(!1),v=ce(e,"ticketValue",7),_=ce(e,"totalZelle",7);const c=[{nombre:"bdv",telefono:"04127631825",cedula:"20681512",titular:"Alberto Gonzalez"},{nombre:"Zelle",telefono:"+13179660928",correo:"serviciosgospel@gmail.com",name:"Ronald Sukdhai"}],T=E=>{E==="bdv"&&(v(20),S(t,!0),S(s,!1)),E==="zelle"&&(v(.33),_(e.selectedTicket.length*v()),S(t,!1),S(s,!0),e.selectedTicket.length>14&&(S(i,!0),console.log("se detecta que haya 4 tickets o menos")))};var A=yt(),g=n(je(A),2),p=r(g),h=r(p),x=r(h);x.__click=[gt,T],l(h);var d=n(h,2);{var Z=E=>{var O=wt(),H=n(je(O),2);H.__click=[me];var $=r(H,!0);l(H);var q=n(H,2);q.__click=[me];var ee=r(q,!0);l(q);var L=n(q,2);L.__click=[me];var ae=r(L,!0);l(L);var te=n(L,2),se=r(te);l(te),D(()=>{m($,c[0].titular),m(ee,c[0].telefono),m(ae,c[0].cedula),m(se,`${v()*e.selectedTicket.length} BS`)}),j(E,O)};F(d,E=>{u(t)&&E(Z)})}l(p);var I=n(p,2),P=r(I),B=r(P);B.__click=[kt,T],l(P);var R=n(P,2);{var f=E=>{var O=xt(),H=je(O);H.__click=[me];var $=r(H,!0);l(H);var q=n(H,2);q.__click=[me];var ee=r(q,!0);l(q);var L=n(q,2);L.__click=[me];var ae=r(L,!0);l(L);var te=n(L,2),se=r(te);l(te),D(he=>{m($,c[1].correo),m(ee,c[1].telefono),m(ae,c[1].name),m(se,`${he??""} $`)},[()=>Math.round(_()*10)/10]),j(E,O)};F(R,E=>{u(s)&&E(f)})}l(I),l(g);var w=n(g,2);{var _e=E=>{var O=jt();j(E,O)};F(w,E=>{u(i)&&E(_e)})}ma(2),j(a,A),Ge()}ga(["click"]);var St=y('<section class="spinner svelte-1thn92h"><span class="loader svelte-1thn92h"></span> <p class="svelte-1thn92h">Cargando números disponibles</p></section>');function Tt(a){var e=St();j(a,e)}const Et=async(a,e,t,s,i)=>{try{const _=await(await fetch("https://backend-rifas-tico.onrender.com/ticketselected")).json();S(e,le([..._]));const c=u(e).find(T=>T.tickets.map(A=>A.value).includes(u(t)));S(e,le(c)),S(s,le(u(t))),S(i,!0)}catch(v){console.error("Error al obtener usuarios:",v)}},da=(a,e,t,s)=>{S(e,!1),t({}),s([]),window.location.reload()},Nt=(a,e,t,s)=>{S(e,le(t().filter(i=>i.value.includes(s()))))},Ct=(a,e)=>{console.log("clic"),S(e,!0)},fa=(a,e,t)=>{e().name.length<4&&S(t,"El nombre debe tener al menos 4 caracteres."),e().name.length>4&&S(t,null),e().phone.length<11&&S(t,"El número de telefono debe tener al menos 11 caracteres."),e().phone.length>11&&S(t,null)};var Mt=(a,e,t)=>e(u(t).id,u(t).value,u(t)),It=y("<p> </p>"),Rt=y('<article class="find-number-box svelte-bw0vje"><section class="generate-numbers números svelte-bw0vje"></section></article>'),qt=(a,e,t)=>e(u(t).id,u(t).value,u(t)),Pt=y("<p> </p>"),Ot=y('<article class="números numbers-available-container svelte-bw0vje"></article>'),Vt=y('<p class="selected-content svelte-bw0vje"> </p>'),zt=y('<p class="selected-content svelte-bw0vje">Agrega otro ticket</p>'),Bt=(a,e,t)=>e(u(t).id,u(t)),Lt=y("<p> </p>"),Ht=y('<section class="flotante svelte-bw0vje"><section class="data-selected svelte-bw0vje"><!> <!></section> <section class="selectedTicket svelte-bw0vje"></section></section>'),Dt=y('<h2 class="notificacion svelte-bw0vje" style="text-align: center;">Se han agotado todos los tickets. Atento al sorteo</h2>'),Ft=y('<section class="números-container svelte-bw0vje"><!> <!> <!> <!></section>'),Zt=y('<p class="svelte-bw0vje"> </p>'),Gt=y('<section class="data-finded svelte-bw0vje"><p class="svelte-bw0vje"> </p> <p class="data-finded-phone svelte-bw0vje"> </p> <p class="svelte-bw0vje"> </p></section>'),Ut=y('<p style="color: red;" class="svelte-bw0vje"> </p>'),Yt=(a,e,t,s)=>{S(e,!1),t(),S(s,!0)},Jt=(a,e)=>S(e,!1),Wt=y('<dialog class="svelte-bw0vje"><h2 class="svelte-bw0vje">Tus datos ingresados son:</h2> <article class="svelte-bw0vje"><p class="svelte-bw0vje"> </p> <p class="svelte-bw0vje"> </p> <p class="svelte-bw0vje"> </p> <p class="svelte-bw0vje"> </p></article> <h2 class="svelte-bw0vje">Desea continuar?</h2> <article class="button-dialogs svelte-bw0vje"><p class="svelte-bw0vje">Si</p> <p class="svelte-bw0vje">No</p></article></dialog>'),Kt=y('<p style=" height: max-content; padding: 0;" class="svelte-bw0vje"> </p>'),Xt=y('<dialog class="svelte-bw0vje"><h1 style="padding: 10px;" class="svelte-bw0vje">!Felicidades! Estas participando.</h1> <h2 class="svelte-bw0vje">En 24hrs será verificado tu pago y te llegará un whatsapp de confirmación. Para aumentar tus posibilidades sigue comprando mas boletos</h2> <h1 class="svelte-bw0vje">Datos de tu compra:</h1> <p class="svelte-bw0vje"> </p> <p class="svelte-bw0vje"> </p> <p class="svelte-bw0vje"> </p> <p class="svelte-bw0vje"> </p> <section style="display: flex; flex-direction: row; gap: 10px; width: auto; flex-wrap: wrap; max-width: 300px;" class="svelte-bw0vje"></section> <p style="padding: 10px; text-wrap: pretty;" class="svelte-bw0vje">Para mayor seguridad envia tu comprobante de pago por whatsapp</p> <article class="dialog-contact svelte-bw0vje"><a href="https://api.whatsapp.com/send?phone=584124676100&amp;text=Hola%20Alberto.%20Me%20comunico%20contigo%20para%20" target="_blank" class="svelte-bw0vje"><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" class="svelte-bw0vje"><path fill="#fff" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" class="svelte-bw0vje"></path></svg> +584124676100</a></article> <button class="svelte-bw0vje">✔ Listo</button></dialog>'),Qt=y('<article class="banner svelte-bw0vje"><figure class="svelte-bw0vje"><img class="main-poster svelte-bw0vje" src="/banneer.webp" alt="main poster"></figure> <section class="svelte-bw0vje"><h1 class="svelte-bw0vje">La fecha del sorteo se dará a conocer cuando alcancemos el 60% de los números vendidos.</h1> <input disabled class="range svelte-bw0vje" type="range" name="rango" min="0" max="100"> <h1 class="svelte-bw0vje"> </h1> <article class="banner-item svelte-bw0vje"><h1 class="title svelte-bw0vje">GRAN RIFA !!!</h1></article> <h1 class="svelte-bw0vje"><strong class="svelte-bw0vje">JUEGA POR LA LOTERIA SUPER GANA 4 CIFRAS</strong></h1> <h1 class="premio-mayor svelte-bw0vje">PREMIO MAYOR</h1> <h1 class="svelte-bw0vje"> </h1> <p class="text-bold svelte-bw0vje"><strong class="svelte-bw0vje">10:00 PM</strong></p> <h1 class="svelte-bw0vje">Segundo Premio</h1> <p class="svelte-bw0vje"><strong class="svelte-bw0vje">500$</strong> en efectivo o pago movil.</p> <strong class="svelte-bw0vje">4:00 PM</strong> <h1 class="svelte-bw0vje">Tercer premio</h1> <p class="svelte-bw0vje"><strong class="svelte-bw0vje">200$</strong> en efectivo o pago movil.</p> <strong class="svelte-bw0vje">1:00 PM</strong> <h1 class="svelte-bw0vje">Cuarto premio</h1> <p class="svelte-bw0vje"><strong class="svelte-bw0vje">100$</strong> en efectivo o pago movil a la persona con mas números comprados</p> <h1 class="svelte-bw0vje"> </h1> <h4 class="svelte-bw0vje">Whatsapp de soporte</h4> <p class="whatsapp svelte-bw0vje"> </p></section></article> <br class="svelte-bw0vje"> <br class="svelte-bw0vje"> <section class="find-number svelte-bw0vje"><input class="input-finder svelte-bw0vje" type="text" name="" id="" placeholder="Buscar numero"></section> <!> <!> <section class="find-ticket-container svelte-bw0vje"><input type="text" placeholder="BUSCAR TICKET " class="svelte-bw0vje"> <button type="submit" class="svelte-bw0vje">🔍 Buscar ticket</button></section> <!> <!> <form class="payment-form svelte-bw0vje"><!> <section class="svelte-bw0vje"><label for="name" class="svelte-bw0vje">Nombre y apellido <input type="text" name="name" id="name" placeholder="Ingresa tu nombre y apellido" minlength="4" required class="svelte-bw0vje"></label></section> <section class="svelte-bw0vje"><label for="phone" class="svelte-bw0vje">Telefono <input type="text" name="phone" id="phone" placeholder="Número de teléfono sin el +" minlength="10" required class="svelte-bw0vje"></label></section> <section class="svelte-bw0vje"><label for="reference" class="svelte-bw0vje">Referencia <input type="text" name="reference" id="reference" placeholder="Referencia de su pago" required class="svelte-bw0vje"></label></section> <section class="svelte-bw0vje"><label for="amount" class="svelte-bw0vje">Monto <input type="text" name="amount" id="amount" placeholder="Monto a pagar" required class="svelte-bw0vje"></label></section> <button class="submit-button svelte-bw0vje">Confirmar y enviar por whatsapp</button> <!> <!></form>',1);function us(a,e){Ze(e,!0);let t=Y(!1),s=Y(!1),i=Y(""),v=Y(!0),_=ce(e,"rangoValue",15),c=ce(e,"formData",7),T=ce(e,"totalZelle",7),A=ce(e,"findNumber",7),g=ce(e,"numbersAvailable",7),p=ce(e,"selectedTicket",7),h=Y(""),x=le([]),d=Y(""),Z=Y(!1),I=Y(le([])),P=Y(""),B=Y(le([]));le([]);const R=async()=>{try{const b=await(await fetch("https://backend-rifas-tico.onrender.com/items",{method:"GET",headers:{"Content-Type":"application/json"}})).json();S(B,le(b)),g(u(B).slice(0,-1)),S(v,!1)}catch(o){console.log(`Se ha producido un error: ${o}`)}};it(()=>{R()});let f=le({});const w=async()=>{try{const V=(await(await fetch("https://backend-rifas-tico.onrender.com/api/users")).json()).map(z=>z.tickets.map(X=>X.value)).flat();if(p().map(z=>z.value).some(z=>V.includes(z))){alert("Otra persona ha comprado este ticket"),S(v,!0),R(),p([]);return}}catch(o){console.error("Error al obtener usuarios:",o)}},_e=async(o,b,k)=>{f[o]=!f[o];const V=p().find(N=>N.value===b);if(console.log(V),V){const N=p().filter(J=>J.value!==b);p([...N]);return}p([...p(),k]),T(p().length*e.ticketValue),console.log(T()),c().amount=T(),await w()},E=(o,b)=>{f[o]=!f[o];const k=p().filter(V=>V!==b);p([...k]),console.log(p(),"removido")},O=o=>{o.preventDefault()},H=async()=>{try{const o=await fetch("https://backend-rifas-tico.onrender.com/alo",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:c().name,phone:c().phone,amount:c().amount,tickets:p(),reference:c().reference})})}catch(o){console.error("Error al realizar la petición:",o)}R()};lt(()=>{g().length>0&&(_(Math.floor((1-g().length/9999)*100)),_(Math.max(_(),0)))});var $=Qt(),q=je($),ee=n(r(q),2),L=n(r(ee),2);de(L);var ae=n(L,2),te=r(ae);l(ae);var se=n(ae,8),he=r(se,!0);l(se);var pe=n(se,20),ja=r(pe);l(pe);var Ue=n(pe,4),ya=r(Ue);l(Ue),l(ee),l(q);var ye=n(q,6),Ae=r(ye);de(Ae),Ae.__input=[Nt,i,g,A],l(ye);var Ye=n(ye,2);{var Aa=o=>{Tt(o)},Sa=o=>{var b=Ft(),k=r(b);{var V=C=>{var M=Rt(),G=r(M);ke(G,21,()=>u(i),we,(W,U)=>{var Q=It();Q.__click=[Mt,_e,U];var ve=r(Q,!0);l(Q),D(()=>{Be(Q,1,va(f[u(U).id]?"clickeado":"numero-click"),"svelte-bw0vje"),m(ve,u(U).value)}),j(W,Q)}),l(G),l(M),j(C,M)};F(k,C=>{A().length>0&&C(V)})}var N=n(k,2);{var J=C=>{var M=Ot();ke(M,21,g,we,(G,W)=>{var U=Pt();U.__click=[qt,_e,W];var Q=r(U,!0);l(U),D(()=>{Be(U,1,va(f[u(W).id]?"clickeado":"numero-click"),"svelte-bw0vje"),m(Q,u(W).value)}),j(G,U)}),l(M),j(C,M)};F(N,C=>{g().length>0&&C(J)})}var z=n(N,2);{var X=C=>{var M=Ht(),G=r(M),W=r(G);{var U=re=>{var ne=Vt(),ue=r(ne);l(ne),D(()=>m(ue,`${p().length??""} de ${p().length??""} selectedTicket ${p().length*e.ticketValue} BS`)),j(re,ne)};F(W,re=>{p().length>2&&re(U)})}var Q=n(W,2);{var ve=re=>{var ne=zt();j(re,ne)};F(Q,re=>{p().length===1&&re(ve)})}l(G);var xe=n(G,2);ke(xe,21,p,we,(re,ne)=>{var ue=Lt();ue.__click=[Bt,E,ne];var Ra=r(ue,!0);l(ue),D(()=>{Be(ue,1,`tickets-selected ${f[u(ne).id]?"clickeado":"numero-click"}`,"svelte-bw0vje"),m(Ra,u(ne).value)}),j(re,ue)}),l(xe),l(M),j(C,M)};F(z,C=>{p().length>0&&C(X)})}var ie=n(z,2);{var be=C=>{var M=Dt();j(C,M)};F(ie,C=>{g().length===0&&C(be)})}l(b),j(o,b)};F(Ye,o=>{u(v)?o(Aa):o(Sa,!1)})}var Je=n(Ye,2);ke(Je,17,()=>x,we,(o,b)=>{var k=Zt(),V=r(k);l(k),D(N=>m(V,`tickets ${N??""} ${u(b).name??""} ${u(b).amount??""}`),[()=>u(b).tickets.map(N=>N.value)]),j(o,k)});var Se=n(Je,2),Te=r(Se);de(Te);var Ta=n(Te,2);Ta.__click=[Et,I,d,P,Z],l(Se);var We=n(Se,2);{var Ea=o=>{var b=Gt(),k=r(b),V=r(k);l(k);var N=n(k,2),J=r(N);l(N);var z=n(N,2),X=r(z);l(z),l(b),D(()=>{m(V,`Nombre: ${u(I).name??""}`),m(J,`Telefono: ${u(I).phone??""}`),m(X,`Ticket: ${u(P)??""}`)}),j(o,b)};F(We,o=>{u(Z)&&o(Ea)})}var Ke=n(We,2);At(Ke,{get selectedTicket(){return p()},get ticketValue(){return e.ticketValue},get totalZelle(){return T()}});var Ee=n(Ke,2),Xe=r(Ee);{var Na=o=>{var b=Ut(),k=r(b,!0);l(b),D(()=>m(k,u(h))),j(o,b)};F(Xe,o=>{u(h)&&o(Na)})}var Ne=n(Xe,2),Qe=r(Ne),Ce=n(r(Qe));de(Ce),Ce.__change=[fa,c,h],l(Qe),l(Ne);var Me=n(Ne,2),$e=r(Me),Ie=n(r($e));de(Ie),Ie.__change=[fa,c,h],l($e),l(Me);var Re=n(Me,2),ea=r(Re),aa=n(r(ea));de(aa),l(ea),l(Re);var qe=n(Re,2),ta=r(qe),sa=n(r(ta));de(sa),l(ta),l(qe);var Pe=n(qe,2);Pe.__click=[Ct,s];var la=n(Pe,2);{var Ca=o=>{var b=Wt(),k=n(r(b),2),V=r(k),N=r(V);l(V);var J=n(V,2),z=r(J);l(J);var X=n(J,2),ie=r(X);l(X);var be=n(X,2),C=r(be);l(be),l(k);var M=n(k,4),G=r(M);G.__click=[Yt,s,H,t];var W=n(G,2);W.__click=[Jt,s],l(M),l(b),D(()=>{b.open=u(s),m(N,`Nombre: ${c().name??""}`),m(z,`Numero: ${c().phone??""}`),m(ie,`Monto: ${c().amount??""}`),m(C,`Referencia: ${c().reference??""}`)}),j(o,b)};F(la,o=>{u(s)&&o(Ca)})}var Ma=n(la,2);{var Ia=o=>{var b=Xt(),k=n(r(b),6),V=r(k);l(k);var N=n(k,2),J=r(N);l(N);var z=n(N,2),X=r(z);l(z);var ie=n(z,2),be=r(ie);l(ie);var C=n(ie,2);ke(C,21,p,we,(U,Q)=>{var ve=Kt(),xe=r(ve);l(ve),D(()=>m(xe,`${u(Q).value??""} ,`)),j(U,ve)}),l(C);var M=n(C,4),G=r(M);G.__click=[da,t,c,p],l(M);var W=n(M,2);W.__click=[da,t,c,p],l(b),D(()=>{b.open=u(t),m(V,`Nombre: ${c().name??""}`),m(J,`Número: ${c().phone??""}`),m(X,`Monto: ${c().amount??""}`),m(be,`Referencia: ${c().reference??""}`)}),j(o,b)};F(Ma,o=>{u(t)&&o(Ia)})}l(Ee),D(()=>{m(te,`Se han vendido ${_()??""}% de los números`),m(he,e.premioMayor),m(ja,`Valor de cada ticket ${e.ticketValue??""} Bs. ( Compra mínima ${e.cantidadTicket??""} tickets ${e.ticketValue*e.cantidadTicket} Bs. )`),m(ya,`+${e.mainPhone??""}`),Pe.disabled=p().length<e.cantidadTicket}),fe(L,_),fe(Ae,A),fe(Te,()=>u(d),o=>S(d,o)),ot("submit",Ee,O),fe(Ce,()=>c().name,o=>c().name=o),fe(Ie,()=>c().phone,o=>c().phone=o),fe(aa,()=>c().reference,o=>c().reference=o),fe(sa,()=>c().amount,o=>c().amount=o),j(a,$),Ge()}ga(["input","click","change"]);var $t=y('<footer><section class="main-section svelte-gn1wl6"><section class="svelte-gn1wl6"><a href="/" class="svelte-gn1wl6"><h3>TICORIFAS</h3></a></section> <section class="svelte-gn1wl6"><h3>SECCIONES</h3> <a href="/" class="svelte-gn1wl6">Inicio</a> <a href="#buscador" class="svelte-gn1wl6">Buscador de ticket</a></section> <section class="svelte-gn1wl6"><h3>CONTACTO</h3> <article class="contacto svelte-gn1wl6"><a href="https://api.whatsapp.com/send?phone=584124676100&amp;text=Hola%20Alberto.%20Me%20comunico%20contigo%20para%20" target="_blank" class="svelte-gn1wl6"><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"></path></svg> </a></article></section> <section class="svelte-gn1wl6"><h3>SIGUENOS</h3> <article><a href="https://www.facebook.com/profile.php?id=61570279217705" target="_blank" aria-label="Síguenos en Facebook" class="svelte-gn1wl6"><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02"></path></svg></a> <a href="https://www.instagram.com/alberto_asgg?igsh=cHc4ajhyZWI1ZXcw&amp;utm_source=qr" target="_blank" aria-label="Síguenos en Instagram" class="svelte-gn1wl6"><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path></svg></a></article></section></section> <!></footer>');function ds(a,e){let t=ce(e,"mainPhone",8);var s=$t(),i=r(s),v=n(r(i),4),_=n(r(v),2),c=r(_),T=n(r(c));l(c),l(_),l(v),ma(2),l(i);var A=n(i,2);vt(A),l(s),D(()=>m(T,` +${t()??""}`)),j(a,s)}export{us as B,ds as F,vs as H,Tt as S,Be as a,fe as b,va as c,ke as e,we as i,de as r,is as s};

import{S as x,D as G,F as K,G as P,I as Z,q as c,U as v,J as b,K as A,L as $,M as C,N as V,O as z,P as F,v as M,Q as J,R as Q,T as W,n as U,V as X,W as H,x as k,X as p,Y as ee,Z as re,_ as ne,$ as te}from"./CO6iGvuc.js";function h(r,d=null,S){if(typeof r!="object"||r===null||x in r)return r;const I=V(r);if(I!==G&&I!==K)return r;var f=new Map,g=z(r),y=P(0);g&&f.set("length",P(r.length));var m;return new Proxy(r,{defineProperty(a,e,n){(!("value"in n)||n.configurable===!1||n.enumerable===!1||n.writable===!1)&&C();var i=f.get(e);return i===void 0?(i=P(n.value),f.set(e,i)):b(i,h(n.value,m)),!0},deleteProperty(a,e){var n=f.get(e);if(n===void 0)e in a&&f.set(e,P(v));else{if(g&&typeof e=="string"){var i=f.get("length"),t=Number(e);Number.isInteger(t)&&t<i.v&&b(i,t)}b(n,v),Y(y)}return!0},get(a,e,n){var _;if(e===x)return r;var i=f.get(e),t=e in a;if(i===void 0&&(!t||(_=A(a,e))!=null&&_.writable)&&(i=P(h(t?a[e]:v,m)),f.set(e,i)),i!==void 0){var u=c(i);return u===v?void 0:u}return Reflect.get(a,e,n)},getOwnPropertyDescriptor(a,e){var n=Reflect.getOwnPropertyDescriptor(a,e);if(n&&"value"in n){var i=f.get(e);i&&(n.value=c(i))}else if(n===void 0){var t=f.get(e),u=t==null?void 0:t.v;if(t!==void 0&&u!==v)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return n},has(a,e){var u;if(e===x)return!0;var n=f.get(e),i=n!==void 0&&n.v!==v||Reflect.has(a,e);if(n!==void 0||$!==null&&(!i||(u=A(a,e))!=null&&u.writable)){n===void 0&&(n=P(i?h(a[e],m):v),f.set(e,n));var t=c(n);if(t===v)return!1}return i},set(a,e,n,i){var w;var t=f.get(e),u=e in a;if(g&&e==="length")for(var _=n;_<t.v;_+=1){var R=f.get(_+"");R!==void 0?b(R,v):_ in a&&(R=P(v),f.set(_+"",R))}t===void 0?(!u||(w=A(a,e))!=null&&w.writable)&&(t=P(void 0),b(t,h(n,m)),f.set(e,t)):(u=t.v!==v,b(t,h(n,m)));var l=Reflect.getOwnPropertyDescriptor(a,e);if(l!=null&&l.set&&l.set.call(i,n),!u){if(g&&typeof e=="string"){var D=f.get("length"),E=Number(e);Number.isInteger(E)&&E>=D.v&&b(D,E+1)}Y(y)}return!0},ownKeys(a){c(y);var e=Reflect.ownKeys(a).filter(t=>{var u=f.get(t);return u===void 0||u.v!==v});for(var[n,i]of f)i.v!==v&&!(n in a)&&e.push(n);return e},setPrototypeOf(){Z()}})}function Y(r,d=1){b(r,r.v+d)}function j(r){return r!==null&&typeof r=="object"&&x in r?r[x]:r}function fe(r,d){return Object.is(j(r),j(d))}let N=!1;function ie(r){var d=N;try{return N=!1,[r(),N]}finally{N=d}}function B(r){var d;return((d=r.ctx)==null?void 0:d.d)??!1}function ue(r,d,S,I){var q;var f=(S&ee)!==0,g=!k||(S&p)!==0,y=(S&X)!==0,m=(S&ne)!==0,a=!1,e;y?[e,a]=ie(()=>r[d]):e=r[d];var n=x in r||H in r,i=y&&(((q=A(r,d))==null?void 0:q.set)??(n&&d in r&&(s=>r[d]=s)))||void 0,t=I,u=!0,_=!1,R=()=>(_=!0,u&&(u=!1,m?t=U(I):t=I),t);e===void 0&&I!==void 0&&(i&&g&&te(),e=R(),i&&i(e));var l;if(g)l=()=>{var s=r[d];return s===void 0?R():(u=!0,_=!1,s)};else{var D=(f?M:J)(()=>r[d]);D.f|=F,l=()=>{var s=c(D);return s!==void 0&&(t=void 0),s===void 0?t:s}}if((S&Q)===0)return l;if(i){var E=r.$$legacy;return function(s,O){return arguments.length>0?((!g||!O||E||a)&&i(O?l():s),s):l()}}var w=!1,L=re(e),o=M(()=>{var s=l(),O=c(L);return w?(w=!1,O):L.v=s});return y&&c(o),f||(o.equals=W),function(s,O){if(arguments.length>0){const T=O?c(o):g&&y?h(s):s;if(!o.equals(T)){if(w=!0,b(L,T),_&&t!==void 0&&(t=T),B(o))return s;U(()=>c(o))}return s}return B(o)?o.v:c(o)}}export{ue as a,fe as i,h as p};

import{a9 as E,aa as b,ab as P,L as R,ac as W,ad as Y,ae as q,O as B,af as T,a4 as C,H as $,ag as z,ah as L,e as w,d as A,a as F,j as p,ai as G,aj as J,ak as K,al as Q,am as U,an as X,a3 as Z,i as x,h as S,y as rr,k as tr,A as er}from"./C6WS5P7N.js";import{b as ar}from"./CAyPSqEj.js";const nr=["touchstart","touchmove"];function sr(r){return nr.includes(r)}let D=!1;function ir(){D||(D=!0,document.addEventListener("reset",r=>{Promise.resolve().then(()=>{var t;if(!r.defaultPrevented)for(const a of r.target.elements)(t=a.__on_r)==null||t.call(a)})},{capture:!0}))}function H(r){var t=P,a=R;E(null),b(null);try{return r()}finally{E(t),b(a)}}function lr(r,t,a,i=a){r.addEventListener(t,()=>H(a));const n=r.__on_r;n?r.__on_r=()=>{n(),i(!0)}:r.__on_r=()=>i(!0),ir()}const I=new Set,N=new Set;function or(r,t,a,i={}){function n(e){if(i.capture||g.call(t,e),!e.cancelBubble)return H(()=>a==null?void 0:a.call(this,e))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?Y(()=>{t.addEventListener(r,n,i)}):t.addEventListener(r,n,i),n}function dr(r,t,a,i,n){var e={capture:i,passive:n},u=or(r,t,a,e);(t===document.body||t===window||t===document)&&W(()=>{t.removeEventListener(r,u,e)})}function _r(r){for(var t=0;t<r.length;t++)I.add(r[t]);for(var a of N)a(r)}function g(r){var k;var t=this,a=t.ownerDocument,i=r.type,n=((k=r.composedPath)==null?void 0:k.call(r))||[],e=n[0]||r.target,u=0,_=r.__root;if(_){var l=n.indexOf(_);if(l!==-1&&(t===document||t===window)){r.__root=t;return}var h=n.indexOf(t);if(h===-1)return;l<=h&&(u=l)}if(e=n[u]||r.target,e!==t){q(r,"currentTarget",{configurable:!0,get(){return e||a}});var m=P,f=R;E(null),b(null);try{for(var s,o=[];e!==null;){var c=e.assignedSlot||e.parentNode||e.host||null;try{var d=e["__"+i];if(d!=null&&(!e.disabled||r.target===e))if(B(d)){var[j,...M]=d;j.apply(e,[r,...M])}else d.call(e,r)}catch(y){s?o.push(y):s=y}if(r.cancelBubble||c===t||c===null)break;e=c}if(s){for(let y of o)queueMicrotask(()=>{throw y});throw s}}finally{r.__root=t,delete r.currentTarget,E(m),b(f)}}}function hr(r,t){var a=t==null?"":typeof t=="object"?t+"":t;a!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=a,r.nodeValue=a+"")}function ur(r,t){return V(r,t)}function vr(r,t){T(),t.intro=t.intro??!1;const a=t.target,i=S,n=p;try{for(var e=C(a);e&&(e.nodeType!==8||e.data!==$);)e=z(e);if(!e)throw L;w(!0),A(e),F();const u=V(r,{...t,anchor:e});if(p===null||p.nodeType!==8||p.data!==G)throw J(),L;return w(!1),u}catch(u){if(u===L)return t.recover===!1&&K(),T(),Q(a),w(!1),ur(r,t);throw u}finally{w(i),A(n)}}const v=new Map;function V(r,{target:t,anchor:a,props:i={},events:n,context:e,intro:u=!0}){T();var _=new Set,l=f=>{for(var s=0;s<f.length;s++){var o=f[s];if(!_.has(o)){_.add(o);var c=sr(o);t.addEventListener(o,g,{passive:c});var d=v.get(o);d===void 0?(document.addEventListener(o,g,{passive:c}),v.set(o,1)):v.set(o,d+1)}}};l(U(I)),N.add(l);var h=void 0,m=X(()=>{var f=a??t.appendChild(Z());return x(()=>{if(e){rr({});var s=tr;s.c=e}n&&(i.$$events=n),S&&ar(f,null),h=r(f,i)||{},S&&(R.nodes_end=p),e&&er()}),()=>{var c;for(var s of _){t.removeEventListener(s,g);var o=v.get(s);--o===0?(document.removeEventListener(s,g),v.delete(s)):v.set(s,o)}N.delete(l),f!==a&&((c=f.parentNode)==null||c.removeChild(f))}});return O.set(h,m),h}let O=new WeakMap;function pr(r,t){const a=O.get(r);return a?(O.delete(r),a(t)):Promise.resolve()}export{ir as a,_r as d,dr as e,vr as h,lr as l,ur as m,hr as s,pr as u};

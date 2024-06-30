import{f as ae,s as Be,h as Re,r as ve,o as Ee,i as we,n as je,e as Se}from"../chunks/scheduler.DeYPQbBC.js";import{S as Me,i as Te,e as y,s as x,b as ye,m as oe,c as k,d as K,y as X,h as P,g as L,f as ke,o as m,p as M,j as G,k as i,z as Q,t as W,a as te,n as Ce,A as ie,q as xe,B as se,C as ce,l as Ue}from"../chunks/index.DoflCQJQ.js";function ee(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}var Fe={initEmbed:async function(s,e){var t=document.createElement("iframe");t.style.border="0",t.style.width="100%",t.style.height="100%",e?t.src="https://www.photopea.com#"+encodeURI(e):t.src="https://www.photopea.com",s.appendChild(t);var o=new Promise(function(d,a){var h=function(p){d(t),window.removeEventListener("message",h)};window.addEventListener("message",h)});return await o},runScript:async function(s,e){var t=new Promise(function(d,a){var h=[],p=function(b){b.source==s&&(h.push(b.data),b.data=="done"&&(d(h),window.removeEventListener("message",p)))};window.addEventListener("message",p)});s.postMessage(e,"*");var o=await t;return o},addBinaryAsset:async function(s,e){var t=new Promise(function(o,d){var a=function(h){h.source==s&&h.data=="done"&&(o(!0),window.removeEventListener("message",a))};window.addEventListener("message",a)});return s.postMessage(e,"*"),await t}};function Pe(s){const e=s-1;return e*e*e+1}function ue(s,{delay:e=0,duration:t=400,easing:o=Pe,x:d=0,y:a=0,opacity:h=0}={}){const p=getComputedStyle(s),b=+p.opacity,r=p.transform==="none"?"":p.transform,g=b*(1-h),[T,U]=ae(d),[F,I]=ae(a);return{delay:e,duration:t,easing:o,css:(A,j)=>`
			transform: ${r} translate(${(1-A)*T}${U}, ${(1-A)*F}${I});
			opacity: ${b-g*j}`}}function fe(s,{delay:e=0,duration:t=400,easing:o=Pe,axis:d="y"}={}){const a=getComputedStyle(s),h=+a.opacity,p=d==="y"?"height":"width",b=parseFloat(a[p]),r=d==="y"?["top","bottom"]:["left","right"],g=r.map(C=>`${C[0].toUpperCase()}${C.slice(1)}`),T=parseFloat(a[`padding${g[0]}`]),U=parseFloat(a[`padding${g[1]}`]),F=parseFloat(a[`margin${g[0]}`]),I=parseFloat(a[`margin${g[1]}`]),A=parseFloat(a[`border${g[0]}Width`]),j=parseFloat(a[`border${g[1]}Width`]);return{delay:e,duration:t,easing:o,css:C=>`overflow: hidden;opacity: ${Math.min(C*20,1)*h};${p}: ${C*b}px;padding-${r[0]}: ${C*T}px;padding-${r[1]}: ${C*U}px;margin-${r[0]}: ${C*F}px;margin-${r[1]}: ${C*I}px;border-${r[0]}-width: ${C*A}px;border-${r[1]}-width: ${C*j}px;`}}function he(s,e,t){const o=s.slice();return o[22]=e[t],o}function de(s,e,t){const o=s.slice();return o[25]=e[t],o}function pe(s){let e,t,o="Hide gallery",d,a,h,p,b,r,g,T,U,F,I,A,j,C,D,z,N,_,$,S=ee(s[4]),B=[];for(let l=0;l<S.length;l+=1)B[l]=me(de(s,S,l));let u=ee(s[3]),f=[];for(let l=0;l<u.length;l+=1)f[l]=_e(he(s,u,l));const V=l=>te(f[l],1,1,()=>{f[l]=null});let v=s[6]&&be(s);return{c(){e=y("div"),t=y("button"),t.textContent=o,d=x(),a=y("br"),h=x(),p=y("br"),b=x(),r=y("input"),g=x(),T=y("br"),U=x();for(let l=0;l<B.length;l+=1)B[l].c();F=x(),I=y("br"),A=x();for(let l=0;l<f.length;l+=1)f[l].c();j=x(),C=y("br"),D=x(),v&&v.c(),this.h()},l(l){e=k(l,"DIV",{id:!0,class:!0});var c=K(e);t=k(c,"BUTTON",{class:!0,"data-svelte-h":!0}),X(t)!=="svelte-1vklefy"&&(t.textContent=o),d=P(c),a=k(c,"BR",{}),h=P(c),p=k(c,"BR",{}),b=P(c),r=k(c,"INPUT",{placeholder:!0,id:!0,class:!0}),g=P(c),T=k(c,"BR",{}),U=P(c);for(let n=0;n<B.length;n+=1)B[n].l(c);F=P(c),I=k(c,"BR",{}),A=P(c);for(let n=0;n<f.length;n+=1)f[n].l(c);j=P(c),C=k(c,"BR",{}),D=P(c),v&&v.l(c),c.forEach(L),this.h()},h(){m(t,"class","svelte-tb41n5"),m(r,"placeholder","Search for a model"),m(r,"id","searchBar"),m(r,"class","svelte-tb41n5"),m(e,"id","modelGallery"),m(e,"class","svelte-tb41n5")},m(l,c){G(l,e,c),i(e,t),i(e,d),i(e,a),i(e,h),i(e,p),i(e,b),i(e,r),ie(r,s[7]),i(e,g),i(e,T),i(e,U);for(let n=0;n<B.length;n+=1)B[n]&&B[n].m(e,null);i(e,F),i(e,I),i(e,A);for(let n=0;n<f.length;n+=1)f[n]&&f[n].m(e,null);i(e,j),i(e,C),i(e,D),v&&v.m(e,null),N=!0,_||($=[Q(t,"click",s[16]),Q(r,"input",s[17]),Q(r,"change",s[10])],_=!0)},p(l,c){if(c&128&&r.value!==l[7]&&ie(r,l[7]),c&560){S=ee(l[4]);let n;for(n=0;n<S.length;n+=1){const H=de(l,S,n);B[n]?B[n].p(H,c):(B[n]=me(H),B[n].c(),B[n].m(e,F))}for(;n<B.length;n+=1)B[n].d(1);B.length=S.length}if(c&4362){u=ee(l[3]);let n;for(n=0;n<u.length;n+=1){const H=he(l,u,n);f[n]?(f[n].p(H,c),W(f[n],1)):(f[n]=_e(H),f[n].c(),W(f[n],1),f[n].m(e,j))}for(xe(),n=u.length;n<f.length;n+=1)V(n);Ce()}l[6]?v?v.p(l,c):(v=be(l),v.c(),v.m(e,null)):v&&(v.d(1),v=null)},i(l){if(!N){for(let c=0;c<u.length;c+=1)W(f[c]);l&&we(()=>{N&&(z||(z=se(e,ue,{y:"100vh",opacity:1},!0)),z.run(1))}),N=!0}},o(l){f=f.filter(Boolean);for(let c=0;c<f.length;c+=1)te(f[c]);l&&(z||(z=se(e,ue,{y:"100vh",opacity:1},!1)),z.run(0)),N=!1},d(l){l&&L(e),ce(B,l),ce(f,l),v&&v.d(),l&&z&&z.end(),_=!1,ve($)}}}function me(s){let e,t=s[25].name+"",o,d,a;function h(){return s[18](s[25])}return{c(){e=y("button"),o=ye(t),this.h()},l(p){e=k(p,"BUTTON",{class:!0});var b=K(e);o=ke(b,t),b.forEach(L),this.h()},h(){m(e,"class","svelte-tb41n5"),M(e,"padding","4px 8px"),M(e,"font-size","10px")},m(p,b){G(p,e,b),i(e,o),d||(a=Q(e,"click",h),d=!0)},p(p,b){s=p,b&16&&t!==(t=s[25].name+"")&&Ue(o,t)},d(p){p&&L(e),d=!1,a()}}}function _e(s){let e,t,o,d=`url('${ge(s[22])}')`,a,h,p;function b(){return s[19](s[22])}return{c(){e=y("div"),this.h()},l(r){e=k(r,"DIV",{class:!0,title:!0}),K(e).forEach(L),this.h()},h(){m(e,"class","imageThumbnail svelte-tb41n5"),m(e,"title",t=s[22].name),M(e,"background-image",d)},m(r,g){G(r,e,g),a=!0,h||(p=Q(e,"click",b),h=!0)},p(r,g){s=r,(!a||g&8&&t!==(t=s[22].name))&&m(e,"title",t),g&8&&d!==(d=`url('${ge(s[22])}')`)&&M(e,"background-image",d)},i(r){a||(r&&we(()=>{a&&(o||(o=se(e,fe,{},!0)),o.run(1))}),a=!0)},o(r){r&&(o||(o=se(e,fe,{},!1)),o.run(0)),a=!1},d(r){r&&L(e),r&&o&&o.end(),h=!1,p()}}}function be(s){let e,t="More",o,d;return{c(){e=y("button"),e.textContent=t,this.h()},l(a){e=k(a,"BUTTON",{class:!0,"data-svelte-h":!0}),X(e)!=="svelte-bjmsex"&&(e.textContent=t),this.h()},h(){m(e,"class","svelte-tb41n5")},m(a,h){G(a,e,h),o||(d=Q(e,"click",s[11]),o=!0)},p:je,d(a){a&&L(e),o=!1,d()}}}function Le(s){let e,t,o="Show gallery",d,a,h,p,b,r,g,T,U,F,I,A,j,C="Add to Document",D,z,N,_,$,S,B="Sketchfab",u,f,V,v,l="Report a bug",c,n,H,q,ne="Contribute on GitHub",Y,J,Z,re,le,E=s[8]&&pe(s);return{c(){e=y("div"),t=y("button"),t.textContent=o,d=x(),a=y("br"),h=x(),p=y("br"),b=x(),r=y("iframe"),T=x(),U=y("br"),F=x(),I=y("br"),A=x(),j=y("button"),j.textContent=C,D=x(),z=y("br"),N=x(),_=y("div"),$=ye("Models courtesy of "),S=y("a"),S.textContent=B,u=x(),f=y("br"),V=x(),v=y("a"),v.textContent=l,c=x(),n=y("br"),H=x(),q=y("a"),q.textContent=ne,Y=x(),E&&E.c(),J=oe(),this.h()},l(R){e=k(R,"DIV",{id:!0,class:!0});var w=K(e);t=k(w,"BUTTON",{class:!0,"data-svelte-h":!0}),X(t)!=="svelte-dro19e"&&(t.textContent=o),d=P(w),a=k(w,"BR",{}),h=P(w),p=k(w,"BR",{}),b=P(w),r=k(w,"IFRAME",{src:!0,id:!0,allow:!0,"xr-spatial-tracking":!0,"execution-while-out-of-viewport":!0,"execution-while-not-rendered":!0,"web-share":!0,mozallowfullscreen:!0,webkitallowfullscreen:!0,title:!0,class:!0}),K(r).forEach(L),T=P(w),U=k(w,"BR",{}),F=P(w),I=k(w,"BR",{}),A=P(w),j=k(w,"BUTTON",{class:!0,"data-svelte-h":!0}),X(j)!=="svelte-450a3s"&&(j.textContent=C),D=P(w),z=k(w,"BR",{}),w.forEach(L),N=P(R),_=k(R,"DIV",{});var O=K(_);$=ke(O,"Models courtesy of "),S=k(O,"A",{target:!0,href:!0,"data-svelte-h":!0}),X(S)!=="svelte-1j51amm"&&(S.textContent=B),u=P(O),f=k(O,"BR",{}),V=P(O),v=k(O,"A",{target:!0,href:!0,"data-svelte-h":!0}),X(v)!=="svelte-5yj9b3"&&(v.textContent=l),c=P(O),n=k(O,"BR",{}),H=P(O),q=k(O,"A",{target:!0,href:!0,"data-svelte-h":!0}),X(q)!=="svelte-84s97s"&&(q.textContent=ne),O.forEach(L),Y=P(R),E&&E.l(R),J=oe(),this.h()},h(){m(t,"class","svelte-tb41n5"),Re(r.src,g="")||m(r,"src",g),m(r,"id","viewerFrame"),m(r,"allow","autoplay; fullscreen; xr-spatial-tracking"),m(r,"xr-spatial-tracking",""),m(r,"execution-while-out-of-viewport",""),m(r,"execution-while-not-rendered",""),m(r,"web-share",""),r.allowFullscreen=!0,m(r,"mozallowfullscreen","true"),m(r,"webkitallowfullscreen","true"),m(r,"title","sketchfab embed"),m(r,"class","svelte-tb41n5"),m(j,"class","pink svelte-tb41n5"),m(e,"id","centered"),m(e,"class","svelte-tb41n5"),m(S,"target","_blank"),m(S,"href","https://sketchfab.com/"),M(S,"color","white"),m(v,"target","_blank"),m(v,"href","https://github.com/yikuansun/photopea-sketchfab/issues"),M(v,"color","white"),m(q,"target","_blank"),m(q,"href","https://github.com/yikuansun/photopea-sketchfab"),M(q,"color","white"),M(_,"position","fixed"),M(_,"bottom","-20px"),M(_,"left","50vw"),M(_,"transform","translate(-50%, -50%)"),M(_,"text-align","center"),M(_,"background-color","#353535"),M(_,"color","white"),M(_,"padding","5px"),M(_,"font-size","8px"),M(_,"font-family","Arial, sans-serif")},m(R,w){G(R,e,w),i(e,t),i(e,d),i(e,a),i(e,h),i(e,p),i(e,b),i(e,r),s[14](r),i(e,T),i(e,U),i(e,F),i(e,I),i(e,A),i(e,j),i(e,D),i(e,z),G(R,N,w),G(R,_,w),i(_,$),i(_,S),i(_,u),i(_,f),i(_,V),i(_,v),i(_,c),i(_,n),i(_,H),i(_,q),G(R,Y,w),E&&E.m(R,w),G(R,J,w),Z=!0,re||(le=[Q(t,"click",s[13]),Q(j,"click",s[15])],re=!0)},p(R,[w]){R[8]?E?(E.p(R,w),w&256&&W(E,1)):(E=pe(R),E.c(),W(E,1),E.m(J.parentNode,J)):E&&(xe(),te(E,1,1,()=>{E=null}),Ce())},i(R){Z||(W(E),Z=!0)},o(R){te(E),Z=!1},d(R){R&&(L(e),L(N),L(_),L(Y),L(J)),s[14](null),E&&E.d(R),re=!1,ve(le)}}}function ge(s){return s.thumbnails.images.sort((e,t)=>t.size-e.size)[0].url}function Ae(s,e,t){let o,d="7w7pAfrCfjovwykkEeRFLGw5SXS",a,h=[],p=[],b="animals-pets",r,g="https://api.sketchfab.com/v3/models",T="",U=!1;async function F(){t(3,h=[]);let u=new URL("https://api.sketchfab.com/v3/models");u.searchParams.set("sort_by","-viewCount"),u.searchParams.set("categories",b),u.searchParams.set("staffpicked",!0),u.searchParams.set("animated",!1),u.searchParams.set("has_sound",!1),u.searchParams.set("archives_flavours",!1);let V=await(await fetch(u)).json();t(3,h=V.results),t(6,g=V.next)}async function I(){t(3,h=[]);let u=new URL("https://api.sketchfab.com/v3/search");u.searchParams.set("type","models"),u.searchParams.set("sort_by","-viewCount"),u.searchParams.set("q",T),u.searchParams.set("staffpicked",!0),u.searchParams.set("animated",!1),u.searchParams.set("has_sound",!1),u.searchParams.set("archives_flavours",!1);let V=await(await fetch(u)).json();t(3,h=V.results),t(6,g=new URL(V.next))}async function A(){let f=await(await fetch(g)).json();t(3,h=[...h,...f.results]),t(6,g=f.next)}async function j(){let f=await(await fetch("https://api.sketchfab.com/v3/categories?sort_by=slug")).json();t(4,p=f.results)}function C(){r=new Sketchfab(o),r.init(d,{success:u=>{t(2,a=u),a.start(),a.addEventListener("viewerready",function(){console.log("viewer is ready")})},error:()=>{console.log("error making viewer")},transparent:1})}Ee(()=>{C(),F(),j()});const D=()=>{t(8,U=!0)};function z(u){Se[u?"unshift":"push"](()=>{o=u,t(0,o)})}const N=()=>{a.getScreenShot(2048,2048,"image/png",(u,f)=>{Fe.runScript(window.parent,`app.open("${f}", null, true);`)})},_=()=>{t(8,U=!1)};function $(){T=this.value,t(7,T)}return[o,d,a,h,p,b,g,T,U,F,I,A,C,D,z,N,_,$,u=>{t(5,b=u.slug),F()},u=>{t(1,d=u.uid),C(),t(8,U=!1)}]}class Ne extends Me{constructor(e){super(),Te(this,e,Ae,Le,Be,{})}}export{Ne as component};

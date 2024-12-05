"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[8856],{28856:(e,t,i)=>{i.d(t,{doAfterAttach:()=>l});var n=i(36422),o=i(99546),a=i(95095),s=i(82727),r=i(42489),f=i(30385);function l(e){(0,n.addDisposer)(e,(0,r.autorun)((()=>{const t=(0,o.getContainingView)(e);if(!t.initialized)return;const i=e.mainCanvas?.getContext("2d"),n=e.cigarClickMapCanvas?.getContext("2d");if(!i||!n)return;const a=e.height,s=t.width;i.clearRect(0,0,s,a),n.clearRect(0,0,s,a),(0,f.Ww)(e,i,n)}))),(0,n.addDisposer)(e,(0,r.autorun)((()=>{(0,o.getContainingView)(e).initialized&&(0,f.C4)(e)}))),(0,n.addDisposer)(e,(0,r.reaction)((()=>{const t=(0,o.getContainingView)(e);return{bpPerPx:t.views.map((e=>e.bpPerPx)),displayedRegions:JSON.stringify(t.views.map((e=>e.displayedRegions))),features:e.features,initialized:t.initialized}}),(({initialized:t})=>{if(!t)return;const{assemblyManager:i}=(0,o.getSession)(e),r=(0,o.getContainingView)(e),f=(0,n.getParent)(e,4).level,l=r.views.map((e=>({...(0,n.getSnapshot)(e),width:e.width,staticBlocks:e.staticBlocks,interRegionPaddingWidth:e.interRegionPaddingWidth,minimumBlockWidth:e.minimumBlockWidth}))),c=[],g=e.features||[];for(const e of g){const t=e.get("mate");let n=e.get("start"),o=e.get("end");const r=t.start,g=t.end;-1===e.get("strand")&&([o,n]=[n,o]);const d=i.get(e.get("assemblyName")),h=i.get(t.assemblyName),u=e.get("refName"),m=t.refName,b=d?.getCanonicalRefName(u)||u,v=h?.getCanonicalRefName(m)||m,C=l[f],p=l[f+1],w=(0,a.eB)({self:C,refName:b,coord:n}),M=(0,a.eB)({self:C,refName:b,coord:o}),x=(0,a.eB)({self:p,refName:v,coord:r}),P=(0,a.eB)({self:p,refName:v,coord:g});if(void 0===w||void 0===M||void 0===x||void 0===P)continue;const k=e.get("CIGAR");c.push({p11:w,p12:M,p21:x,p22:P,f:e,cigar:s.aF.parseCigar(k)})}e.setFeatPositions(c)}),{fireImmediately:!0}))}},79610:(e,t,i)=>{i.d(t,{$2:()=>s,Eg:()=>l,WT:()=>r,f0:()=>f,mr:()=>a});var n=i(99546),o=i(30385);function a({feature:e,ctx:t,offsets:i,level:o,cb:a,height:r,drawCurves:f,oobLimit:l,viewWidth:c,hideTiny:g}){const{p11:d,p12:h,p21:u,p22:m}=e,b=d.offsetPx-i[o],v=h.offsetPx-i[o],C=u.offsetPx-i[o+1],p=m.offsetPx-i[o+1],w=Math.abs(v-b),M=Math.abs(p-C),x=r,P=(x-0)/2,k=Math.min(C,p),S=Math.max(C,p);(0,n.doesIntersect2)(k,S,-l,c+l)&&(w<=1&&M<=1?g||(t.beginPath(),t.moveTo(b,0),f?t.bezierCurveTo(b,P,C,P,C,x):t.lineTo(C,x),t.stroke()):(s(t,b,v,0,p,C,x,P,f),a(t)))}function s(e,t,i,n,o,a,s,r,f){f?function(e,t,i,n,o,a,s,r){const f=Math.abs(t-i),l=Math.abs(t-i);if(f<5&&l<5&&i<t&&Math.abs(t-o)>100){const e=t;t=i,i=e}e.beginPath(),e.moveTo(t,n),e.lineTo(i,n),e.bezierCurveTo(i,r,o,r,o,s),e.lineTo(a,s),e.bezierCurveTo(a,r,t,r,t,n),e.closePath(),e.fill()}(e,t,i,n,o,a,s,r):function(e,t,i,n,o,a,s){e.beginPath(),e.moveTo(t,n),e.lineTo(i,n),e.lineTo(o,s),e.lineTo(a,s),e.closePath(),e.fill()}(e,t,i,n,o,a,s)}function r(e,t){const i=(0,n.getContainingView)(t),a=(0,n.getContainingTrack)(t),s=t.clickMapCanvas,r=t.cigarClickMapCanvas;if(!s||!r)return;const f=s.getBoundingClientRect(),l=s.getContext("2d"),c=r.getContext("2d");if(!l||!c)return;const g=e.clientX-f.left,d=e.clientY-f.top,[h,u,m]=l.getImageData(g,d,1,1).data,b=Math.floor(o.xx/t.numFeats),v=(0,o.OX)(h,u,m,b),C=t.featPositions[v];if(C){const{f:e}=C;t.setClickId(e.id());const o=(0,n.getSession)(t);(0,n.isSessionModelWithWidgets)(o)&&o.showWidget(o.addWidget("BaseFeatureWidget","baseFeature",{view:i,track:a,featureData:e.toJSON()}))}return C}function f(e,t,i){e.preventDefault();const n=t.clickMapCanvas,a=t.cigarClickMapCanvas;if(!n||!a)return;const s=n.getBoundingClientRect(),r=n.getContext("2d"),f=a.getContext("2d");if(!r||!f)return;const{clientX:l,clientY:c}=e,g=l-s.left,d=c-s.top,[h,u,m]=r.getImageData(g,d,1,1).data,b=Math.floor(o.xx/t.numFeats),v=(0,o.OX)(h,u,m,b),C=t.featPositions[v];C&&(t.setClickId(C.f.id()),i({clientX:l,clientY:c,feature:C}))}function l(e,t,i){const o=e.toJSON(),a=o.mate,s=o.end-o.start,r=a.end-a.start,f=o.identity,l=o.name,c=a.name;return[`Loc1: ${(0,n.assembleLocString)(o)}`,`Loc2: ${(0,n.assembleLocString)(a)}`,`Inverted: ${-1===o.strand}`,`Query len: ${s.toLocaleString("en-US")}`,`Target len: ${r.toLocaleString("en-US")}`,f?`Identity: ${f.toPrecision(2)}`:"",t?`CIGAR operator: ${t}${i}`:"",l?`Name 1: ${l}`:"",c?`Name 1: ${c}`:""].filter((e=>!!e)).join("<br/>")}},30385:(e,t,i)=>{i.d(t,{C4:()=>h,OX:()=>g,Ww:()=>d,xx:()=>s});var n=i(99546),o=i(79610),a=i(36422);const s=16581375;function r(e){return`rgb(${Math.floor(e/65025)%255},${Math.floor(e/255)%255},${e%255})`}const f={I:"#ff03",N:"#0a03",D:"#00f3",X:"brown",M:"#f003","=":"#f003"},l=3,c=1600;function g(e,t,i,n){return Math.floor((255*e*255+255*t+i-1)/n)}function d(e,t,i){const g=(0,n.getContainingView)(e),d=(0,a.getParent)(e,4).level,h=g.drawCurves,u=g.drawCIGAR,{height:m,featPositions:b}=e,v=g.width,C=g.views.map((e=>e.bpPerPx));i&&(i.imageSmoothingEnabled=!1),t.beginPath();const p=g.views.map((e=>e.offsetPx)),w=Math.floor(s/b.length);t.fillStyle=f.M,t.strokeStyle=f.M;for(const{p11:e,p12:i,p21:n,p22:o}of b){const a=e.offsetPx-p[d],s=i.offsetPx-p[d],r=n.offsetPx-p[d+1],f=o.offsetPx-p[d+1],g=Math.abs(s-a),u=Math.abs(f-r),b=0,C=m,w=(C-b)/2;g<=l&&u<=l&&r<v+c&&r>-c&&(t.moveTo(a,b),h?t.bezierCurveTo(a,w,r,w,r,C):t.lineTo(r,C))}t.stroke(),t.fillStyle=f.M,t.strokeStyle=f.M;for(const{p11:e,p12:a,p21:w,p22:M,f:x,cigar:P}of b){const b=e.offsetPx-p[d],k=a.offsetPx-p[d],S=w.offsetPx-p[d+1],T=M.offsetPx-p[d+1],y=Math.abs(k-b),N=Math.abs(T-S),$=Math.min(S,T),I=Math.max(S,T),W=0,R=m,B=(R-W)/2;if(!(y<=l&&N<=l)&&(0,n.doesIntersect2)($,I,-c,g.width+c)){const e=x.get("strand"),n=-1===e?k:b,a=n<(-1===e?b:k)?1:-1,l=(S<T?1:-1)*e;let c=n,g=-1===e?T:S;if(P.length&&u){let e=!1,n=0,u=0;const m=Math.floor(s/P.length);for(let s=0;s<P.length;s+=2){const b=s*m+1,p=+P[s],w=P[s+1];e||(n=c,u=g);const M=p/C[d],x=p/C[d+1];if("M"===w||"="===w||"X"===w?(c+=M*a,g+=x*l):"D"===w||"N"===w?c+=M*a:"I"===w&&(g+=x*l),!(Math.max(n,u,c,g)<0||Math.min(n,u,c,g)>v)){const a=s<P.length-2;Math.abs(c-n)<=1&&Math.abs(g-u)<=1&&a?e=!0:(t.fillStyle=f[e&&M>1||x>1?w:"M"],e=!1,(0,o.$2)(t,n,c,W,g,u,R,B,h),i&&(i.fillStyle=r(b),(0,o.$2)(i,n,c,W,g,u,R,B,h)))}}}else(0,o.$2)(t,b,k,W,T,S,R,B,h)}}const M=e.clickMapCanvas?.getContext("2d");if(M){M.imageSmoothingEnabled=!1,M.clearRect(0,0,v,m);for(let e=0;e<b.length;e++){const t=b[e],i=e*w+1;M.fillStyle=r(i),(0,o.mr)({cb:e=>{e.fill()},feature:t,ctx:M,drawCurves:h,level:d,offsets:p,oobLimit:c,viewWidth:g.width,hideTiny:!0,height:m})}}}function h(e){const{clickId:t,mouseoverId:i}=e,s=(0,n.getContainingView)(e),r=s.drawCurves,f=e.height,l=s.width,g=e.mouseoverCanvas?.getContext("2d"),d=s.views.map((e=>e.offsetPx)),h=(0,a.getParent)(e,4).level;if(!g)return;g.resetTransform(),g.scale(1,1),g.clearRect(0,0,l,f);const u=e.featMap[i||""];u&&(g.fillStyle="rgb(0,0,0,0.1)",(0,o.mr)({cb:e=>{e.fill()},feature:u,level:h,ctx:g,oobLimit:c,viewWidth:s.width,drawCurves:r,offsets:d,height:f}));const m=e.featMap[t||""];m&&(g.strokeStyle="rgb(0, 0, 0, 0.9)",(0,o.mr)({cb:e=>{e.stroke()},feature:m,ctx:g,level:h,oobLimit:c,viewWidth:s.width,drawCurves:r,offsets:d,height:f}))}}}]);
//# sourceMappingURL=8856.a4769202.chunk.js.map
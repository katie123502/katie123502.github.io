"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[9756],{49756:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var s=a(46377),r=a(44728),n=a(66885),i=a(99546),o=a(82088);class c extends s.BaseFeatureDataAdapter{gcMode="content";static capabilities=["hasLocalStats"];async configure(){const e=await(this.getSubAdapter?.(this.getConf("sequenceAdapter")));if(!e)throw new Error("Error getting subadapter");return e.dataAdapter}async getRefNames(){return(await this.configure()).getRefNames()}getFeatures(e,t){return(0,n.ObservableCreate)((async a=>{const s=await this.configure(),n=this.getConf("windowSize"),c=this.getConf("windowDelta"),u=1===n?1:n/2,g=1===n;let{start:d,end:h}=e;if(d=Math.max(0,d-u),h+=u,h<0||d>h)return void a.complete();const l=s.getFeatures({...e,start:d,end:h},t),w=await(0,r._)(l.pipe((0,o.$)())),f=w[0]?.get("seq")||"";for(let t=u;t<f.length-u;t+=c){const s=g?f[t]:f.slice(t-u,t+u);let r=0,n=0,o=0;for(const e of s)"c"===e||"C"===e?r++:"g"!==e&&"G"!==e||n++,"N"!==e&&o++;const h=d,l="content"===this.gcMode?(n+r)/(o||1):"skew"===this.gcMode?(n-r)/(n+r||1):0;a.next(new i.SimpleFeature({uniqueId:`${this.id}_${h+t}`,refName:e.refName,start:h+t,end:h+t+c,score:l}))}a.complete()}))}freeResources(){}}}}]);
//# sourceMappingURL=9756.4ac80c37.chunk.js.map
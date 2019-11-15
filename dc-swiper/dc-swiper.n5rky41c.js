/*! Built with http://stenciljs.com */
(function(Context,namespace,hydratedCssClass,resourcesUrl,s){"use strict";
s=document.querySelector("script[data-namespace='dc-swiper']");if(s){resourcesUrl=s.getAttribute('data-resources-url');}
(function(t,e,n,o){"use strict";function i(t,e){return"sc-"+t.t+(e&&e!==O?"-"+e:"")}function c(t,e){return t+(e?"-h":"-s")}function r(t,e,n,o){const c=2===n.e||1===n.e&&!t.o.n;let r=n.t+o.mode,f=n[r];if(c&&(o["s-sc"]=i(n,o.mode)),f||(f=n[r=n.t+O],c&&(o["s-sc"]=i(n))),f){let n=e.i.head,o=t.c.get(n);if(o||t.c.set(n,o={}),!o[r]){let t;{t=f.content.cloneNode(!0),o[r]=!0;const i=n.querySelectorAll("[data-styles]");e.r(n,t,i.length&&i[i.length-1].nextSibling||n.firstChild)}}}}function f(t,e,n,o,i,c,r){if("class"!==n||c)if("style"===n){for(const t in o)i&&null!=i[t]||(/-/.test(t)?e.style.f(t):e.style[t]="");for(const t in i)o&&i[t]===o[t]||(/-/.test(t)?e.style.setProperty(t,i[t]):e.style[t]=i[t])}else if("o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in e)if("list"!==n&&"type"!==n&&!c&&(n in e||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=t.s(e);o&&o.l&&o.l[n]?l(e,n,i):"ref"!==n&&(l(e,n,null==i?"":i),null!=i&&!1!==i||t.o.u(e,n))}else null!=i&&"key"!==n?function f(t,e,n,o="boolean"==typeof n){const i=e!==(e=e.replace(/^xlink\:?/,""));null==n||o&&(!n||"false"===n)?i?t.removeAttributeNS(T,A(e)):t.removeAttribute(e):"function"!=typeof n&&(n=o?"":n.toString(),i?t.setAttributeNS(T,A(e),n):t.setAttribute(e,n))}(e,n,i):(c||t.o.a(e,n)&&(null==i||!1===i))&&t.o.u(e,n);else n=A(n)in e?A(n.substring(2)):A(n[2])+n.substring(3),i?i!==o&&t.o.p(e,n,i):t.o.d(e,n);else if(o!==i){const t=s(o),n=s(i),c=t.filter(t=>!n.includes(t)),r=s(e.className).filter(t=>!c.includes(t)),f=n.filter(e=>!t.includes(e)&&!r.includes(e));r.push(...f),e.className=r.join(" ")}}function s(t){return null==t||""===t?[]:t.trim().split(/\s+/)}function l(t,e,n){try{t[e]=n}catch(t){}}function u(t,e,n,o,i){const c=11===n.v.nodeType&&n.v.host?n.v.host:n.v,r=e&&e.vattrs||E,s=n.vattrs||E;for(i in r)s&&null!=s[i]||null==r[i]||f(t,c,i,r[i],void 0,o,n.m);for(i in s)i in r&&s[i]===("value"===i||"checked"===i?c[i]:r[i])||f(t,c,i,r[i],s[i],o,n.m)}function a(t,e){function n(i,c,r,f,s,p,y,h,w){if(h=c.vchildren[r],l||(d=!0,"slot"===h.vtag&&(a&&e.b(f,a+"-s"),h.vchildren?h.y=!0:h.w=!0)),S(h.vtext))h.v=e.g(h.vtext);else if(h.w)h.v=e.g("");else{if(p=h.v=L||"svg"===h.vtag?e.M("http://www.w3.org/2000/svg",h.vtag):e.k(h.y?"slot-fb":h.vtag),t.C(p)&&t.j.delete(b),L="svg"===h.vtag||"foreignObject"!==h.vtag&&L,u(t,null,h,L),S(a)&&p["s-si"]!==a&&e.b(p,p["s-si"]=a),h.vchildren)for(s=0;s<h.vchildren.length;++s)(y=n(i,h,s,p))&&e.x(p,y);"svg"===h.vtag&&(L=!1)}return h.v["s-hn"]=m,(h.y||h.w)&&(h.v["s-sr"]=!0,h.v["s-cr"]=v,h.v["s-sn"]=h.vname||"",(w=i&&i.vchildren&&i.vchildren[r])&&w.vtag===h.vtag&&i.v&&o(i.v)),h.v}function o(n,i,c,r){t.W=!0;const l=e.O(n);for(c=l.length-1;c>=0;c--)(r=l[c])["s-hn"]!==m&&r["s-ol"]&&(e.N(r),e.r(s(r),r,f(r)),e.N(r["s-ol"]),r["s-ol"]=null,d=!0),i&&o(r,i);t.W=!1}function i(t,o,i,c,r,s,l,u){const a=t["s-cr"];for((l=a&&e.S(a)||t).shadowRoot&&e.A(l)===m&&(l=l.shadowRoot);r<=s;++r)c[r]&&(u=S(c[r].vtext)?e.g(c[r].vtext):n(null,i,r,t))&&(c[r].v=u,e.r(l,u,f(o)))}function c(t,n,i,c){for(;n<=i;++n)S(t[n])&&(c=t[n].v,p=!0,c["s-ol"]?e.N(c["s-ol"]):o(c,!0),e.N(c))}function r(t,e){return t.vtag===e.vtag&&t.vkey===e.vkey&&("slot"!==t.vtag||t.vname===e.vname)}function f(t){return t&&t["s-ol"]?t["s-ol"]:t}function s(t){return e.S(t["s-ol"]?t["s-ol"]:t)}let l,a,p,d,v,m,b;const y=[];return function h(w,g,M,$,k,C,j,x,W,O,E,N){if(b=w,m=e.A(b),v=b["s-cr"],l=$,a=b["s-sc"],d=p=!1,function l(a,p,d){const v=p.v=a.v,m=a.vchildren,b=p.vchildren;L=p.v&&S(e.R(p.v))&&void 0!==p.v.ownerSVGElement,L="svg"===p.vtag||"foreignObject"!==p.vtag&&L,S(p.vtext)?(d=v["s-cr"])?e.T(e.S(d),p.vtext):a.vtext!==p.vtext&&e.T(v,p.vtext):("slot"!==p.vtag&&u(t,a,p,L),S(m)&&S(b)?function y(t,u,a,p,d,v,m,b){let y=0,h=0,w=u.length-1,g=u[0],M=u[w],$=p.length-1,k=p[0],C=p[$];for(;y<=w&&h<=$;)if(null==g)g=u[++y];else if(null==M)M=u[--w];else if(null==k)k=p[++h];else if(null==C)C=p[--$];else if(r(g,k))l(g,k),g=u[++y],k=p[++h];else if(r(M,C))l(M,C),M=u[--w],C=p[--$];else if(r(g,C))"slot"!==g.vtag&&"slot"!==C.vtag||o(e.S(g.v)),l(g,C),e.r(t,g.v,e.L(M.v)),g=u[++y],C=p[--$];else if(r(M,k))"slot"!==g.vtag&&"slot"!==C.vtag||o(e.S(M.v)),l(M,k),e.r(t,M.v,g.v),M=u[--w],k=p[++h];else{for(d=null,v=y;v<=w;++v)if(u[v]&&S(u[v].vkey)&&u[v].vkey===k.vkey){d=v;break}S(d)?((b=u[d]).vtag!==k.vtag?m=n(u&&u[h],a,d,t):(l(b,k),u[d]=void 0,m=b.v),k=p[++h]):(m=n(u&&u[h],a,h,t),k=p[++h]),m&&e.r(s(g.v),m,f(g.v))}y>w?i(t,null==p[$+1]?null:p[$+1].v,a,p,h,$):h>$&&c(u,y,w)}(v,m,p,b):S(b)?(S(a.vtext)&&e.T(v,""),i(v,null,p,b,0,b.length-1)):S(m)&&c(m,0,m.length-1)),L&&"svg"===p.vtag&&(L=!1)}(g,M),d){for(function t(n,o,i,c,r,f,s,l,u,a){for(r=0,f=(o=e.O(n)).length;r<f;r++){if((i=o[r])["s-sr"]&&(c=i["s-cr"]))for(l=e.O(e.S(c)),u=i["s-sn"],s=l.length-1;s>=0;s--)(c=l[s])["s-cn"]||c["s-nr"]||c["s-hn"]===i["s-hn"]||((3===(a=e.D(c))||8===a)&&""===u||1===a&&null===e.P(c,"slot")&&""===u||1===a&&e.P(c,"slot")===u)&&(y.some(t=>t.q===c)||(p=!0,c["s-sn"]=u,y.push({B:i,q:c})));1===e.D(i)&&t(i)}}(M.v),j=0;j<y.length;j++)(x=y[j]).q["s-ol"]||((W=e.g(""))["s-nr"]=x.q,e.r(e.S(x.q),x.q["s-ol"]=W,x.q));for(t.W=!0,j=0;j<y.length;j++){for(x=y[j],E=e.S(x.B),N=e.L(x.B),W=x.q["s-ol"];W=e.I(W);)if((O=W["s-nr"])&&O&&O["s-sn"]===x.q["s-sn"]&&E===e.S(O)&&(O=e.L(O))&&O&&!O["s-nr"]){N=O;break}(!N&&E!==e.S(x.q)||e.L(x.q)!==N)&&x.q!==N&&(e.N(x.q),e.r(E,x.q,N))}t.W=!1}return p&&function t(n,o,i,c,r,f,s,l){for(c=0,r=(i=e.O(n)).length;c<r;c++)if(o=i[c],1===e.D(o)){if(o["s-sr"])for(s=o["s-sn"],o.hidden=!1,f=0;f<r;f++)if(i[f]["s-hn"]!==o["s-hn"])if(l=e.D(i[f]),""!==s){if(1===l&&s===e.P(i[f],"slot")){o.hidden=!0;break}}else if(1===l||3===l&&""!==e.F(i[f]).trim()){o.hidden=!0;break}t(o)}}(M.v),y.length=0,M}}function p(t,e){t&&(t.vattrs&&t.vattrs.ref&&t.vattrs.ref(e?null:t.v),t.vchildren&&t.vchildren.forEach(t=>{p(t,e)}))}function d(t,e,n,o,i){const c=t.D(e);let r,f,s,l;if(i&&1===c){(f=t.P(e,W))&&(s=f.split("."))[0]===o&&((l={}).vtag=t.A(l.v=e),n.vchildren||(n.vchildren=[]),n.vchildren[s[1]]=l,n=l,i=""!==s[2]);for(let c=0;c<e.childNodes.length;c++)d(t,e.childNodes[c],n,o,i)}else 3===c&&(r=e.previousSibling)&&8===t.D(r)&&"s"===(s=t.F(r).split("."))[0]&&s[1]===o&&((l={vtext:t.F(e)}).v=e,n.vchildren||(n.vchildren=[]),n.vchildren[s[2]]=l)}function v(t,e){let n,o,i=null,c=!1,r=!1;for(var f=arguments.length;f-- >2;)D.push(arguments[f]);for(;D.length>0;){let e=D.pop();if(e&&void 0!==e.pop)for(f=e.length;f--;)D.push(e[f]);else"boolean"==typeof e&&(e=null),(r="function"!=typeof t)&&(null==e?e="":"number"==typeof e?e=String(e):"string"!=typeof e&&(r=!1)),r&&c?i[i.length-1].vtext+=e:null===i?i=[r?{vtext:e}:e]:i.push(r?{vtext:e}:e),c=r}if(null!=e){if(e.className&&(e.class=e.className),"object"==typeof e.class){for(f in e.class)e.class[f]&&D.push(f);e.class=D.join(" "),D.length=0}null!=e.key&&(n=e.key),null!=e.name&&(o=e.name)}return"function"==typeof t?t(e,i||[],P):{vtag:t,vchildren:i,vtext:void 0,vattrs:e,vkey:n,vname:o,v:void 0,m:!1}}function m(t){return{vtag:t.vtag,vchildren:t.vchildren,vtext:t.vtext,vattrs:t.vattrs,vkey:t.vkey,vname:t.vname}}function b(t){const[e,n,,o,i,c]=t,r={color:{H:"color"}};if(o)for(let t=0;t<o.length;t++){const e=o[t];r[e[0]]={U:e[1],Q:!!e[2],H:"string"==typeof e[3]?e[3]:e[3]?e[0]:0,Z:e[4]}}return{t:e,z:n,l:Object.assign({},r),e:i,G:c?c.map(y):void 0}}function y(t){return{J:t[0],K:t[1],V:!!t[2],X:!!t[3],Y:!!t[4]}}function h(t,e){if(S(e)&&"object"!=typeof e&&"function"!=typeof e){if(t===Boolean||4===t)return"false"!==e&&(""===e||!!e);if(t===Number||8===t)return parseFloat(e);if(t===String||2===t)return e.toString()}return e}function w(t,e){t._.add(e),t.tt.has(e)||(t.tt.set(e,!0),t.et?t.queue.write(()=>g(t,e)):t.queue.tick(()=>g(t,e)))}async function g(t,e,n,o,i){if(t.tt.delete(e),!t.nt.has(e)){if(!(o=t.ot.get(e))){if((i=t.it.get(e))&&!i["s-rn"])return void(i["s-rc"]=i["s-rc"]||[]).push(()=>{g(t,e)});o=function r(t,e,n,o,i,c,f){try{o=new(i=t.s(e).ct),function s(t,e,n,o,i){t.rt.set(o,n),t.ft.has(n)||t.ft.set(n,{}),Object.entries(Object.assign({color:{type:String}},e.properties,{mode:{type:String}})).forEach(([e,c])=>{(function r(t,e,n,o,i,c,f,s){if(e.type||e.state){const r=t.ft.get(n);e.state||(!e.attr||void 0!==r[i]&&""!==r[i]||(f=c&&c.st)&&S(s=f[e.attr])&&(r[i]=h(e.type,s)),n.hasOwnProperty(i)&&(void 0===r[i]&&(r[i]=h(e.type,n[i])),"mode"!==i&&delete n[i])),o.hasOwnProperty(i)&&void 0===r[i]&&(r[i]=o[i]),e.watchCallbacks&&(r[q+i]=e.watchCallbacks.slice()),$(o,i,function l(e){return(e=t.ft.get(t.rt.get(this)))&&e[i]},function u(n,o){(o=t.rt.get(this))&&(e.state||e.mutable)&&M(t,o,i,n)})}})(t,c,n,o,e,i)})}(t,i,e,o,n)}catch(n){o={},t.lt(n,7,e,!0)}return t.ot.set(e,o),o}(t,e,t.ut.get(e))}(function f(t,e,n,o){try{const i=e.ct.host,r=e.ct.encapsulation,f="shadow"===r&&t.o.n;let s,l=n;if(!n["s-rn"]){t.at(t,t.o,e,n);const i=n["s-sc"];i&&(t.o.b(n,c(i,!0)),o.render||t.o.b(n,c(i)))}if(o.render||o.hostData||i||s){t.pt=!0;const e=o.render&&o.render();let i;t.pt=!1;const c=t.dt.get(n)||{};c.v=l;const s=v(null,i,e);t.dt.set(n,t.render(n,c,s,f,r))}n["s-rn"]=!0,n["s-rc"]&&(n["s-rc"].forEach(t=>t()),n["s-rc"]=null)}catch(e){t.pt=!1,t.lt(e,8,n,!0)}})(t,t.s(e),e,o),e["s-init"]()}}function M(t,e,n,o,i){let c=t.ft.get(e);c||t.ft.set(e,c={}),o!==c[n]&&(c[n]=o,t.ot.get(e)&&!t.pt&&e["s-rn"]&&w(t,e))}function $(t,e,n,o){Object.defineProperty(t,e,{configurable:!0,get:n,set:o})}function k(t,e,n,o,i,c){if(t._.delete(e),(i=t.it.get(e))&&((o=i["s-ld"])&&((n=o.indexOf(e))>-1&&o.splice(n,1),o.length||i["s-init"]&&i["s-init"]()),t.it.delete(e)),t.vt.length&&!t._.size)for(;c=t.vt.shift();)c()}function C(t,e,n,o){if(n.connectedCallback=function(){(function n(t,e,o){t.nt.delete(o),t.mt.has(o)||(t._.add(o),t.mt.set(o,!0),o["s-id"]||(o["s-id"]=t.bt()),function i(t,e,n){for(n=e;n=t.o.R(n);)if(t.C(n)){t.j.has(e)||(t.it.set(e,n),(n["s-ld"]=n["s-ld"]||[]).push(e));break}}(t,o),t.queue.tick(()=>{t.ut.set(o,function n(t,e,o,i,c){return o.mode||(o.mode=t.yt(o)),o["s-cr"]||t.P(o,x)||t.n&&1===e.e||(o["s-cr"]=t.g(""),o["s-cr"]["s-cn"]=!0,t.r(o,o["s-cr"],t.O(o)[0])),t.n||1!==e.e||(o.shadowRoot=o),i={ht:o["s-id"],st:{}},e.l&&Object.keys(e.l).forEach(n=>{(c=e.l[n].H)&&(i.st[c]=t.P(o,c))}),i}(t.o,e,o)),t.wt(e,o)}))})(t,e,this)},n.disconnectedCallback=function(){(function e(t,n){!t.W&&function o(t,e){for(;e;){if(!t.S(e))return 9!==t.D(e);e=t.S(e)}}(t.o,n)&&(t.nt.set(n,!0),k(t,n),p(t.dt.get(n),!0),t.o.d(n),t.gt.delete(n),[t.it,t.Mt,t.ut].forEach(t=>t.delete(n)))})(t,this)},n["s-init"]=function(){(function e(t,n,o,i,c,r){if((i=t.ot.get(n))&&!t.nt.has(n)&&(!n["s-ld"]||!n["s-ld"].length)){t.j.set(n,!0),(r=t.$t.has(n))||(t.$t.set(n,!0),n["s-ld"]=void 0,t.o.b(n,o));try{p(t.dt.get(n)),(c=t.Mt.get(n))&&(c.forEach(t=>t(n)),t.Mt.delete(n)),!r&&i.componentDidLoad&&i.componentDidLoad()}catch(e){t.lt(e,4,n)}k(t,n)}})(t,this,o)},n.forceUpdate=function(){w(t,this)},e.l){const o=Object.entries(e.l);{let t={};o.forEach(([e,{H:n}])=>{n&&(t[n]=e)}),t=Object.assign({},t),n.attributeChangedCallback=function(e,n,o){(function i(t,e,n,o){const i=t[A(n)];i&&(e[i]=o)})(t,this,e,o)}}(function i(t,e,n){e.forEach(([e,o])=>{const i=o.U;3&i?$(n,e,function n(){return(t.ft.get(this)||{})[e]},function n(i){M(t,this,e,h(o.Z,i))}):32===i&&function c(t,e,n){Object.defineProperty(t,e,{configurable:!0,value:n})}(n,e,R)})})(t,o,n)}}function j(t,e,n,o){return function(){const i=arguments;return function c(t,e,n){let o=e[n];const i=t.i.body;return i?(o||(o=i.querySelector(n)),o||(o=e[n]=t.k(n),t.x(i,o)),o.componentOnReady()):Promise.resolve()}(t,e,n).then(t=>t[o].apply(t,i))}}const x="ssrv",W="ssrc",O="$",E={},N={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},S=t=>null!=t,A=t=>t.toLowerCase(),R=()=>{},T="http://www.w3.org/1999/xlink";let L=!1;const D=[],P={forEach:(t,e)=>{t.forEach((t,n,o)=>e(m(t),n,o))},map:(t,e)=>t.map((t,n,o)=>(function i(t){return{vtag:t.vtag,vchildren:t.vchildren,vtext:t.vtext,vattrs:t.vattrs,vkey:t.vkey,vname:t.vname}})(e(m(t),n,o)))},q="wc-";(function B(t,e,n,o,i,c){function f(t,e){const o=t.t;n.customElements.get(o)||(C(g,s[o]=t,e.prototype,c),e.observedAttributes=Object.values(t.l).map(t=>t.H).filter(t=>!!t),n.customElements.define(t.t,e))}const s={html:{}},l={},u=n[t]=n[t]||{},p=function m(t,e,n){t.ael||(t.ael=((t,e,n,o)=>t.addEventListener(e,n,o)),t.rel=((t,e,n,o)=>t.removeEventListener(e,n,o)));const o=new WeakMap,i={i:n,n:!!n.documentElement.attachShadow,kt:!1,D:t=>t.nodeType,k:t=>n.createElement(t),M:(t,e)=>n.createElementNS(t,e),g:t=>n.createTextNode(t),Ct:t=>n.createComment(t),r:(t,e,n)=>t.insertBefore(e,n),N:t=>t.remove(),x:(t,e)=>t.appendChild(e),b:(t,e)=>{t.classList.add(e)},O:t=>t.childNodes,S:t=>t.parentNode,L:t=>t.nextSibling,I:t=>t.previousSibling,A:t=>A(t.nodeName),F:t=>t.textContent,T:(t,e)=>t.textContent=e,P:(t,e)=>t.getAttribute(e),jt:(t,e,n)=>t.setAttribute(e,n),xt:(t,e,n,o)=>t.setAttributeNS(e,n,o),u:(t,e)=>t.removeAttribute(e),a:(t,e)=>t.hasAttribute(e),yt:e=>e.getAttribute("mode")||(t.Context||{}).mode,Wt:(t,o)=>"child"===o?t.firstElementChild:"parent"===o?i.R(t):"body"===o?n.body:"document"===o?n:"window"===o?e:t,p:(e,n,c,r,f,s,l,u)=>{const a=n;let p=e,d=o.get(e);if(d&&d[a]&&d[a](),"string"==typeof s?p=i.Wt(e,s):"object"==typeof s?p=s:(u=n.split(":")).length>1&&(p=i.Wt(e,u[0]),n=u[1]),!p)return;let v=c;(u=n.split(".")).length>1&&(n=u[0],v=(t=>{t.keyCode===N[u[1]]&&c(t)})),l=i.kt?{capture:!!r,passive:!!f}:!!r,t.ael(p,n,v,l),d||o.set(e,d={}),d[a]=(()=>{p&&t.rel(p,n,v,l),d[a]=null})},d:(t,e)=>{const n=o.get(t);n&&(e?n[e]&&n[e]():Object.keys(n).forEach(t=>{n[t]&&n[t]()}))},Ot:(t,n,o)=>t&&t.dispatchEvent(new e.CustomEvent(n,o)),R:(t,e)=>(e=i.S(t))&&11===i.D(e)?e.host:e};return i}(u,n,o);e.isServer=e.isPrerender=!(e.isClient=!0),e.window=n,e.location=n.location,e.document=o,e.resourcesUrl=e.publicPath=i,u.h=v,u.Context=e;const y=n["s-defined"]=n["s-defined"]||{};let h=0;const g={o:p,Et:f,Nt:e.emit,s:t=>s[p.A(t)],St:t=>e[t],isClient:!0,C:t=>!(!y[p.A(t)]&&!g.s(t)),bt:()=>t+h++,lt:(t,e,n)=>void 0,At:t=>(function e(t,n,o){return{create:j(t,n,o,"create"),componentOnReady:j(t,n,o,"componentOnReady")}})(p,l,t),queue:e.queue=function M(t,e){function n(e){return n=>{e.push(n),d||(d=!0,t.raf(c))}}function o(t){for(let e=0;e<t.length;e++)try{t[e](r())}catch(t){}t.length=0}function i(t,e){let n,o=0;for(;o<t.length&&(n=r())<e;)try{t[o++](n)}catch(t){}o===t.length?t.length=0:0!==o&&t.splice(0,o)}function c(){p++,o(l);const e=r()+7*Math.ceil(p*(1/22));i(u,e),i(a,e),u.length>0&&(a.push(...u),u.length=0),(d=l.length+u.length+a.length>0)?t.raf(c):p=0}const r=()=>e.performance.now(),f=Promise.resolve(),s=[],l=[],u=[],a=[];let p=0,d=!1;return t.raf||(t.raf=e.requestAnimationFrame.bind(e)),{tick(t){s.push(t),1===s.length&&f.then(()=>o(s))},read:n(l),write:n(u)}}(u,n),wt:function $(t,e,n){if(t.ct)w(g,e);else{const n="string"==typeof t.z?t.z:t.z[e.mode];import(i+n+".entry.js").then(n=>{try{t.ct=n[(t=>A(t).split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""))(t.t)],function o(t,e,n,i,c){if(i){const n=e.t+(c||O);if(!e[n]){const o=t.k("template");e[n]=o,o.innerHTML=`<style>${i}</style>`,t.x(t.i.head,o)}}}(p,t,t.e,t.ct.style,t.ct.styleMode),w(g,e)}catch(e){t.ct=class{}}},t=>void 0)}},pt:!1,et:!1,W:!1,at:r,it:new WeakMap,c:new WeakMap,mt:new WeakMap,gt:new WeakMap,$t:new WeakMap,j:new WeakMap,rt:new WeakMap,ut:new WeakMap,ot:new WeakMap,nt:new WeakMap,tt:new WeakMap,Mt:new WeakMap,Rt:new WeakMap,dt:new WeakMap,ft:new WeakMap,_:new Set,vt:[]};u.onReady=(()=>new Promise(t=>g.queue.write(()=>g._.size?g.vt.push(t):t()))),g.render=a(g,p);const k=p.i.documentElement;k["s-ld"]=[],k["s-rn"]=!0,k["s-init"]=(()=>{g.j.set(k,u.loaded=g.et=!0),p.Ot(n,"appload",{detail:{namespace:t}})}),function W(t,e,n){const o=n.querySelectorAll(`[${x}]`),i=o.length;let c,r,f,s,l,u;if(i>0)for(t.j.set(n,!0),s=0;s<i;s++)for(c=o[s],r=e.P(c,x),(f={}).vtag=e.A(f.v=c),t.dt.set(c,f),l=0,u=c.childNodes.length;l<u;l++)d(e,c.childNodes[l],f,r,!0)}(g,p,k),(u.components||[]).map(b).forEach(t=>f(t,class extends HTMLElement{})),function E(t,e,n,o,i,c){if(e.componentOnReady=((e,n)=>{if(!e.nodeName.includes("-"))return n(null),!1;const o=t.s(e);if(o)if(t.j.has(e))n(e);else{const o=t.Mt.get(e)||[];o.push(n),t.Mt.set(e,o)}return!!o}),i){for(c=i.length-1;c>=0;c--)e.componentOnReady(i[c][0],i[c][1])&&i.splice(c,1);for(c=0;c<o.length;c++)if(!n[o[c]].componentOnReady)return;for(c=0;c<i.length;c++)i[c][1](null);i.length=0}}(g,u,n,n["s-apps"],n["s-cr"]),u.initialized=!0})(o,n,t,e,resourcesUrl,hydratedCssClass)})(window,document,Context,namespace);
})({},"DcSwiper","hydrated");
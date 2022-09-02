(function(){"use strict";var e={8770:function(e,t,n){var a=n(9242),r=(n(2166),n(6265)),o=n.n(r),i=n(6423),c=n(3396);function u(e,t){const n=(0,c.up)("router-view");return(0,c.wg)(),(0,c.j4)(n)}var s=n(89);const l={},g=(0,s.Z)(l,[["render",u]]);var d=g,f=n(2483);const p={class:"container"},h={class:"row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3"};function v(e,t,n,a,r,o){const i=(0,c.up)("Card"),u=(0,c.up)("Pagination");return(0,c.wg)(),(0,c.iD)("div",p,[(0,c._)("div",h,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(o.showData,((e,t)=>((0,c.wg)(),(0,c.iD)("div",{class:"col",key:t},[(0,c.Wm)(i,{item:e,index:t},null,8,["item","index"])])))),128))]),(0,c.Wm)(u,{totalPage:r.totalPage,eachPageData:r.eachPageData,currentPage:r.currentPage,onPreviousPage:o.previousPage,onNextPage:o.nextPage,onGoPage:o.goPage},null,8,["totalPage","eachPageData","currentPage","onPreviousPage","onNextPage","onGoPage"])])}var m=n(7139);const P={class:"card h-100"},b=["src"],w={class:"card-body"},y={class:"card-title"},D={class:"card-text"};function k(e,t,n,a,r,o){return(0,c.wg)(),(0,c.iD)("div",P,[(0,c._)("img",{src:n.item.Picture1,class:"card-img-top",alt:"..."},null,8,b),(0,c._)("div",w,[(0,c._)("h5",y,(0,m.zw)(n.item.Name),1),(0,c._)("p",D,(0,m.zw)(n.item.Add),1)])])}var x={props:["item","index"],data(){return{}}};const _=(0,s.Z)(x,[["render",k]]);var O=_;const j={"aria-label":"Page navigation example",class:"mt-5"},C={class:"pagination justify-content-center flex-wrap"},M=["onClick"];function E(e,t,n,r,o,i){return(0,c.wg)(),(0,c.iD)("nav",j,[(0,c._)("ul",C,[(0,c._)("li",{class:(0,m.C_)(["page-item",{disabled:0===n.currentPage}])},[(0,c._)("a",{class:"page-link",href:"#",onClick:t[0]||(t[0]=(0,a.iM)((t=>e.$emit("previous-page")),["prevent"]))},"Previous")],2),((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(n.eachPageData,((t,r)=>((0,c.wg)(),(0,c.iD)("li",{class:(0,m.C_)(["page-item",{active:n.currentPage==r}]),key:r},[(0,c._)("a",{class:"page-link",href:"#",onClick:(0,a.iM)((t=>e.$emit("go-page",r)),["prevent"])},(0,m.zw)(r+1),9,M)],2)))),128)),(0,c._)("li",{class:(0,m.C_)(["page-item",{disabled:n.currentPage===n.totalPage-1}])},[(0,c._)("a",{class:"page-link",href:"#",onClick:t[1]||(t[1]=(0,a.iM)((t=>e.$emit("next-page")),["prevent"]))},"Next")],2)])])}var N={props:["totalPage","eachPageData","currentPage"]};const T=(0,s.Z)(N,[["render",E]]);var S=T,A={name:"HomeView",components:{Card:O,Pagination:S},data(){return{apiUrl:"https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c",positionData:[],totalPage:0,eachPageData:[],currentPage:0}},methods:{getData(){this.axios.get(this.apiUrl).then((e=>{this.positionData=e.data.data.XML_Head.Infos.Info,this.pageNum()}))},pageNum(){this.totalPage=Math.ceil(this.positionData.length/30);for(let e=0;e<this.totalPage;e+=1){const t=this.positionData.slice(30*e,30*e+30);this.eachPageData.push(t)}},previousPage(){this.currentPage-=1},nextPage(){this.currentPage+=1},goPage(e){this.currentPage=e}},computed:{showData(){return this.eachPageData[this.currentPage]}},created(){this.getData()}};const Z=(0,s.Z)(A,[["render",v]]);var H=Z;const z=[{path:"/",name:"home",component:H},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,7381))}],G=(0,f.p7)({history:(0,f.r5)(),routes:z});var K=G;const L=(0,a.ri)(d);L.use(K),L.mount("#app"),L.use(i.Z,o())}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={id:a,loaded:!1,exports:{}};return e[a](o,o.exports,n),o.loaded=!0,o.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,a,r,o){if(!a){var i=1/0;for(l=0;l<e.length;l++){a=e[l][0],r=e[l][1],o=e[l][2];for(var c=!0,u=0;u<a.length;u++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[u])}))?a.splice(u--,1):(c=!1,o<i&&(i=o));if(c){e.splice(l--,1);var s=r();void 0!==s&&(t=s)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[a,r,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.c54b4489.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="tourist:";n.l=function(a,r,o,i){if(e[a])e[a].push(r);else{var c,u;if(void 0!==o)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var g=s[l];if(g.getAttribute("src")==a||g.getAttribute("data-webpack")==t+o){c=g;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+o),c.src=a),e[a]=[r];var d=function(t,n){c.onerror=c.onload=null,clearTimeout(f);var r=e[a];if(delete e[a],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/KaohsiungTouristAttractions/"}(),function(){var e={143:0};n.f.j=function(t,a){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else{var o=new Promise((function(n,a){r=e[t]=[n,a]}));a.push(r[2]=o);var i=n.p+n.u(t),c=new Error,u=function(a){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,r[1](c)}};n.l(i,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,o,i=a[0],c=a[1],u=a[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(u)var l=u(n)}for(t&&t(a);s<i.length;s++)o=i[s],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(l)},a=self["webpackChunktourist"]=self["webpackChunktourist"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(8770)}));a=n.O(a)})();
//# sourceMappingURL=app.3223ca67.js.map
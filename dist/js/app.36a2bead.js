(function(){"use strict";var t={1509:function(t,e,n){var r=n(6369),o=function(){var t=this,e=t._self._c;return e("v-app",[e("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[e("div",{staticClass:"d-flex align-center"},[e("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),e("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),e("v-spacer"),e("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[e("span",{staticClass:"mr-2"},[t._v("Latest Release")]),e("v-icon",[t._v("mdi-open-in-new")])],1)],1),e("v-main",[e("router-view")],1)],1)},i=[],s={name:"App",data:()=>({})},a=s,u=n(1001),c=(0,u.Z)(a,o,i,!1,null,null,null),l=c.exports,f=n(2631),h=function(){var t=this,e=t._self._c;return e("hello-world")},m=[],v=function(){var t=this,e=t._self._c;return e("v-container",[e("v-row",{staticClass:"text-center"},[e("v-col",{attrs:{cols:"12"}},[e("v-img",{staticClass:"my-3",attrs:{src:n(9574),contain:"",height:"200"}})],1),e("v-col",{staticClass:"mb-4"},[e("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),e("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),e("br"),t._v("please join our online "),e("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),e("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[e("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),e("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(n,r){return e("a",{key:r,staticClass:"subheading mx-3",attrs:{href:n.href,target:"_blank"}},[t._v(" "+t._s(n.text)+" ")])})),0)],1),e("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[e("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),e("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(n,r){return e("a",{key:r,staticClass:"subheading mx-3",attrs:{href:n.href,target:"_blank"}},[t._v(" "+t._s(n.text)+" ")])})),0)],1),e("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[e("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),e("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(n,r){return e("a",{key:r,staticClass:"subheading mx-3",attrs:{href:n.href,target:"_blank"}},[t._v(" "+t._s(n.text)+" ")])})),0)],1)],1)],1)},d=[],p={name:"HelloWorld",data:()=>({ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]})},y=p,g=(0,u.Z)(y,v,d,!1,null,null,null),b=g.exports,w={name:"Home",components:{HelloWorld:b}},_=w,x=(0,u.Z)(_,h,m,!1,null,null,null),j=x.exports;r["default"].use(f.ZP);const k=[{path:"/",name:"home",component:j},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,5399))}],C=new f.ZP({mode:"history",base:"/",routes:k});var O=C,P=n(3822);r["default"].use(P.ZP);var T=new P.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),E=n(707),A=n.n(E);n(8556);r["default"].use(A());var L=new(A())({});n(2742);r["default"].config.productionTip=!1,new r["default"]({router:O,store:T,vuetify:L,render:t=>t(l)}).$mount("#app")},9574:function(t,e,n){t.exports=n.p+"img/logo.4d6033c9.svg"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,i){if(!r){var s=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],i=t[l][2];for(var a=!0,u=0;u<r.length;u++)(!1&i||s>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(a=!1,i<s&&(s=i));if(a){t.splice(l--,1);var c=o();void 0!==c&&(e=c)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[r,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/about.ee88b8e2.js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="ggyoz-home:";n.l=function(r,o,i,s){if(t[r])t[r].push(o);else{var a,u;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+i){a=f;break}}a||(u=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",e+i),a.src=r),t[r]=[o];var h=function(e,n){a.onerror=a.onload=null,clearTimeout(m);var o=t[r];if(delete t[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(t){return t(n)})),e)return e(n)},m=setTimeout(h.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=h.bind(null,a.onerror),a.onload=h.bind(null,a.onload),u&&document.head.appendChild(a)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=i);var s=n.p+n.u(e),a=new Error,u=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;a.message="Loading chunk "+e+" failed.\n("+i+": "+s+")",a.name="ChunkLoadError",a.type=i,a.request=s,o[1](a)}};n.l(s,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,s=r[0],a=r[1],u=r[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(u)var l=u(n)}for(e&&e(r);c<s.length;c++)i=s[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},r=self["webpackChunkggyoz_home"]=self["webpackChunkggyoz_home"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(1509)}));r=n.O(r)})();
//# sourceMappingURL=app.36a2bead.js.map
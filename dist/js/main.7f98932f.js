(self["webpackChunkggyoz_home"]=self["webpackChunkggyoz_home"]||[]).push([[179],{6116:function(t,e,o){"use strict";var n=o(144),r=function(){var t=this,e=t._self._c;return e("v-app",[e("v-navigation-drawer",{attrs:{app:"",width:t.drawerWidth},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e("site-navi",{on:{close:t.toogleDrawer}})],1),e("v-app-bar",{attrs:{app:"",color:"primary",dark:"","hide-on-scroll":""}},[e("v-app-bar-nav-icon",{on:{click:t.toogleDrawer}}),e("site-title"),e("v-spacer"),e("site-user")],1),e("v-main",[e("router-view")],1),e("site-footer"),e("vue-progress-bar")],1)},i=[],s=function(){var t=this,e=t._self._c;return e("v-footer",{staticClass:"justify-center",attrs:{app:"",dark:"",absolute:""}},[t._v(" © "+t._s((new Date).getFullYear())+" "+t._s(t.footer)+" ")])},a=[],l=o(629),c={name:"SiteFooter",computed:{...(0,l.rn)({footer:t=>t.config.footer})}},u=c,p=o(1001),d=(0,p.Z)(u,s,a,!1,null,null,null),v=d.exports,f=function(){var t=this,e=t._self._c;return e("div",[t.isLg?t._e():e("v-app-bar",{attrs:{dark:"",color:"primary"}},[e("v-app-bar-title",[e("site-title")],1),e("v-spacer"),e("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$emit("close")}}},[e("v-icon",[t._v("mdi-close")])],1)],1),e("v-list",[e("nested-menu",{attrs:{items:t.items}})],1)],1)},h=[],m=function(){var t=this,e=t._self._c;return e("div",{style:{"padding-left":2*t.depth+"px"}},t._l(t.items,(function(o,n){return e("div",{key:`${n}${o.title}`},[o.subItems&&o.subItems.length>0?e("v-list-group",{attrs:{"no-action":"","prepend-icon":0===t.depth?o.icon:"","sub-group":t.depth>0,"append-icon":""},scopedSlots:t._u([{key:"activator",fn:function(){return[e("v-list-item-title",[t._v(t._s(o.title))]),e("v-btn",{attrs:{icon:"",plain:"",disabled:!o.to},on:{click:function(e){return e.stopPropagation(),t.goUrl(o)}}},[e("v-icon",[t._v("mdi-arrow-top-right")])],1),e("v-icon",{style:t.activeStyle(o.active)},[t._v("mdi-chevron-down")])]},proxy:!0}],null,!0),model:{value:o.active,callback:function(e){t.$set(o,"active",e)},expression:"item.active"}},[e("nested-menu",{attrs:{items:o.subItems,depth:t.depth+1}})],1):e("v-list-item",t._b({},"v-list-item",t.getLink(o),!1),[0===t.depth?e("v-list-item-icon",[e("v-icon",[t._v(t._s(o.icon))])],1):t._e(),e("v-list-item-title",{style:{"padding-left":1===t.depth?"16px":"0px"}},[e("div",[t._v(t._s(o.title))])])],1)],1)})),0)},b=[],g=(o(7658),{name:"NestedMenu",props:{items:{type:Array,required:!0},depth:{type:Number,default:0}},methods:{getLink(t){return t.newTab?{href:t.to,target:"_blank"}:{to:t.to}},activeStyle(t){return{transform:t?"rotate(180dep)":"rotate(360dep)"}},goUrl(t){t.newTab?window.open(t.to,"_blank"):t.to!=this.$route.path&&this.$router.push(t.to)}}}),_=g,y=(0,p.Z)(_,m,b,!1,null,null,null),k=y.exports,w=o(109),x=function(){var t=this,e=t._self._c;return e("v-btn",{staticClass:"px-0 text-none text-h6",attrs:{to:"/",text:"",plain:""}},[t._v(" "+t._s(t.title)+" ")])},T=[],$={name:"SiteTitle",computed:{...(0,l.rn)({title:t=>t.config.title})}},I=$,C=(0,p.Z)(I,x,T,!1,null,null,null),S=C.exports,A={components:{NestedMenu:k,SiteTitle:S},name:"SiteNavi",data(){return{items:[]}},computed:{...(0,l.rn)({menu:t=>t.config.menu}),isLg(){const{lg:t,xl:e}=this.$vuetify.breakpoint;return t||e}},created(){this.initMenu()},methods:{initMenu(){const t=(0,w.deepCopy)(this.menu);this.findActiveItem(t,null),this.items=t},findActiveItem(t,e){e&&(e.active=!1);for(const o of t)o.subItems&&o.subItems.length>0?this.findActiveItem(o.subItems,o):e&&this.$route.path.startsWith(o.to)&&(o.active=!0),e&&o.active&&(e.active=!0)}}},M=A,Z=(0,p.Z)(M,f,h,!1,null,null,null),j=Z.exports,P=function(){var t=this,e=t._self._c;return t.isLoading?e("v-progress-circular",{attrs:{indeterminate:""}}):e("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:o,attrs:n}){return[e("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",n,!1),o),[e("v-avatar",{attrs:{color:"accent",size:"32"}},[e("v-icon",[t._v("mdi-account")])],1)],1)]}}])},[e("v-card",[e("v-card-text",[e("v-switch",{attrs:{label:"Dark Theme","input-value":t.darkMode},on:{change:function(e){return t.setDarkMode(e)}}})],1),[e("v-card-actions",[e("v-btn",{attrs:{to:"/login",block:"",color:"primary"}},[t._v("로그인")])],1),e("v-card-actions",[e("v-btn",{attrs:{to:"/join",block:"",color:"secondary"}},[t._v("회원가입")])],1)]],2)],1)},N=[],O={name:"SiteUser",data(){return{isLoading:!1}},computed:{darkMode(){return this.$vuetify.theme.dark}},mounted(){this.getDarkMode()},methods:{setDarkMode(t){this.$vuetify.theme.dark=t,localStorage.setItem("darkMode",t?"dark":"light")},getDarkMode(){const t="dark"===localStorage.getItem("darkMode");this.$vuetify.theme.dark=t}}},D=O,E=(0,p.Z)(D,P,N,!1,null,null,null),L=E.exports,U={components:{SiteTitle:S,SiteFooter:v,SiteNavi:j,SiteUser:L},name:"App",data(){return{drawer:!1}},computed:{drawerWidth(){return this.$vuetify.breakpoint.xs?"100%":"300"}},methods:{toogleDrawer(){this.drawer=!this.drawer}}},B=U,R=(0,p.Z)(B,r,i,!1,null,null,null),F=R.exports,G=o(8345),z=function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("Toast Test")]),e("div",[e("ul",[e("v-btn",{on:{click:t.toastTest1}},[t._v("INFO")])],1),e("ul",[e("v-btn",{on:{click:t.toastTest2}},[t._v("SUCCESS")])],1),e("ul",[e("v-btn",{on:{click:t.toastTest3}},[t._v("ERROR")])],1),e("ul",[e("v-btn",{on:{click:t.toastTest4}},[t._v("WARNING")])],1),e("ul",[e("v-btn",{on:{click:t.toastTest5}},[t._v("전역 error")])],1)]),e("h1",[t._v("progressBar Test")]),e("div",[e("v-btn",{on:{click:t.barTest1}},[t._v("Start")]),e("v-btn",{on:{click:t.barTest2}},[t._v("End")]),e("v-btn",{on:{click:t.barTest3}},[t._v("fail")])],1),e("h1",[t._v("Notify Test")]),e("div",[e("v-btn",{on:{click:t.notifyTest1}},[t._v("Alert")]),e("v-btn",{on:{click:t.notifyTest2}},[t._v("Confirm")]),e("v-btn",{on:{click:t.notifyTest3}},[t._v("Prompt")])],1),e("h1",[t._v("Axios 테스트")]),e("div",[e("v-btn",{on:{click:t.axiosTest1}},[t._v("Test")]),e("v-btn",{on:{click:t.axiosTest2}},[t._v("Error")])],1)])},W=[],H=(o(1703),{name:"Home",data(){return{title:"My App"}},title(){return this.title},methods:{toastTest1(){this.$toast.info("hello Info")},toastTest2(){this.$toast.success("hello Info")},toastTest3(){this.$toast.error("hello Info")},toastTest4(){this.$toast.warning("hello Info")},toastTest5(){throw new Error("전역 에러!!")},barTest1(){this.$Progress.start()},barTest2(){this.$Progress.finish()},barTest3(){this.$Progress.fail()},async notifyTest1(){const t=await this.$notify.alert("테스트 내용입니다.","안내",{icon:"mdi-alert"});console.log(t)},async notifyTest2(){const t=await this.$notify.confirm("테스트 내용입니다.","");console.log(t)},async notifyTest3(){const t=await this.$notify.prompt("테스트 내용입니다.","프롬프트",{width:200});console.log(t)},async axiosTest1(){const t=await this.$axios.get("/api/member/test");console.log(t)},async axiosTest2(){const t=await this.$axios.get("/api/error");console.log(t)}}}),Y=H,q=(0,p.Z)(Y,z,W,!1,null,null,null),J=q.exports;const X=[{path:"/",name:"home",component:J},{path:"/about",name:"about",component:()=>o.e(443).then(o.bind(o,704))},{path:"/login",name:"NoAuthLogin",component:()=>o.e(443).then(o.bind(o,8468))},{path:"/join",name:"NoAuthJoin",component:()=>o.e(443).then(o.bind(o,5042))},{path:"*",name:"error",component:()=>o.e(41).then(o.bind(o,7729))}];var K=X;function Q(){const t=new G.ZP({mode:"history",base:"/",routes:K});return t}n["default"].use(G.ZP);var V=o(5931);function tt(){const t=new l.ZP.Store({state:{config:{title:"GGYOZ",footer:"GGYOZ all right reserved.",menu:[{title:"Home",icon:"mdi-home",to:"/",grant:0,newTab:!1,subItems:[{title:"Menu1",icon:"",to:"/menu1",grant:0,newTab:!0,subItems:[{title:"Menu1-1",icon:"",to:"/menu1-1",grant:0,newTab:!1,subItems:[]},{title:"Menu1-2",icon:"",to:"/menu1-2",grant:0,newTab:!1,subItems:[]}]},{title:"Menu2",icon:"",to:"/menu2",grant:0,newTab:!1,subItems:[]}]},{title:"About",icon:"mdi-help",to:"/about",grant:0,newTab:!1,subItems:[]}]}},mutations:{},actions:{},modules:V["default"]});return t}n["default"].use(l.ZP);var et=o(3678),ot=o(5464),nt=o.n(ot);o(8556);n["default"].use(nt());var rt=new(nt())({}),it=o(9669),st=o.n(it);let at={baseURL:"/",timeout:6e4,proxy:{host:"localhost",port:"4000"}};const lt=st().create(at);lt.interceptors.request.use((function(t){const{$Progress:e}=n["default"].prototype;return e&&e.start(),t}),(function(t){return Promise.reject(t)})),lt.interceptors.response.use((function(t){const{$Progress:e,$toast:o}=n["default"].prototype,{data:r,status:i}=t;let s="";return console.log("AJAX",t),200!=i&&(s="서버접속 실패"),r&&r.err&&(s=r.err),s?(o&&o.error(s),e&&e.fail(),console.warn(s),!1):(e&&e.finish(),r)}),(function(t){return Promise.reject(t)}));const ct={install:function(t,e){t.axios=lt,Object.defineProperties(t.prototype,{axios:{get(){return lt}},$axios:{get(){return lt}}})}};n["default"].use(ct);o(6981);function ut(t){const{title:e}=t.$options;if(e)return"function"===typeof e?e.call(t):e}const pt={mounted(){const t=ut(this);t&&(document.title=t)}};var dt=pt;function vt(t){const e=Q(),o=tt();(0,et.Z)(o,e),n["default"].mixin(dt);const r=new n["default"]({data:{url:t?t.url:""},router:e,store:o,vuetify:rt,render:t=>t(F)});return{app:r,router:e,store:o}}n["default"].config.productionTip=!1;var ft=o(1151);const ht={position:"bottom-right",timeout:3e3};n["default"].config.errorHandler=t=>{console.error(t),n["default"].$toast&&n["default"].$toast.error(t.message)},n["default"].use(ft.ZP,ht);var mt=o(5334),bt=o.n(mt);const gt={color:"rgb(143, 255, 199)",failedColor:"red",thickness:"3px"};n["default"].use(bt(),gt);var _t=function(){var t=this,e=t._self._c;return e("div",[e("notify-component",{ref:"notify",attrs:{opt:t.options}})],1)},yt=[],kt=function(){var t=this,e=t._self._c;return e("v-dialog",{attrs:{"max-width":t.options.width,persistent:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e("v-card",[t.title?e("v-toolbar",{attrs:{color:"primary",dark:""}},[e("v-toolbar-title",[t._v(t._s(t.title))])],1):t._e(),e("v-card-text",{staticClass:"pt-4"},[t.options.icon?e("v-icon",{staticClass:"mr-4",attrs:{large:"",color:t.options.iconColor}},[t._v(t._s(t.options.icon))]):t._e(),t._v(" "+t._s(t.content)+" "),"prompt"===t.options.type?e("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e("v-text-field",{attrs:{rules:[t=>!!t||"필수입력입니다."]},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1):t._e()],1),e("v-card-actions",{staticClass:"justify-end"},["alert"!==t.options.type?e("v-btn",{on:{click:t.cancelBtn}},[t._v("취소")]):t._e(),e("v-btn",{attrs:{color:"primary"},on:{click:t.okBtn}},[t._v("확인")])],1)],1)],1)},wt=[],xt={name:"notifyComponent",props:["opt"],data(){return{dialog:!1,title:"",content:"내용입니다.",text:"사용자 답변",valid:!0,options:this.opt,promise:null}},methods:{show(t,e,o){return new Promise(((n,r)=>{this.dialog&&this.close(),this.$nextTick((()=>{this.promise={resolve:n,reject:r},this.dialog=!0,this.title=e,this.options=o,this.content=t,this.text=o.text}))}))},close(t){this.promise.resolve(t),this.dialog=!1,this.promise=null,this.content="",this.title="",this.text="",this.valid=!0,this.options=this.opt},okBtn(){"prompt"===this.options.type?(this.$refs.form.validate(),this.$nextTick((()=>{this.valid&&this.close(this.text)}))):this.close(!0)},cancelBtn(){this.close(!1)}}},Tt=xt,$t=(0,p.Z)(Tt,kt,wt,!1,null,null,null),It=$t.exports,Ct={components:{notifyComponent:It},name:"notifyInterface",methods:{alert(t,e="",o={}){return this.$refs.notify.show(t,e,{...this.options,...o,type:"alert"})},confirm(t,e="",o={}){return this.$refs.notify.show(t,e,{...this.options,...o,type:"confirm"})},prompt(t,e="",o={}){return this.$refs.notify.show(t,e,{...this.options,...o,type:"prompt"})}}},St=Ct,At=(0,p.Z)(St,_t,yt,!1,null,null,null),Mt=At.exports;const Zt={width:400,icon:"",iconColor:"orange",type:"alert",text:""};var jt={install(t,e,o){const n=t.extend(Mt),r=new n({vuetify:e,data:{options:Object.assign(Zt,o)}});t.prototype.$nextTick((()=>{t.prototype.$notify=r.$mount(),document.getElementById("app").appendChild(r.$el)}))}};const Pt={iconColor:"red"};n["default"].use(jt,rt,Pt);const{app:Nt,router:Ot,store:Dt}=vt();window.__INITIAL_STATE__&&Dt.replaceState(window.__INITIAL_STATE__),Ot.onReady((()=>{Nt.$mount("#app")}))},5931:function(t,e,o){"use strict";o.r(e);var n=o(8929),r=o.n(n);const i=o(6372),s={};i.keys().forEach((t=>{if("./index.js"!==t){const e=r()(t.replace(/(\.\/|\.js)/g,""));s[e]={namespaced:!0,...i(t)}}})),e["default"]=s},9416:function(t,e,o){"use strict";o.r(e),o.d(e,{actions:function(){return a},getters:function(){return s},mutations:function(){return i},state:function(){return r}});var n=o(144);const r=()=>({member:null}),i={},s={},a={async duplicateCheck(t,{field:e,value:o}){const{$axios:r}=n["default"].prototype,i=await r.get(`/api/member/duplicateCheck/${e}/${o}`);return i}}},109:function(t){const e={deepCopy(t){if(null==t||"object"!==typeof t)return t;const o=Array.isArray(t)?[]:{};for(const n of Object.keys(t))o[n]=e.deepCopy(t[n]);return o},async modelCall(t,...e){try{const o=await t(...e);return o}catch(o){return console.trace(o),{err:o.message}}}};t.exports=e},6372:function(t,e,o){var n={"./index.js":5931,"./user.js":9416};function r(t){var e=i(t);return o(e)}function i(t){if(!o.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=i,t.exports=r,r.id=6372}},function(t){var e=function(e){return t(t.s=e)};t.O(0,[736],(function(){return e(6116)}));t.O()}]);
//# sourceMappingURL=main.7f98932f.js.map
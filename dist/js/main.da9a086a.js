"use strict";(self["webpackChunkggyoz_home"]=self["webpackChunkggyoz_home"]||[]).push([[179],{3962:function(t,o,e){var n=e(144),s=function(){var t=this,o=t._self._c;return o("v-app",[o("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[o("div",{staticClass:"d-flex align-center"},[o("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),o("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),o("v-spacer"),o("v-btn",{attrs:{to:"/"}},[t._v("HOME")]),o("v-btn",{attrs:{to:"/about"}},[t._v("about")])],1),o("v-main",[o("router-view")],1),o("vue-progress-bar")],1)},r=[],i={name:"App",data:()=>({}),beforeCreate(){console.log("App.vue * beforeCreate")},created(){console.log("App.vue * created",this.$ssrContext)},beforeMount(){console.log("App.vue * beforeMount")},mounted(){console.log("App.vue * mounted")},serverPrefetch(){return console.log("App.vue * serverPrefetch"),new Promise(((t,o)=>{console.log("App.vue * serverPrefetch Promise"),t()}))}},a=i,l=e(1001),c=(0,l.Z)(a,s,r,!1,null,null,null),u=c.exports,p=e(8345),v=function(){var t=this,o=t._self._c;return o("div",[o("h1",[t._v("Toast Test")]),o("div",[o("ul",[o("v-btn",{on:{click:t.toastTest1}},[t._v("INFO")])],1),o("ul",[o("v-btn",{on:{click:t.toastTest2}},[t._v("SUCCESS")])],1),o("ul",[o("v-btn",{on:{click:t.toastTest3}},[t._v("ERROR")])],1),o("ul",[o("v-btn",{on:{click:t.toastTest4}},[t._v("WARNING")])],1),o("ul",[o("v-btn",{on:{click:t.toastTest5}},[t._v("전역 error")])],1)]),o("h1",[t._v("progressBar Test")]),o("div",[o("v-btn",{on:{click:t.barTest1}},[t._v("Start")]),o("v-btn",{on:{click:t.barTest2}},[t._v("End")]),o("v-btn",{on:{click:t.barTest3}},[t._v("fail")])],1),o("h1",[t._v("Notify Test")]),o("div",[o("v-btn",{on:{click:t.notifyTest1}},[t._v("Alert")]),o("v-btn",{on:{click:t.notifyTest2}},[t._v("Confirm")]),o("v-btn",{on:{click:t.notifyTest3}},[t._v("Prompt")])],1)])},f=[],h=(e(1703),{name:"Home",data(){return{title:"My App"}},title(){return console.log("Home.vue * title-mixin"),this.title},beforeCreate(){console.log("Home.vue * beforeCreate")},created(){console.log("Home.vue * created",this.$ssrContext)},beforeMount(){console.log("Home.vue * beforeMount")},mounted(){console.log("Home.vue * mounted")},serverPrefetch(){return console.log("Home.vue * serverPrefetch"),new Promise(((t,o)=>{console.log("Home.vue * serverPrefetch Promise"),t()}))},methods:{toastTest1(){this.$toast.info("hello Info")},toastTest2(){this.$toast.success("hello Info")},toastTest3(){this.$toast.error("hello Info")},toastTest4(){this.$toast.warning("hello Info")},toastTest5(){throw new Error("전역 에러!!")},barTest1(){this.$Progress.start()},barTest2(){this.$Progress.finish()},barTest3(){this.$Progress.fail()},async notifyTest1(){const t=await this.$notify.alert("테스트 내용입니다.","안내",{icon:"mdi-alert"});console.log(t)},async notifyTest2(){const t=await this.$notify.confirm("테스트 내용입니다.","");console.log(t)},async notifyTest3(){const t=await this.$notify.prompt("테스트 내용입니다.","프롬프트",{width:200});console.log(t)}}}),d=h,m=(0,l.Z)(d,v,f,!1,null,null,null),g=m.exports;n["default"].use(p.ZP);const y=[{path:"/",name:"home",component:g},{path:"/about",name:"about",component:()=>e.e(443).then(e.bind(e,704))}];function b(){const t=new p.ZP({mode:"history",base:"/",routes:y});return t.beforeEach(((t,o,e)=>{console.log("router.js * beforeEach"),e()})),t.afterEach(((t,o)=>{console.log("router.js * afterEach")})),t}var _=e(629);function T(){const t=new _.ZP.Store({state:{},mutations:{},actions:{},modules:{}});return t}n["default"].use(_.ZP);var w=e(3678),k=e(5464),x=e.n(k);e(8556);n["default"].use(x());var $=new(x())({});e(6981);function C(t){const{title:o}=t.$options;if(o)return"function"===typeof o?o.call(t):o}const P={mounted(){const t=C(this);t&&(document.title=t)}};var A=P;function I(t){console.log("main.js * createApp");const o=b(),e=T();(0,w.Z)(e,o),n["default"].mixin(A);const s=new n["default"]({data:{url:t?t.url:""},router:o,store:e,vuetify:$,render:t=>t(u)});return{app:s,router:o,store:e}}n["default"].config.productionTip=!1;var E=e(1151);const H={position:"bottom-right",timeout:3e3};n["default"].config.errorHandler=t=>{console.error(t),n["default"].$toast&&n["default"].$toast.error(t.message)},n["default"].use(E.ZP,H);var Z=e(5334),j=e.n(Z);const S={color:"rgb(143, 255, 199)",failedColor:"red",thickness:"3px"};n["default"].use(j(),S);var N=function(){var t=this,o=t._self._c;return o("div",[o("notify-component",{ref:"notify",attrs:{opt:t.options}})],1)},B=[],M=function(){var t=this,o=t._self._c;return o("v-dialog",{attrs:{"max-width":t.options.width,persistent:""},model:{value:t.dialog,callback:function(o){t.dialog=o},expression:"dialog"}},[o("v-card",[t.title?o("v-toolbar",{attrs:{color:"primary",dark:""}},[o("v-toolbar-title",[t._v(t._s(t.title))])],1):t._e(),o("v-card-text",{staticClass:"pt-4"},[t.options.icon?o("v-icon",{staticClass:"mr-4",attrs:{large:"",color:t.options.iconColor}},[t._v(t._s(t.options.icon))]):t._e(),t._v(" "+t._s(t.content)+" "),"prompt"===t.options.type?o("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(o){t.valid=o},expression:"valid"}},[o("v-text-field",{attrs:{rules:[t=>!!t||"필수입력입니다."]},model:{value:t.text,callback:function(o){t.text=o},expression:"text"}})],1):t._e()],1),o("v-card-actions",{staticClass:"justify-end"},["alert"!==t.options.type?o("v-btn",{on:{click:t.cancelBtn}},[t._v("취소")]):t._e(),o("v-btn",{attrs:{color:"primary"},on:{click:t.okBtn}},[t._v("확인")])],1)],1)],1)},O=[],R={name:"notifyComponent",props:["opt"],data(){return{dialog:!1,title:"",content:"내용입니다.",text:"사용자 답변",valid:!0,options:this.opt,promise:null}},methods:{show(t,o,e){return new Promise(((n,s)=>{this.dialog&&this.close(),this.$nextTick((()=>{this.promise={resolve:n,reject:s},this.dialog=!0,this.title=o,this.options=e,this.content=t,this.text=e.text}))}))},close(t){this.promise.resolve(t),this.dialog=!1,this.promise=null,this.content="",this.title="",this.text="",this.valid=!0,this.options=this.opt},okBtn(){"prompt"===this.options.type?(this.$refs.form.validate(),this.$nextTick((()=>{this.valid&&this.close(this.text)}))):this.close(!0)},cancelBtn(){this.close(!1)}}},z=R,L=(0,l.Z)(z,M,O,!1,null,null,null),V=L.exports,F={components:{notifyComponent:V},name:"notifyInterface",data(){return{options:{width:400,icon:"",iconColor:"orange",type:"alert"}}},methods:{alert(t,o="",e={}){return this.$refs.notify.show(t,o,{...this.options,...e,type:"alert"})},confirm(t,o="",e={}){return this.$refs.notify.show(t,o,{...this.options,...e,type:"confirm"})},prompt(t,o="",e={}){return this.$refs.notify.show(t,o,{...this.options,...e,type:"prompt"})}}},G=F,U=(0,l.Z)(G,N,B,!1,null,null,null),W=U.exports;const q={width:400,icon:"",iconColor:"orange",type:"alert",text:""};var D={install(t,o,e){const n=t.extend(W),s=new n({vuetify:o,data:{options:Object.assign(q,e)}});t.prototype.$nextTick((()=>{t.prototype.$notify=s.$mount(),document.getElementById("app").appendChild(s.$el)}))}};const J={iconColor:"red"};n["default"].use(D,$,J);const{app:K,router:Q,store:X}=I();window.__INITIAL_STATE__&&X.replaceState(window.__INITIAL_STATE__),Q.onReady((()=>{console.log("entry-client.js * onReady"),K.$mount("#app")}))}},function(t){var o=function(o){return t(t.s=o)};t.O(0,[736],(function(){return o(3962)}));t.O()}]);
//# sourceMappingURL=main.da9a086a.js.map
webpackJsonp([1],{"+OGh":function(t,e){},0:function(t,e){},EvkI:function(t,e){},"Jks+":function(t,e,s){t.exports=s.p+"static/img/photo.40fb214.jpg"},NHnr:function(t,e,s){"use strict";function n(t){s("hOP7")}function a(t){s("+OGh")}function i(t){s("EvkI")}function o(t){s("tg7W")}Object.defineProperty(e,"__esModule",{value:!0});var r=s("7+uW"),l={name:"app",mounted:function(){var t=this;window.socketObj=s("DmT9")("//smartfox.vip:3800/"),window.socketObj.on("connect",function(t,e,s){}),window.socketObj.on("notify",function(e){switch(e.type){case"sysm":t.$notify.info({title:"系统提醒:",message:e.msg});break;case"userMsg":t.$notify.info({title:"来自"+e.name+"的消息:",message:e.msg})}}),window.socketObj.on("allUsers",function(e){console.log("收到所有用户信息"),console.log(e),t.$store.dispatch("snyUserData",e.users)}),window.socketObj.on("sendMsgList",function(e){console.log("收到消息列表"),console.log(e),t.$store.dispatch("snyMsgListData",e)}),window.socketObj.on("disconnect",function(){})}},c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("transition",{attrs:{"enter-active-class":"animated","enter-to-class":"fadeInUp","leave-active-class":"animated","leave-to-class":"fadeOutDown"}},[s("router-view")],1)],1)},u=[],p={render:c,staticRenderFns:u},m=p,d=s("VU/8"),f=n,v=d(l,m,!1,f,null,null),g=v.exports,b=s("/ocq"),h=s("Dd8w"),w=s.n(h),_=s("7t+N"),k=s.n(_),x=s("NYxO"),D={name:"Login",data:function(){return{loginForm:{name:""},users:[]}},computed:w()({},Object(x.b)(["getUserData"])),methods:{onSubmit:function(){var t=this;k.a.ajax({type:"post",url:"/login",data:{userName:t.loginForm.name},dataType:"json",success:function(e){e&&0==e.code?(t.$message({showClose:!0,message:"登陆成功!",type:"success"}),t.$router.push({path:"/window"}),t.$store.dispatch("setUserToken",e.result.token)):t.$message({showClose:!0,message:e.msg,type:"error"})}})}},mounted:function(){this.$store.dispatch("getUserData")}},y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login-wrap"},[s("div",{staticClass:"login-inner"},[s("el-form",{ref:"login-form",attrs:{model:t.loginForm,"label-position":"left","label-width":"40px",size:"mini"}},[s("h2",{staticClass:"login-title"},[t._v("登陆")]),t._v(" "),s("el-form-item",{attrs:{label:"姓名"}},[s("el-select",{attrs:{placeholder:"请选择"},model:{value:t.loginForm.name,callback:function(e){t.$set(t.loginForm,"name",e)},expression:"loginForm.name"}},t._l(t.getUserData,function(t,e){return s("el-option",{key:e,attrs:{label:t.name,value:t.name}})}))],1),t._v(" "),s("el-row",[s("el-col",{staticClass:"ac",attrs:{span:24}},[s("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.onSubmit}},[t._v("登陆")])],1)],1)],1)],1)])},T=[],S={render:y,staticRenderFns:T},C=S,j=s("VU/8"),U=a,E=j(D,C,!1,U,null,null),A=E.exports,L={name:"Sinup",data:function(){return{signForm:{name:"",password:"",inviteCode:""}}},methods:{_ok:function(){this.$message({showClose:!0,message:"注册成功, 请登陆!",type:"success"}),this.$router.push({path:"/login"})}}},F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sign-wrap"},[s("div",{staticClass:"login-inner"},[s("el-form",{ref:"login-form",attrs:{model:t.signForm,"label-position":"right","label-width":"60px",size:"mini"}},[s("h2",{staticClass:"login-title"},[t._v("注册")]),t._v(" "),s("el-form-item",{attrs:{label:"真实姓名"}},[s("el-input",{attrs:{placeholder:"真实姓名"},model:{value:t.signForm.name,callback:function(e){t.$set(t.signForm,"name",e)},expression:"signForm.name"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"密码"}},[s("el-input",{attrs:{type:"password",placeholder:"密码"},model:{value:t.signForm.password,callback:function(e){t.$set(t.signForm,"password",e)},expression:"signForm.password"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"确认密码"}},[s("el-input",{attrs:{type:"password",placeholder:"确认密码"},model:{value:t.signForm.password,callback:function(e){t.$set(t.signForm,"password",e)},expression:"signForm.password"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"邀请码"}},[s("el-input",{attrs:{type:"text",placeholder:"邀请码"},model:{value:t.signForm.inviteCode,callback:function(e){t.$set(t.signForm,"inviteCode",e)},expression:"signForm.inviteCode"}})],1),t._v(" "),s("el-row",{staticClass:"mt30"},[s("el-col",{staticClass:"ac",attrs:{span:24}},[s("el-button",{staticClass:"sign-btn",attrs:{type:"primary",size:"mini"},on:{click:t._ok}},[t._v("确认")])],1)],1)],1)],1)])},O=[],$={render:F,staticRenderFns:O},R=$,N=s("VU/8"),M=i,z=N(L,R,!1,M,null,null),I=z.exports,G={name:"Window",data:function(){return{enterData:"",showMsg:!1,allUsers:[],socket:null,sayto:"",jiaban:!1,exportShow:!1,textareaExport:"",jiabanListData:"",exporting:!1}},computed:w()({},Object(x.b)(["getUserData","getUserToken","getMsgList"])),filters:{contentTrans:function(t){return t||"待输入..."},jiabanTrans:function(t){return t?"(加班)":""}},methods:{exportSubmit:function(){var t=this;this.exporting=!0,this.textareaExport="",this.jiabanListData="",k.a.ajax({type:"get",url:"/getDataList",data:{},dataType:"json",success:function(e){if(e&&0==e.code)for(var s in e.result)t.textareaExport+=e.result[s].name+"\n"+e.result[s].content+"\n\n",e.result[s].jiaban&&(t.jiabanListData+=e.result[s].name+"、");t.exporting=!1,t.exportShow=!0}})},_notify:function(){window.socketObj.emit("daka",{token:this.getUserToken})},_quike:function(){window.socketObj.emit("quike",{token:this.getUserToken})},_synDataToLoal:function(t){this.allUsers.splice(0,this.allUsers.length);for(var e=0;e<t.length;e++)this.allUsers.push(t[e]);this._enterDataInit(t)},_enterDataInit:function(t){for(var e=0;e<t.length;e++)t[e].token==window.userToken&&(this.enterData=t[e].content)},_sendEnterData:function(){window.socketObj.emit("sendEnterData",{content:this.enterData,token:this.getUserToken})},_send:function(){""!=this.sayto&&window.socketObj.emit("userSayMsg",{token:this.getUserToken,msg:this.sayto})},_jiabanSwitch:function(){window.socketObj.emit("jiaban",{token:this.getUserToken,jiaban:this.jiaban})}},mounted:function(){var t=this;if(!this.getUserToken)return t.$router.replace("/login");window.socketObj.emit("getAllUsers",{token:this.getUserToken})},watch:{enterData:"_sendEnterData",jiaban:"_jiabanSwitch"}},Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"window-wrap"},[n("div",{staticClass:"enter"},[n("div",{staticClass:"enter-inner p10"},[n("h2",{staticClass:"enter-title pb10"},[t._v("请在此输入你的早会内容:")]),t._v(" "),n("el-input",{attrs:{type:"textarea",rows:7,resize:"none"},model:{value:t.enterData,callback:function(e){t.enterData=e},expression:"enterData"}}),t._v(" "),n("div",{staticClass:"mt10"},[n("el-switch",{staticClass:"jiaban",attrs:{"active-color":"#13ce66","active-text":"加班","inactive-text":"不加班","inactive-color":"#ccc"},model:{value:t.jiaban,callback:function(e){t.jiaban=e},expression:"jiaban"}})],1)],1),t._v(" "),n("div",{staticClass:"bq-wrap"},[n("h2",{staticClass:"enter-title pb10"},[t._v("在线的小伙伴们:")]),t._v(" "),n("ul",t._l(t.getUserData,function(e,a){return e.isLogin?n("li",{key:a},[n("el-tooltip",{staticClass:"item",attrs:{value:t.showMsg,manual:!0,effect:"dark",content:"Top Left 提示文字",placement:"top"}},[n("div",{staticClass:"inner"},[n("div",{staticClass:"img-wrap"},[n("img",{attrs:{src:s("Jks+")}})]),t._v(" "),n("p",{staticClass:"user-name"},[t._v(t._s(e.name))])])])],1):t._e()}))])]),t._v(" "),n("div",{staticClass:"output"},[n("div",{staticClass:"output-inner"},[n("div",{staticClass:"msg-scroll"},t._l(t.getMsgList,function(e,a){return n("el-row",{key:a},[n("el-col",{attrs:{span:24}},[n("div",{staticClass:"msg-item"},[n("img",{staticClass:"user-photo",attrs:{src:s("Jks+")}}),t._v(" "),n("div",[n("p",{staticClass:"user-name"},[t._v(t._s(e.name)+t._s(t._f("jiabanTrans")(e.jiaban)))]),t._v(" "),n("pre",{staticClass:"user-msg"},[t._v(t._s(t._f("contentTrans")(e.content)))])])])])],1)}))]),t._v(" "),n("div",{staticClass:"btns-wrap"},[n("div",{staticClass:"say-wrap"},[n("el-input",{attrs:{placeholder:"对大家说点什么",size:"mini"},model:{value:t.sayto,callback:function(e){t.sayto=e},expression:"sayto"}}),t._v(" "),n("el-button",{staticClass:"export-btn fr",attrs:{type:"primary",icon:"el-icon-printer",size:"mini"},on:{click:t._send}},[t._v("发送")])],1),t._v(" "),n("div",{staticClass:"smart-wrap"},[n("el-button",{staticClass:"export-btn fr",attrs:{type:"primary",icon:"el-icon-printer",size:"mini",loading:t.exporting},on:{click:t.exportSubmit}},[t._v("导出早会列表")]),t._v(" "),n("el-button",{staticClass:"export-btn fr mr10",attrs:{type:"primary",size:"mini",icon:"el-icon-bell"},on:{click:t._notify}},[t._v("提醒打卡")]),t._v(" "),n("el-button",{staticClass:"export-btn fr",attrs:{type:"primary",size:"mini",icon:"el-icon-bell"},on:{click:t._quike}},[t._v("催一下")])],1)])]),t._v(" "),n("el-dialog",{attrs:{title:"导出",visible:t.exportShow,width:"60%",center:""},on:{"update:visible":function(e){t.exportShow=e}}},[n("div",{staticClass:"mb15"},[n("p",[t._v("早会列表:")]),t._v(" "),n("el-input",{attrs:{type:"textarea",rows:6,resize:"none"},model:{value:t.textareaExport,callback:function(e){t.textareaExport=e},expression:"textareaExport"}})],1),t._v(" "),n("div",[n("p",[t._v("加班人员:")]),t._v(" "),n("el-input",{attrs:{type:"textarea",rows:1,resize:"none"},model:{value:t.jiabanListData,callback:function(e){t.jiabanListData=e},expression:"jiabanListData"}})],1)])],1)},q=[],W={render:Y,staticRenderFns:q},J=W,K=s("VU/8"),V=o,P=K(G,J,!1,V,null,null),H=P.exports;r.default.use(b.a);var B,Q=new b.a({routes:[{path:"/",redirect:"/login"},{path:"/login",name:"Login",component:A},{path:"/sinup",name:"Sinup",component:I},{path:"/window",name:"Window",component:H}]}),X=s("zL8q"),Z=s.n(X),tt={SNY_USERDATA:"SNY_USERDATA",GET_USERDATA:"GET_USERDATA",SETUSERTOKEN:"SETUSERTOKEN",SNYMSGLISTDATA:"SNYMSGLISTDATA"},et=tt,st={snyUserData:function(t,e){var s=t.commit;t.state;s(et.SNY_USERDATA,{userData:e})},snyMsgListData:function(t,e){var s=t.commit;t.state;s(et.SNYMSGLISTDATA,{msgList:e})},getUserData:function(t,e){var s=t.commit;t.state;k.a.ajax({type:"get",url:"/users",data:{},dataType:"json",success:function(t){t&&0==t.code&&s(et.GET_USERDATA,{userData:t.result.users})}})},setUserToken:function(t,e){var s=t.commit;t.state;s(et.SETUSERTOKEN,{token:e})}},nt=st,at=function(t){return t.usersData},it=function(t){return t.token},ot=function(t){return t.msgList},rt={getUserData:at,getUserToken:it,getMsgList:ot},lt=s("bOdI"),ct=s.n(lt),ut=(s("pFYg"),window.navigator.userAgent),pt=(ut.match(/Firefox/i),ut.match(/IEMobile/i),B={},ct()(B,et.SNY_USERDATA,function(t,e){var s=e.userData;t.usersData=s}),ct()(B,et.GET_USERDATA,function(t,e){var s=e.userData;t.usersData=s}),ct()(B,et.SETUSERTOKEN,function(t,e){var s=e.token;t.token=s}),ct()(B,et.SNYMSGLISTDATA,function(t,e){var s=e.msgList;t.msgList=s}),B);r.default.use(x.a);var mt={usersData:[],token:"",msgList:{}},dt=new x.a.Store({state:mt,actions:nt,getters:rt,mutations:pt,modules:{},strict:!1});s("tvR6");r.default.config.productionTip=!1,r.default.use(Z.a),new r.default({el:"#app",store:dt,router:Q,template:"<App/>",components:{App:g}})},hOP7:function(t,e){},tg7W:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.172a74c486c246f482a0.js.map
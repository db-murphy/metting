webpackJsonp([1],{0:function(t,e){},"2GeU":function(t,e,n){t.exports=n.p+"static/img/12.1d9319d.jpg"},"8hC4":function(t,e,n){t.exports=n.p+"static/img/18.40fb214.jpg"},A4uV:function(t,e,n){t.exports=n.p+"static/img/5.855e59f.jpg"},ApBm:function(t,e,n){t.exports=n.p+"static/img/6.982be4d.jpg"},EvkI:function(t,e){},F8FV:function(t,e,n){t.exports=n.p+"static/img/16.3c7c54b.jpg"},LuyX:function(t,e,n){t.exports=n.p+"static/img/9.abe9f10.jpg"},N7MP:function(t,e,n){t.exports=n.p+"static/img/2.53608f1.jpg"},NHnr:function(t,e,n){"use strict";function s(t){n("p1iT")}function a(t){n("TTHA")}function i(t){n("EvkI")}function o(t){n("qWyb")}function r(t,e){return parseInt(Math.random()*(e-t)+t)}Object.defineProperty(e,"__esModule",{value:!0});var c=n("7+uW"),l={name:"app",mounted:function(){var t=this;window.socketObj=n("DmT9")("//39.104.28.70:3800/"),window.socketObj.on("connect",function(t,e,n){}),window.socketObj.on("notify",function(e){switch(e.type){case"sysm":t.$notify.info({title:"系统提醒:",message:e.msg,customClass:"notify-txt"});break;case"userMsg":t.$notify.info({title:"来自 "+e.name+" 的消息:",message:e.msg,customClass:"notify-txt"})}}),window.socketObj.on("allUsers",function(e){console.log("收到所有用户信息"),console.log(e),t.$store.dispatch("snyUserData",e.users)}),window.socketObj.on("sendMsgList",function(e){console.log("收到消息列表"),console.log(e),t.$store.dispatch("snyMsgListData",e)}),window.socketObj.on("disconnect",function(){})}},u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{"enter-active-class":"animated","enter-to-class":"fadeInUp","leave-active-class":"animated","leave-to-class":"fadeOutDown"}},[n("router-view")],1)],1)},p=[],m={render:u,staticRenderFns:p},g=m,d=n("VU/8"),f=s,v=d(l,g,!1,f,null,null),b=v.exports,h=n("/ocq"),w=n("Dd8w"),_=n.n(w),j=n("7t+N"),x=n.n(j),k=n("NYxO"),T={name:"Login",data:function(){return{loginForm:{name:""},users:[]}},computed:_()({},Object(k.b)(["getUserData","getUserToken"])),methods:{onSubmit:function(){var t=this;x.a.ajax({type:"post",url:"/login",data:{userName:t.loginForm.name},dataType:"json",success:function(e){e&&0==e.code?(t.$message({showClose:!0,message:"登陆成功!",type:"success"}),t.$router.replace("/window"),t.$store.dispatch("setUserToken",e.result.token)):t.$message({showClose:!0,message:e.msg,type:"error"})}})}},mounted:function(){this.$store.dispatch("getUserData")}},D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-wrap"},[n("div",{staticClass:"login-inner"},[n("el-form",{ref:"login-form",attrs:{model:t.loginForm,"label-position":"left","label-width":"40px",size:"mini"}},[n("h2",{staticClass:"login-title"},[t._v("登陆")]),t._v(" "),n("el-form-item",{attrs:{label:"姓名"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:t.loginForm.name,callback:function(e){t.$set(t.loginForm,"name",e)},expression:"loginForm.name"}},t._l(t.getUserData,function(t,e){return n("el-option",{key:e,attrs:{label:t.name,value:t.name}})}))],1),t._v(" "),n("el-row",[n("el-col",{staticClass:"ac",attrs:{span:24}},[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.onSubmit}},[t._v("登陆")])],1)],1)],1)],1)])},y=[],U={render:D,staticRenderFns:y},C=U,S=n("VU/8"),E=a,A=S(T,C,!1,E,null,null),F=A.exports,L={name:"Sinup",data:function(){return{signForm:{name:"",password:"",inviteCode:""}}},methods:{_ok:function(){this.$message({showClose:!0,message:"注册成功, 请登陆!",type:"success"}),this.$router.push({path:"/login"})}}},M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sign-wrap"},[n("div",{staticClass:"login-inner"},[n("el-form",{ref:"login-form",attrs:{model:t.signForm,"label-position":"right","label-width":"60px",size:"mini"}},[n("h2",{staticClass:"login-title"},[t._v("注册")]),t._v(" "),n("el-form-item",{attrs:{label:"真实姓名"}},[n("el-input",{attrs:{placeholder:"真实姓名"},model:{value:t.signForm.name,callback:function(e){t.$set(t.signForm,"name",e)},expression:"signForm.name"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"密码"}},[n("el-input",{attrs:{type:"password",placeholder:"密码"},model:{value:t.signForm.password,callback:function(e){t.$set(t.signForm,"password",e)},expression:"signForm.password"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"确认密码"}},[n("el-input",{attrs:{type:"password",placeholder:"确认密码"},model:{value:t.signForm.password,callback:function(e){t.$set(t.signForm,"password",e)},expression:"signForm.password"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"邀请码"}},[n("el-input",{attrs:{type:"text",placeholder:"邀请码"},model:{value:t.signForm.inviteCode,callback:function(e){t.$set(t.signForm,"inviteCode",e)},expression:"signForm.inviteCode"}})],1),t._v(" "),n("el-row",{staticClass:"mt30"},[n("el-col",{staticClass:"ac",attrs:{span:24}},[n("el-button",{staticClass:"sign-btn",attrs:{type:"primary",size:"mini"},on:{click:t._ok}},[t._v("确认")])],1)],1)],1)],1)])},O=[],$={render:M,staticRenderFns:O},z=$,N=n("VU/8"),R=i,I=N(L,z,!1,R,null,null),W=I.exports,G={name:"Window",data:function(){return{enterData:"",showMsg:!1,allUsers:[],socket:null,sayto:"",jiaban:!1,exportShow:!1,textareaExport:"",jiabanListData:"",exporting:!1}},computed:_()({},Object(k.b)(["getUserData","getUserToken","getMsgList","getT"])),filters:{contentTrans:function(t){return t||"等待输入..."},jiabanTrans:function(t){return t?"(加班)":""},dateTrans:function(t){var e=new Date(t);return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()}},methods:{exportSubmit:function(){var t=this;this.exporting=!0,this.textareaExport="",this.jiabanListData="",x.a.ajax({type:"get",url:"/getDataList",data:{},dataType:"json",success:function(e){var n=new Date;if(e&&0==e.code)for(var s in e.result)t._dateToStr(e.result[s].date)!=t._dateToStr(n.getTime())?t.textareaExport+=e.result[s].name+"(内容过期)\n"+e.result[s].content+"\n\n":t.textareaExport+=e.result[s].name+"\n"+e.result[s].content+"\n\n",e.result[s].jiaban&&(t.jiabanListData+=e.result[s].name+"、");t.exporting=!1,t.exportShow=!0}})},_dateToStr:function(t){var e=new Date(t);return e.getFullYear()+"/"+e.getMonth()+"/"+e.getDate()},_notify:function(){window.socketObj.emit("daka",{token:this.getUserToken})},_quike:function(){window.socketObj.emit("quike",{token:this.getUserToken})},_synDataToLoal:function(t){this.allUsers.splice(0,this.allUsers.length);for(var e=0;e<t.length;e++)this.allUsers.push(t[e]);this._enterDataInit(t)},_enterDataInit:function(t){for(var e=0;e<t.length;e++)t[e].token==window.userToken&&(this.enterData=t[e].content)},_sendEnterData:function(){window.socketObj.emit("sendEnterData",{content:this.enterData,token:this.getUserToken})},_send:function(){""!=this.sayto&&(window.socketObj.emit("userSayMsg",{token:this.getUserToken,msg:this.sayto}),this.sayto="")},_jiabanSwitch:function(){window.socketObj.emit("jiaban",{token:this.getUserToken,jiaban:this.jiaban})},_setEnterData:function(){this.enterData=this.getMsgList[this.getUserToken].content,this.jiaban=this.getMsgList[this.getUserToken].jiaban}},mounted:function(){var t=this;if(!this.getUserToken)return t.$router.replace("/login");window.socketObj.emit("getAllUsers",{token:this.getUserToken}),x.a.ajax({type:"post",url:"/getUserContent",data:{token:t.getUserToken},dataType:"json",success:function(e){t.enterData=e.result.con}})},watch:{enterData:"_sendEnterData",jiaban:"_jiabanSwitch"}},V=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"window-wrap"},[s("div",{staticClass:"enter"},[s("div",{staticClass:"enter-inner p10"},[s("h2",{staticClass:"enter-title pb10"},[t._v("请在此输入你的早会内容:")]),t._v(" "),s("el-input",{attrs:{type:"textarea",rows:7,placeholder:"输入你的早会内容...",resize:"none"},model:{value:t.enterData,callback:function(e){t.enterData=e},expression:"enterData"}}),t._v(" "),s("div",{staticClass:"mt10"},[s("el-switch",{staticClass:"jiaban",attrs:{"active-color":"#13ce66","active-text":"加班","inactive-text":"不加班","inactive-color":"#ccc"},model:{value:t.jiaban,callback:function(e){t.jiaban=e},expression:"jiaban"}})],1)],1),t._v(" "),s("div",{staticClass:"bq-wrap"},[s("h2",{staticClass:"enter-title pb10"},[t._v("在线的小伙伴们:")]),t._v(" "),s("ul",t._l(t.getUserData,function(e,a){return e.isLogin?s("li",{key:a},[s("el-tooltip",{staticClass:"item",attrs:{value:t.showMsg,manual:!0,effect:"dark",content:"Top Left 提示文字",placement:"top"}},[s("div",{staticClass:"inner"},[s("div",{staticClass:"img-wrap"},[s("img",{attrs:{src:n("nloW")("./"+t.getT[e.token])}})]),t._v(" "),s("p",{staticClass:"user-name"},[t._v(t._s(e.name))])])])],1):t._e()}))])]),t._v(" "),s("div",{staticClass:"output"},[s("div",{staticClass:"output-inner"},[s("div",{staticClass:"msg-scroll"},t._l(t.getMsgList,function(e,a){return s("el-row",{key:a},[s("el-col",{attrs:{span:24}},[s("div",{staticClass:"msg-item"},[s("img",{staticClass:"user-photo",attrs:{src:n("nloW")("./"+t.getT[a])}}),t._v(" "),s("div",[s("p",{staticClass:"user-name"},[t._v(t._s(e.name)+t._s(t._f("jiabanTrans")(e.jiaban))),s("span",{staticClass:"msg-date"},[t._v(t._s(t._f("dateTrans")(e.date)))])]),t._v(" "),s("pre",{staticClass:"user-msg"},[t._v(t._s(t._f("contentTrans")(e.content)))])])])])],1)}))]),t._v(" "),s("div",{staticClass:"btns-wrap"},[s("div",{staticClass:"say-wrap"},[s("el-input",{attrs:{placeholder:"对大家说点什么",size:"mini"},model:{value:t.sayto,callback:function(e){t.sayto=e},expression:"sayto"}}),t._v(" "),s("el-button",{staticClass:"export-btn fr",attrs:{type:"primary",icon:"el-icon-printer",size:"mini"},on:{click:t._send}},[t._v("发送")])],1),t._v(" "),s("div",{staticClass:"smart-wrap"},[s("el-button",{staticClass:"export-btn fr",attrs:{type:"primary",icon:"el-icon-printer",size:"mini",loading:t.exporting},on:{click:t.exportSubmit}},[t._v("导出早会列表")]),t._v(" "),s("el-button",{staticClass:"export-btn fr mr10",attrs:{type:"primary",size:"mini",icon:"el-icon-bell"},on:{click:t._notify}},[t._v("提醒打卡")]),t._v(" "),s("el-button",{staticClass:"export-btn fr",attrs:{type:"primary",size:"mini",icon:"el-icon-bell"},on:{click:t._quike}},[t._v("催一下")])],1)])]),t._v(" "),s("el-dialog",{attrs:{title:"导出",visible:t.exportShow,width:"60%",center:""},on:{"update:visible":function(e){t.exportShow=e}}},[s("div",{staticClass:"mb15"},[s("p",[t._v("早会列表:")]),t._v(" "),s("el-input",{attrs:{type:"textarea",rows:6,resize:"none"},model:{value:t.textareaExport,callback:function(e){t.textareaExport=e},expression:"textareaExport"}})],1),t._v(" "),s("div",[s("p",[t._v("加班人员:")]),t._v(" "),s("el-input",{attrs:{type:"textarea",rows:1,resize:"none"},model:{value:t.jiabanListData,callback:function(e){t.jiabanListData=e},expression:"jiabanListData"}})],1)])],1)},Y=[],q={render:V,staticRenderFns:Y},H=q,K=n("VU/8"),X=o,J=K(G,H,!1,X,null,null),P=J.exports;c.default.use(h.a);var B,Q=new h.a({routes:[{path:"/",redirect:"/login"},{path:"/login",name:"Login",component:F},{path:"/sinup",name:"Sinup",component:W},{path:"/window",name:"Window",component:P}]}),Z=n("zL8q"),tt=n.n(Z),et={SNY_USERDATA:"SNY_USERDATA",GET_USERDATA:"GET_USERDATA",SETUSERTOKEN:"SETUSERTOKEN",SNYMSGLISTDATA:"SNYMSGLISTDATA"},nt=et,st={snyUserData:function(t,e){var n=t.commit;t.state;n(nt.SNY_USERDATA,{userData:e})},snyMsgListData:function(t,e){var n=t.commit;t.state;n(nt.SNYMSGLISTDATA,{msgList:e})},getUserData:function(t,e){var n=t.commit;t.state;x.a.ajax({type:"get",url:"/users",data:{},dataType:"json",success:function(t){t&&0==t.code&&n(nt.GET_USERDATA,{userData:t.result.users})}})},setUserToken:function(t,e){var n=t.commit;t.state;n(nt.SETUSERTOKEN,{token:e})}},at=st,it=function(t){return t.usersData},ot=function(t){return t.token},rt=function(t){return t.msgList},ct=function(t){return t.t},lt={getUserData:it,getUserToken:ot,getMsgList:rt,getT:ct},ut=n("bOdI"),pt=n.n(ut),mt=(n("pFYg"),window.navigator.userAgent),gt=(mt.match(/Firefox/i),mt.match(/IEMobile/i),B={},pt()(B,nt.SNY_USERDATA,function(t,e){var n=e.userData;t.usersData=n}),pt()(B,nt.GET_USERDATA,function(t,e){var n=e.userData;t.usersData=n;for(var s=0;s<t.usersData.length;s++)t.t[t.usersData[s].token]=r(1,19)+".jpg"}),pt()(B,nt.SETUSERTOKEN,function(t,e){var n=e.token;t.token=n}),pt()(B,nt.SNYMSGLISTDATA,function(t,e){var n=e.msgList;t.msgList=n}),B);c.default.use(k.a);var dt={usersData:[],token:"",msgList:{},t:{}},ft=new k.a.Store({state:dt,actions:at,getters:lt,mutations:gt,modules:{},strict:!1});n("tvR6");c.default.config.productionTip=!1,c.default.use(tt.a),new c.default({el:"#app",store:ft,router:Q,template:"<App/>",components:{App:b}})},TTHA:function(t,e){},"U+Ow":function(t,e,n){t.exports=n.p+"static/img/13.d728dfc.jpg"},VUov:function(t,e,n){t.exports=n.p+"static/img/15.8c72295.jpg"},Vs3p:function(t,e,n){t.exports=n.p+"static/img/7.2b9fecd.jpg"},"b+HG":function(t,e,n){t.exports=n.p+"static/img/17.8993586.jpg"},fITI:function(t,e,n){t.exports=n.p+"static/img/3.7d9d808.jpg"},h3MW:function(t,e,n){t.exports=n.p+"static/img/14.d25415a.jpg"},nloW:function(t,e,n){function s(t){return n(a(t))}function a(t){var e=i[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var i={"./1.jpg":"zWXz","./10.jpg":"zuwm","./11.jpg":"x3FC","./12.jpg":"2GeU","./13.jpg":"U+Ow","./14.jpg":"h3MW","./15.jpg":"VUov","./16.jpg":"F8FV","./17.jpg":"b+HG","./18.jpg":"8hC4","./2.jpg":"N7MP","./3.jpg":"fITI","./4.jpg":"uTv9","./5.jpg":"A4uV","./6.jpg":"ApBm","./7.jpg":"Vs3p","./8.jpg":"wp6J","./9.jpg":"LuyX"};s.keys=function(){return Object.keys(i)},s.resolve=a,t.exports=s,s.id="nloW"},p1iT:function(t,e){},qWyb:function(t,e){},tvR6:function(t,e){},uTv9:function(t,e,n){t.exports=n.p+"static/img/4.9788843.jpg"},wp6J:function(t,e,n){t.exports=n.p+"static/img/8.f69155a.jpg"},x3FC:function(t,e,n){t.exports=n.p+"static/img/11.444aec4.jpg"},zWXz:function(t,e,n){t.exports=n.p+"static/img/1.d5bb0e7.jpg"},zuwm:function(t,e,n){t.exports=n.p+"static/img/10.689ecb6.jpg"}},["NHnr"]);
//# sourceMappingURL=app.eeb0e242522871746211.js.map
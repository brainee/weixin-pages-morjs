"use strict";(window.mor_modules=window.mor_modules||[]).push([[834],{YBZf:function(h,_,n){n.d(_,{L:function(){return s}});var o=function(){var g=getCurrentPages(),m=g[g.length-1],C=m.route;return C},s=function(){var g=getCurrentPages(),m=g[g.length-1],C=m.options;return C}},c5MF:function(h,_,n){n.r(_),n.d(_,{$templates:function(){return K},defaultRender:function(){return X},isComplexComponents:function(){return G}});var o=n("mXGw"),s=n("20uZ"),E=n("uvno"),g=n("RAy4"),m=n("hmPl"),C=n("aMrw"),w=n("FyQJ"),L=n("eMCs"),T=n.n(L),S=n("vRpg"),R=n.n(S),O=n("rRSO"),P=n.n(O),b=n("v1RS"),B=n.n(b),U=n("Me5i"),z=n.n(U),N=n("54ue"),W=n.n(N),Z=n("9riZ"),r={};r.styleTagTransform=W(),r.setAttributes=B(),r.insert=P().bind(null,"head"),r.domAPI=R(),r.insertStyleElement=z();var J=T()(Z.Z,r),j=Z.Z&&Z.Z.locals?Z.Z.locals:void 0,K={};function X(d){var A=d.$id,i=d.account,t=d.leftSendTimes,e=d.code,a=d.isFocus,u=d.isRegain,v=d.time,f=d.operate,p=d.stepDisabled;return o.createElement("tiga-page",null,o.createElement("tiga-view",{class:"container"},o.createElement("tiga-view",{class:"main-title"+(" d5376db9523d4c809fce2e5eb8fe83ba"+(typeof index!="undefined"?index:"")+(" comp-id-"+A))},"\u8F93\u5165\u77ED\u4FE1\u9A8C\u8BC1\u7801",s.Z.registEvents([{name:"tap",event:"test",catch:!1}],d,"d5376db9523d4c809fce2e5eb8fe83ba"+(typeof index!="undefined"?index:""))),o.createElement("tiga-view",{class:"sub-title"},"\u8BF7\u8F93\u5165\u53D1\u9001\u81F3",o.createElement("tiga-text",{class:"phone"},"+86 "+s.Z.getString(i)),"\u7684 6 \u4F4D\u9A8C\u8BC1\u7801\uFF0C\u6709\u6548\u671F 5 \u5206\u949F"),t>0?o.createElement(s.Z.Block,null,o.createElement("tiga-view",{class:"code-box"+(" 344772bf78674df2b523adbc0182e29e"+(typeof index!="undefined"?index:"")+(" comp-id-"+A))},o.createElement("tiga-view",{class:(e==null?void 0:e.length)==0?"active":"input-box"},s.Z.getString(e==null?void 0:e[0])),o.createElement("tiga-view",{class:(e==null?void 0:e.length)==1?"active":"input-box"},s.Z.getString(e==null?void 0:e[1])),o.createElement("tiga-view",{class:(e==null?void 0:e.length)==2?"active":"input-box"},s.Z.getString(e==null?void 0:e[2])),o.createElement("tiga-view",{class:(e==null?void 0:e.length)==3?"active":"input-box"},s.Z.getString(e==null?void 0:e[3])),o.createElement("tiga-view",{class:(e==null?void 0:e.length)==4?"active":"input-box"},s.Z.getString(e==null?void 0:e[4])),o.createElement("tiga-view",{class:(e==null?void 0:e.length)==5?"active":"input-box"},s.Z.getString(e==null?void 0:e[5])),s.Z.registEvents([{name:"tap",event:"getFocus",catch:!1}],d,"344772bf78674df2b523adbc0182e29e"+(typeof index!="undefined"?index:""))),o.createElement("tiga-input",{class:"input-number"+(" 3ab11c8bbd2f43d1813642c0955beccf"+(typeof index!="undefined"?index:"")+(" comp-id-"+A)),type:"number",focus:s.Z.toJsonString(a,!1),maxlength:"6"},s.Z.registEvents([{name:"input",event:"getCode",catch:!1}],d,"3ab11c8bbd2f43d1813642c0955beccf"+(typeof index!="undefined"?index:"")))):!1,o.createElement("tiga-view",{class:"time-box"},u&&t>0?o.createElement("tiga-view",{class:"regain"+(" 4cffff2236464f8c916b2d1dbbeb255b"+(typeof index!="undefined"?index:"")+(" comp-id-"+A)),"hover-class":"btn-hover"},"\u91CD\u65B0\u83B7\u53D6\u9A8C\u8BC1\u7801",s.Z.registEvents([{name:"tap",event:"regain",catch:!1}],d,"4cffff2236464f8c916b2d1dbbeb255b"+(typeof index!="undefined"?index:""))):t<=0?o.createElement("tiga-view",{class:"over-times"},"\u5DF2\u65E0\u53EF\u91CD\u8BD5\u6B21\u6570\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"):o.createElement("tiga-view",{class:"regain-info"},o.createElement("tiga-text",{class:"time"},s.Z.getString(v)),"\u79D2\u540E\u53EF\u91CD\u65B0\u83B7\u53D6\u9A8C\u8BC1\u7801"),f=="login"?o.createElement("tiga-view",{class:"switch-type"+(" a243e80f96f84786bc24ba7b1c95da11"+(typeof index!="undefined"?index:"")+(" comp-id-"+A)),"hover-class":"btn-hover"},"\u5207\u6362\u5230\u5BC6\u7801\u9A8C\u8BC1",s.Z.registEvents([{name:"tap",event:"switchPass",catch:!1}],d,"a243e80f96f84786bc24ba7b1c95da11"+(typeof index!="undefined"?index:""))):!1),f=="reset"||f=="register"?o.createElement("tiga-view",{class:"login-button-area"},o.createElement(E.Z,{theme:"primary",size:"large",block:!0,disabled:p,ref:s.Z.ref("$morSaveRef",d),morTagName:"t-button",onTap:s.Z.getEvent("goNext",d)},"\u4E0B\u4E00\u6B65")):!1))}var G=!0},AQZI:function(h,_,n){n.r(_),n.d(_,{default:function(){return A}});var o=n("6Ydh"),s=n("DajF"),E=n("MM43"),g=n("4kMG"),m=n("8mQb"),C=n("bmIf"),w=n("tTth"),L=n("8j+p"),T=n("mXGw"),S=n("kGfE"),R=n("20uZ"),O=n("2GZr"),P=n("YBZf"),b=n("gmp5"),B=n("/cI1");function U(i){var t="[zy]getSmsSession";return console.log(t,"service start"),(0,B.xH)(i).then(function(e){var a;if(console.log(t,"resp=",e),e)return!((a=e==null?void 0:e.loginResponse)===null||a===void 0)&&a.flag&&(getApp().globalData.session=e),e})}function z(i){var t="[zy]sendSmsCodeService";return console.log(t,"service start",i),(0,B.W_)(i).then(function(e){if(console.log(t,"resp=",e),e)return e})}function N(i){var t="[zy]validateSmsService";return console.log(t,"service start"),(0,B.dJ)(i).then(function(e){if(console.log(t,"resp=",e),e)return e})}var W=n("IzCe"),Z=n("yF2H").D4,r=n("UtkT").ik,J=n("c5MF"),j=W.vc.default_mobile_prefix,K=W.vc.default_sendsms_time;Z({data:{account:"",isFocus:!0,code:"",isRegain:!1,timer:null,time:K,leftSendTimes:2,stepDisabled:!0,validatedToken:""},onLoad:function(t){var e=this,a,u=(0,P.L)()||{},v=u.account,f=u.operate;console.log("[zy]got from last page:account",v),this.setData({account:v,operate:f});var p=v,y=j,x=getApp(),D=(a=x==null?void 0:x.globalData)===null||a===void 0?void 0:a.session,c=D.openid,I=D.unionid;z({openid:c,unionid:I,mobile:p,mobileprefix:y}).then(function(l){var F=l||{},M=F.returnCode,Y=F.maxSendTimes,Q=F.message,H=F.leftSendTimes;e.setData({leftSendTimes:H}),M===0?e.countdown():(r.showToast({title:Q||"\u9A8C\u8BC1\u7801\u53D1\u9001\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"}),e.setData({isRegain:!0})),console.log("[zy]onLoad e",l)})},validateParam:function(){var t,e=this.data.account,a=j,u=this.data.code,v=getApp(),f=(t=v==null?void 0:v.globalData)===null||t===void 0?void 0:t.session,p=f.openid,y=f.unionid;if(!e){r.showToast({icon:"none",title:"\u8D26\u53F7\u4E0D\u80FD\u4E3A\u7A7A"});return}if(!u){r.showToast({icon:"none",title:"\u9A8C\u8BC1\u7801\u4E0D\u80FD\u4E3A\u7A7A"});return}if(!p){r.showToast({icon:"none",title:"\u9700\u8981\u5148\u767B\u5F55\u5C0F\u7A0B\u5E8F"}),(0,b.oF)();return}return!0},finishCode:function(){if(this.validateParam()){var t=this.data.operate;["register","reset"].indexOf(t)>-1?this.validateSmsCode():this.login()}},login:function(){var t,e,a,u;return(0,O.__awaiter)(this,void 0,void 0,(0,S.Z)().mark(function v(){var f,p,y,x,D,c,I,l;return(0,S.Z)().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return f=this.data.account,p=j,y=this.data.code,x=getApp(),D=(t=x==null?void 0:x.globalData)===null||t===void 0?void 0:t.session,c=D.openid,I=D.unionid,M.next=7,U({openid:c,unionid:I,mobile:f,smsCode:y,mobileprefix:p});case 7:l=M.sent,!((e=l==null?void 0:l.loginResponse)===null||e===void 0)&&e.flag?r.switchTab({url:"/pages/cart/index"}):!((a=l==null?void 0:l.loginResponse)===null||a===void 0)&&a.errorMsg?r.showToast({title:(u=l==null?void 0:l.loginResponse)===null||u===void 0?void 0:u.errorMsg}):r.showToast({title:"\u767B\u5F55\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u624B\u673A\u53F7\u7801\u548C\u9A8C\u8BC1\u7801"});case 9:case"end":return M.stop()}},v,this)}))},validateSmsCode:function(){var t;return(0,O.__awaiter)(this,void 0,void 0,(0,S.Z)().mark(function e(){var a,u,v,f,p,y,x,D,c;return(0,S.Z)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return a=this.data.operate,u=this.data.account,v=j,f=this.data.code,p=getApp(),y=(t=p==null?void 0:p.globalData)===null||t===void 0?void 0:t.session,x=y.openid,D=y.unionid,l.next=8,N({openid:x,unionid:D,mobile:u,smsCode:f,mobileprefix:v,operation:a});case 8:c=l.sent,c.returnCode===0&&(c!=null&&c.token)?this.setData({stepDisabled:!1,validatedToken:c==null?void 0:c.token}):r.showToast({title:(c==null?void 0:c.message)||"\u9A8C\u8BC1\u7801\u5931\u6548"});case 10:case"end":return l.stop()}},e,this)}))},goNext:function(){var t=this.data,e=t.account,a=t.operate,u=t.validatedToken;u?a==="reset"?r.navigateTo({url:"/pages/usercenter/reset/reset/index?account=".concat(e,"&token=").concat(u,"&operate=").concat(a)}):r.navigateTo({url:"/pages/usercenter/register/pass/index?account=".concat(e,"&token=").concat(u,"&operate=").concat(a)}):(r.showToast({title:"\u9A8C\u8BC1\u7801\u9519\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u5C1D\u8BD5"}),this.setData({code:""}))},regain:function(){this.setData({isRegain:!1}),this.countdown()},switchPass:function(){var t=this.data.account;r.navigateTo({url:"/pages/usercenter/login/pass/index?account=".concat(t)})},getFocus:function(){this.setData({isFocus:!0})},getCode:function(t){console.log("[zy]getCode",t);var e=t.detail.value;this.setData({code:e}),e.length===6&&this.finishCode()},countdown:function(){var t=this,e=this.data.time,a=setInterval(function(){e--,t.setData({time:e}),e<=0&&(clearInterval(a),t.setData({time:K,isRegain:!0}))},1e3)},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}},"w");var X=R.Z.Page(J,R.Z.mergeConfig(n("v9Xe"),n("f8co")));function G(i,t,e){return t=(0,m.Z)(t),(0,E.Z)(i,(0,g.Z)()?Reflect.construct(t,e||[],(0,m.Z)(i).constructor):t.apply(i,e))}var d=function(i){function t(){return(0,o.Z)(this,t),G(this,t,arguments)}return(0,C.Z)(t,i),(0,s.Z)(t,[{key:"render",value:function(){return T.createElement("tiga-page-host",{"show-back":"false","show-header":"true"},T.createElement(X,null))}}])}(T.Component),A=d},UFQt:function(h,_,n){var o=n("Ba9y"),s=n.n(o),E=n("Ai0b"),g=n.n(E),m=g()(s());m.push([h.id,`.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 6.25rem 0;
  box-sizing: border-box;
}

.container2 {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}`,""]),_.Z=m},"9riZ":function(h,_,n){var o=n("Ba9y"),s=n.n(o),E=n("Ai0b"),g=n.n(E),m=g()(s());m.push([h.id,`tiga-page {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: linear-gradient(180deg, white, lightblue);
}

.container {
  padding-top: 2.1875rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.container .main-title {
  font-size: 1.5625rem;
  color: #2F343E;
  text-align: center;
  font-weight: bold;
  margin-bottom: 0.375rem;
}
.container .sub-title {
  font-size: 0.75rem;
  color: #666;
  text-align: left;
  display: flex;
}
.container .sub-title .phone {
  font-size: 0.75rem;
  color: #333;
  font-weight: bold;
}
.container .code-box {
  width: 15.9375rem;
  height: 2.5rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 1.25rem;
}
.container .code-box .input-box {
  height: 2.5rem;
  width: 2.25rem;
  box-sizing: border-box;
  border: solid 0.03125rem #d7d7d7;
  text-align: center;
  line-height: 2.5rem;
  color: #333;
  font-size: 1.0625rem;
}
.container .code-box .active {
  height: 2.5rem;
  width: 2.25rem;
  box-sizing: border-box;
  border: solid 0.03125rem #d7d7d7;
  text-align: center;
  line-height: 2.5rem;
  color: #333;
  font-size: 1.0625rem;
  border-color: #3399cc;
}
.container .input-number {
  opacity: 0;
  position: absolute;
  z-index: -1;
  height: 0;
  width: 0;
}
.container .time-box {
  margin-top: 0.625rem;
  font-size: 0.9375rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.container .time-box .regain {
  color: #3399cc;
}
.container .time-box .regain-info {
  color: #b5b5b5;
}
.container .time-box .over-times {
  color: #b5b5b5;
}
.container .time-box .switch-type {
  color: #3399cc;
}
.container .login-button-area {
  width: 100%;
  height: 100%;
  align-self: flex-end;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}`,""]),_.Z=m},FyQJ:function(h,_,n){var o=n("eMCs"),s=n.n(o),E=n("vRpg"),g=n.n(E),m=n("rRSO"),C=n.n(m),w=n("v1RS"),L=n.n(w),T=n("Me5i"),S=n.n(T),R=n("54ue"),O=n.n(R),P=n("UFQt"),b={};b.styleTagTransform=O(),b.setAttributes=L(),b.insert=C().bind(null,"head"),b.domAPI=g(),b.insertStyleElement=S();var B=s()(P.Z,b),U=P.Z&&P.Z.locals?P.Z.locals:void 0},v9Xe:function(h){h.exports=JSON.parse('{"pages":["pages/usercenter/login/account/index","pages/line/index","pages/usercenter/code/index","pages/usercenter/login/pass/index","pages/usercenter/reset/account/index","pages/usercenter/reset/reset/index","pages/usercenter/register/account/index","pages/usercenter/register/pass/index","pages/usercenter/register/mail/index","pages/usercenter/register/finish/index","pages/logs/logs","pages/index/index"],"usingComponents":{"navigation-bar":"/components/navigation-bar/navigation-bar","ec-canvas":"/ec-canvas/ec-canvas","t-icon":"tdesign-miniprogram/icon/icon","t-loading":"tdesign-miniprogram/loading/loading","t-popup":"tdesign-miniprogram/popup/popup","t-cell-group":"tdesign-miniprogram/cell-group/cell-group","t-cell":"tdesign-miniprogram/cell/cell","t-input":"tdesign-miniprogram/input/input","t-button":"tdesign-miniprogram/button/button","t-radio":"tdesign-miniprogram/radio/radio","t-link":"tdesign-miniprogram/link/link","t-cascader":"tdesign-miniprogram/cascader/cascader","t-toast":"tdesign-miniprogram/toast/toast"},"resolveAlias":{"config/*":"config/*","services/*":"services/*","model/*":"model/*","utils/*":"utils/*","components/*":"components/*","tdesign-miniprogram/*":"miniprogram_npm/tdesign-miniprogram/*"},"window":{"backgroundTextStyle":"light","titleBarColor":"#fff","defaultTitle":"Weixin"},"sitemapLocation":"sitemap.json"}')},f8co:function(h){h.exports=JSON.parse('{"usingComponents":{}}')}}]);

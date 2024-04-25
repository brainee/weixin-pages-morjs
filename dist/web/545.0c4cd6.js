"use strict";(window.mor_modules=window.mor_modules||[]).push([[545],{YBZf:function(u,d,e){e.d(d,{L:function(){return t}});var n=function(){var r=getCurrentPages(),i=r[r.length-1],p=i.route;return p},t=function(){var r=getCurrentPages(),i=r[r.length-1],p=i.options;return p}},TMYQ:function(u,d,e){e.r(d),e.d(d,{$templates:function(){return s},defaultRender:function(){return l},isComplexComponents:function(){return f}});var n=e("mXGw"),t=e("20uZ"),c=e("BYLK"),r=e("aMrw"),i=e("uvno"),p=e("FyQJ"),R=e("eMCs"),B=e.n(R),P=e("vRpg"),C=e.n(P),M=e("rRSO"),O=e.n(M),E=e("v1RS"),m=e.n(E),S=e("Me5i"),g=e.n(S),j=e("54ue"),b=e.n(j),x=e("rB10"),h={};h.styleTagTransform=b(),h.setAttributes=m(),h.insert=O().bind(null,"head"),h.domAPI=C(),h.insertStyleElement=g();var U=B()(x.Z,h),o=x.Z&&x.Z.locals?x.Z.locals:void 0,s={};function l(a){var D=a.$id,y=a.formData,T=a.showPassword,A=a.stepDisabled;return n.createElement("tiga-page",null,n.createElement("tiga-view",{class:"container"},n.createElement("tiga-view",{class:"main-title"+(" 03d4dc2d78c24a9aabcfba1f53ee8b60"+(typeof index!="undefined"?index:"")+(" comp-id-"+D))},"\u8F93\u5165\u5BC6\u7801",t.Z.registEvents([{name:"tap",event:"test",catch:!1}],a,"03d4dc2d78c24a9aabcfba1f53ee8b60"+(typeof index!="undefined"?index:""))),n.createElement("tiga-view",{class:"code-box"},n.createElement(c.Z,{"data-prop":"password",value:y==null?void 0:y.password,prefixIcon:"lock-on",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",suffixIcon:{name:T?"browse":"browse-off"},type:T?"":"password",clearable:!0,ref:t.Z.ref("$morSaveRef",a),morTagName:"t-input",onClear:t.Z.getEvent("inputChange",a),onClick:t.Z.getEvent("changEye",a),onChange:t.Z.getEvent("inputChange",a)})),n.createElement("tiga-view",{class:"time-box"},n.createElement("tiga-view",{class:"regain-info"},"\u5FD8\u8BB0\u5BC6\u7801\uFF1F",n.createElement("tiga-view",{class:"regain"+(" d08210863f144eb4a50ec7c3899105e8"+(typeof index!="undefined"?index:"")+(" comp-id-"+D)),"hover-class":"btn-hover"},"\u70B9\u6B64\u91CD\u7F6E",t.Z.registEvents([{name:"tap",event:"regain",catch:!1}],a,"d08210863f144eb4a50ec7c3899105e8"+(typeof index!="undefined"?index:"")))),n.createElement("tiga-view",{class:"switch-type"+(" 45de2eeac2bf46ef85101fef4b2a2a71"+(typeof index!="undefined"?index:"")+(" comp-id-"+D)),"hover-class":"btn-hover"},"\u5207\u6362\u5230\u624B\u673A\u53F7\u9A8C\u8BC1",t.Z.registEvents([{name:"tap",event:"switchCode",catch:!1}],a,"45de2eeac2bf46ef85101fef4b2a2a71"+(typeof index!="undefined"?index:"")))),n.createElement("tiga-view",{class:"login-button-area"},n.createElement(i.Z,{theme:"primary",size:"large",block:!0,disabled:A,ref:t.Z.ref("$morSaveRef",a),morTagName:"t-button",onTap:t.Z.getEvent("login",a)},"\u767B\u5F55"))))}var f=!0},"6ePz":function(u,d,e){e.r(d),e.d(d,{default:function(){return U}});var n=e("6Ydh"),t=e("DajF"),c=e("MM43"),r=e("4kMG"),i=e("8mQb"),p=e("bmIf"),R=e("tTth"),B=e("8j+p"),P=e("mXGw"),C=e("kGfE"),M=e("20uZ"),O=e("2GZr"),E=e("YBZf"),m=e("gmp5"),S=e("yF2H").D4,g=e("UtkT").ik,j=e("TMYQ");S({data:{account:"",showPassword:!1,formData:{},stepDisabled:!0},onLoad:function(s){var l=(0,E.L)()||{},f=l.account;console.log("[zy]got from last page:account",f),this.setData({account:f})},changEye:function(){this.setData({showPassword:!this.data.showPassword})},inputChange:function(s){var l=s.currentTarget.dataset.prop,f=s.detail.value;this.setData({stepDisabled:!f}),this.data.formData[l]=f,this.setData({formData:this.data.formData})},regain:function(){var s=this.data.account;g.navigateTo({url:"/pages/usercenter/reset/account/index?account=".concat(s,"&operate=reset")})},switchCode:function(){console.log("[zy]switchCode"),g.navigateBack()},login:function(s){var l;return(0,O.__awaiter)(this,void 0,void 0,(0,C.Z)().mark(function f(){var a,D,y,T,A,W;return(0,C.Z)().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:if(a=this.data.account,D=this.data.formData.password,y=getApp(),T=(l=y==null?void 0:y.globalData)===null||l===void 0?void 0:l.session,A=T.openid,W=T.unionid,a){_.next=7;break}return g.showToast({icon:"none",title:"\u8D26\u53F7\u4E0D\u80FD\u4E3A\u7A7A"}),_.abrupt("return");case 7:if(D){_.next=10;break}return g.showToast({icon:"none",title:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A"}),_.abrupt("return");case 10:if(A){_.next=15;break}return g.showToast({icon:"none",title:"\u9700\u8981\u5148\u767B\u5F55\u5C0F\u7A0B\u5E8F"}),_.next=14,(0,m.oF)();case 14:return _.abrupt("return");case 15:(0,m.hn)({account:a,password:D,openid:A,unionid:W}).then(function(v){var Z,I,L;!((Z=v==null?void 0:v.loginResponse)===null||Z===void 0)&&Z.flag?g.switchTab({url:"/pages/cart/index"}):!((I=v==null?void 0:v.loginResponse)===null||I===void 0)&&I.errorMsg?g.showToast({title:(L=v==null?void 0:v.loginResponse)===null||L===void 0?void 0:L.errorMsg}):g.showToast({title:"\u767B\u5F55\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u767B\u5F55\u540D\u79F0\u548C\u5BC6\u7801"})});case 16:case"end":return _.stop()}},f,this)}))},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}},"w");var b=M.Z.Page(j,M.Z.mergeConfig(e("v9Xe"),e("s6xK")));function x(o,s,l){return s=(0,i.Z)(s),(0,c.Z)(o,(0,r.Z)()?Reflect.construct(s,l||[],(0,i.Z)(o).constructor):s.apply(o,l))}var h=function(o){function s(){return(0,n.Z)(this,s),x(this,s,arguments)}return(0,p.Z)(s,o),(0,t.Z)(s,[{key:"render",value:function(){return P.createElement("tiga-page-host",{"show-back":"false","show-header":"true"},P.createElement(b,null))}}])}(P.Component),U=h},UFQt:function(u,d,e){var n=e("Ba9y"),t=e.n(n),c=e("Ai0b"),r=e.n(c),i=r()(t());i.push([u.id,`.container {
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
}`,""]),d.Z=i},rB10:function(u,d,e){var n=e("Ba9y"),t=e.n(n),c=e("Ai0b"),r=e.n(c),i=r()(t());i.push([u.id,`tiga-page {
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
.container .code-box {
  margin-top: 1.96875rem;
  width: 100%;
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
  display: flex;
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
}`,""]),d.Z=i},FyQJ:function(u,d,e){var n=e("eMCs"),t=e.n(n),c=e("vRpg"),r=e.n(c),i=e("rRSO"),p=e.n(i),R=e("v1RS"),B=e.n(R),P=e("Me5i"),C=e.n(P),M=e("54ue"),O=e.n(M),E=e("UFQt"),m={};m.styleTagTransform=O(),m.setAttributes=B(),m.insert=p().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=C();var S=t()(E.Z,m),g=E.Z&&E.Z.locals?E.Z.locals:void 0},v9Xe:function(u){u.exports=JSON.parse('{"pages":["pages/usercenter/login/account/index","pages/line/index","pages/usercenter/code/index","pages/usercenter/login/pass/index","pages/usercenter/reset/account/index","pages/usercenter/reset/reset/index","pages/usercenter/register/account/index","pages/usercenter/register/pass/index","pages/usercenter/register/mail/index","pages/usercenter/register/finish/index","pages/logs/logs","pages/index/index"],"usingComponents":{"navigation-bar":"/components/navigation-bar/navigation-bar","ec-canvas":"/ec-canvas/ec-canvas","t-icon":"tdesign-miniprogram/icon/icon","t-loading":"tdesign-miniprogram/loading/loading","t-popup":"tdesign-miniprogram/popup/popup","t-cell-group":"tdesign-miniprogram/cell-group/cell-group","t-cell":"tdesign-miniprogram/cell/cell","t-input":"tdesign-miniprogram/input/input","t-button":"tdesign-miniprogram/button/button","t-radio":"tdesign-miniprogram/radio/radio","t-link":"tdesign-miniprogram/link/link","t-cascader":"tdesign-miniprogram/cascader/cascader","t-toast":"tdesign-miniprogram/toast/toast"},"resolveAlias":{"config/*":"config/*","services/*":"services/*","model/*":"model/*","utils/*":"utils/*","components/*":"components/*","tdesign-miniprogram/*":"miniprogram_npm/tdesign-miniprogram/*"},"window":{"backgroundTextStyle":"light","titleBarColor":"#fff","defaultTitle":"Weixin"},"sitemapLocation":"sitemap.json"}')},s6xK:function(u){u.exports=JSON.parse('{"usingComponents":{}}')}}]);

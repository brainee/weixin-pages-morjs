"use strict";(window.mor_modules=window.mor_modules||[]).push([[707],{"8zL7":function(a,o,t){var n=t("20uZ"),e=t("yF2H").LM,l=t("UtkT").ik,i=t("Ie6z");e({properties:{loginType:{type:String}},data:{},methods:{onClickBrand:function(){l.showModal({title:"zy2",content:"\u70B9\u51FB\u4E86\u54C1\u724C\u5361\u7247"})}}},"w"),o.Z=n.Z.Component(i,n.Z.mergeConfig(t("v9Xe"),t("dfl2")))},Ie6z:function(a,o,t){t.r(o),t.d(o,{$templates:function(){return R},defaultRender:function(){return C},isComplexComponents:function(){return A}});var n=t("mXGw"),e=t("20uZ"),l=t("eMCs"),i=t.n(l),s=t("vRpg"),M=t.n(s),P=t("rRSO"),O=t.n(P),c=t("v1RS"),f=t.n(c),y=t("Me5i"),E=t.n(y),g=t("54ue"),d=t.n(g),v=t("UXfU"),m={};m.styleTagTransform=d(),m.setAttributes=f(),m.insert=O().bind(null,"head"),m.domAPI=M(),m.insertStyleElement=E();var D=i()(v.Z,m),u=v.Z&&v.Z.locals?v.Z.locals:void 0,r=t("hmPl"),_=t("2pVW"),j=t("aMrw"),R={};function C(T){var p=T.loginType,S=T.$id;return n.createElement("tiga-view",{class:"brand-card"+(" 5e78e86874c74d2cac80fec22b6aab7c"+(typeof index!="undefined"?index:"")+(" comp-id-"+S))},n.createElement("tiga-image",{class:"logo",src:"./style/logo2.535638894ed99b17b41d.svg"}),n.createElement("tiga-text",{class:"logo-title"},e.Z.getString(p)),e.Z.registEvents([{name:"tap",event:"onClickBrand",catch:!1}],T,"5e78e86874c74d2cac80fec22b6aab7c"+(typeof index!="undefined"?index:"")))}var A=!0},CpG9:function(a,o,t){t.r(o),t.d(o,{$templates:function(){return C},defaultRender:function(){return A},isComplexComponents:function(){return T}});var n=t("mXGw"),e=t("20uZ"),l=t("8zL7"),i=t("aMrw"),s=t("uvno"),M=t("FyQJ"),P=t("eMCs"),O=t.n(P),c=t("vRpg"),f=t.n(c),y=t("rRSO"),E=t.n(y),g=t("v1RS"),d=t.n(g),v=t("Me5i"),m=t.n(v),D=t("54ue"),u=t.n(D),r=t("0VcG"),_={};_.styleTagTransform=u(),_.setAttributes=d(),_.insert=E().bind(null,"head"),_.domAPI=f(),_.insertStyleElement=m();var j=O()(r.Z,_),R=r.Z&&r.Z.locals?r.Z.locals:void 0,C={};function A(p){var S=p.accountLogin,I=p.stepDisabled;return n.createElement("tiga-page",null,n.createElement("tiga-view",{class:"loginBox"},n.createElement(l.Z,{loginType:S,ref:e.Z.ref("$morSaveRef",p),morTagName:"f-brand-card"}),n.createElement("tiga-view",{class:"login-button-area"},n.createElement(s.Z,{theme:"primary",size:"large",block:!0,disabled:I,ref:e.Z.ref("$morSaveRef",p),morTagName:"t-button",onTap:e.Z.getEvent("finish",p)},"\u5B8C\u6210\u6CE8\u518C"))))}var T=!0},GteY:function(a,o,t){t.r(o),t.d(o,{default:function(){return D}});var n=t("6Ydh"),e=t("DajF"),l=t("MM43"),i=t("4kMG"),s=t("8mQb"),M=t("bmIf"),P=t("tTth"),O=t("8j+p"),c=t("mXGw"),f=t("20uZ"),y=t("yF2H").D4,E=t("UtkT").ik,g=t("CpG9");y({data:{accountLogin:"\u8BA4\u8BC1\u7533\u8BF7\u7B49\u5F85\u2026",stepDisabled:!1},finish:function(){E.navigateTo({url:"/pages/usercenter/login/account/index"})},onLoad:function(){E.hideHomeButton()},onShow:function(){}},"w");var d=f.Z.Page(g,f.Z.mergeConfig(t("v9Xe"),t("Kxwr")));function v(u,r,_){return r=(0,s.Z)(r),(0,l.Z)(u,(0,i.Z)()?Reflect.construct(r,_||[],(0,s.Z)(u).constructor):r.apply(u,_))}var m=function(u){function r(){return(0,n.Z)(this,r),v(this,r,arguments)}return(0,M.Z)(r,u),(0,e.Z)(r,[{key:"render",value:function(){return c.createElement("tiga-page-host",{"show-back":"false","show-header":"true"},c.createElement(d,null))}}])}(c.Component),D=m},UFQt:function(a,o,t){var n=t("Ba9y"),e=t.n(n),l=t("Ai0b"),i=t.n(l),s=i()(e());s.push([a.id,`.container {
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
}`,""]),o.Z=s},UXfU:function(a,o,t){var n=t("Ba9y"),e=t.n(n),l=t("Ai0b"),i=t.n(l),s=i()(e());s.push([a.id,`.brand-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.brand-card .logo {
  margin: 5% auto;
  width: 6.25rem;
  height: 3.125rem;
}
.brand-card .logo-title {
  margin: 0 auto 10%;
  font-size: 1.5rem;
}`,""]),o.Z=s},"0VcG":function(a,o,t){var n=t("Ba9y"),e=t.n(n),l=t("Ai0b"),i=t.n(l),s=i()(e());s.push([a.id,`.loginBox {
  width: 80%;
  margin: 10% auto;
}
.loginBox .login-button-area {
  margin-top: 1.25rem;
}
.loginBox .login-button-area tiga-button {
  margin-top: 0.375rem;
}`,""]),o.Z=s},FyQJ:function(a,o,t){var n=t("eMCs"),e=t.n(n),l=t("vRpg"),i=t.n(l),s=t("rRSO"),M=t.n(s),P=t("v1RS"),O=t.n(P),c=t("Me5i"),f=t.n(c),y=t("54ue"),E=t.n(y),g=t("UFQt"),d={};d.styleTagTransform=E(),d.setAttributes=O(),d.insert=M().bind(null,"head"),d.domAPI=i(),d.insertStyleElement=f();var v=e()(g.Z,d),m=g.Z&&g.Z.locals?g.Z.locals:void 0},v9Xe:function(a){a.exports=JSON.parse('{"pages":["pages/usercenter/login/account/index","pages/line/index","pages/usercenter/code/index","pages/usercenter/login/pass/index","pages/usercenter/reset/account/index","pages/usercenter/reset/reset/index","pages/usercenter/register/account/index","pages/usercenter/register/pass/index","pages/usercenter/register/mail/index","pages/usercenter/register/finish/index","pages/logs/logs","pages/index/index"],"usingComponents":{"navigation-bar":"/components/navigation-bar/navigation-bar","ec-canvas":"/ec-canvas/ec-canvas","t-icon":"tdesign-miniprogram/icon/icon","t-loading":"tdesign-miniprogram/loading/loading","t-popup":"tdesign-miniprogram/popup/popup","t-cell-group":"tdesign-miniprogram/cell-group/cell-group","t-cell":"tdesign-miniprogram/cell/cell","t-input":"tdesign-miniprogram/input/input","t-button":"tdesign-miniprogram/button/button","t-radio":"tdesign-miniprogram/radio/radio","t-link":"tdesign-miniprogram/link/link","t-cascader":"tdesign-miniprogram/cascader/cascader","t-toast":"tdesign-miniprogram/toast/toast"},"resolveAlias":{"config/*":"config/*","services/*":"services/*","model/*":"model/*","utils/*":"utils/*","components/*":"components/*","tdesign-miniprogram/*":"miniprogram_npm/tdesign-miniprogram/*"},"window":{"backgroundTextStyle":"light","titleBarColor":"#fff","defaultTitle":"Weixin"},"sitemapLocation":"sitemap.json"}')},dfl2:function(a){a.exports=JSON.parse('{"component":true,"usingComponents":{}}')},Kxwr:function(a){a.exports=JSON.parse('{"usingComponents":{"f-brand-card":"../../components/brand-card/index"}}')}}]);

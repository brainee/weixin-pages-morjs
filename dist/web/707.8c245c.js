"use strict";(window.mor_modules=window.mor_modules||[]).push([[707],{nb5u:function(a,s,t){var n=t("20uZ"),e=t("yF2H").LM,l=t("Ie6z");e({properties:{loginType:{type:String}},data:{},methods:{}},"w"),s.Z=n.Z.Component(l,n.Z.mergeConfig(t("v9Xe"),t("dfl2")))},Ie6z:function(a,s,t){t.r(s),t.d(s,{$templates:function(){return R},defaultRender:function(){return S},isComplexComponents:function(){return A}});var n=t("mXGw"),e=t("20uZ"),l=t("eMCs"),i=t.n(l),o=t("vRpg"),M=t.n(o),P=t("rRSO"),O=t.n(P),c=t("v1RS"),f=t.n(c),y=t("Me5i"),E=t.n(y),g=t("54ue"),d=t.n(g),v=t("UXfU"),u={};u.styleTagTransform=d(),u.setAttributes=f(),u.insert=O().bind(null,"head"),u.domAPI=M(),u.insertStyleElement=E();var D=i()(v.Z,u),m=v.Z&&v.Z.locals?v.Z.locals:void 0,r=t("hmPl"),_=t("2pVW"),j=t("aMrw"),R={};function S(T){var p=T.loginType,C=T.$id;return n.createElement("tiga-view",{class:"brand-card"+(" 7e3c9798348246dcb5cb3de5ac700b4c"+(typeof index!="undefined"?index:"")+(" comp-id-"+C))},n.createElement("tiga-image",{class:"logo",src:"./style/logo2.535638894ed99b17b41d.svg"}),n.createElement("tiga-text",{class:"logo-title"},e.Z.getString(p)),e.Z.registEvents([{name:"click",event:"onClickBrand",catch:!1}],T,"7e3c9798348246dcb5cb3de5ac700b4c"+(typeof index!="undefined"?index:"")))}var A=!0},CpG9:function(a,s,t){t.r(s),t.d(s,{$templates:function(){return S},defaultRender:function(){return A},isComplexComponents:function(){return T}});var n=t("mXGw"),e=t("20uZ"),l=t("nb5u"),i=t("aMrw"),o=t("uvno"),M=t("FyQJ"),P=t("eMCs"),O=t.n(P),c=t("vRpg"),f=t.n(c),y=t("rRSO"),E=t.n(y),g=t("v1RS"),d=t.n(g),v=t("Me5i"),u=t.n(v),D=t("54ue"),m=t.n(D),r=t("0VcG"),_={};_.styleTagTransform=m(),_.setAttributes=d(),_.insert=E().bind(null,"head"),_.domAPI=f(),_.insertStyleElement=u();var j=O()(r.Z,_),R=r.Z&&r.Z.locals?r.Z.locals:void 0,S={};function A(p){var C=p.accountLogin,I=p.stepDisabled;return n.createElement("tiga-page",null,n.createElement("tiga-view",{class:"loginBox"},n.createElement(l.Z,{loginType:C,ref:e.Z.ref("$morSaveRef",p),morTagName:"f-brand-card"}),n.createElement("tiga-view",{class:"login-button-area"},n.createElement(o.Z,{theme:"primary",size:"large",block:!0,disabled:I,ref:e.Z.ref("$morSaveRef",p),morTagName:"t-button",onTap:e.Z.getEvent("finish",p)},"\u5B8C\u6210\u6CE8\u518C"))))}var T=!0},GteY:function(a,s,t){t.r(s),t.d(s,{default:function(){return D}});var n=t("6Ydh"),e=t("DajF"),l=t("MM43"),i=t("4kMG"),o=t("8mQb"),M=t("bmIf"),P=t("tTth"),O=t("8j+p"),c=t("mXGw"),f=t("20uZ"),y=t("yF2H").D4,E=t("UtkT").ik,g=t("CpG9");y({data:{accountLogin:"\u8BA4\u8BC1\u7533\u8BF7\u7B49\u5F85\u2026",stepDisabled:!1},finish:function(){E.navigateTo({url:"/pages/usercenter/login/account/index"})},onLoad:function(){E.hideHomeButton()},onShow:function(){}},"w");var d=f.Z.Page(g,f.Z.mergeConfig(t("v9Xe"),t("Kxwr")));function v(m,r,_){return r=(0,o.Z)(r),(0,l.Z)(m,(0,i.Z)()?Reflect.construct(r,_||[],(0,o.Z)(m).constructor):r.apply(m,_))}var u=function(m){function r(){return(0,n.Z)(this,r),v(this,r,arguments)}return(0,M.Z)(r,m),(0,e.Z)(r,[{key:"render",value:function(){return c.createElement("tiga-page-host",{"show-back":"false","show-header":"true"},c.createElement(d,null))}}])}(c.Component),D=u},UFQt:function(a,s,t){var n=t("Ba9y"),e=t.n(n),l=t("Ai0b"),i=t.n(l),o=i()(e());o.push([a.id,`.container {
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
}`,""]),s.Z=o},UXfU:function(a,s,t){var n=t("Ba9y"),e=t.n(n),l=t("Ai0b"),i=t.n(l),o=i()(e());o.push([a.id,`.brand-card {
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
}`,""]),s.Z=o},"0VcG":function(a,s,t){var n=t("Ba9y"),e=t.n(n),l=t("Ai0b"),i=t.n(l),o=i()(e());o.push([a.id,`.loginBox {
  width: 80%;
  margin: 10% auto;
}
.loginBox .login-button-area {
  margin-top: 1.25rem;
}
.loginBox .login-button-area tiga-button {
  margin-top: 0.375rem;
}`,""]),s.Z=o},FyQJ:function(a,s,t){var n=t("eMCs"),e=t.n(n),l=t("vRpg"),i=t.n(l),o=t("rRSO"),M=t.n(o),P=t("v1RS"),O=t.n(P),c=t("Me5i"),f=t.n(c),y=t("54ue"),E=t.n(y),g=t("UFQt"),d={};d.styleTagTransform=E(),d.setAttributes=O(),d.insert=M().bind(null,"head"),d.domAPI=i(),d.insertStyleElement=f();var v=e()(g.Z,d),u=g.Z&&g.Z.locals?g.Z.locals:void 0},v9Xe:function(a){a.exports=JSON.parse('{"pages":["pages/usercenter/login/account/index","pages/line/index","pages/usercenter/code/index","pages/usercenter/login/pass/index","pages/usercenter/reset/account/index","pages/usercenter/reset/reset/index","pages/usercenter/register/account/index","pages/usercenter/register/pass/index","pages/usercenter/register/mail/index","pages/usercenter/register/finish/index","pages/logs/logs","pages/index/index"],"usingComponents":{"navigation-bar":"/components/navigation-bar/navigation-bar","ec-canvas":"/ec-canvas/ec-canvas","t-icon":"tdesign-miniprogram/icon/icon","t-loading":"tdesign-miniprogram/loading/loading","t-popup":"tdesign-miniprogram/popup/popup","t-cell-group":"tdesign-miniprogram/cell-group/cell-group","t-cell":"tdesign-miniprogram/cell/cell","t-input":"tdesign-miniprogram/input/input","t-button":"tdesign-miniprogram/button/button","t-radio":"tdesign-miniprogram/radio/radio","t-link":"tdesign-miniprogram/link/link","t-cascader":"tdesign-miniprogram/cascader/cascader","t-toast":"tdesign-miniprogram/toast/toast"},"resolveAlias":{"config/*":"config/*","services/*":"services/*","model/*":"model/*","utils/*":"utils/*","components/*":"components/*","tdesign-miniprogram/*":"miniprogram_npm/tdesign-miniprogram/*"},"window":{"backgroundTextStyle":"light","titleBarColor":"#fff","defaultTitle":"Weixin"},"sitemapLocation":"sitemap.json"}')},dfl2:function(a){a.exports=JSON.parse('{"component":true,"usingComponents":{}}')},Kxwr:function(a){a.exports=JSON.parse('{"usingComponents":{"f-brand-card":"../../components/brand-card/index"}}')}}]);

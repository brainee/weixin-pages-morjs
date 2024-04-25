"use strict";(window.mor_modules=window.mor_modules||[]).push([[733],{nb5u:function(i,r,t){var e=t("20uZ"),o=t("yF2H").LM,d=t("Ie6z");o({properties:{loginType:{type:String}},data:{},methods:{}},"w"),r.Z=e.Z.Component(d,e.Z.mergeConfig(t("v9Xe"),t("dfl2")))},YBZf:function(i,r,t){t.d(r,{L:function(){return o}});var e=function(){var l=getCurrentPages(),s=l[l.length-1],g=s.route;return g},o=function(){var l=getCurrentPages(),s=l[l.length-1],g=s.options;return g}},Ie6z:function(i,r,t){t.r(r),t.d(r,{$templates:function(){return v},defaultRender:function(){return h},isComplexComponents:function(){return A}});var e=t("mXGw"),o=t("20uZ"),d=t("eMCs"),l=t.n(d),s=t("vRpg"),g=t.n(s),O=t("rRSO"),M=t.n(O),E=t("v1RS"),y=t.n(E),D=t("Me5i"),P=t.n(D),c=t("54ue"),m=t.n(c),p=t("UXfU"),f={};f.styleTagTransform=m(),f.setAttributes=y(),f.insert=M().bind(null,"head"),f.domAPI=g(),f.insertStyleElement=P();var C=l()(p.Z,f),S=p.Z&&p.Z.locals?p.Z.locals:void 0,u=t("hmPl"),n=t("2pVW"),a=t("aMrw"),v={};function h(T){var R=T.loginType,_=T.$id;return e.createElement("tiga-view",{class:"brand-card"+(" 7e3c9798348246dcb5cb3de5ac700b4c"+(typeof index!="undefined"?index:"")+(" comp-id-"+_))},e.createElement("tiga-image",{class:"logo",src:"./style/logo2.535638894ed99b17b41d.svg"}),e.createElement("tiga-text",{class:"logo-title"},o.Z.getString(R)),o.Z.registEvents([{name:"click",event:"onClickBrand",catch:!1}],T,"7e3c9798348246dcb5cb3de5ac700b4c"+(typeof index!="undefined"?index:"")))}var A=!0},fz6O:function(i,r,t){t.r(r),t.d(r,{$templates:function(){return A},defaultRender:function(){return T},isComplexComponents:function(){return R}});var e=t("mXGw"),o=t("20uZ"),d=t("nb5u"),l=t("aMrw"),s=t("BYLK"),g=t("uvno"),O=t("FyQJ"),M=t("eMCs"),E=t.n(M),y=t("vRpg"),D=t.n(y),P=t("rRSO"),c=t.n(P),m=t("v1RS"),p=t.n(m),f=t("Me5i"),C=t.n(f),S=t("54ue"),u=t.n(S),n=t("mrKf"),a={};a.styleTagTransform=u(),a.setAttributes=p(),a.insert=c().bind(null,"head"),a.domAPI=D(),a.insertStyleElement=C();var v=E()(n.Z,a),h=n.Z&&n.Z.locals?n.Z.locals:void 0,A={};function T(_){var B=_.accountLogin,x=_.formData,j=_.stepDisabled;return e.createElement("tiga-page",null,e.createElement("tiga-view",{class:"loginBox"},e.createElement(d.Z,{loginType:B,ref:o.Z.ref("$morSaveRef",_),morTagName:"f-brand-card"}),e.createElement("tiga-view",{class:"get-mobile-group"},e.createElement(s.Z,{"data-prop":"account",value:x==null?void 0:x.account,label:"+86",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",clearable:!0,ref:o.Z.ref("$morSaveRef",_),morTagName:"t-input",onClear:o.Z.getEvent("inputChange",_),onChange:o.Z.getEvent("inputChange",_)})),e.createElement("tiga-view",{class:"login-button-area"},e.createElement(g.Z,{theme:"primary",size:"large",block:!0,disabled:j,ref:o.Z.ref("$morSaveRef",_),morTagName:"t-button",onTap:o.Z.getEvent("goStep2",_)},"\u4E0B\u4E00\u6B65"))))}var R=!0},"/tb4":function(i,r,t){t.r(r),t.d(r,{default:function(){return S}});var e=t("6Ydh"),o=t("DajF"),d=t("MM43"),l=t("4kMG"),s=t("8mQb"),g=t("bmIf"),O=t("tTth"),M=t("8j+p"),E=t("mXGw"),y=t("20uZ"),D=t("YBZf"),P=t("yF2H").D4,c=t("UtkT").ik,m=t("fz6O");P({data:{formData:{account:""},accountLogin:"\u91CD\u7F6E\u5BC6\u7801",stepDisabled:!0},inputChange:function(n){var a=n.currentTarget.dataset.prop,v=n.detail.value;this.data.formData[a]=v;var h=this.getVerificationCode(v);(v==null?void 0:v.length)>11&&c.showToast({title:"\u624B\u673A\u53F7\u7801\u4E0D\u6B63\u786E"}),h?this.setData({stepDisabled:!1}):this.setData({stepDisabled:!0}),this.setData({formData:this.data.formData})},goStep2:function(){var n=this.data.formData.account,a=this.getVerificationCode(n);a&&c.navigateTo({url:"/pages/usercenter/code/index?account=".concat(n,"&operate=reset")})},onLoad:function(){var n=(0,D.L)()||{},a=n.account,v=n.operate;console.log("[zy]got from last page:account",a),this.data.formData.account=a,this.setData({formData:this.data.formData,stepDisabled:!a})},onShow:function(){},getVerificationCode:function(n){var a=/^1[3-9][0-9]{9}$/,v=a.test(n);return v}},"w");var p=y.Z.Page(m,y.Z.mergeConfig(t("v9Xe"),t("TRlw")));function f(u,n,a){return n=(0,s.Z)(n),(0,d.Z)(u,(0,l.Z)()?Reflect.construct(n,a||[],(0,s.Z)(u).constructor):n.apply(u,a))}var C=function(u){function n(){return(0,e.Z)(this,n),f(this,n,arguments)}return(0,g.Z)(n,u),(0,o.Z)(n,[{key:"render",value:function(){return E.createElement("tiga-page-host",{"show-back":"false","show-header":"true"},E.createElement(p,null))}}])}(E.Component),S=C},UFQt:function(i,r,t){var e=t("Ba9y"),o=t.n(e),d=t("Ai0b"),l=t.n(d),s=l()(o());s.push([i.id,`.container {
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
}`,""]),r.Z=s},UXfU:function(i,r,t){var e=t("Ba9y"),o=t.n(e),d=t("Ai0b"),l=t.n(d),s=l()(o());s.push([i.id,`.brand-card {
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
}`,""]),r.Z=s},mrKf:function(i,r,t){var e=t("Ba9y"),o=t.n(e),d=t("Ai0b"),l=t.n(d),s=l()(o());s.push([i.id,`.loginBox {
  width: 80%;
  margin: 10% auto;
}
.loginBox .get-mobile-group {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.loginBox .login-button-area {
  margin-top: 1.25rem;
}
.loginBox .login-button-area tiga-button {
  margin-top: 0.375rem;
}
.loginBox .login-button-area .register-can {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.90625rem;
  font-size: 0.8125rem;
  background-color: #fff;
}
.loginBox .user-policy-can {
  --td-radio-font-size:0.8125rem;
  --td-radio-icon-size:1.1875rem;
  --td-radio-label-line-height:1.5rem;
  margin: 30% auto 2%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  font-size: 0.8125rem;
}
.loginBox .user-policy-can .agree-p {
  color: cornflowerblue;
  text-decoration: underline;
}`,""]),r.Z=s},FyQJ:function(i,r,t){var e=t("eMCs"),o=t.n(e),d=t("vRpg"),l=t.n(d),s=t("rRSO"),g=t.n(s),O=t("v1RS"),M=t.n(O),E=t("Me5i"),y=t.n(E),D=t("54ue"),P=t.n(D),c=t("UFQt"),m={};m.styleTagTransform=P(),m.setAttributes=M(),m.insert=g().bind(null,"head"),m.domAPI=l(),m.insertStyleElement=y();var p=o()(c.Z,m),f=c.Z&&c.Z.locals?c.Z.locals:void 0},v9Xe:function(i){i.exports=JSON.parse('{"pages":["pages/usercenter/login/account/index","pages/line/index","pages/usercenter/code/index","pages/usercenter/login/pass/index","pages/usercenter/reset/account/index","pages/usercenter/reset/reset/index","pages/usercenter/register/account/index","pages/usercenter/register/pass/index","pages/usercenter/register/mail/index","pages/usercenter/register/finish/index","pages/logs/logs","pages/index/index"],"usingComponents":{"navigation-bar":"/components/navigation-bar/navigation-bar","ec-canvas":"/ec-canvas/ec-canvas","t-icon":"tdesign-miniprogram/icon/icon","t-loading":"tdesign-miniprogram/loading/loading","t-popup":"tdesign-miniprogram/popup/popup","t-cell-group":"tdesign-miniprogram/cell-group/cell-group","t-cell":"tdesign-miniprogram/cell/cell","t-input":"tdesign-miniprogram/input/input","t-button":"tdesign-miniprogram/button/button","t-radio":"tdesign-miniprogram/radio/radio","t-link":"tdesign-miniprogram/link/link","t-cascader":"tdesign-miniprogram/cascader/cascader","t-toast":"tdesign-miniprogram/toast/toast"},"resolveAlias":{"config/*":"config/*","services/*":"services/*","model/*":"model/*","utils/*":"utils/*","components/*":"components/*","tdesign-miniprogram/*":"miniprogram_npm/tdesign-miniprogram/*"},"window":{"backgroundTextStyle":"light","titleBarColor":"#fff","defaultTitle":"Weixin"},"sitemapLocation":"sitemap.json"}')},dfl2:function(i){i.exports=JSON.parse('{"component":true,"usingComponents":{}}')},TRlw:function(i){i.exports=JSON.parse('{"usingComponents":{"f-brand-card":"../../components/brand-card/index"}}')}}]);

"use strict";(window.mor_modules=window.mor_modules||[]).push([[317],{nb5u:function(d,l,e){var t=e("20uZ"),n=e("yF2H").LM,c=e("Ie6z");n({properties:{loginType:{type:String}},data:{},methods:{}},"w"),l.Z=t.Z.Component(c,t.Z.mergeConfig(e("v9Xe"),e("dfl2")))},Ie6z:function(d,l,e){e.r(l),e.d(l,{$templates:function(){return m},defaultRender:function(){return g},isComplexComponents:function(){return T}});var t=e("mXGw"),n=e("20uZ"),c=e("eMCs"),f=e.n(c),i=e("vRpg"),p=e.n(i),O=e("rRSO"),A=e.n(O),y=e("v1RS"),h=e.n(y),P=e("Me5i"),D=e.n(P),s=e("54ue"),v=e.n(s),E=e("UXfU"),_={};_.styleTagTransform=v(),_.setAttributes=h(),_.insert=A().bind(null,"head"),_.domAPI=p(),_.insertStyleElement=D();var R=f()(E.Z,_),x=E.Z&&E.Z.locals?E.Z.locals:void 0,a=e("hmPl"),o=e("2pVW"),u=e("aMrw"),m={};function g(M){var C=M.loginType,S=M.$id;return t.createElement("tiga-view",{class:"brand-card"+(" 7e3c9798348246dcb5cb3de5ac700b4c"+(typeof index!="undefined"?index:"")+(" comp-id-"+S))},t.createElement("tiga-image",{class:"logo",src:"./style/logo2.535638894ed99b17b41d.svg"}),t.createElement("tiga-text",{class:"logo-title"},n.Z.getString(C)),n.Z.registEvents([{name:"click",event:"onClickBrand",catch:!1}],M,"7e3c9798348246dcb5cb3de5ac700b4c"+(typeof index!="undefined"?index:"")))}var T=!0},"4LDn":function(d,l,e){e.r(l),e.d(l,{$templates:function(){return C},defaultRender:function(){return S},isComplexComponents:function(){return I}});var t=e("mXGw"),n=e("20uZ"),c=e("nb5u"),f=e("aMrw"),i=e("BYLK"),p=e("uvno"),O=e("bYdK"),A=e("eIMC"),y=e("FyQJ"),h=e("eMCs"),P=e.n(h),D=e("vRpg"),s=e.n(D),v=e("rRSO"),E=e.n(v),_=e("v1RS"),R=e.n(_),x=e("Me5i"),a=e.n(x),o=e("54ue"),u=e.n(o),m=e("TY0W"),g={};g.styleTagTransform=u(),g.setAttributes=R(),g.insert=E().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=a();var T=P()(m.Z,g),M=m.Z&&m.Z.locals?m.Z.locals:void 0,C={};function S(r){var j=r.accountLogin,B=r.formData,L=r.stepDisabled,Z=r.navigatorProps;return t.createElement("tiga-page",null,t.createElement("tiga-view",{class:"loginBox"},t.createElement(c.Z,{loginType:j,ref:n.Z.ref("$morSaveRef",r),morTagName:"f-brand-card"}),t.createElement("tiga-view",{class:"get-mobile-group"},t.createElement(i.Z,{"data-prop":"account",value:B==null?void 0:B.account,label:"+86",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",clearable:!0,ref:n.Z.ref("$morSaveRef",r),morTagName:"t-input",onClear:n.Z.getEvent("inputChange",r),onChange:n.Z.getEvent("inputChange",r)})),t.createElement("tiga-view",{class:"login-button-area"},t.createElement(p.Z,{theme:"primary",size:"large",block:!0,disabled:L,ref:n.Z.ref("$morSaveRef",r),morTagName:"t-button",onTap:n.Z.getEvent("goStep2",r)},"\u4E0B\u4E00\u6B65"),t.createElement(p.Z,{"open-type":"getPhoneNumber",theme:"light",size:"large",block:!0,icon:"logo-wechat",ref:n.Z.ref("$morSaveRef",r),morTagName:"t-button",onGetphonenumber:n.Z.getEvent("getPhoneNumber",r)},"\u5FAE\u4FE1\u5FEB\u6377\u767B\u5F55"),t.createElement("tiga-view",{class:"register-can"},"\u6CA1\u6709\u8D26\u53F7\uFF1F",t.createElement(O.Z,{size:"small",theme:"primary",content:"\u7ACB\u5373\u6CE8\u518C",suffixIcon:"jump",hover:!0,navigatorProps:Z,ref:n.Z.ref("$morSaveRef",r),morTagName:"t-link"}))),t.createElement("tiga-view",{class:"user-policy-can"},t.createElement(A.Z,{block:!1,ref:n.Z.ref("$morSaveRef",r),morTagName:"t-radio",onChange:n.Z.getEvent("onChangeOfRead",r)},"\u6211\u5DF2\u9605\u8BFB\u5E76\u63A5\u53D7"),t.createElement("p",{className:"agree-p",onTap:n.Z.getEvent("agreeUser",r)},"\u300A\u670D\u52A1\u534F\u8BAE\u300B"),t.createElement("p",null,"\u548C"),t.createElement("p",{className:"agree-p",onTap:n.Z.getEvent("agreePrivacy",r)},"\u300A\u9690\u79C1\u653F\u7B56\u300B"))))}var I=!0},wKkB:function(d,l,e){e.r(l),e.d(l,{default:function(){return x}});var t=e("6Ydh"),n=e("DajF"),c=e("MM43"),f=e("4kMG"),i=e("8mQb"),p=e("bmIf"),O=e("tTth"),A=e("8j+p"),y=e("mXGw"),h=e("20uZ"),P=e("gmp5"),D=e("yF2H").D4,s=e("UtkT").ik,v=e("4LDn");D({data:{formData:{account:""},showPassword:!1,accountLogin:"\u8D26\u53F7\u767B\u5F55",stepDisabled:!0,readedPolicy:!1,navigatorProps:{url:"/pages/usercenter/register/account/index"}},changEye:function(){this.setData({showPassword:!this.data.showPassword})},inputChange:function(o){var u=o.currentTarget.dataset.prop,m=o.detail.value;this.data.formData[u]=m;var g=this.getVerificationCode(m);m.length>11&&s.showToast({title:"\u624B\u673A\u53F7\u7801\u4E0D\u6B63\u786E"}),g?this.setData({stepDisabled:!1}):this.setData({stepDisabled:!0}),this.setData({formData:this.data.formData})},goStep2:function(){var o=this.data.readedPolicy;if(o){var u=this.data.formData.account;s.navigateTo({url:"/pages/usercenter/code/index?account=".concat(u,"&operate=login")})}else s.showToast({title:"\u8BF7\u5148\u9605\u8BFB \u670D\u52A1\u534F\u8BAE\u548C\u9690\u79C1\u653F\u7B56"})},onLoad:function(){},onShow:function(){},getPhoneNumber:function(o){var u,m,g="[zy]getPhoneNumber",T=o.detail,M=T.code,C=T.errMsg,S=T.iv,I=T.encryptedData;if(console.log(g,M,o,C,S,I),!((u=this.data)===null||u===void 0)&&u.readedPolicy){var r=this.data.formData.account;if(C.startsWith("getPhoneNumber:fail "))s.showModal({title:"\u83B7\u53D6\u5931\u8D25",showCancel:!1,content:C,success:function(U){}});else{console.log(g,"getPhoneNumber code success");var j=((m=getApp().globalData)===null||m===void 0?void 0:m.session)||{},B=j.openid,L=j.unionid;(0,P.EG)({code:M,openid:B,unionid:L}).then(function(Z){Z?s.showModal({title:"\u63D0\u793A",showCancel:!1,content:"\u5FEB\u6377\u767B\u5F55\u6210\u529F",success:function(W){s.switchTab({url:"/pages/cart/index"})}}):s.showToast({title:"\u5FAE\u4FE1\u5FEB\u6377\u767B\u5F55\u5931\u8D25"})})}}else{s.showToast({title:"\u8BF7\u5148\u9605\u8BFB \u670D\u52A1\u534F\u8BAE\u548C\u9690\u79C1\u653F\u7B56"});return}},onChangeOfRead:function(o){this.setData({readedPolicy:o.detail.checked})},agreeUser:function(o){return s.showToast({title:"agreeUser"}),!1},agreePrivacy:function(o){return s.showToast({title:"agreePrivacy"}),!1},getVerificationCode:function(o){var u=/^1[3-9][0-9]{9}$/,m=u.test(o);return m}},"w");var E=h.Z.Page(v,h.Z.mergeConfig(e("v9Xe"),e("VcjK")));function _(a,o,u){return o=(0,i.Z)(o),(0,c.Z)(a,(0,f.Z)()?Reflect.construct(o,u||[],(0,i.Z)(a).constructor):o.apply(a,u))}var R=function(a){function o(){return(0,t.Z)(this,o),_(this,o,arguments)}return(0,p.Z)(o,a),(0,n.Z)(o,[{key:"render",value:function(){return y.createElement("tiga-page-host",{"show-back":"false","show-header":"true"},y.createElement(E,null))}}])}(y.Component),x=R},UFQt:function(d,l,e){var t=e("Ba9y"),n=e.n(t),c=e("Ai0b"),f=e.n(c),i=f()(n());i.push([d.id,`.container {
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
}`,""]),l.Z=i},UXfU:function(d,l,e){var t=e("Ba9y"),n=e.n(t),c=e("Ai0b"),f=e.n(c),i=f()(n());i.push([d.id,`.brand-card {
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
}`,""]),l.Z=i},TY0W:function(d,l,e){var t=e("Ba9y"),n=e.n(t),c=e("Ai0b"),f=e.n(c),i=f()(n());i.push([d.id,`.loginBox {
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
}`,""]),l.Z=i},FyQJ:function(d,l,e){var t=e("eMCs"),n=e.n(t),c=e("vRpg"),f=e.n(c),i=e("rRSO"),p=e.n(i),O=e("v1RS"),A=e.n(O),y=e("Me5i"),h=e.n(y),P=e("54ue"),D=e.n(P),s=e("UFQt"),v={};v.styleTagTransform=D(),v.setAttributes=A(),v.insert=p().bind(null,"head"),v.domAPI=f(),v.insertStyleElement=h();var E=n()(s.Z,v),_=s.Z&&s.Z.locals?s.Z.locals:void 0},v9Xe:function(d){d.exports=JSON.parse('{"pages":["pages/usercenter/login/account/index","pages/line/index","pages/usercenter/code/index","pages/usercenter/login/pass/index","pages/usercenter/reset/account/index","pages/usercenter/reset/reset/index","pages/usercenter/register/account/index","pages/usercenter/register/pass/index","pages/usercenter/register/mail/index","pages/usercenter/register/finish/index","pages/logs/logs","pages/index/index"],"usingComponents":{"navigation-bar":"/components/navigation-bar/navigation-bar","ec-canvas":"/ec-canvas/ec-canvas","t-icon":"tdesign-miniprogram/icon/icon","t-loading":"tdesign-miniprogram/loading/loading","t-popup":"tdesign-miniprogram/popup/popup","t-cell-group":"tdesign-miniprogram/cell-group/cell-group","t-cell":"tdesign-miniprogram/cell/cell","t-input":"tdesign-miniprogram/input/input","t-button":"tdesign-miniprogram/button/button","t-radio":"tdesign-miniprogram/radio/radio","t-link":"tdesign-miniprogram/link/link","t-cascader":"tdesign-miniprogram/cascader/cascader","t-toast":"tdesign-miniprogram/toast/toast"},"resolveAlias":{"config/*":"config/*","services/*":"services/*","model/*":"model/*","utils/*":"utils/*","components/*":"components/*","tdesign-miniprogram/*":"miniprogram_npm/tdesign-miniprogram/*"},"window":{"backgroundTextStyle":"light","titleBarColor":"#fff","defaultTitle":"Weixin"},"sitemapLocation":"sitemap.json"}')},dfl2:function(d){d.exports=JSON.parse('{"component":true,"usingComponents":{}}')},VcjK:function(d){d.exports=JSON.parse('{"usingComponents":{"f-brand-card":"../../components/brand-card/index"}}')}}]);

"use strict";(window.mor_modules=window.mor_modules||[]).push([[555],{no9y:function(u,a,e){e.d(a,{Sj:function(){return r},cq:function(){return g},gM:function(){return c}});var t=e("/cI1"),n=e("UtkT").ik;function c(m){var _="[zy]registerService";return console.log(_,"service start",m),(0,t.z2)(m).then(function(s){if(console.log(_,"resp=",s),s!=null&&s.success)return!0;s!=null&&s.errorMessage?n.showToast({title:s==null?void 0:s.errorMessage}):n.showToast({title:"\u6CE8\u518C\u5931\u8D25"})})}function g(m){var _="[zy]trialService";return console.log(_,"service start",m),(0,t.FD)(m).then(function(s){if(console.log(_,"resp=",s),s)return s})}function r(m){var _="[zy]getPhoneService";return console.log(_,"service start",m),(0,t.Dj)(m).then(function(s){return s==null?void 0:s.mobile})}},"8zL7":function(u,a,e){var t=e("20uZ"),n=e("yF2H").LM,c=e("UtkT").ik,g=e("Ie6z");n({properties:{loginType:{type:String}},data:{},methods:{onClickBrand:function(){c.showModal({title:"zy2",content:"\u70B9\u51FB\u4E86\u54C1\u724C\u5361\u7247"})}}},"w"),a.Z=t.Z.Component(g,t.Z.mergeConfig(e("v9Xe"),e("dfl2")))},Ie6z:function(u,a,e){e.r(a),e.d(a,{$templates:function(){return f},defaultRender:function(){return p},isComplexComponents:function(){return O}});var t=e("mXGw"),n=e("20uZ"),c=e("eMCs"),g=e.n(c),r=e("vRpg"),m=e.n(r),_=e("rRSO"),s=e.n(_),P=e("v1RS"),D=e.n(P),T=e("Me5i"),M=e.n(T),i=e("54ue"),E=e.n(i),h=e("UXfU"),y={};y.styleTagTransform=E(),y.setAttributes=D(),y.insert=s().bind(null,"head"),y.domAPI=m(),y.insertStyleElement=M();var R=g()(h.Z,y),x=h.Z&&h.Z.locals?h.Z.locals:void 0,l=e("hmPl"),o=e("2pVW"),v=e("aMrw"),f={};function p(C){var S=C.loginType,j=C.$id;return t.createElement("tiga-view",{class:"brand-card"+(" 5e78e86874c74d2cac80fec22b6aab7c"+(typeof index!="undefined"?index:"")+(" comp-id-"+j))},t.createElement("tiga-image",{class:"logo",src:"./style/logo2.535638894ed99b17b41d.svg"}),t.createElement("tiga-text",{class:"logo-title"},n.Z.getString(S)),n.Z.registEvents([{name:"tap",event:"onClickBrand",catch:!1}],C,"5e78e86874c74d2cac80fec22b6aab7c"+(typeof index!="undefined"?index:"")))}var O=!0},"7weB":function(u,a,e){e.r(a),e.d(a,{$templates:function(){return S},defaultRender:function(){return j},isComplexComponents:function(){return L}});var t=e("mXGw"),n=e("20uZ"),c=e("8zL7"),g=e("aMrw"),r=e("BYLK"),m=e("uvno"),_=e("bYdK"),s=e("eIMC"),P=e("FyQJ"),D=e("eMCs"),T=e.n(D),M=e("vRpg"),i=e.n(M),E=e("rRSO"),h=e.n(E),y=e("v1RS"),R=e.n(y),x=e("Me5i"),l=e.n(x),o=e("54ue"),v=e.n(o),f=e("OyEV"),p={};p.styleTagTransform=v(),p.setAttributes=R(),p.insert=h().bind(null,"head"),p.domAPI=i(),p.insertStyleElement=l();var O=T()(f.Z,p),C=f.Z&&f.Z.locals?f.Z.locals:void 0,S={};function j(d){var Z=d.accountLogin,A=d.formData,B=d.stepDisabled,I=d.navigatorProps;return t.createElement("tiga-page",null,t.createElement("tiga-view",{class:"loginBox"},t.createElement(c.Z,{loginType:Z,ref:n.Z.ref("$morSaveRef",d),morTagName:"f-brand-card"}),t.createElement("tiga-view",{class:"get-mobile-group"},t.createElement(r.Z,{"data-prop":"account",value:A==null?void 0:A.account,label:"+86",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",clearable:!0,ref:n.Z.ref("$morSaveRef",d),morTagName:"t-input",onClear:n.Z.getEvent("inputChange",d),onChange:n.Z.getEvent("inputChange",d)})),t.createElement("tiga-view",{class:"login-button-area"},t.createElement(m.Z,{theme:"primary",size:"large",block:!0,disabled:B,ref:n.Z.ref("$morSaveRef",d),morTagName:"t-button",onTap:n.Z.getEvent("goStep2",d)},"\u4E0B\u4E00\u6B65"),t.createElement(m.Z,{"open-type":"getPhoneNumber",theme:"light",size:"large",block:!0,icon:"logo-wechat",ref:n.Z.ref("$morSaveRef",d),morTagName:"t-button",onGetphonenumber:n.Z.getEvent("getPhoneNumber",d)},"\u5FEB\u6377\u83B7\u53D6\u624B\u673A\u53F7"),t.createElement("tiga-view",{class:"register-can"},"\u5DF2\u6709\u8D26\u53F7\uFF1F",t.createElement(_.Z,{size:"small",theme:"primary",content:"\u7ACB\u5373\u767B\u5F55",suffixIcon:"jump",hover:!0,navigatorProps:I,ref:n.Z.ref("$morSaveRef",d),morTagName:"t-link"}))),t.createElement("tiga-view",{class:"user-policy-can"},t.createElement(s.Z,{block:!1,ref:n.Z.ref("$morSaveRef",d),morTagName:"t-radio",onChange:n.Z.getEvent("onChangeOfRead",d)},"\u6211\u5DF2\u9605\u8BFB\u5E76\u63A5\u53D7"),t.createElement("p",{className:"agree-p",onTap:n.Z.getEvent("agreeUser",d)},"\u300A\u670D\u52A1\u534F\u8BAE\u300B"),t.createElement("p",null,"\u548C"),t.createElement("p",{className:"agree-p",onTap:n.Z.getEvent("agreePrivacy",d)},"\u300A\u9690\u79C1\u653F\u7B56\u300B"))))}var L=!0},GRTk:function(u,a,e){e.r(a),e.d(a,{default:function(){return x}});var t=e("6Ydh"),n=e("DajF"),c=e("MM43"),g=e("4kMG"),r=e("8mQb"),m=e("bmIf"),_=e("tTth"),s=e("8j+p"),P=e("mXGw"),D=e("20uZ"),T=e("no9y"),M=e("yF2H").D4,i=e("UtkT").ik,E=e("7weB");M({data:{formData:{account:""},accountLogin:"\u624B\u673A\u53F7\u6CE8\u518C",stepDisabled:!0,readedPolicy:!1,navigatorProps:{url:"/pages/usercenter/login/account/index"}},changEye:function(){this.setData({showPassword:!this.data.showPassword})},inputChange:function(o){var v=o.currentTarget.dataset.prop,f=o.detail.value;this.data.formData[v]=f;var p=this.getVerificationCode(f);f.length>11&&i.showToast({title:"\u624B\u673A\u53F7\u7801\u4E0D\u6B63\u786E"}),p?this.setData({stepDisabled:!1}):this.setData({stepDisabled:!0}),this.setData({formData:this.data.formData})},goStep2:function(){var o=this.data.readedPolicy;if(o){var v=this.data.formData.account;i.navigateTo({url:"/pages/usercenter/code/index?account=".concat(v,"&operate=register")})}else i.showToast({title:"\u8BF7\u5148\u9605\u8BFB \u670D\u52A1\u534F\u8BAE\u548C\u9690\u79C1\u653F\u7B56"})},onLoad:function(){},onShow:function(){},getPhoneNumber:function(o){var v=this,f,p="[zy]getPhoneNumber",O=o.detail,C=O.code,S=O.errMsg,j=O.iv,L=O.encryptedData;if(console.log(p,C,o,S),!((f=this.data)===null||f===void 0)&&f.readedPolicy){var d=this.data.formData.account;S.startsWith("getPhoneNumber:fail ")?i.showModal({title:"\u83B7\u53D6\u5931\u8D25",showCancel:!1,content:S,success:function(A){}}):i.showModal({title:"\u63D0\u793A",showCancel:!1,content:"\u540C\u610F\u6388\u6743",success:function(A){var B,I=((B=getApp().globalData)===null||B===void 0?void 0:B.session)||{},W=I.openid,K=I.unionid;(0,T.Sj)({code:C,openid:W,unionid:K}).then(function(U){U?(v.data.formData.account=U,v.setData({formData:v.data.formData,stepDisabled:!1})):i.showToast({title:"\u5FAE\u4FE1\u5FEB\u6377\u83B7\u53D6\u624B\u673A\u53F7\u5931\u8D25"})})}})}else{i.showToast({title:"\u8BF7\u5148\u9605\u8BFB \u670D\u52A1\u534F\u8BAE\u548C\u9690\u79C1\u653F\u7B56"});return}},onChangeOfRead:function(o){this.setData({readedPolicy:o.detail.checked})},agreeUser:function(o){return i.showToast({title:"agreeUser"}),!1},agreePrivacy:function(o){return i.showToast({title:"agreePrivacy"}),!1},getVerificationCode:function(o){var v=/^1[3-9][0-9]{9}$/,f=v.test(o);return f}},"w");var h=D.Z.Page(E,D.Z.mergeConfig(e("v9Xe"),e("KTxX")));function y(l,o,v){return o=(0,r.Z)(o),(0,c.Z)(l,(0,g.Z)()?Reflect.construct(o,v||[],(0,r.Z)(l).constructor):o.apply(l,v))}var R=function(l){function o(){return(0,t.Z)(this,o),y(this,o,arguments)}return(0,m.Z)(o,l),(0,n.Z)(o,[{key:"render",value:function(){return P.createElement("tiga-page-host",{"show-back":"false","show-header":"true"},P.createElement(h,null))}}])}(P.Component),x=R},UFQt:function(u,a,e){var t=e("Ba9y"),n=e.n(t),c=e("Ai0b"),g=e.n(c),r=g()(n());r.push([u.id,`.container {
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
}`,""]),a.Z=r},UXfU:function(u,a,e){var t=e("Ba9y"),n=e.n(t),c=e("Ai0b"),g=e.n(c),r=g()(n());r.push([u.id,`.brand-card {
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
}`,""]),a.Z=r},OyEV:function(u,a,e){var t=e("Ba9y"),n=e.n(t),c=e("Ai0b"),g=e.n(c),r=g()(n());r.push([u.id,`.loginBox {
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
}`,""]),a.Z=r},FyQJ:function(u,a,e){var t=e("eMCs"),n=e.n(t),c=e("vRpg"),g=e.n(c),r=e("rRSO"),m=e.n(r),_=e("v1RS"),s=e.n(_),P=e("Me5i"),D=e.n(P),T=e("54ue"),M=e.n(T),i=e("UFQt"),E={};E.styleTagTransform=M(),E.setAttributes=s(),E.insert=m().bind(null,"head"),E.domAPI=g(),E.insertStyleElement=D();var h=n()(i.Z,E),y=i.Z&&i.Z.locals?i.Z.locals:void 0},v9Xe:function(u){u.exports=JSON.parse('{"pages":["pages/usercenter/login/account/index","pages/line/index","pages/usercenter/code/index","pages/usercenter/login/pass/index","pages/usercenter/reset/account/index","pages/usercenter/reset/reset/index","pages/usercenter/register/account/index","pages/usercenter/register/pass/index","pages/usercenter/register/mail/index","pages/usercenter/register/finish/index","pages/logs/logs","pages/index/index"],"usingComponents":{"navigation-bar":"/components/navigation-bar/navigation-bar","ec-canvas":"/ec-canvas/ec-canvas","t-icon":"tdesign-miniprogram/icon/icon","t-loading":"tdesign-miniprogram/loading/loading","t-popup":"tdesign-miniprogram/popup/popup","t-cell-group":"tdesign-miniprogram/cell-group/cell-group","t-cell":"tdesign-miniprogram/cell/cell","t-input":"tdesign-miniprogram/input/input","t-button":"tdesign-miniprogram/button/button","t-radio":"tdesign-miniprogram/radio/radio","t-link":"tdesign-miniprogram/link/link","t-cascader":"tdesign-miniprogram/cascader/cascader","t-toast":"tdesign-miniprogram/toast/toast"},"resolveAlias":{"config/*":"config/*","services/*":"services/*","model/*":"model/*","utils/*":"utils/*","components/*":"components/*","tdesign-miniprogram/*":"miniprogram_npm/tdesign-miniprogram/*"},"window":{"backgroundTextStyle":"light","titleBarColor":"#fff","defaultTitle":"Weixin"},"sitemapLocation":"sitemap.json"}')},dfl2:function(u){u.exports=JSON.parse('{"component":true,"usingComponents":{}}')},KTxX:function(u){u.exports=JSON.parse('{"usingComponents":{"f-brand-card":"../../components/brand-card/index"}}')}}]);

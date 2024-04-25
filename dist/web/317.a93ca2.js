"use strict";(window.mor_modules=window.mor_modules||[]).push([[317],{"8zL7":function(d,i,e){var t=e("20uZ"),n=e("yF2H").LM,m=e("UtkT").ik,c=e("Ie6z");n({properties:{loginType:{type:String}},data:{},methods:{onClickBrand:function(){m.showModal({title:"zy2",content:"\u70B9\u51FB\u4E86\u54C1\u724C\u5361\u7247"})}}},"w"),i.Z=t.Z.Component(c,t.Z.mergeConfig(e("v9Xe"),e("dfl2")))},Ie6z:function(d,i,e){e.r(i),e.d(i,{$templates:function(){return g},defaultRender:function(){return E},isComplexComponents:function(){return f}});var t=e("mXGw"),n=e("20uZ"),m=e("eMCs"),c=e.n(m),l=e("vRpg"),h=e.n(l),P=e("rRSO"),O=e.n(P),p=e("v1RS"),D=e.n(p),T=e("Me5i"),M=e.n(T),s=e("54ue"),v=e.n(s),y=e("UXfU"),_={};_.styleTagTransform=v(),_.setAttributes=D(),_.insert=O().bind(null,"head"),_.domAPI=h(),_.insertStyleElement=M();var R=c()(y.Z,_),x=y.Z&&y.Z.locals?y.Z.locals:void 0,r=e("hmPl"),o=e("2pVW"),u=e("aMrw"),g={};function E(C){var A=C.loginType,S=C.$id;return t.createElement("tiga-view",{class:"brand-card"+(" 5e78e86874c74d2cac80fec22b6aab7c"+(typeof index!="undefined"?index:"")+(" comp-id-"+S))},t.createElement("tiga-image",{class:"logo",src:"./style/logo2.535638894ed99b17b41d.svg"}),t.createElement("tiga-text",{class:"logo-title"},n.Z.getString(A)),n.Z.registEvents([{name:"tap",event:"onClickBrand",catch:!1}],C,"5e78e86874c74d2cac80fec22b6aab7c"+(typeof index!="undefined"?index:"")))}var f=!0},"4LDn":function(d,i,e){e.r(i),e.d(i,{$templates:function(){return S},defaultRender:function(){return Z},isComplexComponents:function(){return U}});var t=e("mXGw"),n=e("20uZ"),m=e("8zL7"),c=e("HRO2"),l=e("aMrw"),h=e("BYLK"),P=e("uvno"),O=e("bYdK"),p=e("eIMC"),D=e("FyQJ"),T=e("eMCs"),M=e.n(T),s=e("vRpg"),v=e.n(s),y=e("rRSO"),_=e.n(y),R=e("v1RS"),x=e.n(R),r=e("Me5i"),o=e.n(r),u=e("54ue"),g=e.n(u),E=e("TY0W"),f={};f.styleTagTransform=g(),f.setAttributes=x(),f.insert=_().bind(null,"head"),f.domAPI=v(),f.insertStyleElement=o();var C=M()(E.Z,f),A=E.Z&&E.Z.locals?E.Z.locals:void 0,S={};function Z(a){var I=a.accountLogin,B=a.formData,j=a.$id,L=a.stepDisabled,W=a.navigatorProps;return t.createElement("tiga-page",null,t.createElement("tiga-view",{class:"loginBox"},t.createElement(m.Z,{loginType:I,ref:n.Z.ref("$morSaveRef",a),morTagName:"f-brand-card"}),t.createElement("tiga-view",{class:"get-mobile-group"},t.createElement(h.Z,{"data-prop":"account",value:B==null?void 0:B.account,label:"+86",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",clearable:!0,ref:n.Z.ref("$morSaveRef",a),morTagName:"t-input",onClear:n.Z.getEvent("inputChange",a),onChange:n.Z.getEvent("inputChange",a)})),t.createElement("tiga-view",{class:"login-button-area"},t.createElement("tiga-button",{type:"button",class:" c5aa662da61a45e3819d043affd484e0"+(typeof index!="undefined"?index:"")+(" comp-id-"+j)},"zy-button",n.Z.registEvents([{name:"tap",event:"goLine",catch:!1}],a,"c5aa662da61a45e3819d043affd484e0"+(typeof index!="undefined"?index:""))),t.createElement(P.Z,{theme:"primary",size:"large",block:!0,disabled:L,ref:n.Z.ref("$morSaveRef",a),morTagName:"t-button",onTap:n.Z.getEvent("goStep2",a)},"\u4E0B\u4E00\u6B65"),t.createElement(P.Z,{"open-type":"getPhoneNumber",theme:"light",size:"large",block:!0,icon:"logo-wechat",ref:n.Z.ref("$morSaveRef",a),morTagName:"t-button",onGetphonenumber:n.Z.getEvent("getPhoneNumber",a)},"\u5FAE\u4FE1\u5FEB\u6377\u767B\u5F55"),t.createElement("tiga-view",{class:"register-can"},"\u6CA1\u6709\u8D26\u53F7\uFF1F",t.createElement(O.Z,{size:"small",theme:"primary",content:"\u7ACB\u5373\u6CE8\u518C",suffixIcon:"jump",hover:!0,navigatorProps:W,ref:n.Z.ref("$morSaveRef",a),morTagName:"t-link"}))),t.createElement("tiga-view",{class:"user-policy-can"},t.createElement(p.Z,{block:!1,ref:n.Z.ref("$morSaveRef",a),morTagName:"t-radio",onChange:n.Z.getEvent("onChangeOfRead",a)},"\u6211\u5DF2\u9605\u8BFB\u5E76\u63A5\u53D7"),t.createElement("p",{className:"agree-p",onTap:n.Z.getEvent("agreeUser",a)},"\u300A\u670D\u52A1\u534F\u8BAE\u300B"),t.createElement("p",null,"\u548C"),t.createElement("p",{className:"agree-p",onTap:n.Z.getEvent("agreePrivacy",a)},"\u300A\u9690\u79C1\u653F\u7B56\u300B"))))}var U=!0},wKkB:function(d,i,e){e.r(i),e.d(i,{default:function(){return x}});var t=e("6Ydh"),n=e("DajF"),m=e("MM43"),c=e("4kMG"),l=e("8mQb"),h=e("bmIf"),P=e("tTth"),O=e("8j+p"),p=e("mXGw"),D=e("20uZ"),T=e("gmp5"),M=e("yF2H").D4,s=e("UtkT").ik,v=e("4LDn");M({data:{formData:{account:""},showPassword:!1,accountLogin:"\u8D26\u53F7\u767B\u5F55",stepDisabled:!0,readedPolicy:!1,navigatorProps:{url:"/pages/usercenter/register/account/index"}},changEye:function(){this.setData({showPassword:!this.data.showPassword})},inputChange:function(o){var u=o.currentTarget.dataset.prop,g=o.detail.value;this.data.formData[u]=g;var E=this.getVerificationCode(g);g.length>11&&s.showToast({title:"\u624B\u673A\u53F7\u7801\u4E0D\u6B63\u786E"}),E?this.setData({stepDisabled:!1}):this.setData({stepDisabled:!0}),this.setData({formData:this.data.formData})},goLine:function(){this.goStep2(),s.navigateTo({url:"/pages/line/index"})},goStep2:function(){var o=this.data.readedPolicy;if(o){var u=this.data.formData.account;s.navigateTo({url:"/pages/usercenter/code/index?account=".concat(u,"&operate=login")})}else s.showToast({title:"\u8BF7\u5148\u9605\u8BFB \u670D\u52A1\u534F\u8BAE\u548C\u9690\u79C1\u653F\u7B56"})},onLoad:function(){},onShow:function(){},getPhoneNumber:function(o){var u,g,E="[zy]getPhoneNumber",f=o.detail,C=f.code,A=f.errMsg,S=f.iv,Z=f.encryptedData;if(console.log(E,C,o,A,S,Z),!((u=this.data)===null||u===void 0)&&u.readedPolicy){var U=this.data.formData.account;if(A.startsWith("getPhoneNumber:fail "))s.showModal({title:"\u83B7\u53D6\u5931\u8D25",showCancel:!1,content:A,success:function(L){}});else{console.log(E,"getPhoneNumber code success");var a=((g=getApp().globalData)===null||g===void 0?void 0:g.session)||{},I=a.openid,B=a.unionid;(0,T.EG)({code:C,openid:I,unionid:B}).then(function(j){j?s.showModal({title:"\u63D0\u793A",showCancel:!1,content:"\u5FEB\u6377\u767B\u5F55\u6210\u529F",success:function(W){s.switchTab({url:"/pages/cart/index"})}}):s.showToast({title:"\u5FAE\u4FE1\u5FEB\u6377\u767B\u5F55\u5931\u8D25"})})}}else{s.showToast({title:"\u8BF7\u5148\u9605\u8BFB \u670D\u52A1\u534F\u8BAE\u548C\u9690\u79C1\u653F\u7B56"});return}},onChangeOfRead:function(o){this.setData({readedPolicy:o.detail.checked})},agreeUser:function(o){return s.showToast({title:"agreeUser"}),!1},agreePrivacy:function(o){return s.showToast({title:"agreePrivacy"}),!1},getVerificationCode:function(o){var u=/^1[3-9][0-9]{9}$/,g=u.test(o);return g}},"w");var y=D.Z.Page(v,D.Z.mergeConfig(e("v9Xe"),e("VcjK")));function _(r,o,u){return o=(0,l.Z)(o),(0,m.Z)(r,(0,c.Z)()?Reflect.construct(o,u||[],(0,l.Z)(r).constructor):o.apply(r,u))}var R=function(r){function o(){return(0,t.Z)(this,o),_(this,o,arguments)}return(0,h.Z)(o,r),(0,n.Z)(o,[{key:"render",value:function(){return p.createElement("tiga-page-host",{"show-back":"false","show-header":"true"},p.createElement(y,null))}}])}(p.Component),x=R},UFQt:function(d,i,e){var t=e("Ba9y"),n=e.n(t),m=e("Ai0b"),c=e.n(m),l=c()(n());l.push([d.id,`.container {
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
}`,""]),i.Z=l},UXfU:function(d,i,e){var t=e("Ba9y"),n=e.n(t),m=e("Ai0b"),c=e.n(m),l=c()(n());l.push([d.id,`.brand-card {
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
}`,""]),i.Z=l},TY0W:function(d,i,e){var t=e("Ba9y"),n=e.n(t),m=e("Ai0b"),c=e.n(m),l=c()(n());l.push([d.id,`.loginBox {
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
}`,""]),i.Z=l},FyQJ:function(d,i,e){var t=e("eMCs"),n=e.n(t),m=e("vRpg"),c=e.n(m),l=e("rRSO"),h=e.n(l),P=e("v1RS"),O=e.n(P),p=e("Me5i"),D=e.n(p),T=e("54ue"),M=e.n(T),s=e("UFQt"),v={};v.styleTagTransform=M(),v.setAttributes=O(),v.insert=h().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=D();var y=n()(s.Z,v),_=s.Z&&s.Z.locals?s.Z.locals:void 0},v9Xe:function(d){d.exports=JSON.parse('{"pages":["pages/usercenter/login/account/index","pages/line/index","pages/usercenter/code/index","pages/usercenter/login/pass/index","pages/usercenter/reset/account/index","pages/usercenter/reset/reset/index","pages/usercenter/register/account/index","pages/usercenter/register/pass/index","pages/usercenter/register/mail/index","pages/usercenter/register/finish/index","pages/logs/logs","pages/index/index"],"usingComponents":{"navigation-bar":"/components/navigation-bar/navigation-bar","ec-canvas":"/ec-canvas/ec-canvas","t-icon":"tdesign-miniprogram/icon/icon","t-loading":"tdesign-miniprogram/loading/loading","t-popup":"tdesign-miniprogram/popup/popup","t-cell-group":"tdesign-miniprogram/cell-group/cell-group","t-cell":"tdesign-miniprogram/cell/cell","t-input":"tdesign-miniprogram/input/input","t-button":"tdesign-miniprogram/button/button","t-radio":"tdesign-miniprogram/radio/radio","t-link":"tdesign-miniprogram/link/link","t-cascader":"tdesign-miniprogram/cascader/cascader","t-toast":"tdesign-miniprogram/toast/toast"},"resolveAlias":{"config/*":"config/*","services/*":"services/*","model/*":"model/*","utils/*":"utils/*","components/*":"components/*","tdesign-miniprogram/*":"miniprogram_npm/tdesign-miniprogram/*"},"window":{"backgroundTextStyle":"light","titleBarColor":"#fff","defaultTitle":"Weixin"},"sitemapLocation":"sitemap.json"}')},dfl2:function(d){d.exports=JSON.parse('{"component":true,"usingComponents":{}}')},VcjK:function(d){d.exports=JSON.parse('{"usingComponents":{"f-brand-card":"../../components/brand-card/index"}}')}}]);

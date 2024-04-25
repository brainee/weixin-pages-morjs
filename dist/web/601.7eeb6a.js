"use strict";(window.mor_modules=window.mor_modules||[]).push([[601],{YBZf:function(g,d,e){e.d(d,{L:function(){return o}});var r=function(){var l=getCurrentPages(),a=l[l.length-1],E=a.route;return E},o=function(){var l=getCurrentPages(),a=l[l.length-1],E=a.options;return E}},vAun:function(g,d,e){e.r(d),e.d(d,{$templates:function(){return j},defaultRender:function(){return I},isComplexComponents:function(){return L}});var r=e("mXGw"),o=e("20uZ"),m=e("BYLK"),l=e("aMrw"),a=e("uvno"),E=e("FyQJ"),x=e("eMCs"),A=e.n(x),P=e("vRpg"),y=e.n(P),D=e("rRSO"),T=e.n(D),h=e("v1RS"),f=e.n(h),M=e("Me5i"),O=e.n(M),R=e("54ue"),Z=e.n(R),C=e("vnky"),u={};u.styleTagTransform=Z(),u.setAttributes=f(),u.insert=T().bind(null,"head"),u.domAPI=y(),u.insertStyleElement=O();var F=A()(C.Z,u),K=C.Z&&C.Z.locals?C.Z.locals:void 0,j={};function I(t){var s=t.mainTitle,n=t.$id,i=t.formData,c=t.showPassword,_=t.operate,p=t.stepDisabled;return r.createElement("tiga-page",null,r.createElement("tiga-view",{class:"container"},r.createElement("tiga-view",{class:"main-title"+(" 1dd6de2c0efd4d5591d977050e1f6f4d"+(typeof index!="undefined"?index:"")+(" comp-id-"+n))},o.Z.getString(s),o.Z.registEvents([{name:"tap",event:"test",catch:!1}],t,"1dd6de2c0efd4d5591d977050e1f6f4d"+(typeof index!="undefined"?index:""))),r.createElement("tiga-view",{class:"sub-title"},"\u5BC6\u7801\u4EC5\u53EF\u7531\u6570\u5B57\u3001\u82F1\u6587\u5B57\u6BCD\u6216\u82F1\u6587\u7B26\u53F7\u7EC4\u6210\uFF0C\u4E14\u9700\u5305\u542B\u5176\u4E2D\u81F3\u5C11\u4E24\u79CD\u7C7B\u578B\uFF0C\u957F\u5EA6\u4E0D\u5C11\u4E8E 8 \u4E2A\u5B57\u7B26"),r.createElement("tiga-view",{class:"code-box"},r.createElement(m.Z,{"data-prop":"password",value:i==null?void 0:i.password,prefixIcon:"lock-on",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",suffixIcon:{name:c?"browse":"browse-off"},type:c?"":"password",clearable:!0,ref:o.Z.ref("$morSaveRef",t),morTagName:"t-input",onClear:o.Z.getEvent("inputChange",t),onClick:o.Z.getEvent("changEye",t),onChange:o.Z.getEvent("inputChange",t)}),r.createElement(m.Z,{style:"margin-top: 10rpx;","data-prop":"password2",value:i==null?void 0:i.password2,prefixIcon:"lock-on",placeholder:"\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801",suffixIcon:{name:c?"browse":"browse-off"},type:c?"":"password",clearable:!0,ref:o.Z.ref("$morSaveRef",t),morTagName:"t-input",onClear:o.Z.getEvent("inputChange2",t),onClick:o.Z.getEvent("changEye",t),onChange:o.Z.getEvent("inputChange2",t)})),r.createElement("tiga-view",{class:"login-button-area"},_=="reset"?r.createElement(a.Z,{theme:"primary",size:"large",block:!0,disabled:p,ref:o.Z.ref("$morSaveRef",t),morTagName:"t-button",onTap:o.Z.getEvent("resetPass",t)},"\u786E\u8BA4"):!1,_=="register"?r.createElement(a.Z,{theme:"primary",size:"large",block:!0,disabled:p,ref:o.Z.ref("$morSaveRef",t),morTagName:"t-button",onTap:o.Z.getEvent("resetPass",t)},"\u4E0B\u4E00\u6B65"):!1)))}var L=!0},"/ZzV":function(g,d,e){e.r(d),e.d(d,{default:function(){return L}});var r=e("6Ydh"),o=e("DajF"),m=e("MM43"),l=e("4kMG"),a=e("8mQb"),E=e("bmIf"),x=e("tTth"),A=e("8j+p"),P=e("mXGw"),y=e("kGfE"),D=e("20uZ"),T=e("2GZr"),h=e("YBZf"),f=e("/cI1"),M=e("UtkT").ik;function O(t){var s="[zy]resetPasswordService";return console.log(s,"service start",t),(0,f.c0)(t).then(function(n){if(console.log(s,"resp=",n),n!=null&&n.success)return!0;n!=null&&n.errorMessage?M.showToast({title:n==null?void 0:n.errorMessage}):M.showToast({title:"\u91CD\u7F6E\u5931\u8D25"})})}var R=e("gmp5"),Z=e("IzCe"),C=e("yF2H").D4,u=e("UtkT").ik,F=e("vAun");C({data:{account:"",token:"",showPassword:!1,formData:{},stepDisabled:!0,operate:"",mainTitle:"\u8BBE\u7F6E\u65B0\u5BC6\u7801"},onLoad:function(s){var n=(0,h.L)()||{},i=n.account,c=n.token,_=n.operate;if(console.log("[zy]got from last page:account",i),!c){u.showToast({title:"\u9A8C\u8BC1\u7801\u9519\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u5C1D\u8BD5"}),u.navigateBack();return}var p=this.data.mainTitle;_=="register"?p="\u8BBE\u7F6E\u767B\u5F55\u5BC6\u7801":_=="reset"&&(p="\u8BBE\u7F6E\u65B0\u5BC6\u7801"),this.setData({account:i,token:c,operate:_,mainTitle:p})},changEye:function(){this.setData({showPassword:!this.data.showPassword})},inputChange:function(s){var n=s.currentTarget.dataset.prop,i=s.detail.value;this.setData({stepDisabled:!i}),this.data.formData[n]=i,this.setData({formData:this.data.formData})},inputChange2:function(s){var n=s.currentTarget.dataset.prop,i=s.detail.value;this.setData({stepDisabled:!i}),this.data.formData[n]=i,this.setData({formData:this.data.formData})},resetPass:function(s){var n;return(0,T.__awaiter)(this,void 0,void 0,(0,y.Z)().mark(function i(){var c,_,p,w,b,B,U,W,z;return(0,y.Z)().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:if(c=this.data,_=c.account,p=c.token,w=c.operate,b=this.data.formData.password,B=getApp(),U=(n=B==null?void 0:B.globalData)===null||n===void 0?void 0:n.session,W=U.openid,z=U.unionid,_){v.next=7;break}return u.showToast({icon:"none",title:"\u8D26\u53F7\u4E0D\u80FD\u4E3A\u7A7A"}),v.abrupt("return");case 7:if(b){v.next=10;break}return u.showToast({icon:"none",title:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A"}),v.abrupt("return");case 10:if(W){v.next=15;break}return u.showToast({icon:"none",title:"\u9700\u8981\u5148\u767B\u5F55\u5C0F\u7A0B\u5E8F"}),v.next=14,(0,R.oF)();case 14:return v.abrupt("return");case 15:O({mobile:_,mobileprefix:Z.vc.default_mobile_prefix,password:b,token:p,operation:w,openid:W,unionid:z}).then(function(X){X&&u.showModal({title:"\u91CD\u7F6E\u6210\u529F",content:"",confirmText:"\u53BB\u767B\u5F55",showCancel:!1,success:function(S){S!=null&&S.cancel,S.confirm&&u.navigateTo({url:"/pages/usercenter/login/account/index"})}})});case 16:case"end":return v.stop()}},i,this)}))},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}},"w");var K=D.Z.Page(F,D.Z.mergeConfig(e("v9Xe"),e("XV8P")));function j(t,s,n){return s=(0,a.Z)(s),(0,m.Z)(t,(0,l.Z)()?Reflect.construct(s,n||[],(0,a.Z)(t).constructor):s.apply(t,n))}var I=function(t){function s(){return(0,r.Z)(this,s),j(this,s,arguments)}return(0,E.Z)(s,t),(0,o.Z)(s,[{key:"render",value:function(){return P.createElement("tiga-page-host",{"show-back":"false","show-header":"true"},P.createElement(K,null))}}])}(P.Component),L=I},UFQt:function(g,d,e){var r=e("Ba9y"),o=e.n(r),m=e("Ai0b"),l=e.n(m),a=l()(o());a.push([g.id,`.container {
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
}`,""]),d.Z=a},vnky:function(g,d,e){var r=e("Ba9y"),o=e.n(r),m=e("Ai0b"),l=e.n(m),a=l()(o());a.push([g.id,`tiga-page {
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
}`,""]),d.Z=a},FyQJ:function(g,d,e){var r=e("eMCs"),o=e.n(r),m=e("vRpg"),l=e.n(m),a=e("rRSO"),E=e.n(a),x=e("v1RS"),A=e.n(x),P=e("Me5i"),y=e.n(P),D=e("54ue"),T=e.n(D),h=e("UFQt"),f={};f.styleTagTransform=T(),f.setAttributes=A(),f.insert=E().bind(null,"head"),f.domAPI=l(),f.insertStyleElement=y();var M=o()(h.Z,f),O=h.Z&&h.Z.locals?h.Z.locals:void 0},v9Xe:function(g){g.exports=JSON.parse('{"pages":["pages/usercenter/login/account/index","pages/line/index","pages/usercenter/code/index","pages/usercenter/login/pass/index","pages/usercenter/reset/account/index","pages/usercenter/reset/reset/index","pages/usercenter/register/account/index","pages/usercenter/register/pass/index","pages/usercenter/register/mail/index","pages/usercenter/register/finish/index","pages/logs/logs","pages/index/index"],"usingComponents":{"navigation-bar":"/components/navigation-bar/navigation-bar","ec-canvas":"/ec-canvas/ec-canvas","t-icon":"tdesign-miniprogram/icon/icon","t-loading":"tdesign-miniprogram/loading/loading","t-popup":"tdesign-miniprogram/popup/popup","t-cell-group":"tdesign-miniprogram/cell-group/cell-group","t-cell":"tdesign-miniprogram/cell/cell","t-input":"tdesign-miniprogram/input/input","t-button":"tdesign-miniprogram/button/button","t-radio":"tdesign-miniprogram/radio/radio","t-link":"tdesign-miniprogram/link/link","t-cascader":"tdesign-miniprogram/cascader/cascader","t-toast":"tdesign-miniprogram/toast/toast"},"resolveAlias":{"config/*":"config/*","services/*":"services/*","model/*":"model/*","utils/*":"utils/*","components/*":"components/*","tdesign-miniprogram/*":"miniprogram_npm/tdesign-miniprogram/*"},"window":{"backgroundTextStyle":"light","titleBarColor":"#fff","defaultTitle":"Weixin"},"sitemapLocation":"sitemap.json"}')},XV8P:function(g){g.exports=JSON.parse('{"usingComponents":{}}')}}]);

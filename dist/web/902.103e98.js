"use strict";(window.mor_modules=window.mor_modules||[]).push([[902],{no9y:function(g,d,e){e.d(d,{Sj:function(){return r},cq:function(){return u},gM:function(){return c}});var o=e("/cI1"),n=e("UtkT").ik;function c(l){var f="[zy]registerService";return console.log(f,"service start",l),(0,o.z2)(l).then(function(s){if(console.log(f,"resp=",s),s!=null&&s.success)return!0;s!=null&&s.errorMessage?n.showToast({title:s==null?void 0:s.errorMessage}):n.showToast({title:"\u6CE8\u518C\u5931\u8D25"})})}function u(l){var f="[zy]trialService";return console.log(f,"service start",l),(0,o.FD)(l).then(function(s){if(console.log(f,"resp=",s),s)return s})}function r(l){var f="[zy]getPhoneService";return console.log(f,"service start",l),(0,o.Dj)(l).then(function(s){return s==null?void 0:s.mobile})}},YBZf:function(g,d,e){e.d(d,{L:function(){return n}});var o=function(){var u=getCurrentPages(),r=u[u.length-1],l=r.route;return l},n=function(){var u=getCurrentPages(),r=u[u.length-1],l=r.options;return l}},FuBY:function(g,d,e){e.r(d),e.d(d,{$templates:function(){return b},defaultRender:function(){return i},isComplexComponents:function(){return a}});var o=e("mXGw"),n=e("20uZ"),c=e("BYLK"),u=e("aMrw"),r=e("uvno"),l=e("FyQJ"),f=e("eMCs"),s=e.n(f),C=e("vRpg"),T=e.n(C),M=e("rRSO"),B=e.n(M),P=e("v1RS"),p=e.n(P),A=e("Me5i"),R=e.n(A),I=e("54ue"),h=e.n(I),S=e("CL3G"),y={};y.styleTagTransform=h(),y.setAttributes=p(),y.insert=B().bind(null,"head"),y.domAPI=T(),y.insertStyleElement=R();var W=s()(S.Z,y),F=S.Z&&S.Z.locals?S.Z.locals:void 0,b={};function i(t){var _=t.mainTitle,D=t.$id,m=t.formData,E=t.showPassword,O=t.operate,x=t.stepDisabled;return o.createElement("tiga-page",null,o.createElement("tiga-view",{class:"container"},o.createElement("tiga-view",{class:"main-title"+(" a52c5ae9f704469ab579b5c5152db10a"+(typeof index!="undefined"?index:"")+(" comp-id-"+D))},n.Z.getString(_),n.Z.registEvents([{name:"tap",event:"test",catch:!1}],t,"a52c5ae9f704469ab579b5c5152db10a"+(typeof index!="undefined"?index:""))),o.createElement("tiga-view",{class:"sub-title"},"\u5BC6\u7801\u4EC5\u53EF\u7531\u6570\u5B57\u3001\u82F1\u6587\u5B57\u6BCD\u6216\u82F1\u6587\u7B26\u53F7\u7EC4\u6210\uFF0C\u4E14\u9700\u5305\u542B\u5176\u4E2D\u81F3\u5C11\u4E24\u79CD\u7C7B\u578B\uFF0C\u957F\u5EA6\u4E0D\u5C11\u4E8E 8 \u4E2A\u5B57\u7B26"),o.createElement("tiga-view",{class:"code-box"},o.createElement(c.Z,{"data-prop":"password",value:m==null?void 0:m.password,prefixIcon:"lock-on",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",suffixIcon:{name:E?"browse":"browse-off"},type:E?"":"password",clearable:!0,ref:n.Z.ref("$morSaveRef",t),morTagName:"t-input",onClear:n.Z.getEvent("inputChange",t),onClick:n.Z.getEvent("changEye",t),onChange:n.Z.getEvent("inputChange",t)}),o.createElement(c.Z,{style:"margin-top: 10rpx;","data-prop":"password2",value:m==null?void 0:m.password2,prefixIcon:"lock-on",placeholder:"\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801",suffixIcon:{name:E?"browse":"browse-off"},type:E?"":"password",clearable:!0,ref:n.Z.ref("$morSaveRef",t),morTagName:"t-input",onClear:n.Z.getEvent("inputChange2",t),onClick:n.Z.getEvent("changEye",t),onChange:n.Z.getEvent("inputChange2",t)})),o.createElement("tiga-view",{class:"login-button-area"},O=="reset"?o.createElement(r.Z,{theme:"primary",size:"large",block:!0,disabled:x,ref:n.Z.ref("$morSaveRef",t),morTagName:"t-button",onTap:n.Z.getEvent("resetPass",t)},"\u786E\u8BA4"):!1,O=="register"?o.createElement(r.Z,{theme:"primary",size:"large",block:!0,disabled:x,ref:n.Z.ref("$morSaveRef",t),morTagName:"t-button",onTap:n.Z.getEvent("setPass",t)},"\u4E0B\u4E00\u6B65"):!1)))}var a=!0},H8DI:function(g,d,e){e.r(d),e.d(d,{default:function(){return b}});var o=e("6Ydh"),n=e("DajF"),c=e("MM43"),u=e("4kMG"),r=e("8mQb"),l=e("bmIf"),f=e("tTth"),s=e("8j+p"),C=e("mXGw"),T=e("kGfE"),M=e("20uZ"),B=e("2GZr"),P=e("YBZf"),p=e("no9y"),A=e("gmp5"),R=e("IzCe"),I=e("yF2H").D4,h=e("UtkT").ik,S=e("FuBY");I({data:{account:"",token:"",showPassword:!1,formData:{},stepDisabled:!0,operate:"",mainTitle:"\u8BBE\u7F6E\u767B\u5F55\u5BC6\u7801"},onLoad:function(a){var t=(0,P.L)()||{},_=t.account,D=t.token,m=t.operate;if(console.log("[zy]got from last page:account",_),!D){h.showToast({title:"\u9A8C\u8BC1\u7801\u9519\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u5C1D\u8BD5"}),h.navigateBack();return}var E=this.data.mainTitle;m=="register"&&(E="\u8BBE\u7F6E\u767B\u5F55\u5BC6\u7801"),this.setData({account:_,token:D,operate:m,mainTitle:E})},changEye:function(){this.setData({showPassword:!this.data.showPassword})},inputChange:function(a){var t=a.currentTarget.dataset.prop,_=a.detail.value;this.setData({stepDisabled:!_}),this.data.formData[t]=_,this.setData({formData:this.data.formData})},inputChange2:function(a){var t=a.currentTarget.dataset.prop,_=a.detail.value;this.setData({stepDisabled:!_}),this.data.formData[t]=_,this.setData({formData:this.data.formData})},setPass:function(a){var t;return(0,B.__awaiter)(this,void 0,void 0,(0,T.Z)().mark(function _(){var D,m,E,O,x,j,K,Z,L,U,w;return(0,T.Z)().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:if(D=this.data,m=D.account,E=D.token,O=D.operate,x=this.data.formData,j=x.password,K=x.password2,Z=getApp(),L=(t=Z==null?void 0:Z.globalData)===null||t===void 0?void 0:t.session,U=L.openid,w=L.unionid,m){v.next=7;break}return h.showToast({icon:"none",title:"\u8D26\u53F7\u4E0D\u80FD\u4E3A\u7A7A"}),v.abrupt("return");case 7:if(j){v.next=10;break}return h.showToast({icon:"none",title:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A"}),v.abrupt("return");case 10:if(j==K){v.next=13;break}return h.showToast({icon:"none",title:"\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u81F4"}),v.abrupt("return");case 13:if(U){v.next=18;break}return h.showToast({icon:"none",title:"\u9700\u8981\u5148\u767B\u5F55\u5C0F\u7A0B\u5E8F"}),v.next=17,(0,A.oF)();case 17:return v.abrupt("return");case 18:(0,p.gM)({mobile:m,mobileprefix:R.vc.default_mobile_prefix,password:j,token:E,operation:O,openid:U,unionid:w}).then(function(z){z&&h.navigateTo({url:"/pages/usercenter/register/mail/index?account=".concat(m,"&operate=").concat(O)})});case 19:case"end":return v.stop()}},_,this)}))},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}},"w");var y=M.Z.Page(S,M.Z.mergeConfig(e("v9Xe"),e("8pSH")));function W(i,a,t){return a=(0,r.Z)(a),(0,c.Z)(i,(0,u.Z)()?Reflect.construct(a,t||[],(0,r.Z)(i).constructor):a.apply(i,t))}var F=function(i){function a(){return(0,o.Z)(this,a),W(this,a,arguments)}return(0,l.Z)(a,i),(0,n.Z)(a,[{key:"render",value:function(){return C.createElement("tiga-page-host",{"show-back":"false","show-header":"true"},C.createElement(y,null))}}])}(C.Component),b=F},UFQt:function(g,d,e){var o=e("Ba9y"),n=e.n(o),c=e("Ai0b"),u=e.n(c),r=u()(n());r.push([g.id,`.container {
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
}`,""]),d.Z=r},CL3G:function(g,d,e){var o=e("Ba9y"),n=e.n(o),c=e("Ai0b"),u=e.n(c),r=u()(n());r.push([g.id,`tiga-page {
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
}`,""]),d.Z=r},FyQJ:function(g,d,e){var o=e("eMCs"),n=e.n(o),c=e("vRpg"),u=e.n(c),r=e("rRSO"),l=e.n(r),f=e("v1RS"),s=e.n(f),C=e("Me5i"),T=e.n(C),M=e("54ue"),B=e.n(M),P=e("UFQt"),p={};p.styleTagTransform=B(),p.setAttributes=s(),p.insert=l().bind(null,"head"),p.domAPI=u(),p.insertStyleElement=T();var A=n()(P.Z,p),R=P.Z&&P.Z.locals?P.Z.locals:void 0},v9Xe:function(g){g.exports=JSON.parse('{"pages":["pages/usercenter/login/account/index","pages/line/index","pages/usercenter/code/index","pages/usercenter/login/pass/index","pages/usercenter/reset/account/index","pages/usercenter/reset/reset/index","pages/usercenter/register/account/index","pages/usercenter/register/pass/index","pages/usercenter/register/mail/index","pages/usercenter/register/finish/index","pages/logs/logs","pages/index/index"],"usingComponents":{"navigation-bar":"/components/navigation-bar/navigation-bar","ec-canvas":"/ec-canvas/ec-canvas","t-icon":"tdesign-miniprogram/icon/icon","t-loading":"tdesign-miniprogram/loading/loading","t-popup":"tdesign-miniprogram/popup/popup","t-cell-group":"tdesign-miniprogram/cell-group/cell-group","t-cell":"tdesign-miniprogram/cell/cell","t-input":"tdesign-miniprogram/input/input","t-button":"tdesign-miniprogram/button/button","t-radio":"tdesign-miniprogram/radio/radio","t-link":"tdesign-miniprogram/link/link","t-cascader":"tdesign-miniprogram/cascader/cascader","t-toast":"tdesign-miniprogram/toast/toast"},"resolveAlias":{"config/*":"config/*","services/*":"services/*","model/*":"model/*","utils/*":"utils/*","components/*":"components/*","tdesign-miniprogram/*":"miniprogram_npm/tdesign-miniprogram/*"},"window":{"backgroundTextStyle":"light","titleBarColor":"#fff","defaultTitle":"Weixin"},"sitemapLocation":"sitemap.json"}')},"8pSH":function(g){g.exports=JSON.parse('{"usingComponents":{}}')}}]);

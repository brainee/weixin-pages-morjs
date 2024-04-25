"use strict";(window.mor_modules=window.mor_modules||[]).push([[798],{arkN:function(o,r,e){e.r(r),e.d(r,{$templates:function(){return T},defaultRender:function(){return Z},isComplexComponents:function(){return B}});var t=e("mXGw"),n=e("20uZ"),u=e("eMCs"),d=e.n(u),l=e("vRpg"),E=e.n(l),A=e("rRSO"),O=e.n(A),_=e("v1RS"),y=e.n(_),C=e("Me5i"),m=e.n(C),b=e("54ue"),g=e.n(b),P=e("Aqv1"),p={};p.styleTagTransform=g(),p.setAttributes=y(),p.insert=O().bind(null,"head"),p.domAPI=E(),p.insertStyleElement=m();var R=d()(P.Z,p),f=P.Z&&P.Z.locals?P.Z.locals:void 0,s=e("hmPl"),I=e("aMrw"),T={};function Z(i){var L=i.extClass,U=i.ios,S=i.color,K=i.background,F=i.displayStyle,j=i.innerPaddingRight,W=i.safeAreaTop,w=i.leftWidth,a=i.back,c=i.homeButton,v=i.$id,h=i.$children,x=i.loading,M=i.title;return t.createElement("tiga-view",{class:"weui-navigation-bar "+L},t.createElement("tiga-view",{class:"weui-navigation-bar__inner "+(U?"ios":"android"),style:n.Z.createStyle("color: "+S+"; background: "+K+"; "+F+"; "+j+"; "+W+";")},t.createElement("tiga-view",{class:"weui-navigation-bar__left",style:n.Z.createStyle(w+";")},a||c?t.createElement(n.Z.Block,null,a?t.createElement(n.Z.Block,null,t.createElement("tiga-view",{class:"weui-navigation-bar__buttons weui-navigation-bar__buttons_goback"},t.createElement("tiga-view",{class:"weui-navigation-bar__btn_goback_wrapper"+(" fe508fb3418a45e6b061822635a43800"+(typeof index!="undefined"?index:"")+(" comp-id-"+v)),"hover-class":"weui-active","hover-stay-time":"100","aria-role":"button","aria-label":"\u8FD4\u56DE"},t.createElement("tiga-view",{class:"weui-navigation-bar__button weui-navigation-bar__btn_goback"}),n.Z.registEvents([{name:"tap",event:"back",catch:!1}],i,"fe508fb3418a45e6b061822635a43800"+(typeof index!="undefined"?index:""))))):!1,c?t.createElement(n.Z.Block,null,t.createElement("tiga-view",{class:"weui-navigation-bar__buttons weui-navigation-bar__buttons_home"},t.createElement("tiga-view",{class:"weui-navigation-bar__btn_home_wrapper"+(" 336d54be317c4dceb1ff579ad87acf52"+(typeof index!="undefined"?index:"")+(" comp-id-"+v)),"hover-class":"weui-active","aria-role":"button","aria-label":"\u9996\u9875"},t.createElement("tiga-view",{class:"weui-navigation-bar__button weui-navigation-bar__btn_home"}),n.Z.registEvents([{name:"tap",event:"home",catch:!1}],i,"336d54be317c4dceb1ff579ad87acf52"+(typeof index!="undefined"?index:""))))):!1):t.createElement(n.Z.Block,null,t.createElement(n.Z.Slot,{slots:h,name:"left"}))),t.createElement("tiga-view",{class:"weui-navigation-bar__center"},x?t.createElement("tiga-view",{class:"weui-navigation-bar__loading","aria-role":"alert"},t.createElement("tiga-view",{class:"weui-loading","aria-role":"img","aria-label":"\u52A0\u8F7D\u4E2D"})):!1,M?t.createElement(n.Z.Block,null,t.createElement("tiga-text",null,n.Z.getString(M+"2"))):t.createElement(n.Z.Block,null,t.createElement(n.Z.Slot,{slots:h,name:"center"}))),t.createElement("tiga-view",{class:"weui-navigation-bar__right"},t.createElement(n.Z.Slot,{slots:h,name:"right"}))))}var B=!0},GHZX:function(o,r,e){e.r(r),e.d(r,{$templates:function(){return j},defaultRender:function(){return W},isComplexComponents:function(){return w}});var t=e("mXGw"),n=e("20uZ"),u=e("yF2H").LM,d=e("UtkT").ik,l=e("arkN");u({options:{multipleSlots:!0},properties:{extClass:{type:String,value:""},title:{type:String,value:""},background:{type:String,value:""},color:{type:String,value:""},back:{type:Boolean,value:!0},loading:{type:Boolean,value:!1},homeButton:{type:Boolean,value:!1},animated:{type:Boolean,value:!0},show:{type:Boolean,value:!0,observer:"_showChange"},delta:{type:Number,value:1}},data:{displayStyle:""},lifetimes:{attached:function(){var c=this,v=d.getMenuButtonBoundingClientRect();d.getSystemInfo({success:function(x){var M=x.platform==="android",D=x.platform==="devtools";c.setData({ios:!M,innerPaddingRight:"padding-right: ".concat(x.windowWidth-v.left,"px"),leftWidth:"width: ".concat(x.windowWidth-v.left,"px"),safeAreaTop:D||M?"height: calc(var(--height) + ".concat(x.safeArea.top,"px); padding-top: ").concat(x.safeArea.top,"px"):""})}})}},methods:{_showChange:function(c){xxx;var v=this.data.animated,h="";v?h="opacity: ".concat(c?"1":"0",";transition:opacity 0.5s;"):h="display: ".concat(c?"":"none"),this.setData({displayStyle:h})},back:function(){var c=this.data;c.delta&&d.navigateBack({delta:c.delta}),this.triggerEvent("back",{delta:c.delta},{})}}},"w");var E=n.Z.Component(l,n.Z.mergeConfig(e("v9Xe"),e("VhtK"))),A=e("hmPl"),O=e("2pVW"),_=e("HRO2"),y=e("aMrw"),C=e("CvN4"),m=e("AENl"),b=e("FyQJ"),g=e("eMCs"),P=e.n(g),p=e("vRpg"),R=e.n(p),f=e("rRSO"),s=e.n(f),I=e("v1RS"),T=e.n(I),Z=e("Me5i"),B=e.n(Z),i=e("54ue"),L=e.n(i),U=e("YGeg"),S={};S.styleTagTransform=L(),S.setAttributes=T(),S.insert=s().bind(null,"head"),S.domAPI=R(),S.insertStyleElement=B();var K=P()(U.Z,S),F=U.Z&&U.Z.locals?U.Z.locals:void 0,j={};function W(a){var c=a.canIUseOpenData,v=a.$id,h=a.hasUserInfo,x=a.canIUseGetUserProfile,M=a.canIUse,D=a.userInfo,G=a.motto;return t.createElement("tiga-page",null,t.createElement(E,{title:"Weixin1",back:!1,color:"black",background:"#FFF",ref:n.Z.ref("$morSaveRef",a),morTagName:"navigation-bar"}),t.createElement("tiga-view",{class:"container"},t.createElement("tiga-view",{style:n.Z.createStyle("text-align: center; color: #b9b9b9")},t.createElement(C.Z,{theme:"circular",size:"40rpx",text:"\u52A0\u8F7D\u4E2D...","inherit-color":!0,ref:n.Z.ref("$morSaveRef",a),morTagName:"t-loading"}),t.createElement(m.Z,{_slot:"left-icon",prefix:"wr",name:"search",size:"40rpx",color:"#bbb",ref:n.Z.ref("$morSaveRef",a),morTagName:"t-icon"})),t.createElement("tiga-view",{class:"userinfo"},c?t.createElement(n.Z.Block,null,t.createElement("tiga-view",{class:"userinfo-avatar"+(" 3b78e4338cd04838b6f711e5bc7facc9"+(typeof index!="undefined"?index:"")+(" comp-id-"+v))},t.createElement("open-data",{type:"userAvatarUrl"}),n.Z.registEvents([{name:"tap",event:"bindViewTap",catch:!1}],a,"3b78e4338cd04838b6f711e5bc7facc9"+(typeof index!="undefined"?index:""))),t.createElement("open-data",{type:"userNickName"})):h?t.createElement(n.Z.Block,null,t.createElement("tiga-image",{class:"userinfo-avatar"+(" 654a1021afe6490faa81391deb967ee4"+(typeof index!="undefined"?index:"")+(" comp-id-"+v)),src:n.Z.toJsonString(D==null?void 0:D.avatarUrl,!1),mode:"cover"},n.Z.registEvents([{name:"tap",event:"bindViewTap",catch:!1}],a,"654a1021afe6490faa81391deb967ee4"+(typeof index!="undefined"?index:""))),t.createElement("tiga-text",{class:"userinfo-nickname"},n.Z.getString(D==null?void 0:D.nickName))):t.createElement(n.Z.Block,null,x?t.createElement("tiga-button",{class:" bf7e5420634543edb19e02c8b81d16b0"+(typeof index!="undefined"?index:"")+(" comp-id-"+v)},"\u83B7\u53D6\u5934\u50CF\u6635\u79F0",n.Z.registEvents([{name:"tap",event:"getUserProfile",catch:!1}],a,"bf7e5420634543edb19e02c8b81d16b0"+(typeof index!="undefined"?index:""))):M?t.createElement("tiga-button",{"open-type":"getAuthorize",scope:"userInfo",class:" 09846eb97d4b4a05a8f601b5192e3b99"+(typeof index!="undefined"?index:"")+(" comp-id-"+v)},"\u83B7\u53D6\u5934\u50CF\u6635\u79F0",n.Z.registEvents([{name:"getuserinfo",event:"getUserInfo",catch:!1}],a,"09846eb97d4b4a05a8f601b5192e3b99"+(typeof index!="undefined"?index:""))):t.createElement("tiga-view",null,"\u8BF7\u4F7F\u75281.4.4\u53CA\u4EE5\u4E0A\u7248\u672C\u57FA\u7840\u5E93"))),t.createElement("tiga-view",{class:"usermotto"},t.createElement("tiga-text",{class:"user-motto"},n.Z.getString(G)))))}var w=!0},BeUl:function(o,r,e){e.r(r),e.d(r,{default:function(){return R}});var t=e("6Ydh"),n=e("DajF"),u=e("MM43"),d=e("4kMG"),l=e("8mQb"),E=e("bmIf"),A=e("tTth"),O=e("8j+p"),_=e("mXGw"),y=e("20uZ"),C=e("fx/u"),m=e("UtkT").ik,b=e("GHZX");(0,C.F5)({data:{motto:"Hello World",userInfo:{},hasUserInfo:!1,canIUse:m.canIUse("button.open-type.getUserInfo"),canIUseGetUserProfile:!1,canIUseOpenData:m.canIUse("open-data.type.userAvatarUrl")&&m.canIUse("open-data.type.userNickName")},bindViewTap:function(){m.navigateTo({url:"../logs/logs"})},onLoad:function(){m.getUserProfile&&this.setData({canIUseGetUserProfile:!0})},getUserProfile:function(){var s=this;m.getUserProfile({desc:"\u5C55\u793A\u7528\u6237\u4FE1\u606F",success:function(T){console.log(T),s.setData({userInfo:T.userInfo,hasUserInfo:!0})}})},getUserInfo:function(s){console.log(s),this.setData({userInfo:s.detail.userInfo,hasUserInfo:!0})}});var g=y.Z.Page(b,y.Z.mergeConfig(e("v9Xe"),e("OVdc")));function P(f,s,I){return s=(0,l.Z)(s),(0,u.Z)(f,(0,d.Z)()?Reflect.construct(s,I||[],(0,l.Z)(f).constructor):s.apply(f,I))}var p=function(f){function s(){return(0,t.Z)(this,s),P(this,s,arguments)}return(0,E.Z)(s,f),(0,n.Z)(s,[{key:"render",value:function(){return _.createElement("tiga-page-host",{"show-back":"false","show-header":"true"},_.createElement(g,null))}}])}(_.Component),R=p},UFQt:function(o,r,e){var t=e("Ba9y"),n=e.n(t),u=e("Ai0b"),d=e.n(u),l=d()(n());l.push([o.id,`.container {
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
}`,""]),r.Z=l},Aqv1:function(o,r,e){var t=e("Ba9y"),n=e.n(t),u=e("Ai0b"),d=e.n(u),l=e("uXIW"),E=e.n(l),A=new URL(e("KU0Z"),e.b),O=new URL(e("ISDb"),e.b),_=d()(n()),y=E()(A),C=E()(O);_.push([o.id,`.weui-navigation-bar {
  --weui-FG-0:rgba(0,0,0,.9);
  --height: 44px;
  --left: 16px;
}

.weui-navigation-bar .android {
  --height: 48px;
}

.weui-navigation-bar {
  overflow: hidden;
  color: var(--weui-FG-0);
  flex: none;
}

.weui-navigation-bar__inner {
  position: relative;
  top: 0;
  left: 0;
  height: calc(var(--height) + env(safe-area-inset-top));
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: env(safe-area-inset-top);
  width: 100%;
  box-sizing: border-box;
}

.weui-navigation-bar__left {
  position: relative;
  padding-left: var(--left);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 100%;
  box-sizing: border-box;
}

.weui-navigation-bar__btn_goback_wrapper {
  padding: 11px 18px 11px 16px;
  margin: -11px -18px -11px -16px;
}

.weui-navigation-bar__btn_goback_wrapper.weui-active {
  opacity: 0.5;
}

.weui-navigation-bar__btn_goback {
  font-size: 12px;
  width: 12px;
  height: 24px;
  -webkit-mask: url(`+y+`) no-repeat 50% 50%;
  mask: url(`+y+`) no-repeat 50% 50%;
  -webkit-mask-size: cover;
  mask-size: cover;
  background-color: var(--weui-FG-0);
}

.weui-navigation-bar__center {
  font-size: 17px;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex: 1;
  height: 100%;
}

.weui-navigation-bar__loading {
  margin-right: 4px;
  align-items: center;
}

.weui-loading {
  font-size: 16px;
  width: 16px;
  height: 16px;
  display: block;
  background: transparent url(`+C+`) no-repeat;
  background-size: 100%;
  margin-left: 0;
  animation: loading linear infinite 1s;
}

@keyframes loading {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}`,""]),r.Z=_},YGeg:function(o,r,e){var t=e("Ba9y"),n=e.n(t),u=e("Ai0b"),d=e.n(u),l=d()(n());l.push([o.id,`.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #aaa;
}

.userinfo-avatar {
  overflow: hidden;
  width: 4rem;
  height: 4rem;
  margin: 0.625rem;
  border-radius: 50%;
}

.usermotto {
  margin-top: 200px;
}

.user-motto {
  color: blue;
}`,""]),r.Z=l},FyQJ:function(o,r,e){var t=e("eMCs"),n=e.n(t),u=e("vRpg"),d=e.n(u),l=e("rRSO"),E=e.n(l),A=e("v1RS"),O=e.n(A),_=e("Me5i"),y=e.n(_),C=e("54ue"),m=e.n(C),b=e("UFQt"),g={};g.styleTagTransform=m(),g.setAttributes=O(),g.insert=E().bind(null,"head"),g.domAPI=d(),g.insertStyleElement=y();var P=n()(b.Z,g),p=b.Z&&b.Z.locals?b.Z.locals:void 0},ISDb:function(o){o.exports="data:image/svg+xml,%3C%3Fxml version=%271.0%27 encoding=%27UTF-8%27%3F%3E%3Csvg width=%2780px%27 height=%2780px%27 viewBox=%270 0 80 80%27 version=%271.1%27 xmlns=%27http://www.w3.org/2000/svg%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27%3E%3Ctitle%3Eloading%3C/title%3E%3Cdefs%3E%3ClinearGradient x1=%2794.0869141%25%27 y1=%270%25%27 x2=%2794.0869141%25%27 y2=%2790.559082%25%27 id=%27linearGradient-1%27%3E%3Cstop stop-color=%27%23606060%27 stop-opacity=%270%27 offset=%270%25%27%3E%3C/stop%3E%3Cstop stop-color=%27%23606060%27 stop-opacity=%270.3%27 offset=%27100%25%27%3E%3C/stop%3E%3C/linearGradient%3E%3ClinearGradient x1=%27100%25%27 y1=%278.67370605%25%27 x2=%27100%25%27 y2=%2790.6286621%25%27 id=%27linearGradient-2%27%3E%3Cstop stop-color=%27%23606060%27 offset=%270%25%27%3E%3C/stop%3E%3Cstop stop-color=%27%23606060%27 stop-opacity=%270.3%27 offset=%27100%25%27%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Cg stroke=%27none%27 stroke-width=%271%27 fill=%27none%27 fill-rule=%27evenodd%27 opacity=%270.9%27%3E%3Cg%3E%3Cpath d=%27M40,0 C62.09139,0 80,17.90861 80,40 C80,62.09139 62.09139,80 40,80 L40,73 C58.2253967,73 73,58.2253967 73,40 C73,21.7746033 58.2253967,7 40,7 L40,0 Z%27 fill=%27url%28%23linearGradient-1%29%27%3E%3C/path%3E%3Cpath d=%27M40,0 L40,7 C21.7746033,7 7,21.7746033 7,40 C7,58.2253967 21.7746033,73 40,73 L40,80 C17.90861,80 0,62.09139 0,40 C0,17.90861 17.90861,0 40,0 Z%27 fill=%27url%28%23linearGradient-2%29%27%3E%3C/path%3E%3Ccircle id=%27Oval%27 fill=%27%23606060%27 cx=%2740.5%27 cy=%273.5%27 r=%273.5%27%3E%3C/circle%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A"},KU0Z:function(o){o.exports="data:image/svg+xml;charset=utf8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2724%27 viewBox=%270 0 12 24%27%3E  %3Cpath fill-opacity=%27.9%27 fill-rule=%27evenodd%27 d=%27M10 19.438L8.955 20.5l-7.666-7.79a1.02 1.02 0 0 1 0-1.42L8.955 3.5 10 4.563 2.682 12 10 19.438z%27/%3E%3C/svg%3E"},v9Xe:function(o){o.exports=JSON.parse('{"pages":["pages/usercenter/login/account/index","pages/line/index","pages/usercenter/code/index","pages/usercenter/login/pass/index","pages/usercenter/reset/account/index","pages/usercenter/reset/reset/index","pages/usercenter/register/account/index","pages/usercenter/register/pass/index","pages/usercenter/register/mail/index","pages/usercenter/register/finish/index","pages/logs/logs","pages/index/index"],"usingComponents":{"navigation-bar":"/components/navigation-bar/navigation-bar","ec-canvas":"/ec-canvas/ec-canvas","t-icon":"tdesign-miniprogram/icon/icon","t-loading":"tdesign-miniprogram/loading/loading","t-popup":"tdesign-miniprogram/popup/popup","t-cell-group":"tdesign-miniprogram/cell-group/cell-group","t-cell":"tdesign-miniprogram/cell/cell","t-input":"tdesign-miniprogram/input/input","t-button":"tdesign-miniprogram/button/button","t-radio":"tdesign-miniprogram/radio/radio","t-link":"tdesign-miniprogram/link/link","t-cascader":"tdesign-miniprogram/cascader/cascader","t-toast":"tdesign-miniprogram/toast/toast"},"resolveAlias":{"config/*":"config/*","services/*":"services/*","model/*":"model/*","utils/*":"utils/*","components/*":"components/*","tdesign-miniprogram/*":"miniprogram_npm/tdesign-miniprogram/*"},"window":{"backgroundTextStyle":"light","titleBarColor":"#fff","defaultTitle":"Weixin"},"sitemapLocation":"sitemap.json"}')},VhtK:function(o){o.exports=JSON.parse('{"component":true,"styleIsolation":"apply-shared","usingComponents":{}}')},OVdc:function(o){o.exports=JSON.parse('{"usingComponents":{}}')}}]);

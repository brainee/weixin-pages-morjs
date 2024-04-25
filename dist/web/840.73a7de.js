"use strict";(window.mor_modules=window.mor_modules||[]).push([[840],{"68YO":function(r,a,t){t.r(a),t.d(a,{$templates:function(){return l},defaultRender:function(){return j},isComplexComponents:function(){return C}});var s=t("mXGw"),n=t("20uZ"),u=t("FyQJ"),m=t("hmPl"),o=t("aMrw"),p=t("eMCs"),D=t.n(p),O=t("vRpg"),v=t.n(O),c=t("rRSO"),y=t.n(c),P=t("v1RS"),d=t.n(P),i=t("Me5i"),S=t.n(i),T=t("54ue"),A=t.n(T),E=t("w4ot"),g={};g.styleTagTransform=A(),g.setAttributes=d(),g.insert=y().bind(null,"head"),g.domAPI=v(),g.insertStyleElement=S();var _=D()(E.Z,g),e=E.Z&&E.Z.locals?E.Z.locals:void 0,l={};function j(M){var R=M.logs,x=M.index,B=M.log;return s.createElement("tiga-page",null,s.createElement("tiga-view",{class:"container log-list"},n.Z.getForValue(R).map(function(f,I){return s.createElement(n.Z.Block,{key:n.Z.toJsonString(f==null?void 0:f.timeStamp,!1)},s.createElement("tiga-text",{class:"log-item"},n.Z.getString(I+1)+". "+n.Z.getString(f==null?void 0:f.date)))})))}var C=!0},2170:function(r,a,t){t.r(a),t.d(a,{default:function(){return g}});var s=t("6Ydh"),n=t("DajF"),u=t("MM43"),m=t("4kMG"),o=t("8mQb"),p=t("bmIf"),D=t("tTth"),O=t("8j+p"),v=t("mXGw"),c=t("20uZ"),y=t("fx/u"),P=function(e){var l=e.getFullYear(),j=e.getMonth()+1,C=e.getDate(),M=e.getHours(),R=e.getMinutes(),x=e.getSeconds();return[l,j,C].map(d).join("/")+" "+[M,R,x].map(d).join(":")},d=function(e){var l=e.toString();return l[1]?l:"0"+l},i=t("UtkT").ik,S=t("68YO");(0,y.F5)({data:{logs:[]},onLoad:function(){this.setData({logs:(i.getStorageSync("logs")||[]).map(function(e){return{date:P(new Date(e)),timeStamp:e}})})}});var T=c.Z.Page(S,c.Z.mergeConfig(t("v9Xe"),t("4Dnx")));function A(_,e,l){return e=(0,o.Z)(e),(0,u.Z)(_,(0,m.Z)()?Reflect.construct(e,l||[],(0,o.Z)(_).constructor):e.apply(_,l))}var E=function(_){function e(){return(0,s.Z)(this,e),A(this,e,arguments)}return(0,p.Z)(e,_),(0,n.Z)(e,[{key:"render",value:function(){return v.createElement("tiga-page-host",{"show-back":"false","show-header":"true"},v.createElement(T,null))}}])}(v.Component),g=E},UFQt:function(r,a,t){var s=t("Ba9y"),n=t.n(s),u=t("Ai0b"),m=t.n(u),o=m()(n());o.push([r.id,`.container {
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
}`,""]),a.Z=o},w4ot:function(r,a,t){var s=t("Ba9y"),n=t.n(s),u=t("Ai0b"),m=t.n(u),o=m()(n());o.push([r.id,`.log-list {
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
}

.log-item {
  margin: 0.3125rem;
}`,""]),a.Z=o},FyQJ:function(r,a,t){var s=t("eMCs"),n=t.n(s),u=t("vRpg"),m=t.n(u),o=t("rRSO"),p=t.n(o),D=t("v1RS"),O=t.n(D),v=t("Me5i"),c=t.n(v),y=t("54ue"),P=t.n(y),d=t("UFQt"),i={};i.styleTagTransform=P(),i.setAttributes=O(),i.insert=p().bind(null,"head"),i.domAPI=m(),i.insertStyleElement=c();var S=n()(d.Z,i),T=d.Z&&d.Z.locals?d.Z.locals:void 0},v9Xe:function(r){r.exports=JSON.parse('{"pages":["pages/usercenter/login/account/index","pages/line/index","pages/usercenter/code/index","pages/usercenter/login/pass/index","pages/usercenter/reset/account/index","pages/usercenter/reset/reset/index","pages/usercenter/register/account/index","pages/usercenter/register/pass/index","pages/usercenter/register/mail/index","pages/usercenter/register/finish/index","pages/logs/logs","pages/index/index"],"usingComponents":{"navigation-bar":"/components/navigation-bar/navigation-bar","ec-canvas":"/ec-canvas/ec-canvas","t-icon":"tdesign-miniprogram/icon/icon","t-loading":"tdesign-miniprogram/loading/loading","t-popup":"tdesign-miniprogram/popup/popup","t-cell-group":"tdesign-miniprogram/cell-group/cell-group","t-cell":"tdesign-miniprogram/cell/cell","t-input":"tdesign-miniprogram/input/input","t-button":"tdesign-miniprogram/button/button","t-radio":"tdesign-miniprogram/radio/radio","t-link":"tdesign-miniprogram/link/link","t-cascader":"tdesign-miniprogram/cascader/cascader","t-toast":"tdesign-miniprogram/toast/toast"},"resolveAlias":{"config/*":"config/*","services/*":"services/*","model/*":"model/*","utils/*":"utils/*","components/*":"components/*","tdesign-miniprogram/*":"miniprogram_npm/tdesign-miniprogram/*"},"window":{"backgroundTextStyle":"light","titleBarColor":"#fff","defaultTitle":"Weixin"},"sitemapLocation":"sitemap.json"}')},"4Dnx":function(r){r.exports=JSON.parse('{"usingComponents":{},"defaultTitle":"\u67E5\u770B\u542F\u52A8\u65E5\u5FD7"}')}}]);

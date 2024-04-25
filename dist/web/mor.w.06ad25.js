(window.mor_modules=window.mor_modules||[]).push([[600],{"9YWP":function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.offAppHide=t.onAppHide=t.offAppShow=t.onAppShow=void 0;const o=i("Y3x3");let e=null,r=null,s=!1;const l=(p=!0)=>p?e||(e=(0,o.createCallbackManager)()):r||(r=(0,o.createCallbackManager)());function a(){if(s)return;s=!0;let p,h;typeof document.hidden!="undefined"?(p="hidden",h="visibilitychange"):typeof document.msHidden!="undefined"?(p="msHidden",h="msvisibilitychange"):typeof document.webkitHidden!="undefined"&&(p="webkitHidden",h="webkitvisibilitychange"),document.addEventListener(h,g=>{document[p]?l(!1).trigger():l().trigger()})}function n(p){l().add(p),a()}t.onAppShow=n;function c(p){l().remove(p)}t.offAppShow=c;function u(p){l(!1).add(p),a()}t.onAppHide=u;function d(p){l(!1).remove(p)}t.offAppHide=d},WVvj:function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=["component.observers","component.relations","component.externalClass","component.lifetimes"];function o(e){return{call(r,s,l,a,n){if(typeof e[r]!="function")return void console.warn(`my.call('${r}') \u6682\u672A\u5B9E\u73B0`);e[r]({params:s,success:l,fail:a,complete:n})},canIUse(r=""){return console.warn("canIUse API \u76EE\u524D\u8FD8\u672A\u5B8C\u5168\u5B9E\u73B0\uFF0C\u4EC5\u4F9B\u53C2\u8003"),!(i.indexOf(r)>-1)},SDKVersion:"1.0.0"}}t.default=o},r7Xj:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.copy=void 0;const e=i("2GZr").__importDefault(i("wn6x"));function r(c){const u=document.documentElement.getAttribute("dir")==="rtl",d=document.createElement("textarea");d.style.fontSize="12pt",d.style.border="0",d.style.padding="0",d.style.margin="0",d.style.position="absolute",d.style[u?"right":"left"]="-9999px";const p=window.pageYOffset||document.documentElement.scrollTop;return d.style.top=`${p}px`,d.setAttribute("readonly",""),d.value=c,d}function s(c){try{return document.execCommand(c)}catch(u){return u}}const l="your browser doesn't support document.execCommand('copy').",a=()=>document.queryCommandSupported("copy"),n=(c,u)=>new Promise((d,p)=>{try{if(!a())return p(l);const h=r(c);u.container.appendChild(h);const g=(0,e.default)(h);s("copy"),h.remove(),d(g)}catch(h){p(h)}});t.copy=n},iONV:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const e=i("2GZr").__importDefault(i("BjK/")),r=i("r7Xj"),s=()=>typeof navigator.clipboard=="object"&&window.isSecureContext,l=(0,e.default)(window.$MOR_APP_CONFIG,"apis.clipboard")==="command",a="Your browser doesn't support clipboard api.",n=(c=a)=>Promise.reject(c);t.default={setClipboard({text:c=""}){return l||!s()?(0,r.copy)(c,{container:document.body}):navigator.clipboard.writeText(c)},getClipboard(){return s()?navigator.clipboard.readText().then(c=>({text:c})):n()}}},hDyw:function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={makePhoneCall(i){try{const{number:o}=i;if(!o)return;location.href="tel:"+o}catch(o){}}}},fTM5:function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});function i(){let a;if(navigator.connection)switch(navigator.connection.effectiveType){case"wifi":a="WIFI";break;case"4g":a="4G";break;case"3g":a="3G";break;case"3gnet":a="3G";break;case"2g":a="2G";break;default:a="UNKNOWN"}else{const n=navigator.userAgent;let c=n.match(/NetType\/\w+/)?n.match(/NetType\/\w+/)[0]:"NetType/other";switch(c=c.toLowerCase().replace("nettype/",""),c){case"wifi":a="WIFI";break;case"4g":a="4G";break;case"3g":a="3G";break;case"3gnet":a="3G";break;case"2g":a="2G";break;default:a="UNKNOWN"}}return a}const o=new Set;t.default={getNetworkType(){return new Promise(a=>{a({networkAvailable:navigator.onLine,networkType:i()})})},onNetworkStatusChange(a){o.add(a),e()},offNetworkStatusChange(a){a?o.delete(a):o.clear(),e()}};function e(){o.size===1?(window.addEventListener("online",s),window.addEventListener("offline",l)):o.size===0&&(window.removeEventListener("online",s),window.removeEventListener("offline",l))}function r(a){const c={networkType:i(),isConnected:a};o.forEach(u=>{u(c)})}function s(){r(!0)}function l(){r(!1)}},"4rtA":function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const e=i("2GZr").__importDefault(i("FMmX")),r=i("+d1X"),s=new e.default(navigator.userAgent);function l(n,c){for(const u in n)if(n[u].indexOf(c)>0)return u;return-1}function a(){const n={model:s.mobile(),pixelRatio:window.devicePixelRatio,windowWidth:document.body.clientWidth,windowHeight:document.body.clientHeight,language:(navigator.language||navigator.browserLanguage).toLowerCase(),version:r.my.SDKVersion,platform:"ios",system:s.os(),titleBarHeight:44,statusBarHeight:0,screenWidth:screen.width,screenHeight:screen.height,brand:s.mobile(),fontSizeSetting:parseFloat(document.documentElement.style.fontSize),app:"h5"},c=s.os();let u="",d="";if(c==="iOS")n.platform="iOS",u=s.mobile()+" "+s.version("iPhone"),d=s.versionStr("iPhone");else if(c==="AndroidOS"){n.platform="Android",u=s.mobile()+" "+(s.version("iPhone")||s.version("iPad")),d=s.versionStr("iPhone")||s.versionStr("iPad");const p=s.userAgent()&&s.userAgent().split(";"),h=l(p,"Build/");h>-1&&(u=p[h].substring(0,p[h].indexOf("Build/")))}else n.platform="unkown";try{d=d.replace(/_/g,".")}catch(p){}return d&&(n.system=d),n.model=u,n}t.default={SDKVersion:"2.8.9",getSystemInfo(){return new Promise(n=>{n(a())})},getSystemInfoSync(){return a()}}},uxMg:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const e=i("2GZr").__importDefault(i("ziaO"));t.default={uploadFile:e.default}},ziaO:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=i("Y3x3"),e=i("9ir5"),r=({name:l,url:a,filePath:n,formData:c,header:u,fileName:d,success:p,error:h,withCredentials:g})=>{let m,w;const _=(0,o.createCallbackManager)(),O="uploadFile",R=new XMLHttpRequest,f=new FormData;R.open("POST",a),g&&(R.withCredentials=!0),(0,e.setHeader)(R,u);for(w in c)f.append(w,c[w]);R.upload.onprogress=A=>{const{loaded:b,total:C}=A;_.trigger({progress:Math.round(b/C*100),totalBytesSent:b,totalBytesExpectedToSent:C})},R.onload=()=>{const A=R.status;clearTimeout(m),p({errMsg:`${O}:ok`,statusCode:A,data:R.responseText||R.response})},R.onabort=()=>{clearTimeout(m),h({errMsg:`${O}:fail abort`})},R.onerror=()=>{clearTimeout(m),h({errMsg:`${O}:fail fail to upload'}`})};const v=()=>{R.send(f),m=setTimeout(()=>{R.onabort=null,R.onload=null,R.upload.onprogress=null,R.onreadystatechange=null,R.onerror=null,P(),h({errMsg:`${O}:fail timeout`})},e.NETWORK_TIMEOUT)};(0,e.convertObjectUrlToBlob)(n).then(A=>{f.append(l||"file",A,d||`file-${Date.now()}`),v()}).catch(A=>{h({errMsg:`${O}:fail ${A.message}`})});const P=()=>{R.abort(),clearTimeout(m)};return{abort:P,onProgressUpdate:_.add}},s=({url:l,filePath:a,header:n,formData:c,fileName:u,name:d,withCredentials:p})=>{let h;const g=new Promise((m,w)=>{h=r({url:l,header:n,filePath:a,formData:c,fileName:u,name:d,withCredentials:p,success:_=>{m(_)},error:_=>{w(_)}})});return g.onProgressUpdate=h.onProgressUpdate,g.abort=h.abort,g};t.default=s},"9ir5":function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NETWORK_TIMEOUT=t.convertObjectUrlToBlob=t.setHeader=void 0;const i=(e,r)=>{let s;for(s in r)e.setRequestHeader(s,r[s])};t.setHeader=i;const o=e=>new Promise((r,s)=>{const l=new XMLHttpRequest;l.open("GET",e,!0),l.responseType="blob",l.onload=function(){this.status===200?r(this.response):s({status:this.status})},l.send()});t.convertObjectUrlToBlob=o,t.NETWORK_TIMEOUT=3e4},Hpeo:function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getRootView=t.updateRootView=void 0;let i=document.body;function o(r){i=r}t.updateRootView=o;function e(){return i}t.getRootView=e},"5DWI":function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=i("Y3x3"),e=s=>new Promise((l,a)=>{const n=new Image;n.onload=()=>{l({width:n.width,height:n.height})},n.onerror=c=>{a(c)},n.src=s}),r=s=>new Promise((l,a)=>{const n=new Image;n.onload=()=>{l({width:n.naturalWidth,height:n.naturalHeight})},n.onerror=c=>{a(c)},n.src=s});t.default={compressImage(){return new Promise(s=>{s({apFilePaths:[]})})},chooseImage(s){return new Promise((l,a)=>{const n=(0,o.shouldBeObject)(s);if(!n.res){const g={errMsg:`chooseImage ${n.msg}`};return console.error(g.errMsg),a(g)}const{count:c=1}=s,u="tigaChooseImage",d={errMsg:"chooseImage:ok",tempFilePaths:[],apFilePaths:[],tempFiles:[]};if(c&&typeof c!="number")return d.errMsg=(0,o.getParameterError)({name:"chooseImage",para:"count",correct:"Number",wrong:c}),console.error(d.errMsg),a(d);let p=document.getElementById(u);p?c>1?p.setAttribute("multiple","multiple"):p.removeAttribute("multiple"):(p=document.createElement("input"),p.setAttribute("type","file"),p.setAttribute("id",u),c>1&&p.setAttribute("multiple","multiple"),p.setAttribute("accept","image/*"),p.setAttribute("style","position: fixed; top: -4000px; left: -3000px; z-index: -300;"),document.body.appendChild(p));const h=document.createEvent("MouseEvents");h.initEvent("click",!0,!0),p.dispatchEvent(h),p.onchange=function(g){const m=g.target,w=Array.from(m.files);w&&w.forEach(_=>{const O=new Blob([_],{type:_.type}),R=URL.createObjectURL(O);d.tempFilePaths.push(R),d.apFilePaths.push(R),d.tempFiles.push({path:R,size:_.size,type:_.type,originalFileObj:_})}),l(d),m.value=""}})},getImageInfo(s){const{src:l}=s;return new Promise((a,n)=>{Promise.all([r(l),e(l)]).then(c=>{const u=c[0]||{},d=c[1]||{};a(Object.assign(Object.assign({},d),{size:u.size,type:u.type}))}).catch(c=>{n(c)})})},saveImage(){return new Promise(s=>{s()})}}},"8j+p":function(y,t,i){"use strict";var o;o={value:!0},o=o=o=void 0;const e=i("2GZr");o=e.__importDefault(i("62jW")).default,o=e.__importDefault(i("FMmX")).default;const l=e.__importStar(i("9YWP")),a=e.__importDefault(i("WVvj")),n=e.__importDefault(i("iONV")),c=e.__importDefault(i("hDyw")),u=e.__importDefault(i("fTM5")),d=e.__importDefault(i("4rtA")),p=e.__importDefault(i("uxMg")),h=e.__importDefault(i("5DWI")),g=e.__importDefault(i("vK4l")),m=e.__importDefault(i("5LWu")),w=e.__importDefault(i("WFJB")),_=i("+d1X"),O=e.__importDefault(i("i/zN")),R=e.__importDefault(i("5uwX")),f=e.__importDefault(i("HQxk")),v=e.__importDefault(i("8Kqn")),P=e.__importDefault(i("K1MB")),A=e.__importDefault(i("CEDg")),b=e.__importDefault(i("SZNF")),C=i("a3LK");o={enumerable:!0,get:function(){return C.appendApis}};const T=i("Y3x3"),E=e.__importDefault(i("31Z2"));(0,C.appendApis)(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},(0,a.default)(_.my)),(0,C.convertApis)(P.default)),(0,C.convertApis)(g.default)),(0,C.convertApis)(m.default)),(0,C.convertApis)(A.default)),(0,C.convertApis)(b.default)),(0,C.convertApis)(p.default)),(0,C.convertApis)(h.default)),(0,C.convertApis)(O.default)),(0,C.convertApis)(d.default)),(0,C.convertApis)(u.default)),(0,C.convertApis)(c.default)),(0,C.convertApis)(n.default)),(0,C.convertApis)(f.default)),(0,C.convertApis)(E.default)),(0,C.convertApis)(v.default)),(0,C.convertApis)(R.default)),(0,C.convertApis)(l)),(0,C.convertApis)(w.default)),C.DEFAULT_API_NO_CONFLICT),(0,T.pageOnReadyCallApi)(_.my),o=_.my},vK4l:function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={hideKeyboard(){document.activeElement.blur()}}},"5LWu":function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const e=i("2GZr").__importDefault(i("3DYX"));t.default={getLocation(){return new Promise((r,s)=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(l=>{const a={latitude:l.coords.latitude,longitude:l.coords.longitude,accuracy:`${l.coords.accuracy}`,horizontalAccuracy:`${l.coords.altitudeAccuracy}`};r(Object.assign(Object.assign({},a),(0,e.default)(a)))},l=>{let a=11;switch(l.code){case l.PERMISSION_DENIED:a=11;break;case l.POSITION_UNAVAILABLE:a=13;break;case l.TIMEOUT:a=12;break}s({error:a})},{enableHighAccuracy:!0}):s({error:11})})},chooseLocation(){},openLocation(){}}},RrAo:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.InnerAudio=void 0;const o=i("jGqW");class e{constructor(s){this.stopHoldOn=!1,this.callbacksMap={[o.EVENTS.PLAY]:[],[o.EVENTS.PAUSE]:[],[o.EVENTS.STOP]:[],[o.EVENTS.ENDED]:[],[o.EVENTS.TIMEUPDATE]:[],[o.EVENTS.ERROR]:[],[o.EVENTS.SEEKED]:[],[o.EVENTS.SEEKING]:[]};try{this.params=(0,o.defaults)(s),this.audio=new Audio(this.params.src),Object.keys(this.params).forEach(a=>this.audio[a]=this.params[a]),this._mount()}catch(l){this._executeCallbacks(this.callbacksMap[o.EVENTS.ERROR])}}get duration(){return this.audio.duration}get paused(){return this.audio.paused}get currentTime(){return this.audio.currentTime}set volume(s){this.audio.volume=s}get volume(){return this.audio.volume}set autoplay(s){this.audio.autoplay=s}get autoplay(){return this.audio.autoplay}set loop(s){this.audio.loop=!0}get loop(){return this.audio.loop}set playbackRate(s){this.audio.playbackRate=s}get playbackRate(){return this.audio.playbackRate}_executeCallbacks(s,l){Array.isArray(s)&&s.length>0&&s.forEach(a=>a(l))}_mount(){const s=[o.EVENTS.PLAY,o.EVENTS.PAUSE,o.EVENTS.ENDED,o.EVENTS.SEEKED,o.EVENTS.SEEKING,o.EVENTS.TIMEUPDATE,o.EVENTS.ERROR],l=[o.EVENTS.PAUSE,o.EVENTS.SEEKED,o.EVENTS.SEEKING];s.forEach(a=>this.audio.addEventListener(a,n=>{this.stopHoldOn&&l.includes(a)||a===o.EVENTS.TIMEUPDATE&&this.paused||this._executeCallbacks(this.callbacksMap[a],a===o.EVENTS.TIMEUPDATE?{currentTime:this.currentTime}:n)}))}play(){this.audio.play()}pause(){this.audio.pause()}stop(){this.stopHoldOn=!0,this.pause(),this.seek(0),setTimeout(()=>{this._executeCallbacks(this.callbacksMap[o.EVENTS.STOP]),this.stopHoldOn=!1},0)}seek(s){this.audio.currentTime=s}destroy(){this.audio=null}onPlay(s){this.callbacksMap[o.EVENTS.PLAY].push(s)}offPlay(s){(0,o.removeValue)(this.callbacksMap[o.EVENTS.PLAY],s)}onPause(s){this.callbacksMap[o.EVENTS.PAUSE].push(s)}offPause(s){(0,o.removeValue)(this.callbacksMap[o.EVENTS.PAUSE],s)}onTimeUpdate(s){this.callbacksMap[o.EVENTS.TIMEUPDATE].push(s)}offTimeUpdate(s){(0,o.removeValue)(this.callbacksMap[o.EVENTS.TIMEUPDATE],s)}onStop(s){this.callbacksMap[o.EVENTS.STOP].push(s)}offStop(s){(0,o.removeValue)(this.callbacksMap[o.EVENTS.STOP],s)}onEnded(s){this.callbacksMap[o.EVENTS.ENDED].push(s)}offEnded(s){(0,o.removeValue)(this.callbacksMap[o.EVENTS.ENDED],s)}onSeeked(s){this.callbacksMap[o.EVENTS.SEEKED].push(s)}offSeeked(s){(0,o.removeValue)(this.callbacksMap[o.EVENTS.SEEKED],s)}onSeeking(s){this.callbacksMap[o.EVENTS.SEEKING].push(s)}offSeeking(s){(0,o.removeValue)(this.callbacksMap[o.EVENTS.SEEKING],s)}onError(s){this.callbacksMap[o.EVENTS.ERROR].push(s)}offError(s){(0,o.removeValue)(this.callbacksMap[o.EVENTS.ERROR],s)}}t.InnerAudio=e},jGqW:function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.removeValue=t.EVENTS=t.defaults=void 0;const i=e=>Object.assign({},{startTime:0,playbackRate:1,autoplay:!1,loop:!1},e);t.defaults=i,t.EVENTS={PLAY:"play",PAUSE:"pause",STOP:"stop",ENDED:"ended",TIMEUPDATE:"timeupdate",ERROR:"error",SEEKED:"seeked",SEEKING:"seeking"};const o=(e,r)=>{if(Array.isArray(e)&&e.length>0){const s=e.indexOf(r);s>-1&&e.splice(s,1)}};t.removeValue=o},WFJB:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=i("RrAo");t.default={createInnerAudioContext(e){return new o.InnerAudio(e)}}},"+d1X":function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.my=t.getGlobalObject=void 0;const i="my",o="$MOR_GLOBAL_OBJECT";function e(){let s=i;return window!=null&&window[o]&&(s=window[o]),s}t.getGlobalObject=e;const r=e();window[r]=window[r]||Object.assign({},(window==null?void 0:window[i])||{}),t.my=window[r]},"i/zN":function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i("Igas");const o=i("Y3x3");t.default={closeSocket(){return new Promise(e=>{e()})},connectSocket(){return new Promise(e=>{e()})},downloadFile(){return new Promise(e=>{e({apFilePath:""})})},offSocketClose(){},offSocketMessage(){},request(e){const r="GET",{method:s=r,headers:l={},data:a={},timeout:n=3e4,dataType:c="json"}=e;let u=e.url;r===s&&Object.keys(a).length>0&&(u=(0,o.appendQueryToUrl)(u,a));const d={method:s,headers:l};return e.credentials&&(d.credentials=e.credentials),e.mode&&(d.mode=e.mode),r!==s&&(d.body=JSON.stringify(a)),new Promise((p,h)=>fetch(u,d).then(g=>{const m=()=>{const O={json:"json",text:"text",arraybuffer:"arrayBuffer",base64:"blob"}[(c||"").toLowerCase()];return c==="base64"?g[O]().then(o.convertBlobToBase64):g[O]()},w=()=>{const _={},O=g.headers;let R=O&&O.keys();return R&&(R=Array.from(R),R.map(f=>{_[f]=O.get(f)})),_};return g&&g.status>=200&&g.status<400?m().then(_=>{p({data:_,status:g.status,headers:w()})}).catch(h):h(new Error("HTTP \u9519\u8BEF"))}).catch(h))}}},ZzaA:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PAGE_ON_READY=t.getEventName=void 0;const o=i("Y3x3"),e=s=>(0,o.getPageAsKey)()+"_"+s;t.getEventName=e,t.PAGE_ON_READY="pageOnReady";class r{constructor(){this.callbackMap={}}on(l,a){Object.keys(this.callbackMap).indexOf(l)<0&&(this.callbackMap[l]=[]),this.callbackMap[l].push(a)}emit(l,a){if(l=(0,t.getEventName)(l),l==="clearPageOnReadyCallback")return this.removeAllCallbacks((0,t.getEventName)(t.PAGE_ON_READY));if(Object.keys(this.callbackMap).indexOf(l)<0)return;this.callbackMap[l].forEach(u=>u(a))}clear(){this.callbackMap={}}removeAllCallbacks(l){this.callbackMap[l]&&this.callbackMap[l].length>0&&(this.callbackMap[l]=[])}remove(l,a){if(Object.keys(this.callbackMap).indexOf(l)<0)return;const u=this.callbackMap[l].indexOf(a);u>=0&&this.callbackMap[l].splice(u,1)}size(l){return Object.keys(this.callbackMap).indexOf(l)<0?0:this.callbackMap[l].length}once(l,a){const n=this.size(l),c=u=>{a(u),this.remove(l,this.callbackMap[l][n])};this.on(l,c)}}t.default=r},"5uwX":function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=i("2GZr"),e=i("+d1X"),r=o.__importStar(i("ZzaA"));t.default={$tigaEvent:new r.default,$pageOnReadyCall:s=>new Promise((l,a)=>{if(typeof e.my!="object"||!e.my.$tigaEvent)return a();const n=()=>{try{s(),l("")}catch(c){a()}};e.my.$tigaEvent.on((0,r.getEventName)(r.PAGE_ON_READY),n)})}},HQxk:function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={reportAnalytics(){console.warn("api reportAnalytics \u8FD8\u672A\u5B9E\u73B0\u3002\u8BF7\u81EA\u4E3B\u8986\u76D6")}}},"8Kqn":function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const e=i("2GZr").__importDefault(i("NWgQ"));t.default={navigateToOutside(r){const{params:s,success:l,fail:a,complete:n}=r;try{location.href=e.default.stringifyUrl({url:s.url,query:s.params}),l&&l(),n&&n()}catch(c){a&&a()}},getStartupPrams(r){var s;const{success:l,params:a={}}=r||{},n=location.search.split("?")[1]||location.hash.split("?")[1]||"",c=e.default.parse(n);if(!((s=a.key)===null||s===void 0)&&s.length){const u={};a.key.forEach(d=>u[d]=c[d]),l(u)}else l(c)}}},K1MB:function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i="TiGa-",o=({key:s,data:l})=>{if(s&&l!==void 0){const a=`${i}${s}`;localStorage.setItem(a,JSON.stringify(l))}},e=s=>{if(s){const l=`${i}${s}`;localStorage.removeItem(l)}else console.error("key \u4E3A\u7A7A")},r=({key:s})=>{if(!s)return{err:"key \u4E0D\u80FD\u4E3A\u7A7A"};const l=`${i}${s}`,a=localStorage.getItem(l);return{data:a&&JSON.parse(a)}};t.default={setStorage(s){return new Promise((l,a)=>{try{o(s),l()}catch(n){a(n)}})},getStorage(s){return new Promise(l=>{const a=r(s);l(a)})},removeStorage(s){return new Promise((l,a)=>{s.key?(e(s.key),l()):(console.error("\u952E\u503C\u4E3A\u7A7A"),a())})},getStorageInfo(){return new Promise(s=>{const l=[];for(const a in localStorage)if(/^TiGa-/.test(a)){const n=a.replace(/^TiGa-/,"");l.push(n)}s({keys:l})})},clearStorage(){localStorage.clear()},setStorageSync(s){o(s)},getStorageSync(s){return r(s)},removeStorageSync({key:s}){s?e(s):console.error("\u952E\u503C\u4E3A\u7A7A")},getStorageInfoSync(){const s=[];for(const l in localStorage)if(/^TiGa-/.test(l)){const a=l.replace(/^TiGa-/,"");s.push(a)}return{keys:s}},clearStorageSync(){localStorage.clear()}}},CEDg:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=i("2GZr"),e=i("Hpeo"),r=i("Y3x3"),s=o.__importDefault(i("7Z1E")),l=i("gEHc");t.default={createIntersectionObserver(n){return new s.default(n)},createSelectorQuery(){return new a},updateRootView:e.updateRootView};class a{constructor(){this.execPromises=[],this.fieldsPromise=[]}select(c){return this.target=(0,e.getRootView)().querySelector(c),this}selectAll(c){return this.target=(0,e.getRootView)().querySelectorAll(c),this}selectViewport(){try{this.target=document.querySelector("tiga-page-host").shadowRoot.querySelector(".content")}catch(c){this.target=(0,e.getRootView)()}return this}boundingClientRect(){const c=this.target;return this.execPromises.push((0,r.wait)().then(()=>(0,l.mapTarget)(c,l.FIELD_CONFIG_METHODS_MAP.rect))),this}scrollOffset(){const c=this.target;return this.execPromises.push((0,r.wait)().then(()=>(0,l.mapTarget)(c,l.FIELD_CONFIG_METHODS_MAP.scrollOffset))),this}fields(c,u){const d=this.target;return this.fieldsPromise.push((0,r.wait)().then(()=>(0,l.mapTarget)(d,p=>Object.keys(c).reduce((h,g)=>{if(c[g]&&typeof l.FIELD_CONFIG_METHODS_MAP[g]=="function"){const m=l.FIELD_CONFIG_METHODS_MAP[g](p,c[g]);(0,r.isObject)(m)?h=Object.assign(Object.assign({},h),m):h[g]=m}return h},{}))).then(p=>(0,r.isFunction)(u)&&u(p))),this}exec(c){Promise.all(this.execPromises).then(u=>{(0,r.isFunction)(c)&&c(u)}),this.fieldsPromise.length>0&&Promise.all(this.fieldsPromise)}}},"7Z1E":function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const e=i("2GZr").__importDefault(i("62jW")),r=i("Hpeo"),s=i("gEHc"),l=window.IntersectionObserver||e.default;class a{constructor({thresholds:c=0,initialRatio:u=0,selectAll:d=!1,dataset:p=!1}={}){this.callBackInfos=new WeakMap,this.targetAppearedInfos=new WeakMap,this._observerCallBack=h=>{h.forEach(g=>{if(!this.targetAppearedInfos.get(g.target)&&(this.targetAppearedInfos.set(g.target,!0),!(this.initialRatio<g.intersectionRatio&&this.sortedThresholds[0]<=g.intersectionRatio)&&!(g.intersectionRatio<this.initialRatio&&g.intersectionRatio<=this.sortedThresholds[this.sortedThresholds.length-1])))return;const m=this.callBackInfos.get(g.target);if(m){const w=this.dataset?(0,s.getDataSet)(g.target):{},_=Object.assign({intersectionRatio:g.intersectionRatio,intersectionRect:g.intersectionRect,boundingClientRect:g.boundingClientRect,relativeRect:g.rootBounds,time:new Date().valueOf(),id:g.target.id},w);m(_)}})},this.initialRatio=u,this.thresholds=c,this.selectAll=d,this.dataset=p,this.sortedThresholds=(Array.isArray(c)?c:[c]).slice().sort()}get root(){return this.intersectionObserver.root}relativeToViewport(c){if(!this.intersectionObserver)return this.intersectionObserver=new l(this._observerCallBack,{threshold:this.thresholds,rootMargin:this.convertToRootMargin(c),root:(0,r.getRootView)()}),this}convertToRootMargin(c){let u;if(c){const{left:d=0,right:p=0,top:h=0,bottom:g=0}=c;u=`${h}px ${p}px ${g}px ${d}px`}return u}relativeTo(c,u){if(!this.intersectionObserver)return this.intersectionObserver=new l(this._observerCallBack,{threshold:this.thresholds,root:c instanceof HTMLElement?c:(0,r.getRootView)().querySelector(c),rootMargin:this.convertToRootMargin(u)}),this}observe(c,u){let d=[];return typeof c=="string"?d=(0,r.getRootView)().querySelectorAll(c):c instanceof HTMLElement?d.push(c):c instanceof Array&&(d=c),d.length>0&&d.forEach(p=>{this.callBackInfos.set(p,u),this.intersectionObserver.observe(p)}),this}unobserve(c){let u=[];typeof c=="string"?u=(0,r.getRootView)().querySelectorAll(c):c instanceof HTMLElement?u.push(c):c instanceof Array&&(u=c),u.length>0&&u.forEach(d=>{this.callBackInfos.has(d)&&this.callBackInfos.delete(d)})}disconnect(){this.intersectionObserver.disconnect()}}t.default=a},gEHc:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FIELD_CONFIG_METHODS_MAP=t.getDataSet=t.mapTarget=t.getProperties=t.SCROLL_OFFSET_PROPERTIES=t.RECT_PROPERTIES=void 0;const o=i("2qkm");t.RECT_PROPERTIES=["top","right","bottom","left","width","height","x","y"],t.SCROLL_OFFSET_PROPERTIES=["id","scrollLeft","scrollTop","scrollHeight","scrollWidth"];const e=(l,a=[])=>l?a.reduce((n,c)=>(n[c]=l[c],n),{}):{};t.getProperties=e;const r=(l,a)=>{if(!l)return null;if(l instanceof HTMLElement)return a(l);{const n=[];return l.forEach(c=>{n.push(a(c))}),n}};t.mapTarget=r;const s=(l,a)=>{const n={dataset:{}};try{const{dataset:c}=l;return c&&(n.dataset=Object.keys(c).reduce((u,d)=>(u[d]=(0,o.parseDatasetValue)(c[d]),u),{})),n}catch(c){return n}};t.getDataSet=s,t.FIELD_CONFIG_METHODS_MAP={id:l=>({id:l.id}),rect:l=>(0,t.getProperties)(l.getBoundingClientRect(),t.RECT_PROPERTIES),size:l=>(0,t.getProperties)(l.getBoundingClientRect(),["width","height"]),scrollOffset:l=>Object.assign(Object.assign({},(0,t.getDataSet)(l)),(0,t.getProperties)(l,t.SCROLL_OFFSET_PROPERTIES)),node:l=>({node:l}),computedStyle:(l,a)=>{try{const n={};if(a.length<0)return n;const c=window.getComputedStyle(l);return a.forEach(u=>n[u]=c.getPropertyValue(u)),n}catch(n){return{}}},dataset:t.getDataSet}},SZNF:function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={showTabBar(){return new Promise(i=>{window.dispatchEvent(new CustomEvent("__tigaShowTabBar")),i("")})},hideTabBar(){return new Promise(i=>{window.dispatchEvent(new CustomEvent("__tigaHideTabBar")),i("")})},showTabBarRedDot({index:i}){return new Promise(o=>{window.dispatchEvent(new CustomEvent("__tigaShowTabBarRedDot",{detail:{index:i}})),o("")})},hideTabBarRedDot({index:i}){return new Promise(o=>{window.dispatchEvent(new CustomEvent("__tigaHideTabBarRedDot",{detail:{index:i}})),o("")})},setTabBarBadge({index:i,text:o}){return new Promise(e=>{window.dispatchEvent(new CustomEvent("__tigaSetTabBarBadge",{detail:{index:i,text:o}})),e("")})},removeTabBarBadge({index:i}){return new Promise(o=>{window.dispatchEvent(new CustomEvent("__tigaSetTabBarBadge",{detail:{index:i}})),o("")})},setTabBarItem({index:i,text:o,iconPath:e,selectedIconPath:r}){return new Promise(s=>{window.dispatchEvent(new CustomEvent("__tigaSetTabBarItem",{detail:{index:i,text:o,iconPath:e,selectedIconPath:r}})),s("")})},setTabBarStyle({color:i,selectedColor:o,backgroundColor:e,borderStyle:r}){return new Promise(s=>{window.dispatchEvent(new CustomEvent("__tigaSetTabBarStyle",{detail:{color:i,selectedColor:o,backgroundColor:e,borderStyle:r}})),s("")})}}},a3LK:function(y,t,i){"use strict";var o,e;Object.defineProperty(t,"__esModule",{value:!0}),t.appendApis=t.convertApis=t.DEFAULT_API_NO_CONFLICT=void 0;const r=i("+d1X");t.DEFAULT_API_NO_CONFLICT=((o=window.$MOR_APP_CONFIG)===null||o===void 0?void 0:o.apiNoConflict)==null?!0:!!(!((e=window.$MOR_APP_CONFIG)===null||e===void 0)&&e.apiNoConflict);function s(n){return typeof n!="function"?n:function(c={}){const u=n(c);return u&&u instanceof Promise&&u.then(d=>{const p=c.success;p&&p(d);const h=c.complete;return h&&h(),d}).catch(d=>{const p=c.fail;p&&p(d);const h=c.complete;h&&h()}),u}}function l(n){const c={};return Object.keys(n).forEach(u=>{const d=n[u];c[u]=s(d)}),c}t.convertApis=l;function a(n,c=!1){const u=l(n);if(c)Object.keys(u).forEach(function(d){d in r.my||(r.my[d]=u[d])});else try{Object.assign(r.my,u)}catch(d){console.error("appendApis: ",`${d}`)}}t.appendApis=a},Y3x3:function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isFunction=t.isObject=t.wait=t.convertBlobToBase64=t.appendQueryToUrl=t.getPageAsKey=t.pageOnReadyCallApi=t.createCallbackManager=t.shouldBeObject=t.getParameterError=void 0;function i(p){return typeof p!="string"||(p=p.replace(/^./,h=>h.toUpperCase())),p}function o({name:p="",para:h,correct:g,wrong:m}){const w=h?`parameter.${h}`:"parameter",_=i(m==null?"Null":typeof m);return`${p}:fail parameter error: ${w} should be ${g} instead of ${_}`}t.getParameterError=o;function e(p){return p&&typeof p=="object"?{res:!0}:{res:!1,msg:o({correct:"Object",wrong:p})}}t.shouldBeObject=e;const r=()=>{const p=[];return{add:w=>{p.push(w)},trigger:(...w)=>{p.forEach(_=>{if(typeof _=="function")_(...w);else{const{callback:O,ctx:R}=_;O.call(R,...w)}})},remove:w=>{const _=p.indexOf(w);_<0||p.splice(_,1)}}};t.createCallbackManager=r;const s=p=>{setTimeout(()=>{["setNavigationBar"].forEach(g=>{const m=p[g];p[g]=(...w)=>(p.$pageOnReadyCall(()=>{m.apply(p,w)}),m.apply(p,w))})})};t.pageOnReadyCallApi=s;const l=()=>{if(typeof getCurrentPages!="function")return"";const p=getCurrentPages(),{length:h}=p;return h<=0?"":p[h-1].route};t.getPageAsKey=l;const a=(p="",h={})=>{const g=p.indexOf("?")>-1,m=Object.keys(h),{length:w}=m;let _="";return w>0&&m.map((f,v)=>{_+=`${f}=${h[f]}`,v!==w-1&&(_+="&")}),g?!(p.indexOf("=")>-1)||p[p.length-1]==="&"?p+_:`${p}&${_}`:`${p}?${_}`};t.appendQueryToUrl=a;const n=p=>new Promise((h,g)=>{const m=new FileReader;m.onerror=g,m.onload=()=>{h(m.result)},m.readAsDataURL(p)});t.convertBlobToBase64=n;const c=(p=67)=>new Promise(h=>{setTimeout(h,p)});t.wait=c;const u=p=>p&&typeof p=="object";t.isObject=u;const d=p=>typeof p=="function";t.isFunction=d},"3DYX":function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=3.141592653589793,o=.006693421622965943,e=6378245;function r(l,a){let n=-100+2*l+3*a+.2*a*a+.1*l*a+.2*Math.sqrt(Math.abs(l));return n+=(20*Math.sin(6*l*i)+20*Math.sin(2*l*i))*2/3,n+=(20*Math.sin(a*i)+40*Math.sin(a/3*i))*2/3,n+=(160*Math.sin(a/12*i)+320*Math.sin(a*i/30))*2/3,n}function s(l,a){let n=300+l+2*a+.1*l*l+.1*l*a+.1*Math.sqrt(Math.abs(l));return n+=(20*Math.sin(6*l*i)+20*Math.sin(2*l*i))*2/3,n+=(20*Math.sin(l*i)+40*Math.sin(l/3*i))*2/3,n+=(150*Math.sin(l/12*i)+300*Math.sin(l/30*i))*2/3,n}t.default=({latitude:l,longitude:a})=>{try{l=Number(l),a=Number(a)}catch(h){return{latitude:l,longitude:a}}let n=r(a-105,l-35),c=s(a-105,l-35);const u=l/180*i;let d=Math.sin(u);d=1-o*d*d;const p=Math.sqrt(d);return n=n*180/(e*(1-o)/(d*p)*i),c=c*180/(e/p*Math.cos(u)*i),{longitude:+(a+c).toFixed(6)+"",latitude:+(l+n).toFixed(6)+""}}},"31Z2":function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={createVideoContext(i){return window[`__VIDEO_CONTENT_${i.toUpperCase()}`]}}},tTth:function(y,t,i){"use strict";var o;o={value:!0};const e=i("2GZr"),r=i("a3LK"),s=e.__importDefault(i("Ek+O")),l=e.__importDefault(i("4uXw")),a=e.__importDefault(i("SPc/")),n=e.__importDefault(i("prFm")),c=e.__importDefault(i("1ypN")),u=e.__importDefault(i("dMS/")),d=e.__importDefault(i("M4mM")),p=e.__importDefault(i("HWKc"));i("QpIP"),i("BX1m");const h=e.__importDefault(i("aH2D"));i("yHHF");const g=e.__importDefault(i("8RjZ"));i("7LqJ");const m=e.__importDefault(i("Dryq")),w=e.__importDefault(i("4XNj"));(0,r.appendApis)(c.default,r.DEFAULT_API_NO_CONFLICT),(0,r.appendApis)(p.default,r.DEFAULT_API_NO_CONFLICT),(0,r.appendApis)(d.default,r.DEFAULT_API_NO_CONFLICT),(0,r.appendApis)(s.default,r.DEFAULT_API_NO_CONFLICT),(0,r.appendApis)(n.default,r.DEFAULT_API_NO_CONFLICT),(0,r.appendApis)(w.default,r.DEFAULT_API_NO_CONFLICT),(0,r.appendApis)(g.default,r.DEFAULT_API_NO_CONFLICT),(0,r.appendApis)(m.default,r.DEFAULT_API_NO_CONFLICT),(0,r.appendApis)(h.default,r.DEFAULT_API_NO_CONFLICT),(0,r.appendApis)(a.default,r.DEFAULT_API_NO_CONFLICT),(0,r.appendApis)(l.default,r.DEFAULT_API_NO_CONFLICT),(0,r.appendApis)(u.default,r.DEFAULT_API_NO_CONFLICT)},vs3i:function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TiGaEvent=void 0;class i extends Event{constructor(e,r){super(e,r),this.detail=r.detail,this.other=r.other,this.other&&Object.assign(this,this.other)}}t.TiGaEvent=i},BGsw:function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=r=>{const{duration:s,timeFunction:l,delay:a,transformOrigin:n}=r||{};return{duration:s||400,timeFunction:l||"linear",delay:a||0,transformOrigin:n||"50% 50% 0"}},o=["rotate","rotateX","rotateY","rotateZ","rotate3d","scale","scaleX","scaleY","scaleZ","scale3d","translate","translateX","translateY","translateZ","translate3d","skew","skewX","skewY","matrix","matrix3d","opacity","backgroundColor","width","height","top","left","right","bottom"];class e{constructor(s){this.result=[],this.currentStep=null,this.initConfig=null,this.initConfig=i(s),this.currentStep=this._generateStep(s),o.forEach(l=>{this._mount(l,(...a)=>(this._push(l,a),this))})}_generateStep(s){return{animation:[],config:i(s)}}_mount(s,l){return this[s]=l,this}_push(s,l){const{animation:a}=this.currentStep;a.push([s,l]),this.currentStep.animation=a}_hasAnimation(){const{animation:s}=this.currentStep;return Array.isArray(s)&&s.length>0}step(s){return this.result.push(this.currentStep),this.currentStep=this._generateStep(s),this}export(){const s=this.result;return this._hasAnimation()&&(s.push(this.currentStep),this.currentStep=this._generateStep(this.initConfig)),this.result=[],s}}t.default=e},"Ek+O":function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const e=i("2GZr").__importDefault(i("BGsw"));t.default={createAnimation(r){return new e.default(r)}}},Rer7:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=i("2GZr"),e=i("+d1X"),r=i("IozL"),s=i("vO1r");class l{constructor(n){if(this.actions=[],this.drawActionGroup=[],this.devicePixelRatio=1,this.devicePixelRatio=e.my.getSystemInfoSync().pixelRatio||1,this.canvas=e.my.createSelectorQuery().select(`#${n}`).target,this.canvas){const c=this.canvas.shadowRoot.querySelectorAll("canvas")[0],u=this.canvas.shadowRoot.querySelectorAll("div")[0];this.canvasWidth=(window.getComputedStyle(this.canvas).width||c.width)+"",this.canvasHeight=(window.getComputedStyle(this.canvas).height||c.height)+"",c.setAttribute("width",String(u.offsetWidth)),c.setAttribute("height",String(u.offsetHeight));try{this.ctx=c.getContext("2d")}catch(d){console.error("\u83B7\u53D6\u4E0D\u5230canvas\u753B\u5E03")}this.initStyleProperties(),this.initPushAction()}else console.error(`\u83B7\u53D6\u4E0D\u5230canvas\u753B\u5E03, canvasId:${n}`)}static create(n){return new l(n)}getSetUpperName(n){return`set${(0,s.upperFirstChar)(n)}`}initStyleProperties(){r.styleProperties.forEach(n=>{this[this.getSetUpperName(n)]=c=>{this.actions.push({action:n,value:c,id:(0,s.randomUuid)()})}})}initPushAction(){r.toolsProperties.forEach(n=>{n!=="draw"&&(this[n]=(...c)=>{this.actions.push({action:n,args:c,id:(0,s.randomUuid)()})})})}setFontSize(n=12){this.actions.push({action:"setFontSize",value:n,id:(0,s.randomUuid)()})}drawImage(...n){this.actions.push({action:"drawImage",args:n,id:(0,s.randomUuid)()})}set font(n){n?this.ctx.font=n:console.error("\u7F3A\u7701 font value")}createCircularGradient(n,c,u){return this.ctx.createRadialGradient(n,c,0,n,c,u)}createLinearGradient(n,c,u,d){return this.ctx.createLinearGradient(n,c,u,d)}createPattern(n,c){return o.__awaiter(this,void 0,void 0,function*(){const u=yield(0,s.getImage)(n);return this.ctx.createPattern(u,c)})}measureText(n){return this.ctx.measureText(n)}parseDrawActions(){return this.actions.map(n=>n.value instanceof Promise?n.value:Promise.resolve(n.value))}addActionsMark(){let n=!0;for(let c=this.drawActionGroup.length-1;c>=0;c--){const u=this.drawActionGroup[c];c===this.drawActionGroup.length-1?u.group.forEach(d=>{d.reserve=!0}):u.group.forEach(d=>{d.reserve=n}),c===this.drawActionGroup.length-1&&u.group.length===this.drawActionGroup[c].group.length?n=!0:n=n&&u.reserve}}createDrawActionGroup(n){this.drawActionGroup.push({action:"draw",reserve:n,group:[...this.actions]})}draw(n,c){!n&&this.actions.length&&this.clear(),this.createDrawActionGroup(n),this.addActionsMark(),Promise.all(this.parseDrawActions()).then(u=>o.__awaiter(this,void 0,void 0,function*(){this.actions.forEach((d,p)=>o.__awaiter(this,void 0,void 0,function*(){switch(d.action){case"setFontSize":this._setFontSize(d);break;case"drawImage":this._drawImage(d);break;case"setShadow":this._setShadow(...d.args);break;case"draw":break;default:d.reserve&&this.toDrawActions(d,u,p)}})),c&&c(),this.clearActions()}))}toDrawActions(n,c,u){n.args?n.action==="drawImage"?this._drawImage(n):this.ctx[n.action](...n.args):n.value&&(this.ctx[n.action]=c[u])}_drawImage(n){return o.__awaiter(this,void 0,void 0,function*(){const c=yield(0,s.getImage)(n.args[0]),u=n.args[1]||0,d=n.args[2]||0;this.ctx.drawImage(c,u,d)})}_setFontSize(n){this.ctx.font=`${n.value}px sans-serif`}_setShadow(n=0,c=0,u=0,d="#000000"){this.ctx.shadowOffsetX=n,this.ctx.shadowOffsetY=c,this.ctx.shadowBlur=u,this.ctx.shadowColor=d}clearActions(){setTimeout(()=>{this.drawActionGroup=[],this.actions=[]},0)}clear(){const n=this.canvasWidth.replace(/px/,""),c=this.canvasHeight.replace(/px/,"");this.ctx.clearRect(0,0,+n,+c),this.clearCtxStyle()}clearCtxStyle(){this._setShadow(),r.styleProperties.forEach(n=>{this[n]=r.stylePropertyMap[n]})}}t.default=l},IozL:function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toolsProperties=t.styleProperties=t.stylePropertyMap=void 0,t.stylePropertyMap={fillStyle:"#000000",strokeStyle:"#000000",globalAlpha:1,lineWidth:1,lineCap:"butt",lineJoin:"miter",miterLimit:10,textBaseline:"alphabetic",lineDashOffset:0,textAlign:"start",globalCompositeOperation:"source-over"},t.styleProperties=Object.keys(t.stylePropertyMap),t.toolsProperties=["fillRect","clip","fill","rect","fillRect","strokeRect","stroke","scale","rotate","translate","save","restore","clearRect","fillText","moveTo","lineTo","arcTo","arc","transform","setTransform","beginPath","closePath","quadraticCurveTo","bezierCurveTo","setLineDash","strokeText","addColorStop","setShadow"]},"4uXw":function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const e=i("2GZr").__importDefault(i("Rer7"));t.default={createCanvasContext(r){return new e.default(r)}}},vO1r:function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImage=t.randomUuid=t.upperFirstChar=void 0;function i(r){return r.charAt(0).toUpperCase()+r.slice(1)}t.upperFirstChar=i;function o(){let r="";for(let s=0;s<4;s+=1)r+="0000000".concat(Math.floor(Math.random()*2821109907456).toString(36)).slice(-8);return r}t.randomUuid=o;function e(r){return new Promise(s=>{const l=new Image;l.src=r,l.onload=()=>{s(l)}})}t.getImage=e},FvaU:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=i("2GZr"),e=i("1jGT"),r=i("iY2I"),s=i("WItb");i("ou6+"),i("RAy4");const l=i("vkip"),a=o.__importDefault(i("EuCn")),n=i("ZQLn"),c=["\u676D\u5DDE","\u5317\u4EAC","\u4E0A\u6D77","\u5E7F\u5DDE","\u6DF1\u5733","\u6210\u90FD","\u91CD\u5E86","\u5929\u6D25","\u5357\u4EAC","\u82CF\u5DDE","\u6B66\u6C49","\u897F\u5B89"],u=[],d=["#"];a.default.cityList.forEach(h=>{const{cities:g,idx:m}=h;d.push(m),g.forEach(w=>{c.includes(w.name)&&u.push(w)})});class p extends s.BaseElement{constructor(){super(...arguments),this.searchCitys=[]}static get styles(){return n.Styles}dispatch(g,m){this.dispatchEvent(new CustomEvent(g,{detail:m,bubbles:!0,composed:!0}))}__handleChoose(g){const{long:m,lat:w,city:_,code:O}=g.target.dataset;_&&this.dispatch("choose",{longitude:m,latitude:w,city:_,adCode:O})}__handleClose(){this.dispatch("close",{})}__handleJump(g){const{idx:m}=g.target.dataset;if(m==="#"){this.cityList.scrollTo(0,0);return}const w=Array.from(this.cityIdxList).find(_=>_.dataset.idx===m);this.cityContent.scrollTo(0,w.offsetTop)}handleSearch(g){const m=g.detail.value;this.searchValue=m,this.searchCitys=[],m&&a.default.cityList.forEach(w=>{const{cities:_,idx:O}=w;O===m.toUpperCase()?this.searchCitys=this.searchCitys.concat(_):_.forEach(R=>{const{name:f,pinyin:v}=R;(m===f||m===v)&&this.searchCitys.push(R)})})}renderSearchList(){return this.searchCitys.length?(0,e.html)`<div class="search-city-list" @click="${this.__handleChoose}">
        ${(0,r.unsafeHTML)(this.searchCitys.map(g=>{const{latitude:m,longitude:w,name:_,districtCode:O}=g;return`<div class="city-list-cell" data-long="${w}" data-lat="${m}" data-city="${_}" data-code="${O}">${_}</div>`}).join(""))}
      </div>`:(0,e.html)`<div class="no-search-city-list">无结果</div>`}renderCityList(){return(0,e.html)` <div class="choose-navigation" @click="${this.__handleJump}">
        ${(0,r.unsafeHTML)(d.map(g=>`<div class="navigation-cell" data-idx="${g}">${g}</div>`).join(""))}
      </div>
      <div>
        <div class="hot-city">
          <div class="hot-city__title">热门城市</div>
          <div class="hot-city__list" @click="${this.__handleChoose}">
            ${(0,r.unsafeHTML)(u.map(g=>{const{latitude:m,longitude:w,name:_,districtCode:O}=g;return`
                    <div class="hot-city__cell" data-long="${w}" data-lat="${m}" data-city="${_}" data-code="${O}">${_}</div>
                  `}).join(""))}
          </div>
        </div>
        <div class="city-list" @click="${this.__handleChoose}">
          ${(0,r.unsafeHTML)(a.default.cityList.map(g=>{const{cities:m,idx:w}=g;return`
                  <div class="city-list__card">
                    <div class="city-list-title" data-idx="${w}">${w}</div>
                    <div class="city-list-cells">
                      ${m.map(_=>{const{latitude:O,longitude:R,name:f,districtCode:v}=_;return`
                            <div class="city-list-cell" data-long="${R}" data-lat="${O}" data-city="${f}" data-code="${v}">${f}</div>
                          `}).join("")}
                    </div>
                  </div>
                `}).join(""))}
        </div>
      </div>`}render(){return(0,e.html)`
      <div class="choose-city">
        <div class="choose-title">城市列表</div>
        <div class="close-wrap" @click="${this.__handleClose}">
          <img
            class="close"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0BAMAAAA5+MK5AAAAFVBMVEUAAACampqenp6ZmZmZmZmZmZmZmZnJDWztAAAABnRSTlMAsR3dlB6LAX1pAAAILElEQVR42uzRIU4EARBE0RnCAVCjSeAECDThJoSk738EypVA7F+5P/1Vtyj1jm3btm3btm3btm17uN4PSd89WU+fL4ei8/e1D+ptfg5F13zciz6jYD9nyg7Rx8F+zZSdoivYg152iu5gD3rZKbqCPehlp+gO9qCXnaIr2INedoruYA962Sm6gj3oZafoDvagl52iK9iDTtmL7mAPOmUvuoI96JS96A72oFP2oivYg07Zi+5gDzplL7qCPeiUvegO9qBT9qIr2INO2YvuYA86ZS+6gj3olL3oDvagU/aiK9iDTtmL7mAPOmUvuoI96JS96A72oFP2oivYg07Zi+5gDzplL7qCPeiUvegO9qBT9qIr2ItO2Z9nHOzX3Orr/0TBfnLCbhzsSFDJjgCd7MhPyY74nOxIT8mO8JzsyE7Jjuic7EhOyY7gnOx/3NGxDcBADMPA/bdOih+AnSl6ABHwIbckO2JrsiO1JDtCa7IjsyQ7ImuyI7EkOwJrsiOvJDviarIjrSQ7wmqyI6skO6JqsiOpJDuCarIjpyQ7YmqyI6UkO0A6X3ynR59hB0SKzf8G0EfYAZBmdQF9gh3wqHb96APsAEe3bEfXswMa5bYbXc4OYLTrZnQ1O2BR75tVtOwARV/wmkjZAclEwyqiZAcgMxWnh5AdcEx1jBo6doAxV/JZyNgBxWTLJqFiBxCzNZeDiB0wTPdMChp2gDBf9BhI2AFBomkRULAjgEjV8X8BO3x/pmv4/jk7fn6ofP/7jzs6JgIYgGEYyJ91OxSAMlVWCOTPur4OTX/8nVr+9jw1/Ol7avfb+9Lst/+h1a+AzuhXQWbz3wn/R8eGyOIChCE6VCT2VjAc0ZEjsLYEYomOJONbayie6MgyvLQIY4qONKM7qziu6MgzuLIMZIuORGMb60i+6Mg0tLAQZYyOVCP7KlnO6Mg1sK4UZo2OZPJttTRvdGQTLyvObo6OdNJd1dnd0ZFPuKo8uz06Eso21Wf3R0dG0aID2ReiI6Vkz/f82TeiI6dgze/s2VeiI2k0OqI2oyNrNDrCNqMjbTQ64jajI280OgI3oyNxNDoiN6MjczQ6QjejI3U0OmI3oz/k0TENAAAAgzD/rjcJ3OAAUtQtRUfhTnRULkVH6U501C5FR/FOdFQvRUf5TnTUL0VHA050dCBFRwtOdPQgRUcTTnR0IUVHG0509CFFRyNOdHQiRUcrTnT0IkVHM050dCNFRztOdPQjRUdDTnR0JEVHS0509CRFR1NOdHQlRUdbTnTELkUn7FJ0wm5FP3sV/exZ9LNX0c+eRT97Ff3sWfSzV9HPnkU/exX97Fn0s1fRz55FP3sV/exZ9LNX0c+eRT97Ff3sWfSzV9HPnkU/exX97Fn0s1fRz55FP3sVfeTdARHAMAzDQP6sJR4PYefd1ia2vOys6Muuir7srOjLroq+7Kzoy66Kvuys6PKjuy88/Jlzf27wkcY9yMLXF/fSCo8q3AEVPJZ0h9HwCsJdPMHrRnfJDFsLXEMJbCNyzWOwZdA1isL2YNcUDkcB3AAIHPtxw15wxM8NdsJxXjfEDUf3XWADjOlw4SwwkscFMcH4LRe6BqP2XMAijNV0YaowQtcFJ8O4bBeSDqPx3UIEuAbDLT+BK2/coiO43iry7pgIYACGYSB/1r0O3bVVVoLgzwKQu0/NDr+yu/vA8PDbyrvPSg+/qL37mPjwO+q7T8gPv55H8mR2BG9mR+5kdsRuZkfqZHaEbmZH5mR2RG5mR+JkdgRuZkfeZHbEbWZH2mR2hG1mR9ZkdkRtZkfSZHYA/X3M7+zRZ7IDpmLO9/zRR7IDpGbQhegT2QFRNak/+kB2ANSNao+uzw54ylnd0eXZAU47rDm6Ojugqac1y7TZAUw/rtclzQ5YE/NaVcrsADUzsNMkzA5IUxMbRbrsADQ3ss8jyw44kzPbNKrsADM7tMsiyg4o01ObJJrsADI/tsfxcEfHRgzEMBADv/+qHbgBMBIOKkDg3ErY0RmBuS1XKNjhEYnBHTcI2PEJkckNFzxnPxyQGf19/7Z6K3+avVW/7N6Kn4ZPtU/Ll9LH6UPl4/ad8Pvxn6PT9StZw/wCdLR/JOoAUKAjgUDSQiBBRwbjQQ+CBh0pDOdMDCJ05DAac0Go0JHEYMpGIUNHFmMhH4YOHWkMZYwcQnTkMRJxgijRkchAwkoiRUcm8oAXRYuOVMTfm9nF6MhF+rmbXY2OZIRf29nl6MhG9rGfXY+OdETfLrAPoCMfyafft8A+gY6EBF/+n599BB0ZRdERUhMdKUXREVMTHTlF0RFUEx1JRdF/7NGxiUIBAARROa4QwQ4MjMUa7MD+e3CyhZ84GA5OvBs9RdVEV1ZRdIXVRFdaUXTF1URXXlF0BdZEV2JRdEXWRFdmUXSF1kRXalF0xdZEV25RdAXXRFdyUXRF10RXdlF0hddEV3pRdMXXRFd+UXQF2ET/SvC/gW4I74fH3y2BLthf5+Pl0kD/zH5lc2RPoMOu0cfeQIddo489gQ67Rh97Ax12jT72BDrsGn3sDXTYNfrYE+iwa/SxN9Bh1+hjT6DDrtHH3kCHXaOPPYEOu0YfewMddo0+9gQ67Bp97A102DX62BPosGv0sTfQYdfoY0+gw67Rx95Ah12jjz2BDrtGH3sDHXaNPvYEOuwafewNdNg1+tgT6LBr9LE30GEfumZPoMM+dM3eQId96Jo9gQ770DV7Ax32oWv2BDrsQ9fsDXTYh67ZE+iwD932PEV6nH79ercHByQAAAAAgv6/bkegAgAA3ATSbN9YmBWT+wAAAABJRU5ErkJggg=="
            alt=""
          />
        </div>
        <div class="search-city">
          <tiga-icon
            class="search-icon"
            type="search"
            color="#86909c"
            size="10"
          ></tiga-icon>
          <tiga-input
            class="search-city-input"
            @input="${this.handleSearch}"
            placeholder="输入城市名、拼音或字母查询"
            placeholder-style="font-size: 14px;"
          ></tiga-input>
        </div>
        <div class="choose-city-content">
          ${this.searchValue?this.renderSearchList():this.renderCityList()}
        </div>
      </div>
    `}}o.__decorate([(0,e.internalProperty)()],p.prototype,"searchCitys",void 0),o.__decorate([(0,e.queryAll)(".city-list-title")],p.prototype,"cityIdxList",void 0),o.__decorate([(0,e.query)(".choose-city-content")],p.prototype,"cityContent",void 0),(0,l.defineElement)("private-choose-city",p)},EuCn:function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={alphabet:["A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","W","X","Y","Z"],cityList:[{idx:"A",cities:[{id:1415,name:"\u963F\u62C9\u5584\u76DF",pinyin:"alashanmeng",latitude:38.844814,longitude:105.706422,districtCode:152900},{id:96,name:"\u978D\u5C71",pinyin:"anshan",latitude:41.107769,longitude:122.994598,districtCode:210300},{id:70,name:"\u5B89\u5E86",pinyin:"anqing",latitude:30.54294,longitude:117.063538,districtCode:340800},{id:1648,name:"\u5B89\u9633\u53BF",pinyin:"anyang",latitude:36.130585,longitude:114.130207,districtCode:410500},{id:1905,name:"\u963F\u575D\u85CF\u65CF\u7F8C\u65CF\u81EA\u6CBB\u5DDE",pinyin:"abazangzuqiangzuzizhizhou",latitude:31.899792,longitude:102.221374,districtCode:513200},{id:273,name:"\u5B89\u987A",pinyin:"anshun",latitude:26.25367,longitude:105.946198,districtCode:520400},{id:2188,name:"\u963F\u91CC\u5730\u533A",pinyin:"alidiqu",latitude:30.40051,longitude:81.1454,districtCode:542500},{id:272,name:"\u5B89\u5EB7",pinyin:"ankang",latitude:32.68486,longitude:109.02932,districtCode:610900},{id:327,name:"\u963F\u62C9\u5C14",pinyin:"alaer",latitude:40.547981,longitude:81.28067,districtCode:659002},{id:2446,name:"\u963F\u514B\u82CF\u5730\u533A",pinyin:"akesudiqu",latitude:41.170712,longitude:80.265068,districtCode:652900},{id:2498,name:"\u963F\u52D2\u6CF0\u5730\u533A",pinyin:"aletaidiqu",latitude:47.848393,longitude:88.13963,districtCode:654300},{id:216,name:"\u6FB3\u95E8\u7279\u522B\u884C\u653F\u533A",pinyin:"aomen",latitude:22.186834,longitude:113.54303,districtCode:82e4}]},{idx:"B",cities:[{id:3,name:"\u5317\u4EAC",pinyin:"beijing",latitude:39.90469,longitude:116.407173,districtCode:11e4},{id:95,name:"\u4FDD\u5B9A",pinyin:"baoding",latitude:38.873959,longitude:115.464592,districtCode:130600},{id:68,name:"\u5305\u5934",pinyin:"baotou",latitude:40.65781,longitude:109.84021,districtCode:150200},{id:914,name:"\u5DF4\u5F66\u6DD6\u5C14",pinyin:"bayannaoer",latitude:40.743172,longitude:107.387733,districtCode:150800},{id:1427,name:"\u672C\u6EAA\u6EE1\u65CF\u81EA\u6CBB\u53BF",pinyin:"benximanzuzizhixian",latitude:41.300344,longitude:124.126156,districtCode:210500},{id:223,name:"\u767D\u57CE",pinyin:"baicheng",latitude:45.619598,longitude:122.838707,districtCode:220800},{id:397,name:"\u767D\u5C71",pinyin:"baishan",latitude:41.9408,longitude:126.424431,districtCode:220600},{id:75,name:"\u868C\u57E0",pinyin:"bengbu",latitude:32.915482,longitude:117.38932,districtCode:340300},{id:313,name:"\u4EB3\u5DDE",pinyin:"bozhou",latitude:33.844608,longitude:115.779312,districtCode:341600},{id:134,name:"\u6EE8\u5DDE",pinyin:"binzhou",latitude:37.382111,longitude:117.972794,districtCode:371600},{id:156,name:"\u767E\u8272",pinyin:"baise",latitude:23.902161,longitude:106.618378,districtCode:451e3},{id:290,name:"\u5317\u6D77",pinyin:"beihai",latitude:21.481119,longitude:109.120079,districtCode:450500},{id:1845,name:"\u767D\u6C99\u9ECE\u65CF\u81EA\u6CBB\u53BF",pinyin:"baishalizuzizhixian",latitude:19.360565,longitude:109.122688,districtCode:469025},{id:1848,name:"\u4FDD\u4EAD\u9ECE\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF",pinyin:"baotinglizumiaozuzizhixian",latitude:18.636371,longitude:109.70245,districtCode:469029},{id:317,name:"\u5DF4\u4E2D",pinyin:"bazhong",latitude:31.867149,longitude:106.74733,districtCode:511900},{id:136,name:"\u6BD5\u8282",pinyin:"bijie",latitude:27.29847,longitude:105.305038,districtCode:520500},{id:264,name:"\u4FDD\u5C71",pinyin:"baoshan",latitude:25.112049,longitude:99.161812,districtCode:530500},{id:244,name:"\u5B9D\u9E21",pinyin:"baoji",latitude:34.361938,longitude:107.23732,districtCode:610300},{id:522,name:"\u767D\u94F6",pinyin:"baiyin",latitude:36.544701,longitude:104.137733,districtCode:620400},{id:2432,name:"\u535A\u5C14\u5854\u62C9\u8499\u53E4\u81EA\u6CBB\u5DDE",pinyin:"boertalamengguzizhizhou",latitude:44.903258,longitude:82.074778,districtCode:652700},{id:2437,name:"\u5DF4\u97F3\u90ED\u695E\u8499\u53E4\u81EA\u6CBB\u5DDE",pinyin:"bayinguolengmengguzizhizhou",latitude:41.765086,longitude:86.147471,districtCode:652800},{id:5894,name:"\u5317\u5C6F",pinyin:"beitun",latitude:47.353177,longitude:87.824932,districtCode:659005}]},{idx:"C",cities:[{id:1230,name:"\u627F\u5FB7\u53BF",pinyin:"chengde",latitude:40.768637,longitude:118.172496,districtCode:130800},{id:175,name:"\u6CA7\u5DDE",pinyin:"cangzhou",latitude:38.304409,longitude:116.838692,districtCode:130900},{id:237,name:"\u957F\u6CBB",pinyin:"changzhi",latitude:36.195808,longitude:113.116493,districtCode:140400},{id:337,name:"\u8D64\u5CF0",pinyin:"chifeng",latitude:42.258598,longitude:118.888939,districtCode:150400},{id:1440,name:"\u671D\u9633\u53BF",pinyin:"chaoyang",latitude:41.526342,longitude:120.404217,districtCode:211300},{id:12,name:"\u957F\u6625",pinyin:"changchun",latitude:43.816021,longitude:125.32357,districtCode:220100},{id:59,name:"\u5E38\u5DDE",pinyin:"changzhou",latitude:31.81072,longitude:119.973648,districtCode:320400},{id:83,name:"\u6EC1\u5DDE",pinyin:"chuzhou",latitude:32.301811,longitude:118.316833,districtCode:341100},{id:246,name:"\u6C60\u5DDE",pinyin:"chizhou",latitude:30.66469,longitude:117.491417,districtCode:341700},{id:21,name:"\u957F\u6C99",pinyin:"changsha",latitude:28.227779,longitude:112.938858,districtCode:430100},{id:120,name:"\u5E38\u5FB7",pinyin:"changde",latitude:29.03158,longitude:111.69854,districtCode:430700},{id:178,name:"\u90F4\u5DDE",pinyin:"chenzhou",latitude:25.77063,longitude:113.014847,districtCode:431e3},{id:235,name:"\u6F6E\u5DDE",pinyin:"chaozhou",latitude:23.6567,longitude:116.622963,districtCode:445100},{id:289,name:"\u5D07\u5DE6",pinyin:"chongzuo",latitude:22.37895,longitude:107.364853,districtCode:451400},{id:582,name:"\u6F84\u8FC8\u53BF",pinyin:"chengmai",latitude:19.738489,longitude:110.004868,districtCode:469023},{id:1846,name:"\u660C\u6C5F\u9ECE\u65CF\u81EA\u6CBB\u53BF",pinyin:"changjianglizuzizhixian",latitude:19.260968,longitude:109.053351,districtCode:469026},{id:44,name:"\u91CD\u5E86",pinyin:"chongqing",latitude:29.564711,longitude:106.550728,districtCode:5e5},{id:14,name:"\u6210\u90FD",pinyin:"chengdu",latitude:30.5702,longitude:104.064758,districtCode:510100},{id:2071,name:"\u695A\u96C4\u5F5D\u65CF\u81EA\u6CBB\u5DDE",pinyin:"chuxiongyizuzizhizhou",latitude:25.041988,longitude:101.546046,districtCode:532300},{id:2151,name:"\u660C\u90FD",pinyin:"changdu",latitude:31.136875,longitude:97.178452,districtCode:540300},{id:2425,name:"\u660C\u5409\u56DE\u65CF\u81EA\u6CBB\u5DDE",pinyin:"changjihuizuzizhizhou",latitude:44.014577,longitude:87.304012,districtCode:652300}]},{idx:"D",cities:[{id:169,name:"\u5927\u540C",pinyin:"datong",latitude:40.07637,longitude:113.300011,districtCode:140200},{id:1511,name:"\u5927\u5174\u5B89\u5CAD\u5730\u533A",pinyin:"daxinganlingdiqu",latitude:51.672255,longitude:124.398555,districtCode:152200},{id:20,name:"\u5927\u8FDE",pinyin:"dalian",latitude:38.913689,longitude:121.614761,districtCode:210200},{id:145,name:"\u4E39\u4E1C",pinyin:"dandong",latitude:39.999802,longitude:124.35601,districtCode:210600},{id:86,name:"\u5927\u5E86",pinyin:"daqing",latitude:46.587582,longitude:125.103073,districtCode:230600},{id:1511,name:"\u5927\u5174\u5B89\u5CAD\u5730\u533A",pinyin:"daxinganlingdiqu",latitude:51.672255,longitude:124.398555,districtCode:232700},{id:132,name:"\u4E1C\u8425",pinyin:"dongying",latitude:37.433651,longitude:118.67466,districtCode:370500},{id:224,name:"\u5FB7\u5DDE",pinyin:"dezhou",latitude:37.435501,longitude:116.359268,districtCode:371400},{id:51,name:"\u4E1C\u839E",pinyin:"dongguan",latitude:23.020691,longitude:113.751808,districtCode:441900},{id:286,name:"\u510B\u5DDE",pinyin:"danzhou",latitude:19.520929,longitude:109.580688,districtCode:460400},{id:583,name:"\u4E1C\u65B9",pinyin:"dongfang",latitude:19.09614,longitude:108.653671,districtCode:469007},{id:586,name:"\u5B9A\u5B89\u53BF",pinyin:"dingan",latitude:19.68121,longitude:110.359299,districtCode:469021},{id:131,name:"\u5FB7\u9633",pinyin:"deyang",latitude:31.126789,longitude:104.397903,districtCode:510600},{id:247,name:"\u8FBE\u5DDE",pinyin:"dazhou",latitude:31.208639,longitude:107.467911,districtCode:511700},{id:2100,name:"\u5927\u7406\u767D\u65CF\u81EA\u6CBB\u5DDE",pinyin:"dalibaizuzizhizhou",latitude:25.592765,longitude:100.240037,districtCode:532900},{id:2111,name:"\u5FB7\u5B8F\u50A3\u65CF\u666F\u9887\u65CF\u81EA\u6CBB\u5DDE",pinyin:"dehongdaizujingpozuzizhizhou",latitude:24.436694,longitude:98.578363,districtCode:533100},{id:2122,name:"\u8FEA\u5E86\u85CF\u65CF\u81EA\u6CBB\u5DDE",pinyin:"diqingzangzuzizhizhou",latitude:27.826853,longitude:99.706463,districtCode:533400},{id:2323,name:"\u5B9A\u897F",pinyin:"dingxi",latitude:35.579578,longitude:104.626294,districtCode:621100}]},{idx:"E",cities:[{id:395,name:"\u9102\u5C14\u591A\u65AF",pinyin:"eerduosi",latitude:39.608452,longitude:109.780869,districtCode:150600},{id:184,name:"\u9102\u5DDE",pinyin:"ezhou",latitude:30.39085,longitude:114.894951,districtCode:420700},{id:1691,name:"\u6069\u65BD\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE",pinyin:"enshitujiazumiaozuzizhizhou",latitude:30.283114,longitude:109.48699,districtCode:422800},{id:213,name:"\u5CE8\u7709\u5C71",pinyin:"emeishan",latitude:29.60125,longitude:103.484467,districtCode:511400}]},{idx:"F",cities:[{id:1424,name:"\u629A\u987A\u53BF",pinyin:"fushun",latitude:41.922644,longitude:124.097979,districtCode:210400},{id:1433,name:"\u961C\u65B0\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF",pinyin:"fuxinmengguzuzizhixian",latitude:42.058607,longitude:121.743125,districtCode:210900},{id:195,name:"\u961C\u9633",pinyin:"fuyang",latitude:32.889629,longitude:115.814949,districtCode:341200},{id:9,name:"\u798F\u5DDE",pinyin:"fuzhou",latitude:26.074209,longitude:119.296471,districtCode:350100},{id:219,name:"\u629A\u5DDE",pinyin:"fuzhou",latitude:27.947809,longitude:116.358093,districtCode:361e3},{id:24,name:"\u4F5B\u5C71",pinyin:"foshan",latitude:23.021851,longitude:113.121918,districtCode:440600},{id:1794,name:"\u9632\u57CE\u6E2F",pinyin:"fangchenggang",latitude:21.6138,longitude:108.33799,districtCode:450600}]},{idx:"G",cities:[{id:129,name:"\u8D63\u5DDE",pinyin:"ganzhou",latitude:25.831091,longitude:114.934761,districtCode:360700},{id:4,name:"\u5E7F\u5DDE",pinyin:"guangzhou",latitude:23.12908,longitude:113.264359,districtCode:440100},{id:98,name:"\u6842\u6797",pinyin:"guilin",latitude:25.273609,longitude:110.290024,districtCode:450300},{id:431,name:"\u8D35\u6E2F",pinyin:"guigang",latitude:23.11306,longitude:109.597641,districtCode:450800},{id:262,name:"\u5E7F\u5143",pinyin:"guangyuan",latitude:32.43549,longitude:105.843567,districtCode:510800},{id:316,name:"\u5E7F\u5B89",pinyin:"guangan",latitude:30.455959,longitude:106.633217,districtCode:511600},{id:1919,name:"\u7518\u5B5C\u85CF\u65CF\u81EA\u6CBB\u5DDE",pinyin:"ganzizangzuzizhizhou",latitude:30.04932,longitude:101.96254,districtCode:513300},{id:137,name:"\u8D35\u9633",pinyin:"guiyang",latitude:26.64702,longitude:106.630241,districtCode:520100},{id:2347,name:"\u7518\u5357\u85CF\u65CF\u81EA\u6CBB\u5DDE",pinyin:"gannanzangzuzizhizhou",latitude:34.986354,longitude:102.911008,districtCode:623e3},{id:2381,name:"\u679C\u6D1B\u85CF\u65CF\u81EA\u6CBB\u5DDE",pinyin:"guoluozangzuzizhizhou",latitude:34.468685,longitude:100.247076,districtCode:632600},{id:2410,name:"\u56FA\u539F",pinyin:"guyuan",latitude:36.004561,longitude:106.285241,districtCode:640400}]},{idx:"H",cities:[{id:170,name:"\u90AF\u90F8",pinyin:"handan",latitude:36.625561,longitude:114.539177,districtCode:130400},{id:266,name:"\u8861\u6C34",pinyin:"hengshui",latitude:37.738861,longitude:115.67054,districtCode:131100},{id:92,name:"\u547C\u548C\u6D69\u7279",pinyin:"huhehaote",latitude:40.841492,longitude:111.751991,districtCode:150100},{id:398,name:"\u547C\u4F26\u8D1D\u5C14",pinyin:"hulunbeier",latitude:49.211632,longitude:119.765839,districtCode:150700},{id:218,name:"\u846B\u82A6\u5C9B",pinyin:"huludao",latitude:40.710999,longitude:120.83699,districtCode:211400},{id:10,name:"\u54C8\u5C14\u6EE8",pinyin:"haerbin",latitude:45.802158,longitude:126.535797,districtCode:230100},{id:697,name:"\u9E64\u5C97",pinyin:"hegang",latitude:47.349892,longitude:130.297852,districtCode:230400},{id:1149,name:"\u9ED1\u6CB3",pinyin:"heihe",latitude:50.245232,longitude:127.528519,districtCode:231100},{id:114,name:"\u6DEE\u5B89",pinyin:"huaian",latitude:33.610161,longitude:119.015953,districtCode:320800},{id:2,name:"\u676D\u5DDE",pinyin:"hangzhou",latitude:30.274151,longitude:120.155151,districtCode:330100},{id:61,name:"\u6E56\u5DDE",pinyin:"huzhou",latitude:30.893049,longitude:120.088051,districtCode:330500},{id:17,name:"\u5408\u80A5",pinyin:"hefei",latitude:31.82057,longitude:117.229012,districtCode:340100},{id:53,name:"\u6DEE\u5357",pinyin:"huainan",latitude:32.625488,longitude:116.999802,districtCode:340400},{id:199,name:"\u9EC4\u5C71",pinyin:"huangshan",latitude:29.71517,longitude:118.338661,districtCode:341e3},{id:214,name:"\u6DEE\u5317",pinyin:"huaibei",latitude:33.67078,longitude:116.926224,districtCode:340600},{id:177,name:"\u83CF\u6CFD",pinyin:"heze",latitude:35.233631,longitude:115.481148,districtCode:371700},{id:406,name:"\u9E64\u58C1",pinyin:"hebi",latitude:35.747002,longitude:114.297447,districtCode:410600},{id:152,name:"\u9EC4\u77F3",pinyin:"huangshi",latitude:30.19953,longitude:115.038902,districtCode:420200},{id:217,name:"\u9EC4\u5188",pinyin:"huanggang",latitude:30.45347,longitude:114.872383,districtCode:421100},{id:116,name:"\u8861\u9633",pinyin:"hengyang",latitude:26.89324,longitude:112.571953,districtCode:430400},{id:133,name:"\u6000\u5316",pinyin:"huaihua",latitude:27.56974,longitude:110.001602,districtCode:431200},{id:57,name:"\u60E0\u5DDE",pinyin:"huizhou",latitude:23.11075,longitude:114.416786,districtCode:441300},{id:365,name:"\u6CB3\u6E90",pinyin:"heyuan",latitude:23.74365,longitude:114.700653,districtCode:441600},{id:252,name:"\u8D3A\u5DDE",pinyin:"hezhou",latitude:24.40346,longitude:111.566551,districtCode:451100},{id:1167,name:"\u6CB3\u6C60",pinyin:"hechi",latitude:24.695899,longitude:108.062105,districtCode:451200},{id:62,name:"\u6D77\u53E3",pinyin:"haikou",latitude:20.04422,longitude:110.19989,districtCode:460100},{id:2081,name:"\u7EA2\u6CB3\u54C8\u5C3C\u65CF\u5F5D\u65CF\u81EA\u6CBB\u5DDE",pinyin:"honghehanizuyizuzizhizhou",latitude:23.366775,longitude:103.384182,districtCode:532500},{id:259,name:"\u6C49\u4E2D",pinyin:"hanzhong",latitude:33.067612,longitude:107.023773,districtCode:610700},{id:2359,name:"\u6D77\u4E1C",pinyin:"haidong",latitude:36.502916,longitude:102.10327,districtCode:630200},{id:2365,name:"\u6D77\u5317\u85CF\u65CF\u81EA\u6CBB\u5DDE",pinyin:"haibeizangzuzizhizhou",latitude:36.959435,longitude:100.901059,districtCode:632200},{id:2370,name:"\u9EC4\u5357\u85CF\u65CF\u81EA\u6CBB\u5DDE",pinyin:"huangnanzangzuzizhizhou",latitude:35.517744,longitude:102.019988,districtCode:632300},{id:2375,name:"\u6D77\u5357\u85CF\u65CF\u81EA\u6CBB\u5DDE",pinyin:"hainanzangzuzizhizhou",latitude:36.280353,longitude:100.619542,districtCode:632500},{id:2395,name:"\u6D77\u897F\u8499\u53E4\u65CF\u85CF\u65CF\u81EA\u6CBB\u5DDE",pinyin:"haiximengguzuzangzuzizhizhou",latitude:37.374663,longitude:97.370785,districtCode:632800},{id:2422,name:"\u54C8\u5BC6",pinyin:"hami",latitude:42.833248,longitude:93.51316,districtCode:650500},{id:2471,name:"\u548C\u7530\u5730\u533A",pinyin:"hetiandiqu",latitude:37.110687,longitude:79.92533,districtCode:653200}]},{idx:"J",cities:[{id:153,name:"\u664B\u4E2D",pinyin:"jinzhong",latitude:37.687019,longitude:112.752777,districtCode:140700},{id:437,name:"\u664B\u57CE",pinyin:"jincheng",latitude:35.490391,longitude:112.851128,districtCode:140500},{id:110,name:"\u9526\u5DDE",pinyin:"jinzhou",latitude:41.09515,longitude:121.127029,districtCode:210700},{id:101,name:"\u5409\u6797",pinyin:"jilin",latitude:43.837841,longitude:126.549438,districtCode:220200},{id:88,name:"\u4F73\u6728\u65AF",pinyin:"jiamusi",latitude:46.80019,longitude:130.320602,districtCode:230800},{id:221,name:"\u9E21\u897F",pinyin:"jixi",latitude:45.295238,longitude:130.969543,districtCode:230300},{id:55,name:"\u5609\u5174",pinyin:"jiaxing",latitude:30.74501,longitude:120.755501,districtCode:330400},{id:67,name:"\u91D1\u534E",pinyin:"jinhua",latitude:29.078119,longitude:119.647591,districtCode:330700},{id:49,name:"\u666F\u5FB7\u9547",pinyin:"jingdezhen",latitude:29.26869,longitude:117.178391,districtCode:360200},{id:66,name:"\u4E5D\u6C5F",pinyin:"jiujiang",latitude:29.705481,longitude:116.001457,districtCode:360400},{id:220,name:"\u5409\u5B89",pinyin:"jian",latitude:27.113819,longitude:114.993759,districtCode:360800},{id:19,name:"\u6D4E\u5357",pinyin:"jinan",latitude:36.665291,longitude:116.994926,districtCode:370100},{id:47,name:"\u6D4E\u5B81",pinyin:"jining",latitude:35.414589,longitude:116.587242,districtCode:370800},{id:144,name:"\u7126\u4F5C",pinyin:"jiaozuo",latitude:35.21563,longitude:113.242012,districtCode:410800},{id:415,name:"\u6D4E\u6E90",pinyin:"jiyuan",latitude:35.06707,longitude:112.60273,districtCode:419001},{id:100,name:"\u8346\u5DDE",pinyin:"jingzhou",latitude:30.334789,longitude:112.240692,districtCode:421e3},{id:151,name:"\u8346\u95E8",pinyin:"jingmen",latitude:31.03546,longitude:112.199448,districtCode:420800},{id:130,name:"\u6C5F\u95E8",pinyin:"jiangmen",latitude:22.57865,longitude:113.081612,districtCode:440700},{id:231,name:"\u63ED\u9633",pinyin:"jieyang",latitude:23.549721,longitude:116.372711,districtCode:445200},{id:526,name:"\u9152\u6CC9",pinyin:"jiuquan",latitude:39.732552,longitude:98.493942,districtCode:620900},{id:527,name:"\u5609\u5CEA\u5173",pinyin:"jiayuguan",latitude:39.772011,longitude:98.290108,districtCode:620200},{id:528,name:"\u91D1\u660C",pinyin:"jinchang",latitude:38.520061,longitude:102.187592,districtCode:620300}]},{idx:"K",cities:[{id:183,name:"\u5F00\u5C01",pinyin:"kaifeng",latitude:34.79726,longitude:114.307312,districtCode:410200},{id:23,name:"\u6606\u660E",pinyin:"kunming",latitude:24.87966,longitude:102.833221,districtCode:530100},{id:1053,name:"\u514B\u62C9\u739B\u4F9D",pinyin:"kelamayi",latitude:45.57999,longitude:84.88927,districtCode:650200},{id:2454,name:"\u514B\u5B5C\u52D2\u82CF\u67EF\u5C14\u514B\u5B5C\u81EA\u6CBB\u5DDE",pinyin:"kezilesukeerkezizizhizhou",latitude:39.7111,longitude:76.174806,districtCode:653e3},{id:2459,name:"\u5580\u4EC0\u5730\u533A",pinyin:"kashidiqu",latitude:39.467664,longitude:75.989138,districtCode:653100},{id:5896,name:"\u53EF\u514B\u8FBE\u62C9",pinyin:"kekedala",latitude:43.6832,longitude:80.63579,districtCode:659008},{id:5897,name:"\u6606\u7389",pinyin:"kunyu",latitude:37.207994,longitude:79.287372,districtCode:659009}]},{idx:"L",cities:[{id:40,name:"\u5ECA\u574A",pinyin:"langfang",latitude:39.53775,longitude:116.68376,districtCode:131e3},{id:168,name:"\u4E34\u6C7E",pinyin:"linfen",latitude:36.088219,longitude:111.519623,districtCode:141e3},{id:281,name:"\u5415\u6881",pinyin:"lvliang",latitude:37.519341,longitude:111.141647,districtCode:141100},{id:222,name:"\u8FBD\u9633",pinyin:"liaoyang",latitude:41.268089,longitude:123.237358,districtCode:211e3},{id:227,name:"\u8FBD\u6E90",pinyin:"liaoyuan",latitude:42.88805,longitude:125.143677,districtCode:220400},{id:89,name:"\u8FDE\u4E91\u6E2F",pinyin:"lianyungang",latitude:34.596691,longitude:119.222954,districtCode:320700},{id:73,name:"\u4E3D\u6C34",pinyin:"lishui",latitude:28.467199,longitude:119.922928,districtCode:331100},{id:85,name:"\u516D\u5B89",pinyin:"liuan",latitude:31.73488,longitude:116.523239,districtCode:341500},{id:181,name:"\u9F99\u5CA9",pinyin:"longyan",latitude:25.075041,longitude:117.01722,districtCode:350800},{id:60,name:"\u4E34\u6C82",pinyin:"linyi",latitude:35.104649,longitude:118.356461,districtCode:371300},{id:84,name:"\u804A\u57CE",pinyin:"liaocheng",latitude:36.45702,longitude:115.985489,districtCode:371500},{id:94,name:"\u6D1B\u9633",pinyin:"luoyang",latitude:34.618118,longitude:112.453613,districtCode:410300},{id:400,name:"\u6F2F\u6CB3",pinyin:"luohe",latitude:33.58149,longitude:114.016808,districtCode:411100},{id:143,name:"\u5A04\u5E95",pinyin:"loudi",latitude:27.697281,longitude:111.994583,districtCode:431300},{id:81,name:"\u67F3\u5DDE",pinyin:"liuzhou",latitude:24.32543,longitude:109.41552,districtCode:450200},{id:1827,name:"\u6765\u5BBE",pinyin:"laibin",latitude:23.733766,longitude:109.229772,districtCode:451300},{id:584,name:"\u4E34\u9AD8\u53BF",pinyin:"lingao",latitude:19.91243,longitude:109.690773,districtCode:469024},{id:1146,name:"\u9675\u6C34\u9ECE\u65CF\u81EA\u6CBB\u53BF",pinyin:"lingshuilizuzizhixian",latitude:18.50596,longitude:110.037201,districtCode:469028},{id:1847,name:"\u4E50\u4E1C\u9ECE\u65CF\u81EA\u6CBB\u53BF",pinyin:"ledonglizuzizhixian",latitude:18.74758,longitude:109.175444,districtCode:469027},{id:106,name:"\u6CF8\u5DDE",pinyin:"luzhou",latitude:28.8717,longitude:105.442574,districtCode:510500},{id:139,name:"\u4E50\u5C71",pinyin:"leshan",latitude:29.55221,longitude:103.765388,districtCode:511100},{id:1938,name:"\u51C9\u5C71\u5F5D\u65CF\u81EA\u6CBB\u5DDE",pinyin:"liangshanyizuzizhizhou",latitude:27.886762,longitude:102.258746,districtCode:513400},{id:441,name:"\u516D\u76D8\u6C34",pinyin:"liupanshui",latitude:26.68469,longitude:104.746681,districtCode:520200},{id:155,name:"\u4E3D\u6C5F",pinyin:"lijiang",latitude:26.85648,longitude:100.227097,districtCode:530700},{id:2063,name:"\u4E34\u6CA7",pinyin:"lincang",latitude:23.886567,longitude:100.08697,districtCode:530900},{id:232,name:"\u62C9\u8428",pinyin:"lasa",latitude:29.64415,longitude:91.114502,districtCode:540100},{id:2196,name:"\u6797\u829D",pinyin:"linzhi",latitude:29.654693,longitude:94.362348,districtCode:540400},{id:41,name:"\u5170\u5DDE",pinyin:"lanzhou",latitude:36.06138,longitude:103.83417,districtCode:620100},{id:2330,name:"\u9647\u5357",pinyin:"longnan",latitude:33.388598,longitude:104.929379,districtCode:621200},{id:2339,name:"\u4E34\u590F\u56DE\u65CF\u81EA\u6CBB\u5DDE",pinyin:"linxiahuizuzizhizhou",latitude:35.599446,longitude:103.212006,districtCode:622900}]},{idx:"M",cities:[{id:90,name:"\u9A6C\u978D\u5C71",pinyin:"maanshan",latitude:31.67067,longitude:118.506111,districtCode:210300},{id:138,name:"\u7261\u4E39\u6C5F",pinyin:"mudanjiang",latitude:44.552689,longitude:129.632446,districtCode:231e3},{id:90,name:"\u9A6C\u978D\u5C71",pinyin:"maanshan",latitude:31.67067,longitude:118.506111,districtCode:340500},{id:56,name:"\u6885\u5DDE",pinyin:"meizhou",latitude:24.288441,longitude:116.122643,districtCode:441400},{id:123,name:"\u8302\u540D",pinyin:"maoming",latitude:21.66329,longitude:110.925232,districtCode:440900},{id:82,name:"\u7EF5\u9633",pinyin:"mianyang",latitude:31.46751,longitude:104.679604,districtCode:510700},{id:312,name:"\u7709\u5C71",pinyin:"meishan",latitude:30.07563,longitude:103.848511,districtCode:511400}]},{idx:"N",cities:[{id:6,name:"\u5357\u4EAC",pinyin:"nanjing",latitude:31.84178,longitude:118.504669,districtCode:320100},{id:39,name:"\u5357\u901A",pinyin:"nantong",latitude:31.97958,longitude:120.893707,districtCode:320600},{id:18,name:"\u5B81\u6CE2",pinyin:"ningbo",latitude:29.873859,longitude:121.55027,districtCode:330200},{id:117,name:"\u5357\u5E73",pinyin:"nanping",latitude:27.33175,longitude:118.12043,districtCode:350700},{id:271,name:"\u5B81\u5FB7",pinyin:"ningde",latitude:26.66571,longitude:119.548187,districtCode:350900},{id:25,name:"\u5357\u660C",pinyin:"nanchang",latitude:28.68202,longitude:115.857941,districtCode:360100},{id:260,name:"\u5357\u9633",pinyin:"nanyang",latitude:32.99073,longitude:112.528511,districtCode:411300},{id:45,name:"\u5357\u5B81",pinyin:"nanning",latitude:22.81673,longitude:108.366898,districtCode:450100},{id:99,name:"\u5357\u5145",pinyin:"nanchong",latitude:30.837311,longitude:106.110733,districtCode:511300},{id:104,name:"\u5185\u6C5F",pinyin:"neijiang",latitude:29.580151,longitude:105.058441,districtCode:511e3},{id:2117,name:"\u6012\u6C5F\u5088\u50F3\u65CF\u81EA\u6CBB\u5DDE",pinyin:"nujianglisuzuzizhizhou",latitude:25.80574,longitude:98.85928,districtCode:533300},{id:2176,name:"\u90A3\u66F2",pinyin:"naqu",latitude:31.47694,longitude:92.05808,districtCode:540600}]},{idx:"P",cities:[{id:340,name:"\u76D8\u9526",pinyin:"panjin",latitude:41.119961,longitude:122.070778,districtCode:211100},{id:180,name:"\u8386\u7530",pinyin:"putian",latitude:25.454,longitude:119.007713,districtCode:350300},{id:150,name:"\u840D\u4E61",pinyin:"pingxiang",latitude:27.62289,longitude:113.854271,districtCode:360300},{id:269,name:"\u5E73\u9876\u5C71",pinyin:"pingdingshan",latitude:33.76609,longitude:113.192413,districtCode:410400},{id:1178,name:"\u6FEE\u9633\u53BF",pinyin:"puyang",latitude:35.710349,longitude:115.023844,districtCode:410900},{id:315,name:"\u6500\u679D\u82B1",pinyin:"panzhihua",latitude:26.582279,longitude:101.718719,districtCode:510400},{id:294,name:"\u666E\u6D31",pinyin:"puer",latitude:22.825211,longitude:100.96624,districtCode:530800},{id:524,name:"\u5E73\u51C9",pinyin:"pingliang",latitude:35.54303,longitude:106.665298,districtCode:620800}]},{idx:"Q",cities:[{id:63,name:"\u79E6\u7687\u5C9B",pinyin:"qinhuangdao",latitude:39.935452,longitude:119.59964,districtCode:130300},{id:91,name:"\u9F50\u9F50\u54C8\u5C14",pinyin:"qiqihaer",latitude:47.354309,longitude:123.917961,districtCode:230200},{id:698,name:"\u4E03\u53F0\u6CB3",pinyin:"qitaihe",latitude:45.770649,longitude:131.003067,districtCode:230900},{id:182,name:"\u8862\u5DDE",pinyin:"quzhou",latitude:28.935921,longitude:118.874191,districtCode:330800},{id:102,name:"\u6CC9\u5DDE",pinyin:"quanzhou",latitude:24.87389,longitude:118.675873,districtCode:350500},{id:28,name:"\u9752\u5C9B",pinyin:"qingdao",latitude:36.066231,longitude:120.382988,districtCode:370200},{id:445,name:"\u6F5C\u6C5F",pinyin:"qianjiang",latitude:30.40147,longitude:112.8993,districtCode:429005},{id:371,name:"\u6E05\u8FDC",pinyin:"qingyuan",latitude:23.682011,longitude:113.056152,districtCode:441800},{id:157,name:"\u94A6\u5DDE",pinyin:"qinzhou",latitude:21.9797,longitude:108.654312,districtCode:450700},{id:278,name:"\u743C\u6D77",pinyin:"qionghai",latitude:19.258381,longitude:110.47464,districtCode:469002},{id:1849,name:"\u743C\u4E2D\u9ECE\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF",pinyin:"qiongzhonglizumiaozuzizhixian",latitude:19.03557,longitude:109.839996,districtCode:469030},{id:1175,name:"\u9ED4\u5357\u5E03\u4F9D\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE",pinyin:"qiannanbuyizumiaozuzizhizhou",latitude:26.258219,longitude:107.517156,districtCode:522700},{id:1176,name:"\u9ED4\u4E1C\u5357\u82D7\u65CF\u4F97\u65CF\u81EA\u6CBB\u5DDE",pinyin:"qiandongnanmiaozudongzuzizhizhou",latitude:26.583352,longitude:107.977488,districtCode:522600},{id:1177,name:"\u9ED4\u897F\u5357\u5E03\u4F9D\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE",pinyin:"qianxinanbuyizumiaozuzizhizhou",latitude:25.08812,longitude:104.897971,districtCode:522300},{id:265,name:"\u66F2\u9756",pinyin:"qujing",latitude:25.490021,longitude:103.796249,districtCode:530300},{id:341,name:"\u5E86\u9633",pinyin:"qingyang",latitude:35.709782,longitude:107.642921,districtCode:621e3}]},{idx:"R",cities:[{id:58,name:"\u65E5\u7167",pinyin:"rizhao",latitude:35.416458,longitude:119.527191,districtCode:371100},{id:2133,name:"\u65E5\u5580\u5219",pinyin:"rikaze",latitude:29.261454,longitude:88.884348,districtCode:540200}]},{idx:"S",cities:[{id:31,name:"\u77F3\u5BB6\u5E84",pinyin:"shijiazhuang",latitude:38.042759,longitude:114.514297,districtCode:130100},{id:392,name:"\u6714\u5DDE",pinyin:"shuozhou",latitude:39.331589,longitude:112.431808,districtCode:140600},{id:16,name:"\u6C88\u9633",pinyin:"shenyang",latitude:41.80563,longitude:123.432358,districtCode:210100},{id:171,name:"\u56DB\u5E73",pinyin:"siping",latitude:43.166458,longitude:124.350357,districtCode:220300},{id:361,name:"\u677E\u539F",pinyin:"songyuan",latitude:45.141102,longitude:124.82515,districtCode:220700},{id:228,name:"\u7EE5\u5316",pinyin:"suihua",latitude:46.652458,longitude:126.969322,districtCode:231200},{id:699,name:"\u53CC\u9E2D\u5C71",pinyin:"shuangyashan",latitude:46.64658,longitude:131.159103,districtCode:230500},{id:1,name:"\u4E0A\u6D77",pinyin:"shanghai",latitude:31.23037,longitude:121.473701,districtCode:31e4},{id:8,name:"\u82CF\u5DDE",pinyin:"suzhou",latitude:31.29834,longitude:120.583191,districtCode:320500},{id:206,name:"\u5BBF\u8FC1",pinyin:"suqian",latitude:33.961929,longitude:118.27549,districtCode:321300},{id:69,name:"\u7ECD\u5174",pinyin:"shaoxing",latitude:30.030331,longitude:120.5802,districtCode:330600},{id:135,name:"\u5BBF\u5DDE",pinyin:"suzhou",latitude:33.646141,longitude:116.963913,districtCode:341300},{id:270,name:"\u4E09\u660E",pinyin:"sanming",latitude:26.263849,longitude:117.639221,districtCode:350400},{id:97,name:"\u4E0A\u9976",pinyin:"shangrao",latitude:28.45463,longitude:117.943573,districtCode:361100},{id:253,name:"\u5546\u4E18",pinyin:"shangqiu",latitude:34.414268,longitude:115.656349,districtCode:411400},{id:401,name:"\u4E09\u95E8\u5CE1",pinyin:"sanmenxia",latitude:34.77261,longitude:111.200302,districtCode:411200},{id:196,name:"\u5341\u5830",pinyin:"shiyan",latitude:32.62918,longitude:110.79801,districtCode:420300},{id:383,name:"\u968F\u5DDE",pinyin:"suizhou",latitude:31.69013,longitude:113.382622,districtCode:421300},{id:5584,name:"\u795E\u519C\u67B6\u6797\u533A",pinyin:"shennongjialinqu",latitude:31.33525,longitude:110.5723,districtCode:429021},{id:173,name:"\u90B5\u9633",pinyin:"shaoyang",latitude:27.238899,longitude:111.467697,districtCode:430500},{id:11,name:"\u6DF1\u5733",pinyin:"shenzhen",latitude:22.54286,longitude:114.059563,districtCode:440300},{id:72,name:"\u97F6\u5173",pinyin:"shaoguan",latitude:24.81039,longitude:113.597229,districtCode:440200},{id:200,name:"\u6C55\u5934",pinyin:"shantou",latitude:23.3535,longitude:116.682213,districtCode:440500},{id:544,name:"\u6C55\u5C3E",pinyin:"shanwei",latitude:22.78566,longitude:115.375137,districtCode:441500},{id:165,name:"\u4E09\u4E9A",pinyin:"sanya",latitude:18.25248,longitude:109.512093,districtCode:460200},{id:1839,name:"\u4E09\u6C99",pinyin:"sansha",latitude:16.83272,longitude:112.33356,districtCode:460300},{id:291,name:"\u9042\u5B81",pinyin:"suining",latitude:30.53286,longitude:105.592728,districtCode:510900},{id:2163,name:"\u5C71\u5357",pinyin:"shannan",latitude:29.236023,longitude:91.766529,districtCode:540500},{id:2277,name:"\u5546\u6D1B",pinyin:"shangluo",latitude:33.868319,longitude:109.939776,districtCode:611e3},{id:921,name:"\u77F3\u5634\u5C71",pinyin:"shizuishan",latitude:38.9841,longitude:106.384178,districtCode:640200},{id:258,name:"\u77F3\u6CB3\u5B50",pinyin:"shihezi",latitude:44.30653,longitude:86.078934,districtCode:659001},{id:5895,name:"\u53CC\u6CB3",pinyin:"shuanghe",latitude:44.840524,longitude:82.353656,districtCode:659007}]},{idx:"T",cities:[{id:5,name:"\u5929\u6D25",pinyin:"tianjin",latitude:39.085098,longitude:117.199371,districtCode:12e4},{id:87,name:"\u5510\u5C71",pinyin:"tangshan",latitude:39.630482,longitude:118.18058,districtCode:130200},{id:43,name:"\u592A\u539F",pinyin:"taiyuan",latitude:37.87059,longitude:112.550667,districtCode:140100},{id:268,name:"\u901A\u8FBD",pinyin:"tongliao",latitude:43.65247,longitude:122.24469,districtCode:150500},{id:1438,name:"\u94C1\u5CAD\u53BF",pinyin:"tieling",latitude:42.22454,longitude:123.77555,districtCode:211200},{id:1449,name:"\u901A\u5316\u53BF",pinyin:"tonghua",latitude:41.677918,longitude:125.753121,districtCode:220500},{id:93,name:"\u6CF0\u5DDE",pinyin:"taizhou",latitude:32.45546,longitude:119.925537,districtCode:321200},{id:52,name:"\u53F0\u5DDE",pinyin:"taizhou",latitude:28.656111,longitude:121.420563,districtCode:331e3},{id:1531,name:"\u94DC\u9675\u53BF",pinyin:"tongling",latitude:30.961778,longitude:117.801108,districtCode:340700},{id:74,name:"\u6CF0\u5B89",pinyin:"taian",latitude:36.19994,longitude:117.088402,districtCode:370900},{id:710,name:"\u5929\u95E8",pinyin:"tianmen",latitude:30.663389,longitude:113.166138,districtCode:429006},{id:585,name:"\u5C6F\u660C\u53BF",pinyin:"tunchang",latitude:19.35182,longitude:110.10347,districtCode:469022},{id:226,name:"\u94DC\u4EC1",pinyin:"tongren",latitude:27.69066,longitude:109.180992,districtCode:520600},{id:1008,name:"\u94DC\u5DDD",pinyin:"tongchuan",latitude:34.896729,longitude:108.945152,districtCode:610200},{id:298,name:"\u5929\u6C34",pinyin:"tianshui",latitude:34.580849,longitude:105.724861,districtCode:620500},{id:2418,name:"\u5410\u9C81\u756A",pinyin:"tulufan",latitude:42.947613,longitude:89.184078,districtCode:650400},{id:2490,name:"\u5854\u57CE\u5730\u533A",pinyin:"tachengdiqu",latitude:46.746301,longitude:82.985732,districtCode:654200},{id:2507,name:"\u56FE\u6728\u8212\u514B",pinyin:"tumushuke",latitude:39.867316,longitude:79.077978,districtCode:659003},{id:5898,name:"\u94C1\u95E8\u5173",pinyin:"tiemenguan",latitude:41.827251,longitude:85.501218,districtCode:659006},{id:5905,name:"\u53F0\u5317",pinyin:"taibei",latitude:25.030724,longitude:121.520076,districtCode:710100}]},{idx:"W",cities:[{id:393,name:"\u4E4C\u6D77",pinyin:"wuhai",latitude:39.653839,longitude:106.795464,districtCode:150300},{id:394,name:"\u4E4C\u5170\u5BDF\u5E03",pinyin:"wulanchabu",latitude:40.993912,longitude:113.133759,districtCode:150900},{id:1505,name:"\u4E94\u5927\u8FDE\u6C60",pinyin:"wudalianchi",latitude:48.512688,longitude:126.197694,districtCode:210200},{id:35,name:"\u65E0\u9521",pinyin:"wuxi",latitude:31.49099,longitude:120.31237,districtCode:320200},{id:30,name:"\u6E29\u5DDE",pinyin:"wenzhou",latitude:27.994921,longitude:120.699387,districtCode:330300},{id:1527,name:"\u829C\u6E56\u53BF",pinyin:"wuhu",latitude:31.145262,longitude:118.572301,districtCode:340200},{id:34,name:"\u5A01\u6D77",pinyin:"weihai",latitude:37.513481,longitude:122.121712,districtCode:371e3},{id:48,name:"\u6F4D\u574A",pinyin:"weifang",latitude:36.70686,longitude:119.161758,districtCode:370700},{id:7,name:"\u6B66\u6C49",pinyin:"wuhan",latitude:30.59276,longitude:114.305252,districtCode:420100},{id:243,name:"\u68A7\u5DDE",pinyin:"wuzhou",latitude:23.47703,longitude:111.279129,districtCode:450400},{id:282,name:"\u6587\u660C",pinyin:"wenchang",latitude:19.543289,longitude:110.797737,districtCode:469005},{id:581,name:"\u4E07\u5B81",pinyin:"wanning",latitude:18.795321,longitude:110.389748,districtCode:469006},{id:1844,name:"\u4E94\u6307\u5C71",pinyin:"wuzhishan",latitude:18.776921,longitude:109.516662,districtCode:469001},{id:2089,name:"\u6587\u5C71\u58EE\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE",pinyin:"wenshanzhuangzumiaozuzizhizhou",latitude:23.36951,longitude:104.24401,districtCode:532600},{id:306,name:"\u6E2D\u5357",pinyin:"weinan",latitude:34.499969,longitude:109.510147,districtCode:610500},{id:523,name:"\u6B66\u5A01",pinyin:"wuwei",latitude:37.9282,longitude:102.63797,districtCode:620600},{id:396,name:"\u5434\u5FE0",pinyin:"wuzhong",latitude:37.997551,longitude:106.198792,districtCode:640300},{id:2417,name:"\u4E4C\u9C81\u6728\u9F50\u53BF",pinyin:"wulumuqi",latitude:43.47129,longitude:87.40931,districtCode:650100},{id:2508,name:"\u4E94\u5BB6\u6E20",pinyin:"wujiaqu",latitude:44.167401,longitude:87.526884,districtCode:659004}]},{idx:"X",cities:[{id:1190,name:"\u90A2\u53F0\u53BF",pinyin:"xingtai",latitude:37.05073,longitude:114.561132,districtCode:130500},{id:263,name:"\u5FFB\u5DDE",pinyin:"xinzhou",latitude:38.416698,longitude:112.734177,districtCode:140900},{id:1397,name:"\u5174\u5B89\u76DF",pinyin:"xingan",latitude:46.076268,longitude:122.070317,districtCode:152200},{id:1403,name:"\u9521\u6797\u90ED\u52D2\u76DF",pinyin:"xilinguole",latitude:43.938849,longitude:116.085367,districtCode:152500},{id:29,name:"\u5F90\u5DDE",pinyin:"xuzhou",latitude:34.204399,longitude:117.285767,districtCode:320300},{id:314,name:"\u5BA3\u57CE",pinyin:"xuancheng",latitude:30.940781,longitude:118.758659,districtCode:341800},{id:13,name:"\u53A6\u95E8",pinyin:"xiamen",latitude:24.479509,longitude:118.089478,districtCode:350200},{id:127,name:"\u65B0\u4F59",pinyin:"xinyu",latitude:27.81776,longitude:114.91713,districtCode:360500},{id:1652,name:"\u65B0\u4E61\u53BF",pinyin:"xinxiang",latitude:35.187478,longitude:113.78056,districtCode:410700},{id:198,name:"\u8BB8\u660C",pinyin:"xuchang",latitude:34.035702,longitude:113.852333,districtCode:411e3},{id:234,name:"\u4FE1\u9633",pinyin:"xinyang",latitude:32.147141,longitude:114.092789,districtCode:411500},{id:205,name:"\u5B5D\u611F",pinyin:"xiaogan",latitude:30.924829,longitude:113.916451,districtCode:420900},{id:230,name:"\u54B8\u5B81",pinyin:"xianning",latitude:29.841261,longitude:114.322449,districtCode:421200},{id:241,name:"\u8944\u9633",pinyin:"xiangyang",latitude:32.008999,longitude:112.122551,districtCode:420600},{id:350,name:"\u4ED9\u6843",pinyin:"xiantao",latitude:30.362511,longitude:113.454498,districtCode:429004},{id:42,name:"\u6E58\u6F6D",pinyin:"xiangtan",latitude:27.82975,longitude:112.944107,districtCode:430300},{id:1728,name:"\u6E58\u897F\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE",pinyin:"xiangxitujiazumiaozuzizhizhou",latitude:28.314296,longitude:109.739735,districtCode:433100},{id:2097,name:"\u897F\u53CC\u7248\u7EB3\u50A3\u65CF\u81EA\u6CBB\u5DDE",pinyin:"xishuangbannadaizuzizhizhou",latitude:22.001724,longitude:100.797941,districtCode:532800},{id:15,name:"\u897F\u5B89",pinyin:"xian",latitude:34.34127,longitude:108.939842,districtCode:610100},{id:115,name:"\u54B8\u9633",pinyin:"xianyang",latitude:34.329319,longitude:108.70929,districtCode:610400},{id:233,name:"\u897F\u5B81",pinyin:"xining",latitude:36.61729,longitude:101.777817,districtCode:630100},{id:215,name:"\u9999\u6E2F\u7279\u522B\u884C\u653F\u533A",pinyin:"xianggang",latitude:22.276283,longitude:114.163826,districtCode:81e4}]},{idx:"Y",cities:[{id:166,name:"\u8FD0\u57CE",pinyin:"yuncheng",latitude:35.026279,longitude:111.006989,districtCode:140800},{id:995,name:"\u9633\u6CC9",pinyin:"yangquan",latitude:37.856682,longitude:113.580467,districtCode:140300},{id:339,name:"\u8425\u53E3",pinyin:"yingkou",latitude:40.666828,longitude:122.234901,districtCode:210800},{id:167,name:"\u5EF6\u8FB9\u671D\u9C9C\u65CF\u81EA\u6CBB\u5DDE",pinyin:"yanbian",latitude:42.89119,longitude:129.509094,districtCode:222400},{id:696,name:"\u4F0A\u6625",pinyin:"yichun",latitude:47.72752,longitude:128.840485,districtCode:230700},{id:22,name:"\u626C\u5DDE",pinyin:"yangzhou",latitude:32.393581,longitude:119.412689,districtCode:321e3},{id:71,name:"\u76D0\u57CE",pinyin:"yancheng",latitude:33.34951,longitude:120.161636,districtCode:320900},{id:128,name:"\u5B9C\u6625",pinyin:"yichun",latitude:27.81443,longitude:114.416122,districtCode:360900},{id:384,name:"\u9E70\u6F6D",pinyin:"yingtan",latitude:28.260189,longitude:117.069191,districtCode:360600},{id:77,name:"\u70DF\u53F0",pinyin:"yantai",latitude:37.463531,longitude:121.448013,districtCode:370600},{id:80,name:"\u5B9C\u660C",pinyin:"yichang",latitude:30.69186,longitude:111.286423,districtCode:420500},{id:119,name:"\u76CA\u9633",pinyin:"yiyang",latitude:28.553909,longitude:112.355164,districtCode:430900},{id:1709,name:"\u5CB3\u9633\u53BF",pinyin:"yueyang",latitude:29.144843,longitude:113.116073,districtCode:430600},{id:176,name:"\u6C38\u5DDE",pinyin:"yongzhou",latitude:26.42034,longitude:111.612251,districtCode:431100},{id:202,name:"\u9633\u6C5F",pinyin:"yangjiang",latitude:21.85829,longitude:111.982559,districtCode:441700},{id:421,name:"\u4E91\u6D6E",pinyin:"yunfu",latitude:22.915251,longitude:112.044533,districtCode:445300},{id:254,name:"\u7389\u6797",pinyin:"yulin",latitude:22.65451,longitude:110.180977,districtCode:450900},{id:103,name:"\u5B9C\u5BBE",pinyin:"yibin",latitude:28.751301,longitude:104.641701,districtCode:511500},{id:240,name:"\u96C5\u5B89",pinyin:"yaan",latitude:30.01543,longitude:103.039803,districtCode:511800},{id:292,name:"\u7389\u6EAA",pinyin:"yuxi",latitude:24.351931,longitude:102.5466,districtCode:530400},{id:242,name:"\u5EF6\u5B89",pinyin:"yanan",latitude:36.585289,longitude:109.489777,districtCode:610600},{id:307,name:"\u6986\u6797",pinyin:"yulin",latitude:38.285198,longitude:109.734581,districtCode:610800},{id:2388,name:"\u7389\u6811\u85CF\u65CF\u81EA\u6CBB\u5DDE",pinyin:"yushuzangzuzizhizhou",latitude:33.004049,longitude:97.008522,districtCode:632700},{id:194,name:"\u94F6\u5DDD",pinyin:"yinchuan",latitude:38.486439,longitude:106.232483,districtCode:640100},{id:2480,name:"\u4F0A\u7281\u54C8\u8428\u514B\u81EA\u6CBB\u5DDE",pinyin:"yilihasakezizhizhou",latitude:43.92186,longitude:81.317946,districtCode:654e3}]},{idx:"Z",cities:[{id:154,name:"\u5F20\u5BB6\u53E3",pinyin:"zhangjiakou",latitude:40.82444,longitude:114.88755,districtCode:130700},{id:27,name:"\u9547\u6C5F",pinyin:"zhenjiang",latitude:32.18959,longitude:119.425003,districtCode:321100},{id:299,name:"\u821F\u5C71",pinyin:"zhoushan",latitude:29.98539,longitude:122.207779,districtCode:330900},{id:111,name:"\u6F33\u5DDE",pinyin:"zhangzhou",latitude:24.51347,longitude:117.647247,districtCode:350600},{id:50,name:"\u6DC4\u535A",pinyin:"zibo",latitude:36.813099,longitude:118.054802,districtCode:370300},{id:54,name:"\u67A3\u5E84",pinyin:"zaozhuang",latitude:34.810711,longitude:117.32196,districtCode:370400},{id:32,name:"\u90D1\u5DDE",pinyin:"zhengzhou",latitude:34.74725,longitude:113.624931,districtCode:410100},{id:204,name:"\u5468\u53E3",pinyin:"zhoukou",latitude:33.625832,longitude:114.696953,districtCode:411600},{id:399,name:"\u9A7B\u9A6C\u5E97",pinyin:"zhumadian",latitude:33.011421,longitude:114.022987,districtCode:411700},{id:1700,name:"\u682A\u6D32\u53BF",pinyin:"zhuzhou",latitude:27.705844,longitude:113.146176,districtCode:430200},{id:280,name:"\u5F20\u5BB6\u754C",pinyin:"zhangjiajie",latitude:29.116671,longitude:110.478394,districtCode:430800},{id:26,name:"\u73E0\u6D77",pinyin:"zhuhai",latitude:22.270729,longitude:113.576683,districtCode:440400},{id:64,name:"\u8087\u5E86",pinyin:"zhaoqing",latitude:23.0469,longitude:112.465279,districtCode:441200},{id:79,name:"\u6E5B\u6C5F",pinyin:"zhanjiang",latitude:21.271339,longitude:110.35894,districtCode:440800},{id:203,name:"\u4E2D\u5C71",pinyin:"zhongshan",latitude:22.515949,longitude:113.392601,districtCode:442e3},{id:105,name:"\u81EA\u8D21",pinyin:"zigong",latitude:29.339199,longitude:104.778442,districtCode:510300},{id:323,name:"\u8D44\u9633",pinyin:"ziyang",latitude:30.12859,longitude:104.627983,districtCode:512e3},{id:379,name:"\u9075\u4E49",pinyin:"zunyi",latitude:27.72545,longitude:106.92723,districtCode:520300},{id:295,name:"\u662D\u901A",pinyin:"zhaotong",latitude:27.338169,longitude:103.716797,districtCode:530600},{id:342,name:"\u5F20\u6396",pinyin:"zhangye",latitude:38.925919,longitude:100.449806,districtCode:620700},{id:1144,name:"\u4E2D\u536B",pinyin:"zhongwei",latitude:37.500259,longitude:105.196762,districtCode:640500}]}]}},"SPc/":function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i("FvaU"),t.default={chooseCity(o){const{success:e,complete:r}=o||{},l=(()=>{const a=document.createElement("private-choose-city");return setTimeout(()=>{document.body.appendChild(a)},0),a})();l.addEventListener("choose",a=>{a.stopPropagation(),document.body.removeChild(l),e&&e(a&&a.detail),r&&r(a&&a.detail)}),l.addEventListener("close",a=>{a.stopPropagation(),document.body.removeChild(l)})},onLocatedComplete(o){const{complete:e}=o||{};e&&e()},setLocatedCity(o){const{complete:e}=o||{};e&&e()},regionPicker(o){const{complete:e}=o||{};e&&e()}}},ZQLn:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Styles=void 0;const o=i("1jGT"),e=i("H+p6"),r=s=>(0,o.unsafeCSS)((0,e.rpxToRem)(s));t.Styles=(0,o.css)`
  :host { 
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 99999999;
    color: #333;
  }
  
  .choose-city {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    background: #f5f5f5;
  }
  
  .choose-title {
    width: 100%;
    height: ${r(80)};
    line-height: ${r(80)};
    text-align: center;
    font-weight: bold;
  }
  
  .close-wrap {
    position: absolute;
    right: 0;
    top: 0;
    align-self: flex-end;
    padding: ${r(24)};
  }
  
  .close {
    display: block;
    width: ${r(32)};
    height: ${r(32)};
  }
  
  .search-city {
    position: relative;
    margin: ${r(24)};
  }
  
  .search-icon {
    position: absolute;
    left: ${r(24)};
    top: 0;
    bottom: 0;
    margin: auto 0;
    height: 100%;
  }
  
  .search-city-input {
    padding: 0 ${r(24)} 0 ${r(60)};
    width: ${r(702)};
    font-size: ${r(28)};
    border-radius: ${r(8)};
    box-sizing: border-box;
  }
  
  .search-city-list {
    padding: 0 ${r(24)};
    background: #fff;
    user-select: none;
  }
  
  .no-search-city-list {
    margin-top: ${r(200)};
    text-align: center;
  }
  
  .choose-city-content {
    width: 100%;
    position: relative;
    overflow-y: scroll;
  }
  
  .choose-navigation {
    position: fixed;
    z-index: 1;
    top: ${r(120)};
    right: ${r(10)};
    color: rgb(16, 142, 233);
    font-size: ${r(28)}
    user-select: none;
  }
  
  .navigation-cell {
    text-align: center;
    font-weight: 500;
  }
  
  .hot-city {
    padding: 0 ${r(24)} 0 ${r(24)};
    padding-bottom: ${r(24)};
  }
  
  .hot-city__title {
    padding: ${r(40)} 0 ${r(16)};
    font-size: ${r(28)};
  }
  
  .hot-city__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    user-select: none;
  }
  
  .hot-city__cell {
    margin-top: ${r(24)};
    // margin-right: ${r(24)};
    padding: ${r(8)} 0;
    flex-shrink: 0;
    width: ${r(200)};
    text-align: center;
    font-size: ${r(28)};
    background: #fff;
    border-radius: ${r(4)};
  }
  
  .city-list {
    flex: 1;
  }
  
  .city-list-title {
    padding: ${r(12)} ${r(24)};
    font-size: ${r(28)};
    color: #999
  }
  
  .city-list-cells {
    padding: 0 ${r(24)};
    background: #fff;
  }
  
  .city-list-cell:first-child {
    border-top: 0;
  }
  
  .city-list-cell {
    border-top: ${r(2)} solid #e2e2e2;
    padding: ${r(20)} 0;
  }
`},prFm:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i("WNwN");const o=(e,r)=>{const s=["success","fail","compelte"];Object.keys(r).forEach(a=>{if(s.indexOf(a)>-1)return;let n=r[a];typeof n=="object"&&(n=JSON.stringify(n)),n&&e.setAttribute(a,n)})};t.default={datePicker(e){const r=()=>{const s=document.createElement("private-date-picker");return o(s,e),document.body.appendChild(s),s};return new Promise((s,l)=>{try{const a=r();a.addEventListener("select",n=>{n.stopPropagation(),document.body.removeChild(a),s(n&&n.detail)}),a.addEventListener("cancel",n=>{n.stopPropagation()})}catch(a){l(`${a}`)}})}}},mAot:function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NEED_DEFAULT_VALUE=t.PROPERTY=t.FORMATE_MAP=void 0,t.FORMATE_MAP=["yyyy-MM-dd","HH:mm","yyyy-MM-dd HH:mm","yyyy-MM","yyyy","HH:mm:ss","yyyy-MM-dd HH:mm:ss"],t.PROPERTY={YEAR:"year",MONTH:"month",DAY:"day",HOUR:"hour",MINUTE:"minute"},t.NEED_DEFAULT_VALUE="needed"},WNwN:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=i("2GZr"),e=i("1jGT"),r=i("WItb"),s=i("vkip"),l=i("mAot"),a=i("sMG2"),n=i("2jdJ");class c extends r.BaseElement{constructor(){super(...arguments),this.methods=()=>{},this.currentFormat=l.FORMATE_MAP[0],this.format="",this.currentDate="",this.startDate="",this.endDate="",this.years={},this.months={},this.days={},this.hours={},this.minutes={},this.initValue=[]}connectedCallback(){super.connectedCallback(),l.FORMATE_MAP.indexOf(this.format)>-1&&(this.currentFormat=this.format),this._init()}disconnectedCallback(){super.disconnectedCallback()}static get styles(){return a.Styles}_set(d,p){return this[d]=p,this}_init(){const d=this.currentFormat,{currentDate:p,startDate:h,endDate:g}=this,m=(0,n.getList)({format:d,currentDate:p,startDate:h,endDate:g}),w=(0,n.onlyTime)(this.currentFormat);this._set("methods",m)._set("onlyHasTime",w).getYears().getMonths().getDays().getHours().getMinutes().updateInitValue()}updateInitValue(){const p=(0,n.onlyTime)(this.currentFormat)?[this.currentHour,this.currentMinute]:[this.currentYear,this.currentMonth,this.currentDay,this.currentHour,this.currentMinute];return this._set("initValue",p),this}onConfirm(){const d=(0,n.getListValue)(this.years,this.currentYear),p=(0,n.getListValue)(this.months,this.currentMonth),h=(0,n.getListValue)(this.days,this.currentDay),g=(0,n.getListValue)(this.hours,this.currentHour),m=(0,n.getListValue)(this.minutes,this.currentMinute),w=(0,n.buildResult)({year:d,month:p,day:h,hour:g,minute:m,format:this.currentFormat});this.dispatch(w)}getYears(d){const{getYears:p}=this.methods(),h=p(d);return this._set("years",h)._set("currentYear",h.currentIndex),this}getMonths(d){const{getMonths:p}=this.methods(),h=p(d);return this._set("months",h)._set("currentMonth",h.currentIndex),this}getDays(d){const{getDays:p}=this.methods(),h=p(d);return this._set("days",h)._set("currentDay",h.currentIndex),this}getHours(d){const{getHours:p}=this.methods(),h=p(d);return this._set("hours",h)._set("currentHour",h.currentIndex),this}getMinutes(d){const{getMinutes:p}=this.methods(),h=p(d);return this._set("minutes",h)._set("currentMinute",h.currentIndex),this}yearUpdate(d){this.currentYear!==d&&this.getYears(d).getMonths().getDays().getHours().getMinutes()}monthsUpdate(d){this.currentMonth!==d&&this.getMonths(d).getDays().getHours().getMinutes()}daysUpdate(d){this.currentDay!==d&&this.getDays(d).getHours().getMinutes()}hoursUpdate(d){this.currentHour!==d&&this.getHours(d).getMinutes()}minutesUpdate(d){this.currentMinute!==d&&this.getMinutes(d)}handleChange(d){const p=d.detail.value,h=(0,n.isContain)(this.currentFormat);h("yyyy")&&this.yearUpdate(p[0]),h("MM")&&this.monthsUpdate(p[1]),h("dd")&&this.daysUpdate(p[2]),h("HH")&&(this.onlyHasTime?this.hoursUpdate(p[0]):this.hoursUpdate(p[3])),h("mm")&&(this.onlyHasTime?this.minutesUpdate(p[1]):this.minutesUpdate(p[4])),this.updateInitValue()}dispatch(d){this.dispatchEvent(new CustomEvent("select",{detail:{date:d},bubbles:!0,composed:!0}))}renderColumn({list:d}){return!Array.isArray(d)||d.length<1?null:(0,e.html)`
      <tiga-picker-view-column
        >${d.map(p=>(0,e.html)`<div>${p}</div>`)}</tiga-picker-view-column
      >
    `}render(){return(0,e.html)`
      <private-modal
        .show="${!0}"
        @confirm=${this.onConfirm}
        @cancel=${()=>this.dispatch(void 0)}
        title=${this.title}
      >
        <tiga-picker-view
          slot="content"
          @change=${this.handleChange}
          .value=${this.initValue}
          indicator-style="border-top: 1px solid #ddd;border-bottom: 1px solid #ddd;background-color:#f5f5f9;"
        >
          ${(0,e.html)`${this.renderColumn(this.years)}`}
          ${(0,e.html)`${this.renderColumn(this.months)}`}
          ${(0,e.html)`${this.renderColumn(this.days)}`}
          ${(0,e.html)`${this.renderColumn(this.hours)}`}
          ${(0,e.html)`${this.renderColumn(this.minutes)}`}
        </tiga-picker-view>
      </private-modal>
    `}}o.__decorate([(0,e.property)()],c.prototype,"format",void 0),o.__decorate([(0,e.property)()],c.prototype,"currentDate",void 0),o.__decorate([(0,e.property)()],c.prototype,"startDate",void 0),o.__decorate([(0,e.property)()],c.prototype,"endDate",void 0),o.__decorate([(0,e.internalProperty)()],c.prototype,"years",void 0),o.__decorate([(0,e.internalProperty)()],c.prototype,"months",void 0),o.__decorate([(0,e.internalProperty)()],c.prototype,"days",void 0),o.__decorate([(0,e.internalProperty)()],c.prototype,"hours",void 0),o.__decorate([(0,e.internalProperty)()],c.prototype,"minutes",void 0),o.__decorate([(0,e.internalProperty)()],c.prototype,"initValue",void 0),(0,s.defineElement)("private-date-picker",c)},sMG2:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Styles=void 0;const o=i("1jGT");t.Styles=(0,o.css)`
  tiga-picker-view {
    background-color: #fff;
  }
`},"2jdJ":function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getList=t.generateMinutes=t.generateHours=t.generateDays=t.getDays=t.generateMonths=t.generateYears=t.generateList=t.buildResult=t.getListValue=t.onlyTime=t.isContain=void 0;const o=i("mAot"),e=T=>E=>T.indexOf(E)>-1;t.isContain=e;const r=T=>T===o.FORMATE_MAP[1]||T===o.FORMATE_MAP[5];t.onlyTime=r;const s=T=>typeof T=="undefined",l=T=>String(T).length<=1?`0${T}`:T,a=(T,E)=>{if(Array.isArray(T.list))return parseInt(T.list[E])};t.getListValue=a;const n=({year:T,month:E,day:I,hour:L,minute:M,format:D})=>{const S=(0,t.onlyTime)(D),x=(0,t.isContain)(D);let k="";return S?k+=`${l(L)}:${l(M)}`:(s(T)||(k+=l(T)),s(E)||(k+=`-${l(E)}`),s(I)||(k+=`-${l(I)}`),s(L)||(k+=` ${l(L)}`),s(M)||(k+=`:${l(M)}`)),x("ss")&&(k+=":00"),k};t.buildResult=n;const c=T=>T===o.NEED_DEFAULT_VALUE,u=(T,E,I="")=>{const L=[];for(let M=Number(T);M<=Number(E);M++)L.push(M+I);return L};t.generateList=u;const d=({start:T,end:E,current:I})=>{let{year:L}=T,{year:M}=E;const{year:D}=I,S=10;if(!L&&!M)return{};c(L)&&c(M)?(L=D-S,M=D+S):c(L)?L=D-(M-D):c(M)&&(M=D+(D-L)),T.year=L,E.year=M;const x=D-L;return{list:(0,t.generateList)(L,M,"\u5E74"),currentIndex:x>0?x:0}};t.generateYears=d;const p=({start:T,end:E,current:I})=>{const{year:D,month:S}=T,{year:x,month:k}=E,{year:N,month:z}=I;let B,j;const F=V=>V>=1&&V<=12;if(!S&&!k)return{};c(S)?(B=1,T.month=B):D===N&&F(S)?B=S:B=1,c(k)?(j=12,E.month=12):x===N&&F(k)?j=k:j=12;const G=z-B;return{list:(0,t.generateList)(B,j,"\u6708"),currentIndex:G>0?G:0}};t.generateMonths=p;const h=(T,E)=>(T=parseInt(T),E=parseInt(E),[-1,31,T%4===0&&T%100!==0||T%400===0?29:28,31,30,31,30,31,31,30,31,30,31][Number(E)]);t.getDays=h;const g=({start:T,end:E,current:I})=>{const{year:M,month:D,day:S}=T,{year:x,month:k,day:N}=E,{year:z,month:B,day:j}=I,F=(0,t.getDays)(z,B);let G,V;const X=U=>U>=1&&U<=F;if(!S&&!N)return{};c(S)?(G=1,T.day=1):z===M&&B===D&&X(S)?G=S:G=1,c(N)?(V=F,E.day=F):z===x&&B===k&&X(N)?V=N:V=F;const W=j-G;return{list:(0,t.generateList)(G,V,"\u65E5"),currentIndex:W>0?W:0}};t.generateDays=g;const m=({start:T,end:E,current:I})=>{const{year:D,month:S,day:x,hour:k}=T,{year:N,month:z,day:B,hour:j}=E,{year:F,month:G,day:V,hour:X}=I,W=Z=>Z>=0&&Z<=23;let U,H;if(!k&&!j)return{};c(k)?(U=0,T.hour=0):D&&N&&F===D&&G===S&&V===x&&W(k)||!D&&!N?U=k:U=0,c(j)?(H=23,E.hour=23):W(j)&&D&&N&&F===N&&G===z&&V===B||!D&&!N?H=j:H=23;const Y=X-U;return{list:(0,t.generateList)(U,H,"\u65F6"),currentIndex:Y>0?Y:0}};t.generateHours=m;const w=({start:T,end:E,current:I})=>{const{year:D,month:S,day:x,hour:k,minute:N}=T,{year:z,month:B,day:j,hour:F,minute:G}=E,{year:V,month:X,day:W,hour:U,minute:H}=I,Y=Q=>Q>=0&&Q<=59;let Z,K;if(!N&&!G)return{};c(N)?(Z=0,T.minute=0):Y(N)&&U===k&&(D&&z&&V===D&&X===S&&W===x||!D&&!z)?Z=N:Z=0,c(G)?(K=59,E.minute=59):Y(G)&&U===F&&(D&&z&&V===z&&X===B&&W===j||!D&&!z)?K=G:K=59;const J=H-Z;return{list:(0,t.generateList)(Z,K,"\u5206"),currentIndex:J>0?J:0}};t.generateMinutes=w;const _=(T,E)=>{try{const I=T.match(E);return I&&Number(I[1])}catch(I){console.log(`\u65E5\u671F\u683C\u5F0F\u5316\u9519\u8BEF\uFF1A${I}`)}},O=(T="")=>_(T,new RegExp("^(\\d{4})"))||o.NEED_DEFAULT_VALUE,R=(T="")=>_(T,new RegExp("-(\\d{1,2})"))||o.NEED_DEFAULT_VALUE,f=(T="")=>_(T,new RegExp("-(\\d{1,2})(\\s|$)+"))||o.NEED_DEFAULT_VALUE,v=(T="")=>_(T,new RegExp("(\\d{1,2})($|:)"))||o.NEED_DEFAULT_VALUE,P=(T="")=>_(T,new RegExp(":(\\d{1,2})($|:)"))||o.NEED_DEFAULT_VALUE,A=T=>E=>{const I={};return T("yyyy")&&(I[o.PROPERTY.YEAR]=O(E)),T("MM")&&(I[o.PROPERTY.MONTH]=R(E)),T("dd")&&(I[o.PROPERTY.DAY]=f(E)),T("HH")&&(I[o.PROPERTY.HOUR]=v(E)),T("mm")&&(I[o.PROPERTY.MINUTE]=P(E)),I},b=T=>{const E=new Date,{year:I=E.getFullYear(),month:L=E.getMonth()+1,day:M=E.getDate(),hour:D=E.getHours(),minute:S=E.getMinutes()}=T;return{year:parseInt(I),month:parseInt(L),day:parseInt(M),hour:parseInt(D),minute:parseInt(S)}},C=({currentDate:T,startDate:E,endDate:I,format:L})=>{const M=(0,t.isContain)(L),D=A(M),S=b(D(T)),x=D(E),k=D(I);let N=(0,t.generateYears)({start:x,end:k,current:S}),z=(0,t.generateMonths)({start:x,end:k,current:S}),B=(0,t.generateDays)({start:x,end:k,current:S}),j=(0,t.generateHours)({start:x,end:k,current:S}),F=(0,t.generateMinutes)({start:x,end:k,current:S});return()=>({years:N,getYears:H=>(s(H)||(S.year=parseInt(N.list[H])),N=(0,t.generateYears)({start:x,end:k,current:S})),months:z,getMonths:H=>(s(H)||(S.month=parseInt(z.list[H])),z=(0,t.generateMonths)({start:x,end:k,current:S})),days:B,getDays:H=>(s(H)||(S.day=parseInt(B.list[H])),B=(0,t.generateDays)({start:x,end:k,current:S})),hours:j,getHours:H=>(s(H)||(S.hour=parseInt(j.list[H])),j=(0,t.generateHours)({start:x,end:k,current:S})),minutes:F,getMinutes:H=>(s(H)||(S.minute=parseInt(F.list[H])),F=(0,t.generateMinutes)({start:x,end:k,current:S}))})};t.getList=C},mOeX:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=i("2GZr"),e=i("1jGT"),r=i("WItb"),s=i("vkip"),l=i("rihe"),a=i("Zq2/");class n extends r.BaseElement{constructor(){super(...arguments),this.badgesIndexCache=[],this.title="",this.items=[],this.badges=[],this.cancelButtonText="\u53D6\u6D88",this.align="center",this.destructiveBtnIndex=-1}connectedCallback(){super.connectedCallback(),(0,a.fixedBody)(document),this.badgesIndexCache=(0,a.take)(this.badges,"index")}disconnectedCallback(){(0,a.looseBody)(document),super.disconnectedCallback()}static get styles(){return l.Styles}onConfirm(u){this.dispatch(u)}onCancel(){this.dispatch(-1)}dispatch(u){this.dispatchEvent(new CustomEvent("select",{detail:{index:u},bubbles:!0,composed:!0}))}handleMaskClick(u){u.stopPropagation(),this.onCancel()}renderBadges(u){if(!(this.badgesIndexCache.indexOf(u)>-1))return null;const p=(0,a.getValueByIndex)(this.badges,u);let{type:h,text:g}=p,m=g;return h==="num"&&(m=(0,a.formateNum)(m),m===-1&&(h="more")),{none:null,num:m?(0,e.html)`<span class="private-sheet-badge-num">${m}</span>`:null,point:(0,e.html)`<span class="private-sheet-badge-point"></span>`,more:(0,e.html)`<span class="private-sheet-badge-more">…</span>`,text:(0,e.html)`<span class="private-sheet-badge-text">${g}</span>`}[h]}getDestructiveBtnStyle(u){return!(0,a.isIos)()||this.destructiveBtnIndex!==u?null:"color:#f4333c"}render(){return(0,e.html)`
      <div class="private-sheet-wrap">
        <div
          class="private-sheet-mask"
          @touchstart=${this.handleMaskClick}
        ></div>
        <div
          class="private-sheet-main ${(0,a.isIos)()?"private-sheet-main--ios":"private-sheet-main--android"}"
        >
          <div class="private-sheet-title">${this.title}</div>
          <div class="private-sheet-list">
            ${this.items.map((u,d)=>(0,e.html)`
                <div
                  class="private-sheet-item"
                  @click=${()=>this.onConfirm(d)}
                >
                  ${this.getDestructiveBtnStyle(d)?(0,e.html)`<p style=${this.getDestructiveBtnStyle(d)}>
                        ${u}
                      </p>`:(0,e.html)`<p>${u}</p>`}
                  ${this.renderBadges(d)}
                </div>
              `)}
          </div>
          ${(0,a.isIos)()?(0,e.html)`<div
                class="private-sheet-item private-sheet-cancel"
                @click=${this.onCancel}
              >
                ${this.cancelButtonText}
              </div>`:null}
        </div>
      </div>
    `}}o.__decorate([(0,e.property)()],n.prototype,"title",void 0),o.__decorate([(0,e.property)({type:Array})],n.prototype,"items",void 0),o.__decorate([(0,e.property)({type:Array})],n.prototype,"badges",void 0),o.__decorate([(0,e.property)()],n.prototype,"cancelButtonText",void 0),o.__decorate([(0,e.property)()],n.prototype,"align",void 0),o.__decorate([(0,e.property)({type:Number})],n.prototype,"destructiveBtnIndex",void 0),(0,s.defineElement)("private-action-sheet",n)},rihe:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Styles=void 0;const o=i("1jGT"),e=i("H+p6");t.Styles=(0,o.css)`
  .private-sheet-wrap {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    z-index: 1000;
    transform: translateZ(1px);
  }

  .private-sheet-wrap p {
    margin: 0;
    padding: 0;
  }

  .private-sheet-mask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .private-sheet-main {
    position: absolute;
    z-index: 2;
    background-color: #fff;
  }

  .private-sheet-main--ios {
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
  }

  .private-sheet-main--android {
    top: 50%;
    left: 50%;
    width: ${(0,o.unsafeCSS)((0,e.rpxToRem)(270*2))};
    transform: translate(-50%, -50%);
    border-radius: 7px;
    text-align: left;
  }

  .private-sheet-title {
    color: #888;
    font-size: 14px;
    margin: ${(0,o.unsafeCSS)((0,e.rpxToRem)(15*2))} auto;
    padding: 0 15px;
    text-align: center;
  }

  .private-sheet-list {
    max-height: ${(0,o.unsafeCSS)((0,e.rpxToRem)(300*2))};
    overflow: scroll;
    text-align: center;
    color: #000;
  }

  .private-sheet-item {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    padding: 0 16px;
    margin: 0;
    position: relative;
    height: ${(0,o.unsafeCSS)((0,e.rpxToRem)(50*2))};
    border-top: 1px solid #ddd;
    box-sizing: border-box;
    max-width: 100%;
  }

  .private-sheet-main--ios .private-sheet-item {
    justify-content: center;
  }

  .private-sheet-item p {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow-x: hidden;
  }

  .private-sheet-cancel {
    position: relative;
    padding-top: 6px;
    padding-bottom: 4px;
    border-top: none;
    box-sizing: content-box;
  }

  .private-sheet-cancel::before {
    content: '';
    position: absolute;
    z-index: 3;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    width: 100%;
    background-color: #e7e7ed;
  }

  .private-sheet-cancel::after {
    content: '';
    position: absolute;
    z-index: 3;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    width: 100%;
    background-color: #f5f5f9;
  }

  .private-sheet-badge-text,
  .private-sheet-badge-more,
  .private-sheet-badge-num {
    flex: 0 0 auto;
    display: inline-block;
    height: 18px;
    line-height: 18px;
    min-width: 9px;
    border-radius: 12px;
    padding: 0 5px;
    text-align: center;
    font-size: 12px;
    color: #fff;
    background-color: #ff5b05;
    white-space: nowrap;
    margin-left: 8px;
    box-sizing: content-box;
    white-space: nowrap;
  }

  .private-sheet-badge-more {
    line-height: 12px;
  }

  .private-sheet-badge-point {
    display: inline-block;
    margin-left: 8px;
    width: 8px;
    height: 8px;
    background-color: #ff5b05;
    border-radius: 8px;
  }
`},"Zq2/":function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isIos=t.formateNum=t.getValueByIndex=t.take=t.looseBody=t.fixedBody=void 0;const i=a=>{const c=`position: fixed; top: -${a.documentElement.scrollTop||a.body.scrollTop}px; left: 0; right: 0;bottom: 0;`;a.body.style.cssText+=c};t.fixedBody=i;const o=a=>{const n=a.body,c=n.style.top;n.style.position="",a.body.scrollTop=a.documentElement.scrollTop=-parseFloat(c),n.style.top=n.style.left=n.style.right=n.style.bottom=""};t.looseBody=o;const e=(a,n)=>{const c=[];return a.forEach(u=>{c.push(u[n])}),c};t.take=e;const r=(a,n)=>{let c=null;return a.forEach(u=>{u.index===n&&(c=u)}),c};t.getValueByIndex=r;const s=a=>(a=Number(a),!Number.isInteger(a)||a<=0?null:a>=100?-1:a);t.formateNum=s;const l=()=>{try{return!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)}catch(a){return console.warn(`${a}`),!1}};t.isIos=l},wl1b:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=i("1jGT"),e=i("WItb"),r=i("H+p6"),s=i("vkip");class l extends e.BaseElement{static get styles(){return(0,o.css)`
      :host {
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        z-index: 999999999999;
        background-color: rgba(0, 0, 0, 0.3);
        justify-content: center;
        align-items: center;
      }

      .host {
        width: ${(0,o.unsafeCSS)((0,r.rpxToRem)(540))};
        background-color: white;
        border-radius: ${(0,o.unsafeCSS)((0,r.rpxToRem)(7))};
        padding-top: ${(0,o.unsafeCSS)((0,r.rpxToRem)(15))};
      }

      .title {
        text-align: center;
        padding: 6px 15px 15px;
        font-size: ${(0,o.unsafeCSS)((0,r.rpxToRem)(36))};
      }

      .content {
        text-align: center;
        padding: 0 15px 15px;
        color: #888;
        word-wrap: break-word;
        font-size: ${(0,o.unsafeCSS)((0,r.rpxToRem)(30))};
      }

      .button {
        text-align: center;
        height: ${(0,o.unsafeCSS)((0,r.rpxToRem)(100))};
        font-size: ${(0,o.unsafeCSS)((0,r.rpxToRem)(36))};
        line-height: ${(0,o.unsafeCSS)((0,r.rpxToRem)(100))};
        color: rgb(16, 142, 233);
        border-top: 0.5px solid #ddd;
      }
    `}static get properties(){return{title:{type:String},content:{type:String},buttonText:{type:String}}}_handleClick(){this.dispatchEvent(new Event("close"))}render(){return(0,o.html)`
      <div class="host">
        <div class="title">${this.title}</div>
        <div class="content">${this.content}</div>
        <div class="button" @click=${this._handleClick}>
          ${this.buttonText||"\u786E\u5B9A"}
        </div>
      </div>
    `}}(0,s.defineElement)("private-alert",l)},"6bPc":function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=i("2GZr"),e=i("1jGT"),r=i("iY2I"),s=i("WItb"),l=i("vkip"),a=i("yXC9"),n=i("AkK5");class c extends s.BaseElement{constructor(){super(...arguments),this.title="",this.content="",this.confirmButtonText="\u786E\u5B9A",this.cancelButtonText="\u53D6\u6D88",this.align="center"}connectedCallback(){super.connectedCallback(),(0,n.fixedBody)(document)}disconnectedCallback(){(0,n.looseBody)(document),super.disconnectedCallback()}static get styles(){return a.Styles}onConfirm(){this.dispatch(!0)}onCancel(){this.dispatch(!1)}dispatch(d){this.dispatchEvent(new CustomEvent("select",{detail:{confirm:d},bubbles:!0,composed:!0}))}transformContent(d){return d&&d.replace(/\n/g,"<br />")}onPreventTouch(d){return d.stopPropagation(),d.preventDefault(),!1}render(){return(0,e.html)`
      <div class="private-confirm-wrap">
        <div class="private-confirm-mask"></div>

        <div class="private-confirm-main">
          <div class="private-confirm-title">${this.title}</div>
          <div
            class="private-confirm-content"
            style="text-align:${this.align};"
          >
            <p>${(0,r.unsafeHTML)(this.transformContent(this.content))}</p>
            <slot name="input"></slot>
          </div>
          <div class="private-confirm-footer">
            <p @click=${this.onCancel}>${this.cancelButtonText}</p>
            <p @click=${this.onConfirm} class="private-confirm-ok">
              ${this.confirmButtonText}
            </p>
          </div>
        </div>
      </div>
    `}}o.__decorate([(0,e.property)()],c.prototype,"title",void 0),o.__decorate([(0,e.property)()],c.prototype,"content",void 0),o.__decorate([(0,e.property)()],c.prototype,"confirmButtonText",void 0),o.__decorate([(0,e.property)()],c.prototype,"cancelButtonText",void 0),o.__decorate([(0,e.property)()],c.prototype,"align",void 0),(0,l.defineElement)("private-confirm",c)},yXC9:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Styles=void 0;const o=i("1jGT"),e=i("H+p6");t.Styles=(0,o.css)`
  .private-confirm-wrap {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    z-index: 1000;
    transform: translateZ(1px);
  }

  .private-confirm-wrap p {
    margin: 0;
    padding: 0;
  }

  .private-confirm-mask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .private-confirm-main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${(0,o.unsafeCSS)((0,e.rpxToRem)(270*2))};
    background-color: #fff;
    padding-top: 15px;
    border-radius: 7px;
    z-index: 2;
  }

  .private-confirm-title {
    padding: 6px 15px 15px;
    margin: 0;
    font-size: 18px;
    line-height: 1;
    color: #000;
    text-align: center;
  }

  .private-confirm-content {
    padding: 0 15px 15px;
    font-size: 15px;
    color: #888;
    height: 100%;
    line-height: 1.5;
    overflow: auto;
    word-break: break-word;
    text-align: center;
  }

  .private-confirm-footer {
    border-top: 1px solid #ddd;
    display: flex;
    flex-flow: row nowrap;
  }

  .private-confirm-footer p {
    margin: 0;
    padding: 0;
    font-size: 18px;
    height: ${(0,o.unsafeCSS)((0,e.rpxToRem)(50*2))};
    text-align: center;
    flex: 1 1 50%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
  }

  .private-confirm-ok {
    position: relative;
    color: rgb(16, 142, 233);
  }

  .private-confirm-ok::before {
    content: '';
    position: absolute;
    left: -0.5px;
    top: 0;
    height: 100%;
    width: 1px;
    background-color: #ddd;
  }
`},AkK5:function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.looseBody=t.fixedBody=void 0;const i=e=>{const s=`position: fixed; top: -${e.documentElement.scrollTop||e.body.scrollTop}px; left: 0; right: 0;bottom: 0;`;e.body.style.cssText+=s};t.fixedBody=i;const o=e=>{const r=e.body,s=r.style.top;r.style.position="",e.body.scrollTop=e.documentElement.scrollTop=-parseFloat(s),r.style.top=r.style.left=r.style.right=r.style.bottom=""};t.looseBody=o},"1ypN":function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i("mOeX"),i("wl1b"),i("6bPc"),i("q1kQ"),i("eFMv"),i("qhjz"),i("ubvO");let o,e,r=null;const s=(l,a)=>{const n=["success","fail","compelte"];Object.keys(a).forEach(u=>{if(n.indexOf(u)>-1)return;let d=a[u];typeof d=="object"&&(d=JSON.stringify(d)),d&&l.setAttribute(u,d)})};t.default={previewImage(l){const{urls:a,current:n}=l;return new Promise((c,u)=>{try{const d=document.createElement("private-preview-image");a&&d.setAttribute("urls",typeof a=="object"?JSON.stringify(a):a),n&&d.setAttribute("current",n),document.body.appendChild(d),d.addEventListener("close",()=>{document.body.removeChild(d),c()})}catch(d){u()}})},alert({title:l,content:a,buttonText:n}){return new Promise(c=>{const u=document.createElement("private-alert");l&&u.setAttribute("title",l),a&&u.setAttribute("content",typeof a=="object"?JSON.stringify(a):a),n&&u.setAttribute("buttonText",n),document.body.appendChild(u),u.addEventListener("close",()=>(document.body.removeChild(u),c(void 0)))})},showLoading({content:l,delay:a}){const n=function(){new Promise(u=>(o&&document.body.removeChild(o),o=document.createElement("private-loading"),l&&o.setAttribute("content",l),document.body.appendChild(o),u(void 0)))},c=a?parseInt(a):0;return c>0?new Promise(u=>{setTimeout(()=>u(void 0),c)}).then(()=>n()):n()},hideLoading(){return new Promise(l=>(document.body.removeChild(o),o=null,l(void 0)))},showToast({content:l,type:a,duration:n=3e3}){if(!e)return new Promise((c,u)=>{try{e=document.createElement("private-toast"),l&&e.setAttribute("content",l),a&&e.setAttribute("type",a),document.body.appendChild(e),r=setTimeout(()=>(document.body.removeChild(e),e=null,c(void 0)),n)}catch(d){return e=null,u(`${d}`)}})},hideToast(){return new Promise((l,a)=>{try{return e&&(document.body.removeChild(e),e=null,clearTimeout(r)),l(void 0)}catch(n){return a(`${n}`)}})},confirm(l){const a=()=>{const n=document.createElement("private-confirm");return s(n,l),document.body.appendChild(n),n};return new Promise((n,c)=>{try{const u=a();u.addEventListener("select",d=>{d.stopPropagation(),document.body.removeChild(u),n(d&&d.detail)})}catch(u){c(`${u}`)}})},prompt(l){const a=()=>{const n=document.createElement("private-prompt");return s(n,l),document.body.appendChild(n),n};return new Promise((n,c)=>{try{const u=a();u.addEventListener("select",d=>{d.stopPropagation(),document.body.removeChild(u),n(d&&d.detail)})}catch(u){c(`${u}`)}})},showActionSheet(l){const a=()=>{const n=document.createElement("private-action-sheet");return s(n,l),document.body.appendChild(n),n};return new Promise((n,c)=>{try{const u=a();u.addEventListener("select",d=>{d.stopPropagation(),document.body.removeChild(u),n(d&&d.detail)})}catch(u){c(`${u}`)}})}}},q1kQ:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=i("2GZr"),e=i("1jGT"),r=i("WItb"),s=i("vkip");class l extends r.BaseElement{static get styles(){return(0,e.css)`
      :host {
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        z-index: 999999999999;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      .host {
        border-radius: 5px;
        padding: 15px 15px;
        min-width: 60px;
        color: #fff;
        background-color: rgba(58, 58, 58, 0.9);
        line-height: 1.5;
      }

      .circle {
        border: 2px solid rgba(200, 200, 200, 0.5);
        border-radius: 50%;
        position: relative;
        width: 0;
        height: 0;
        padding: 40%;
        margin: auto;
      }

      .circle::after {
        content: '';
        display: block;
        border-radius: 50%;
        width: 100%;
        height: 100%;
        position: absolute;
        top: -2px;
        left: -2px;
        border: 2px solid;
        border-color: transparent;
        border-left-color: #fff;
        animation: circleRotateAnimation 1s infinite linear;
      }

      @keyframes circleRotateAnimation {
        from {
          transform: rotateZ(0);
        }
        to {
          transform: rotateZ(360deg);
        }
      }

      .loading-text {
        margin-top: 6px;
        color: #fff;
        line-height: 1.5;
      }
    `}_handleClick(){this.dispatchEvent(new Event("close"))}render(){return(0,e.html)`
      <div class="host">
        <div class="circle"></div>
        <div class="loading-text">${this.content}</div>
      </div>
    `}}o.__decorate([(0,e.property)({type:String})],l.prototype,"content",void 0),(0,s.defineElement)("private-loading",l)},eFMv:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=i("2GZr"),e=i("1jGT"),r=i("WItb");i("p+16"),i("dSFM");const s=i("H+p6"),l=i("vkip"),a=o.__importDefault(i("aYl2"));class n extends r.BaseElement{constructor(){super(...arguments),this.urls="[]",this.current=0,this.show=!1,this.indicatorDots=!1,this.index=1,this.init=()=>{this.current=this.current<this.parseUrls().length?this.current:this.parseUrls().length-1,this.current=this.current>0?this.current:0,this.index=this.current+1,this.show=!0,this.initEvent()},this.initEvent=()=>{const u=this.shadowRoot.querySelectorAll("tiga-swiper");u&&u.length>0&&u[0].addEventListener("change",p=>{const h=p.detail&&p.detail.current;this.index=h+1})},this.parseUrls=()=>{try{return JSON.parse(this.urls)}catch(u){return console.error("urls \u53C2\u6570\u4E0D\u6B63\u786E"),[]}}}static get styles(){return(0,e.css)`
      :host {
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        z-index: 999999999999;
        justify-content: center;
        align-items: center;
      }

      .host {
        width: 100%;
        height: 100vh;
        background-color: white;
        border-radius: ${(0,e.unsafeCSS)((0,s.rpxToRem)(7))};
        padding-top: ${(0,e.unsafeCSS)((0,s.rpxToRem)(15))};
      }

      .mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 1;
      }

      .container {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        z-index: 10;
      }

      .back-btn {
        position: absolute;
        top: 40px;
        left: 10px;
        z-index: 9999;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
      }

      .page-num {
        text-align: left;
        width: 100px;
        color: #fff;
        margin-left: 5px;
        font-size: 15px;
        letter-spacing: 2px;
      }

      .s-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-height: 100vh;
        overflow: auto;
      }

      #tiga-image-swiper .tiga-swiper-0 {
        height: 100vh;
      }

      #tiga-image-swiper .swiper-container {
        height: 100vh;
      }

      #tiga-image-swiper .tiga-swiper-0 .swiper-container {
        height: 100%;
      }

      #tiga-image-swiper .s-img {
        width: 100%;
      }
    `}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.init()},10)}_handleClick(){this.dispatchEvent(new Event("close"))}renderSwiperItem(){const u=this.parseUrls();return(0,e.html)`
      ${u.map(d=>(0,e.html)`
          <tiga-swiper-item class="s-item">
            <img class="s-img" src="${d}" />
          </tiga-swiper-item>
        `)}
    `}renderPagination(){return(0,e.html)`
      <div class="page-num">${this.index}/${this.parseUrls().length}</div>
    `}renderExitIcon(){return(0,e.html)`
      <div class="back-btn" @click=${this._handleClick}>
        <svg
          t="1611890815185"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1731"
          width="14"
          height="14"
        >
          <path
            fill="#ffffff"
            d="M724.48 960L275.84 555.52C263.04 544 256 528 256 512s7.04-32 19.84-43.52L724.48 64l43.52 48.64L325.12 512 768 911.36l-43.52 48.64z"
            p-id="1732"
          ></path>
        </svg>
        ${this.renderPagination()}
      </div>
    `}render(){return(0,e.html)`
      <div class="host">
        ${this.show?(0,e.html)`<div class="mask" @click=${this._handleClick} />`:void 0}
        ${this.renderExitIcon()}
        <div class="container">
          <tiga-swiper
            id="tiga-image-swiper"
            current="${this.current}"
            indicator-dots="${this.indicatorDots}"
          >
            ${this.renderSwiperItem()}
          </tiga-swiper>
        </div>
      </div>
    `}}o.__decorate([(0,e.property)({type:String})],n.prototype,"urls",void 0),o.__decorate([(0,e.property)({type:Number})],n.prototype,"current",void 0),o.__decorate([(0,e.property)({type:a.default})],n.prototype,"show",void 0),o.__decorate([(0,e.property)({type:a.default})],n.prototype,"indicatorDots",void 0),o.__decorate([(0,e.property)({type:Number})],n.prototype,"index",void 0),(0,l.defineElement)("private-preview-image",n)},qhjz:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=i("2GZr"),e=i("1jGT"),r=i("WItb"),s=i("vkip"),l=i("B3TJ");class a extends r.BaseElement{constructor(){super(...arguments),this.title="",this.message="\u8BF7\u8F93\u5165\u5185\u5BB9",this.placeholder="",this.align="center",this.okButtonText="\u786E\u5B9A",this.cancelButtonText="\u53D6\u6D88"}static get styles(){return l.Styles}handleConfirmChange(c){c.stopPropagation();const{detail:u={}}=c,d=this.promptInput.value,p=u.confirm||!1;let h={ok:p};p&&(h=Object.assign(Object.assign({},h),{inputValue:d})),this.dispatchEvent(new CustomEvent("select",{detail:h,bubbles:!0,composed:!0}))}render(){return(0,e.html)`
      <private-confirm
        @select="${this.handleConfirmChange}"
        title=${this.title}
        content=${this.message}
        align=${this.align}
        confirmButtonText=${this.okButtonText}
        cancelButtonText=${this.cancelButtonText}
      >
        <input
          slot="input"
          placeholder=${this.placeholder}
          class="private-prompt-input"
          id="prompt-input"
        />
      </private-confirm>
    `}}o.__decorate([(0,e.property)()],a.prototype,"title",void 0),o.__decorate([(0,e.property)()],a.prototype,"message",void 0),o.__decorate([(0,e.property)()],a.prototype,"placeholder",void 0),o.__decorate([(0,e.property)()],a.prototype,"align",void 0),o.__decorate([(0,e.property)()],a.prototype,"okButtonText",void 0),o.__decorate([(0,e.property)()],a.prototype,"cancelButtonText",void 0),o.__decorate([(0,e.query)("#prompt-input")],a.prototype,"promptInput",void 0),(0,s.defineElement)("private-prompt",a)},B3TJ:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Styles=void 0;const o=i("1jGT");t.Styles=(0,o.css)`
  .private-prompt-input {
    display: inline-block;
    line-height: 30px;
    width: 90%;
    padding: 0px 5px;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 7px;
    color: rgb(51, 51, 51);
    outline: none;
    margin-top: 9px;
  }
`},"3rfO":function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MAP=t.exception=t.fail=t.success=void 0,t.success='<svg id="success" viewBox="0 0 72 72"><g fill="none" fill-rule="evenodd"><path d="M36 72c19.882 0 36-16.118 36-36S55.882 0 36 0 0 16.118 0 36s16.118 36 36 36zm0-2c18.778 0 34-15.222 34-34S54.778 2 36 2 2 17.222 2 36s15.222 34 34 34z" fill="#FFF"></path><path stroke="#FFF" stroke-width="2" d="M19 34.54l11.545 11.923L52.815 24"></path></g></svg>',t.fail=`
<svg id="fail" viewBox="0 0 72 72"><g fill="none" fill-rule="evenodd"><path d="M36 72c19.882 0 36-16.118 36-36S55.882 0 36 0 0 16.118 0 36s16.118 36 36 36zm0-2c18.778 0 34-15.222 34-34S54.778 2 36 2 2 17.222 2 36s15.222 34 34 34z" fill="#FFF"></path><path d="M22 22l28.304 28.304m-28.304 0L50.304 22" stroke="#FFF" stroke-width="2"></path></g></svg>
`,t.exception=`
<svg id="dislike" viewBox="0 0 72 72"><g fill="none" fill-rule="evenodd"><path d="M36 72c19.882 0 36-16.118 36-36S55.882 0 36 0 0 16.118 0 36s16.118 36 36 36zm0-2c18.778 0 34-15.222 34-34S54.778 2 36 2 2 17.222 2 36s15.222 34 34 34z" fill="#FFF"></path><path fill="#FFF" d="M47 22h2v6h-2zm-24 0h2v6h-2z"></path><path d="M21 51s4.6-7 15-7 15 7 15 7" stroke="#FFF" stroke-width="2"></path></g></svg>
`,t.MAP={success:t.success,fail:t.fail,exception:t.exception}},ubvO:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=i("2GZr"),e=i("1jGT"),r=i("iY2I"),s=i("WItb"),l=i("vkip"),a=i("3rfO"),n=i("aLam");class c extends s.BaseElement{constructor(){super(...arguments),this.content="",this.type="none"}static get styles(){return n.Styles}render(){return(0,e.html)`
      <div class="private-toast">
        ${a.MAP[this.type]?(0,r.unsafeHTML)(a.MAP[this.type]):null}
        <p class="private-toast-content">${this.content}</p>
      </div>
    `}}o.__decorate([(0,e.property)()],c.prototype,"content",void 0),o.__decorate([(0,e.property)()],c.prototype,"type",void 0),(0,l.defineElement)("private-toast",c)},aLam:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Styles=void 0;const o=i("1jGT");t.Styles=(0,o.css)`
  .private-toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 3px;
    color: #fff;
    z-index: 2147483647;
    background-color: rgba(58, 58, 58, 0.9);
    line-height: 1.5;
    font-size: 14px;
    padding: 9px 15px;
    box-sizing: border-box;
    text-align: center;
  }

  .private-toast p {
    margin: 0;
    padding: 0;
  }

  .private-toast #success,
  .private-toast #fail,
  .private-toast #dislike {
    width: 36px;
    height: 36px;
    text-align: center;
  }
`},"dMS/":function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=i("+d1X"),e={is3d:!1,isSupportAnim:!1,sdkName:"",sdkVersion:"",isSupportOversea:!1,needStyleV7:!1},r=".tiga-map-container";t.default={createMapContext(l){const a=new s(l),{map:n}=a;return n?a:null},getMapInfo(){return Promise.resolve(e)}};class s{constructor(a){typeof o.my=="object"&&typeof o.my.createSelectorQuery=="function"?this.map=o.my.createSelectorQuery().select(`#${a}`).target:this.map=document.getElementById(a)}calculateDistance(){console.warn("\u6682\u4E0D\u652F\u6301")}changeMarkers(){console.warn("\u6682\u4E0D\u652F\u6301")}clearRoute(){return this.map.clearRoute()}gestureEnable(){console.warn("web\u4E0D\u652F\u6301\u624B\u52BF")}getCenterLocation(a){return this.map.getCenterLocation(a)}getMapProperties(a){const{success:n}=a;n&&n(e)}getRegion(){console.warn("\u6682\u4E0D\u652F\u6301")}moveToLocation(a){return this.map.moveToLocation(a)}showRoute(a){return this.map.showRoute(a)}showsCompass(){console.warn("web\u4E0D\u652F\u6301\u6307\u5357\u9488")}showsScale(a){return this.map.showsScale(a)}smoothMoveMarker(){console.warn("\u6682\u4E0D\u652F\u6301")}smoothMovePolyline(){console.warn("\u6682\u4E0D\u652F\u6301")}translateMarker(){console.warn("\u6682\u4E0D\u652F\u6301")}updateComponents(a){return this.map.updateComponent(a)}getRotate(a){return this.map.getRotate(a)}getScale(a){return this.map.getScale(a)}getSkew(a){return this.map.getSkew(a)}includePoints(a){const{points:n}=a;return this.map.__drawIncludePoints(n)}mapToScreen(){console.warn("\u6682\u4E0D\u652F\u6301")}screenToMap(){console.warn("\u6682\u4E0D\u652F\u6301")}polygonContainsPoint(){console.warn("\u6682\u4E0D\u652F\u6301")}setCenterOffset(){console.warn("\u6682\u4E0D\u652F\u6301")}setMapType(){console.warn("\u6682\u4E0D\u652F\u6301")}smoothMoveMarke(){console.warn("\u6682\u4E0D\u652F\u6301")}}},M4mM:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i("/Fpt"),i("nycA");const o=(e,r)=>{const s=["success","fail","compelte"];Object.keys(r).forEach(a=>{if(s.indexOf(a)>-1)return;let n=r[a];typeof n=="object"&&(n=JSON.stringify(n)),n&&e.setAttribute(a,n)})};t.default={multiLevelSelect(e){const r=()=>{const s=document.createElement("private-multi-level-select");return o(s,e),document.body.appendChild(s),s};return new Promise((s,l)=>{try{const a=r();a.addEventListener("select",n=>{n.stopPropagation(),document.body.removeChild(a),s(n&&n.detail)}),a.addEventListener("cancel",n=>{n.stopPropagation(),document.body.removeChild(a)})}catch(a){l(`${a}`)}})}}},ZqgI:function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CLOSE_ICON=t.CONTENT_HEIGHT=t.HEADER_HEIGHT=void 0,t.HEADER_HEIGHT=2*40,t.CONTENT_HEIGHT=2*244,t.CLOSE_ICON=`
<svg id="cross" viewBox="0 0 44 44"><path class="custom-close" fill-rule="evenodd" fill="#1890ff" d="M24.008 21.852l8.97-8.968L31.092 11l-8.97 8.968L13.157 11l-1.884 1.884 8.968 8.968-9.24 9.24 1.884 1.885 9.24-9.24 9.24 9.24 1.885-1.884-9.24-9.24z"></path></svg>
`},"/Fpt":function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=i("2GZr"),e=i("1jGT"),r=i("A/F/"),s=i("iY2I"),l=i("WItb"),a=i("vkip"),n=i("ZqgI"),c=i("wRcF"),u=i("4RR/");class d extends l.BaseElement{constructor(){super(...arguments),this.title="",this.show=!1}connectedCallback(){super.connectedCallback(),this.show&&this.toggleModal(!0)}static get styles(){return c.ModalStyles}toggleModal(h=!1){h?(0,u.fixedBody)(document):(0,u.looseBody)(document),this.show=h}dispatch(h,g={}){this.dispatchEvent(new CustomEvent(h,{detail:g,bubbles:!0,composed:!0}))}onClose(){this.dispatch("close"),this.toggleModal()}render(){const h={"modal-container--show":this.show};return(0,e.html)`
      <div class="modal-container ${(0,r.classMap)(h)}">
        <div class="modal-mask"></div>

        <div class="modal-main">
          <div class="modal-main-header">
            ${this.title?(0,e.html)`<p class="modal-title">${this.title}</p>`:null}
            <p class="modal-main-close" @click=${this.onClose}>
              ${(0,s.unsafeHTML)(n.CLOSE_ICON)}
            </p>
          </div>
          <div class="modal-main-content">
            <slot></slot>
          </div>
        </div>
      </div>
    `}}o.__decorate([(0,e.property)({type:String})],d.prototype,"title",void 0),o.__decorate([(0,e.property)({type:Boolean})],d.prototype,"show",void 0),(0,a.defineElement)("private-multi-select-modal",d)},wRcF:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ModalStyles=void 0;const o=i("1jGT"),e=i("H+p6"),r=i("ZqgI");t.ModalStyles=(0,o.css)`
  .modal-container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    transform: translateZ(1px);
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .modal-mask {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.2);
  }

  .modal-main {
    position: absolute;
    width: 100%;
    background-color: #fff;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
  }

  .modal-main-header {
    position: relative;
    z-index: 4;
    background-image: linear-gradient(180deg, #e7e7e7, #e7e7e7, #fff, #fff);
    background-position: bottom;
    background-size: 100% 1px;
    background-repeat: no-repeat;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    height: ${(0,o.unsafeCSS)((0,e.rpxToRem)(r.HEADER_HEIGHT))};
  }

  .modal-btn {
    color: #108ee9;
    font-size: 17px;
    padding: 9px 15px;
    margin: 0;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-title {
    flex: 1;
    text-align: center;
    color: #000;
    font-size: 17px;
    margin: 0;
    padding: 0;
  }

  .modal-main-close {
    position: absolute;
    width: 22px;
    height: 22px;
    top: 9px;
    right: 10px;
    font-size: 16px;
    color: #1890ff;
    margin: 0;
    padding: 0;
  }

  .modal-main-close::after {
    content: '';
    position: absolute;
    top: -5px;
    right: -5px;
    bottom: -5px;
    left: -5px;
  }

  .modal-main-content {
    height: ${(0,o.unsafeCSS)((0,e.rpxToRem)(r.CONTENT_HEIGHT))};
    position: relative;
    overflow: hidden;
    width: 100%;
  }

  .modal-content-list {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1;
    padding: 0;
    transform: translate3d(0px, 0px, 0px);
    -webkit-overflow-scrolling: touch;
  }

  .modal-content-mask {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: 3;
    margin: 0 auto;
    background-color: #fff;
  }

  .modal-footer-group {
    margin: 16px 12px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-end;
  }

  .modal-btn-android:last-child {
    margin-left: 16px;
  }
`},"4RR/":function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.looseBody=t.fixedBody=void 0;const i=e=>{const s=`position: fixed; top: -${e.documentElement.scrollTop||e.body.scrollTop}px; left: 0; right: 0;height: 100%;`;e.body.style.cssText+=s};t.fixedBody=i;const o=e=>{const r=e.body,s=r.style.top;r.style.position="",e.body.scrollTop=e.documentElement.scrollTop=-parseFloat(s),r.style.top=r.style.left=r.style.right=r.style.bottom="",r.style.height="auto"};t.looseBody=o},nycA:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=i("2GZr"),e=i("1jGT"),r=i("WItb"),s=i("vkip"),l=i("Pudz");class a extends r.BaseElement{constructor(){super(...arguments),this.selectList=[],this.title="",this.list=[]}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}static get styles(){return l.Styles}dispatch(c,u={}){this.dispatchEvent(new CustomEvent(c,{detail:u,bubbles:!0,composed:!0}))}handleClose(c){c.stopPropagation(),this.dispatch("cancel")}getCurrentSubList(){const{length:c}=this.selectList,u=c>0?this.selectList[c-1]:this.list;return u.subList||u}handleClick(c){const u=this.getCurrentSubList();if(!u[c].subList){const d=this.selectList.map(p=>({name:p.name}));d.push({name:u[c].name}),this.dispatch("select",{result:d});return}this.selectList=[...this.selectList,u[c]]}handleTabClick(c){this.selectList=this.selectList.slice(0,c)}render(){return(0,e.html)`
      <private-multi-select-modal
        .show=${!0}
        title=${this.title}
        @close=${this.handleClose}
      >
        <div class="select-container">
          <div class="select-header">
            ${this.selectList.map((c,u)=>(0,e.html)`<p
                  class="select-tab"
                  @click=${()=>{this.handleTabClick(u)}}
                >
                  ${c.name}
                </p>`)}
            <p class="select-tab select-tab-active">请选择</p>
          </div>
          <div class="select-list">
            ${this.getCurrentSubList().map((c,u)=>(0,e.html)`<p
                  class="select-item"
                  @click=${()=>this.handleClick(u)}
                >
                  ${c.name}
                </p>`)}
          </div>
        </div>
      </private-multi-select-modal>
    `}}o.__decorate([(0,e.internalProperty)()],a.prototype,"selectList",void 0),o.__decorate([(0,e.property)()],a.prototype,"title",void 0),o.__decorate([(0,e.property)({type:Array})],a.prototype,"list",void 0),(0,s.defineElement)("private-multi-level-select",a)},Pudz:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Styles=void 0;const o=i("1jGT"),e=i("H+p6");t.Styles=(0,o.css)`
  p {
    margin: 0;
    padding: 0;
  }

  .select-header {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }

  .select-tab {
    width: ${(0,o.unsafeCSS)((0,e.rpxToRem)(75*2))};
    height: ${(0,o.unsafeCSS)((0,e.rpxToRem)(44*2))};
    line-height: ${(0,o.unsafeCSS)((0,e.rpxToRem)(44*2))};

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    color: #111;
    font-size: 16px;
  }

  .select-tab-active {
    color: #1890ff;
    border-bottom: 2px solid #1890ff;
  }

  .select-list {
    max-height: ${(0,o.unsafeCSS)((0,e.rpxToRem)(200*2))};
    overflow: auto;
    position: relative;
    background-color: #fff;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }

  .select-item {
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    margin-left: ${(0,o.unsafeCSS)((0,e.rpxToRem)(15*2))};
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    line-height: 1.5;
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #111;
    height: ${(0,o.unsafeCSS)((0,e.rpxToRem)(44*2))};
  }

  .select-item:last-child {
    border-bottom: none;
  }
`},KHZd:function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RATE=t.INDICATOR_TOP=t.CONTENT_HEIGHT=t.HEADER_HEIGHT=t.ITEM_HEIGHT=void 0,t.ITEM_HEIGHT=2*34,t.HEADER_HEIGHT=2*42,t.CONTENT_HEIGHT=2*238,t.INDICATOR_TOP=2*102,t.RATE=.4},"2gS5":function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=i("2GZr"),e=i("1jGT"),r=i("A/F/"),s=i("WItb"),l=i("vkip"),a=i("Kn5C"),n=i("+vLV");class c extends s.BaseElement{constructor(){super(...arguments),this.openAnimation=!1,this.styles={transform:"translate3d(0, 0, 0)"},this.title="",this.show=!1,this.confirmText="\u786E\u5B9A",this.cancelText="\u53D6\u6D88"}connectedCallback(){super.connectedCallback(),this.show&&this.toggleModal(!0)}static get styles(){return a.ModalStyles}toggleModal(d=!1){d?((0,n.fixedBody)(document),requestAnimationFrame(()=>this.openAnimation=!0)):((0,n.looseBody)(document),requestAnimationFrame(()=>this.openAnimation=!1)),this.show=d}dispatch(d,p={}){this.dispatchEvent(new CustomEvent(d,{detail:p,bubbles:!0,composed:!0}))}onConfirm(){this.dispatch("confirm"),this.toggleModal()}onCancel(){this.dispatch("cancel"),this.toggleModal()}render(){const d={"modal-container--show":this.openAnimation};return(0,e.html)`
      <div class="modal-container ${(0,r.classMap)(d)}">
        <div class="modal-mask"></div>

        <div
          class="modal-main ${(0,n.isIos)()?"modal-main--ios":"modal-main--android"}"
        >
          <div class="modal-main-header">
            ${(0,n.isIos)()?(0,e.html)`<p class="modal-btn" @click="${this.onCancel}">
                  ${this.cancelText}
                </p>`:null}
            ${this.title?(0,e.html)`<p class="modal-title">${this.title}</p>`:null}
            ${(0,n.isIos)()?(0,e.html)`<p class="modal-btn" @click="${this.onConfirm}">
                  ${this.confirmText}
                </p>`:null}
          </div>
          <div class="modal-main-content">
            <slot name="content"></slot>
          </div>
          ${(0,n.isIos)()?null:(0,e.html)`
                <div class="modal-footer-group">
                  <p class="modal-btn-android" @click="${this.onCancel}">
                    ${this.cancelText}
                  </p>
                  <p class="modal-btn-android" @click="${this.onConfirm}">
                    ${this.confirmText}
                  </p>
                </div>
              `}
        </div>
      </div>
    `}}o.__decorate([(0,e.internalProperty)()],c.prototype,"openAnimation",void 0),o.__decorate([(0,e.internalProperty)()],c.prototype,"styles",void 0),o.__decorate([(0,e.property)({type:String})],c.prototype,"title",void 0),o.__decorate([(0,e.property)({type:Boolean})],c.prototype,"show",void 0),o.__decorate([(0,e.property)()],c.prototype,"confirmText",void 0),o.__decorate([(0,e.property)()],c.prototype,"cancelText",void 0),(0,l.defineElement)("private-modal",c)},Kn5C:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ModalStyles=void 0;const o=i("1jGT"),e=i("H+p6"),r=i("KHZd");t.ModalStyles=(0,o.css)`
  .modal-container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    transform: translateZ(1px);
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    display: none;
  }

  .modal-container--show {
    display: block;
  }

  .modal-mask {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.2);
  }

  .modal-main {
    position: absolute;
    width: 100%;
    background-color: #fff;
    z-index: 2;
  }

  .modal-main--ios {
    right: 0;
    bottom: 0;
    left: 0;
  }

  .modal-main--android {
    top: 50%;
    left: 50%;
    width: ${(0,o.unsafeCSS)((0,e.rpxToRem)(270*2))};
    transform: translate(-50%, -50%);
    border-radius: 7px;
  }

  .modal-main-header {
    position: relative;
    z-index: 4;
    background-image: linear-gradient(180deg, #e7e7e7, #e7e7e7, #fff, #fff);
    background-position: bottom;
    background-size: 100% 1px;
    background-repeat: no-repeat;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    height: ${(0,o.unsafeCSS)((0,e.rpxToRem)(r.HEADER_HEIGHT))};
  }

  .modal-main--android .modal-main-header {
    margin: 0 12px;
  }

  .modal-btn {
    color: #108ee9;
    font-size: 17px;
    padding: 9px 15px;
    margin: 0;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-title {
    flex: 1;
    text-align: center;
    color: #000;
    font-size: 17px;
    margin: 0;
    padding: 0;
  }

  .modal-main--android .modal-title {
    text-align: left;
  }

  .modal-main-content {
    height: ${(0,o.unsafeCSS)((0,e.rpxToRem)(r.CONTENT_HEIGHT))};
    position: relative;
    overflow: hidden;
    width: 100%;
  }

  .modal-main--android .modal-main-content {
    height: ${(0,o.unsafeCSS)((0,e.rpxToRem)(r.CONTENT_HEIGHT/3*2))};
  }

  .modal-main--android .modal-main-content {
    width: 85%;
    margin: 0 auto;
    padding: 2px 0;
  }

  .modal-content-indicator {
    position: absolute;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    height: ${(0,o.unsafeCSS)((0,e.rpxToRem)(r.ITEM_HEIGHT))};
    top: ${(0,o.unsafeCSS)((0,e.rpxToRem)(r.INDICATOR_TOP))};
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    z-index: 3;
  }

  .modal-main--android .modal-content-indicator {
    top: ${(0,o.unsafeCSS)((0,e.rpxToRem)(r.INDICATOR_TOP/3*2))};
  }

  .modal-content-list {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1;
    padding: ${(0,o.unsafeCSS)((0,e.rpxToRem)(r.INDICATOR_TOP))} 0;
    transform: translate3d(0px, 0px, 0px);
    -webkit-overflow-scrolling: touch;
  }

  .modal-main--android .modal-content-list {
    padding: ${(0,o.unsafeCSS)((0,e.rpxToRem)(r.INDICATOR_TOP/3*2))} 0;
  }

  .modal-content-item {
    touch-action: manipulation;
    text-align: center;
    font-size: 16px;
    height: ${(0,o.unsafeCSS)((0,e.rpxToRem)(r.ITEM_HEIGHT))};
    line-height: ${(0,o.unsafeCSS)((0,e.rpxToRem)(r.ITEM_HEIGHT))};
    color: #000;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .modal-content-mask {
    position: absolute;
    left: 0;
    top: 0px;
    bottom: -1px;
    width: 100%;
    z-index: 3;
    margin: 0 auto;
    background-image: linear-gradient(
        180deg,
        hsla(0, 0%, 100%, 0.95),
        hsla(0, 0%, 100%, 0.6)
      ),
      linear-gradient(0deg, hsla(0, 0%, 100%, 0.95), hsla(0, 0%, 100%, 0.6));
    background-position: top, bottom;
    background-size: 100% ${(0,o.unsafeCSS)((0,e.rpxToRem)(r.INDICATOR_TOP))};
    background-repeat: no-repeat;
  }

  .modal-main--android .modal-content-mask {
    background-size: 100%
      ${(0,o.unsafeCSS)((0,e.rpxToRem)(r.CONTENT_HEIGHT/3-r.ITEM_HEIGHT/2))};
  }

  .modal-footer-group {
    margin: 16px 12px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-end;
  }

  .modal-btn-android {
    position: relative;
    color: #108ee9;
    font-size: 17px;
    margin: 0;
  }

  .modal-btn-android:last-child {
    margin-left: 16px;
  }

  .modal-btn-android::after {
    content: '';
    position: absolute;
    top: -10px;
    right: -10px;
    bottom: -10px;
    left: -10px;
  }
`},"+vLV":function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isIos=t.looseBody=t.fixedBody=void 0;const i=r=>{const l=`position: fixed; top: -${r.documentElement.scrollTop||r.body.scrollTop}px; left: 0; right: 0;height: 100%;`;r.body.style.cssText+=l};t.fixedBody=i;const o=r=>{const s=r.body,l=s.style.top;s.style.position="",r.body.scrollTop=r.documentElement.scrollTop=-parseFloat(l),s.style.top=s.style.left=s.style.right=s.style.bottom="",s.style.height="auto"};t.looseBody=o;const e=()=>{try{return!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)}catch(r){return console.warn(`${r}`),!1}};t.isIos=e},HWKc:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i("2gS5"),i("jpiR");const o=(e,r)=>{const s=["success","fail","compelte"];Object.keys(r).forEach(a=>{if(s.indexOf(a)>-1)return;let n=r[a];typeof n=="object"&&(n=JSON.stringify(n)),n&&e.setAttribute(a,n)})};t.default={optionsSelect(e){const r=()=>{const s=document.createElement("private-option-select");return o(s,e),document.body.appendChild(s),s};return new Promise((s,l)=>{try{const a=r();a.addEventListener("select",n=>{n.stopPropagation(),document.body.removeChild(a),s(n&&n.detail)})}catch(a){l(`${a}`)}})}}},jpiR:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=i("2GZr"),e=i("1jGT"),r=i("WItb"),s=i("vkip"),l=i("fGpq");class a extends r.BaseElement{constructor(){super(...arguments),this.cacheOneSelect=0,this.cacheTwoSelect=0,this.title="",this.optionsOne=[],this.optionsTwo=[],this.selectedOneIndex=0,this.selectedTwoIndex=0,this.positiveString="\u786E\u5B9A",this.negativeString="\u53D6\u6D88"}connectedCallback(){super.connectedCallback(),this.cacheOneSelect=this.selectedOneIndex,this.cacheTwoSelect=this.selectedTwoIndex}disconnectedCallback(){super.disconnectedCallback()}static get styles(){return l.Styles}onConfirm(){this.dispatch(!0)}onCancel(){this.dispatch(!1)}buildReturnResult(){const c={selectedOneIndex:this.selectedOneIndex,selectedOneOption:this.optionsOne[this.selectedOneIndex]};return this.onlyOne()?c:Object.assign(Object.assign({},c),{selectedTwoIndex:this.selectedTwoIndex,selectedTwoOption:this.optionsTwo[this.selectedTwoIndex]})}buildCancelResult(){const c={selectedOneIndex:"",selectedOneOption:""},u={selectedTwoIndex:"",selectedTwoOption:""};return this.onlyOne()?c:Object.assign(Object.assign({},c),u)}dispatch(c=!1){this.dispatchEvent(new CustomEvent("select",{detail:c?this.buildCancelResult():this.buildReturnResult(),bubbles:!0,composed:!0}))}onlyOne(){const c=this.optionsTwo;return!Array.isArray(c)||c.length<=0}handleOneChange(c){const{detail:u}=c;this.selectedOneIndex=u.value,this.dispatch()}cancelOneChange(){this.dispatch(!0)}cacheTwoChange(c){const{detail:u}=c,{value:d}=u;this.cacheOneSelect=d[0],this.cacheTwoSelect=d[1]}handleTwoChange(){this.selectedOneIndex=this.cacheOneSelect,this.selectedTwoIndex=this.cacheTwoSelect,this.dispatch()}renderSingleSelect(){return(0,e.html)`
      <tiga-picker
        title=${this.title}
        .range=${this.optionsOne}
        value=${this.selectedOneIndex}
        confirmText=${this.positiveString}
        cancelText=${this.negativeString}
        @change=${this.handleOneChange}
        @no-change=${this.handleOneChange}
        @cancel=${this.cancelOneChange}
        .show=${!0}
      >
      </tiga-picker>
    `}renderTwoSelect(){return(0,e.html)`
      <private-modal
        .show="${!0}"
        confirmText=${this.positiveString}
        cancelText=${this.negativeString}
        @confirm=${this.handleTwoChange}
        @cancel=${()=>this.dispatch()}
        title=${this.title}
      >
        <tiga-picker-view
          slot="content"
          .value=${[this.selectedOneIndex,this.selectedTwoIndex]}
          @change=${this.cacheTwoChange}
          indicator-style="border-top: 1px solid #ddd;border-bottom: 1px solid #ddd;background-color:#f5f5f9;"
        >
          <tiga-picker-view-column
            >${this.optionsOne.map(c=>(0,e.html)`<div>${c}</div>`)}</tiga-picker-view-column
          >
          <tiga-picker-view-column
            >${this.optionsTwo.map(c=>(0,e.html)`<div>${c}</div>`)}</tiga-picker-view-column
          >
        </tiga-picker-view>
      </private-modal>
    `}render(){return(0,e.html)`${this.onlyOne()?this.renderSingleSelect():this.renderTwoSelect()}`}}o.__decorate([(0,e.property)()],a.prototype,"title",void 0),o.__decorate([(0,e.property)({type:Array})],a.prototype,"optionsOne",void 0),o.__decorate([(0,e.property)({type:Array})],a.prototype,"optionsTwo",void 0),o.__decorate([(0,e.property)({type:Number})],a.prototype,"selectedOneIndex",void 0),o.__decorate([(0,e.property)({type:Number})],a.prototype,"selectedTwoIndex",void 0),o.__decorate([(0,e.property)()],a.prototype,"positiveString",void 0),o.__decorate([(0,e.property)()],a.prototype,"negativeString",void 0),(0,s.defineElement)("private-option-select",a)},fGpq:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Styles=void 0;const o=i("1jGT");t.Styles=(0,o.css)`
  tiga-picker-view {
    background-color: #fff;
  }
`},th0L:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=i("2GZr"),e=i("1jGT"),r=i("WItb");class s extends r.BaseElement{constructor(){super(),this.ICON_TYPE={SUCCESS:["M65 130c-35.899 0-65-29.101-65-65S29.101 0 65 0s65 29.101 65 65-29.101 65-65 65zm28.749-84.5a1 1 0 0 0-.71.295L58.363 80.654l-13.75-13.651a1 1 0 0 0-.705-.29H32.752L58.362 93.7l44.886-48.2h-9.5z"],INFO:["M65 130c-35.899 0-65-29.101-65-65S29.101 0 65 0s65 29.101 65 65-29.101 65-65 65zM52.812 48.75v4.063h8.126V97.5h-8.126v4.063H81.25V97.5h-8.125V48.75H52.812zM65 40.625a8.125 8.125 0 1 0 0-16.25 8.125 8.125 0 0 0 0 16.25z"],WARN:["M65 130c-35.899 0-65-29.101-65-65S29.101 0 65 0s65 29.101 65 65-29.101 65-65 65zM60.521 29.25l.988 51.02a1 1 0 0 0 1 .98h6.066a1 1 0 0 0 1-.98l.967-50a1 1 0 0 0-1-1.02h-9.02zm5.02 70.417a5.958 5.958 0 1 0 0-11.917 5.958 5.958 0 0 0 0 11.917z"],WAITING:["M67.684 68.171L67.766 26h-6.36l-1.888 46.562-.092.19.083.04-.011.275h.586l30.94 14.76 2.544-4.406-25.884-15.25zM65 130c-35.899 0-65-29.101-65-65S29.101 0 65 0s65 29.101 65 65-29.101 65-65 65z"],CLEAR:["M65 130c-35.899 0-65-29.101-65-65S29.101 0 65 0s65 29.101 65 65-29.101 65-65 65zm9.692-65L90.83 48.863a6.846 6.846 0 0 0 .017-9.71c-2.696-2.695-7.024-2.668-9.71.017L65 55.308 48.863 39.17a6.846 6.846 0 0 0-9.71-.017c-2.695 2.696-2.668 7.024.017 9.71L55.308 65 39.17 81.137a6.846 6.846 0 0 0-.017 9.71c2.696 2.695 7.024 2.668 9.71-.017L65 74.692 81.137 90.83a6.846 6.846 0 0 0 9.71.017c2.695-2.696 2.668-7.024-.017-9.71L74.692 65z"],SUCCESS_NO_CIRCLE:["M112.132 0H130L47.227 88.884 0 39.118h20.92a1 1 0 0 1 .704.29l25.603 25.418L111.423.295a1 1 0 0 1 .709-.295z"],DOWNLOAD:["M65 11.818c-29.325 0-53.182 23.857-53.182 53.182 0 29.325 23.857 53.182 53.182 53.182 29.325 0 53.182-23.857 53.182-53.182 0-29.325-23.857-53.182-53.182-53.182M65 130c-35.84 0-65-29.16-65-65S29.16 0 65 0s65 29.16 65 65-29.16 65-65 65","M59.728 75.224V35.909h11.819v39.315h13.212L65.335 94.649 45.909 75.224z"],CANCEL:["M65 130c-35.899 0-65-29.101-65-65S29.101 0 65 0s65 29.101 65 65-29.101 65-65 65zm19.446-89.77L64.76 59.919l-19.432-19.43-4.896 4.896 19.431 19.43-19.631 19.632 4.896 4.896L64.76 69.711l19.887 19.888 4.897-4.896-19.888-19.888 19.687-19.688-4.896-4.896z"],SEARCH:["M130 118.53l-11.364 11.468-31.138-31.32c-9.168 7.066-20.583 11.308-33.005 11.308C24.398 109.986 0 85.364 0 54.993 0 24.623 24.398 0 54.493 0c30.094 0 54.491 24.62 54.491 54.992 0 11.977-3.835 23.028-10.277 32.056L130 118.53zM54.493 13.334c-22.801 0-41.285 18.65-41.285 41.658 0 23.009 18.483 41.661 41.285 41.661 22.796 0 41.279-18.652 41.279-41.66 0-23.01-18.483-41.66-41.279-41.66z"]},this.type="",this.size=23,this.color="#1890ff",this.paths=[]}static get styles(){return(0,e.css)`
      .icon {
        width: 30px;
        height: 30px;
      }

      .a-icon-warn {
        fill: #e8a010;
      }
    `}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.renderSvgIcon()},0)}renderSvgIcon(){if(this.type&&this.ICON_TYPE[this.type.toUpperCase()]){const a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttribute("xmlns","http://www.w3.org/2000/svg"),a.setAttribute("viewBox","0 0 130 130"),a.setAttribute("class","icon"),a.setAttribute("style",`width: ${this.size}; height: ${this.size}`),a.setAttribute("p-id","27107"),a.setAttribute("version","1.1"),a.setAttribute("width","130"),a.setAttribute("height","130"),this.shadowRoot.appendChild(a),this.ICON_TYPE[this.type.toUpperCase()].forEach(n=>{const c=document.createElementNS("http://www.w3.org/2000/svg","path");c.setAttribute("fill",`${this.color}`),c.setAttribute("fill-rule","evenodd"),c.setAttribute("d",n),a.appendChild(c)})}}attributeChangedCallback(a,n,c){super.attributeChangedCallback(a,n,c)}disconnectedCallback(){super.disconnectedCallback()}render(){return(0,e.html)``}}o.__decorate([(0,e.property)({type:String})],s.prototype,"type",void 0),o.__decorate([(0,e.property)({type:Number})],s.prototype,"size",void 0),o.__decorate([(0,e.property)({type:String})],s.prototype,"color",void 0),o.__decorate([(0,e.property)({type:Array})],s.prototype,"paths",void 0),t.default=s},ywxX:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=i("2GZr"),e=i("1jGT"),r=i("+d1X"),s=i("WItb");class l extends s.BaseElement{constructor(){super(...arguments),this["open-type"]="navigate",this.handleTap=()=>{const n=this.url;switch(this["open-type"]){case"navigate":{r.my.navigateTo({url:n});break}case"redirect":{r.my.redirectTo({url:n});break}case"switchTab":{r.my.switchTab({url:n});break}case"navigateBack":{r.my.navigateBack();break}case"reLaunch":{r.my.reLaunch({url:n});break}}}}static get styles(){return(0,e.css)`
      :host {
        display: block;
      }
    `}connectedCallback(){super.connectedCallback(),this.addEventListener("tap",this.handleTap,{passive:!0})}render(){return(0,e.html)` <slot></slot> `}}o.__decorate([(0,e.property)({type:String})],l.prototype,"open-type",void 0),o.__decorate([(0,e.property)({type:String})],l.prototype,"url",void 0),t.default=l},BX1m:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=i("2GZr"),e=i("1jGT"),r=i("A/F/"),s=i("li9Z"),l=i("WItb"),a=i("vkip");class n extends l.BaseElement{constructor(){super(),this.badgeStyle=null,this.dotStyle=null,this.key=null,this.isSelected=!1,this.text="",this.icon="",this.badgeText="",this.showRedDot="",this.textColor="",this.disableSafeAreaPadding=!1,this.badgeStyle={position:"absolute",top:"-2px",right:"-13px"},this.dotStyle={position:"absolute",top:"0",right:"-6px"}}static get styles(){return(0,e.css)`
      :host {
        display: block;
        flex: 1;
        padding-top: 8px;
        padding-left: 0;
        padding-right: 0;
        font-size: 0;
        color: rgba(0, 0, 0, 0.5);
        text-align: center;
      }

      :host:first-child {
        padding-left: env(safe-area-inset-left);
      }

      .tiga-tabbar__item__active .tiga-tabbar__label {
        color: #49a9ee;
      }

      .tiga-tabbar__icon {
        display: inline-block;
        width: 28px;
        height: 28px;
        margin-bottom: 2px;
      }

      .tiga-badge {
        display: inline-block;
        padding: 0.15em 0.4em;
        min-width: 8px;
        border-radius: 18px;
        background-color: #fa5151;
        color: #fff;
        line-height: 1.2;
        text-align: center;
        font-size: 12px;
        vertical-align: middle;
      }

      .tiga-badge_dot {
        padding: 0.4em;
        min-width: 0;
      }

      .tiga-tabbar__label {
        color: rgba(0, 0, 0, 0.9);
        font-size: 10px;
        line-height: 1.4;
      }

      p {
        padding: 0;
        margin: 0;
      }
    `}handleClick(){const u=new CustomEvent("onSelect",{detail:{value:this.key},bubbles:!0});this.dispatchEvent(u)}render(){const u={"tiga-tabbar__item":!0,"tiga-tabbar__item__active":this.isSelected},d=this.disableSafeAreaPadding?"padding-bottom: 8px;":`padding-bottom: calc(8px + constant(safe-area-inset-bottom));
      padding-bottom: calc(8px + env(safe-area-inset-bottom));`;return(0,e.html)`
      <style>
        :host{
          ${d};
        }
      </style>
      <div
        key="${this.key}"
        class=${(0,r.classMap)(u)}
        @click="${this.handleClick}"
      >
        <div
          style=${(0,s.styleMap)({display:"inline-block",position:"relative"})}
        >
          <img src="${this.icon}" alt="" class="tiga-tabbar__icon" />
          ${this.badgeText?(0,e.html)` <span class="tiga-badge" style=${(0,s.styleMap)(this.badgeStyle)}>
                ${this.badgeText}
              </span>`:null}
          ${this.showRedDot?(0,e.html)` <span
                class="tiga-badge tiga-badge_dot"
                style=${(0,s.styleMap)(this.dotStyle)}
              />`:null}
        </div>
        <p
          class="tiga-tabbar__label"
          style=${(0,s.styleMap)({color:this.textColor||""})}
        >
          ${this.text}
        </p>
      </div>
    `}}o.__decorate([(0,e.property)()],n.prototype,"key",void 0),o.__decorate([(0,e.property)({type:Boolean})],n.prototype,"isSelected",void 0),o.__decorate([(0,e.property)()],n.prototype,"text",void 0),o.__decorate([(0,e.property)()],n.prototype,"icon",void 0),o.__decorate([(0,e.property)()],n.prototype,"badgeText",void 0),o.__decorate([(0,e.property)()],n.prototype,"showRedDot",void 0),o.__decorate([(0,e.property)()],n.prototype,"textColor",void 0),o.__decorate([(0,e.property)()],n.prototype,"disableSafeAreaPadding",void 0),t.default=n,(0,a.defineElement)("tiga-tabbar-item",n)},QpIP:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Tabbar=void 0;const o=i("2GZr"),e=i("1jGT"),r=o.__importDefault(i("BjK/")),s=i("+d1X"),l=i("WItb"),a=i("vkip"),n={SHOW:0,HIDE:1};class c extends l.BaseElement{constructor(){super(...arguments),this.selectedIndex=-1,this.tabBarList=[],this.status=n.SHOW,this.homePage="",this.customRoutes=[],this.disableSafeAreaPadding=!1,this.addLeadingSlash=d=>d[0]==="/"?d:`/${d}`,this.routerChangeHandler=()=>{const d=this.getCurrentPagePath();this.selectedIndex=this.getSelectedIndex(d)},this.hideTabBarHandler=()=>{this.status=n.HIDE},this.showTabBarHandler=()=>{this.status=n.SHOW},this.showTabBarRedDotHandler=d=>{const{index:p}=d.detail;this.tabBarList[p].showRedDot=!0,this.tabBarList[p].badgeText="",this.tabBarList=[...this.tabBarList]},this.hideTabBarRedDotHandler=d=>{this.tabBarList[d.detail.index].showRedDot=!1,this.tabBarList=[...this.tabBarList]},this.setTabBarBadgeHandler=d=>{const{index:p,text:h}=d.detail;this.tabBarList[p].badgeText=h,this.tabBarList[p].showRedDot=!1,this.tabBarList=[...this.tabBarList]},this.removeTabBarBadgeHandler=d=>{const{index:p}=d.detail;this.tabBarList[p].badgeText="",this.tabBarList=[...this.tabBarList]},this.setTabBarItemHandler=d=>{const{index:p,text:h,iconPath:g,selectedIconPath:m}=d.detail;this.tabBarList[p]={index:p,name:h,icon:g,activeIcon:m},this.tabBarList=[...this.tabBarList]},this.setTabBarStyleHandler=d=>{this.conf=Object.assign(Object.assign({},this.conf),d.detail)},this.hasBasename=(d,p)=>new RegExp("^"+p+"(\\/|\\?|#|$)","i").test(d),this.stripBasename=(d,p)=>(this.hasBasename(d,p)?d.substr(p.length):d)||"/",this.getOriginUrl=d=>{const p=this.customRoutes.filter(([h,g])=>d===h||d===g);return p.length?p[0][0]:d==="/"?this.addLeadingSlash(this.conf.homePage):d},this.getTabQuery=()=>(location.hash||location.search).split("?")[1],this.switchTab=d=>{if(this.selectedIndex===d.detail.value)return;this.selectedIndex=d.detail.value;let p=this.tabBarList[this.selectedIndex].pagePath;const h=this.getTabQuery();h&&(p=`${p}?${h}`),s.my===null||s.my===void 0||s.my.switchTab({url:p})}}static get styles(){return(0,e.css)`
      .tiga-tabbar {
        display: flex;
        position: relative;
        z-index: 500;
        background-color: #f7f7f7;
      }

      .tiga-tabbar::before {
        content: ' ';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 1px;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        color: rgba(0, 0, 0, 0.1);
        transform-origin: 0 0;
        transform: scaleY(0.5);
      }
    `}connectedCallback(){if(super.connectedCallback(),this.conf&&this.conf.disableSafeAreaPaddingUARegex)try{const{userAgent:d}=navigator,{disableSafeAreaPaddingUARegex:p}=this.conf,h=g=>new RegExp(g,"gi").test(d);typeof p=="string"?this.disableSafeAreaPadding=h(p):Array.isArray(p)&&(this.disableSafeAreaPadding=p.some(g=>h(g)))}catch(d){}if(this.conf){const d=(0,r.default)(window.$MOR_APP_CONFIG,"updateTabBarConfig");if(typeof d=="function"){const p=(0,a.getQueryParams)(location.search),h=d(this.conf.items||[],p);Array.isArray(h)&&(this.conf.items=h)}}}firstUpdated(){this.tabBarList=this.conf.items.map(d=>(d.pagePath=this.addLeadingSlash(d.pagePath),d)),this.filterCustomRoutes(),this.bindEvent(),this.routerChangeHandler()}filterCustomRoutes(){const d=this.conf.customRoutes;for(const p in d)this.customRoutes.push([this.addLeadingSlash(p),d[p]])}bindEvent(){window.addEventListener("__tigaHideTabBar",this.hideTabBarHandler,!1),window.addEventListener("__tigaShowTabBar",this.showTabBarHandler,!1),window.addEventListener("__tigaShowTabBarRedDot",this.showTabBarRedDotHandler,!1),window.addEventListener("__tigaHideTabBarRedDot",this.hideTabBarRedDotHandler,!1),window.addEventListener("__tigaSetTabBarBadge",this.setTabBarBadgeHandler,!1),window.addEventListener("__tigaRemoveTabBarBadge",this.removeTabBarBadgeHandler,!1),window.addEventListener("__tigaSetTabBarItem",this.setTabBarItemHandler,!1),window.addEventListener("__tigaSetTabBarStyle",this.setTabBarStyleHandler,!1),window.__history.listen(this.routerChangeHandler)}getSelectedIndex(d){return this.tabBarList.findIndex(p=>p.pagePath===d)}getCurrentPagePath(){let d;return this.conf.mode==="hash"?d=(window.location.hash||"#/").substr(1).split("?")[0]:d=location.pathname,this.getOriginUrl(this.stripBasename(d,this.conf.baseName))}render(){const d=this.selectedIndex===-1||this.status===n.HIDE;if(!(this.tabBarList.length<=0))return(0,e.html)`
      <style>
        .tiga-tabbar {
          background-color: ${this.conf.backgroundColor} !important;
          display: ${d?"none":"flex"} !important;
        }
      </style>

      <div class="tiga-tabbar">
        ${this.tabBarList.map((p,h)=>{const g=this.selectedIndex===h,m=g?this.conf.selectedColor:this.conf.color,w=g?p.activeIcon:p.icon;return(0,e.html)` <tiga-tabbar-item
            .text="${p.name}"
            .textColor="${m}"
            .key="${h}"
            .icon="${w}"
            .disableSafeAreaPadding="${this.disableSafeAreaPadding}"
            .isSelected="${g}"
            .showRedDot="${p.showRedDot}"
            .badgeText="${p.badgeText}"
            @onSelect="${this.switchTab}"
          />`})}
      </div>
    `}}o.__decorate([(0,e.property)({type:Object})],c.prototype,"conf",void 0),o.__decorate([(0,e.internalProperty)()],c.prototype,"selectedIndex",void 0),o.__decorate([(0,e.internalProperty)()],c.prototype,"tabBarList",void 0),o.__decorate([(0,e.internalProperty)()],c.prototype,"status",void 0),o.__decorate([(0,e.internalProperty)()],c.prototype,"homePage",void 0),o.__decorate([(0,e.internalProperty)()],c.prototype,"customRoutes",void 0),o.__decorate([(0,e.internalProperty)()],c.prototype,"disableSafeAreaPadding",void 0),t.Tabbar=c,(0,a.defineElement)("tiga-tabbar",c)},W1hp:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=i("2GZr"),e=i("1jGT"),r=i("WItb");class s extends r.BaseElement{constructor(){super(...arguments),this["number-of-lines"]=0,this.selectable=!1}static get styles(){return(0,e.css)`
      :host {
        display: inline;
        white-space: pre-line;
        /* autoprefixer: ignore next */
        -webkit-box-orient: vertical;
      }
    `}attributeChangedCallback(a,n,c){super.attributeChangedCallback(a,n,c),a==="number-of-lines"?this.numberOfLinesChanged():a==="selectable"&&this.selectableChanged()}connectedCallback(){super.connectedCallback(),this.selectableChanged(),this.numberOfLinesChanged()}numberOfLinesChanged(){const a=this["number-of-lines"];a>0?(this.style.setProperty("overflow","hidden"),this.style.setProperty("text-overflow","ellipsis"),this.style.setProperty("-webkit-line-clamp",String(a)),this.style.setProperty("display","-webkit-box")):(this.style.removeProperty("overflow"),this.style.removeProperty("text-overflow"),this.style.removeProperty("-webkit-line-clamp"),this.style.removeProperty("display"))}selectableChanged(){this.selectable?this.style.setProperty("user-select","text"):this.style.setProperty("user-select","none")}render(){const a=(0,e.css)`
      text-decoration: inherit;
    `;return(0,e.html)`<span style="${a}"><slot style="${a}"></slot></span>`}}o.__decorate([(0,e.property)({type:Number})],s.prototype,"number-of-lines",void 0),o.__decorate([(0,e.property)({type:Boolean})],s.prototype,"selectable",void 0),t.default=s},WItb:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BaseElement=void 0;const o=i("2GZr"),e=i("1jGT"),r=i("vs3i"),s=i("vkip"),l=i("mBTx"),a=o.__importDefault(i("aYl2")),n=500;class c extends e.LitElement{constructor(){super(),this.eventListenerMap=new Map,this.longTimeId=null,this.blurOnClick=!0,this.enableHover=!1,this.disabled=!1,this["hover-class"]="",this.tigaFocus=!1,this.mobileTouchEventCache=new Map,this.canHandleTap=!1,this._handleClickedStart=d=>{d.target===d.currentTarget&&(this.startTouch=d.touches[0],this.moveTouch=void 0,this.canHandleTap=!0,this.longTimeId=setTimeout(()=>{this.riaseTapEvent(!0),this.longTimeId=null},n))},this._handleClickedMove=d=>{d.target===d.currentTarget&&(this.moveTouch=d.touches[0])},this._handleClickedEnd=d=>{d.target===d.currentTarget&&this.riaseTapEvent(!1),this.longTimeId&&(clearTimeout(this.longTimeId),this.longTimeId=null)},this.hoverTouchStartHandler=this._onTouchStart.bind(this),this.hoverTouchEndHandler=this._onTouchEnd.bind(this)}attributeChangedCallback(d,p,h){d===l.KEY_ANIMATION&&p!==h&&(0,l.autoRun)(()=>(0,l.parseAnimation2Style)(h,this),g=>{this.setAttribute("style",g)}),super.attributeChangedCallback(d,p,h),d==="tigafocus"&&h==="true"&&requestAnimationFrame(()=>this.focus())}handleTouchEvent(d,p){p instanceof TouchEvent&&(p.other={touches:p.touches,changedTouches:p.changedTouches},d==="touchend"&&((0,s.addFocusToInputTypeElement)(p.target),p.preventDefault()))}handleTouchEventMobile(d){d instanceof TouchEvent&&(d.other={touches:d.touches,changedTouches:d.changedTouches})}handleMouseEvent(d,p){if(p instanceof MouseEvent){switch(d){case"touchmove":case"touchstart":{if(p.buttons!==1||!this.contains(p.target))return;break}}p.stopImmediatePropagation();const h=[{pageX:p.pageX,pageY:p.pageY,clientX:p.clientX,clientY:p.clientY}];this.dispatchEvent(new r.TiGaEvent(d,{bubbles:!0,composed:!1,other:{touches:h,changedTouches:h}}))}}addEventListener(d,p,h){if((0,s.isMobile)())switch(d){case"touchmove":case"touchend":case"touchstart":{const g=this.mobileTouchEventCache.get(p)||{};if(!g[d]){g[d]=!0,this.mobileTouchEventCache.set(p,g);const m=this.mergeFunc(this.handleTouchEventMobile,p);this.eventListenerMap.set(d,m),super.addEventListener(d,m)}return}}switch(d){case"touchstart":{const g=this.mergeFunc(this.handleTouchEvent.bind(this,"touchstart"),p),m=this.handleMouseEvent.bind(this,"touchstart");this.eventListenerMap.set(d,g),this.eventListenerMap.set("mousedown",m),super.addEventListener(d,g),super.addEventListener("mousedown",m);break}case"touchmove":{const g=this.mergeFunc(this.handleTouchEvent.bind(this,"touchmove"),p),m=this.handleMouseEvent.bind(this,"touchmove");this.eventListenerMap.set(d,g),this.eventListenerMap.set("mousemove",m),super.addEventListener(d,g),super.addEventListener("mousemove",m);break}case"touchend":{const g=this.mergeFunc(this.handleTouchEvent.bind(this,"touchend"),p),m=this.handleMouseEvent.bind(this,"touchend");this.eventListenerMap.set(d,g),this.eventListenerMap.set("mouseup",m),super.addEventListener(d,g),super.addEventListener("mouseup",m);break}default:{this.eventListenerMap.set(d,p),super.addEventListener(d,p,h);break}}}mergeFunc(d,p){return function(...h){typeof d=="function"&&d(...h),typeof p=="function"&&p(...h)}}connectedCallback(){super.connectedCallback(),this.enableHover&&(super.addEventListener("touchstart",this.hoverTouchStartHandler),super.addEventListener("touchend",this.hoverTouchEndHandler)),this.addEventListener("touchstart",this._handleClickedStart),this.addEventListener("touchmove",this._handleClickedMove),this.addEventListener("touchend",this._handleClickedEnd)}disconnectedCallback(){super.disconnectedCallback(),this.eventListenerMap.clear()}riaseTapEvent(d){if(this.canHandleTap){if(this.canHandleTap=!1,this.moveTouch){const p=this.moveTouch.clientX-this.startTouch.clientX,h=this.moveTouch.clientY-this.startTouch.clientY;if(Math.sqrt(Math.pow(p,2)+Math.pow(h,2))>5)return}if(this.disabled)return;this.blurOnClick&&document.activeElement.blur(),d?this.dispatchEvent(new r.TiGaEvent("longtap",{detail:{},bubbles:!0,composed:!1})):this.dispatchEvent(new r.TiGaEvent("tap",{detail:{},bubbles:!0,composed:!1}))}}_onTouchStart(){this.disabled||this.onHoverIn()}_onTouchEnd(){this.disabled||this.onHoverOut()}onHoverIn(){this.setAttribute("isHover","true");const d=this["hover-class"];d&&d.split(" ").forEach(p=>{p&&this.classList.add(p)})}onHoverOut(){this.removeAttribute("isHover");const d=this["hover-class"];d&&d.split(" ").forEach(p=>{p&&this.classList.remove(p)})}}o.__decorate([(0,e.property)({converter:a.default})],c.prototype,"disabled",void 0),o.__decorate([(0,e.property)({type:String})],c.prototype,"hover-class",void 0),o.__decorate([(0,e.property)({type:Object,attribute:l.KEY_ANIMATION})],c.prototype,"customAnimation",void 0),o.__decorate([(0,e.property)({type:a.default})],c.prototype,"tigaFocus",void 0),t.BaseElement=c},Lmn2:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=i("2GZr"),e=i("1jGT"),r=i("+d1X"),s=i("WItb"),l=i("H+p6"),a=o.__importDefault(i("aYl2"));class n extends s.BaseElement{constructor(){super(...arguments),this.enableHover=!0,this.loading=!1,this.onClicked=()=>{if(this.getFormType()){const u=this.getForm();if(u)switch(this.getFormType()){case"submit":{u.submit();break}case"reset":{u.reset();break}}}if(this["open-type"])switch(this["open-type"]){case"getAuthorize":{r.my.getAuthCode({success:()=>{this.dispatchEvent(new CustomEvent("getauthorize"))},fail:()=>{this.dispatchEvent(new CustomEvent("error",{detail:{}}))}});break}}}}static get styles(){return(0,e.css)`
      :host {
        display: block;
        box-sizing: border-box;
        padding: 0;
        text-align: center;
        font-size: ${(0,e.unsafeCSS)((0,l.rpxToRem)(36))};
        height: ${(0,e.unsafeCSS)((0,l.rpxToRem)(94))};
        line-height: ${(0,e.unsafeCSS)((0,l.rpxToRem)(94))};
        border-radius: ${(0,e.unsafeCSS)((0,l.rpxToRem)(4))};
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-word;
        white-space: nowrap;
        color: #000;
        background-color: #fff;
        border: 1px solid #eee;
      }

      :host([disabled='true']) {
        color: rgba(0, 0, 0, 0.6);
        background-color: rgba(255, 255, 255, 0.6);
      }

      :host([isHover='true']) {
        color: rgba(0, 0, 0, 0.3);
        background-color: #ddd;
      }

      /* primary */
      :host([type='primary']) {
        color: #fff;
        background-color: #108ee9;
        border-color: #108ee9;
      }

      :host([type='primary'][disabled='true']) {
        color: rgba(255, 255, 255, 0.6);
        background-color: #9fd2f6;
        border: 0;
      }

      :host([type='primary'][isHover='true']) {
        color: rgba(255, 255, 255, 0.3);
        background-color: #0b71ba;
      }

      /* ghost */
      :host([type='ghost']) {
        color: #108ee9;
        background-color: transparent;
        border-color: #108ee9;
      }
      :host([type='ghost'][disabled='true']) {
        color: #ccc;
        background-color: #ddd;
        border: 0;
      }

      :host([type='ghost'][isHover='true']) {
        color: #fff;
        background-color: #0b71ba;
      }

      /* warn */
      :host([type='warn']) {
        color: #fff;
        background-color: #e94f4f;
        border-color: #e94f4f;
      }
      :host([type='warn'][disabled='true']) {
        color: rgba(255, 255, 255, 0.6);
        background-color: rgba(233, 79, 79, 0.4);
        border-width: 0;
      }

      :host([type='warn'][isHover='true']) {
        color: rgba(255, 255, 255, 0.3);
        background-color: #ea3c3c;
      }

      /* size 相关 */
      :host([size='mini']) {
        display: inline-block;
        font-size: ${(0,e.unsafeCSS)((0,l.rpxToRem)(28))};
        min-width: ${(0,e.unsafeCSS)((0,l.rpxToRem)(96))};
        height: ${(0,e.unsafeCSS)((0,l.rpxToRem)(52))};
        line-height: ${(0,e.unsafeCSS)((0,l.rpxToRem)(48))};
        padding: 0 ${(0,e.unsafeCSS)((0,l.rpxToRem)(8))};
      }

      /* loading 相关 */
      .loading {
        display: inline-block;
        width: 0.5em;
        height: 0.5em;
        color: inherit;
        pointer-events: none;
        border: 0.1em solid currentcolor;
        border-bottom-color: transparent;
        border-radius: 50%;
        -webkit-animation: 1s loading linear infinite;
        animation: 1s loading linear infinite;
      }
      @-webkit-keyframes loading {
        0% {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
      @keyframes loading {
        0% {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
    `}getFormType(){return this["form-type"]||this.formtype}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.onClicked,!1)}getForm(){const u=document.querySelectorAll("tiga-form");for(const d of u)if(d.contains(this))return d;return null}render(){return(0,e.html)`
      ${this.loading?(0,e.html)`<div class="loading"></div>`:void 0}
      <slot></slot>
    `}}o.__decorate([(0,e.property)({converter:a.default})],n.prototype,"loading",void 0),o.__decorate([(0,e.property)({type:String})],n.prototype,"form-type",void 0),o.__decorate([(0,e.property)({type:String})],n.prototype,"formtype",void 0),o.__decorate([(0,e.property)({type:String})],n.prototype,"open-type",void 0),t.default=n},"u2U+":function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=i("2GZr"),e=i("1jGT"),r=i("WItb"),s=i("H+p6"),l=i("vkip"),a=o.__importDefault(i("aYl2"));class n extends r.BaseElement{constructor(){super(...arguments),this.blurOnClick=!1,this.syncTimeId=null,this.composition=!1,this.controlled=!1,this._value=void 0,this["is-focus"]=!1,this.maxlength=140,this.type="text",this.password=!1,this["placeholder-style"]="",this["selection-start"]=-1,this["selection-end"]=-1,this["keydown-bubbles"]=!1,this.onBlur=u=>{u instanceof FocusEvent&&(u.stopImmediatePropagation(),this.dispatchEvent(new CustomEvent("blur",{detail:{value:this.inputElement.value}})))},this.onFocus=u=>{u instanceof FocusEvent&&(u.stopImmediatePropagation(),this.dispatchEvent(new CustomEvent("focus",{detail:{value:this.inputElement.value}})))}}static get styles(){return(0,e.css)`
      :host {
        display: inline-block;
        background-color: #fff;
        padding: ${(0,e.unsafeCSS)((0,s.rpxToRem)(4))} ${(0,e.unsafeCSS)((0,s.rpxToRem)(10))};
        color: #000;
        font-size: ${(0,e.unsafeCSS)((0,s.rpxToRem)(34))};
        height: ${(0,e.unsafeCSS)((0,s.rpxToRem)(50))};
        box-sizing: content-box;
      }

      input {
        border: 0;
        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;
        background: 0 0;
        display: inherit;
        padding: 0;
        margin: 0;
        outline: 0;
        vertical-align: middle;
        text-overflow: inherit;
        -webkit-tap-highlight-color: transparent;
        position: relative;
        color: inherit;
        overflow: inherit;
        white-space: inherit;
        text-align: inherit;
        width: 100%;
        height: 100%;
      }

      input:disabled {
        opacity: 0.4;
      }
    `}static get properties(){return{value:{type:String}}}get value(){return this._value}set value(u){const d=this._value;this._value=u,requestAnimationFrame(()=>{this.requestUpdate("value",d)})}get placeholderStyle(){return`
    ::-webkit-input-placeholder {${this["placeholder-style"]}}
    ::-moz-placeholder {${this["placeholder-style"]}}
    ::-ms-input-placeholder {${this["placeholder-style"]}}
    ::placeholder {${this["placeholder-style"]}}
    `}reset(){this.value=""}attributeChangedCallback(u,d,p){super.attributeChangedCallback(u,d,p),this.inputElement&&(u==="focus"&&p==="true"&&this.inputElement.focus(),(u==="selection-start"||u==="selection-end")&&!isNaN(Number(p))&&this.setSelectionRange())}_inputHandler(u){if(u.stopPropagation(),this._checkNumberInputMaxLength())return;const d=this.inputElement.value;this.controlled&&this.syncValueToInput();const p=new CustomEvent("input",{detail:{value:d,keyCode:u.data},bubbles:!0});this.dispatchEvent(p)}_handleInput(u){this.composition||this._inputHandler(u)}_handleCompositionEnd(u){(0,l.isIos)()&&(this.composition=!1,this._inputHandler(u))}_handleCompositionStart(u){(0,l.isIos)()&&(this.composition=!0)}syncValueToInput(u=!1){const d=()=>{this.inputElement.value!==this.value&&(this.inputElement.value=this.value)};if(u)return void d();this.syncTimeId&&(clearTimeout(this.syncTimeId),this.syncTimeId=null),this.syncTimeId=setTimeout(()=>{d(),this.syncTimeId=null},500)}_checkNumberInputMaxLength(){const u="number",{value:d}=this.inputElement;return this.type===u&&d.length>this.maxlength?(this.value=d.slice(0,this.maxlength),this.syncValueToInput(!0),!0):!1}_handleKeyDown(u){if(this["keydown-bubbles"]||u.stopPropagation(),u.keyCode===13){const d=new CustomEvent("confirm",{detail:{value:this.inputElement.value},bubbles:!0});this.dispatchEvent(d)}}connectedCallback(){super.connectedCallback(),this["is-focus"]&&requestAnimationFrame(()=>{this.inputElement&&this.inputElement.focus()}),requestAnimationFrame(()=>this.setSelectionRange()),this.addEventListener("blur",this.onBlur),this.addEventListener("focus",this.onFocus)}setSelectionRange(){!this.inputElement||this.type==="number"||this["selection-start"]===-1&&this["selection-end"]===-1||(this.inputElement.selectionStart=this["selection-start"],this.inputElement.selectionEnd=this["selection-end"])}render(){return(0,e.html)`
      <style>
        ${this.placeholderStyle}
      </style>
      <input
        placeholder="${this.placeholder||""}"
        ?disabled="${this.disabled}"
        type="${this.password?"password":this.type}"
        .value="${this.value||""}"
        @input="${this._handleInput}"
        @compositionend="${this._handleCompositionEnd}"
        @compositionstart="${this._handleCompositionStart}"
        @keydown="${this._handleKeyDown}"
        maxlength="${this.maxlength}"
      />
    `}}o.__decorate([(0,e.property)({type:String})],n.prototype,"placeholder",void 0),o.__decorate([(0,e.property)({type:Boolean})],n.prototype,"controlled",void 0),o.__decorate([(0,e.property)({converter:a.default,attribute:"focus"})],n.prototype,"is-focus",void 0),o.__decorate([(0,e.property)({type:Number})],n.prototype,"maxlength",void 0),o.__decorate([(0,e.property)({type:String})],n.prototype,"type",void 0),o.__decorate([(0,e.property)({converter:a.default})],n.prototype,"password",void 0),o.__decorate([(0,e.property)({type:String})],n.prototype,"placeholder-style",void 0),o.__decorate([(0,e.property)({type:Number})],n.prototype,"selection-start",void 0),o.__decorate([(0,e.property)({type:Number})],n.prototype,"selection-end",void 0),o.__decorate([(0,e.property)({converter:a.default})],n.prototype,"keydown-bubbles",void 0),o.__decorate([(0,e.query)("input")],n.prototype,"inputElement",void 0),o.__decorate([(0,e.property)({})],n.prototype,"onConfirm",void 0),t.default=n},"2Jpt":function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=i("2GZr"),e=i("1jGT"),r=i("WItb");class s extends r.BaseElement{constructor(){super(),this.for=""}static get styles(){return(0,e.css)`
      :host {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
    `}connectedCallback(){super.connectedCallback()}attributeChangedCallback(a,n,c){super.attributeChangedCallback(a,n,c)}disconnectedCallback(){super.disconnectedCallback()}render(){return(0,e.html)` <slot></slot> `}}o.__decorate([(0,e.property)({type:String})],s.prototype,"for",void 0),t.default=s},HRO2:function(y,t,i){"use strict";var o;o={value:!0};const r=i("2GZr").__importDefault(i("Lmn2"));(0,i("vkip").defineElement)("tiga-button",r.default)},"ou6+":function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const e=i("2GZr").__importDefault(i("th0L"));(0,i("vkip").defineElement)("tiga-icon",e.default)},"2pVW":function(y,t,i){"use strict";var o;o={value:!0};const r=i("2GZr").__importDefault(i("RoWP"));(0,i("vkip").defineElement)("tiga-image",r.default)},RAy4:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const e=i("2GZr").__importDefault(i("u2U+"));(0,i("vkip").defineElement)("tiga-input",e.default)},U7Od:function(y,t,i){"use strict";var o;o={value:!0};const r=i("2GZr").__importDefault(i("2Jpt"));(0,i("vkip").defineElement)("tiga-label",r.default)},ZtOd:function(y,t,i){"use strict";var o;o={value:!0};const r=i("2GZr").__importDefault(i("ywxX"));(0,i("vkip").defineElement)("tiga-navigator",r.default)},KbjF:function(y,t,i){"use strict";var o;o={value:!0};const e=i("2GZr"),r=i("vkip"),s=e.__importDefault(i("LHxG"));(0,r.defineElement)("tiga-scroll-view",s.default)},dSFM:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=i("2GZr"),e=i("vkip"),r=o.__importDefault(i("JfAs"));(0,e.defineElement)("tiga-swiper-item",r.default)},"p+16":function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=i("2GZr"),e=i("vkip"),r=o.__importDefault(i("+XWL"));(0,e.defineElement)("tiga-swiper",r.default)},hmPl:function(y,t,i){"use strict";var o;o={value:!0};const r=i("2GZr").__importDefault(i("W1hp"));(0,i("vkip").defineElement)("tiga-text",r.default)},aMrw:function(y,t,i){"use strict";var o;o={value:!0};const e=i("2GZr"),r=i("vkip"),s=e.__importDefault(i("pfqw"));(0,r.defineElement)("tiga-view",s.default)},D0fA:function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.outDocument=t.isElementVisible=void 0;const i=e=>{const r=e.getBoundingClientRect(),s=window.innerWidth||document.documentElement.clientWidth,l=window.innerHeight||document.documentElement.clientHeight;return!(r.right<0||r.bottom<0||r.left>s||r.top>l)};t.isElementVisible=i;const o=(e,r=4)=>{if(r<=0||!e)return!1;const{position:s}=window.getComputedStyle(e),l=s==="fixed"||s==="absolute";return l||(0,t.outDocument)(e.parentNode,r-1)};t.outDocument=o},RoWP:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=i("2GZr"),e=i("1jGT"),r=i("+d1X"),s=o.__importDefault(i("CEDg")),l=i("WItb"),a=i("H+p6"),n=o.__importDefault(i("aYl2")),c=i("tnM9"),u=i("D0fA"),d=o.__importDefault(i("NPsE"));let p=null;const h={NO_LOAD:0,SUCCESS:1,ERROR:2},m=((r.my===null||r.my===void 0?void 0:r.my.createIntersectionObserver)||s.default.createIntersectionObserver)().relativeToViewport();class w extends l.BaseElement{constructor(){super(...arguments),this.mode="scaleToFill",this.cssText="",this.state=h.NO_LOAD,this["lazy-load"]=!1,this["default-source"]="",this["drag-able"]="auto",this._isLazyLoad=!1}static get styles(){return(0,e.css)`
      :host {
        background-repeat: no-repeat;
        display: inline-block;
        overflow: hidden;
        font-size: 0;
        padding: 0;
        margin: 0;
        width: ${(0,e.unsafeCSS)((0,a.rpxToRem)(300*2))};
        height: ${(0,e.unsafeCSS)((0,a.rpxToRem)(225*2))};
        line-height: 0;
      }
      img[src=''],
      img:not([src]) {
        opacity: 0;
      }
    `}get isLazyLoad(){return this._isLazyLoad||(this._isLazyLoad=this["lazy-load"]),this._isLazyLoad}attributeChangedCallback(O,R,f){if(super.attributeChangedCallback(O,R,f),!!this.isConnected)switch(O){case"src":{!this.isLazyLoad||this.loadImagePromise?this.loadImage(f):this.isLazyLoad&&!R&&f&&this.lazyLoadImage();break}case"mode":{this.onModeChange(f);break}}}onModeChange(O){const R="width: 100%; height: 100%;";switch(O){case"scaleToFill":{this.cssText=R;break}case"aspectFit":{this.cssText=R,this.cssText+="object-fit:contain;object-position:center center;";break}case"aspectFill":{this.cssText=R,this.cssText+="object-fit:cover;object-position:center center;";break}case"widthFix":{this.cssText="width:100%;height:auto;",this.style.setProperty("height","auto");break}case"heightFix":{this.cssText="width:auto;height:100%;",this.style.setProperty("width","auto");break}default:{this.cssText=R,this.cssText+=`object-fit:none;object-position:${O};`;break}}}connectedCallback(){super.connectedCallback(),this.onModeChange(this.mode),this.isLazyLoad?this.lazyLoadImage():this.loadImage(this.src)}lazyLoadImage(){const O=()=>{this.loadImagePromise||this.loadImage(this.src)};requestAnimationFrame(()=>{(0,u.isElementVisible)(this)?O():(p||(p=d.default.getInstance()),p.add(this,()=>{(0,u.isElementVisible)(this)&&(O(),p.remove(this),m.unobserve(this))}))}),m.observe(this,()=>{O(),m.unobserve(this),p&&p.remove(this)})}disconnectedCallback(){super.disconnectedCallback(),this.isLazyLoad&&(p&&p.remove(this),m.unobserve(this))}loadImage(O){O!==void 0&&(this.loadImagePromise&&this.loadImagePromise.cancel(),this.loadImagePromise=(0,c.makeCancelPromise)(new Promise((R,f)=>{if(O){const v=new Image;v.src=O,v.onload=()=>{R(v)},v.onerror=P=>{f(P)}}else f("\u65E0\u6548\u5730\u5740")})),this.loadImagePromise.then(R=>{this.imageLoadSuccess(R),this.state=h.SUCCESS}).catch(R=>{(0,c.isCancel)(R)||(this.imageLoadFail(),this.state=h.ERROR)}))}imageLoadSuccess(O){this.dispatchEvent(new CustomEvent("load",{detail:{width:O.width,height:O.height},bubbles:!1}))}imageLoadFail(){this.dispatchEvent(new CustomEvent("error",{detail:{errMsg:"\u56FE\u7247\u52A0\u8F7D\u5931\u8D25"},bubbles:!1}))}render(){return this.state===h.NO_LOAD?this["default-source"]?(0,e.html)`<img
            src="${this["default-source"]}"
            style="${this.cssText}"
            draggable=${this["drag-able"]}
          />`:"":(0,e.html)`<img
          src="${this.src}"
          style="${this.cssText}"
          draggable=${this["drag-able"]}
        />`}}o.__decorate([(0,e.property)({type:String})],w.prototype,"src",void 0),o.__decorate([(0,e.property)({type:String})],w.prototype,"mode",void 0),o.__decorate([(0,e.internalProperty)()],w.prototype,"cssText",void 0),o.__decorate([(0,e.internalProperty)()],w.prototype,"state",void 0),o.__decorate([(0,e.property)({converter:n.default})],w.prototype,"lazy-load",void 0),o.__decorate([(0,e.property)({type:String})],w.prototype,"default-source",void 0),o.__decorate([(0,e.property)({type:String})],w.prototype,"drag-able",void 0),t.default=w},NPsE:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const e=i("2GZr").__importDefault(i("yWWw"));let r=null;class s{constructor(){this.callbacks=new Map,this.listenScroll()}static getInstance(){return r||(r=new s),r}getRoot(){try{const a=document.querySelectorAll("tiga-page-host");return a[a.length-1].shadowRoot.querySelector(".content")}catch(a){return null}}listenScroll(){const a=this.getRoot();this.listener=(0,e.default)(()=>{const{callbacks:n}=this;if(!(n.size<=0))for(const[,c]of n)typeof c=="function"&&c()},132,{trailing:!0}),a.addEventListener("scroll",this.listener,{passive:!0}),a.addEventListener("touchmove",this.listener,{passive:!0})}add(a,n){this.callbacks.set(a,n)}remove(a){this.callbacks.has(a)&&this.callbacks.delete(a)}destroy(){const a=this.getRoot();this.callbacks=null,this.listener&&a.removeEventListener("scroll",this.listener,{passive:!0})}}t.default=s},aH2D:function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class i{constructor(e){this.webview=document.querySelector(`#${e}`)}postMessage(e){this.webview.sendMessage(e)}}t.default={createWebViewContext(o){return new i(o)}}},"56yk":function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DefualtPageConfig=t.ScrollEventName=t.ReachBottomEventName=t.PullDownRefreshEventName=void 0,t.PullDownRefreshEventName="pagepulldownrefresh",t.ReachBottomEventName="pagereachbottom",t.ScrollEventName="pagescroll",t.DefualtPageConfig={defaultTitle:"",transparentTitle:"none",titleImage:"",titleBarColor:void 0,backgroundColor:"#FFFFFF",backgroundImageColor:"#FFFFFF",borderBottomColor:void 0,showTitleLoading:!1,titlePenetrate:"NO"}},gdZS:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=i("2GZr"),e=i("1jGT"),r=i("+d1X"),s=i("WItb"),l=i("vkip");class a extends s.BaseElement{constructor(){super(...arguments),this.color="#FFF"}static get styles(){return(0,e.css)`
      :host {
        display: inline-block;
        width: 48px;
        height: 48px;
        pointer-events: auto;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }

      .back {
        width: 100%;
        height: 100%;
        transform-origin: center center;
        transform: rotate(-180deg) scale(0.6);
      }
    `}connectedCallback(){super.connectedCallback(),this.addEventListener("tap",this.back)}back(){const c=window.__tigaBack,u=()=>typeof r.my=="object"?r.my.navigateBack({delta:1}):history.back(),d=p=>typeof p=="object"&&typeof p.then=="function";if(typeof c!="function")return void u();try{const p=c();if(p===!0)return;if(d(p)){p.then(h=>{if(h!==!0)return u()}).catch(u);return}}catch(p){}u()}render(){return history&&history.length>0?(0,e.html)`
        <svg
          t="1618209269212"
          class="back"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1436"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="200"
          height="200"
        >
          <defs><style type="text/css"></style></defs>
          <path
            d="M359.21 159.353l4.583-5.048c8.332-8.331 21.84-8.331 30.17 0l312.44 312.44c24.994 24.994 24.994 65.516 0 90.51l-312.44 312.44c-7.405 7.406-18.9 8.228-27.215 2.469l-3.133-2.647c-24.896-24.896-24.897-65.26-0.003-90.156l258.272-258.31c4.996-5 4.996-13.103 0-18.103L363.58 244.608c-23.322-23.325-24.779-60.234-4.37-85.255z"
            fill="${this.color}"
            p-id="1437"
          ></path>
        </svg>
      `:""}}o.__decorate([(0,e.property)({type:String})],a.prototype,"color",void 0),(0,l.defineElement)("tiga-back",a)},I8IR:function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.COLOR=t.BOOLEAN=t.TRANSPARENT=t.TransparentHeaderDefaultOpacity=void 0,t.TransparentHeaderDefaultOpacity=0,t.TRANSPARENT={NONE:"none",ALWAYS:"always",AUTO:"auto"},t.BOOLEAN={YES:"YES",NO:"NO"},t.COLOR={WHITE:"#FFF",BLACK:"#191919",TRANSPARENT:"transparent"}},"5jeu":function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=i("2GZr"),e=i("1jGT"),r=i("vkip"),s=i("I8IR"),l=i("Tggp"),a=(c="")=>({fromAttribute:u=>u==="undefined"||u==="null"||u==="false"?c:u||c});class n extends e.LitElement{constructor(){super(...arguments),this["default-title"]=""}static get styles(){return l.Styles}getHeaderConfig(){const u=this["transparent-title"]===s.TRANSPARENT.ALWAYS,d=this["transparent-title"]===s.TRANSPARENT.AUTO;let p=this["title-bar-color"]||s.COLOR.WHITE,h=(0,r.isPureWhite)(this["title-bar-color"])?s.COLOR.BLACK:s.COLOR.WHITE;const g=this["header-opacity"]===s.TransparentHeaderDefaultOpacity,m=this["title-penetrate"]===s.BOOLEAN.YES,w=()=>{p=s.COLOR.TRANSPARENT,h=s.COLOR.WHITE},_=this["title-bar-height"],O=this["status-bar-height"],R={titleBarHeight:`height:${_};`,titleBarLineHeight:`line-height:${_};`,statusBarHeight:`height:${O};`};return(u||d&&g)&&w(),{isAlways:u,isAutoTransparentTitle:d,titleBarColor:p,titleColor:h,isOpenPenetrate:m,isDefaultOpacity:g,styles:R}}getHeaderLoadingRender(){return(0,e.html)`<i class="icon-loading">
      <svg
        viewBox="0 0 1024 1024"
        focusable="false"
        class="loading-svg"
        width="1em"
        height="1em"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"
        ></path>
      </svg>
    </i>`}render(){const u=this.getHeaderConfig();return(0,e.html)`
      <div
        class="header ${u.isAutoTransparentTitle?s.COLOR.TRANSPARENT:""}"
        style="
        ${u.isAutoTransparentTitle&&!u.isDefaultOpacity?`opacity: ${this["header-opacity"]};`:""}
        color:${u.titleColor};
        pointer-events: ${u.isOpenPenetrate?"none":"auto"};
        background-color:${u.titleBarColor};
        border-bottom-color:${this["border-bottom-color"]||u.titleBarColor};"
      >
        <div style="${u.styles.statusBarHeight}"></div>
        <div
          class="title ${(0,r.isIos)()?"title--center":this["show-back"]?"title-back-padding":""}"
          style="${u.styles.titleBarHeight}${u.styles.titleBarLineHeight}"
        >
          ${this["show-back"]?(0,e.html)`<tiga-back color="${u.titleColor}"></tiga-back>`:""}
          ${this["title-image"]?(0,e.html)`<img src="${this["title-image"]}" class="header-image" />`:this["default-title"]}
          ${this["header-loading"]?this.getHeaderLoadingRender():void 0}
        </div>
      </div>
      ${u.isAutoTransparentTitle||u.isAlways?"":(0,e.html)`
            <div>
              <div style="${u.styles.statusBarHeight}"></div>
              <div
                class="header-placeholder"
                style="${u.styles.titleBarHeight}${u.styles.titleBarLineHeight}"
              ></div>
            </div>
          `}
    `}}o.__decorate([(0,e.property)({type:String})],n.prototype,"default-title",void 0),o.__decorate([(0,e.property)({converter:a(s.TRANSPARENT.NONE)})],n.prototype,"transparent-title",void 0),o.__decorate([(0,e.property)({converter:a()})],n.prototype,"title-image",void 0),o.__decorate([(0,e.property)({converter:a()})],n.prototype,"border-bottom-color",void 0),o.__decorate([(0,e.property)({converter:a(s.BOOLEAN.NO)})],n.prototype,"title-penetrate",void 0),o.__decorate([(0,e.property)({converter:a(!1)})],n.prototype,"show-back",void 0),o.__decorate([(0,e.property)({converter:a(s.COLOR.WHITE)})],n.prototype,"title-bar-color",void 0),o.__decorate([(0,e.property)({converter:a(s.TransparentHeaderDefaultOpacity)})],n.prototype,"header-opacity",void 0),o.__decorate([(0,e.property)({type:String})],n.prototype,"title-bar-height",void 0),o.__decorate([(0,e.property)({type:String})],n.prototype,"status-bar-height",void 0),o.__decorate([(0,e.property)({converter:a(!1)})],n.prototype,"header-loading",void 0),t.default=n,(0,r.defineElement)("tiga-header",n)},Tggp:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Styles=void 0;const o=i("1jGT"),e=i("H+p6");t.Styles=(0,o.css)`
  :host {
    position: relative;
  }

  .header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    z-index: 99999999;
    border-bottom: 0.5px solid transparent;
  }

  .header .title {
    display: flex;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    align-items: center;
    font-size: ${(0,o.unsafeCSS)((0,e.rpxToRem)(36))};
    padding: 0 ${(0,o.unsafeCSS)((0,e.rpxToRem)(24))};
  }

  tiga-back {
    position: absolute;
    left: 0px;
  }

  .header .title--center {
    justify-content: center;
  }

  .header .title-back-padding {
    padding-left: 48px;
  }

  .header-placeholder {
    text-align: center;
    color: #1890ff;
  }

  .header-image {
    max-width: ${(0,o.unsafeCSS)((0,e.rpxToRem)(240))};
    max-height: ${(0,o.unsafeCSS)((0,e.rpxToRem)(72))};
    vertical-align: middle;
    border-style: none;
  }

  .icon-loading {
    display: inline-block;
    padding-left: 10px;
    color: inherit;
  }

  .loading-svg {
    animation: loadingCircle 1s infinite linear;
  }

  @keyframes loadingCircle {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`},yHHF:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i("gdZS"),i("5jeu"),i("khLg")},"8RjZ":function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=i("56yk"),e=i("4XNj");t.default={setNavigationBar({title:r,image:s,backgroundColor:l,borderBottomColor:a,reset:n}){return new Promise(c=>{const u=(0,e.getPage)(),d={};n?Object.assign(d,o.DefualtPageConfig):(r!==void 0&&(d.defaultTitle=r),s!==void 0&&(d.titleImage=s),l!==void 0&&(d.titleBarColor=l),a!==void 0&&(d.borderBottomColor=a)),u.setConfig(d),c(void 0)})},getTitleColor(){return new Promise(r=>{const s=(0,e.getPage)();r({color:s.getConfig().titleBarColor||"#ffffff"})})},showNavigationBarLoading(){return new Promise(r=>{(0,e.getPage)().showNavigationBarLoading()})},hideNavigationBarLoading(){return new Promise(r=>{(0,e.getPage)().hideNavigationBarLoading()})},hideBackHome(){const r=document.querySelector("tiga-page-host");if(r)try{const s=r.shadowRoot.querySelector("tiga-back");s&&s.remove()}catch(s){}}}},khLg:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=i("2GZr"),e=i("1jGT"),r=o.__importDefault(i("BjK/")),s=i("H+p6"),l=i("vkip"),a=o.__importDefault(i("aYl2")),n=i("vkip"),c=i("56yk"),u=(0,s.rpxToRem)(88),d=0;var p;(function(_){_[_.Normal=0]="Normal",_[_.Pulling=1]="Pulling",_[_.WillRefresh=2]="WillRefresh",_[_.Refreshing=3]="Refreshing"})(p||(p={}));const h=44,g=88,m=0;class w extends e.LitElement{constructor(){super(...arguments),this.config=c.DefualtPageConfig,this.headerOpacity=m,this["show-header"]=!0,this["show-back"]=!1,this["title-bar-height"]=u,this["status-bar-height"]=d,this.canHandleReachBottom=!0,this.onScroll=()=>{const O=this.contentElement,R=O.scrollTop,f=O.clientHeight,v=O.scrollHeight;this.dispatchEvent(new CustomEvent(c.ScrollEventName,{detail:{scrollTop:R,scrollHeight:v}})),v>f&&v-R-f<=(this.config.onReachBottomDistance||20)?this.canHandleReachBottom&&(this.canHandleReachBottom=!1,this.dispatchEvent(new CustomEvent(c.ReachBottomEventName))):this.canHandleReachBottom=!0,this.isAutoTransparent&&(this.headerOpacity=m+(1-m)*Math.min(1,R/(f*.5)))},this.enbalePullRefresh=!1,this._pullRefreshState=p.Normal,this.onTouchMove=O=>{if(!this.enbalePullRefresh)return;const R=O.touches[0],f=this.contentElement;if(this.pullRefreshState!==p.Refreshing){if(this.lastTouchPoint){const v=R.clientY-this.lastTouchPoint.clientY;if(f.scrollTop<=0){const A=(parseFloat(window.getComputedStyle(f).paddingTop)||0)+v;f.style.setProperty("padding-top",Math.min(A,g*(parseFloat(document.documentElement.style.fontSize)/16))+"px"),this.pullRefreshState===p.Normal&&(this.pullRefreshState=p.Pulling),A>=h&&(this.pullRefreshState=p.WillRefresh)}}this.lastTouchPoint=R}},this.onTouchEnd=()=>{this.pullRefreshState!==p.Normal&&(this.pullRefreshState===p.WillRefresh?this.pullRefreshState=p.Refreshing:this.pullRefreshState===p.Pulling&&(this.pullRefreshState=p.Normal))},this.headerLoading=!1}static get styles(){return(0,e.css)`
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
        font-size: 16px;
      }

      .content {
        position: relative;
        flex: 1;
        overflow-y: auto;
        overflow-x: hidden;
      }

      .content::-webkit-scrollbar {
        display: none; /* Chrome Safari */
      }

      .pull-header {
        text-align: center;
        color: #1890ff;
        position: absolute;
        left: 0;
        width: 100%;
        transform: translateY(-100%);
      }
    `}static get properties(){return{pullRefreshState:{type:Number}}}get isAutoTransparent(){return this.config.transparentTitle==="auto"}setConfig(O){this.config=Object.assign(Object.assign({},this.config),O);const R=(0,r.default)(window.$MOR_APP_CONFIG,"updatePageConfig");if(R){const{path:f,options:v}=(0,l.getCurrentPageParams)(["path","options"]),P=(0,l.getPageConfig)(R,f,v);typeof P=="object"&&(this.config=Object.assign(this.config,P))}this.requestUpdate(),O.backgroundColor&&window.getComputedStyle(this).backgroundColor==="rgba(0, 0, 0, 0)"&&(this.styleElement||(this.styleElement=document.createElement("style"),this.classList.add(`page-${(0,n.uuid)()}`),document.head.appendChild(this.styleElement)),this.styleElement.innerHTML=`
      .${this.className}{
        background-color:${O.backgroundColor};
      }
       `),this.config.showTitleLoading&&this.showNavigationBarLoading();try{const{defaultTitle:f}=this.config;document.title=typeof f=="undefined"?"":f}catch(f){}}getConfig(){return this.config}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.contentElement.addEventListener("touchmove",this.onTouchMove,{passive:!0}),this.contentElement.addEventListener("touchend",this.onTouchEnd,{passive:!0}),this.contentElement.addEventListener("scroll",this.onScroll,{passive:!0})},0)}disconnectedCallback(){super.disconnectedCallback(),this.styleElement&&this.styleElement.remove(),this.contentElement.removeEventListener("touchmove",this.onTouchMove),this.contentElement.removeEventListener("touchend",this.onTouchEnd),this.contentElement.removeEventListener("scroll",this.onScroll)}get pullRefreshState(){return this._pullRefreshState}set pullRefreshState(O){if(O!==this._pullRefreshState){const R=this._pullRefreshState;this._pullRefreshState=O,this.requestUpdate("pullRefreshState",R),O===p.Refreshing?(this.animationPaddingTop(h),this.dispatchEvent(new CustomEvent(c.PullDownRefreshEventName))):this.pullRefreshState===p.Normal&&this.animationPaddingTop(0)}}startPullDownRefresh(){this.pullRefreshState=p.Refreshing}stopPullDownRefresh(){this.pullRefreshState=p.Normal}animationPaddingTop(O){const R={iterationStart:0,direction:"alternate",duration:200,fill:"forwards",easing:"ease-in"},f={easing:"ease-out",paddingTop:(0,s.rpxToRem)(O*2)},v=this.contentElement.animate(f,R);v.addEventListener("finish",()=>{v.cancel(),this.contentElement.style.setProperty("padding-top",(0,s.rpxToRem)(O*2))})}showNavigationBarLoading(){this.headerLoading=!0,this.requestUpdate()}hideNavigationBarLoading(){this.headerLoading=!1,this.requestUpdate()}getPullRefrehHeader(){let O;const R=f=>(0,e.html)`
        <div
          class="pull-header"
          style="height:${this["title-bar-height"]};line-height:${this["title-bar-height"]};"
        >
          <span>${f}</span>
        </div>
      `;switch(this.pullRefreshState){case p.Refreshing:{O="\u6B63\u5728\u5237\u65B0...";break}case p.WillRefresh:{O="\u677E\u5F00\u5373\u53EF\u5237\u65B0";break}case p.Pulling:{O="\u4E0B\u62C9\u5237\u65B0";break}}return R(O)}getRenderHeader(){const{borderBottomColor:O,titleImage:R="",defaultTitle:f,transparentTitle:v,titlePenetrate:P,titleBarColor:A}=this.config,b=(0,r.default)(window.$MOR_APP_CONFIG,"pageHeaderConfig",{}),{path:C,options:T}=(0,l.getCurrentPageParams)(["path","options"]),E=(0,l.shouldEnableFor)(b.showHeader,C,T);let I=typeof E=="boolean"?E:this["show-header"],L=this["show-back"];try{const{search:M}=location;M&&M.indexOf("hide-header=1")>-1&&(I=!1);const D=(0,l.shouldEnableFor)(b.showBack,C,T);typeof D=="boolean"&&(L=D)}catch(M){}try{const M=(0,r.default)(window.$MOR_APP_CONFIG,"nav",{}),D=(0,l.getNav)(M,C,T);(0,l.isUndefined)(D.statusBarHeight)||(this["status-bar-height"]=l.converterForPx.fromAttribute(D.statusBarHeight)),(0,l.isUndefined)(D.titleBarHeight)||(this["title-bar-height"]=l.converterForPx.fromAttribute(D.titleBarHeight))}catch(M){}return I?(0,e.html)` <tiga-header
      default-title="${f}"
      title-image="${R}"
      border-bottom-color="${O}"
      title-penetrate="${P}"
      transparent-title="${v}"
      title-bar-color="${A}"
      show-back="${L}"
      title-bar-height="${this["title-bar-height"]}"
      status-bar-height="${this["status-bar-height"]}"
      header-loading="${this.headerLoading}"
      header-opacity="${this.headerOpacity}"
    />`:""}render(){return(0,e.html)`
      ${this.getRenderHeader()}
      <div class="content">
        ${this.getPullRefrehHeader()}
        <slot></slot>
      </div>
    `}}o.__decorate([(0,e.internalProperty)()],w.prototype,"headerOpacity",void 0),o.__decorate([(0,e.query)(".content")],w.prototype,"contentElement",void 0),o.__decorate([(0,e.property)({converter:a.default})],w.prototype,"show-header",void 0),o.__decorate([(0,e.property)({converter:a.default})],w.prototype,"show-back",void 0),o.__decorate([(0,e.property)({converter:l.converterForPx})],w.prototype,"title-bar-height",void 0),o.__decorate([(0,e.property)({converter:l.converterForPx})],w.prototype,"status-bar-height",void 0),t.default=w,(0,l.defineElement)("tiga-page-host",w)},"7LqJ":function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=i("1jGT"),e=i("vkip");class r extends o.LitElement{static get styles(){return(0,o.css)`
      :host {
        display: block;
        box-sizing: content-box;
      }

      :host::-webkit-scrollbar {
        display: none; /* Chrome Safari */
      }
    `}render(){return(0,o.html)` <slot></slot> `}}t.default=r,(0,e.defineElement)("tiga-page",r)},Dryq:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=i("4XNj");function e(r,s){let l=r.offsetTop,a=r.offsetParent;for(;a!==null&&a!==s;)l+=a.offsetTop,a=a.offsetParent;return l}t.default={pageScrollTo({scrollTop:r,duration:s=0,selector:l}){return new Promise((a,n)=>{if(r<0)return n("scrollTop \u5FC5\u987B\u5927\u4E8E0");if(typeof r=="undefined"&&typeof l=="undefined")return n("\u7F3A\u5C11 scrollTop \u6216\u8005 selector \u53C2\u6570\uFF0CscrollTop \u4E0E selector \u5FC5\u987B\u4F20\u5165\u4E00\u4E2A");s=Number.isNaN(Number(s))?0:Math.max(0,Number(s));const u=(0,o.getPage)().shadowRoot.querySelector(".content"),d=u.scrollTop;let p;if(l){const g=document.querySelector(l);if(!g)return n(`\u672A\u627E\u5230\u9009\u62E9\u5668\u4E3A ${l} \u7684\u5143\u7D20\uFF0C\u8BF7\u786E\u8BA4\u5143\u7D20\u662F\u5426\u5B58\u5728`);p=e(g,u)-d}else p=r-d;if(s===0&&p!==0)return requestAnimationFrame(()=>{u.scrollTo({top:r,left:0})}),a(void 0);if(s===0||p===0)return a(void 0);const h=Date.now();requestAnimationFrame(function g(){const m=Date.now()-h,w=function(_,O,R,f){return-R*(_/=f)*(_-2)+O}(m,d,p,s);if(s<=m){u.scrollTo({top:r,left:0});return}u.scrollTo({top:w,left:0}),requestAnimationFrame(g)}),a(void 0)})}}},"4XNj":function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getPage=void 0;function i(){const o=document.querySelectorAll("tiga-page-host");return o.length===0?null:o[o.length-1]}t.getPage=i,t.default={startPullDownRefresh(){return new Promise(o=>{const e=i();e&&e.startPullDownRefresh(),o(void 0)})},stopPullDownRefresh(){return new Promise(o=>{const e=i();e&&e.stopPullDownRefresh(),o(void 0)})},setCanPullDown({canPullDown:o}){if(typeof o!="undefined")try{const e=getCurrentPages(),r="tiga-page-host",s=e[e.length-1]||null,{pageId:l}=s;let a=document.getElementById(l).querySelector(r);a.enbalePullRefresh=o,setTimeout(()=>{a=null},0)}catch(e){}}}},"H+p6":function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.rpxToRem=void 0;function i(o){return`${o/2}px`}t.rpxToRem=i},mBTx:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.autoRun=t.parseAnimation2Style=t.KEY_ANIMATION=void 0;const o=i("uuwU");t.KEY_ANIMATION="animation";const e=f=>new RegExp(f+"\\(([^)]+)\\)","i"),r=f=>new RegExp(f+":([^;]+);","i"),s=f=>typeof f!="string"?f:f.replace(/(?!^)([A-Z])/g,(v,P)=>"-"+P.toLowerCase()),l=f=>typeof f=="string"?JSON.parse(f):f,a=["opacity","backgroundColor"],n=[...a,"width","height","top","left","right","bottom"],c=f=>new Promise(v=>{setTimeout(v,f)});function u(f){var v;try{return!f||f.indexOf("transform")<0?"":((v=/transform:\s?([^;]+)/gim.exec(f))===null||v===void 0?void 0:v[1])||""}catch(P){return console.error(`${P}`),""}}const d=(f,v)=>{try{if(!f)return;const P=e(v).exec(f);return P?P[1]:""}catch(P){console.warn(`${P}`)}},p=(f,v)=>{const P=f.indexOf("translate")>-1,A=f.indexOf("skew")>-1;if(f.indexOf("rotate")>-1){const C=v.pop();return v.push(C+"deg"),v}else if(P||A){const C=A?"deg":"px";return v=v.map(T=>(0,o.addUnit)(T,C)),v}return v},h=(f="",v,P)=>{const A=p(v,P),b=`${v}(${A.join(",")})`;if(!d(f,v))return f+=` ${b}`,f;const C=e(v);return f=f.replace(C,b),f},g=f=>{const{delay:v,duration:P,timeFunction:A,transformOrigin:b}=f;return{"transform-origin":b,"transition-delay":`${v}ms`,"transition-duration":`${P}ms`,"transition-timing-function":A,"transition-property":"all"}},m=(f,v)=>{const P=()=>a.indexOf(f)>-1?v:v+"px";return{[s(f)]:P()}},w=(f="",v,P=!1)=>(Object.keys(v).forEach(b=>{const C=f.indexOf(b+":")>-1,T=P?"":v[b]?`${b}: ${v[b]};`:"";if(!C&&!P){f+=` ${T}`;return}f=f.replace(r(b),T)}),f),_=(f,v)=>{try{const{config:P,animation:A}=f;if(A.length<1)return;const b=g(P);let C=u(v),T={};return A.forEach(E=>{const[I,L]=E;n.indexOf(I)>-1?T=Object.assign(Object.assign({},T),m(I,L)):C=h(C,I,L)}),v=w(v,b),v=w(v,T),v=w(v,{transform:C}),v}catch(P){console.error(`${P}`);return}};function*O(f,v){f=l(f),f=f==null?[]:f;for(let P=0;P<f.length;P++){const A=f[P],b=P>0?f[P-1].config.duration:0;yield c(b).then(()=>{const C=v.getAttribute("style")||"";return _(A,C)})}}t.parseAnimation2Style=O;const R=(f,v)=>{const P=f();function A(){const b=P.next();b.done||b.value.then(C=>{v(C),A()})}A()};t.autoRun=R},aYl2:function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={fromAttribute(i){return i==="true"||i===!0}}},tnM9:function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isCancel=t.isCancelPromise=t.makeCancelPromise=void 0;const i=new Error("canceled");function o(s,l){let a,n=!1;const c=new Promise((u,d)=>{a=d,s.then(p=>{n=!0,u(p)},p=>{n=!0,d(p)})});return c.cancel=function(){n||(a(i),l&&l())},c.__cancelpromise__=!0,c}t.makeCancelPromise=o;function e(s){return!!s.__cancelpromise__}t.isCancelPromise=e;function r(s){return s===i}t.isCancel=r},vkip:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getNav=t.isTypeOf=t.isObject=t.isFunction=t.isUndefined=t.getQueryParams=t.requestAnimationFrame=t.getCurrentPagePath=t.getCurrentPageParams=t.getPageConfig=t.shouldEnableFor=t.converterForPx=t.defineElement=t.getPropertiesByAttributes=t.addFocusToInputTypeElement=t.isIos=t.isPureWhite=t.colorReverse=t.isMobile=t.uuid=t.supportTouch=void 0;const o=i("H+p6");function e(){return"ontouchend"in document}t.supportTouch=e;function r(){return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(b){const C=Math.random()*16|0;return(b==="x"?C:C&3|8).toString(16)})}t.uuid=r;function s(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}t.isMobile=s;function l(b){const T="000000"+(16777215-("0x"+b.replace(/#/g,""))).toString(16);return"#"+T.substring(T.length-6,T.length)}t.colorReverse=l;const a=(b="")=>(b=b.toLowerCase(),!!~["#fff","#ffffff"].indexOf(b));t.isPureWhite=a;const n=()=>{try{return!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)}catch(b){return console.warn(`${b}`),!1}};t.isIos=n;const c=b=>{const C=["input","textarea"];try{const T=b.nodeName.toLowerCase();if(!C.some(D=>T.indexOf(D)))return;const I=D=>b&&b.shadowRoot&&b.shadowRoot.querySelector(D),L=(D=[])=>D.forEach(S=>typeof S.focus=="function"&&S.focus()),M=[];C.map(D=>{const S=I(D);S&&M.push(S)}),L(M)}catch(T){}};t.addFocusToInputTypeElement=c;const u=(b=[])=>{const C={};return b.length<=0||b.forEach(T=>C[T]=Symbol.for(T)),C};t.getPropertiesByAttributes=u;const d=(b,C)=>{customElements.get(b)||customElements.define(b,C)};t.defineElement=d,t.converterForPx={fromAttribute:(b="")=>String(b).indexOf("px")>-1?b:(0,o.rpxToRem)(Number(b))};function p(b,C,T){if(!(!C||typeof b=="undefined")){if(b===!0)return!0;if(b===!1)return!1;if(Array.isArray(b))return b.includes(C);if(typeof b=="function")return!!b(C,T)}}t.shouldEnableFor=p;function h(b,C,T){if(C){if(typeof b=="object")return b;if(typeof b=="function"){const E=b(C,T);if(typeof E=="object")return E}}}t.getPageConfig=h;const g=(b=[])=>{try{const C=getCurrentPages()||[],T=C[C.length-1],E={};return b.forEach(I=>{E[I]=T[I]}),E}catch(C){return{}}};t.getCurrentPageParams=g;const m=()=>{try{const b=getCurrentPages()||[];return b[b.length-1].path}catch(b){}};t.getCurrentPagePath=m;const w=1e3/60,_=b=>typeof window.requestAnimationFrame=="function"?window.requestAnimationFrame(b):setTimeout(b,w);t.requestAnimationFrame=_;function O(b){const C=encodeURIComponent("=");b&&b.indexOf(C)>=0&&b.indexOf("=")<0&&(b=decodeURIComponent(b));const T={};if(b.indexOf("?")!==-1){const I=b.substr(b.indexOf("?")+1).split("&");for(let L=0;L<I.length;L++)T[I[L].split("=")[0]]=decodeURIComponent(I[L].split("=")[1])}return T}t.getQueryParams=O;const R=b=>typeof b=="undefined";t.isUndefined=R;const f=b=>typeof b=="function";t.isFunction=f;const v=b=>b!==null&&typeof b=="object";t.isObject=v;const P=(b,C)=>{const T=Object.prototype.toString.call(b);return/^\[object (.*)\]$/.exec(T)[1]===C};t.isTypeOf=P;function A(b,C,T){const E={};return(0,t.isObject)(b)&&Object.keys(b).forEach(I=>{const L=b[I];if(!(0,t.isUndefined)(L))if((0,t.isFunction)(L)){const M=L(C,T);(0,t.isTypeOf)(M,"Number")||(0,t.isTypeOf)(M,"String")?E[I]=M:console.warn(`\u81EA\u5B9A\u4E49 ${I} \u5931\u8D25: \u5F53\u6307\u5B9A\u4E3A\u51FD\u6570\u7C7B\u578B\u65F6\uFF0C\u8FD4\u56DE\u503C\u5E94\u4E3A string \u6216\u8005 number \u7C7B\u578B`)}else E[I]=L}),E}t.getNav=A},uuwU:function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addUnit=void 0;function i(r){return/^\d+(\.\d+)?$/.test(r)}function o(r){return r!=null}function e(r,s="px"){if(o(r))return r=String(r),i(r)?`${r}${s}`:r}t.addUnit=e},LHxG:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=i("2GZr"),e=i("1jGT"),r=o.__importDefault(i("aYl2")),s=i("MU64"),l=o.__importDefault(i("MTUQ")),a=i("k7qL");class n extends e.LitElement{constructor(){super(),this._isFixed=!1,this.observer=null,this.preventScroll=u=>{u.preventDefault()},this.canHandleReachBottomY=!1,this.canHandleReachTopY=!1,this.canHandleReachBottomX=!1,this.canHandleReachTopX=!1,this.onScroll=u=>{let d=!1,p=!1;if(this[s.properties.SCROLL_Y]){const h=this.scrollTop,g=this.clientHeight,m=this.scrollHeight;m>g&&m-h-g<=this[s.properties.LOWER_THRESHOLD]?this.canHandleReachBottomY&&(this.canHandleReachBottomY=!1,p=!0):this.canHandleReachBottomY=!0,m>g&&h<=this[s.properties.UPPER_THRESHOLD]?this.canHandleReachTopY&&(this.canHandleReachTopY=!1,d=!0):this.canHandleReachTopY=!0}if(this[s.properties.SCROLL_X]){const h=this.scrollLeft,g=this.clientWidth,m=this.scrollWidth;m>g&&m-h-g<=this[s.properties.LOWER_THRESHOLD]?this.canHandleReachBottomX&&(this.canHandleReachBottomX=!1,p=!0):this.canHandleReachBottomX=!0,m>g&&h<=this[s.properties.UPPER_THRESHOLD]?this.canHandleReachTopX&&(this.canHandleReachTopX=!1,d=!0):this.canHandleReachTopX=!0}p&&this.dispatchEvent(new CustomEvent("scrolltolower",{bubbles:!1})),d&&this.dispatchEvent(new CustomEvent("scrolltoupper",{bubbles:!1})),this[s.properties.TRAP_SCROLL]&&(p||d||this.scrollTop<=0||this.scrollHeight<=this.scrollTop+this.clientHeight?(!this._isFixed&&(0,a.fixedBody)(document),this._isFixed=!0):(this._isFixed&&(0,a.looseBody)(document),this._isFixed=!1))},this.initProperties()}static get styles(){return(0,e.css)`
      :host {
        display: block;
        overflow: hidden;
        -webkit-overflow-scrolling: touch;
      }

      /* 垂直方向滚动 */
      :host([scroll-y='true']) {
        overflow-y: scroll;
      }

      /* 水平方向滚动 */
      :host([scroll-x]) {
        overflow-x: scroll;
      }
    `}static get properties(){return{[s.properties.DISABLE_SCROLL]:{converter:r.default,attribute:s.attributes.DISABLE_SCROLL},[s.properties.SCROLL_TOP]:{type:Number,attribute:s.attributes.SCROLL_TOP},[s.properties.SCROLL_LEFT]:{type:Number,attribute:s.attributes.SCROLL_LEFT},[s.properties.SCROLL_INTO_VIEW]:{type:Number,attribute:s.attributes.SCROLL_INTO_VIEW},[s.properties.UPPER_THRESHOLD]:{type:Number,attribute:s.attributes.UPPER_THRESHOLD},[s.properties.LOWER_THRESHOLD]:{type:Number,attribute:s.attributes.LOWER_THRESHOLD},[s.properties.SCROLL_X]:{converter:r.default,attribute:s.attributes.SCROLL_X},[s.properties.SCROLL_Y]:{converter:r.default,attribute:s.attributes.SCROLL_Y},[s.properties.TRAP_SCROLL]:{converter:r.default,attribute:s.attributes.TRAP_SCROLL},[s.properties.SCROLL_WITH_ANIMATION]:{converter:r.default,attribute:s.attributes.SCROLL_WITH_ANIMATION}}}initProperties(){this[s.properties.SCROLL_TOP]=0,this[s.properties.SCROLL_LEFT]=0,this[s.properties.SCROLL_INTO_VIEW]=0,this[s.properties.UPPER_THRESHOLD]=50,this[s.properties.LOWER_THRESHOLD]=50,this[s.properties.SCROLL_X]=!1,this[s.properties.SCROLL_Y]=!1,this[s.properties.DISABLE_SCROLL]=!1,this[s.properties.TRAP_SCROLL]=!1,this[s.properties.SCROLL_WITH_ANIMATION]=!1}attributeChangedCallback(u,d,p){switch(super.attributeChangedCallback(u,d,p),u){case s.attributes.SCROLL_INTO_VIEW:{setTimeout(()=>{this._scrollIntoView(p)},0);break}case s.attributes.SCROLL_TOP:{p!=this.scrollTop&&this.scrollTo({top:p,behavior:this[s.properties.SCROLL_WITH_ANIMATION]?"smooth":"auto"});break}case s.attributes.SCROLL_LEFT:{p!=this.scrollLeft&&this.scrollTo({left:p,behavior:this[s.properties.SCROLL_WITH_ANIMATION]?"smooth":"auto"});break}case s.attributes.DISABLE_SCROLL:{p==="true"?this.addEventListener("touchmove",this.preventScroll):this.removeEventListener("touchmove",this.preventScroll);break}case s.attributes.TRAP_SCROLL:{p?this.watchScrollView():this.unWatchScrollView();break}case s.attributes.SCROLL_WITH_ANIMATION:p&&(0,l.default)()}}watchScrollView(){try{if(!(0,a.isSupportIntersectionObserver)())return;this.observer=new IntersectionObserver(u=>{if(u&&u[0]){const{isIntersecting:d}=u[0];!d&&this._isFixed&&((0,a.looseBody)(document),this._isFixed=!1)}},{threshold:1}),this.observer.observe(this)}catch(u){}}unWatchScrollView(){try{if(!(0,a.isSupportIntersectionObserver)()||!this.observer)return;this.observer.unobserve(this)}catch(u){}}connectedCallback(){super.connectedCallback(),this.addEventListener("scroll",this.onScroll)}disconnectedCallback(){super.disconnectedCallback(),this._isFixed&&(this._isFixed=!1,(0,a.looseBody)(document)),this.unWatchScrollView()}_scrollIntoView(u){if(u)try{const d=this.querySelector(`#${u}`);try{const p=this.getBoundingClientRect(),h=d.getBoundingClientRect();this[s.properties.SCROLL_X]&&this.scrollTo({left:Math.max(h.left+this.scrollLeft-p.left,0),top:0,behavior:this[s.properties.SCROLL_WITH_ANIMATION]?"smooth":"auto"}),this[s.properties.SCROLL_Y]&&this.scrollTo({left:0,top:Math.max(h.top+this.scrollTop-p.top),behavior:this[s.properties.SCROLL_WITH_ANIMATION]?"smooth":"auto"})}catch(p){d&&d.scrollIntoView(!0)}}catch(d){console.error(d)}}render(){return(0,e.html)`<slot></slot>`}}t.default=n},MU64:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.properties=t.attributes=void 0;const o=i("vkip");t.attributes={DISABLE_SCROLL:"disable-scroll",SCROLL_TOP:"scroll-top",SCROLL_LEFT:"scroll-left",SCROLL_INTO_VIEW:"scroll-into-view",UPPER_THRESHOLD:"upper-threshold",LOWER_THRESHOLD:"lower-threshold",SCROLL_X:"scroll-x",SCROLL_Y:"scroll-y",TRAP_SCROLL:"trap-scroll",SCROLL_WITH_ANIMATION:"scroll-with-animation"},t.properties=(0,o.getPropertiesByAttributes)(Object.keys(t.attributes))},MTUQ:function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});function i(){var o=window,e=document;if("scrollBehavior"in e.documentElement.style||o.__injectTigaSmoothBehaviorPolyfill)return;o.__injectTigaSmoothBehaviorPolyfill=!0;var r=o.HTMLElement||o.Element,s=468,l={scroll:o.scroll||o.scrollTo,elementScroll:r.prototype.scroll||u},a=o.performance&&o.performance.now?o.performance.now.bind(o.performance):Date.now;function n(m){var w=["MSIE ","Trident/","Edge/"];return new RegExp(w.join("|")).test(m)}var c=n(o.navigator.userAgent)?1:0;function u(m,w){this.scrollLeft=m,this.scrollTop=w}function d(m){return .5*(1-Math.cos(Math.PI*m))}function p(m){if(m===null||typeof m!="object"||m.behavior===void 0||m.behavior==="auto"||m.behavior==="instant")return!0;if(typeof m=="object"&&m.behavior==="smooth")return!1;throw new TypeError("behavior member of ScrollOptions "+m.behavior+" is not a valid value for enumeration ScrollBehavior.")}function h(m){var w=a(),_,O,R,f=(w-m.startTime)/s;f=f>1?1:f,_=d(f),O=m.startX+(m.x-m.startX)*_,R=m.startY+(m.y-m.startY)*_,m.method.call(m.scrollable,O,R),(O!==m.x||R!==m.y)&&o.requestAnimationFrame(h.bind(o,m))}function g(m,w,_){var O,R,f,v,P=a();m===e.body?(O=o,R=o.scrollX||o.pageXOffset,f=o.scrollY||o.pageYOffset,v=l.scroll):(O=m,R=m.scrollLeft,f=m.scrollTop,v=u),h({scrollable:O,method:v,startTime:P,startX:R,startY:f,x:w,y:_})}o.scrollTo=function(){if(arguments[0]!==void 0){if(p(arguments[0])===!0){l.scroll.call(o,arguments[0].left!==void 0?arguments[0].left:typeof arguments[0]!="object"?arguments[0]:o.scrollX||o.pageXOffset,arguments[0].top!==void 0?arguments[0].top:arguments[1]!==void 0?arguments[1]:o.scrollY||o.pageYOffset);return}g.call(o,e.body,arguments[0].left!==void 0?~~arguments[0].left:o.scrollX||o.pageXOffset,arguments[0].top!==void 0?~~arguments[0].top:o.scrollY||o.pageYOffset)}},r.prototype.scrollTo=function(){if(arguments[0]!==void 0){if(p(arguments[0])===!0){if(typeof arguments[0]=="number"&&arguments[1]===void 0)throw new SyntaxError("Value could not be converted");l.elementScroll.call(this,arguments[0].left!==void 0?~~arguments[0].left:typeof arguments[0]!="object"?~~arguments[0]:this.scrollLeft,arguments[0].top!==void 0?~~arguments[0].top:arguments[1]!==void 0?~~arguments[1]:this.scrollTop);return}var m=arguments[0].left,w=arguments[0].top;g.call(this,this,typeof m=="undefined"?this.scrollLeft:~~m,typeof w=="undefined"?this.scrollTop:~~w)}}}t.default=i},k7qL:function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.looseBody=t.fixedBody=t.isSupportIntersectionObserver=void 0;const i=()=>typeof window.IntersectionObserver=="function";t.isSupportIntersectionObserver=i;const o=r=>{if(!(0,t.isSupportIntersectionObserver)())return;const s=a=>`position: fixed; top: ${a}px; left: 0; right: 0;height: 100%;`,l=r.querySelector("tiga-page");if(l){const a=l.getBoundingClientRect().top;l.style.cssText+=s(a)}};t.fixedBody=o;const e=r=>{if(!(0,t.isSupportIntersectionObserver)())return;const s=r.querySelector("tiga-page"),l=r.querySelector("tiga-page-host").shadowRoot,a=l.querySelector(".content"),n=l.querySelector("tiga-header"),c=(u,d)=>{u.style.position="",u.style.top=u.style.left=u.style.right=u.style.bottom="",u.style.height="";const p=Number.parseFloat(d)-(n&&n.offsetHeight||0);a.scrollTop=-p};if(s){const u=s.style.top;c(s,u)}};t.looseBody=e},O9ik:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.properties=t.attributes=void 0;const o=i("vkip");t.attributes={INDICATOR_DOTS:"indicator-dots",INDICATOR_COLOR:"indicator-color",INDICATOR_ACTIVE_COLOR:"indicator-active-color",AUTOPLAY:"autoplay",CURRENT:"current",DURATION:"duration",INTERVAL:"interval",CIRCULAR:"circular",VERTICAL:"vertical",PREVIOUS_MARGIN:"previous-margin",NEXT_MARGIN:"next-margin",CLASS:"class",DISABLE_TOUCH:"disable-touch",TOUCH_ANGLE:"touch-angle",SWIPE_RATIO:"swipe-ratio"},t.properties=(0,o.getPropertiesByAttributes)(Object.keys(t.attributes))},"+Y5r":function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.styles=void 0;const o=i("1jGT");t.styles=(0,o.css)`
  .swiper-pagination {
    font-size: 0;
  }

  .swiper-pagination-bullet {
    opacity: 1;
  }

  .swiper-container {
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
  }
  .swiper-container-no-flexbox .swiper-slide {
    float: left;
  }
  .swiper-container-vertical > .swiper-wrapper {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-transition-property: -webkit-transform;
    transition-property: -webkit-transform;
    -o-transition-property: transform;
    transition-property: transform;
    transition-property: transform, -webkit-transform;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
  }
  .swiper-container-android .swiper-slide,
  .swiper-wrapper {
    -webkit-transform: translate3d(0px, 0, 0);
    transform: translate3d(0px, 0, 0);
  }
  .swiper-container-multirow > .swiper-wrapper {
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  .swiper-container-free-mode > .swiper-wrapper {
    -webkit-transition-timing-function: ease-out;
    -o-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
    margin: 0 auto;
  }
  .swiper-slide {
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    -webkit-transition-property: -webkit-transform;
    transition-property: -webkit-transform;
    -o-transition-property: transform;
    transition-property: transform;
    transition-property: transform, -webkit-transform;
  }
  .swiper-invisible-blank-slide {
    visibility: hidden;
  }
  /* Auto Height */
  .swiper-container-autoheight,
  .swiper-container-autoheight .swiper-slide {
    height: auto;
  }
  .swiper-container-autoheight .swiper-wrapper {
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-transition-property: height, -webkit-transform;
    transition-property: height, -webkit-transform;
    -o-transition-property: transform, height;
    transition-property: transform, height;
    transition-property: transform, height, -webkit-transform;
  }
  /* 3D Effects */
  .swiper-container-3d {
    -webkit-perspective: 1200px;
    perspective: 1200px;
  }
  .swiper-container-3d .swiper-wrapper,
  .swiper-container-3d .swiper-slide,
  .swiper-container-3d .swiper-slide-shadow-left,
  .swiper-container-3d .swiper-slide-shadow-right,
  .swiper-container-3d .swiper-slide-shadow-top,
  .swiper-container-3d .swiper-slide-shadow-bottom,
  .swiper-container-3d .swiper-cube-shadow {
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }
  .swiper-container-3d .swiper-slide-shadow-left,
  .swiper-container-3d .swiper-slide-shadow-right,
  .swiper-container-3d .swiper-slide-shadow-top,
  .swiper-container-3d .swiper-slide-shadow-bottom {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 10;
  }
  .swiper-container-3d .swiper-slide-shadow-left {
    background-image: -webkit-gradient(
      linear,
      right top,
      left top,
      from(rgba(0, 0, 0, 0.5)),
      to(rgba(0, 0, 0, 0))
    );
    background-image: -webkit-linear-gradient(
      right,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
    );
    background-image: -o-linear-gradient(
      right,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
    );
    background-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
    );
  }
  .swiper-container-3d .swiper-slide-shadow-right {
    background-image: -webkit-gradient(
      linear,
      left top,
      right top,
      from(rgba(0, 0, 0, 0.5)),
      to(rgba(0, 0, 0, 0))
    );
    background-image: -webkit-linear-gradient(
      left,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
    );
    background-image: -o-linear-gradient(
      left,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
    );
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
    );
  }
  .swiper-container-3d .swiper-slide-shadow-top {
    background-image: -webkit-gradient(
      linear,
      left bottom,
      left top,
      from(rgba(0, 0, 0, 0.5)),
      to(rgba(0, 0, 0, 0))
    );
    background-image: -webkit-linear-gradient(
      bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
    );
    background-image: -o-linear-gradient(
      bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
    );
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
    );
  }
  .swiper-container-3d .swiper-slide-shadow-bottom {
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 0.5)),
      to(rgba(0, 0, 0, 0))
    );
    background-image: -webkit-linear-gradient(
      top,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
    );
    background-image: -o-linear-gradient(
      top,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
    );
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
    );
  }
  /* IE10 Windows Phone 8 Fixes */
  .swiper-container-wp8-horizontal,
  .swiper-container-wp8-horizontal > .swiper-wrapper {
    -ms-touch-action: pan-y;
    touch-action: pan-y;
  }
  .swiper-container-wp8-vertical,
  .swiper-container-wp8-vertical > .swiper-wrapper {
    -ms-touch-action: pan-x;
    touch-action: pan-x;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    top: 50%;
    width: 27px;
    height: 44px;
    margin-top: -22px;
    z-index: 10;
    cursor: pointer;
    background-size: 27px 44px;
    background-position: center;
    background-repeat: no-repeat;
  }
  .swiper-button-prev.swiper-button-disabled,
  .swiper-button-next.swiper-button-disabled {
    opacity: 0.35;
    cursor: auto;
    pointer-events: none;
  }
  .swiper-button-prev,
  .swiper-container-rtl .swiper-button-next {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E");
    left: 10px;
    right: auto;
  }
  .swiper-button-next,
  .swiper-container-rtl .swiper-button-prev {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E");
    right: 10px;
    left: auto;
  }
  .swiper-button-prev.swiper-button-white,
  .swiper-container-rtl .swiper-button-next.swiper-button-white {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E");
  }
  .swiper-button-next.swiper-button-white,
  .swiper-container-rtl .swiper-button-prev.swiper-button-white {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E");
  }
  .swiper-button-prev.swiper-button-black,
  .swiper-container-rtl .swiper-button-next.swiper-button-black {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E");
  }
  .swiper-button-next.swiper-button-black,
  .swiper-container-rtl .swiper-button-prev.swiper-button-black {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E");
  }
  .swiper-button-lock {
    display: none;
  }
  .swiper-pagination {
    position: absolute;
    text-align: center;
    -webkit-transition: 300ms opacity;
    -o-transition: 300ms opacity;
    transition: 300ms opacity;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    z-index: 10;
  }
  .swiper-pagination.swiper-pagination-hidden {
    opacity: 0;
  }
  /* Common Styles */
  .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 10px;
    left: 0;
    width: 100%;
  }
  /* Bullets */
  .swiper-pagination-bullets-dynamic {
    overflow: hidden;
    font-size: 0;
  }
  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
    -webkit-transform: scale(0.33);
    -ms-transform: scale(0.33);
    transform: scale(0.33);
    position: relative;
  }
  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }
  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }
  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {
    -webkit-transform: scale(0.66);
    -ms-transform: scale(0.66);
    transform: scale(0.66);
  }
  .swiper-pagination-bullets-dynamic
    .swiper-pagination-bullet-active-prev-prev {
    -webkit-transform: scale(0.33);
    -ms-transform: scale(0.33);
    transform: scale(0.33);
  }
  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {
    -webkit-transform: scale(0.66);
    -ms-transform: scale(0.66);
    transform: scale(0.66);
  }
  .swiper-pagination-bullets-dynamic
    .swiper-pagination-bullet-active-next-next {
    -webkit-transform: scale(0.33);
    -ms-transform: scale(0.33);
    transform: scale(0.33);
  }
  .swiper-pagination-bullet {
    opacity: 0.2;
    display: inline-block;
    zoom: 1;
    width: 4px;
    height: 3px;
    margin: 0 2px;
    background: #e8e8e8;
  }
  button.swiper-pagination-bullet {
    border: none;
    margin: 0;
    padding: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  .swiper-pagination-clickable .swiper-pagination-bullet {
    cursor: pointer;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
    width: 11px;
    background: #108ee9;
  }
  .swiper-container-vertical > .swiper-pagination-bullets {
    right: 10px;
    top: 50%;
    -webkit-transform: translate3d(0px, -50%, 0);
    transform: translate3d(0px, -50%, 0);
  }
  .swiper-container-vertical
    > .swiper-pagination-bullets
    .swiper-pagination-bullet {
    margin: 6px 0;
    display: block;
  }
  .swiper-container-vertical
    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 8px;
  }
  .swiper-container-vertical
    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic
    .swiper-pagination-bullet {
    display: inline-block;
    -webkit-transition: 200ms top, 200ms -webkit-transform;
    transition: 200ms top, 200ms -webkit-transform;
    -o-transition: 200ms transform, 200ms top;
    transition: 200ms transform, 200ms top;
    transition: 200ms transform, 200ms top, 200ms -webkit-transform;
  }
  .swiper-container-horizontal
    > .swiper-pagination-bullets
    .swiper-pagination-bullet {
    // margin: 0 4px;
  }
  .swiper-container-horizontal
    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    white-space: nowrap;
  }
  .swiper-container-horizontal
    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic
    .swiper-pagination-bullet {
    -webkit-transition: 200ms left, 200ms -webkit-transform;
    transition: 200ms left, 200ms -webkit-transform;
    -o-transition: 200ms transform, 200ms left;
    transition: 200ms transform, 200ms left;
    transition: 200ms transform, 200ms left, 200ms -webkit-transform;
  }
  .swiper-container-horizontal.swiper-container-rtl
    > .swiper-pagination-bullets-dynamic
    .swiper-pagination-bullet {
    -webkit-transition: 200ms right, 200ms -webkit-transform;
    transition: 200ms right, 200ms -webkit-transform;
    -o-transition: 200ms transform, 200ms right;
    transition: 200ms transform, 200ms right;
    transition: 200ms transform, 200ms right, 200ms -webkit-transform;
  }
  /* Progress */
  .swiper-pagination-progressbar {
    background: rgba(0, 0, 0, 0.25);
    position: absolute;
  }
  .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
    background: #007aff;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: left top;
    -ms-transform-origin: left top;
    transform-origin: left top;
  }
  .swiper-container-rtl
    .swiper-pagination-progressbar
    .swiper-pagination-progressbar-fill {
    -webkit-transform-origin: right top;
    -ms-transform-origin: right top;
    transform-origin: right top;
  }
  .swiper-container-horizontal > .swiper-pagination-progressbar,
  .swiper-container-vertical
    > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {
    width: 100%;
    height: 4px;
    left: 0;
    top: 0;
  }
  .swiper-container-vertical > .swiper-pagination-progressbar,
  .swiper-container-horizontal
    > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {
    width: 4px;
    height: 100%;
    left: 0;
    top: 0;
  }
  .swiper-pagination-white .swiper-pagination-bullet-active {
    background: #ffffff;
  }
  .swiper-pagination-progressbar.swiper-pagination-white {
    background: rgba(255, 255, 255, 0.25);
  }
  .swiper-pagination-progressbar.swiper-pagination-white
    .swiper-pagination-progressbar-fill {
    background: #ffffff;
  }
  .swiper-pagination-black .swiper-pagination-bullet-active {
    background: #000000;
  }
  .swiper-pagination-progressbar.swiper-pagination-black {
    background: rgba(0, 0, 0, 0.25);
  }
  .swiper-pagination-progressbar.swiper-pagination-black
    .swiper-pagination-progressbar-fill {
    background: #000000;
  }
  .swiper-pagination-lock {
    display: none;
  }
  /* Scrollbar */
  .swiper-scrollbar {
    border-radius: 10px;
    position: relative;
    -ms-touch-action: none;
    background: rgba(0, 0, 0, 0.1);
  }
  .swiper-container-horizontal > .swiper-scrollbar {
    position: absolute;
    left: 1%;
    bottom: 3px;
    z-index: 50;
    height: 5px;
    width: 98%;
  }
  .swiper-container-vertical > .swiper-scrollbar {
    position: absolute;
    right: 3px;
    top: 1%;
    z-index: 50;
    width: 5px;
    height: 98%;
  }
  .swiper-scrollbar-drag {
    height: 100%;
    width: 100%;
    position: relative;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    left: 0;
    top: 0;
  }
  .swiper-scrollbar-cursor-drag {
    cursor: move;
  }
  .swiper-scrollbar-lock {
    display: none;
  }
  .swiper-zoom-container {
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
  }
  .swiper-zoom-container > img,
  .swiper-zoom-container > svg,
  .swiper-zoom-container > canvas {
    max-width: 100%;
    max-height: 100%;
    -o-object-fit: contain;
    object-fit: contain;
  }
  .swiper-slide-zoomed {
    cursor: move;
  }
  /* Preloader */
  .swiper-lazy-preloader {
    width: 42px;
    height: 42px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -21px;
    margin-top: -21px;
    z-index: 10;
    -webkit-transform-origin: 50%;
    -ms-transform-origin: 50%;
    transform-origin: 50%;
    -webkit-animation: swiper-preloader-spin 1s steps(12, end) infinite;
    animation: swiper-preloader-spin 1s steps(12, end) infinite;
  }
  .swiper-lazy-preloader:after {
    display: block;
    content: '';
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
    background-position: 50%;
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .swiper-lazy-preloader-white:after {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
  }
  @-webkit-keyframes swiper-preloader-spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes swiper-preloader-spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  /* a11y */
  .swiper-container .swiper-notification {
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    opacity: 0;
    z-index: -1000;
  }
  .swiper-container-fade.swiper-container-free-mode .swiper-slide {
    -webkit-transition-timing-function: ease-out;
    -o-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  .swiper-container-fade .swiper-slide {
    pointer-events: none;
    -webkit-transition-property: opacity;
    -o-transition-property: opacity;
    transition-property: opacity;
  }
  .swiper-container-fade .swiper-slide .swiper-slide {
    pointer-events: none;
  }
  .swiper-container-fade .swiper-slide-active,
  .swiper-container-fade .swiper-slide-active .swiper-slide-active {
    pointer-events: auto;
  }
  .swiper-container-cube {
    overflow: visible;
  }
  .swiper-container-cube .swiper-slide {
    pointer-events: none;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    z-index: 1;
    visibility: hidden;
    -webkit-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0;
    width: 100%;
    height: 100%;
  }
  .swiper-container-cube .swiper-slide .swiper-slide {
    pointer-events: none;
  }
  .swiper-container-cube.swiper-container-rtl .swiper-slide {
    -webkit-transform-origin: 100% 0;
    -ms-transform-origin: 100% 0;
    transform-origin: 100% 0;
  }
  .swiper-container-cube .swiper-slide-active,
  .swiper-container-cube .swiper-slide-active .swiper-slide-active {
    pointer-events: auto;
  }
  .swiper-container-cube .swiper-slide-active,
  .swiper-container-cube .swiper-slide-next,
  .swiper-container-cube .swiper-slide-prev,
  .swiper-container-cube .swiper-slide-next + .swiper-slide {
    pointer-events: auto;
    visibility: visible;
  }
  .swiper-container-cube .swiper-slide-shadow-top,
  .swiper-container-cube .swiper-slide-shadow-bottom,
  .swiper-container-cube .swiper-slide-shadow-left,
  .swiper-container-cube .swiper-slide-shadow-right {
    z-index: 0;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .swiper-container-cube .swiper-cube-shadow {
    position: absolute;
    left: 0;
    bottom: 0px;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.6;
    -webkit-filter: blur(50px);
    filter: blur(50px);
    z-index: 0;
  }
  .swiper-container-flip {
    overflow: visible;
  }
  .swiper-container-flip .swiper-slide {
    pointer-events: none;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    z-index: 1;
  }
  .swiper-container-flip .swiper-slide .swiper-slide {
    pointer-events: none;
  }
  .swiper-container-flip .swiper-slide-active,
  .swiper-container-flip .swiper-slide-active .swiper-slide-active {
    pointer-events: auto;
  }
  .swiper-container-flip .swiper-slide-shadow-top,
  .swiper-container-flip .swiper-slide-shadow-bottom,
  .swiper-container-flip .swiper-slide-shadow-left,
  .swiper-container-flip .swiper-slide-shadow-right {
    z-index: 0;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .swiper-container-coverflow .swiper-wrapper {
    /* Windows 8 IE 10 fix */
    -ms-perspective: 1200px;
  }
`},JfAs:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=i("1jGT");class e extends o.LitElement{render(){return(0,o.html)`<slot></slot>`}}t.default=e},"+XWL":function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=i("2GZr"),e=i("1jGT"),r=i("A/F/"),s=i("li9Z"),l=o.__importDefault(i("BjK/")),a=o.__importDefault(i("aYl2")),n=i("O9ik"),c=i("+Y5r");let u=0;class d extends e.LitElement{constructor(){super(),this.swiperId=u++,this.elementChildren=[],this.swiper=null,this.swiperWrapper=null,this.updating=!1,this.firstUpdated=()=>o.__awaiter(this,void 0,void 0,function*(){this.overwriteDomOperation();try{yield this.loadScript()}catch(w){console.error(w);return}const h=this.querySelector(`.tiga-swiper-${this.swiperId} > .swiper-container`),m={pagination:{el:this.querySelector(`.tiga-swiper-${this.swiperId} > .swiper-container > .swiper-pagination`)},direction:this[n.properties.VERTICAL]?"vertical":"horizontal",loop:this[n.properties.CIRCULAR],initialSlide:this[n.properties.CURRENT],threshold:5,speed:this[n.properties.DURATION],observer:!0,touchStartPreventDefault:!1,touchStartForcePreventDefault:!1,allowTouchMove:!this[n.properties.DISABLE_TOUCH],touchAngle:this[n.properties.TOUCH_ANGLE],on:{transitionEnd:()=>{const w=new CustomEvent("animationEnd",{detail:{current:this.swiper&&this.swiper.realIndex||0,source:""},bubbles:!0});this.dispatchEvent(w)},slideChangeTransitionStart:()=>{if(!this.swiper||!this.swiper.initialized)return;const w=this.swiper.$wrapperEl,_=this.swiper.params;w.children("."+_.slideClass+"."+_.slideDuplicateClass).each(function(){const O=this.getAttribute("data-swiper-slide-index");this.innerHTML=w.children("."+_.slideClass+'[data-swiper-slide-index="'+O+'"]:not(.'+_.slideDuplicateClass+")").html()})},slideChangeTransitionEnd:()=>{if(!this.swiper||!this.swiper.initialized)return;const w=new CustomEvent("change",{detail:{current:this.swiper.realIndex,source:""},bubbles:!0});this.dispatchEvent(w)},observerUpdate:w=>{this.updating||(this.updating=!0,(w.addedNodes.length>0||w.removedNodes.length>0)&&this[n.properties.CIRCULAR]&&(this.swiper.loopDestroy(),this.swiper.loopCreate()),setTimeout(()=>this.updating=!1,100))}}};this[n.properties.SWIPE_RATIO]&&(m.touchRatio=this[n.properties.SWIPE_RATIO]),this[n.properties.AUTOPLAY]&&(m.autoplay={delay:this[n.properties.INTERVAL],disableOnInteraction:!1}),this.swiper=new window.Swiper(h,m),this.observeSlideWrapper()}),this.observeSlideWrapper=()=>{var h;const g=(h=this.swiper.$wrapperEl)===null||h===void 0?void 0:h[0];g&&(this.slideWrapperObserver=new MutationObserver(this.handleAutoPlayListen),this.slideWrapperObserver.observe(g,{childList:!0}))},this.handleAutoPlayListen=()=>{var h;const g=((h=this.swiperWrapper)===null||h===void 0?void 0:h.querySelectorAll(".swiper-slide"))||[];this[n.properties.CIRCULAR]&&g.length===3&&this[n.properties.AUTOPLAY]?this.swiper.autoplay&&this.swiper.autoplay.stop():this[n.properties.AUTOPLAY]&&(this.swiper.params.autoplay.disableOnInteraction===!0&&(this.swiper.params.autoplay.disableOnInteraction=!1),this.swiper.params.autoplay.delay=this[n.properties.INTERVAL],this.swiper.autoplay&&this.swiper.autoplay.start())},this.loadScript=()=>new Promise((h,g)=>{if(window.Swiper){h("");return}const m="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.2/js/swiper.min.js",w=(0,l.default)(window.$MOR_APP_CONFIG,"components.swiper.cdnUrl",m),_=document.createElement("script");_.src=w,_.onload=()=>h(""),_.onerror=()=>g(new Error("failed to load swiper")),document.getElementsByTagName("head")[0].appendChild(_)}),this.isElementNode=h=>h&&h.nodeType===1,this.initProperties()}static get properties(){return{[n.properties.INDICATOR_DOTS]:{converter:a.default,attribute:n.attributes.INDICATOR_DOTS},[n.properties.INDICATOR_COLOR]:{type:String,attribute:n.attributes.INDICATOR_COLOR},[n.properties.INDICATOR_ACTIVE_COLOR]:{type:String,attribute:n.attributes.INDICATOR_ACTIVE_COLOR},[n.properties.AUTOPLAY]:{converter:a.default,attribute:n.attributes.AUTOPLAY},[n.properties.CURRENT]:{type:Number,attribute:n.attributes.CURRENT},[n.properties.DURATION]:{type:Number,attribute:n.attributes.DURATION},[n.properties.INTERVAL]:{type:Number,attribute:n.attributes.INTERVAL},[n.properties.CIRCULAR]:{converter:a.default,attribute:n.attributes.CIRCULAR},[n.properties.VERTICAL]:{converter:a.default,attribute:n.attributes.VERTICAL},[n.properties.PREVIOUS_MARGIN]:{type:String,attribute:n.attributes.PREVIOUS_MARGIN},[n.properties.NEXT_MARGIN]:{type:String,attribute:n.attributes.NEXT_MARGIN},[n.properties.CLASS]:{type:String,attribute:n.attributes.CLASS},[n.properties.DISABLE_TOUCH]:{converter:a.default,attribute:n.attributes.DISABLE_TOUCH},[n.properties.TOUCH_ANGLE]:{type:Number,attribute:n.attributes.TOUCH_ANGLE},[n.properties.SWIPE_RATIO]:{type:Number,attribute:n.attributes.SWIPE_RATIO}}}initProperties(){this[n.properties.INDICATOR_DOTS]=!1,this[n.properties.INDICATOR_COLOR]="rgba(0,0,0,.3)",this[n.properties.INDICATOR_ACTIVE_COLOR]="#108ee9",this[n.properties.AUTOPLAY]=!1,this[n.properties.CURRENT]=0,this[n.properties.DURATION]=500,this[n.properties.INTERVAL]=5e3,this[n.properties.CIRCULAR]=!1,this[n.properties.VERTICAL]=!1,this[n.properties.DISABLE_TOUCH]=!1,this[n.properties.TOUCH_ANGLE]=45}createRenderRoot(){return this}connectedCallback(){this.elementChildren=Array.from(this.children),this.elementChildren.forEach(h=>h.classList.add("swiper-slide")),super.connectedCallback()}overwriteDomOperation(){this.swiperWrapper=this.querySelector(`.tiga-swiper-${this.swiperId} > .swiper-container > .swiper-wrapper`),this.appendChild=h=>{if(this.isElementNode(h))return h.classList.add("swiper-slide"),this.swiperWrapper.appendChild(h)},this.insertBefore=(h,g)=>{if(!(!this.isElementNode(h)||!this.isElementNode(g)))return h.classList.add("swiper-slide"),this.swiperWrapper.insertBefore(h,g)},this.replaceChild=(h,g)=>{if(!(!this.isElementNode(h)||!this.isElementNode(g)))return h.classList.add("swiper-slide"),this.swiperWrapper.replaceChild(h,g)},this.removeChild=h=>{if(this.isElementNode(h))return this.swiperWrapper.removeChild(h)}}updated(h){h.has(n.properties.AUTOPLAY)&&h.get(n.properties.AUTOPLAY)!==void 0&&this.watchAutoPlay(),h.has(n.properties.DURATION)&&h.get(n.properties.DURATION)!==void 0&&this.watchDuration(),h.has(n.properties.CURRENT)&&h.get(n.properties.CURRENT)!==void 0&&this.watchCurrent(),h.has(n.properties.INTERVAL)&&h.get(n.properties.INTERVAL)!==void 0&&this.watchInterval()}watchAutoPlay(){var h;!(!((h=this.swiper)===null||h===void 0)&&h.autoplay)||this.swiper.autoplay.running===this[n.properties.AUTOPLAY]||(this[n.properties.AUTOPLAY]?(this.swiper.params.autoplay.disableOnInteraction===!0&&(this.swiper.params.autoplay.disableOnInteraction=!1),this.swiper.params.autoplay.delay=this[n.properties.INTERVAL],this.swiper.autoplay&&this.swiper.autoplay.start()):this.swiper.autoplay&&this.swiper.autoplay.stop())}watchCurrent(){!this.swiper||isNaN(this[n.properties.CURRENT])||(this[n.properties.CIRCULAR]?!this.swiper.isBeginning&&!this.swiper.isEnd&&this.swiper.slideToLoop(this[n.properties.CURRENT]):this.swiper.slideTo(this[n.properties.CURRENT]))}watchDuration(){this.swiper&&(this.swiper.params.speed=this[n.properties.DURATION])}watchInterval(){this.swiper&&(this.swiper.params.autoplay.delay=this[n.properties.INTERVAL])}disconnectedCallback(){var h;super.disconnectedCallback(),(h=this.slideWrapperObserver)===null||h===void 0||h.disconnect(),this.swiper.destroy(),this.swiper=null}render(){const h=this[n.properties.INDICATOR_DOTS],g=this[n.properties.INDICATOR_COLOR],m=this[n.properties.INDICATOR_ACTIVE_COLOR],w=`tiga-swiper-${this.swiperId}`,_={"swiper-pagination":!0,"swiper-pagination-hidden":!h,"swiper-pagination-bullets":h},[,O]=/^(\d+)(rpx|px)/.exec(this[n.properties.PREVIOUS_MARGIN])||[],[,R]=/^(\d+)(rpx|px)/.exec(this[n.properties.NEXT_MARGIN])||[],f=parseInt(O)||0,v=parseInt(R)||0,P={overflow:"visible",height:"inherit"};return this[n.properties.VERTICAL]?(P.marginTop=`${f}px`,P.marginBottom=`${v}px`):(P.width="auto",P.marginLeft=`${f}px`,P.marginRight=`${v}px`),(0,e.html)`
      <style>
        tiga-swiper {
          display: block;
        }
        ${c.styles}
          .tiga-swiper-${this.swiperId}
          > .swiper-container
          > .swiper-pagination
          > .swiper-pagination-bullet {
          background: ${g} !important;
        }
        .tiga-swiper-${this.swiperId}
          > .swiper-container
          > .swiper-pagination
          > .swiper-pagination-bullet-active {
          background: ${m} !important;
        }
        .tiga-swiper {
          overflow: hidden;
          height: inherit;
          width: inherit;
        }
      </style>
      <div class="${w} tiga-swiper">
        <div
          class="${this[n.properties.CLASS]} swiper-container"
          style=${(0,s.styleMap)(P)}
        >
          <div class="swiper-wrapper">${this.elementChildren}</div>
          <div class=${(0,r.classMap)(_)}></div>
        </div>
      </div>
    `}}o.__decorate([(0,e.internalProperty)()],d.prototype,"swiper",void 0),o.__decorate([(0,e.internalProperty)()],d.prototype,"swiperWrapper",void 0),o.__decorate([(0,e.internalProperty)()],d.prototype,"realIndex",void 0),o.__decorate([(0,e.internalProperty)()],d.prototype,"updating",void 0),o.__decorate([(0,e.internalProperty)()],d.prototype,"slideWrapperObserver",void 0),t.default=d},ii0u:function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getElementVisibleRatio=t.findScrollParent=void 0;const i=l=>{if(!l)return!1;let{tagName:a=""}=l;return a=a.toLowerCase(),!!(a&&(a==="tiga-page-host"||a==="body"))},o=l=>{if(!l)return;const a=l.parentNode;if(a&&!i(a)){const n=window.getComputedStyle(a),c=n["overflow-x"],u=n["overflow-y"];return c==="auto"||u==="auto"||c==="scroll"||u==="scroll"?a:(0,t.findScrollParent)(a)}else return a&&a.shadowRoot?a.shadowRoot.querySelector(".content"):a};t.findScrollParent=o;let e=0,r=0;const s=l=>{e||(e=document.body.clientHeight||document.documentElement.clientHeight),r||(r=document.body.clientWidth||document.documentElement.clientWidth);const a=0,n=c=>c.toFixed(2);if(!l)return a;try{const{width:c,height:u,top:d,right:p,bottom:h,left:g}=l.getBoundingClientRect();return d<=-u||p<=-c||h<=-u||g<=-c||d>=e||g>=r?a:d<=0?n(1+d/u):e-d>0&&e-d<=u?n((e-d)/u):h<=0?n(1+h/u):g<=0?n(1+g/u):r-g>0&&r-g<=c?n((r-g)/c):p<=0?n(1+p/u):1}catch(c){}return a};t.getElementVisibleRatio=s},pfqw:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=i("2GZr"),e=i("1jGT"),r=o.__importDefault(i("yWWw")),s=i("WItb"),l=i("vkip"),a=o.__importDefault(i("aYl2")),n=i("ii0u"),c=d=>(d.stopPropagation(),d.preventDefault(),!1);class u extends s.BaseElement{constructor(){super(...arguments),this["disable-scroll"]=!1,this.needBindAppear=!1,this.isFirstUpdatedInvoked=!1,this.isWatchTouchMove=!1,this.listener=null,this.scrollParent=null,this.lastTrigger=-1,this.hasAppeared=!1}static get styles(){return(0,e.css)`
      :host {
        display: block;
      }

      :host([hidden='true']),
      :host([hidden='hidden']) {
        display: none !important;
      }
    `}addEventListener(p,h,g){switch(super.addEventListener(p,h,g),p){case"disappear":case"firstappear":case"appear":{this.needBindAppear=!0,this.isFirstUpdatedInvoked&&this.watchTouchMove();break}}}firstUpdated(){(0,l.requestAnimationFrame)(()=>{this.isFirstUpdatedInvoked=!0,this.needBindAppear&&this.watchTouchMove()})}getScrollParent(){return this.scrollParent?this.scrollParent:this.scrollParent=(0,n.findScrollParent)(this)}watchTouchMove(){if(this.isWatchTouchMove)return;this.isWatchTouchMove=!0;const p=this.getScrollParent(),h=g=>{g>=.5&&this.lastTrigger!==1&&(this.lastTrigger=1,this.hasAppeared||(this.dispatchEvent(new CustomEvent("firstappear")),this.hasAppeared=!0),this.dispatchEvent(new CustomEvent("appear"))),g<.5&&this.lastTrigger===1&&(this.lastTrigger=0,this.dispatchEvent(new CustomEvent("disappear")))};(0,l.requestAnimationFrame)(()=>{const g=(0,n.getElementVisibleRatio)(this);h(g)}),this.listener=(0,r.default)(()=>{const g=(0,n.getElementVisibleRatio)(this);h(g)},66,{leading:!0,trailing:!0}),p.addEventListener("scroll",this.listener)}disconnectedCallback(){super.disconnectedCallback(),this.needBindAppear&&this.listener&&this.scrollParent&&this.scrollParent.removeEventListener("scroll",this.listener),this["disable-scroll"]&&this.releaseScroll()}preventScroll(){this.shadowRoot.addEventListener("touchmove",c,!1),this.shadowRoot.addEventListener("scroll",c,!1)}releaseScroll(){this.shadowRoot.removeEventListener("touchmove",c,!1),this.shadowRoot.removeEventListener("scroll",c,!1)}attributeChangedCallback(p,h,g){super.attributeChangedCallback(p,h,g),p==="disable-scroll"&&(this["disable-scroll"]?this.preventScroll():!this["disable-scroll"]&&h&&this.releaseScroll())}render(){const p=(0,e.css)`
      text-decoration: inherit;
    `;return(0,e.html)`<slot style="${p}"></slot>`}}o.__decorate([(0,e.property)({converter:a.default})],u.prototype,"disable-scroll",void 0),t.default=u},GKfT:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=i("a3LK"),e=i("QqsC"),r=i("/ATa"),s=i("Eyae"),l=i("CCtX"),a=i("0RQP"),n=20,c=[];function u(b){const C=(0,a.getAbsolutePath)(b),T=(0,a.getCustomUrl)(C).split("?");return{pathname:T[0],search:T[1]?`?${T[1]}`:""}}function d(){c.length&&setTimeout(()=>{var b,C;c.shift(),c.length&&(p[(b=c[0])===null||b===void 0?void 0:b.eventName].call(null,(C=c[0])===null||C===void 0?void 0:C.options),d())},n)}const p={navigateTo:R,navigateBack:f,redirectTo:v,switchTab:A,reLaunch:P};function h(b,C){return new Promise(T=>{c.push({eventName:b,options:C}),c.length===1&&(p[b].call(null,C),d()),T("")})}function g(b){return h("navigateTo",b)}function m(b){return h("navigateBack",b)}function w(b){return h("redirectTo",b)}function _(b){return h("switchTab",b)}function O(b){return h("reLaunch",b)}(0,o.appendApis)({navigateTo:g,navigateBack:m,redirectTo:w,switchTab:_,reLaunch:O},o.DEFAULT_API_NO_CONFLICT);function R(b){const{url:C}=b||{};if(!C){console.error("url \u4E0D\u80FD\u4E3A\u7A7A");return}setTimeout(()=>{r.history.push(u(C))})}function f(b){let{delta:C=1}=b||{};const T=(0,s.getCurrentPages)();if(T.length===1){window.history.back();return}C<1&&(C=1),C>=T.length&&(C=T.length-1);const E=C?T.length-C-1:T.length-2,I=T[E]||{};if(window.dispatchEvent(new CustomEvent("__tigaRouterChange",{detail:{action:"POP",delta:C,location:Object.assign({},I.__location)}})),C)for(let L=1;L<=C;L++)r.history.goBack()}function v(b){const{url:C}=b||{};if(!C){console.error("url \u4E0D\u80FD\u4E3A\u7A7A");return}r.history.replace(u(C))}function P(b){const{url:C}=b||{};if(!C){console.error("url \u4E0D\u80FD\u4E3A\u7A7A");return}const T=window.getCurrentPages().length;(0,l.batchUnloadPage)(T-1),w({url:C})}function A(b){const{url:C}=b||{};if(!C){console.error("url \u4E0D\u80FD\u4E3A\u7A7A");return}(0,l.unloadPageByCondition)(T=>!(0,e.isTabBarPage)(T.path)),g({url:C})}},X2uv:function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class i{constructor(){this._cache={}}set(e,r){this._cache[e]=r}get(e){return this._cache[e]}}t.default=new i},ftXJ:function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initLayout=void 0;function i(r){r||(o(),e())}t.initLayout=i;function o(){const r=document.createElement("div");r.classList.add("tiga-tabbar__container"),r.id="container";const s=document.createElement("div");s.classList.add("tiga-tabbar__panel");const l=document.createElement("div");l.id="app",l.classList.add("tiga_router"),s.appendChild(l),r.appendChild(s),document.body.appendChild(r)}function e(){const r=document.createElement("style");r.type="text/css",r.innerHTML=`html, body {
    height: 100%;
  }
  #app {
    height: 100%;
  }
  tiga-page {
    min-height: 100%;
  }
  .tiga-tabbar__container {
    display: flex;
    height: 100%;
    flex-direction: column;
    overflow: hidden;
  }
  .tiga-tabbar__panel {
    flex: 1;
    position: relative;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  .tiga-page-wrap {
      height: 100%;
  }`,document.getElementsByTagName("head")[0].appendChild(r)}},QqsC:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isTabBarPage=t.cacheTabBarPath=t.TAB_BAR_PATH_CACHE_KEY=void 0;const e=i("2GZr").__importDefault(i("X2uv"));t.TAB_BAR_PATH_CACHE_KEY="tabBarPath";const r=n=>Array.isArray(n)&&n.length>0,s=n=>{if(!(typeof n=="object"&&r(n.items)))return;const{items:u}=n,d=[];u.forEach(p=>d.push(p.pagePath)),e.default.set(t.TAB_BAR_PATH_CACHE_KEY,d)};t.cacheTabBarPath=s;const l=n=>n[0]==="/"?n:`/${n}`,a=n=>{if(!n)return!1;const c=e.default.get(t.TAB_BAR_PATH_CACHE_KEY);return r(c)?c.some(u=>l(u)===l(n)):!1};t.isTabBarPage=a},"/ATa":function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setHistoryMode=t.history=t.mode=void 0;const o=i("3x/Y");function e(r,s){t.mode=r;const l={basename:s};t.mode==="hash"?t.history=(0,o.createHashHistory)(l):t.history=(0,o.createBrowserHistory)(l),window.__history=t.history}t.setHistoryMode=e},rGLq:function(y,t,i){"use strict";var o;o={value:!0},o=t.p7=void 0;var e=i("CCtX");Object.defineProperty(t,"p7",{enumerable:!0,get:function(){return e.createRouter}});var r=i("0RQP");o={enumerable:!0,get:function(){return r.getCustomUrl}};const s=i("0RQP");window.$getRoute=s.getRoute,window.$getPageId=s.getPageId},Eyae:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getCurPage=t.getCurrentPages=t.pageStack=void 0;const o=i("+d1X"),e=[];t.pageStack=new Proxy(e,{set(l,a,n){var c;const u=l.filter(d=>!!d);if(u.length){const d=document.getElementById((c=u[u.length-1])===null||c===void 0?void 0:c.pageId);d&&o.my.updateRootView(d)}return Reflect.set(l,a,n)}});function r(){return[...t.pageStack]}t.getCurrentPages=r;function s(){return t.pageStack[t.pageStack.length-1]||null}t.getCurPage=s,window.getCurrentPages=r},CCtX:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createRouter=t.tigaRouterChangeHandler=t.unloadPageByCondition=t.batchUnloadPage=void 0;const o=i("2GZr"),e=o.__importDefault(i("mXGw")),r=o.__importDefault(i("xARA")),s=o.__importDefault(i("xGNF"));i("GKfT");const l=i("ftXJ"),a=i("/ATa"),n=i("Eyae"),c=i("oWee"),u=i("J4GU"),d=i("0RQP");let p,h;function g(S){var x,k,N,z,B,j,F;const G=((x=S.router)===null||x===void 0?void 0:x.customRoutes)||{},V=[];for(let U=0;U<S.pages.length;U++){const H=(N=(k=S.routes)===null||k===void 0?void 0:k[U])!==null&&N!==void 0?N:{},Y=(0,d.addLeadingSlash)(H==null?void 0:H.path);U===0&&V.push({path:"/",action:H.loader}),G[Y]==="/"&&console.error("\u5B9A\u4E49\u8DEF\u7531\u4E0D\u80FD\u662F /\uFF0C\u5FC5\u987B\u5E26\u6709\u8DEF\u5F84\uFF0C\u4F8B/index"),V.push({path:G[Y]||Y,action:H.loader})}const X=new s.default(V);function W(U,H){X.resolve(U.pathname).then(Y=>{U.hash=window.location.hash,p={location:U,action:H};const Z=Y.default?Y.default:Y;H===u.Action.PUSH?(f((0,n.getCurPage)()),O(U,Z)):H===u.Action.REPLACE?(v((0,n.getCurPage)()),n.pageStack.pop(),O(U,Z)):H===u.Action.POP&&I({detail:{location:U,action:H,delta:1}},Z)})}W(a.history.location,u.Action.PUSH),(B=(z=window.getApp())===null||z===void 0?void 0:z.onLaunch)===null||B===void 0||B.call(z,(0,d.getRelaunchOptions)()),(F=(j=window.getApp())===null||j===void 0?void 0:j.onShow)===null||F===void 0||F.call(j,(0,d.getRelaunchOptions)()),a.history.listen(W)}function m(S){h=S}function w(){return h||(document==null?void 0:document.getElementById("app"))}const _=S=>{[...n.pageStack].forEach((k,N)=>S.pageId===k.pageId&&n.pageStack.splice(N,1)),n.pageStack.push(S)};function O(S,x){var k,N;const z=(0,d.getPageId)(S),B=document.getElementById(z);if(B){const j=n.pageStack.find(F=>F.pageId===z);_(j),(k=j==null?void 0:j.onShow)===null||k===void 0||k.call(j),B.style.display="block"}else{const j=document.createElement("div");j.classList.add("tiga-page-wrap"),j.id=z,(N=w())===null||N===void 0||N.append(j);const F=e.default.isValidElement(x)?x:e.default.createElement(x);r.default.render(F,document.getElementById(z))}}function R(S){if(S!=null){const x=document.getElementById(S.pageId);x&&(setTimeout(()=>{var k;return(k=S==null?void 0:S.onShow)===null||k===void 0?void 0:k.call(S)}),x.style.display="block")}}function f(S){var x;if(S!=null){const k=document.getElementById(S.pageId);k&&((x=S.onHide)===null||x===void 0||x.call(S),k.style.display="none")}}function v(S){var x;if(S!=null){const k=document.getElementById(S.pageId);k&&(r.default.unmountComponentAtNode(k),(x=k==null?void 0:k.parentNode)===null||x===void 0||x.removeChild(k))}}const P=S=>{n.pageStack.find(k=>k.pageId===S.pageId)?f(S):v(S)};function A(S){const x=n.pageStack.length-S;n.pageStack.splice(x>=0?x:0,S).forEach(P)}t.batchUnloadPage=A;function b(S){[...n.pageStack].forEach((k,N)=>{S(k)===!0&&(n.pageStack.splice(N,1),v(k))})}t.unloadPageByCondition=b;function C(S){const x=T(S.detail);switch(p.action){case u.Action.PUSH:n.pageStack.push(x);break;case u.Action.REPLACE:n.pageStack.push(x);default:break}}function T(S){const{location:x}=S;return delete S.location,Object.assign(Object.assign(Object.assign({},S),(0,d.getPathAndOptions)(p.location)),{pageId:(0,d.getPageId)(p.location),__location:x})}let E=!1;function I(S,x){const{action:k,delta:N}=S.detail||{};if(k==="POP"&&N&&!E){E=!0,p=S.detail,A(p.delta);const z=(0,d.getPageId)(p.location),B=n.pageStack.find(j=>j.pageId===z);B?(R(B),B.pageId!==(0,n.getCurPage)().pageId&&n.pageStack.push(B)):(p.action=u.Action.PUSH,A(1),O(location,x)),setTimeout(()=>{E=!1},200)}}t.tigaRouterChangeHandler=I;function L(){var S,x,k,N,z,B,j,F;document.hidden?((x=(S=window.getApp())===null||S===void 0?void 0:S.onHide)===null||x===void 0||x.call(S),(N=(k=(0,n.getCurPage)())===null||k===void 0?void 0:k.onHide)===null||N===void 0||N.call(k)):((B=(z=window.getApp())===null||z===void 0?void 0:z.onShow)===null||B===void 0||B.call(z,(0,d.getRelaunchOptions)()),(F=(j=(0,n.getCurPage)())===null||j===void 0?void 0:j.onShow)===null||F===void 0||F.call(j))}function M(){const S="__tigaRouterChange",x="tigaPageCreate";window.addEventListener(S,I,!1),window.addEventListener(x,C,!1),document.addEventListener("visibilitychange",L,!1)}function D(S,x){const{router:k}=S;m(x),(0,d.setCustomRoutes)(k==null?void 0:k.customRoutes),(0,d.setBaseName)(k==null?void 0:k.baseName),(0,d.setPages)(S.pages),(0,a.setHistoryMode)(k==null?void 0:k.mode,k==null?void 0:k.baseName),(0,l.initLayout)(x),(0,c.initTabBar)(S),g(S),M()}t.createRouter=D},oWee:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initTabBar=void 0;const o=i("QqsC"),e=i("0RQP");function r(s){var l,a,n,c,u,d,p,h;const{customTabBarKey:g="tabBarKey"}=window.$MOR_APP_CONFIG||{},m=((l=(0,e.getOptions)())===null||l===void 0?void 0:l[g])||"tabBar";if((0,o.cacheTabBarPath)(s.tabBar),!s[m])return;const w=document.createElement("tiga-tabbar");w.conf=s[m],w.conf.mode=(n=(a=s.router)===null||a===void 0?void 0:a.mode)!==null&&n!==void 0?n:"browser",w.conf.homePage=(c=s.pages)===null||c===void 0?void 0:c[0],w.conf.customRoutes=(d=(u=s.router)===null||u===void 0?void 0:u.customRoutes)!==null&&d!==void 0?d:{},w.conf.baseName=(h=(p=s.router)===null||p===void 0?void 0:p.baseName)!==null&&h!==void 0?h:"";const _=document.getElementById("container");_&&_.appendChild(w)}t.initTabBar=r},J4GU:function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Action=void 0;var i;(function(o){o.POP="POP",o.PUSH="PUSH",o.REPLACE="REPLACE"})(i=t.Action||(t.Action={}))},"0RQP":function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getAbsolutePath=t.getRelaunchOptions=t.getOriginUrl=t.getPageId=t.getRoute=t.getPathNameAndSearch=t.getQueryParams=t.getOptions=t.getPathAndOptions=t.removeLeadingSlash=t.addLeadingSlash=t.getCustomUrl=t.setPages=t.setCustomRoutes=t.setBaseName=void 0;const e=i("2GZr").__importDefault(i("BjK/")),r=i("/ATa"),s="__referrerInfo";let l,a={};const n=[];let c;function u(E){c=E||""}t.setBaseName=u;function d(E){for(const I in E)E.hasOwnProperty(I)&&n.push([(0,t.addLeadingSlash)(I),E[I]]);window.$customRoutes=n}t.setCustomRoutes=d;function p(E){l=E}t.setPages=p;const h=E=>{var I;const L=E.split("?",2);if(E=L[0],n){const M=(I=n.find(D=>D[0]===E))===null||I===void 0?void 0:I[1];M&&(E=M)}return L[1]?`${(0,t.addLeadingSlash)(E)}?${L[1]}`:(0,t.addLeadingSlash)(E)};t.getCustomUrl=h;const g=E=>E&&E[0]==="/"?E:`/${E}`;t.addLeadingSlash=g;const m=E=>E&&E[0]==="/"?E.substring(1):E;t.removeLeadingSlash=m;const w=E=>{const I=(0,t.getRoute)(E);return{route:I,path:I,options:(0,t.getOptions)(E)}};t.getPathAndOptions=w;const _=(E=window.location)=>{const I=O(E.search);return r.mode==="hash"?Object.assign(I,O(E.hash)):I};t.getOptions=_;function O(E){const I={},L=E.split("?");return L[1]&&L[1].split("&").forEach(M=>{const[D,S]=M.split("=");I[D]=S}),I}t.getQueryParams=O;const R=E=>{let I,L;if(r.mode==="hash"){const D=(E.hash||"#/").substr(1).split("?");I=D[0],L=D[1]}else{I=E.pathname,L=E.search.split("?")[1];const M=(0,e.default)(window.$MOR_APP_CONFIG,"router.formatSearch");typeof M=="function"&&(L=M(L))}return{pathName:f(I),search:L}};t.getPathNameAndSearch=R;function f(E){return v(E)?E.substr(c.length):E}function v(E){return c?E.toLowerCase().indexOf(c.toLowerCase())===0&&"/?#".indexOf(E.charAt(c.length))!==-1:!1}const P=(E=window.location)=>{var I;const{pathName:L}=(0,t.getPathNameAndSearch)(E),M=(n||window.$customRoutes).filter(([S,x])=>L===S||L===x),D=M.length?(I=M==null?void 0:M[0])===null||I===void 0?void 0:I[0]:L==="/"||L===""?l[0]:L;return(0,t.removeLeadingSlash)(D)};t.getRoute=P;const A=(E=window.location)=>(0,t.getOriginUrl)(E);t.getPageId=A;const b=E=>{const{search:I}=(0,t.getPathNameAndSearch)(E),L=(0,t.getRoute)(E);return I?`${L}?${I}`:L};t.getOriginUrl=b;const C=()=>{const E=localStorage.getItem(s);return a=E&&JSON.parse(E)||a,localStorage.removeItem(s),{query:(0,t.getOptions)(),referrerInfo:a}};t.getRelaunchOptions=C;const T=E=>{var I;const L=(I=getCurrentPages().pop())===null||I===void 0?void 0:I.route;if(L&&E[0]==="."){const M=L.split("/"),D=E.split("/"),S=[...D];return D.forEach((x,k)=>{x==="."&&(M.pop(),S.shift()),x===".."&&(k===0?M.splice(-2,2):M.pop(),S.shift())}),M.concat(S).join("/")}return E};t.getAbsolutePath=T},wpVW:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Block=void 0;const e=i("2GZr").__importDefault(i("mXGw"));class r extends e.default.PureComponent{render(){return this.props.children||!1}}t.Block=r},"1THn":function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Slot=void 0;const o=i("2GZr"),e=o.__importDefault(i("ycWC")),r=o.__importDefault(i("BjK/")),s=o.__importDefault(i("mXGw"));class l extends s.default.PureComponent{componentDidMount(){const n=(0,r.default)(this.props,"slots._owner._instance");n&&typeof n._bindEvents=="function"&&n._bindEvents()}render(){const{name:n,slots:c}=this.props;if(!c)return this.props.children||!1;const u=[];return(0,e.default)([c]).forEach(d=>{if(typeof d=="function"){if(d._name===n||!n&&!d._name){const p=this.props.$scopeKeys,h={};p&&p.length>0&&p.forEach(g=>h[g]=this.props[g]),u.push(d(h))}}else try{d.props._slot===n&&u.push(d)}catch(p){n||u.push(d)}}),u.length===0?this.props.children||!1:u.length===1?u[0]:u}}t.Slot=l},"2qkm":function(__unused_webpack_module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.parseDatasetValue=exports.toJsonString=void 0;function toJsonString(y,t=!1){if(t)switch(typeof y){case"string":return y;case"object":return y==null?"$.nul()":`$.value(${JSON.stringify(y)})`;case"function":return"";case"undefined":return"$.undefined()";case"bigint":case"number":case"boolean":return`$.value(${y})`;default:return`$.value(${y})`}else return typeof y=="object"?JSON.stringify(y):y}exports.toJsonString=toJsonString;const DataSetParser={nul(){return null},undefined(){},value(y){return y}},DATA_SET_PARSER_REGEXP=/^\$\.(value|nul|undefined)\(/;function parseDatasetValue(str){const $=DataSetParser;try{return typeof str=="string"&&DATA_SET_PARSER_REGEXP.test(str)?eval(str):str}catch(y){return str}}exports.parseDatasetValue=parseDatasetValue},Graf:function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.axmlApi=void 0;function i(o){return{template(e,r,s){return o.renderTemplate(r,s,e)}}}t.axmlApi=i},mnFq:function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.registEvents=t.bindThis=t.getEvent=void 0;function i(r,s,l=!1){if(!r)return;const{$reactComp:a}=s,n=a.getCompMethod(r);return l?function(c){c.stopPropagation&&c.stopPropagation(),n(c)}:n}t.getEvent=i;function o(r,s){const l=function(){return s.apply(r,arguments)};return s.name&&(l.__name__=s.name),l}t.bindThis=o;function e(r,s,l){const{$reactComp:a}=s;a.registEvents(r,l)}t.registEvents=e},u03r:function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class i{constructor(l){this.value=l}map(l){return Object.keys(this.value).map(a=>l(this.value[a],a))}}class o{constructor(l){this.value=l}map(){return[]}}class e{constructor(l){this.value=l}map(l){return[...this.value].map(([a,n])=>l(n,a))}}function r(s){if(!s)return[];if(s instanceof Array)return s;let l;switch(typeof s){case"number":{if(l=[],Number.isFinite(s))for(let a=1;a<=s;a++)l.push(a);break}case"object":{Map&&s instanceof Map?l=new e(s):Set&&s instanceof Set?l=Array.from(s):l=new i(s);break}default:l=new o(s)}return l}t.default=r},"Exo+":function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});function i(o,e){if(typeof o!="string")throw new Error("ref \u5FC5\u987B\u662F\u4EE5\u5B57\u7B26\u4E32\u5F62\u5F0F\u7684\u5F15\u7528");{const{$reactComp:r}=e;return function(s){s&&!s.__hasRef__&&r.onRef(s,o)&&(s.__hasRef__=!0)}}}t.default=i},NR5l:function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.autoSyncRootFontSize=t.rpxToRem=t.setRootFontSizeForRem=void 0;let i=2*16;function o(l){window.document.documentElement.style.setProperty("font-size",l*window.document.documentElement.clientWidth/375+"px")}function e(l){i=2*l,o(l),window.addEventListener("resize",()=>{o(l)})}t.setRootFontSizeForRem=e;function r(l){return`${l/i}rem`}t.rpxToRem=r,window.$rpxToRem=r;function s(l=!0){var a,n,c;const u=(n=(a=window==null?void 0:window.document)===null||a===void 0?void 0:a.documentElement)===null||n===void 0?void 0:n.style,d=String(((c=u==null?void 0:u.getPropertyValue)===null||c===void 0?void 0:c.call(u,"font-size"))||"").trim().replace(/([0-9]+).+/,"$1");d&&(i=Number(d)*375/window.document.documentElement.clientWidth*2),l&&window.addEventListener("resize",()=>{s(!1)})}t.autoSyncRootFontSize=s},NcbD:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createStyle=void 0;const o=i("NR5l");function e(r){if(typeof r=="string"){const s={},l=r.split(";").map(a=>a.trim()).filter(a=>a);l.forEach((a,n)=>{const c=a.split(":").map(g=>g.trim()),[u,...d]=c,p=d&&d.join(":");if(!u||u.endsWith("-"))throw new Error('parse style error: "'+a+'" in '+r);const h=u.startsWith("--")?u:u.replace(/[-\s]+(.)?/g,(g,m)=>m?m.toUpperCase():"");c.length>=2&&(n<l.length-1&&l[n+1]&&l[n+1].split(":").length<2?s[h]=`${p};${l[n+1]}`:s[h]=p)}),r=s}if(typeof r=="object")for(const s in r){const l=r[s];if(typeof l=="string"&&l.indexOf("rpx")>0){const a=/(\d*\.?\d+)rpx/g;let n=l,c;do c=a.exec(n),c&&(n=n.substring(0,c.index)+(0,o.rpxToRem)(parseFloat(c[0]))+n.substring(c.index+c[0].length));while(c);r[s]=n}}else return{};return r}t.createStyle=e},v95d:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=i("4vu8"),e="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678oOLl9gqVvUuI1";function r(l){return l.split("").map(a=>e.indexOf(a)>=0?a:"$").join("")}class s{constructor(){this.templates={}}addAll(a){Object.keys(a).forEach(n=>{n.startsWith("template")&&(this.templates[n]=a[n])})}renderTemplate(a,n,c){if(!a)throw new Error("name \u4E0D\u80FD\u4E3A\u7A7A");if(typeof a!="string")throw new Error("name \u5FC5\u987B\u662F\u5B57\u7B26\u4E32");if(n&&typeof n!="object")throw new Error("data \u5FC5\u987B\u662F\u5BF9\u8C61. template name="+a);const u=this.templates[`template${r(a)}`];if(u){const d=n||{};return!d.$reactComp&&c&&c instanceof o.KBComponent&&(d.$reactComp=c,d.$root=c.componentConfig,d.$id=c.$id),u.call(d.$root,d)}else console.warn("\u6A21\u677F\u4E0D\u5B58\u5728:"+a);return null}}t.default=s},"20uZ":function(y,t,i){"use strict";var o;o={value:!0};const e=i("2GZr"),r=e.__importDefault(i("mXGw")),s=i("wpVW"),l=i("1THn"),a=i("2qkm"),n=i("Graf"),c=i("mnFq"),u=e.__importDefault(i("u03r")),d=e.__importDefault(i("Exo+")),p=i("NR5l"),h=i("NcbD"),g=e.__importDefault(i("v95d"));i("LHo6");const m=i("T5Yb");t.Z={Component:m.Component,Page:m.Page,createTemplateManager:function(){return new g.default},Slot:l.Slot,Block:s.Block,slotScope(w,_){return _&&(w._name=_),w},createStyle:h.createStyle,getEvent:c.getEvent,bindThis:c.bindThis,registEvents:c.registEvents,ref:d.default,mergeConfig(w,_){return Object.assign(Object.assign(Object.assign({},w),_),{window:Object.assign(Object.assign({},w.window),_.window)})},toJsonString:a.toJsonString,getString(w){try{return w===void 0||w==null?"":typeof w=="function"||r.default.isValidElement(w)?w:w.toString()}catch(_){return console.log(_),""}},getForValue:u.default,axmlApi:n.axmlApi,setRootFontSizeForRem:p.setRootFontSizeForRem,autoSyncRootFontSize:p.autoSyncRootFontSize}},LHo6:function(){let y;function t(o){y=o}function i(){window.App=t,window.getApp=function(){return y}}if(!window.App)i();else{const o=window.App;typeof o=="function"&&o.name===App.name||i()}window.onerror=function(o){const{onError:e}=y||{};e&&e.call(y,o)},window.addEventListener("unhandledrejection",o=>{const{onUnhandledRejection:e}=y||{};e&&e.call(y,o)})},Pjr5:function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});function i(e){const r=e.mixins;return r&&r instanceof Array&&(r.forEach(s=>{if(typeof s=="object")for(const l in s){const a=s[l];switch(l){case"data":{e.data=Object.assign(Object.assign({},a),e.data);break}case"props":{e.props=Object.assign(Object.assign({},a),e.props);break}case"methods":{e.methods=Object.assign(Object.assign({},a),e.methods);break}case"didUnmount":case"didUpdate":case"deriveDataFromProps":case"didMount":case"onInit":{o(e,l,a);break}default:{e[l]=a;break}}}}),delete e.mixins),e}t.default=i;function o(e,r,s){if(!s||typeof s!="function")return;const l=e[r];l&&typeof l=="function"?e[r]=function(...a){l.call(this,...a),s.call(this,...a)}:e[r]=s}},"4vu8":function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.KBComponent=void 0;const o=i("2GZr"),e=o.__importDefault(i("hjl+")),r=o.__importDefault(i("BjK/")),s=o.__importDefault(i("WPPq")),l=o.__importDefault(i("33eJ")),a=o.__importDefault(i("x/2t")),n=o.__importDefault(i("mXGw")),c=o.__importDefault(i("xARA")),u=o.__importDefault(i("V/Pp")),d=i("lojF"),p=i("aYgP"),h=i("neGa"),g=o.__importDefault(i("wzRQ")),m="__oid__";let w=0;function _(R,f){return R===f}class O extends n.default.PureComponent{constructor(f,v,P){super(f),this.cachePreDataAction={},this.updateDataQueue=[],this.options=P||{},this.state={deriveDataFromProps:this.deriveDataFromProps.bind(this),prevProps:(0,e.default)(v.props||{}),cachePrePropsAction:{}},v.props=v.props||{},w++,this.$id=w,this._isMounted=!1,this.forceResetConfig(v),this.onInit(),this.eventsInfo={},this._raiseEvent=this._raiseEvent.bind(this),window!=null&&window.$__USING_RAX__||(this.componentWillReceiveProps=void 0),P.ownerComponentId&&g.default.set(P.ownerComponentId,this.componentConfig)}forceResetConfig(f){this.options.isComponent&&(f.$id=this.$id),this.$defaultProps=(0,e.default)(f.props);const v=this.options.isComponent&&typeof f.onError=="function";this.componentConfig=v?(0,p.catchComponentMethodsError)(f,f.onError):f,f.methods&&(Object.keys(f.methods).forEach(A=>{typeof f.methods[A]=="function"&&(f[A]=f.methods[A])}),delete f.methods),this.mergePropsToComponent(this.mergeProps(this.props));for(const A in this.componentConfig){const b=this.componentConfig[A];typeof b=="function"&&(this.componentConfig[A]=this._bindMethod(b))}this.componentConfig.data=this.componentConfig.data||{};for(const A in this.componentConfig.data){const b=this.componentConfig.data[A];typeof b=="function"&&(this.componentConfig.data[A]=this._bindMethod(b))}this.componentConfig.refs={};const P=this;this.componentConfig.setData=function(A,b){const C=(T,E)=>{let I=!1;Object.keys(T).forEach(L=>{const M=(0,r.default)(T,L);M!==void 0&&!_(M,(0,r.default)(this.data,L))&&(I=!0,Object.prototype.hasOwnProperty.call(this.data,L)&&(P.cachePreDataAction[L]=(0,r.default)(this.data,L)),(0,l.default)(this.data,L,M))}),I&&P._isMounted?P.forceUpdate(E):E&&E()};if(!P._isMounted)return C(A,b);P.updateDataQueue.push({data:A,callback:b}),setTimeout(()=>{const T=(0,d.combineValue)(P.updateDataQueue),E=(0,d.mergeExecution)(P.updateDataQueue);P.updateDataQueue=[],C(T,E)})}.bind(this.componentConfig),this.componentConfig.$spliceData=function(A,b){const C={};Object.keys(A).forEach(T=>{const E=A[T],I=(0,r.default)(this.data,T);if(!Array.isArray(I)||!Array.isArray(E)){console.warn(`${T}: \u7528\u6CD5\u9519\u8BEF\uFF0C\u8BF7\u68C0\u67E5\u53C2\u6570\u6216\u8005\u5F53\u524D this.data \u7684\u503C`);return}const L=[...I];Array.prototype.splice.apply(L,E),C[T]=L}),this.setData(C,b)}.bind(this.componentConfig),this.componentConfig._updateProp=function(A,b){if(this.props._onUpdateProp){const C=this.props._twoWayBindingPropPair[A];this.props._onUpdateProp(C,b)}},this.componentConfig.route=window.$getRoute&&window.$getRoute(),this.componentConfig.pageId=window.$getPageId&&window.$getPageId(),this.componentConfig.createIntersectionObserver=A=>(0,h.mountIntersectionObserver)(A,this.getRoot()),this.options.isComponent&&(this.componentConfig.selectOwnerComponent=()=>{const{props:A}=this.componentConfig;if(A&&A[m]){const b=g.default.get(A[m]);if(b)return b}console.warn("selectOwnerComponent: \u672A\u83B7\u53D6\u5230\u5F53\u524D\u5143\u7D20\u7684\u7236\u5143\u7D20\u5B9E\u4F8B\uFF0C\u8BF7\u786E\u8BA4\u5F53\u524D\u662F\u5426\u5F00\u542F web.appConfig.apis.enableSelectOwnerComponent")}),this.updatePageConfig()}updatePageConfig(){if(!window.getCurrentPages)return;const f=getCurrentPages()||[],v=f[f.length-1];!v||v.route!==this.componentConfig.route||(this.options.isComponent?this.componentConfig.$page=new Proxy(v,{get(P,A){return Reflect.get(P,A)},set(P,A,b){return v&&v.__tigaPage&&v.__tigaPage.componentConfig&&(v.__tigaPage.componentConfig[A]=b),Reflect.set(P,A,b)}}):v.pageId===this.componentConfig.pageId&&Object.assign(v,this.componentConfig))}onInit(){this.componentConfig.onInit&&this.componentConfig.onInit()}componentWillReceiveProps(f){if(!(window!=null&&window.$__USING_RAX__))return;const v=this.state;let P=!1;return Object.keys(f).forEach(A=>{const b=(0,r.default)(f,A),C=(0,r.default)(v.prevProps,A);b!==void 0&&!(0,s.default)(b,C)&&(P=!0,typeof C!="undefined"&&(v.cachePrePropsAction[A]=C),(0,l.default)(v.prevProps,A,b))}),v.deriveDataFromProps(f),P?Object.assign({},v.prevProps):null}static getDerivedStateFromProps(f,v){let P=!1;return Object.keys(f).forEach(A=>{const b=(0,r.default)(f,A),C=(0,r.default)(v.prevProps,A);b!==void 0&&!(0,s.default)(b,C)&&(P=!0,typeof C!="undefined"&&(v.cachePrePropsAction[A]=C),(0,l.default)(v.prevProps,A,b))}),v.deriveDataFromProps(f),P?Object.assign({},v.prevProps):null}deriveDataFromProps(f){const v=this.mergeProps(f);this.state.prevProps=(()=>{const P=Object.keys(this.state.cachePrePropsAction),A=Object.assign(Object.assign({},v),this.state.prevProps);return P.forEach(b=>{const C=v[b];typeof C=="object"&&(A[b]=(0,e.default)(C))}),A})(),this.componentConfig.deriveDataFromProps&&this.componentConfig.deriveDataFromProps(v),this.mergePropsToComponent(v),requestAnimationFrame(()=>this.updatePageConfig())}mergeProps(f){const v=this.hasPropsChanged(f)?Object.assign({},this.componentConfig.props):this.componentConfig.props||f;return Object.keys(f).forEach(P=>{if(P!=="children"){const A=f[P];A!==void 0&&(v[P]=A)}}),delete v.children,v}hasPropsChanged(f){let v=!1;return Object.keys(f).forEach(P=>{if(P!=="children"){const A=(0,r.default)(f,P);A!==void 0&&!(0,s.default)(A,(0,r.default)(this.componentConfig.props,P))&&(v=!0)}}),v}mergePropsToComponent(f){!this.componentConfig.props||typeof this.componentConfig.props!="object"?this.componentConfig.props=f:Object.assign(this.componentConfig.props,f)}componentDidMount(){this._isMounted=!0,this._bindEvents(),setTimeout(()=>{this.didMount()})}didMount(){this.componentConfig.didMount&&this.componentConfig.didMount()}componentDidUpdate(){this.didUpdate(),setTimeout(()=>this._bindEvents())}getPreSnapshot(f,v){const P=Object.keys(v),A=Object.assign({},f);return P.forEach(b=>{const C=(0,a.default)(b);C.length>1?(A[C[0]]=(0,e.default)(A[C[0]]),(0,l.default)(A,C,v[b])):(0,l.default)(A,b,v[b])}),A}didUpdate(){this.componentConfig.didUpdate&&this.options.isComponent&&(this.componentConfig.didUpdate(this.getPreSnapshot(this.componentConfig.props||{},this.state.cachePrePropsAction),this.getPreSnapshot(this.componentConfig.data||{},this.cachePreDataAction)),this.state.cachePrePropsAction={},this.cachePreDataAction={})}componentWillUnmount(){this._isMounted=!1,this.state.cachePrePropsAction={},this.cachePreDataAction={},this.updateDataQueue=[],this.options.ownerComponentId&&g.default.delete(this.options.ownerComponentId),this.didUnmount()}didUnmount(){this.componentConfig.didUnmount&&this.componentConfig.didUnmount()}getRenderData(){const f={};if(this.props.children)if(this.props.children instanceof Array)this.props.children.forEach(v=>{v.props&&v.props._slot&&(f[v.props._slot]=v)});else{const v=this.props.children;v.props&&v.props._slot&&(f[v.props._slot]=v)}return Object.assign({$children:this.props.children,$reactComp:this,$slots:f,$id:this.$id},this.componentConfig.props,this.componentConfig.data)}onRef(f,v){if(f&&typeof this.componentConfig[v]=="function"){if(f instanceof O){let P=f.componentConfig;typeof P.ref=="function"&&(P=P.ref()),this.componentConfig[v].call(this.componentConfig,P)}else this.componentConfig[v].call(this.componentConfig,f);return!0}else f instanceof O?this.componentConfig.refs[v]=f.componentConfig:this.componentConfig.refs[v]=f;return!1}getCompMethod(f){let v;if(typeof f=="string"){const P=this.componentConfig[f];P&&typeof P=="function"&&(v=P)}else if(typeof f=="function")v=f;else throw new Error("\u7ED1\u5B9A\u7684\u4E8B\u4EF6\u540D\u5FC5\u987B\u662F string \u6216\u8005 function");return this._bindMethod(v)}_bindMethod(f){return f&&!f.__isBind__&&(f=f.bind(this.componentConfig),f.__isBind__=!0,f.name in this.componentConfig&&(this.componentConfig[f.name]=f)),f}_bindEvents(){if(!this._isMounted)return;const f=this.getRoot();if(f)for(const v in this.eventsInfo){const P=this.eventsInfo[v];let A;this.options.isComplexComponents?A=Array.from((f.parentElement||f).getElementsByClassName(`${v} comp-id-${this.$id}`)):"classList"in f&&f.classList.contains(v)?A=[f]:"getElementsByClassName"in f&&(A=Array.from(f.getElementsByClassName(v)));for(const b of A){b.tigaNodeId=v;for(const C of P)b.addEventListener(C.name,this._raiseEvent)}}}_raiseEvent(f){const P=f.currentTarget.tigaNodeId;if(P){const A=this.eventsInfo[P];if(A){const b=A.filter(T=>T.name===f.type).pop();b.catch&&f.stopPropagation();const C=this.componentConfig[b.event];C&&C.call(this.componentConfig,(0,u.default)(f))}}}registEvents(f,v){this.eventsInfo[v]=f}getRoot(){try{return c.default.findDOMNode(this)}catch(f){return null}}}t.KBComponent=O},"V/Pp":function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=i("2qkm"),e=["regionchange"];function r(n){const c=n.target&&s(n.target);try{const d=n.currentTarget&&s(n.currentTarget).dataset||{};c.dataset=Object.assign(Object.assign({},c.dataset),d)}catch(d){}if(e.includes(n.type))return Object.assign(Object.assign({},n.detail),{nativeEvent:n,currentTarget:n.currentTarget&&(n.target===n.currentTarget?c:s(n.currentTarget)),target:c,timeStamp:new Date().valueOf()});const u=Object.assign({nativeEvent:n,type:n.type,detail:n.detail,target:c,currentTarget:n.currentTarget&&(n.target===n.currentTarget?c:s(n.currentTarget)),timeStamp:new Date().valueOf()},n.other);switch(n.type){case"scroll":{u.detail=a(n);break}}return u}t.default=r;function s(n){return{id:n.id,dataset:l(n.dataset),tagName:n.tagName}}function l(n){const c={};return n&&Object.keys(n).forEach(u=>{const d=n[u];c[u]=(0,o.parseDatasetValue)(d)}),c}function a(n){const c=n.currentTarget;return{scrollTop:c.scrollTop,scrollLeft:c.scrollLeft,scrollHeight:c.scrollHeight,scrollWidth:c.scrollWidth}}},T5Yb:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Page=t.Component=void 0;const o=i("2GZr"),e=o.__importDefault(i("hjl+")),r=i("4vu8"),s=o.__importDefault(i("Pjr5")),l=i("/3ZX");window.Component=function(h){window.$$options$$=h};const a="$ownerId";function n(h){return u(h)}t.Component=n;function c(h){try{const g=["$event"],m={};return g.forEach(w=>{h[w]&&(m[w]=h[w])}),Object.assign(Object.assign({},(0,e.default)(h)),m)}catch(g){}return(0,e.default)(h)}function u(h){const g=(0,s.default)(window.$$options$$||{});delete window.$$options$$;const{defaultRender:m,isComplexComponents:w}=h,_=g.data;return delete g.data,class extends r.KBComponent{constructor(O){const R=c(g);R.data=Object.assign({},_),super(O,R,{isComplexComponents:w,isComponent:!0,ownerComponentId:h[a]})}render(){return m?m.call(this.componentConfig,this.getRenderData()):!1}}}function d(h,g){return p(h,g)}t.Page=d,window.Page=function(h){window.$$options$$=h};function p(h,g){const m=window.$$options$$||{};delete window.$$options$$;const{defaultRender:w,isComplexComponents:_}=h;return class extends l.PageComponent{constructor(O){super(O,c(m),g,{isComplexComponents:_,ownerComponentId:h[a]}),window.document.title=g.window.defaultTitle||window.document.title||""}render(){return w?w.call(this.componentConfig,this.getRenderData()):!1}}}},"/3ZX":function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PageComponent=t.getQueryParams=void 0;const e=i("2GZr").__importDefault(i("xARA")),r=i("4vu8"),s=i("Is4a"),l="tigaPageCreate",a="tigaPageDestroy";function n(u){const d=encodeURIComponent("=");u&&u.indexOf(d)>=0&&u.indexOf("=")<0&&(u=decodeURIComponent(u));const p={};if(u.indexOf("?")!==-1){const g=u.substr(u.indexOf("?")+1).split("&");for(let m=0;m<g.length;m++)p[g[m].split("=")[0]]=decodeURIComponent(g[m].split("=")[1])}return p}t.getQueryParams=n;class c extends r.KBComponent{constructor(d,p,h,g){super(d,p,g),this.pageConfigJson=h}onInit(){if(window.dispatchEvent(new CustomEvent(l,{detail:Object.assign(Object.assign({},this.componentConfig),{__tigaPage:this,location:Object.assign({},window.location)})})),this.componentConfig.onLoad){const d=n(location.search);location.hash&&Object.assign(d,n(location.hash)),this.componentConfig.onLoad(d)}this.didShow()}didShow(){const d=this.componentConfig.onShow,p=()=>typeof d=="function"&&d();p(),this.componentConfig.onShow=()=>{this._isMounted&&this.setPageConfig(),s.Event.emit("pageOnReady"),p()}}didMount(){const d=(e.default.findDOMNode(this)||{}).parentElement;d&&(this.setPageConfig(d),d.addEventListener("pagepulldownrefresh",this.onPagePullDownRefresh.bind(this)),d.addEventListener("pagereachbottom",this.onPageReachBottom.bind(this)),d.addEventListener("pagescroll",this.onPageScroll.bind(this))),this.onReady()}setPageConfig(d=null){try{const p=d||(e.default.findDOMNode(this)||{}).parentElement;if(p&&this.pageConfigJson){this.pageConfigJson.pullRefresh&&(p.enbalePullRefresh=!0);const h=Object.assign(Object.assign({},this.pageConfigJson.window),this.pageConfigJson);this.pageConfigJson.defaultTitle&&(h.defaultTitle=this.pageConfigJson.defaultTitle),p.setConfig&&p.setConfig(h)}}catch(p){}}onReady(){s.Event.emit("pageOnReady"),this.componentConfig.onReady&&this.componentConfig.onReady()}onPagePullDownRefresh(){this.componentConfig.onPullDownRefresh&&this.componentConfig.onPullDownRefresh()}onPageReachBottom(){this.componentConfig.onReachBottom&&this.componentConfig.onReachBottom()}onPageScroll(d){this.componentConfig.onPageScroll&&this.componentConfig.onPageScroll(d.detail)}didUnmount(){s.Event.emit("clearPageOnReadyCallback"),window.dispatchEvent(new CustomEvent(a,{detail:this.componentConfig})),this.componentConfig.onUnload&&this.componentConfig.onUnload()}}t.PageComponent=c},wzRQ:function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class i{constructor(e={}){this.map={},this.map=e}set(e,r){this.map[e]=r}get(e){return this.map[e]}has(e){return!!this.map[e]}delete(e){delete this.map[e]}}t.default=new i},lojF:function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mergeExecution=t.combineValue=void 0;const i=(r,s="data")=>{let l={};return!Array.isArray(r)||!s||r.forEach(a=>{const n=a[s];typeof n=="object"&&(l=Object.assign(Object.assign({},l),n))}),l};t.combineValue=i;const o=(r,s)=>{const l=c=>typeof c=="object"&&c!=null;if(!(l(r)&&l(s)))return!1;const a=Object.keys(r),n=Object.keys(s);return a.length!==n.length?!1:a.every(c=>n.indexOf(c)>-1)},e=(r,s="callback")=>()=>{if(!Array.isArray(r))return;const l=[];r.forEach(a=>{const n=a[s],c=a.data;if(typeof n=="function"){const u=window.btoa(encodeURIComponent(n.toString())),d=l.indexOf(u);if(d<0)n(),l.push(u);else{const p=r[d].data;o(c,p)||n()}}})};t.mergeExecution=e},aYgP:function(y,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.catchComponentMethodsError=void 0;const i=(r,s)=>new Proxy(r,{apply:(l,a,n)=>{try{return Reflect.apply(l,a,n)}catch(c){s(c)}}}),o=()=>typeof Proxy=="function",e=(r,s)=>{const l=r&&r.methods||{},a=Object.keys(l);if(a.length<=0||!o())return r;const n={};return a.forEach(c=>n[c]=i(l[c],s)),r.methods=n,r};t.catchComponentMethodsError=e},Is4a:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Event=void 0;const o=i("+d1X");t.Event={emit(e,r={}){typeof o.my!="undefined"&&typeof o.my.$tigaEvent!="undefined"&&o.my.$tigaEvent.emit(e,r)}}},neGa:function(y,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mountIntersectionObserver=void 0;const o=i("+d1X");function e(r,s){const l=o.my.createIntersectionObserver(r),a=l.observe.bind(l);return l.observe=(n,c)=>{try{let u=null;if(s&&(typeof s.matches=="function"&&s.matches(n)?u=s:s.parentNode&&(u=s.parentNode.querySelector(n))),u)return a(u,c)}catch(u){}return a(n,c)},l}t.mountIntersectionObserver=e}}]);

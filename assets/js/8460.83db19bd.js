(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[8460],{5783:(e,t,a)=>{"use strict";a.d(t,{A:()=>m});a(6540);var r=a(4164),n=a(539),o=a(204),i=a(6289);const s={iconEdit:"iconEdit_Z9Sw"};var l=a(4848);function u(e){let{className:t,...a}=e;return(0,l.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.A)(s.iconEdit,t),"aria-hidden":"true",...a,children:(0,l.jsx)("g",{children:(0,l.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function c(e){let{editUrl:t}=e;return(0,l.jsxs)(i.A,{to:t,className:o.G.common.editThisPage,children:[(0,l.jsx)(u,{}),(0,l.jsx)(n.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var d=a(8569);function p(e){let{lastUpdatedAt:t}=e;const a=new Date(t),r=(0,d.i)({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(a);return(0,l.jsx)(n.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,l.jsx)("b",{children:(0,l.jsx)("time",{dateTime:a.toISOString(),itemProp:"dateModified",children:r})})},children:" on {date}"})}function y(e){let{lastUpdatedBy:t}=e;return(0,l.jsx)(n.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,l.jsx)("b",{children:t})},children:" by {user}"})}function h(e){let{lastUpdatedAt:t,lastUpdatedBy:a}=e;return(0,l.jsxs)("span",{className:o.G.common.lastUpdated,children:[(0,l.jsx)(n.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,l.jsx)(p,{lastUpdatedAt:t}):"",byUser:a?(0,l.jsx)(y,{lastUpdatedBy:a}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const f={lastUpdated:"lastUpdated_JAkA"};function m(e){let{className:t,editUrl:a,lastUpdatedAt:n,lastUpdatedBy:o}=e;return(0,l.jsxs)("div",{className:(0,r.A)("row",t),children:[(0,l.jsx)("div",{className:"col",children:a&&(0,l.jsx)(c,{editUrl:a})}),(0,l.jsx)("div",{className:(0,r.A)("col",f.lastUpdated),children:(n||o)&&(0,l.jsx)(h,{lastUpdatedAt:n,lastUpdatedBy:o})})]})}},7985:(e,t,a)=>{"use strict";a.d(t,{A:()=>i});a(6540);var r=a(8453),n=a(4697),o=a(4848);function i(e){let{children:t}=e;return(0,o.jsx)(r.x,{components:n.A,children:t})}},8569:(e,t,a)=>{"use strict";a.d(t,{i:()=>n});var r=a(797);function n(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,r.A)(),a=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,r.A)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:a,...e})}},4744:e=>{"use strict";var t=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===a}(e)}(e)};var a="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function r(e,t){return!1!==t.clone&&t.isMergeableObject(e)?l((a=e,Array.isArray(a)?[]:{}),e,t):e;var a}function n(e,t,a){return e.concat(t).map((function(e){return r(e,a)}))}function o(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return Object.propertyIsEnumerable.call(e,t)})):[]}(e))}function i(e,t){try{return t in e}catch(a){return!1}}function s(e,t,a){var n={};return a.isMergeableObject(e)&&o(e).forEach((function(t){n[t]=r(e[t],a)})),o(t).forEach((function(o){(function(e,t){return i(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,o)||(i(e,o)&&a.isMergeableObject(t[o])?n[o]=function(e,t){if(!t.customMerge)return l;var a=t.customMerge(e);return"function"==typeof a?a:l}(o,a)(e[o],t[o],a):n[o]=r(t[o],a))})),n}function l(e,a,o){(o=o||{}).arrayMerge=o.arrayMerge||n,o.isMergeableObject=o.isMergeableObject||t,o.cloneUnlessOtherwiseSpecified=r;var i=Array.isArray(a);return i===Array.isArray(e)?i?o.arrayMerge(e,a,o):s(e,a,o):r(a,o)}l.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,a){return l(e,a,t)}),{})};var u=l;e.exports=u},6147:e=>{function t(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function a(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,r,n){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"==typeof r&&(n=r,r={}),r=r||{},n=n||function(){},i.type=r.type||"text/javascript",i.charset=r.charset||"utf8",i.async=!("async"in r)||!!r.async,i.src=e,r.attrs&&function(e,t){for(var a in t)e.setAttribute(a,t[a])}(i,r.attrs),r.text&&(i.text=""+r.text),("onload"in i?t:a)(i,n),i.onload||t(i,n),o.appendChild(i)}},1811:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>o});var r=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function n(e,t){if(e.length!==t.length)return!1;for(var a=0;a<e.length;a++)if(n=e[a],o=t[a],!(n===o||r(n)&&r(o)))return!1;var n,o;return!0}const o=function(e,t){var a;void 0===t&&(t=n);var r,o=[],i=!1;return function(){for(var n=[],s=0;s<arguments.length;s++)n[s]=arguments[s];return i&&a===this&&t(n,o)||(r=e.apply(this,n),i=!0,a=this,o=n),r}}},8021:(e,t,a)=>{var r,n=Object.create,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,l=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,a,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of s(t))u.call(e,n)||n===a||o(e,n,{get:()=>t[n],enumerable:!(r=i(t,n))||r.enumerable});return e},d=(e,t,a)=>(a=null!=e?n(l(e)):{},c(!t&&e&&e.__esModule?a:o(a,"default",{value:e,enumerable:!0}),e)),p=(e,t,a)=>(((e,t,a)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a})(e,"symbol"!=typeof t?t+"":t,a),a),y={};((e,t)=>{for(var a in t)o(e,a,{get:t[a],enumerable:!0})})(y,{default:()=>P}),e.exports=(r=y,c(o({},"__esModule",{value:!0}),r));var h=d(a(6540)),f=d(a(115)),m=a(7604),b=a(5635);class P extends h.Component{constructor(){super(...arguments),p(this,"mounted",!1),p(this,"isReady",!1),p(this,"isPlaying",!1),p(this,"isLoading",!0),p(this,"loadOnReady",null),p(this,"startOnPlay",!0),p(this,"seekOnPlay",null),p(this,"onDurationCalled",!1),p(this,"handlePlayerMount",(e=>{this.player||(this.player=e,this.player.load(this.props.url)),this.progress()})),p(this,"getInternalPlayer",(e=>this.player?this.player[e]:null)),p(this,"progress",(()=>{if(this.props.url&&this.player&&this.isReady){const e=this.getCurrentTime()||0,t=this.getSecondsLoaded(),a=this.getDuration();if(a){const r={playedSeconds:e,played:e/a};null!==t&&(r.loadedSeconds=t,r.loaded=t/a),r.playedSeconds===this.prevPlayed&&r.loadedSeconds===this.prevLoaded||this.props.onProgress(r),this.prevPlayed=r.playedSeconds,this.prevLoaded=r.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)})),p(this,"handleReady",(()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:e,playing:t,volume:a,muted:r}=this.props;e(),r||null===a||this.player.setVolume(a),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):t&&this.player.play(),this.handleDurationCheck()})),p(this,"handlePlay",(()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:e,onPlay:t,playbackRate:a}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&1!==a&&this.player.setPlaybackRate(a),e(),this.startOnPlay=!1),t(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()})),p(this,"handlePause",(e=>{this.isPlaying=!1,this.isLoading||this.props.onPause(e)})),p(this,"handleEnded",(()=>{const{activePlayer:e,loop:t,onEnded:a}=this.props;e.loopOnEnded&&t&&this.seekTo(0),t||(this.isPlaying=!1,a())})),p(this,"handleError",((...e)=>{this.isLoading=!1,this.props.onError(...e)})),p(this,"handleDurationCheck",(()=>{clearTimeout(this.durationCheckTimeout);const e=this.getDuration();e?this.onDurationCalled||(this.props.onDuration(e),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)})),p(this,"handleLoaded",(()=>{this.isLoading=!1}))}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(e){if(!this.player)return;const{url:t,playing:a,volume:r,muted:n,playbackRate:o,pip:i,loop:s,activePlayer:l,disableDeferredLoading:u}=this.props;if(!(0,f.default)(e.url,t)){if(this.isLoading&&!l.forceLoad&&!u&&!(0,b.isMediaStream)(t))return console.warn(`ReactPlayer: the attempt to load ${t} is being deferred until the player has loaded`),void(this.loadOnReady=t);this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(t,this.isReady)}e.playing||!a||this.isPlaying||this.player.play(),e.playing&&!a&&this.isPlaying&&this.player.pause(),!e.pip&&i&&this.player.enablePIP&&this.player.enablePIP(),e.pip&&!i&&this.player.disablePIP&&this.player.disablePIP(),e.volume!==r&&null!==r&&this.player.setVolume(r),e.muted!==n&&(n?this.player.mute():(this.player.unmute(),null!==r&&setTimeout((()=>this.player.setVolume(r))))),e.playbackRate!==o&&this.player.setPlaybackRate&&this.player.setPlaybackRate(o),e.loop!==s&&this.player.setLoop&&this.player.setLoop(s)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(e,t,a){if(!this.isReady)return void(0!==e&&(this.seekOnPlay=e,setTimeout((()=>{this.seekOnPlay=null}),5e3)));if(t?"fraction"===t:e>0&&e<1){const t=this.player.getDuration();return t?void this.player.seekTo(t*e,a):void console.warn("ReactPlayer: could not seek using fraction \u2013\xa0duration not yet available")}this.player.seekTo(e,a)}render(){const e=this.props.activePlayer;return e?h.default.createElement(e,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}p(P,"displayName","Player"),p(P,"propTypes",m.propTypes),p(P,"defaultProps",m.defaultProps)},5580:(e,t,a)=>{var r,n=Object.create,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,l=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,a,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of s(t))u.call(e,n)||n===a||o(e,n,{get:()=>t[n],enumerable:!(r=i(t,n))||r.enumerable});return e},d=(e,t,a)=>(a=null!=e?n(l(e)):{},c(!t&&e&&e.__esModule?a:o(a,"default",{value:e,enumerable:!0}),e)),p=(e,t,a)=>(((e,t,a)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a})(e,"symbol"!=typeof t?t+"":t,a),a),y={};((e,t)=>{for(var a in t)o(e,a,{get:t[a],enumerable:!0})})(y,{createReactPlayer:()=>_}),e.exports=(r=y,c(o({},"__esModule",{value:!0}),r));var h=d(a(6540)),f=d(a(4744)),m=d(a(1811)),b=d(a(115)),P=a(7604),g=a(5635),w=d(a(8021));const v=(0,g.lazy)((()=>a.e(6353).then(a.t.bind(a,6734,23)))),O="undefined"!=typeof window&&window.document&&"undefined"!=typeof document,j=void 0!==a.g&&a.g.window&&a.g.window.document,k=Object.keys(P.propTypes),A=O||j?h.Suspense:()=>null,T=[],_=(e,t)=>{var a;return a=class extends h.Component{constructor(){super(...arguments),p(this,"state",{showPreview:!!this.props.light}),p(this,"references",{wrapper:e=>{this.wrapper=e},player:e=>{this.player=e}}),p(this,"handleClickPreview",(e=>{this.setState({showPreview:!1}),this.props.onClickPreview(e)})),p(this,"showPreview",(()=>{this.setState({showPreview:!0})})),p(this,"getDuration",(()=>this.player?this.player.getDuration():null)),p(this,"getCurrentTime",(()=>this.player?this.player.getCurrentTime():null)),p(this,"getSecondsLoaded",(()=>this.player?this.player.getSecondsLoaded():null)),p(this,"getInternalPlayer",((e="player")=>this.player?this.player.getInternalPlayer(e):null)),p(this,"seekTo",((e,t,a)=>{if(!this.player)return null;this.player.seekTo(e,t,a)})),p(this,"handleReady",(()=>{this.props.onReady(this)})),p(this,"getActivePlayer",(0,m.default)((a=>{for(const t of[...T,...e])if(t.canPlay(a))return t;return t||null}))),p(this,"getConfig",(0,m.default)(((e,t)=>{const{config:a}=this.props;return f.default.all([P.defaultProps.config,P.defaultProps.config[t]||{},a,a[t]||{}])}))),p(this,"getAttributes",(0,m.default)((e=>(0,g.omit)(this.props,k)))),p(this,"renderActivePlayer",(e=>{if(!e)return null;const t=this.getActivePlayer(e);if(!t)return null;const a=this.getConfig(e,t.key);return h.default.createElement(w.default,{...this.props,key:t.key,ref:this.references.player,config:a,activePlayer:t.lazyPlayer||t,onReady:this.handleReady})}))}shouldComponentUpdate(e,t){return!(0,b.default)(this.props,e)||!(0,b.default)(this.state,t)}componentDidUpdate(e){const{light:t}=this.props;!e.light&&t&&this.setState({showPreview:!0}),e.light&&!t&&this.setState({showPreview:!1})}renderPreview(e){if(!e)return null;const{light:t,playIcon:a,previewTabIndex:r,oEmbedUrl:n,previewAriaLabel:o}=this.props;return h.default.createElement(v,{url:e,light:t,playIcon:a,previewTabIndex:r,previewAriaLabel:o,oEmbedUrl:n,onClick:this.handleClickPreview})}render(){const{url:e,style:t,width:a,height:r,fallback:n,wrapper:o}=this.props,{showPreview:i}=this.state,s=this.getAttributes(e),l="string"==typeof o?this.references.wrapper:void 0;return h.default.createElement(o,{ref:l,style:{...t,width:a,height:r},...s},h.default.createElement(A,{fallback:n},i?this.renderPreview(e):this.renderActivePlayer(e)))}},p(a,"displayName","ReactPlayer"),p(a,"propTypes",P.propTypes),p(a,"defaultProps",P.defaultProps),p(a,"addCustomPlayer",(e=>{T.push(e)})),p(a,"removeCustomPlayers",(()=>{T.length=0})),p(a,"canPlay",(t=>{for(const a of[...T,...e])if(a.canPlay(t))return!0;return!1})),p(a,"canEnablePIP",(t=>{for(const a of[...T,...e])if(a.canEnablePIP&&a.canEnablePIP(t))return!0;return!1})),a}},3554:(e,t,a)=>{var r,n=Object.create,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,l=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,a,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of s(t))u.call(e,n)||n===a||o(e,n,{get:()=>t[n],enumerable:!(r=i(t,n))||r.enumerable});return e},d={};((e,t)=>{for(var a in t)o(e,a,{get:t[a],enumerable:!0})})(d,{default:()=>f}),e.exports=(r=d,c(o({},"__esModule",{value:!0}),r));var p=((e,t,a)=>(a=null!=e?n(l(e)):{},c(!t&&e&&e.__esModule?a:o(a,"default",{value:e,enumerable:!0}),e)))(a(7015)),y=a(5580);const h=p.default[p.default.length-1];var f=(0,y.createReactPlayer)(p.default,h)},327:(e,t,a)=>{var r,n=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,s=Object.prototype.hasOwnProperty,l={};((e,t)=>{for(var a in t)n(e,a,{get:t[a],enumerable:!0})})(l,{AUDIO_EXTENSIONS:()=>k,DASH_EXTENSIONS:()=>_,FLV_EXTENSIONS:()=>x,HLS_EXTENSIONS:()=>T,MATCH_URL_DAILYMOTION:()=>w,MATCH_URL_FACEBOOK:()=>h,MATCH_URL_FACEBOOK_WATCH:()=>f,MATCH_URL_KALTURA:()=>j,MATCH_URL_MIXCLOUD:()=>v,MATCH_URL_MUX:()=>y,MATCH_URL_SOUNDCLOUD:()=>d,MATCH_URL_STREAMABLE:()=>m,MATCH_URL_TWITCH_CHANNEL:()=>g,MATCH_URL_TWITCH_VIDEO:()=>P,MATCH_URL_VIDYARD:()=>O,MATCH_URL_VIMEO:()=>p,MATCH_URL_WISTIA:()=>b,MATCH_URL_YOUTUBE:()=>c,VIDEO_EXTENSIONS:()=>A,canPlay:()=>S}),e.exports=(r=l,((e,t,a,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of i(t))s.call(e,l)||l===a||n(e,l,{get:()=>t[l],enumerable:!(r=o(t,l))||r.enumerable});return e})(n({},"__esModule",{value:!0}),r));var u=a(5635);const c=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,d=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,p=/vimeo\.com\/(?!progressive_redirect).+/,y=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,h=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,f=/^https?:\/\/fb\.watch\/.+$/,m=/streamable\.com\/([a-z0-9]+)$/,b=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,P=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,g=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,w=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,v=/mixcloud\.com\/([^/]+\/[^/]+)/,O=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,j=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,k=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,A=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,T=/\.(m3u8)($|\?)/i,_=/\.(mpd)($|\?)/i,x=/\.(flv)($|\?)/i,E=e=>{if(e instanceof Array){for(const t of e){if("string"==typeof t&&E(t))return!0;if(E(t.src))return!0}return!1}return!(!(0,u.isMediaStream)(e)&&!(0,u.isBlobUrl)(e))||(k.test(e)||A.test(e)||T.test(e)||_.test(e)||x.test(e))},S={youtube:e=>e instanceof Array?e.every((e=>c.test(e))):c.test(e),soundcloud:e=>d.test(e)&&!k.test(e),vimeo:e=>p.test(e)&&!A.test(e)&&!T.test(e),mux:e=>y.test(e),facebook:e=>h.test(e)||f.test(e),streamable:e=>m.test(e),wistia:e=>b.test(e),twitch:e=>P.test(e)||g.test(e),dailymotion:e=>w.test(e),mixcloud:e=>v.test(e),vidyard:e=>O.test(e),kaltura:e=>j.test(e),file:E}},7015:(e,t,a)=>{Object.create;var r,n=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,s=(Object.getPrototypeOf,Object.prototype.hasOwnProperty),l=(e,t,a,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of i(t))s.call(e,l)||l===a||n(e,l,{get:()=>t[l],enumerable:!(r=o(t,l))||r.enumerable});return e},u={};((e,t)=>{for(var a in t)n(e,a,{get:t[a],enumerable:!0})})(u,{default:()=>p}),e.exports=(r=u,l(n({},"__esModule",{value:!0}),r));var c=a(5635),d=a(327),p=[{key:"youtube",name:"YouTube",canPlay:d.canPlay.youtube,lazyPlayer:(0,c.lazy)((()=>a.e(8446).then(a.t.bind(a,2910,23))))},{key:"soundcloud",name:"SoundCloud",canPlay:d.canPlay.soundcloud,lazyPlayer:(0,c.lazy)((()=>a.e(9979).then(a.t.bind(a,3127,23))))},{key:"vimeo",name:"Vimeo",canPlay:d.canPlay.vimeo,lazyPlayer:(0,c.lazy)((()=>a.e(6173).then(a.t.bind(a,1423,23))))},{key:"mux",name:"Mux",canPlay:d.canPlay.mux,lazyPlayer:(0,c.lazy)((()=>a.e(2723).then(a.t.bind(a,7553,23))))},{key:"facebook",name:"Facebook",canPlay:d.canPlay.facebook,lazyPlayer:(0,c.lazy)((()=>a.e(6887).then(a.t.bind(a,1343,23))))},{key:"streamable",name:"Streamable",canPlay:d.canPlay.streamable,lazyPlayer:(0,c.lazy)((()=>a.e(7627).then(a.t.bind(a,9643,23))))},{key:"wistia",name:"Wistia",canPlay:d.canPlay.wistia,lazyPlayer:(0,c.lazy)((()=>a.e(9340).then(a.t.bind(a,3330,23))))},{key:"twitch",name:"Twitch",canPlay:d.canPlay.twitch,lazyPlayer:(0,c.lazy)((()=>a.e(2042).then(a.t.bind(a,1400,23))))},{key:"dailymotion",name:"DailyMotion",canPlay:d.canPlay.dailymotion,lazyPlayer:(0,c.lazy)((()=>a.e(6328).then(a.t.bind(a,9348,23))))},{key:"mixcloud",name:"Mixcloud",canPlay:d.canPlay.mixcloud,lazyPlayer:(0,c.lazy)((()=>a.e(7570).then(a.t.bind(a,3276,23))))},{key:"vidyard",name:"Vidyard",canPlay:d.canPlay.vidyard,lazyPlayer:(0,c.lazy)((()=>a.e(3392).then(a.t.bind(a,3552,23))))},{key:"kaltura",name:"Kaltura",canPlay:d.canPlay.kaltura,lazyPlayer:(0,c.lazy)((()=>a.e(6463).then(a.t.bind(a,7945,23))))},{key:"file",name:"FilePlayer",canPlay:d.canPlay.file,canEnablePIP:e=>d.canPlay.file(e)&&(document.pictureInPictureEnabled||(0,c.supportsWebKitPresentationMode)())&&!d.AUDIO_EXTENSIONS.test(e),lazyPlayer:(0,c.lazy)((()=>a.e(7458).then(a.t.bind(a,688,23))))}]},7604:(e,t,a)=>{var r,n=Object.create,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,l=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,a,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of s(t))u.call(e,n)||n===a||o(e,n,{get:()=>t[n],enumerable:!(r=i(t,n))||r.enumerable});return e},d={};((e,t)=>{for(var a in t)o(e,a,{get:t[a],enumerable:!0})})(d,{defaultProps:()=>k,propTypes:()=>O}),e.exports=(r=d,c(o({},"__esModule",{value:!0}),r));var p=((e,t,a)=>(a=null!=e?n(l(e)):{},c(!t&&e&&e.__esModule?a:o(a,"default",{value:e,enumerable:!0}),e)))(a(5556));const{string:y,bool:h,number:f,array:m,oneOfType:b,shape:P,object:g,func:w,node:v}=p.default,O={url:b([y,m,g]),playing:h,loop:h,controls:h,volume:f,muted:h,playbackRate:f,width:b([y,f]),height:b([y,f]),style:g,progressInterval:f,playsinline:h,pip:h,stopOnUnmount:h,light:b([h,y,g]),playIcon:v,previewTabIndex:f,previewAriaLabel:y,fallback:v,oEmbedUrl:y,wrapper:b([y,w,P({render:w.isRequired})]),config:P({soundcloud:P({options:g}),youtube:P({playerVars:g,embedOptions:g,onUnstarted:w}),facebook:P({appId:y,version:y,playerId:y,attributes:g}),dailymotion:P({params:g}),vimeo:P({playerOptions:g,title:y}),mux:P({attributes:g,version:y}),file:P({attributes:g,tracks:m,forceVideo:h,forceAudio:h,forceHLS:h,forceSafariHLS:h,forceDisableHls:h,forceDASH:h,forceFLV:h,hlsOptions:g,hlsVersion:y,dashVersion:y,flvVersion:y}),wistia:P({options:g,playerId:y,customControls:m}),mixcloud:P({options:g}),twitch:P({options:g,playerId:y}),vidyard:P({options:g})}),onReady:w,onStart:w,onPlay:w,onPause:w,onBuffer:w,onBufferEnd:w,onEnded:w,onError:w,onDuration:w,onSeek:w,onPlaybackRateChange:w,onPlaybackQualityChange:w,onProgress:w,onClickPreview:w,onEnablePIP:w,onDisablePIP:w},j=()=>{},k={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:j},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:j,onStart:j,onPlay:j,onPause:j,onBuffer:j,onBufferEnd:j,onEnded:j,onError:j,onDuration:j,onSeek:j,onPlaybackRateChange:j,onPlaybackQualityChange:j,onProgress:j,onClickPreview:j,onEnablePIP:j,onDisablePIP:j}},5635:(e,t,a)=>{var r,n=Object.create,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,l=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,a,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of s(t))u.call(e,n)||n===a||o(e,n,{get:()=>t[n],enumerable:!(r=i(t,n))||r.enumerable});return e},d=(e,t,a)=>(a=null!=e?n(l(e)):{},c(!t&&e&&e.__esModule?a:o(a,"default",{value:e,enumerable:!0}),e)),p={};((e,t)=>{for(var a in t)o(e,a,{get:t[a],enumerable:!0})})(p,{callPlayer:()=>C,getConfig:()=>E,getSDK:()=>x,isBlobUrl:()=>U,isMediaStream:()=>I,lazy:()=>m,omit:()=>S,parseEndTime:()=>j,parseStartTime:()=>O,queryString:()=>A,randomString:()=>k,supportsWebKitPresentationMode:()=>R}),e.exports=(r=p,c(o({},"__esModule",{value:!0}),r));var y=d(a(6540)),h=d(a(6147)),f=d(a(4744));const m=e=>y.default.lazy((async()=>{const t=await e();return"function"==typeof t.default?t:t.default})),b=/[?&#](?:start|t)=([0-9hms]+)/,P=/[?&#]end=([0-9hms]+)/,g=/(\d+)(h|m|s)/g,w=/^\d+$/;function v(e,t){if(e instanceof Array)return;const a=e.match(t);if(a){const e=a[1];if(e.match(g))return function(e){let t=0,a=g.exec(e);for(;null!==a;){const[,r,n]=a;"h"===n&&(t+=60*parseInt(r,10)*60),"m"===n&&(t+=60*parseInt(r,10)),"s"===n&&(t+=parseInt(r,10)),a=g.exec(e)}return t}(e);if(w.test(e))return parseInt(e)}}function O(e){return v(e,b)}function j(e){return v(e,P)}function k(){return Math.random().toString(36).substr(2,5)}function A(e){return Object.keys(e).map((t=>`${t}=${e[t]}`)).join("&")}function T(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}const _={},x=function(e){0;return e}((function(e,t,a=null,r=()=>!0,n=h.default){const o=T(t);return o&&r(o)?Promise.resolve(o):new Promise(((r,o)=>{if(_[e])return void _[e].push({resolve:r,reject:o});_[e]=[{resolve:r,reject:o}];const i=t=>{_[e].forEach((e=>e.resolve(t)))};if(a){const e=window[a];window[a]=function(){e&&e(),i(T(t))}}n(e,(r=>{r?(_[e].forEach((e=>e.reject(r))),_[e]=null):a||i(T(t))}))}))}));function E(e,t){return(0,f.default)(t.config,e.config)}function S(e,...t){const a=[].concat(...t),r={},n=Object.keys(e);for(const o of n)-1===a.indexOf(o)&&(r[o]=e[o]);return r}function C(e,...t){if(!this.player||!this.player[e]){let t=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c \u2013 `;return this.player?this.player[e]||(t+="The method was not available"):t+="The player was not available",console.warn(t,"font-weight: bold",""),null}return this.player[e](...t)}function I(e){return"undefined"!=typeof window&&void 0!==window.MediaStream&&e instanceof window.MediaStream}function U(e){return/^blob:/.test(e)}function R(e=document.createElement("video")){const t=!1===/iPhone|iPod/.test(navigator.userAgent);return e.webkitSupportsPresentationMode&&"function"==typeof e.webkitSetPresentationMode&&t}},8453:(e,t,a)=>{"use strict";a.d(t,{R:()=>i,x:()=>s});var r=a(6540);const n={},o=r.createContext(n);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[7915],{9613:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var n=a(9496);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(a),u=o,f=d["".concat(p,".").concat(u)]||d[u]||c[u]||r;return a?n.createElement(f,i(i({ref:t},m),{},{components:a})):n.createElement(f,i({ref:t},m))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8425:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=a(1163),o=(a(9496),a(9613));const r={title:"Embed metapages into your app",sidebar_position:0,slug:"/embed"},i=void 0,s={unversionedId:"Embed/embed",id:"Embed/embed",title:"Embed metapages into your app",description:"This page is meant for developers, with some coding knowledge, or those who build web apps/sites",source:"@site/docs/Embed/embed.mdx",sourceDirName:"Embed",slug:"/embed",permalink:"/docs/embed",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Embed metapages into your app",sidebar_position:0,slug:"/embed"},sidebar:"tutorialSidebar",previous:{title:"Create a metaframe",permalink:"/docs/create-metaframe"},next:{title:"Embed a metaframe in a react app",permalink:"/docs/embed-metaframe"}},p={},l=[{value:"<strong>Embed metapages in your site (links to code examples)</strong>",id:"4d58288979954add8d83b1f337c919b1",level:3},{value:"Links to code example",id:"0ba26708b1eb4296bab40fd139307271",level:3}],m={toc:l},d="wrapper";function c(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This page is meant for developers, with some coding knowledge, or those who build web apps/sites")),(0,o.kt)("h3",{id:"4d58288979954add8d83b1f337c919b1"},(0,o.kt)("strong",{parentName:"h3"},"Embed metapages in your site (links to code examples)")),(0,o.kt)("p",null,"Embedding a metapage/frame means you get a complete, functional, already-deployed piece of software that takes a few lines of code to add to your own app."),(0,o.kt)("p",null,"One way to think about embedding metapages is that each metaframe is a web component with inputs and outputs."),(0,o.kt)("p",null,"You can wire them up together with the metapage library, or even stitch them together yourself in your own app, if that makes more sense for you use cases."),(0,o.kt)("p",null,"Developer advantages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Embed visual modules like the ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/monaco-editor"},"monaco code editor")," with a few lines of code",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/monaco-editor"},"monaco module")," requires various complex and specific workarounds for various build tools (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/monaco-editor/blob/main/docs/integrate-esm.md"},"webpack"),", ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/vitejs/vite/discussions/1791"},"vite"),", etc)"),(0,o.kt)("li",{parentName:"ul"},"The component is only loaded when shown to the user, so no assets are downloaded if the component is not used in your app"))),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"metaframes")," in the ",(0,o.kt)("inlineCode",{parentName:"li"},"metapage")," are iframes, and communicate using the web standard ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage"},"postMessage"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This means they are security isolated:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If there is malicious code in a metaframe, it is very difficult for it to interfere with your main app code, as the only way to access the parent (your app) is via the secured ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage"},"postMessage")," system (metapages control who can send messages)"),(0,o.kt)("li",{parentName:"ul"},"The code running in metaframes")))))),(0,o.kt)("div",{className:"custom-docunotion-row"}),(0,o.kt)("p",null,"A single metapage"),(0,o.kt)("p",null,"Metapage plus editor"),(0,o.kt)("h3",{id:"0ba26708b1eb4296bab40fd139307271"},"Links to code example"),(0,o.kt)("p",null,"A single metaframe:"),(0,o.kt)("p",null,"A single metapage:"),(0,o.kt)("p",null,"Metapage plus editor:"))}c.isMDXComponent=!0}}]);
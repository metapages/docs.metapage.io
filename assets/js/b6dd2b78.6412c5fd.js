"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[5741],{49613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),f=l(r),d=a,g=f["".concat(s,".").concat(d)]||f[d]||c[d]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m.mdxType="string"==typeof e?e:a,i[1]=m;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},23256:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>m,toc:()=>l});var n=r(37579),a=(r(59496),r(49613));const o={title:"Embed the metapage editor + library"},i=void 0,m={unversionedId:"Integrating/embed-metapage-editor",id:"Integrating/embed-metapage-editor",title:"Embed the metapage editor + library",description:"Adding a (custom) gallery into your own site requires a professional-level license",source:"@site/docs/05-Integrating/03-embed-metapage-editor.md",sourceDirName:"05-Integrating",slug:"/Integrating/embed-metapage-editor",permalink:"/docs/Integrating/embed-metapage-editor",draft:!1,editUrl:"https://github.com/metapages/docs.metapage.io/tree/main/packages/create-docusaurus/templates/shared/docs/05-Integrating/03-embed-metapage-editor.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Embed the metapage editor + library"},sidebar:"tutorialSidebar",previous:{title:"Embed a metapage on your site",permalink:"/docs/Integrating/embed-metapage"},next:{title:"Provide your site as a metaframe",permalink:"/docs/Integrating/embed-your-site-as-metaframe"}},s={},l=[],p={toc:l};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Adding a (custom) gallery into your own site requires a professional-level license")),(0,a.kt)("mermaid",{value:"flowchart LR\n    style metaframes fill:#fff,stroke:#32AEE4,stroke-width:2px\n    style metapages fill:#fff,stroke:#32AEE4,stroke-width:2px\n    style mf1 fill:#fff,stroke:#32AEE4,stroke-width:2px\n    style mf2 fill:#fff,stroke:#32AEE4,stroke-width:2px\n    style mf3 fill:#fff,stroke:#32AEE4,stroke-width:2px\n\n    subgraph test [your-site.com]\n        direction LR\n\n        subgraph gallery [gallery.metapage.io]\n            direction LR\n            metaframes[...metaframes]\n            metapages[...metapages]\n        end\n        subgraph metapage [metapage]\n\n            mf1[metaframe 1] --\x3e mf2[metaframe 2]\n            mf2 --\x3e mf3[metaframe 3]\n            mf1 --\x3e mf3\n        end\n\n        gallery --\x3e |add from gallery| metapage\n    end"}))}c.isMDXComponent=!0}}]);
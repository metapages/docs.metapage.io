"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[649],{9613:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},f=Object.keys(e);for(n=0;n<f.length;n++)a=f[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(e);for(n=0;n<f.length;n++)a=f[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),o=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=o(e.components);return n.createElement(i.Provider,{value:t},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,f=e.originalType,i=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),l=o(a),p=r,u=l["".concat(i,".").concat(p)]||l[p]||c[p]||f;return a?n.createElement(u,s(s({ref:t},d),{},{components:a})):n.createElement(u,s({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var f=a.length,s=new Array(f);s[0]=p;var m={};for(var i in t)hasOwnProperty.call(t,i)&&(m[i]=t[i]);m.originalType=e,m[l]="string"==typeof e?e:r,s[1]=m;for(var o=2;o<f;o++)s[o]=a[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7964:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>f,metadata:()=>m,toc:()=>o});var n=a(1163),r=(a(9496),a(9613));const f={title:"diagrams",sidebar_position:2,slug:"/fa6c35bc-44f3-4f59-9322-900f747163d3"},s=void 0,m={unversionedId:"diagrams",id:"diagrams",title:"diagrams",description:"These diagrams need to be here to get embedded elsewhere",source:"@site/docs/diagrams.mdx",sourceDirName:".",slug:"/fa6c35bc-44f3-4f59-9322-900f747163d3",permalink:"/docs/fa6c35bc-44f3-4f59-9322-900f747163d3",draft:!1,editUrl:"https://github.com/metapages/docs.metapage.io/tree/main/packages/create-docusaurus/templates/shared/docs/diagrams.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"diagrams",sidebar_position:2,slug:"/fa6c35bc-44f3-4f59-9322-900f747163d3"},sidebar:"tutorialSidebar",previous:{title:"Embed",permalink:"/docs/Embed"}},i={},o=[{value:"Embed metaframe",id:"2e905fc5ee464656b13436dd221fa45c",level:3},{value:"Embed metapage and editor",id:"0c9157f8e2eb4acdb6a23279ec52652a",level:3},{value:"Embed metapage",id:"ed8603efc7eb431c93d21a8f9018d00e",level:3},{value:"Metapages and metaframes basic",id:"2f7b6061b1634cdf8ceee1bf0f592a1a",level:3},{value:"Metaframes and metapages data flow 01",id:"b7dba829627c4c35826e46184d387f1e",level:3}],d={toc:o},l="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(l,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"These diagrams need to be here to get embedded elsewhere"),(0,r.kt)("h3",{id:"2e905fc5ee464656b13436dd221fa45c"},"Embed metaframe"),(0,r.kt)("mermaid",{value:'flowchart LR\n    subgraph test [your-site.com]\n        direction TB\n\n        style js fill:#fff,stroke:#fff,stroke-width:2px\n        style mf1 fill:#fff,stroke:#32AEE4,stroke-width:2px\n        style mf2 fill:#fff,stroke:#32AEE4,stroke-width:2px\n        style mf3 fill:#fff,stroke:#32AEE4,stroke-width:2px\n\n        subgraph metapage [metapage]\n\n            mf1[metaframe 1] --\x3e mf2[metaframe 2]\n            mf2 --\x3e mf3[metaframe 3]\n            mf1 --\x3e mf3\n        end\n        js[ javascript] <--\x3e |messages| metapage\n    end\n  click mf3 "/docs/"\n  click mf2 "/docs/fa6c35bc-44f3-4f59-9322-900f747163d3"'}),(0,r.kt)("h3",{id:"0c9157f8e2eb4acdb6a23279ec52652a"},"Embed metapage and editor"),(0,r.kt)("mermaid",{value:"flowchart LR\n    style metaframes fill:#fff,stroke:#32AEE4,stroke-width:2px\n    style metapages fill:#fff,stroke:#32AEE4,stroke-width:2px\n    style mf1 fill:#fff,stroke:#32AEE4,stroke-width:2px\n    style mf2 fill:#fff,stroke:#32AEE4,stroke-width:2px\n    style mf3 fill:#fff,stroke:#32AEE4,stroke-width:2px\n\n    subgraph test [your-site.com]\n        direction LR\n\n        subgraph gallery [gallery.metapage.io]\n            direction LR\n            metaframes[...metaframes]\n            metapages[...metapages]\n        end\n        subgraph metapage [metapage]\n\n            mf1[metaframe 1] --\x3e mf2[metaframe 2]\n            mf2 --\x3e mf3[metaframe 3]\n            mf1 --\x3e mf3\n        end\n\n        gallery --\x3e |add from gallery| metapage\n    end"}),(0,r.kt)("h3",{id:"ed8603efc7eb431c93d21a8f9018d00e"},"Embed metapage"),(0,r.kt)("mermaid",{value:"flowchart LR\n    subgraph test [your-site.com]\n        direction TB\n\n        style js fill:#fff,stroke:#fff,stroke-width:2px\n        style mf1 fill:#fff,stroke:#32AEE4,stroke-width:2px\n        style mf2 fill:#fff,stroke:#32AEE4,stroke-width:2px\n        style mf3 fill:#fff,stroke:#32AEE4,stroke-width:2px\n\n        subgraph metapage [metapage]\n\n            mf1[metaframe 1] --\x3e mf2[metaframe 2]\n            mf2 --\x3e mf3[metaframe 3]\n            mf1 --\x3e mf3\n        end\n        js[ javascript] <--\x3e |messages| metapage\n    end"}),(0,r.kt)("h3",{id:"2f7b6061b1634cdf8ceee1bf0f592a1a"},"Metapages and metaframes basic"),(0,r.kt)("mermaid",{value:'flowchart LR\n    subgraph page [Your website]\n        js("Your website javascript")\n        metapage ---\x3e |"JSON messages (any output changes)"| js\n        js ---\x3e |"set any inputs"| metapage\n        subgraph metapage [Metapage]\n        direction LR\n        mf1["Metaframe A (iframe)"]\n        mf2["Metaframe B (iframe)"]\n        mf3["Metaframe C (iframe)"]\n\n        mf1 --\x3e mf2\n        mf1 --\x3e mf3\n        mf2 --\x3e mf3\n        end\n    end'}),(0,r.kt)("h3",{id:"b7dba829627c4c35826e46184d387f1e"},"Metaframes and metapages data flow 01"),(0,r.kt)("mermaid",{value:'flowchart LR\n    API["Api calls or JSON messages"] --\x3e API\n    B[Metaframe configured connection] -.-> B\n    subgraph page [Your website]\n        direction LR\n        metapageClient(Metapage Client)\n        js("Your website js")\n        metapageClient ---\x3e |"JSON messages (any output changes)"| js\n        js ---\x3e |"set any inputs"| metapageClient\n        subgraph metapage [Metapage]\n        direction LR\n\n            mf1js --\x3e |outputsA| metapageClient\n            metapageClient --\x3e |inputsB| mf2js\n\n            subgraph mf1 ["Metaframe A (iframe)"]\n            direction LR\n                mf1js(Metaframe client)\n            end\n\n            subgraph mf2 ["Metaframe B (iframe)"]\n            direction LR\n                mf2js(Metaframe client)\n            end\n\n            mf1 -.-> |"outputsA | inputsB"| mf2\n        end\n\n    end'}))}c.isMDXComponent=!0}}]);
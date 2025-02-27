"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[1614],{87018:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"Concepts/inject-url-parameters","title":"Inject URL parameters","description":"19e018579bb580818e18d97e5872e942}","source":"@site/docs/Concepts/inject-url-parameters.mdx","sourceDirName":"Concepts","slug":"/inject-url-parameters","permalink":"/docs/inject-url-parameters","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Inject URL parameters","sidebar_position":1,"slug":"/inject-url-parameters"},"sidebar":"tutorialSidebar","previous":{"title":"Sending Data Between Metaframes","permalink":"/docs/connect-inputs-outputs"},"next":{"title":"Embed metapages anywhere","permalink":"/docs/embed-anywhere"}}');var r=t(74848),s=t(28453);const i={title:"Inject URL parameters",sidebar_position:1,slug:"/inject-url-parameters"},c="Inject URL paramaters: turn a metapage into a configureable view {#19e018579bb580818e18d97e5872e942}",o={},d=[{value:"Overview",id:"da7caceb26ff4fbb8ef04017f4820193",level:2},{value:"Javascript",id:"19e018579bb58057a444e36a6b125073",level:2},{value:"Containers",id:"19e018579bb580b1af25c0c39b2974f3",level:2}];function l(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.header,{children:(0,r.jsx)(a.h1,{id:"19e018579bb580818e18d97e5872e942",children:"Inject URL paramaters: turn a metapage into a configureable view"})}),"\n",(0,r.jsx)(a.admonition,{type:"tip",children:(0,r.jsx)(a.p,{children:"This is for advanced users or teams"})}),"\n",(0,r.jsx)(a.h2,{id:"da7caceb26ff4fbb8ef04017f4820193",children:"Overview"}),"\n",(0,r.jsx)(a.p,{children:"URL parameters allow you to customize metapages by passing configuration values through the URL. This transforms static metapages into dynamically configurable views without modifying the underlying metapage."}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.a,{href:"https://metapage.io/dion/Development:-testing-url-params-40e42e0e53224cf99c0d20fa1323c043?tag=abc",children:"Example metapage"})}),"\n",(0,r.jsx)(a.p,{children:"You can add URL search and hash parameters to the metapage url, and those parameters will be passed down to the metaframes. e.g."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-shell",children:"https://metapage.io/dion/40e42e0e53224cf99c0d20fa1323c043?tag=abc\n"})}),"\n",(0,r.jsxs)(a.p,{children:["This passes ",(0,r.jsx)(a.code,{children:"tag=abc"})," to the container metaframes. One of those builds a docker image from a git repository from a git tag: ",(0,r.jsx)(a.code,{children:"abc"})," :"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-shell",children:"https://github.com/metapages/test-github-refs/tree/${tag}\n"})}),"\n",(0,r.jsx)(a.p,{children:"Now the entire metapage is configured to point to a specific tag."}),"\n",(0,r.jsx)(a.h1,{id:"19e018579bb580069162c855b58bb769",children:"How to Use URL Parameters in Different Metaframes"}),"\n",(0,r.jsx)(a.h2,{id:"19e018579bb58057a444e36a6b125073",children:"Javascript"}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.a,{href:"https://metapage.io/https://metapage.io/mf/tn2rlkhaiq#?tag=xyz",children:"Example metaframe"})}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-javascript",children:"import { getHashParamFromWindow } from 'https://cdn.jsdelivr.net/npm/@metapages/hash-query@0.8.4/+esm'\n\nconst tag = getHashParamFromWindow(\"tag\")\nlog(`tag=${tag}`)\n"})}),"\n",(0,r.jsx)(a.p,{children:"The above code block shows how to access URL hash parameters that are injected from the main webpage."}),"\n",(0,r.jsx)(a.h2,{id:"19e018579bb580b1af25c0c39b2974f3",children:"Containers"}),"\n",(0,r.jsxs)(a.p,{children:["You can use this mechanism to ",(0,r.jsx)(a.a,{href:"/docs/git-refs-in-urls",children:"define the exact git repo the docker image is built from."})]}),"\n",(0,r.jsxs)(a.p,{children:["Any ",(0,r.jsx)(a.code,{children:"$foo=bar"})," URL parameter is accessible by:"]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"The git URL"})}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{src:t(65471).A+"",width:"1264",height:"384"})}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"The docker command"})}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{src:t(44445).A+"",width:"1266",height:"300"})}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"The container env vars"})}),"\n",(0,r.jsxs)(a.p,{children:["All browser URL parameters are available to the container environment as environment variables, except the following, which are used internally by the container metaframe, and thus cannot be overridden: [ ",(0,r.jsx)(a.code,{children:"autostart"}),", ",(0,r.jsx)(a.code,{children:"control"}),", ",(0,r.jsx)(a.code,{children:"config"})," , ",(0,r.jsx)(a.code,{children:"debug"}),", ",(0,r.jsx)(a.code,{children:"definition"}),", ",(0,r.jsx)(a.code,{children:"inputs"}),", ",(0,r.jsx)(a.code,{children:"queueOverride"}),", ",(0,r.jsx)(a.code,{children:"ignoreQueueOverride"}),", ",(0,r.jsx)(a.code,{children:"job"}),", ",(0,r.jsx)(a.code,{children:"queue"}),"]"]}),"\n",(0,r.jsx)(a.admonition,{type:"tip",children:(0,r.jsxs)(a.p,{children:["User defined env vars is ",(0,r.jsx)(a.a,{href:"https://github.com/orgs/metapages/projects/1/views/1?pane=issue&itemId=98563477&issue=metapages%7Ccompute-queues%7C73",children:"on the roadmap"})]})}),"\n",(0,r.jsx)(a.h1,{id:"19e018579bb58086bed4f668eec15d32",children:"Related topics"}),"\n",(0,r.jsx)(a.mermaid,{value:'graph LR\n  gitrefs["git refs in URLs"]\n  urlparams["URL parameters"]\n\n  urlparams --\x3e gitrefs\n  click gitrefs "/docs/git-refs-in-urls"\n  click urlparams "/docs/inject-url-parameters"\n  style urlparams fill:#fff,stroke:#999999,stroke-width:2px,color:#000'})]})}function h(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},44445:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/inject-url-parameters.19e01857-9bb5-80d9-9f77-c8654a79cab7-30b6703c79eb2286978511f7e6611db4.png"},65471:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/inject-url-parameters.19e01857-9bb5-80ee-8882-d91a1b0c4e2f-cf578fd541d2903a7508a35389f76b9a.png"},28453:(e,a,t)=>{t.d(a,{R:()=>i,x:()=>c});var n=t(96540);const r={},s=n.createContext(r);function i(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);
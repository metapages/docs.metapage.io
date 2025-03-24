"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[7907],{9202:(e,n,o)=>{o.d(n,{A:()=>c});const c=o.p+"assets/images/container-local-mode.1a501857-9bb5-8037-ac76-cb35734f9f11-2b17e0f775d0bd9c19206c4b8f5eb0dc.png"},17511:(e,n,o)=>{o.d(n,{A:()=>c});const c=o.p+"assets/images/container-local-mode.1a501857-9bb5-8007-a6d3-f0ade81ad2b7-45073b28604d77513fe7c9ddc43e2f34.png"},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>a});var c=o(96540);const t={},r=c.createContext(t);function s(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),c.createElement(r.Provider,{value:n},e.children)}},59257:(e,n,o)=>{o.d(n,{A:()=>c});const c=o.p+"assets/images/container-local-mode.1a501857-9bb5-80e1-8292-edc3d195b106-247960d6b1c8eb5b9f142cb3b5d85634.png"},62370:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>l});const c=JSON.parse('{"id":"Containers/container-local-mode","title":"local","description":"182018579bb580fc8e31faed4888aa81}","source":"@site/docs/Containers/container-local-mode.mdx","sourceDirName":"Containers","slug":"/container-local-mode","permalink":"/docs/container-local-mode","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"local","sidebar_position":2,"slug":"/container-local-mode"},"sidebar":"tutorialSidebar","previous":{"title":"remote","permalink":"/docs/container-remote-mode"},"next":{"title":"worker cli reference","permalink":"/docs/container-cli-reference"}}');var t=o(74848),r=o(28453);const s={title:"local",sidebar_position:2,slug:"/container-local-mode"},a="Container metaframe: local mode {#182018579bb580fc8e31faed4888aa81}",i={},l=[{value:"Run the worker agent in local mode",id:"182018579bb580ccb5e6f61b1a54c2ac",level:2},{value:"Steps to run the worker agent",id:"1a5018579bb580af9b18f97b823f53c0",level:3},{value:"What is happening?",id:"182018579bb580b1ba94cd96431b459e",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsxs)(n.h1,{id:"182018579bb580fc8e31faed4888aa81",children:["Container metaframe: ",(0,t.jsx)(n.code,{children:"local"})," mode"]})}),"\n",(0,t.jsx)(n.p,{children:"All containers are run locally, no server API is used."}),"\n",(0,t.jsx)(n.h2,{id:"182018579bb580ccb5e6f61b1a54c2ac",children:"Run the worker agent in local mode"}),"\n",(0,t.jsx)(n.p,{children:"Prerequisites:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.docker.com/get-started/get-docker/",children:"Install Docker"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"1a5018579bb580af9b18f97b823f53c0",children:"Steps to run the worker agent"}),"\n",(0,t.jsxs)(n.p,{children:["(",(0,t.jsx)(n.a,{href:"/docs/container-cli-reference",children:"see here for a reference"})," to the worker command)"]}),"\n",(0,t.jsxs)("div",{className:"custom-docunotion-row",children:[(0,t.jsx)("div",{className:"custom-docunotion-row-cell",children:(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsx)("code",{children:"Settings"})]})}),(0,t.jsx)("div",{className:"custom-docunotion-row-cell",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:o(17511).A+"",width:"496",height:"754"})})})]}),"\n",(0,t.jsxs)("div",{className:"custom-docunotion-row",children:[(0,t.jsxs)("div",{className:"custom-docunotion-row-cell",children:[(0,t.jsx)("code",{children:"Compute"}),(0,t.jsx)("br",{})]}),(0,t.jsx)("div",{className:"custom-docunotion-row-cell",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:o(9202).A+"",width:"632",height:"342"})})})]}),"\n",(0,t.jsxs)("div",{className:"custom-docunotion-row",children:[(0,t.jsx)("div",{className:"custom-docunotion-row-cell",children:(0,t.jsx)(n.p,{children:"Copy the terminal command to run the remote worker agent, and paste it in your terminal, or use this command to set up your remote instance"})}),(0,t.jsx)("div",{className:"custom-docunotion-row-cell",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:o(59257).A+"",width:"1574",height:"1288"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"182018579bb580b1ba94cd96431b459e",children:"What is happening?"}),"\n",(0,t.jsx)(n.p,{children:"The machine running this command will connect to the remote queue, then take and run jobs from the queue, and on completion notify the server and client."}),"\n",(0,t.jsx)(n.h1,{id:"188018579bb580618793f91d0f3a73d7",children:"Related topics"}),"\n",(0,t.jsx)(n.mermaid,{value:'graph LR\n  containers["Metaframe: Containers"]\n  local["Local mode"]\n  remote["Remote mode"]\n  gitrefs["git refs in URLs"]\n  cli["cli reference"]\n  urlparams["URL parameters"]\n\n  containers --\x3e remote  \n  containers --\x3e local\n  containers --\x3e gitrefs\n  remote --\x3e cli\n  local --\x3e cli\n  urlparams --\x3e gitrefs\n  click containers "/docs/containers"\n  click remote "/docs/container-remote-mode"\n  click local "/docs/container-local-mode"\n  style local fill:#fff,stroke:#999999,stroke-width:2px,color:#000\n  click gitrefs "/docs/git-refs-in-urls"\n  click cli "/docs/container-cli-reference"\n  click urlparams "/docs/inject-url-parameters"'})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);
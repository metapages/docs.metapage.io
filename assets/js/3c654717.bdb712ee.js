"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[6977],{95388:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"Containers/container-remote-mode","title":"remote","description":"182018579bb58080b559fa7a0912a584}","source":"@site/docs/Containers/container-remote-mode.mdx","sourceDirName":"Containers","slug":"/container-remote-mode","permalink":"/docs/container-remote-mode","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"remote","sidebar_position":1,"slug":"/container-remote-mode"},"sidebar":"tutorialSidebar","previous":{"title":"Containers","permalink":"/docs/containers"},"next":{"title":"local","permalink":"/docs/container-local-mode"}}');var t=r(74848),a=r(28453);const c={title:"remote",sidebar_position:1,slug:"/container-remote-mode"},s="Container metaframe: remote mode {#182018579bb58080b559fa7a0912a584}",i={},d=[{value:"Run the worker agent in <code>remote</code> mode",id:"182018579bb580818375e43f7c5c752f",level:2},{value:"Queue key",id:"182018579bb580f399b7ccd73336d72a",level:3},{value:"Command",id:"182018579bb58060a19feccd833355ac",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsxs)(n.h1,{id:"182018579bb58080b559fa7a0912a584",children:["Container metaframe: ",(0,t.jsx)(n.code,{children:"remote"})," mode"]})}),"\n",(0,t.jsx)(n.mermaid,{value:'graph LR\n  containers["Metaframe: Containers"]\n  local["Local mode"]\n  remote["Remote mode"]\n  gitrefs["git refs in URLs"]\n\n  containers --\x3e remote  \n  containers --\x3e local\n  containers --\x3e gitrefs\n  click containers "/docs/containers"\n  click remote "/docs/container-remote-mode"\n  style remote fill:#fff,stroke:#999999,stroke-width:2px,color:#000\n  click local "/docs/container-local-mode"\n  click gitrefs "/docs/git-refs-in-urls"'}),"\n",(0,t.jsx)(n.p,{children:"The container metaframe allows metapage workflows in the browser to run any kind of code or process via docker containers: python, R, C++. Your computer or cluster can then run others workflows instantly."}),"\n",(0,t.jsxs)(n.h2,{id:"182018579bb580818375e43f7c5c752f",children:["Run the worker agent in ",(0,t.jsx)(n.code,{children:"remote"})," mode"]}),"\n",(0,t.jsx)(n.p,{children:"Prerequisites:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.docker.com/get-started/get-docker/",children:"Install Docker"})}),"\n",(0,t.jsx)(n.li,{children:"A queue key"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"182018579bb580f399b7ccd73336d72a",children:"Queue key"}),"\n",(0,t.jsx)(n.p,{children:"Workers and clients connect to the same (hidden, unique, unguessable) queue, so generate a long and unguessable queue. E.g. in the termainal:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'head -c 1024 /dev/urandom | base64 | tr -cd "[:lower:][:digit:]" | head -c 32\n\n'})}),"\n",(0,t.jsx)(n.h3,{id:"182018579bb58060a19feccd833355ac",children:"Command"}),"\n",(0,t.jsxs)(n.p,{children:["Then run this terminal command to start the metaframe container worker agent in ",(0,t.jsx)(n.code,{children:"remote"})," mode, listening for jobs on ",(0,t.jsx)(n.code,{children:"<queue>"})," (replace with your own queue)"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"docker run --rm -p 8000:8000 -v /var/run/docker.sock:/var/run/docker.sock \\\n\t-v /tmp:/tmp metapage/metaframe-docker-worker:0.53.0 \\\n\trun --data-directory /tmp/worker-metapage-io-remote \\\n\t--cpus=1 <queue>\n"})}),"\n",(0,t.jsx)(n.p,{children:"The container metaframes in a workflow send jobs to a remote queue via the api. Workers connected to that same queue then pick up and run the jobs."})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>s});var o=r(96540);const t={},a=o.createContext(t);function c(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);
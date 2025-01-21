"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[2258],{90450:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=o(11527),t=o(33703);const a={title:"local",sidebar_position:2,slug:"/container-local-mode"},c="Container metaframe: local mode {#182018579bb580fc8e31faed4888aa81}",i={id:"Containers/container-local-mode",title:"local",description:"182018579bb580fc8e31faed4888aa81}",source:"@site/docs/Containers/container-local-mode.mdx",sourceDirName:"Containers",slug:"/container-local-mode",permalink:"/docs/container-local-mode",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"local",sidebar_position:2,slug:"/container-local-mode"},sidebar:"tutorialSidebar",previous:{title:"remote",permalink:"/docs/container-remote-mode"}},s={},l=[{value:"Run the worker agent in local mode",id:"182018579bb580ccb5e6f61b1a54c2ac",level:2},{value:"What is happening?",id:"182018579bb580b1ba94cd96431b459e",level:2},{value:"Running metapage workflows in perpetuity",id:"182018579bb5806fba1fdb2d476de235",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsxs)(n.h1,{id:"182018579bb580fc8e31faed4888aa81",children:["Container metaframe: ",(0,r.jsx)(n.code,{children:"local"})," mode"]})}),"\n",(0,r.jsx)(n.mermaid,{value:'graph LR\n  containers["Metaframe: Containers"]\n  local["Local mode"]\n  remote["Remote mode"]\n\n  containers --\x3e remote  \n  containers --\x3e local\n  click containers "/docs/containers"\n  click remote "/docs/container-remote-mode"\n  click local "/docs/container-local-mode"\n  style local fill:#fff,stroke:#999999,stroke-width:2px,color:#000'}),"\n",(0,r.jsx)(n.p,{children:"All containers are run locally, no server API is used."}),"\n",(0,r.jsx)(n.h2,{id:"182018579bb580ccb5e6f61b1a54c2ac",children:"Run the worker agent in local mode"}),"\n",(0,r.jsx)(n.p,{children:"Prerequisites:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.docker.com/get-started/get-docker/",children:"Install Docker"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Then run this terminal command to start the metaframe container worker agent in ",(0,r.jsx)(n.code,{children:"local"})," mode:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"docker run --rm -p 8000:8000 \\\n\t-v /var/run/docker.sock:/var/run/docker.sock \\\n\t-v /tmp:/tmp metapage/metaframe-docker-worker:0.50.0 \\\n\trun --data-directory /tmp/worker-metapage-io \\\n\t--cpus=1 --mode=local \n"})}),"\n",(0,r.jsx)(n.h2,{id:"182018579bb580b1ba94cd96431b459e",children:"What is happening?"}),"\n",(0,r.jsx)(n.p,{children:"Your computer will be used to run containers from metapage workflows."}),"\n",(0,r.jsxs)(n.p,{children:["The worker agent connects to the docker daemon and the container browser client via ",(0,r.jsx)(n.a,{href:"http://localhost:8000/",children:(0,r.jsx)(n.code,{children:"http://localhost:8000"})})," and runs docker container jobs sent by the browser client."]}),"\n",(0,r.jsx)(n.h2,{id:"182018579bb5806fba1fdb2d476de235",children:"Running metapage workflows in perpetuity"}),"\n",(0,r.jsxs)(n.p,{children:["Even if the metapage organization is no longer active, because the agent is open-source and will always be available, and because metapages are workflows that run in the browser, your workflows will ",(0,r.jsx)(n.em,{children:"always"})," be able to run."]}),"\n",(0,r.jsx)(n.p,{children:"The only thing needed to run workflows is a browser, and something to run containers (this agent) running on the same computer as your browser."}),"\n",(0,r.jsx)(n.p,{children:"In other words: you own your data, code, and the compute environment."})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},33703:(e,n,o)=>{o.d(n,{Z:()=>i,a:()=>c});var r=o(50959);const t={},a=r.createContext(t);function c(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);
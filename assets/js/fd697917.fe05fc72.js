"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[1330],{8181:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"Containers/container-cli-reference","title":"worker cli reference","description":"199018579bb580eabec7f8348c474287}","source":"@site/docs/Containers/container-cli-reference.mdx","sourceDirName":"Containers","slug":"/container-cli-reference","permalink":"/docs/container-cli-reference","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"worker cli reference","sidebar_position":3,"slug":"/container-cli-reference"},"sidebar":"tutorialSidebar","previous":{"title":"local","permalink":"/docs/container-local-mode"},"next":{"title":"github refs in URLs","permalink":"/docs/git-refs-in-urls"}}');var s=n(4848),c=n(8453);const i={title:"worker cli reference",sidebar_position:3,slug:"/container-cli-reference"},o="Command line reference for the worker agent {#199018579bb580eabec7f8348c474287}",d={},l=[{value:"Run the worker",id:"1a7018579bb580268e62d77791020321",level:2},{value:"GPUs",id:"1a7018579bb58068b9cbd3579f9dc29f",level:2},{value:"Env vars",id:"199018579bb580c8a23cea38b29e5b58",level:2},{value:"Automatic local upgrades",id:"1a7018579bb58049a455de1863d9dfd0",level:2},{value:"High Level Security",id:"1a7018579bb580bf801ffa81b37afeeb",level:2}];function a(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",mermaid:"mermaid",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"199018579bb580eabec7f8348c474287",children:"Command line reference for the worker agent"})}),"\n",(0,s.jsx)(r.h2,{id:"1a7018579bb580268e62d77791020321",children:"Run the worker"}),"\n",(0,s.jsxs)(r.p,{children:["Go to ",(0,s.jsx)(r.a,{href:"https://metapage.io/settings/queues",children:"https://metapage.io/settings/queues"})," to get the terminal command to run a worker agent."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:n(5716).A+"",width:"1538",height:"528"})}),"\n",(0,s.jsx)(r.h2,{id:"1a7018579bb58068b9cbd3579f9dc29f",children:"GPUs"}),"\n",(0,s.jsxs)(r.p,{children:["Use the command line argument ",(0,s.jsx)(r.code,{children:"--gpus=x"})," to set the number of GPUs to ",(0,s.jsx)(r.code,{children:"x"}),". This should not exceed the number of gpus on your machine."]}),"\n",(0,s.jsx)(r.h2,{id:"199018579bb580c8a23cea38b29e5b58",children:"Env vars"}),"\n",(0,s.jsx)(r.p,{children:"These are the environment variables that can be used instead of cli arguments, also some advanced options are only available via env vars:"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Env var"}),(0,s.jsx)(r.th,{children:"cli command example"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"METAPAGE_IO_CPUS"}),(0,s.jsx)(r.td,{children:"\u2014cpus 1"}),(0,s.jsx)(r.td,{children:"The max number CPU cores the worker will claim for jobs"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"METAPAGE_IO_GPUS"}),(0,s.jsx)(r.td,{children:"\u2014gpus 1"}),(0,s.jsx)(r.td,{children:"The max number GPUs the worker will claim for jobs"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"METAPAGE_IO_MODE"}),(0,s.jsxs)(r.td,{children:["\u2014mode ",(0,s.jsx)(r.code,{children:"local"})]}),(0,s.jsxs)(r.td,{children:["Default: ",(0,s.jsx)(r.code,{children:"remote"}),". ",(0,s.jsx)(r.code,{children:"remote"})," mode means the queue is in the cloud. ",(0,s.jsx)(r.code,{children:"local"})," means all compute runs on the local machine, no scaling possible, but does not require any external API."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"METAPAGE_IO_QUEUE"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"The queue the worker connects to for jobs to complete"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"METAPAGE_IO_PORT"}),(0,s.jsx)(r.td,{children:"\u2014port 8000"}),(0,s.jsxs)(r.td,{children:["Default: 8000. When in ",(0,s.jsx)(r.code,{children:"--mode local"}),", this is the port the worker uses to connect."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"METAPAGE_IO_API_ADDRESS"}),(0,s.jsxs)(r.td,{children:["\u2014api-address ",(0,s.jsx)(r.a,{href:"https://container.mtfm.io",children:"https://container.mtfm.io"})]}),(0,s.jsx)(r.td,{children:"Advanced or development use only. Allows connecting the worker to a different API queue server"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"(tbd)"}),(0,s.jsx)(r.td,{children:"--data-directory"}),(0,s.jsxs)(r.td,{children:["Default: ",(0,s.jsx)(r.code,{children:"/tmp/worker-metapage-io"}),". The base directory where jobs and the file cache are stored. Use your home directory if you want this persisted."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"METAPAGE_IO_GENERATE_WORKER_ID"}),(0,s.jsx)(r.td,{}),(0,s.jsxs)(r.td,{children:["If set to ",(0,s.jsx)(r.code,{children:"true"})," then the worker will always generate a new unique id on every start."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"METAPAGE_IO_WORKER_RUN_STANDALONE"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"If set to true, will start a docker daemon process as a subprocess."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"METAPAGE_IO_DEBUG"}),(0,s.jsx)(r.td,{children:"\u2014debug"}),(0,s.jsxs)(r.td,{children:["Default: ",(0,s.jsx)(r.code,{children:"false"}),". Adds a lot of extra logging."]})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"1a7018579bb58049a455de1863d9dfd0",children:"Automatic local upgrades"}),"\n",(0,s.jsx)(r.p,{children:"A deno command to automatically upgrade the worker to the latest version:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:"deno run -A --unstable jsr:@metapages/cli@0.2.0 worker upgrade\n"})}),"\n",(0,s.jsx)(r.h2,{id:"1a7018579bb580bf801ffa81b37afeeb",children:"High Level Security"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Job containers do not have host network access"}),"\n",(0,s.jsxs)(r.li,{children:["Job containers only have host files mounted in at ",(0,s.jsx)(r.code,{children:"/inputs"})," and ",(0,s.jsx)(r.code,{children:"/outputs"})]}),"\n",(0,s.jsx)(r.li,{children:"Job containers are only configurable by a restricted set of options"}),"\n"]}),"\n",(0,s.jsx)(r.mermaid,{value:'graph LR\n  containers["Metaframe: Containers"]\n  local["Local mode"]\n  remote["Remote mode"]\n  gitrefs["git refs in URLs"]\n  cli["cli reference"]\n  urlparams["URL parameters"]\n\n  containers --\x3e remote  \n  containers --\x3e local\n  containers --\x3e gitrefs\n  remote --\x3e cli\n  local --\x3e cli\n  urlparams --\x3e gitrefs\n  click containers "/docs/containers"\n  click remote "/docs/container-remote-mode"\n  click local "/docs/container-local-mode"\n  click gitrefs "/docs/git-refs-in-urls"\n  click cli "/docs/container-cli-reference"\n  style cli fill:#fff,stroke:#999999,stroke-width:2px,color:#000\n  click urlparams "/docs/inject-url-parameters"'})]})}function h(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},5716:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/container-cli-reference.1a701857-9bb5-80bc-88cd-eeda24552c7e-8e43ba0ccf2d40d5136715e3832d2929.png"},8453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>o});var t=n(6540);const s={},c=t.createContext(s);function i(e){const r=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(c.Provider,{value:r},e.children)}}}]);
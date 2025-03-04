"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[2898],{6013:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"Containers/containers","title":"Containers","description":"Containers allow you to run almost anything. By running a worker agent on your machine(s), you can then power container metaframes, each passing data as inputs and outputs to other metaframes in your workflow.","source":"@site/docs/Containers/containers.mdx","sourceDirName":"Containers","slug":"/containers","permalink":"/docs/containers","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"title":"Containers","sidebar_position":0,"slug":"/containers"},"sidebar":"tutorialSidebar","previous":{"title":"Drug Discovery","permalink":"/docs/drug-discovery"},"next":{"title":"remote","permalink":"/docs/container-remote-mode"}}');var t=r(4848),i=r(8453);const o={title:"Containers",sidebar_position:0,slug:"/containers"},a="Run docker containers in the browser {#182018579bb5805d8ec5e9d2ef32c999}",c={},d=[{value:"Quickstart: Run a worker",id:"189018579bb580aaa4fbfb497ab9e587",level:2},{value:"Step 1: run a worker on your computer(s)",id:"189018579bb580f08de9d4a0d6701064",level:3},{value:"Step 2: Add a container",id:"189018579bb5808b937ac58a87cbed70",level:3},{value:"Step 3: Configure and run the container",id:"189018579bb5804dbafddb306da4485c",level:3},{value:"System Environment Variables",id:"182018579bb580b1b9a8cabcc256a742",level:2},{value:"User Environment Variables",id:"1a5018579bb580e0b40aea87c3d98954",level:2},{value:"Inputs, outputs, and caching",id:"182018579bb58009b091efebc56694f6",level:2},{value:"Define Inputs and Outputs",id:"182018579bb580cbb955f2aa4afacac6",level:3},{value:"Directory for caching data and large ML models",id:"182018579bb580a2b13ec3905120ef2b",level:3},{value:"Description",id:"182018579bb580ba89edfd8bbfea4cfa",level:2},{value:"Example URL",id:"182018579bb5806d8af7cc0e136a2d63",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",mermaid:"mermaid",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Containers allow you to run almost anything. By running a worker agent on your machine(s), you can then power container metaframes, each passing data as inputs and outputs to other metaframes in your workflow."}),"\n",(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"182018579bb5805d8ec5e9d2ef32c999",children:"Run docker containers in the browser"})}),"\n",(0,t.jsxs)(n.p,{children:["Metapage workflows run in the browser. However many scientific workflows need to run languages like python or R, which do not (yet) run natively in the browser. The container metaframe (",(0,t.jsx)(n.a,{href:"https://container.mtfm.io/",children:"container.mtfm.io"}),") solves this problem by providing public compute queues (a \u201cgrid\u201d) that metapage workflows can \u201cplug\u201d into like an electrical grid."]}),"\n",(0,t.jsx)(n.p,{children:"You can provide your own computer(s) to your personal grid (queue), or plug a cluster into the grid so your entire team can share the same resources (coming soon). When someone else runs your workflows, they will automatically run it on their own grid, or their own computer."}),"\n",(0,t.jsx)(n.p,{children:"We abstract away where compute is done, so you can focus on what matters."}),"\n",(0,t.jsx)(n.h2,{id:"189018579bb580aaa4fbfb497ab9e587",children:"Quickstart: Run a worker"}),"\n",(0,t.jsx)(n.h3,{id:"189018579bb580f08de9d4a0d6701064",children:"Step 1: run a worker on your computer(s)"}),"\n",(0,t.jsx)(n.p,{children:"To run containers, you need to run a worker:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/container-local-mode",children:"run in local mode"})}),(0,t.jsx)(n.td,{children:"Start here. All data is local to this computer, never to cloud storage. Also quicker and simpler. Desktop only, mobile/tablet not yet supported."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/container-remote-mode",children:"run in remote mode"})}),(0,t.jsx)(n.td,{children:"If you want access to scaleable compute resources, cloud storage, or viewing workflows on phones and tablets"})]})]})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Soon on our roadmap are cloud compute resources on demand, with zero configuration. Until then, you must run your own workers."})}),"\n",(0,t.jsx)(n.h3,{id:"189018579bb5808b937ac58a87cbed70",children:"Step 2: Add a container"}),"\n",(0,t.jsx)(n.p,{children:"Either add a container from searching or add directly."}),"\n",(0,t.jsxs)("div",{className:"custom-docunotion-row",children:[(0,t.jsx)("div",{className:"custom-docunotion-row-cell",children:(0,t.jsx)("p",{children:"Via search:"})}),(0,t.jsx)("div",{className:"custom-docunotion-row-cell",children:(0,t.jsx)("p",{children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(9400).A+"",width:"1088",height:"778"})})})})]}),"\n",(0,t.jsxs)("div",{className:"custom-docunotion-row",children:[(0,t.jsx)("div",{className:"custom-docunotion-row-cell",children:(0,t.jsx)("p",{children:"Via [+ Add] a \u201cDocker Container\u201d:"})}),(0,t.jsx)("div",{className:"custom-docunotion-row-cell",children:(0,t.jsx)("p",{children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(8466).A+"",width:"476",height:"734"})})})})]}),"\n",(0,t.jsx)(n.h3,{id:"189018579bb5804dbafddb306da4485c",children:"Step 3: Configure and run the container"}),"\n",(0,t.jsxs)("div",{className:"custom-docunotion-row",children:[(0,t.jsx)("div",{className:"custom-docunotion-row-cell",children:(0,t.jsx)("p",{children:"Configure your docker job, then run"})}),(0,t.jsx)("div",{className:"custom-docunotion-row-cell",children:(0,t.jsx)("p",{children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(2597).A+"",width:"1664",height:"1044"})})})})]}),"\n",(0,t.jsx)(n.h1,{id:"182018579bb5802d9836db3a88aa60d1",children:"Docker environment"}),"\n",(0,t.jsx)(n.h2,{id:"182018579bb580b1b9a8cabcc256a742",children:"System Environment Variables"}),"\n",(0,t.jsx)(n.p,{children:"These env vars are available in your container"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"environment variable"}),(0,t.jsx)(n.th,{children:"description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"JOB_INPUTS"})}),(0,t.jsxs)(n.td,{children:["Default: ",(0,t.jsx)(n.code,{children:"/inputs"}),". The directory where job input files are copied."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"JOB_OUTPUTS"})}),(0,t.jsxs)(n.td,{children:["Default: ",(0,t.jsx)(n.code,{children:"/outputs"}),". The directory where job output files will be copied when the job finishes successfully."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"JOB_CACHE"})}),(0,t.jsxs)(n.td,{children:["Default: ",(0,t.jsx)(n.code,{children:"/job-cache"}),". Shared directory for caching e.g. large models."]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"1a5018579bb580e0b40aea87c3d98954",children:"User Environment Variables"}),"\n",(0,t.jsxs)(n.p,{children:["All search params in the URL (",(0,t.jsx)(n.code,{children:"\u2026?<key>=<value>"}),") are injected into the container as env vars:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"name"}),(0,t.jsx)(n.th,{children:"value"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"<key>"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"<value>"})})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"182018579bb58009b091efebc56694f6",children:"Inputs, outputs, and caching"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Inputs are copied into the directory ",(0,t.jsx)(n.code,{children:"/inputs"}),". The env var ",(0,t.jsx)(n.code,{children:"$JOB_INPUTS"})," is set to this directory."]}),"\n",(0,t.jsxs)(n.li,{children:["Copy output files to ",(0,t.jsx)(n.code,{children:"/outputs"}),". The env var ",(0,t.jsx)(n.code,{children:"$JOB_OUTPUTS"})," is set to this directory."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"182018579bb580cbb955f2aa4afacac6",children:"Define Inputs and Outputs"}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.code,{children:"Settings / Definition"})," you can define inputs and outputs. This doesn't change how the code runs, but it helps to quickly connect other metaframes in ",(0,t.jsx)(n.a,{href:"https://metapage.io/",children:"metapages"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["In this example, we defined an input: ",(0,t.jsx)(n.code,{children:"input.json"})," and an output ",(0,t.jsx)(n.code,{children:"data.csv"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(5854).A+"",width:"1116",height:"334"})}),"\n",(0,t.jsx)(n.p,{children:"You will see these inputs and outputs automatically in the metapage editor."}),"\n",(0,t.jsx)(n.h3,{id:"182018579bb580a2b13ec3905120ef2b",children:"Directory for caching data and large ML models"}),"\n",(0,t.jsxs)(n.p,{children:["The directory defined in the env var ",(0,t.jsx)(n.code,{children:"$JOB_CACHE"})," (defaults to ",(0,t.jsx)(n.code,{children:"/job-cache"}),") is shared between all jobs running on a host. Use this location to store large data sets and models."]}),"\n",(0,t.jsx)(n.p,{children:"The cache is not shared between worker instances, only between jobs running on a single instance or computer. It comes with no guarantees."}),"\n",(0,t.jsx)(n.h2,{id:"182018579bb580ba89edfd8bbfea4cfa",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"container.mtfm.io"})," runs docker containers on workers. It is currently in beta."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Run any publicly available docker image: ",(0,t.jsx)(n.code,{children:"Python"}),", ",(0,t.jsx)(n.code,{children:"R"}),", ",(0,t.jsx)(n.code,{children:"C++"}),", ",(0,t.jsx)(n.code,{children:"Java"}),", ... anything."]}),"\n",(0,t.jsxs)(n.li,{children:["Bring your own workers","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Currently individual machines are supported, but kubernetes and nomad support coming soon"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Your queue is simply an unguessable hash. Do not share it without consideration."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Use cases:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"machine learning pipelines"}),"\n",(0,t.jsx)(n.li,{children:"data analysis workflows"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Any time the inputs change (and on start) the configured docker container is run:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"/inputs"})," is the location where inputs are copied as files"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"/outputs"}),": any files here when the container exits are passed on as metaframe outputs"]}),"\n"]}),"\n",(0,t.jsx)(n.mermaid,{value:'flowchart TD\n  classDef mpColor fill:#fff,stroke:#31AEE4,stroke-width:2px;\n\n  subgraph metapage\n    browser["<https://docker.mtfm.io>"]:::mpColor\n    metaframeIn[metaframe with inputs]:::mpColor --\x3e | inputs to docker job| browser\n    browser --\x3e | outputs from docker job| metaframeOut[metaframe consuming outputs]:::mpColor\n  end\n  server[server with job queue];\n  worker["worker (takes jobs running on your infrastructure/computer)"] --- |docker image,inputs,outouts| server\n  browser --- |docker image,inputs,outouts| server\n  worker --\x3e container["docker job"]\n  linkStyle 0,1 stroke:#31AEE4,stroke-width:2px;\n'}),"\n",(0,t.jsx)(n.p,{children:"Versioned. Reproducible. No client install requirements, as long as you have at least one worker running somewhere, you\ncan run any programming language."}),"\n",(0,t.jsx)(n.h2,{id:"182018579bb5806d8af7cc0e136a2d63",children:"Example URL"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://container.mtfm.io/?command=cHJpbnQgXCggc2Rmc2RmMiBcKQ%3D%3D&image=python3#/queue/1?autostart=true&command=cHl0aG9uIC1jICdwcmludCgiaGVscCIpJw%253D%253D&image=python%253A3.8.8-alpine3.13&job=JTdCJTIyY29tbWFuZCUyMiUzQSUyMnB5dGhvbiUyMC1jJTIwJ3ByaW50KCU1QyUyMmhlbGxvJTIwd29ybGQlNUMlMjIpJyUyMiUyQyUyMmltYWdlJTIyJTNBJTIycHl0aG9uJTNBMy4xMi4xLWFscGluZTMuMTklMjIlN0Q%3D&queue=public1",children:"Click here to run a python command in a container"})}),"\n",(0,t.jsx)(n.h1,{id:"19c018579bb580e680fec0bce97d92bb",children:"Github repository"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/metapages/compute-queues",children:"https://github.com/metapages/compute-queues"})}),"\n",(0,t.jsx)(n.h1,{id:"187018579bb580349574cf90b8f28d0d",children:"Related topics"}),"\n",(0,t.jsx)(n.mermaid,{value:'graph LR\n  containers["Metaframe: Containers"]\n  local["Local mode"]\n  remote["Remote mode"]\n  gitrefs["git refs in URLs"]\n  cli["cli reference"]\n  urlparams["URL parameters"]\n\n  containers --\x3e remote  \n  containers --\x3e local\n  containers --\x3e gitrefs\n  remote --\x3e cli\n  local --\x3e cli\n  urlparams --\x3e gitrefs\n  click containers "/docs/containers"\n  style containers fill:#fff,stroke:#999999,stroke-width:2px,color:#000\n  click remote "/docs/container-remote-mode"\n  click local "/docs/container-local-mode"\n  click gitrefs "/docs/git-refs-in-urls"\n  click cli "/docs/container-cli-reference"\n  click urlparams "/docs/inject-url-parameters"'}),"\n",(0,t.jsx)(n.p,{children:"Go to settings"})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},5854:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/containers.18201857-9bb5-804f-89ea-ede3b541ffe7-3ed7530923481ccd27b57f5917fcf33b.png"},9400:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/containers.18901857-9bb5-803e-b819-e31a248fd3c9-9d761d5d14eb7d25059c015197547eb5.png"},8466:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/containers.18901857-9bb5-808f-9cce-d42ca193ace9-e6813e49991e79b58d84e08a25b1f85a.png"},2597:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/containers.18901857-9bb5-80ab-997b-eae72a8da765-d54eca2f550f5996789ca691be2d9fe0.png"},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var s=r(6540);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[5005],{92352:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var a=t(59469),i=t(74848),o=t(28453);const r={title:"FAIR principles apply to data- what about compute",sidebar_position:0,slug:"/fair-data-what-about-compute",date:new Date("2025-02-05T00:00:00.000Z"),authors:"dion",hide_table_of_contents:!0},s="Computation is missing from the FAIR principles {#193018579bb580129283e48d1ef8fc1a}",c={authorsImageUrls:[void 0]},d=[{value:"<strong>Findable</strong>",id:"193018579bb58033b274fc6868f09851",level:3},{value:"<strong>Accessible</strong>",id:"193018579bb5806d8b11ecbac488a97b",level:3},{value:"<strong>Interoperable</strong>",id:"193018579bb580d78c45f459b7311267",level:3},{value:"<strong>Reusable</strong>",id:"193018579bb5807cb410fa8a20dddd2c",level:3},{value:"1. Given a definition a user can easily recreate an exact replica of a given compute environment",id:"193018579bb580a7b138f1d5bf35075b",level:3},{value:"2. Tools to recreate a compute environment are open-source and accessible",id:"193018579bb58071b07edf16ec3cb20b",level:3},{value:"3. Recreated compute environments are compatible",id:"193018579bb58015b313f5ac8e849bc2",level:3},{value:"4. Users can get data in and out of recreated compute environments",id:"193018579bb580ae931ad88d01a43e5f",level:3}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The metapage organization and platform ",(0,i.jsx)(n.a,{href:"/blog/fair-principles",children:"is guided by FAIR principles"}),". However the ",(0,i.jsx)(n.a,{href:"https://www.go-fair.org/fair-principles/",children:"FAIR principles"})," are mostly about data, and accessing data. What\u2019s missing is computation, or specifically, how the data is processed."]}),"\n",(0,i.jsxs)(n.p,{children:["It\u2019s one thing to have access to data, but it\u2019s another thing to have code ",(0,i.jsx)(n.em,{children:"and also"})," a reliable, reproducible way to run the code that operates on the data. In other words, it\u2019s not enough to just serve data, we also need principles around HOW we create compute environments that process the data."]}),"\n",(0,i.jsxs)(n.p,{children:["Data often doesn\u2019t live on it\u2019s own, it often requires extra tooling. For example, The Protein Data Bank ",(0,i.jsx)(n.a,{href:"https://www.rcsb.org/",children:"https://www.rcsb.org/"}),": it serves various protein structures and complexes, but also has multiple ways to display and interact with the 3D structures:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(37358).A+"",width:"469",height:"341"})}),"\n",(0,i.jsx)(n.p,{children:"Simply having a database serving files is not enough. Researchers need tools integrated with with data to be able to view, summarize, search, etc."}),"\n",(0,i.jsx)(n.h1,{id:"193018579bb5800a8b0cf94459c90bb6",children:"Towards principles for FAIR-aligned computation"}),"\n",(0,i.jsx)(n.p,{children:"The goal is that given some definition, a user can automatically reproduce and use a compute environment and run some code in that environment, operating on (FAIR \ud83d\ude00) data."}),"\n",(0,i.jsx)(n.p,{children:"Since this is compute not data, the principles are overlapping, yet different:"}),"\n",(0,i.jsx)(n.h3,{id:"193018579bb58033b274fc6868f09851",children:(0,i.jsx)(n.strong,{children:"Findable"})}),"\n",(0,i.jsx)(n.p,{children:"This property is not as important as for data, because compute environments are inherently ephemeral. The underlying libraries and code to build the environments must be accessible."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"193018579bb5806d8b11ecbac488a97b",children:(0,i.jsx)(n.strong,{children:"Accessible"})}),"\n",(0,i.jsx)(n.p,{children:"Code and tools to build and run the compute environments must be accessible."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"A1"})," The metadata describing how to build the environment must suffice for the majority of tools and systems used to run the environments."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"A2"})," The tools used to build the environment must be ",(0,i.jsx)(n.strong,{children:"open, free, and universally implementable"})," (e.g., Git, DockerHub, OCI registries)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"A3."})," ",(0,i.jsx)(n.strong,{children:"Metadata remains accessible"})," even if the code or environment is deprecated, providing references to alternative implementations or archived versions."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"193018579bb580d78c45f459b7311267",children:(0,i.jsx)(n.strong,{children:"Interoperable"})}),"\n",(0,i.jsx)(n.p,{children:"Code and compute environments should work across platforms and integrate seamlessly into workflows."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"I1."})," The compute environments described should be machine readable, and convertible into compatible platforms (e.g. ",(0,i.jsx)(n.a,{href:"https://podman-desktop.io/docs/migrating-from-docker/managing-docker-compatibility",children:"docker and podman"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"I2."})," Code running in an environment build by one platform should run the same as an environment built with a different platform."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"193018579bb5807cb410fa8a20dddd2c",children:(0,i.jsx)(n.strong,{children:"Reusable"})}),"\n",(0,i.jsx)(n.p,{children:"Code and compute environments should be designed to be replicable and adaptable for future research."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"R1."})," A compute environment running some code can be used for running different, but compatible code. I"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"193018579bb580a7b138f1d5bf35075b",children:"1. Given a definition a user can easily recreate an exact replica of a given compute environment"}),"\n",(0,i.jsxs)(n.p,{children:["In today\u2019s world, this would be docker containers, or some variant of docker e.g ",(0,i.jsx)(n.a,{href:"https://podman.io/",children:"podman"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"193018579bb58071b07edf16ec3cb20b",children:"2. Tools to recreate a compute environment are open-source and accessible"}),"\n",(0,i.jsx)(n.p,{children:"This includes docker, the client taking the definition, and the worker process that builds the images and runs the containers"}),"\n",(0,i.jsx)(n.h3,{id:"193018579bb58015b313f5ac8e849bc2",children:"3. Recreated compute environments are compatible"}),"\n",(0,i.jsx)(n.p,{children:"While there are different technology stacks to run the containers, a definition can be used to build any required particular implementation that will result in fundamentally the same compute environment (from the perspective of the code running)"}),"\n",(0,i.jsx)(n.h3,{id:"193018579bb580ae931ad88d01a43e5f",children:"4. Users can get data in and out of recreated compute environments"}),"\n",(0,i.jsx)(n.p,{children:"Compute environments are built to operate on data. Getting data in and out must not be a barrier or burden."}),"\n",(0,i.jsx)(n.h1,{id:"193018579bb580bcbca6fa8f6cd8f7c0",children:"The metapage platform solution"}),"\n",(0,i.jsx)(n.p,{children:"We represent docker containers and code as URLs:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(69990).A+"",width:"1233",height:"372"})}),"\n",(0,i.jsxs)(n.p,{children:["For a complete example showing a docker container running a ML workflow and producing visual output: ",(0,i.jsx)(n.a,{href:"https://metapage.io/dion/Python-ML-Workflow-385b95ab9cb04fa7a76df627b2bde668",children:"https://metapage.io/dion/Python-ML-Workflow-385b95ab9cb04fa7a76df627b2bde668"})]}),"\n",(0,i.jsx)(n.p,{children:"We provide an open and open-source compute queue API layer, where any user can create their own secure queue, connect their computer, and run docker containers and code all defined in a single URL."}),"\n",(0,i.jsxs)(n.p,{children:["The URL contains the ",(0,i.jsx)(n.code,{children:"Dockerfile"}),"  definition, or a publicly accessible docker image, optionally code, optionally a github repository to build from."]}),"\n",(0,i.jsx)(n.p,{children:"This way, the mechanism to build a reproducible compute environment is simply a URL, where users simply add their own commodity compute resources (their laptop, workstation, cluster, almost anything that can run docker containers)."}),"\n",(0,i.jsx)(n.p,{children:"If the user wanted to run their own complete system that is different, they can, because the definition of the compute environment is encoded into the URL, thus available for all."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},37358:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/fair-data-what-about-compute.19301857-9bb5-806f-bdf2-e7f51bf8b2c1-825f61188237a5872f9ae58c4da2d5dd.png"},69990:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/fair-data-what-about-compute.19301857-9bb5-80ec-9915-f915048ca263-ed97a3cf94bffedf7143cad05849420d.png"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var a=t(96540);const i={},o=a.createContext(i);function r(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:n},e.children)}},59469:e=>{e.exports=JSON.parse('{"permalink":"/blog/fair-data-what-about-compute","source":"@site/blog/fair-data-what-about-compute.mdx","title":"FAIR principles apply to data- what about compute","description":"The metapage organization and platform is guided by FAIR principles. However the FAIR principles are mostly about data, and accessing data. What\u2019s missing is computation, or specifically, how the data is processed.","date":"2025-02-05T00:00:00.000Z","tags":[],"hasTruncateMarker":false,"authors":[{"name":"Dion Whitehead","title":"Creator of Metapages","url":"https://github.com/metapages","email":"dion@metapage.io","socials":{"github":"https://github.com/dionjwa"},"imageURL":"https://github.com/dionjwa.png","key":"dion","page":null}],"frontMatter":{"title":"FAIR principles apply to data- what about compute","sidebar_position":0,"slug":"/fair-data-what-about-compute","date":"2025-02-05T00:00:00.000Z","authors":"dion","hide_table_of_contents":true},"unlisted":false,"prevItem":{"title":"Interactive Data Visualization Challenge","permalink":"/blog/competition-1"},"nextItem":{"title":"When Does Data Expire?","permalink":"/blog/deep-time-data-expiration"}}')}}]);
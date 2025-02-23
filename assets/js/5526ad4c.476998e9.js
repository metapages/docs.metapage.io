"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[5005],{92352:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var o=n(59469),i=n(74848),a=n(28453);const r={title:"FAIR principles apply to data- what about compute",sidebar_position:3,slug:"/fair-data-what-about-compute",date:new Date("2025-02-05T00:00:00.000Z"),authors:["dion"],hide_table_of_contents:!0},s="Computation is missing from the FAIR principles {#193018579bb580129283e48d1ef8fc1a}",c={authorsImageUrls:[void 0]},d=[{value:"<strong>Findable</strong>",id:"193018579bb58033b274fc6868f09851",level:3},{value:"<strong>Accessible</strong>",id:"193018579bb5806d8b11ecbac488a97b",level:3},{value:"<strong>Interoperable</strong>",id:"193018579bb580d78c45f459b7311267",level:3},{value:"<strong>Reusable</strong>",id:"193018579bb5807cb410fa8a20dddd2c",level:3},{value:"User experience",id:"194018579bb580be8653efea408daf81",level:2},{value:"How it works",id:"194018579bb5806aae41ee7529a1f9cf",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["It\u2019s one thing to have access to data, but it\u2019s another thing to have code ",(0,i.jsx)(t.em,{children:"and also"})," a reliable, reproducible way to run the code that operates on the data. In other words, it\u2019s not enough to just serve data, we also need principles around HOW we create compute environments that process the data."]}),"\n","\n",(0,i.jsxs)(t.p,{children:["Data often doesn\u2019t live on it\u2019s own, it often requires extra tooling. For example, The Protein Data Bank ",(0,i.jsx)(t.a,{href:"https://www.rcsb.org/",children:"https://www.rcsb.org/"}),": it serves various protein structures and complexes, but also has multiple ways to display and interact with the 3D structures:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(37358).A+"",width:"469",height:"341"})}),"\n",(0,i.jsx)(t.p,{children:"Simply having a database serving files is not enough. Researchers need tools integrated with with data to be able to view, summarize, search, etc."}),"\n",(0,i.jsx)(t.h1,{id:"193018579bb5800a8b0cf94459c90bb6",children:"Towards principles for FAIR-aligned computation"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://www.go-fair.org/fair-principles/",children:"FAIR principles"})," are mostly about data, and accessing data. What\u2019s missing is computation, or specifically, how the data is processed."]}),"\n",(0,i.jsx)(t.p,{children:"Ideally given some definition, a user can automatically reproduce and use a compute environment and run some code in that environment, operating on (FAIR \ud83d\ude00) data."}),"\n",(0,i.jsx)(t.p,{children:"Since this is compute not data, the principles are overlapping, yet different:"}),"\n",(0,i.jsx)(t.h3,{id:"193018579bb58033b274fc6868f09851",children:(0,i.jsx)(t.strong,{children:"Findable"})}),"\n",(0,i.jsx)(t.p,{children:"This property is not as important as for data, because compute environments are inherently ephemeral. The underlying libraries and code to build the environments must be accessible."}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"193018579bb5806d8b11ecbac488a97b",children:(0,i.jsx)(t.strong,{children:"Accessible"})}),"\n",(0,i.jsx)(t.p,{children:"Code and tools to build and run the compute environments must be accessible."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"A1"})," The metadata describing how to build the environment must suffice for the majority of tools and systems used to run the environments."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"A2"})," The tools used to build the environment must be ",(0,i.jsx)(t.strong,{children:"open, free, and universally implementable"})," (e.g., Git, DockerHub, OCI registries)."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"A3."})," ",(0,i.jsx)(t.strong,{children:"Metadata remains accessible"})," even if the code or environment is deprecated, providing references to alternative implementations or archived versions."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"A4."})," Where possible, compute environments are not prohibitive in resources to build unless specifically requirements dictate that necessity."]}),"\n"]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"193018579bb580d78c45f459b7311267",children:(0,i.jsx)(t.strong,{children:"Interoperable"})}),"\n",(0,i.jsx)(t.p,{children:"Code and compute environments should work across platforms and integrate seamlessly into workflows."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"I1."})," The compute environments described should be machine readable, and convertible into compatible platforms (e.g. ",(0,i.jsx)(t.a,{href:"https://podman-desktop.io/docs/migrating-from-docker/managing-docker-compatibility",children:"docker and podman"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"I2."})," Code running in an environment build by one platform should run the same as an environment built with a different platform."]}),"\n"]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"193018579bb5807cb410fa8a20dddd2c",children:(0,i.jsx)(t.strong,{children:"Reusable"})}),"\n",(0,i.jsx)(t.p,{children:"Code and compute environments should be designed to be replicable and adaptable for future research."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"R1."})," A compute environment running some code can be used for running different, but compatible code. Where possible, environments can be re-used for efficiency."]}),"\n"]}),"\n",(0,i.jsx)(t.h1,{id:"193018579bb580bcbca6fa8f6cd8f7c0",children:"The metapage platform solution"}),"\n",(0,i.jsxs)(t.p,{children:["The metapage organization and platform ",(0,i.jsx)(t.a,{href:"/blog/fair-principles",children:"is guided by FAIR principles"}),", and we have developed an open source platform and API for representing docker containers and code as URLs:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(69990).A+"",width:"1233",height:"372"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/blog/url-configured-websites",children:"We like URLs encoding state here!"})}),"\n",(0,i.jsx)(t.p,{children:"The URL encodes the full definition of:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"Dockerfile"}),", or docker image"]}),"\n",(0,i.jsx)(t.li,{children:"Optionally a git repository for building the docker image"}),"\n",(0,i.jsx)(t.li,{children:"Optionally scripts to mount into the container at runtime"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"We provide a worker agent the user runs on their own computer or cluster or workstation. The worker takes the docker image definition, and builds the image, then runs the code+data in the container environment. This browser client is actually a component, and can be connected to other browser components to exchange data."}),"\n",(0,i.jsxs)(t.p,{children:["For a complete example showing a docker container running a ML workflow and producing visual output: ",(0,i.jsx)(t.a,{href:"https://metapage.io/dion/Python-ML-Workflow-385b95ab9cb04fa7a76df627b2bde668",children:"https://metapage.io/dion/Python-ML-Workflow-385b95ab9cb04fa7a76df627b2bde668"})]}),"\n",(0,i.jsx)(t.h2,{id:"194018579bb580be8653efea408daf81",children:"User experience"}),"\n",(0,i.jsx)(t.p,{children:"As long as there is compute resources attached, users then do not have to manually install anything, or worry about their host system: the definition defined in the URL contains everything needed to reproduce the compute environment, and connectable from the browser."}),"\n",(0,i.jsxs)(t.p,{children:["Users can then take existing compute environments, complete with code, and directly modify, copy, and share these environments, directly as you would any other URL, or via our ",(0,i.jsx)(t.a,{href:"https://metapage.io/",children:"index of components"})]}),"\n",(0,i.jsx)(t.h2,{id:"194018579bb5806aae41ee7529a1f9cf",children:"How it works"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://docs.metapage.io/docs/containers",children:"See here for detailed instructions"})}),"\n",(0,i.jsx)(t.p,{children:"We provide an open and open-source compute queue API layer, where any user can create their own secure queue, connect their computer, and run docker containers and code all defined in a single URL."}),"\n",(0,i.jsxs)(t.p,{children:["The URL contains the ",(0,i.jsx)(t.code,{children:"Dockerfile"}),"  definition, or a publicly accessible docker image, optionally code, optionally a github repository to build from."]}),"\n",(0,i.jsx)(t.p,{children:"This way, the mechanism to build a reproducible compute environment is simply a URL, where users simply add their own commodity compute resources (their laptop, workstation, cluster, almost anything that can run docker containers)."}),"\n",(0,i.jsx)(t.p,{children:"If the user wanted to run their own complete system that is different, they can, because the definition of the compute environment is encoded into the URL, thus available for all."}),"\n",(0,i.jsx)(t.mermaid,{value:'graph LR\n  a["Storage \u2705 but compute \ud83d\uded1"] \n  b["FAIR but for compute"]\n  a --\x3e b\n  click a "/blog/blob-storage-is-solved-but-what-about-compute"\n  click b "/blog/fair-data-what-about-compute"\n  style b fill:#fff,stroke:#999999,stroke-width:2px,color:#000'})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},37358:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/fair-data-what-about-compute.19301857-9bb5-806f-bdf2-e7f51bf8b2c1-825f61188237a5872f9ae58c4da2d5dd.png"},69990:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/fair-data-what-about-compute.19301857-9bb5-80ec-9915-f915048ca263-ed97a3cf94bffedf7143cad05849420d.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var o=n(96540);const i={},a=o.createContext(i);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(a.Provider,{value:t},e.children)}},59469:e=>{e.exports=JSON.parse('{"permalink":"/blog/fair-data-what-about-compute","source":"@site/blog/fair-data-what-about-compute.mdx","title":"FAIR principles apply to data- what about compute","description":"It\u2019s one thing to have access to data, but it\u2019s another thing to have code and also a reliable, reproducible way to run the code that operates on the data. In other words, it\u2019s not enough to just serve data, we also need principles around HOW we create compute environments that process the data.","date":"2025-02-05T00:00:00.000Z","tags":[],"hasTruncateMarker":true,"authors":[{"name":"Dion Whitehead","title":"Creator of Metapages","url":"https://github.com/metapages","email":"dion@metapage.io","socials":{"github":"https://github.com/dionjwa"},"imageURL":"https://github.com/dionjwa.png","key":"dion","page":null}],"frontMatter":{"title":"FAIR principles apply to data- what about compute","sidebar_position":3,"slug":"/fair-data-what-about-compute","date":"2025-02-05T00:00:00.000Z","authors":["dion"],"hide_table_of_contents":true},"unlisted":false,"prevItem":{"title":"Interactive Data Visualization Challenge","permalink":"/blog/competition-1"},"nextItem":{"title":"Competion 1.1","permalink":"/blog/competition-1-1"}}')}}]);
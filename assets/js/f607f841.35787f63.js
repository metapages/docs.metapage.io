"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[1620],{4843:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=a(1527),t=a(3703);const i={title:"Getting Started",sidebar_position:0,slug:"/"},r="Previous version(s) {#39114d90ea40401b890861b0ce5dc228}",o={id:"Getting-Started",title:"Getting Started",description:"Metapages are workflows that run in the browser.",source:"@site/docs/Getting-Started.mdx",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Getting Started",sidebar_position:0,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Examples",permalink:"/docs/examples"}},l={},d=[{value:"Example \u201chello world\u201d of metapages",id:"c9aee01f985647a287f5bb77991c7962",level:2},{value:"<strong>\ud83d\udd0e  Getting started</strong>",id:"aab15ed064f340ceb89fe59926f53f33",level:2},{value:"<strong>\ud83d\udc49 Sign up at</strong> <strong>metapage.io</strong> <strong>for:</strong>",id:"7414c7739df04b00b1b715066f26a935",level:2},{value:"<strong>How metapages work</strong>",id:"f9c5078df9b84cb188ee62d3540d4a7c",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Metapages"})," are workflows that run in the browser."]}),"\n",(0,s.jsx)(n.p,{children:"They solve the problems of connecting code, data, and compute that can be easily shared, stored, and modified."}),"\n",(0,s.jsx)(n.p,{children:"Metapages remove the friction of communication, allowing instant and rich communication and collaboration between scientists, data scientists, and engineers."}),"\n",(0,s.jsx)(n.p,{children:"They allow the use of, and data connections between:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Any open source programming languages","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Python"}),"\n",(0,s.jsx)(n.li,{children:"R"}),"\n",(0,s.jsx)(n.li,{children:"Julia"}),"\n",(0,s.jsx)(n.li,{children:"Go"}),"\n",(0,s.jsx)(n.li,{children:"Octave"}),"\n",(0,s.jsx)(n.li,{children:"Java"}),"\n",(0,s.jsx)(n.li,{children:"Anything that can be docker containerized"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Any front end tools and visualization frameworks"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"all within a web page that can be embedded and published in almost any medium."}),"\n",(0,s.jsx)(n.p,{children:"END PAGE"}),"\n",(0,s.jsx)(n.h1,{id:"39114d90ea40401b890861b0ce5dc228",children:"Previous version(s)"}),"\n",(0,s.jsx)(n.mermaid,{value:'flowchart LR\n  subgraph page [Your website]\n      js("Your website javascript")\n      metapage ---\x3e |"JSON messages (any output changes)"| js\n      js ---\x3e |"set any inputs"| metapage\n      subgraph metapage [Metapage]\n      direction LR\n      mf1["Metaframe A (iframe)"]\n      mf2["Metaframe B (iframe)"]\n      mf3["Metaframe C (iframe)"]\n\n      mf1 --\x3e mf2\n      mf1 --\x3e mf3\n      mf2 --\x3e mf3\n      end\n  end'}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.em,{children:"metapage"})," is a set of websites connected together with data pipes. Metapages are hybrid apps, workflows, dashboards."]}),"\n",(0,s.jsxs)(n.p,{children:["You can create, share, embed, and customize at ",(0,s.jsx)(n.a,{href:"https://metapage.io/",children:"metapage.io"})]}),"\n",(0,s.jsx)(n.p,{children:"Problems they solve:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Velocity"}),": accelerate web development by ",(0,s.jsx)(n.a,{href:"/docs/embed",children:"embedding entire workflows or tools"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Dashboards"}),": create powerful dashboards, connecting ",(0,s.jsx)(n.em,{children:"any"})," web app, library, or data source"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Collaboration"}),": scientific and data-heavy workflows can be shared and worked on collaboratively"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Data Science / Machine Learning / AI"}),": Rapidly iterate, develop, test and even deploy machine learning code, models, and pipelines"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Publish"}),": share your app, code, or data for others to instantly and easily (no-code) integrate with their app/tools/website"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"c9aee01f985647a287f5bb77991c7962",children:"Example \u201chello world\u201d of metapages"}),"\n",(0,s.jsx)(n.p,{children:"This is a simple metapage, showing one metaframe generating data real-time, and the other plotting that data. The metapage is:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"editable"}),"\n",(0,s.jsx)(n.li,{children:"sharable"}),"\n",(0,s.jsx)(n.li,{children:"will always run, requires only a browser"}),"\n",(0,s.jsx)(n.li,{children:"embeddable in documents like this documentation and e.g. notion (how these docs are generated)"}),"\n"]}),"\n",(0,s.jsx)("iframe",{scrolling:"no",allow:"fullscreen *; camera *; speaker *;",style:{width:"100%",height:"469px",overflow:"hidden"},src:"https://app.metapage.io/dion/example-hello-world-b4dc42b55df94364a1ebac10e8e91f32"}),"\n",(0,s.jsx)(n.h2,{id:"aab15ed064f340ceb89fe59926f53f33",children:(0,s.jsx)(n.strong,{children:"\ud83d\udd0e  Getting started"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Check out examples : ",(0,s.jsx)(n.a,{href:"/docs/examples",children:"here in the docs"})]}),"\n",(0,s.jsxs)(n.li,{children:["Developer? \ud83d\udee0\ufe0f ",(0,s.jsx)(n.a,{href:"/docs/embed",children:"It's easy to embed entire applications in your app"})]}),"\n",(0,s.jsx)(n.li,{children:"No-code / Low-code dashboards"}),"\n",(0,s.jsxs)(n.li,{children:["\ud83d\udd2c Scientist / \ud83d\udcca Data Engineer? See the ",(0,s.jsx)(n.a,{href:"/docs/example-metaframe-running-docker-container",children:"example using docker for compute"})]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"7414c7739df04b00b1b715066f26a935",children:[(0,s.jsx)(n.strong,{children:"\ud83d\udc49 Sign up at"})," ",(0,s.jsx)(n.a,{href:"https://app.metapage.io/",children:(0,s.jsx)(n.strong,{children:"metapage.io"})})," ",(0,s.jsx)(n.strong,{children:"for:"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"editing tools"}),"\n",(0,s.jsx)(n.li,{children:"a huge and growing library of components and applications"}),"\n",(0,s.jsx)(n.li,{children:"many examples"}),"\n",(0,s.jsx)(n.li,{children:"share, collaborate, embed, and publish"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"f9c5078df9b84cb188ee62d3540d4a7c",children:(0,s.jsx)(n.strong,{children:"How metapages work"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/how-metapages-work",children:"How metapages work"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},3703:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>r});var s=a(959);const t={},i=s.createContext(t);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);
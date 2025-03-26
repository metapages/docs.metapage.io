"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[5202],{28453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>s});var t=n(96540);const r={},a=t.createContext(r);function o(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(a.Provider,{value:i},e.children)}},32389:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"Concepts/archiving","title":"Publishing","description":"187018579bb580d08c44c96f5e29a1fc}","source":"@site/docs/Concepts/archiving.mdx","sourceDirName":"Concepts","slug":"/archiving","permalink":"/docs/archiving","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"Publishing","sidebar_position":7,"slug":"/archiving"},"sidebar":"tutorialSidebar","previous":{"title":"How do metapages work?","permalink":"/docs/how-metapages-work"},"next":{"title":"Metapage metadata","permalink":"/docs/metadata-api-access"}}');var r=n(74848),a=n(28453);const o={title:"Publishing",sidebar_position:7,slug:"/archiving"},s="Publish a workflow instantly: we will store it forever {#187018579bb580d08c44c96f5e29a1fc}",c={},d=[{value:"Provenance",id:"187018579bb580cca1b3fe9c94aec0d7",level:2},{value:"1. The application website forever",id:"194018579bb5804395eed98bc1e65d4c",level:2},{value:"2. Compute workers forever",id:"194018579bb580c981a7df804a401589",level:2}];function l(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"187018579bb580d08c44c96f5e29a1fc",children:"Publish a workflow instantly: we will store it forever"})}),"\n",(0,r.jsxs)(i.p,{children:["When your workflow is ready for publishing, simply click the ",(0,r.jsx)(i.code,{children:"Publish permanent public archive"})," menu option, and confirm. You will then redirect to a permanent link to a snapshot, with the URL format:"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"https://archive.metapage.io/mp/<id>"})}),"\n",(0,r.jsx)(i.p,{children:"Keep this link, it\u2019s where your snapshot is stored."}),"\n",(0,r.jsx)(i.admonition,{type:"caution",children:(0,r.jsx)(i.p,{children:"You cannot unpublish: these workflows are stored forever in our public database"})}),"\n",(0,r.jsx)(i.admonition,{type:"caution",children:(0,r.jsx)(i.p,{children:"We currently only store the metapage definition, not files."})}),"\n",(0,r.jsx)(i.admonition,{type:"tip",children:(0,r.jsxs)(i.p,{children:["To search for archived pages, search with the word: ",(0,r.jsx)(i.code,{children:"archive:"})]})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:n(37392).A+"",width:"556",height:"638"})}),"\n",(0,r.jsx)(i.h2,{id:"187018579bb580cca1b3fe9c94aec0d7",children:"Provenance"}),"\n",(0,r.jsxs)(i.p,{children:["When you clone or publish a metapage, it creates a copy of the existing page. A link to the original page is stored (at ",(0,r.jsx)(i.code,{children:"[origin]"}),"), and displayed next to the page title:"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:n(73837).A+"",width:"470",height:"140"})}),"\n",(0,r.jsx)(i.h1,{id:"194018579bb5800b8a9ac9800131aea5",children:"You will be able to run metapage workflows forever"}),"\n",(0,r.jsxs)(i.p,{children:["Our commitment to our ",(0,r.jsx)(i.a,{href:"/docs/fair-principles",children:"FAIR principles"}),"."]}),"\n",(0,r.jsx)(i.p,{children:"We need two parts to run metapage forever: the website, and the worker agent to power the workflows."}),"\n",(0,r.jsx)(i.h2,{id:"194018579bb5804395eed98bc1e65d4c",children:"1. The application website forever"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["The website that serves archived metapages is served from a different URL and server:","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"https://archive.metapage.io"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["It is published and built from a separate, public, open-source repository:","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://github.com/metapages/archive.metapage.io",children:"https://github.com/metapages/archive.metapage.io"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"This means that anyone can fork and deploy the viewer."}),"\n",(0,r.jsx)(i.admonition,{type:"tip",children:(0,r.jsx)(i.p,{children:"Coming soon: viewing zip archives of full metapages and file states."})}),"\n",(0,r.jsx)(i.admonition,{type:"tip",children:(0,r.jsx)(i.p,{children:"Coming soon: viewing metapages from URL encoded definitions"})}),"\n",(0,r.jsx)(i.h2,{id:"194018579bb580c981a7df804a401589",children:"2. Compute workers forever"}),"\n",(0,r.jsxs)(i.p,{children:["Your archived (and non-archived) metapage workflows still need to run docker containers. By running your ",(0,r.jsx)(i.a,{href:"/docs/container-local-mode",children:"worker agent in local mode"}),", and setting your ",(0,r.jsx)(i.code,{children:"queue"})," in the container metaframes to ",(0,r.jsx)(i.code,{children:"local"})," mode, there is no server API needed, all your workflows run completely local to your computer running web application."]}),"\n",(0,r.jsxs)(i.p,{children:["The worker agent is open source, and ",(0,r.jsx)(i.a,{href:"https://github.com/metapages/compute-queues",children:"published in a public repository"})]}),"\n",(0,r.jsxs)(i.h1,{id:"187018579bb58039b6cbeee646f92ecd",children:["The road ahead: ",(0,r.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Digital_object_identifier",children:"Digital Object Identifiers"})]}),"\n",(0,r.jsxs)(i.p,{children:["We aim to partner with an organization to provide ",(0,r.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Digital_object_identifier",children:"DOIs"}),", connecting permanent metapage snapshots to permanent Digital Object Identifiers."]}),"\n",(0,r.jsx)(i.p,{children:"This will connect researchers workflows to the ecosystem, metapages provide easy digital access to both the metapage workflow content and the associated metadata."})]})}function h(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},37392:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/archiving.19401857-9bb5-80d6-b099-c34557d46615-1f6b54de1160817019a7dedc9ff209a5.png"},73837:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/archiving.19401857-9bb5-80a7-87b9-c657c9cb130f-f91e526ddae6809ffad30a8208ad8d3c.png"}}]);
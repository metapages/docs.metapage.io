"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[8345],{5229:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>n,metadata:()=>r,toc:()=>c});var a=o(1527),i=o(3703);const n={title:"Blob storage is a solved problem- what about compute?",sidebar_position:4,slug:"/blob-storage-is-solved-but-what-about-compute",date:new Date("2024-03-01T00:00:00.000Z"),authors:"dion",hide_table_of_contents:!0},s=void 0,r={permalink:"/blog/blob-storage-is-solved-but-what-about-compute",source:"@site/blog/blob-storage-is-solved-but-what-about-compute.mdx",title:"Blob storage is a solved problem- what about compute?",description:"Cheap and simple data blob storage is widely available and relatively easy to access and use. However, easily applying the right kind of compute is still laborious with too many complex barriers, arcane commands, hard to understand costs, and psychological anxiety that interrupts flow state when prototyping, analyzing, and generally doing data intensive research and engineering.",date:"2024-03-01T00:00:00.000Z",tags:[],hasTruncateMarker:!0,authors:[{name:"Dion Whitehead",title:"Creator of Metapages",url:"https://github.com/metapages",email:"dion@metapage.io",socials:{github:"https://github.com/dionjwa"},imageURL:"https://github.com/dionjwa.png",key:"dion",page:null}],frontMatter:{title:"Blob storage is a solved problem- what about compute?",sidebar_position:4,slug:"/blob-storage-is-solved-but-what-about-compute",date:"2024-03-01T00:00:00.000Z",authors:"dion",hide_table_of_contents:!0},unlisted:!1,prevItem:{title:"Comparison with other products/services/tools",permalink:"/blog/comparison-with-other-tools"},nextItem:{title:"The Internet Archive and URL configured websites",permalink:"/blog/internet-archive-url-configured-websites"}},l={authorsImageUrls:[void 0]},c=[{value:"Storage is a solved problem",id:"391abf3711fb4cdc989cd95a352c95d3",level:2},{value:"Compute is not a solved problem",id:"7998c587d99540c98564ff6646cb9977",level:2},{value:"[1] <strong>How data is lost in the cloud</strong>",id:"5ff5b92126b14c0cb53ba25f3a9f00d3",level:3},{value:"[2] <strong>Mechanisms of ionizing-radiation resistance</strong>",id:"7d4f1319505a45ddb4c4b1a2e8c47ceb",level:3}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Cheap and simple data blob storage is widely available and relatively easy to access and use. However, easily applying the right kind of compute is still laborious with too many complex barriers, arcane commands, hard to understand costs, and psychological anxiety that interrupts flow state when prototyping, analyzing, and generally doing data intensive research and engineering."}),"\n","\n",(0,a.jsx)(t.h2,{id:"391abf3711fb4cdc989cd95a352c95d3",children:"Storage is a solved problem"}),"\n",(0,a.jsxs)(t.p,{children:["Storing blobs of data for your web application used to be more involved, I had to ",(0,a.jsx)(t.em,{children:"think"})," about it. Now I don\u2019t (much): when I build an app or website, that needs some blob storage my thoughts are:"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"create a bucket or whatever it\u2019s called in one of some cloud provider, doesn\u2019t have to be the biggest name, they\u2019re all very reliable"}),"\n",(0,a.jsx)(t.li,{children:"put stuff in"}),"\n",(0,a.jsx)(t.li,{children:"get stuff out"}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["I don\u2019t care where much it is. Why? Because it\u2019s a ",(0,a.jsx)(t.strong,{children:"solved problem"}),". Remote blob storage is:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"very cheap, and getting cheaper"}),"\n",(0,a.jsx)(t.li,{children:"reliable [1]"}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["At scale however, yes, you do have to think about cost, but those calculations are pretty straightforward business calculations. At anything below very large data, you don\u2019t have to think much about it, and this makes it a ",(0,a.jsx)(t.strong,{children:"solved problem"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"It\u2019s a solved problem in a similar way that nature has solved storing information: replication, with automated mechanisms for damage repair/reconciliation [2]."}),"\n",(0,a.jsx)(t.h2,{id:"7998c587d99540c98564ff6646cb9977",children:"Compute is not a solved problem"}),"\n",(0,a.jsx)(t.p,{children:"Because you have to think about it. What I want:"}),"\n",(0,a.jsx)(t.p,{children:"I give you some application, some workflow, for example, a machine learning agent, some program I have created, some tool, and it requires from time to time, some level of computing power. You are able to automatically, safely, connect that application to the right level of compute resources as needed."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"If the program is in the browser, I might be able to use the GPU, while the tab is open and running."}),"\n",(0,a.jsx)(t.li,{children:"If the program is downloaded and installed program, I have access to your entire computer, but due to that, security and parasitic programs become a problem."}),"\n",(0,a.jsx)(t.li,{children:"If I make available some cloud computing, it suddenly becomes complex, with lots of decisions, but with lots of scalable compute resources of different useful types."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Computing resources are inherently valuable, and often able to be converted to $$ efficiently via automation."}),"\n",(0,a.jsxs)(t.p,{children:["Obviously ",(0,a.jsx)(t.code,{children:"storage !== compute"})," but if it were as easy, then I could distribute complex scientific simulations, and revive them years later, and they would \u201cjust work\u201d."]}),"\n",(0,a.jsxs)(t.p,{children:["The team at ",(0,a.jsx)(t.a,{href:"https://metapage.io/",children:"https://metapage.io"})," aim to solve that problem: compute as a simple commodity."]}),"\n",(0,a.jsx)(t.p,{children:"When we can treat compute as a commodity, we have more power over the compute providers. When they manage to get their system to be difficult to move from, you lose bargaining power."}),"\n",(0,a.jsxs)(t.p,{children:["Personally, I default to ",(0,a.jsx)(t.a,{href:"https://www.digitalocean.com/",children:"https://www.digitalocean.com/"}),". This isn\u2019t a paid plug! They just do a great job of making plenty of options, at the right complexity/resolution, not too many, not too few."]}),"\n",(0,a.jsxs)(t.p,{children:["For my full stacks, I\u2019m using AWS but not directly: my choice of platform vendor (",(0,a.jsx)(t.a,{href:"https://nhost.io/",children:"https://nhost.io"}),") makes that decision for me."]}),"\n",(0,a.jsx)(t.h1,{id:"f72739ff70d843c7b655beb4d3c9c218",children:"References"}),"\n",(0,a.jsxs)(t.h3,{id:"5ff5b92126b14c0cb53ba25f3a9f00d3",children:["[1] ",(0,a.jsx)(t.strong,{children:"How data is lost in the cloud"})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://spanning.com/blog/how-data-is-lost-in-the-cloud/",children:"https://spanning.com/blog/how-data-is-lost-in-the-cloud/"})}),"\n",(0,a.jsxs)(t.h3,{id:"7d4f1319505a45ddb4c4b1a2e8c47ceb",children:["[2] ",(0,a.jsx)(t.strong,{children:"Mechanisms of ionizing-radiation resistance"})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Deinococcus_radiodurans",children:"https://en.wikipedia.org/wiki/Deinococcus_radiodurans"})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},3703:(e,t,o)=>{o.d(t,{Z:()=>r,a:()=>s});var a=o(959);const i={},n=a.createContext(i);function s(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);
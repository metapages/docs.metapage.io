"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[8529],{9703:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=n(1527),s=n(3703);const r={title:"The Internet Archive and URL configured websites",sidebar_position:9,slug:"/internet-archive-url-configured-websites"},o="The Internet Archive and Deep-Time {#141c30a529cd48358db20933014bda26}",a={permalink:"/blog/internet-archive-url-configured-websites",source:"@site/blog/internet-archive-url-configured-websites.mdx",title:"The Internet Archive and URL configured websites",description:"2023-12-05",date:"2024-06-10T00:48:41.881Z",formattedDate:"June 10, 2024",tags:[],readingTime:2.11,hasTruncateMarker:!1,authors:[],frontMatter:{title:"The Internet Archive and URL configured websites",sidebar_position:9,slug:"/internet-archive-url-configured-websites"},unlisted:!1,prevItem:{title:"Comparison with other products/services/tools",permalink:"/blog/comparison-with-other-tools"},nextItem:{title:"Blob storage is a solved problem- what about compute?",permalink:"/blog/blob-storage-is-solved-but-what-about-compute"}},c={authorsImageUrls:[]},l=[];function h(e){const t={a:"a",admonition:"admonition",h1:"h1",hr:"hr",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"2023-12-05"}),"\n",(0,i.jsx)(t.h1,{id:"d0cc4a9c4f8440aeaeaecb38513f4e2f",children:"Links are critical to deep-time knowledge preservation"}),"\n",(0,i.jsx)(t.mermaid,{value:'flowchart\n\tn1["knowledge"]\n\tn2["is NOT"]\n\tn3["here"]\n\tn1 --\x3e  n2  --\x3e  n3 --\x3e n1\n\n\tk1["_"]\n\tk2["_"]\n\tk3["_"]\n\tk1 --\x3e |"knowledge"| k3  --\x3e |"exists"| k2 --\x3e |"here"| k1\n\n'}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://archive.org/",children:"Internet Archive"})," is a critical piece of the internet. By recording the past, it allows us to understand the past and therefore the future, preventing deception and allowing culture to grow and develop in deep time."]}),"\n",(0,i.jsxs)(t.p,{children:["A critical part of the ",(0,i.jsx)(t.a,{href:"https://archive.org/",children:"Internet Archive"})," is recording and preserving links. When a link to a website dies for whatever reason, but then is preserved, we keep the underlying knowledge, since knowledge is distributed, just like how awareness of the environment is somehow kept in the patterns of neuron connections, not stored someone inside specific neurons."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"Digital neurons store information patterns in the connections. Biological neurons are more complex, storing information in connections, cellular state, frequency of activation, hormones, among other places. But likely the most important part is the connections between neurons."})}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"This is a massive simplification, since there are many examples e.g. snail neurons that store information in the neuronal cells in complex ways [1]"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h1,{id:"4803fc7e4b88415c8143298a44c6f42b",children:"Links that store state in the URL help preserve websites through deep time"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"The more state is stored in the URL directly, the more the website is able to be preserved and also retain functionality."})}),"\n",(0,i.jsx)(t.p,{children:"This has a number of advantages:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The user state is stored in the URL and is:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"user editable (in the future)"}),"\n",(0,i.jsx)(t.li,{children:"machine readable"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"The origin can be modified dynamically to reroute to domains that are active, without modifying the core state (in the hash parameters of the URL)"}),"\n",(0,i.jsxs)(t.li,{children:["Much easier to store, since a URL is just a string","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Assuming that the core libraries, assets, and modules are preserved, but that\u2019s a separate concern"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["More complex applications can be preserved as ",(0,i.jsx)(t.a,{href:"https://docs.metapage.io/docs",children:"metapages"}),", therefore allowing someone in the future to access a complex workflow, and use it immediately"]}),"\n"]}),"\n",(0,i.jsx)(t.h1,{id:"6c6abb081ad445869f6b26cb57d1640c",children:"References:"}),"\n",(0,i.jsxs)(t.p,{children:["[1] ",(0,i.jsx)(t.strong,{children:"Snails reveal how two brain cells can hold the key to decision making"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://www.sciencedaily.com/releases/2016/06/160603071655.htm",children:"https://www.sciencedaily.com/releases/2016/06/160603071655.htm"})}),"\n",(0,i.jsx)(t.p,{children:"END PAGE"}),"\n",(0,i.jsx)(t.mermaid,{value:'flowchart LR\n\tst["cloud data"]\n\tc["compute"]\n  urls["workflows as URLs"]\n  sims["sharable simulations"]\n\tdt["preserved through deep time"]\n  what["What is a metapage"]\n\n\tst --\x3e urls\n\tc --\x3e urls --\x3e sims --\x3e dt\n\twhat --\x3e sims\n\turls --\x3e dt\n  click st "/blog/blob-storage-is-solved-but-what-about-compute"\n  click urls "/blog/url-configured-websites"\n  click c "/blog/cloud-compute-too-complicated"\n  click dt "/blog/internet-archive-url-configured-websites"\n  style dt fill:#fff,stroke:#999999,stroke-width:2px,color:#000\n  click sims "/blog/shareable-simulations"\n  click what "/blog/what-is-a-metapage"\n\n\n\n'})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},3703:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var i=n(959);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);
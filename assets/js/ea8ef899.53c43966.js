"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[6856],{28453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>o});var t=a(96540);const s={},i=t.createContext(s);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}},40934:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"Concepts/how-metapages-work","title":"How do metapages work?","description":"What is a Metapage?","source":"@site/docs/Concepts/how-metapages-work.mdx","sourceDirName":"Concepts","slug":"/how-metapages-work","permalink":"/docs/how-metapages-work","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"How do metapages work?","sidebar_position":6,"slug":"/how-metapages-work"},"sidebar":"tutorialSidebar","previous":{"title":"Embed a metapage in your React app","permalink":"/docs/embed-metapage"},"next":{"title":"Publishing","permalink":"/docs/archiving"}}');var s=a(74848),i=a(28453);const r={title:"How do metapages work?",sidebar_position:6,slug:"/how-metapages-work"},o=void 0,c={},l=[{value:"What is a Metapage?",id:"aba65d3c04024ffb96bc27e8df8b2d01",level:2},{value:"Core Concepts",id:"c35fe48417cd4199b2f732b2172e5f6f",level:2},{value:"Metaframes",id:"0218f4e8d5844f848e2f11fca536974a",level:3},{value:"Data Connections",id:"5f5ca4f488714606a765af03ae9125fe",level:3},{value:"How It Works: Technical Architecture",id:"0841b8f1c8b445ce9e52d4e91aa25d30",level:2},{value:"Security Model",id:"1dd39c6060e24ea9b0e22e31555e35e6",level:2},{value:"Integrating with Metapages",id:"8d9e522c5acd43c0a2fb29349973cd41",level:2}];function d(e){const n={a:"a",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"aba65d3c04024ffb96bc27e8df8b2d01",children:"What is a Metapage?"}),"\n",(0,s.jsx)(n.p,{children:"A metapage is a framework that connects multiple independent web applications (metaframes) to create interactive workflows. Each metaframe runs in its own iframe, maintaining security isolation while allowing controlled data exchange through standardized messaging."}),"\n",(0,s.jsx)(n.h2,{id:"c35fe48417cd4199b2f732b2172e5f6f",children:"Core Concepts"}),"\n",(0,s.jsx)(n.h3,{id:"0218f4e8d5844f848e2f11fca536974a",children:"Metaframes"}),"\n",(0,s.jsxs)(n.p,{children:["Metaframes are web applications loaded as ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe",children:"iframes"}),". Each metaframe:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Functions as an independent application"}),"\n",(0,s.jsx)(n.li,{children:"Has its own security context and resources"}),"\n",(0,s.jsx)(n.li,{children:"Communicates with other metaframes through a messaging system"}),"\n",(0,s.jsx)(n.li,{children:"Is isolated by browser security mechanisms"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"5f5ca4f488714606a765af03ae9125fe",children:"Data Connections"}),"\n",(0,s.jsx)(n.p,{children:"Metaframes communicate through defined data connections:"}),"\n",(0,s.jsx)(n.mermaid,{value:'flowchart LR\n    subgraph "Metapage"\n        direction LR\n        mf1["Metaframe A (iframe)"]\n        mf2["Metaframe B (iframe)"]\n        mf3["Metaframe C (iframe)"]\n\n        mf1 --\x3e |"data"| mf2\n        mf1 --\x3e |"data"| mf3\n        mf2 --\x3e |"data"| mf3\n    end\n'}),"\n",(0,s.jsx)(n.p,{children:"The metapage coordinates message routing based on the connection graph defined in the metapage's metapage.json file."}),"\n",(0,s.jsx)(n.h2,{id:"0841b8f1c8b445ce9e52d4e91aa25d30",children:"How It Works: Technical Architecture"}),"\n",(0,s.jsx)(n.p,{children:"Metapages use iframe isolation and the browser's built-in postMessage system:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Each metaframe runs in its own iframe sandbox"}),"\n",(0,s.jsx)(n.li,{children:"The parent metapage coordinates all communication"}),"\n",(0,s.jsxs)(n.li,{children:["Data transfers use the browser's ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage",children:"postMessage API"})]}),"\n",(0,s.jsxs)(n.li,{children:["When metaframes communicate, messages flow through the parent page:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Source metaframe \u2192 Parent page (via postMessage)"}),"\n",(0,s.jsx)(n.li,{children:"Parent page routes the message based on connection rules"}),"\n",(0,s.jsx)(n.li,{children:"Parent page \u2192 Target metaframe (via postMessage)"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"A JavaScript client in each metaframe handles the messaging protocol"}),"\n"]}),"\n",(0,s.jsx)(n.mermaid,{value:'flowchart TB\n    subgraph page ["Metapage (Parent Document)"]\n        coordinator["Message Routing Layer"]\n\n        subgraph mf1 ["Metaframe A (iframe)"]\n            client1["Client"]\n        end\n\n        subgraph mf2 ["Metaframe B (iframe)"]\n            client2["Client"]\n        end\n\n        subgraph mf3 ["Metaframe C (iframe)"]\n            client3["Client"]\n        end\n\n        client1 <--\x3e coordinator\n        client2 <--\x3e coordinator\n        client3 <--\x3e coordinator\n    end\n'}),"\n",(0,s.jsx)(n.h2,{id:"1dd39c6060e24ea9b0e22e31555e35e6",children:"Security Model"}),"\n",(0,s.jsx)(n.p,{children:"The metapage architecture leverages browser security features:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Parent page content cannot inspect iframe content and vice versa"}),"\n",(0,s.jsx)(n.li,{children:"Frames cannot directly access each other's content"}),"\n",(0,s.jsx)(n.li,{children:"The page can send and receive messages to frames"}),"\n",(0,s.jsx)(n.li,{children:"Frames send messages to each other via the page"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"8d9e522c5acd43c0a2fb29349973cd41",children:"Integrating with Metapages"}),"\n",(0,s.jsx)(n.p,{children:"You can embed metapages in your own websites and interact with them programmatically:"}),"\n",(0,s.jsx)(n.mermaid,{value:'flowchart LR\n    subgraph website["Your Website"]\n        js["Your website JavaScript"]\n        \n        subgraph mp["Metapage"]\n            mf1["Metaframe A"]\n            mf2["Metaframe B"]\n            mf3["Metaframe C"]\n            \n            mf1 --\x3e mf2\n            mf1 --\x3e mf3\n            mf2 --\x3e mf3\n        end\n        \n        js -- "JSON messages" --\x3e mp\n        mp -- "JSON messages" --\x3e js\n    end\n'}),"\n",(0,s.jsx)(n.p,{children:"Your website can:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Receive notifications when any metaframe outputs change"}),"\n",(0,s.jsx)(n.li,{children:"Set inputs for any metaframe"}),"\n",(0,s.jsx)(n.li,{children:"Monitor and control the data flow between components"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For more details on embedding a metapage in a React application, see ",(0,s.jsx)(n.strong,{children:"[Problem Internal Link]"}),"."]})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);
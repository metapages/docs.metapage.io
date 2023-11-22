"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[159],{6203:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=s(1527),i=s(3703);const r={title:"Security",sidebar_position:5,slug:"/security"},o=void 0,a={id:"Guides/security",title:"Security",description:"Summary",source:"@site/docs/Guides/security.mdx",sourceDirName:"Guides",slug:"/security",permalink:"/docs/security",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Security",sidebar_position:5,slug:"/security"},sidebar:"tutorialSidebar",previous:{title:"Everything is a URL",permalink:"/docs/everything-is-a-url"},next:{title:"FAIR Principles",permalink:"/docs/17669815-f175-49a5-b65c-684c4434011c"}},l={},c=[{value:"<strong>Summary</strong>",id:"476f80525e19441e8c0906797a743d43",level:2},{value:"<strong>Authentication/security mechanisms</strong>",id:"e261dbb35ea149648ccca6e226190ef7",level:2},{value:"<strong>None</strong>",id:"e3561ffa1c674087af7b8305b9747459",level:3},{value:"<strong>OAuth</strong>",id:"8ecbefaaedc74ebab3307aa784b9a52e",level:3},{value:"<strong>X-Frame-Embed</strong>",id:"c84a1158ebb94a74b9f63fca2e513db7",level:3}];function d(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"476f80525e19441e8c0906797a743d43",children:(0,t.jsx)(n.strong,{children:"Summary"})}),"\n",(0,t.jsx)(n.p,{children:":::\u2755"}),"\n",(0,t.jsx)(n.p,{children:"Security and metaframes is an ongoing endeavour"}),"\n",(0,t.jsx)(n.p,{children:":::"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Currently no metaframes in the main gallery have an ",(0,t.jsx)(n.code,{children:"OAuth"})," security layer.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This means that currently no metaframes require user login to work correctly"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:['There are some metaframes with hash token "authorization\u201d',"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This is akin to sharing google photos albums where anyone with the link can see it, but the link is unguessable if you don\u2019t already have it"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"e261dbb35ea149648ccca6e226190ef7",children:(0,t.jsx)(n.strong,{children:"Authentication/security mechanisms"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"None"}),"\n",(0,t.jsx)(n.li,{children:"X-Frame-Embed"}),"\n",(0,t.jsx)(n.li,{children:"OAuth (standard security mechanisms)"}),"\n",(0,t.jsx)(n.li,{children:"URL (hash param) tokens"}),"\n",(0,t.jsx)(n.li,{children:"Others"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"e3561ffa1c674087af7b8305b9747459",children:(0,t.jsx)(n.strong,{children:"None"})}),"\n",(0,t.jsx)(n.p,{children:"Many (most) metaframes (websites) are not security/auth restricted."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The metaframe site only serves static assets"}),"\n",(0,t.jsx)(n.li,{children:"The user content is stored elsewhere e.g. in the URL hash parameters"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"8ecbefaaedc74ebab3307aa784b9a52e",children:(0,t.jsx)(n.strong,{children:"OAuth"})}),"\n",(0,t.jsx)(n.p,{children:"This is one standard method of authentication. Websites using OAuth usually forbid being embedded as iframes (as metaframes are) to prevent click-jacking among other things."}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"What recommendations here? Forbid the oauth flow if iframed, but otherwise allow iframes?"})}),"\n",(0,t.jsx)(n.h3,{id:"c84a1158ebb94a74b9f63fca2e513db7",children:(0,t.jsx)(n.strong,{children:"X-Frame-Embed"})}),"\n",(0,t.jsx)(n.p,{children:"Allows metaframe sites to define which other sites can embed them."}),"\n",(0,t.jsx)(n.p,{children:":::\u2755"}),"\n",(0,t.jsx)(n.p,{children:"Requires access to server configuration, at least for setting site response headers"}),"\n",(0,t.jsx)(n.p,{children:":::"}),"\n",(0,t.jsx)(n.p,{children:":::\u2755"}),"\n",(0,t.jsx)(n.p,{children:"Only whitelists entire domains, not individual users"}),"\n",(0,t.jsx)(n.p,{children:":::"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["Example: restrict domains where metaframe ",(0,t.jsx)(n.code,{children:"your-site.com"})," can be embedded"]})}),"\n",(0,t.jsxs)(n.p,{children:["Use case: metaframe ",(0,t.jsx)(n.code,{children:"https://your-site.com"})," can only be embedded in a metapage served from ",(0,t.jsx)(n.code,{children:"https://app.metapage.io"})," and ",(0,t.jsx)(n.code,{children:"https://other-site.com"})]}),"\n",(0,t.jsx)(n.p,{children:"This allows gated and controlled restrictions, for various business or other needs."}),"\n",(0,t.jsx)(n.p,{children:"(Turn this into a table)"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"other-site.com"})," allowed:"]}),"\n",(0,t.jsx)(n.mermaid,{value:'flowchart LR\n    subgraph test [other-site.com]\n        direction LR\n\n        style mf1 fill:#fff,stroke:#32AEE4,stroke-width:2px\n        style mf2 fill:#fff,stroke:#32AEE4,stroke-width:2px\n        style mf3 fill:#fff,stroke:#32AEE4,stroke-width:2px\n\n        mf1["..."] --\x3e mf2["\u2705 your-site.com"]\n        mf2 --\x3e mf3["..."]\n        mf1 --\x3e mf3\n    end'}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"app.metapage.io"})," allowed"]}),"\n",(0,t.jsx)(n.mermaid,{value:'flowchart LR\n    subgraph test [app.metapage.io]\n        direction LR\n\n        style mf1 fill:#fff,stroke:#32AEE4,stroke-width:2px\n        style mf2 fill:#fff,stroke:#32AEE4,stroke-width:2px\n        style mf3 fill:#fff,stroke:#32AEE4,stroke-width:2px\n\n        mf1["..."] --\x3e mf2["\u2705 your-site.com"]\n        mf2 --\x3e mf3["..."]\n        mf1 --\x3e mf3\n    end'}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"every-other-site.com"})," ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.strong,{children:"not"})})," allowed"]}),"\n",(0,t.jsx)(n.mermaid,{value:'flowchart LR\n    subgraph test [every-other-site.com]\n        direction LR\n\n        style mf1 fill:#fff,stroke:#32AEE4,stroke-width:2px\n        style mf2 fill:#fff,stroke:#32AEE4,stroke-width:2px\n        style mf3 fill:#fff,stroke:#32AEE4,stroke-width:2px\n\n        mf1["..."] --\x3e mf2["\u274c your-site.com does not load"]\n        mf2 --\x3e mf3["..."]\n        mf1 --\x3e mf3\n    end'})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},3703:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var t=s(959);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);
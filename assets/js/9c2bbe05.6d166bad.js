"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[9474],{2294:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=s(1527),a=s(3703);const r={title:"URL Configured Websites",sidebar_position:9,slug:"/url-configured-websites"},i=void 0,o={permalink:"/blog/url-configured-websites",source:"@site/blog/url-configured-websites.mdx",title:"URL Configured Websites",description:"2023-12-05",date:"2024-01-01T00:46:56.543Z",formattedDate:"January 1, 2024",tags:[],readingTime:2.385,hasTruncateMarker:!1,authors:[],frontMatter:{title:"URL Configured Websites",sidebar_position:9,slug:"/url-configured-websites"},unlisted:!1,prevItem:{title:"Blob storage is a solved problem- what about compute?",permalink:"/blog/blob-storage-is-solved-but-what-about-compute"},nextItem:{title:"What is a metapage? What problems do they solve?",permalink:"/blog/what-is-a-metapage"}},l={authorsImageUrls:[]},c=[{value:"Use URL hash parameters to store large amounts of user configured data",id:"99468beeddb741dfae03c3cdade858ed",level:2},{value:"Modern browsers can handle very large URLs",id:"d32c6439fe384d90b342350311b68d89",level:2},{value:"You can store large amounts of code in the hash parameters, and allow users to configure complex websites",id:"852ea18949cc47ad9c89488cf81019ce",level:2}];function A(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"2023-12-05"}),"\n",(0,n.jsx)(t.mermaid,{value:'flowchart LR\n\tst["cloud data"]\n\tc["compute"]\n  urls["workflows as URLs"]\n  sims["sharable simulations"]\n\tdt["preserved through deep time"]\n  what["What is a metapage"]\n\n\tst --\x3e urls\n\tc --\x3e urls --\x3e sims --\x3e dt\n\twhat --\x3e sims\n\turls --\x3e dt\n  click st "/blog/blob-storage-is-solved-but-what-about-compute"\n  click urls "/blog/url-configured-websites"\n  style urls fill:#fff,stroke:#999999,stroke-width:2px,color:#000\n  click c "/blog/cloud-compute-too-complicated"\n  click dt "/blog/internet-archive-url-configured-websites"\n  click sims "/blog/shareable-simulations"\n  click what "/blog/what-is-a-metapage"\n\n\n\n'}),"\n",(0,n.jsx)(t.mermaid,{value:'flowchart LR\n\tmf["metaframes"]\n\turl["browser state in the URL"]\n\tmp["metapages"]\n\n\tmf --\x3e url --\x3e mp\n  click url "/blog/url-configured-websites"\n  style url fill:#fff,stroke:#999999,stroke-width:2px,color:#000\n  click mf "/blog/metaframes"\n  click mp "/blog/what-is-a-metapage"'}),"\n",(0,n.jsx)(t.h2,{id:"99468beeddb741dfae03c3cdade858ed",children:"Use URL hash parameters to store large amounts of user configured data"}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"It gives users much more control and creativity over websites"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://mermaid.live/",children:"https://mermaid.live/"})," is an excellent example. As soon as you go to that link, the link looks long: that\u2019s because it has encoded the diagram it displays completely in the URL hash parameters:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(9791).Z+"",width:"2090",height:"1056"})}),"\n",(0,n.jsx)(t.p,{children:"URL:"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsxs)(t.a,{href:"https://mermaid.live/edit#pako:eNpVjk2Lg0AMhv9KyGkL9Q94WGh1t5fCFurN6SFo7AztfDBGpKj_fcd62c0pvM_zhkzY-JYxx-7px0ZTFKhK5SDNoS50NL1Y6m-QZZ_ziQWsd_ya4fhx8tBrH4Jx993mH1cJium8agyijXssGyre_R_HM5T1mYL4cPtLqtHP8FWbi07n_xMdObW-647yjrKGIhQU3wru0XK0ZNr0_rQmCkWzZYV5WlvuaHiKQuWWpNIg_vpyDeYSB97jEFoSLg3dI9ktXH4B_cJWqw",children:["https://mermaid.live/edit#pako",":eNpVjk2Lg0AMhv9KyGkL9Q94WGh1t5fCFurN6SFo7AztfDBGpKj_fcd62c0pvM_zhkzY-JYxx-7px0ZTFKhK5SDNoS50NL1Y6m"]}),"\u2026 (I cut it for readability)"]}),"\n",(0,n.jsx)(t.p,{children:"What is happening?"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The code that describes the diagram is encoded and store in the hash parameters (after the ",(0,n.jsx)(t.code,{children:"#"}),") of the URL."]}),"\n",(0,n.jsx)(t.li,{children:"That URL can now be shared and directly edited"}),"\n",(0,n.jsxs)(t.li,{children:["No backend server is involved in storing the data, only for serving the assets (a ",(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"static"})})," website)"]}),"\n",(0,n.jsxs)(t.li,{children:["Everything after the ",(0,n.jsx)(t.code,{children:"#"})," is ",(0,n.jsx)(t.strong,{children:"NOT"})," sent to the server"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"d32c6439fe384d90b342350311b68d89",children:"Modern browsers can handle very large URLs"}),"\n",(0,n.jsxs)(t.p,{children:["In 2006, ",(0,n.jsx)(t.a,{href:"https://support.microsoft.com/en-us/kb/208427",children:"IE8s URL limit was 2083 characters"}),". ",(0,n.jsx)(t.a,{href:"https://stackoverflow.com/questions/3721034/how-long-of-a-url-can-internet-explorer-9-take",children:"IE9 has a similar limit"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"http://www.faqs.org/rfcs/rfc2616.html",children:"The original HTTP/1.1 specification put no limit on the length of the URL"})}),"\n",(0,n.jsxs)(t.p,{children:["In 2022, a new update was published ",(0,n.jsx)(t.a,{href:"https://www.rfc-editor.org/rfc/rfc9110#section-4.1-5",children:"and says"}),":"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"It is RECOMMENDED that all senders and recipients support, at a minimum, URIs with lengths of 8000 octets in protocol elements. Note that this implies some structures and on-wire representations (for example, the request line in HTTP/1.1) will necessarily be larger in some cases."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"However, this is talking about URLs over the wire. For the browser address bar itself, limits are much much higher:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-text",children:"Browser     Address bar   document.location\n                          or anchor tag\n------------------------------------------\nChrome          32779           >64k\nAndroid          8192           >64k\nFirefox          >64k           >64k\nSafari           >64k           >64k\nIE11             2047           5120\nEdge 16          2047          10240\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Source: ",(0,n.jsx)(t.a,{href:"https://stackoverflow.com/questions/417142/what-is-the-maximum-length-of-a-url-in-different-browsers",children:"https://stackoverflow.com/questions/417142/what-is-the-maximum-length-of-a-url-in-different-browsers"})]}),"\n",(0,n.jsx)(t.h2,{id:"852ea18949cc47ad9c89488cf81019ce",children:"You can store large amounts of code in the hash parameters, and allow users to configure complex websites"}),"\n",(0,n.jsx)(t.p,{children:"Single metaframe pinned"}),"\n",(0,n.jsx)("iframe",{scrolling:"no",allow:"fullscreen *; camera *; speaker *;",style:{width:"100%",height:"450px",overflow:"hidden"},src:"https://app.metapage.io/mf?mfk=CRCyFFm29e"}),"\n",(0,n.jsx)(t.p,{children:"In the example above, enough code was embedded in the link to describe a 3D with a bunch of complex behaviour. Someone else can take that URL, and directly modify it, run it, then share the modified URL."}),"\n",(0,n.jsx)(t.p,{children:"This way, apps can be both self-contained, but also highly configurable and shareable, allowing a high degree of direct collaboration not under centralized control."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Edit:"}),"  click the top right in the embed above:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(4331).Z+"",width:"104",height:"112"})}),"\n",(0,n.jsx)(t.p,{children:"and you will be able to directly edit the code running, and copy and reuse it yourself."})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(A,{...e})}):A(e)}},9791:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/1164251445-22c3196ad34f615078e1c578723866b4.png"},4331:(e,t,s)=>{s.d(t,{Z:()=>n});const n="data:image/png;base64,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"},3703:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>i});var n=s(959);const a={},r=n.createContext(a);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);
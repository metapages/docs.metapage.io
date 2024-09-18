"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[9474],{2390:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>A,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var t=s(1527),r=s(3703);const a={title:"URL Configured Websites",sidebar_position:8,slug:"/url-configured-websites",hide_table_of_contents:!0},i=void 0,o={permalink:"/blog/url-configured-websites",source:"@site/blog/url-configured-websites.mdx",title:"URL Configured Websites",description:"2023-12-05",date:"2024-09-18T23:33:52.076Z",tags:[],readingTime:2.59,hasTruncateMarker:!1,authors:[],frontMatter:{title:"URL Configured Websites",sidebar_position:8,slug:"/url-configured-websites",hide_table_of_contents:!0},unlisted:!1,prevItem:{title:"Blob storage is a solved problem- what about compute?",permalink:"/blog/blob-storage-is-solved-but-what-about-compute"}},c={authorsImageUrls:[]},l=[{value:"Use URL hash parameters to store code / config / state",id:"99468beeddb741dfae03c3cdade858ed",level:2},{value:"Example: diagrams stored in the URL",id:"f45e2af1ccc34c4ea68ba2de23983d02",level:3},{value:"Example 2: rich contextual and specific error messages when developing software",id:"1d532f2929214d90a333b147c9c0b770",level:3},{value:"Modern browsers can handle very large URLs",id:"d32c6439fe384d90b342350311b68d89",level:2},{value:"You can store large amounts of code in the hash parameters, and allow users to configure complex websites",id:"852ea18949cc47ad9c89488cf81019ce",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"2023-12-05"}),"\n",(0,t.jsx)(n.h2,{id:"99468beeddb741dfae03c3cdade858ed",children:"Use URL hash parameters to store code / config / state"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"It gives users much more control and creativity over websites"})}),"\n",(0,t.jsxs)(n.p,{children:["URLs can ",(0,t.jsx)(n.a,{href:"https://neilmadden.blog/2019/01/16/can-you-ever-safely-include-credentials-in-a-url/",children:"safely and effectively store credentials"})," [1] (access to things). URLs can also store user created code or configuration. This allows anyone with the link to not only view the created resources but also to ",(0,t.jsx)(n.strong,{children:"edit."})]}),"\n",(0,t.jsx)(n.h3,{id:"f45e2af1ccc34c4ea68ba2de23983d02",children:"Example: diagrams stored in the URL"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"The url defines how it\u2019s stored parameters as displayed"})}),"\n",(0,t.jsxs)(n.p,{children:["or: ",(0,t.jsx)(n.strong,{children:"I can show simple things in complex powerful ways"})]}),"\n",(0,t.jsxs)(n.p,{children:["or: ",(0,t.jsx)(n.strong,{children:"Grown seeds express their powerful complexity"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://mermaid.live/",children:"https://mermaid.live/"})," is an excellent example. As soon as you go to that link, the link looks long: that\u2019s because it has encoded the diagram it displays completely in the URL hash parameters:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(7835).Z+"",width:"2090",height:"1056"})}),"\n",(0,t.jsx)(n.p,{children:"URL:"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsxs)(n.a,{href:"https://mermaid.live/edit#pako:eNpVjk2Lg0AMhv9KyGkL9Q94WGh1t5fCFurN6SFo7AztfDBGpKj_fcd62c0pvM_zhkzY-JYxx-7px0ZTFKhK5SDNoS50NL1Y6m-QZZ_ziQWsd_ya4fhx8tBrH4Jx993mH1cJium8agyijXssGyre_R_HM5T1mYL4cPtLqtHP8FWbi07n_xMdObW-647yjrKGIhQU3wru0XK0ZNr0_rQmCkWzZYV5WlvuaHiKQuWWpNIg_vpyDeYSB97jEFoSLg3dI9ktXH4B_cJWqw",children:["https://mermaid.live/edit#pako",":eNpVjk2Lg0AMhv9KyGkL9Q94WGh1t5fCFurN6SFo7AztfDBGpKj_fcd62c0pvM_zhkzY-JYxx-7px0ZTFKhK5SDNoS50NL1Y6m"]}),"\u2026 (I cut it for readability)"]}),"\n",(0,t.jsx)(n.p,{children:"What is happening?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The code that describes the diagram is encoded and store in the hash parameters (after the ",(0,t.jsx)(n.code,{children:"#"}),") of the URL."]}),"\n",(0,t.jsx)(n.li,{children:"That URL can now be shared and directly edited"}),"\n",(0,t.jsxs)(n.li,{children:["No backend server is involved in storing the data, only for serving the assets (a ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"static"})})," website)"]}),"\n",(0,t.jsxs)(n.li,{children:["Everything after the ",(0,t.jsx)(n.code,{children:"#"})," is ",(0,t.jsx)(n.strong,{children:"NOT"})," sent to the server"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"1d532f2929214d90a333b147c9c0b770",children:"Example 2: rich contextual and specific error messages when developing software"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(6471).Z+"",width:"2226",height:"1030"})}),"\n",(0,t.jsx)(n.p,{children:"Unfortunately I cannot include the link here becuase"}),"\n",(0,t.jsx)(n.p,{children:"The above is an error message given as a URL in javascript react. It\u2019s great because the error specific to my code is embedded in further help and full documentation."}),"\n",(0,t.jsx)(n.h2,{id:"d32c6439fe384d90b342350311b68d89",children:"Modern browsers can handle very large URLs"}),"\n",(0,t.jsxs)(n.p,{children:["In 2006, ",(0,t.jsx)(n.a,{href:"https://support.microsoft.com/en-us/kb/208427",children:"IE8s URL limit was 2083 characters"}),". ",(0,t.jsx)(n.a,{href:"https://stackoverflow.com/questions/3721034/how-long-of-a-url-can-internet-explorer-9-take",children:"IE9 has a similar limit"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"http://www.faqs.org/rfcs/rfc2616.html",children:"The original HTTP/1.1 specification put no limit on the length of the URL"})}),"\n",(0,t.jsxs)(n.p,{children:["In 2022, a new update was published ",(0,t.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc9110#section-4.1-5",children:"and says"}),":"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"It is RECOMMENDED that all senders and recipients support, at a minimum, URIs with lengths of 8000 octets in protocol elements. Note that this implies some structures and on-wire representations (for example, the request line in HTTP/1.1) will necessarily be larger in some cases."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"However, this is talking about URLs over the wire. For the browser address bar itself, limits are much much higher:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"Browser     Address bar   document.location\n                          or anchor tag\n------------------------------------------\nChrome          32779           >64k\nAndroid          8192           >64k\nFirefox          >64k           >64k\nSafari           >64k           >64k\nIE11             2047           5120\nEdge 16          2047          10240\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Source: ",(0,t.jsx)(n.a,{href:"https://stackoverflow.com/questions/417142/what-is-the-maximum-length-of-a-url-in-different-browsers",children:"https://stackoverflow.com/questions/417142/what-is-the-maximum-length-of-a-url-in-different-browsers"})]}),"\n",(0,t.jsx)(n.h2,{id:"852ea18949cc47ad9c89488cf81019ce",children:"You can store large amounts of code in the hash parameters, and allow users to configure complex websites"}),"\n",(0,t.jsx)(n.p,{children:"Single metaframe pinned"}),"\n",(0,t.jsx)("iframe",{scrolling:"no",allow:"fullscreen *; camera *; speaker *;",style:{width:"100%",height:"370px",overflow:"hidden"},src:"https://app.metapage.io/mf?mfk=CRCyFFm29e"}),"\n",(0,t.jsx)(n.p,{children:"In the example above, enough code was embedded in the link to describe a 3D with a bunch of complex behaviour. Someone else can take that URL, and directly modify it, run it, then share the modified URL."}),"\n",(0,t.jsx)(n.p,{children:"This way, apps can be both self-contained, but also highly configurable and shareable, allowing a high degree of direct collaboration not under centralized control."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Edit:"}),"  click the top right in the embed above:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(780).Z+"",width:"116",height:"112"})}),"\n",(0,t.jsx)(n.p,{children:"and you will be able to directly edit the code running, and copy and reuse it yourself."}),"\n",(0,t.jsx)(n.h1,{id:"bfe0a74a53c3401e80a39b6baa8ce923",children:"References"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://neilmadden.blog/2019/01/16/can-you-ever-safely-include-credentials-in-a-url/",children:"https://neilmadden.blog/2019/01/16/can-you-ever-safely-include-credentials-in-a-url/"})})]})}function A(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},7835:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/1164251445-22c3196ad34f615078e1c578723866b4.png"},780:(e,n,s)=>{s.d(n,{Z:()=>t});const t="data:image/png;base64,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"},6471:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/2099585714-79232c3a492b8e8c67a575603c52b993.png"},3703:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>i});var t=s(959);const r={},a=t.createContext(r);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);
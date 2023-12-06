"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[9857],{7240:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=s(1527),a=s(3703);const r={title:"metapage URL schema",sidebar_position:6,slug:"/7965915b-b0e5-401d-b5ad-246e4812aa97"},i=void 0,o={permalink:"/blog/7965915b-b0e5-401d-b5ad-246e4812aa97",source:"@site/blog/metapage-URL-schema.mdx",title:"metapage URL schema",description:"Links to resources",date:"2023-12-06T19:32:47.173Z",formattedDate:"December 6, 2023",tags:[],readingTime:.7,hasTruncateMarker:!1,authors:[],frontMatter:{title:"metapage URL schema",sidebar_position:6,slug:"/7965915b-b0e5-401d-b5ad-246e4812aa97"},unlisted:!1,nextItem:{title:"How to get SharedArrayBuffer and cross-domain isolation with metapage.io",permalink:"/blog/590e31dd-740b-43ce-9667-a2879651a392"}},c={authorsImageUrls:[]},l=[{value:"Links to resources",id:"6562e6a9391e47459c62b51ca4705542",level:2},{value:"Solution",id:"7c09073f222448ad8bcac4b0402f6281",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"6562e6a9391e47459c62b51ca4705542",children:"Links to resources"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://blog.jim-nielsen.com/2023/examples-of-great-urls/",children:"https://blog.jim-nielsen.com/2023/examples-of-great-urls/"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://warpspire.com/posts/url-design/",children:"https://warpspire.com/posts/url-design/"})," (referenced by above)"]}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"f303de8ca6ed42c0b74ce3b17673638e",children:"Metapage URL schema"}),"\n",(0,t.jsx)(n.p,{children:"The way URLs are constructed:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Need to be consistent with current and future planned behaviour"}),"\n",(0,t.jsx)(n.li,{children:"Simple to understand"}),"\n",(0,t.jsxs)(n.li,{children:["Work with different methods of showing metapages","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The official editor: app.metapage.io"}),"\n",(0,t.jsx)(n.li,{children:"The standalone viewer"}),"\n",(0,t.jsx)(n.li,{children:"Others"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Allow arbitrary path names","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["E.g. users can name a metapage ",(0,t.jsx)(n.code,{children:"foo/bar/thing"})," and it shows up as ",(0,t.jsx)(n.code,{children:"https://app.metapage.io/<user>/foo/bar/thing"})]}),"\n",(0,t.jsx)(n.li,{children:"Then path hierarchies can be show to users"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The last part is important as  (currently) arbitrary path names do not work as ",(0,t.jsx)(n.strong,{children:"operations"})," are also specified in the path:  ",(0,t.jsx)(n.code,{children:"https://app.metapage.io/<user>/<name>/edit"})]}),"\n",(0,t.jsx)(n.h2,{id:"7c09073f222448ad8bcac4b0402f6281",children:"Solution"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"foo/bar/thing"})," is a valid metapage name"]}),"\n",(0,t.jsxs)(n.li,{children:["Anything after ",(0,t.jsx)(n.code,{children:"/<user>/"})," is the metapage name"]}),"\n",(0,t.jsxs)(n.li,{children:["Operations use query parameters","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"?view=edit"}),", ",(0,t.jsx)(n.code,{children:"?view=default"}),", ",(0,t.jsx)(n.code,{children:"?view=minimal"})," or whatever"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"State is hash parameters"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},3703:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>i});var t=s(959);const a={},r=t.createContext(a);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);
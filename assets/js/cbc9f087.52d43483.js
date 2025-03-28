"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[8501],{14428:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/git-refs-in-urls.18901857-9bb5-8021-a923-cfa9cea7e9d8-f8a9feda38fbf9b4a0652cd14ad45fb2.png"},28453:(e,i,t)=>{t.d(i,{R:()=>s,x:()=>c});var n=t(96540);const r={},a=n.createContext(r);function s(e){const i=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(a.Provider,{value:i},e.children)}},40074:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/git-refs-in-urls.18501857-9bb5-8018-b13a-efd0b7f29976-f49ed1c34fdfde70e8b4b33e020d50c9.png"},75561:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>o,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"Containers/git-refs-in-urls","title":"github refs in URLs","description":"See here for more expansive use of URL parameters","source":"@site/docs/Containers/git-refs-in-urls.mdx","sourceDirName":"Containers","slug":"/git-refs-in-urls","permalink":"/docs/git-refs-in-urls","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"github refs in URLs","sidebar_position":4,"slug":"/git-refs-in-urls"},"sidebar":"tutorialSidebar","previous":{"title":"worker cli reference","permalink":"/docs/container-cli-reference"},"next":{"title":"Browser iframe javascript libraries","permalink":"/docs/npm-modules"}}');var r=t(74848),a=t(28453);const s={title:"github refs in URLs",sidebar_position:4,slug:"/git-refs-in-urls"},c="Run a docker container built from a github repo at the tag defined in the URL {#182018579bb580c7a3f7f437181182e1}",o={},l=[{value:"Hard code the git ref (branch | tag | commit)",id:"185018579bb5802abb1ce0b1cbcba0cb",level:2},{value:"The git ref from the main URL",id:"185018579bb5800ab026cc11ec310b39",level:2}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",mermaid:"mermaid",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.admonition,{type:"tip",children:(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.a,{href:"/docs/inject-url-parameters",children:"See here"})," for more expansive use of URL parameters"]})}),"\n",(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"182018579bb580c7a3f7f437181182e1",children:"Run a docker container built from a github repo at the tag defined in the URL"})}),"\n",(0,r.jsx)(i.p,{children:"This is for container metaframes."}),"\n",(0,r.jsx)(i.admonition,{type:"tip",children:(0,r.jsxs)(i.p,{children:["You can set ",(0,r.jsx)(i.strong,{children:"any"})," URL parameters, they are passed in as env vars"]})}),"\n",(0,r.jsx)(i.admonition,{type:"tip",children:(0,r.jsx)(i.p,{children:"URL parameters passed in this way can also be access by the docker command"})}),"\n",(0,r.jsx)(i.h2,{id:"185018579bb5802abb1ce0b1cbcba0cb",children:"Hard code the git ref (branch | tag | commit)"}),"\n",(0,r.jsx)(i.p,{children:"This repo below at this exact commit location:"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.a,{href:"https://github.com/ulysseherbach/harissa/tree/affeff5e706b446358f4b619058c6e93afe8836f",children:"https://github.com/ulysseherbach/harissa/tree/affeff5e706b446358f4b619058c6e93afe8836f"})}),"\n",(0,r.jsxs)(i.p,{children:["can be set in the ",(0,r.jsx)(i.a,{href:"https://container.mtfm.io/#?autostart=true&job=JTdCJTIyYnVpbGQlMjIlM0ElN0IlMjJjb250ZXh0JTIyJTNBJTIyaHR0cHMlM0ElMkYlMkZnaXRodWIuY29tJTJGdWx5c3NlaGVyYmFjaCUyRmhhcmlzc2ElMkZ0cmVlJTJGYWZmZWZmNWU3MDZiNDQ2MzU4ZjRiNjE5MDU4YzZlOTNhZmU4ODM2ZiUyMiUyQyUyMmRvY2tlcmZpbGUlMjIlM0ElMjJGUk9NJTIwcHl0aG9uJTNBMy4xMS42LXNsaW0tYm9va3dvcm0lNUNuJTVDblJVTiUyMHBpcCUyMGluc3RhbGwlMjBudW1weSUyMCUyNiUyNiUyMHBpcCUyMGluc3RhbGwlMjBzY2lweSUyMCUyNiUyNiUyMHBpcCUyMGluc3RhbGwlMjBoYXJpc3NhJTVDbiUyMiU3RCUyQyUyMmNvbW1hbmQlMjIlM0ElMjJscyUyMC1sYSUyMiU3RA%3D%3D&queue=local1",children:"container metaframe"}),":"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:t(14428).A+"",width:"1342",height:"754"})}),"\n",(0,r.jsxs)(i.p,{children:["But a more flexible way is to set the ",(0,r.jsx)(i.code,{children:"git-ref"})," in the URL:"]}),"\n",(0,r.jsx)(i.h2,{id:"185018579bb5800ab026cc11ec310b39",children:"The git ref from the main URL"}),"\n",(0,r.jsxs)(i.p,{children:["Append ",(0,r.jsx)(i.code,{children:"tree/${git-ref}"})," to your git repo URL for example:"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:t(40074).A+"",width:"1384",height:"204"})}),"\n",(0,r.jsxs)(i.p,{children:["e.g.: ",(0,r.jsx)(i.a,{href:"https://metapage.io/dion/dev-github-ref-c121806128c54f89b44e2af9a176bd9b?git-ref=affeff5e706b446358f4b619058c6e93afe8836f",children:"https://metapage.io/dion/dev-github-ref-c121806128c54f89b44e2af9a176bd9b?git-ref=affeff5e706b446358f4b619058c6e93afe8836f"})]}),"\n",(0,r.jsxs)(i.p,{children:["The page URL ",(0,r.jsx)(i.code,{children:"git-ref"}),"  query param is then dynamically injected into to the container git repo URL: your container is now built from an exact git version."]}),"\n",(0,r.jsx)(i.p,{children:"This way the metapage is a \u201cview\u201d of the repo, with state, able to move along the history and branches of the git repository, simply via changing the URL"}),"\n",(0,r.jsx)(i.admonition,{type:"tip",children:(0,r.jsx)(i.p,{children:"You are now in the driving seat of a repository"})}),"\n",(0,r.jsx)(i.h1,{id:"188018579bb5803eac8ef9e1a6f76d26",children:"Related topics"}),"\n",(0,r.jsx)(i.mermaid,{value:'graph LR\n  containers["Metaframe: Containers"]\n  local["Local mode"]\n  remote["Remote mode"]\n  gitrefs["git refs in URLs"]\n  cli["cli reference"]\n  urlparams["URL parameters"]\n\n  containers --\x3e remote  \n  containers --\x3e local\n  containers --\x3e gitrefs\n  remote --\x3e cli\n  local --\x3e cli\n  urlparams --\x3e gitrefs\n  click containers "/docs/containers"\n  click remote "/docs/container-remote-mode"\n  click local "/docs/container-local-mode"\n  click gitrefs "/docs/git-refs-in-urls"\n  style gitrefs fill:#fff,stroke:#999999,stroke-width:2px,color:#000\n  click cli "/docs/container-cli-reference"\n  click urlparams "/docs/inject-url-parameters"'})]})}function f(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);
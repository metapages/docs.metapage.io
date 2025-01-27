"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[8501],{75561:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"Containers/git-refs-in-urls","title":"github refs in URLs","description":"182018579bb580c7a3f7f437181182e1}","source":"@site/docs/Containers/git-refs-in-urls.mdx","sourceDirName":"Containers","slug":"/git-refs-in-urls","permalink":"/docs/git-refs-in-urls","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"github refs in URLs","sidebar_position":3,"slug":"/git-refs-in-urls"},"sidebar":"tutorialSidebar","previous":{"title":"local","permalink":"/docs/container-local-mode"},"next":{"title":"Publishing","permalink":"/docs/archiving"}}');var r=i(74848),a=i(28453);const s={title:"github refs in URLs",sidebar_position:3,slug:"/git-refs-in-urls"},c="Run a docker container built from a github repo at the tag defined in the URL {#182018579bb580c7a3f7f437181182e1}",o={},l=[{value:"Hard code the git ref",id:"185018579bb5802abb1ce0b1cbcba0cb",level:2},{value:"The git ref from the main URL",id:"185018579bb5800ab026cc11ec310b39",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",mermaid:"mermaid",p:"p",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"182018579bb580c7a3f7f437181182e1",children:"Run a docker container built from a github repo at the tag defined in the URL"})}),"\n",(0,r.jsx)(t.h2,{id:"185018579bb5802abb1ce0b1cbcba0cb",children:"Hard code the git ref"}),"\n",(0,r.jsx)(t.p,{children:"This repo at this exact commit location (can be branch/tag/sha):"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/ulysseherbach/harissa/tree/affeff5e706b446358f4b619058c6e93afe8836f",children:"https://github.com/ulysseherbach/harissa/tree/affeff5e706b446358f4b619058c6e93afe8836f"})}),"\n",(0,r.jsxs)(t.p,{children:["can be set in the ",(0,r.jsx)(t.a,{href:"https://container.mtfm.io/#?autostart=true&job=JTdCJTIyYnVpbGQlMjIlM0ElN0IlMjJjb250ZXh0JTIyJTNBJTIyaHR0cHMlM0ElMkYlMkZnaXRodWIuY29tJTJGdWx5c3NlaGVyYmFjaCUyRmhhcmlzc2ElMkZ0cmVlJTJGYWZmZWZmNWU3MDZiNDQ2MzU4ZjRiNjE5MDU4YzZlOTNhZmU4ODM2ZiUyMiUyQyUyMmRvY2tlcmZpbGUlMjIlM0ElMjJGUk9NJTIwcHl0aG9uJTNBMy4xMS42LXNsaW0tYm9va3dvcm0lNUNuJTVDblJVTiUyMHBpcCUyMGluc3RhbGwlMjBudW1weSUyMCUyNiUyNiUyMHBpcCUyMGluc3RhbGwlMjBzY2lweSUyMCUyNiUyNiUyMHBpcCUyMGluc3RhbGwlMjBoYXJpc3NhJTVDbiUyMiU3RCUyQyUyMmNvbW1hbmQlMjIlM0ElMjJscyUyMC1sYSUyMiU3RA%3D%3D&queue=local1",children:"container metaframe"}),":"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:i(15683).A+"",width:"1396",height:"598"})}),"\n",(0,r.jsxs)(t.p,{children:["But a more flexible way is to set the ",(0,r.jsx)(t.code,{children:"git-ref"})," in the URL:"]}),"\n",(0,r.jsx)(t.h2,{id:"185018579bb5800ab026cc11ec310b39",children:"The git ref from the main URL"}),"\n",(0,r.jsxs)(t.p,{children:["Append ",(0,r.jsx)(t.code,{children:"tree/${git-ref}"})," to your git repo URL:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:i(40074).A+"",width:"1384",height:"204"})}),"\n",(0,r.jsxs)(t.p,{children:["Set the browser URL query parameter with the desired ref: ",(0,r.jsx)(t.code,{children:"?git-ref=affeff5e706b446358f4"}),"..."]}),"\n",(0,r.jsx)(t.p,{children:"e.g.:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://metapage.io/dion/dev-github-ref-c121806128c54f89b44e2af9a176bd9b?git-ref=affeff5e706b446358f4b619058c6e93afe8836f",children:"https://metapage.io/dion/dev-github-ref-c121806128c54f89b44e2af9a176bd9b?git-ref=affeff5e706b446358f4b619058c6e93afe8836f"})}),"\n",(0,r.jsxs)(t.p,{children:["The page URL ",(0,r.jsx)(t.code,{children:"git-ref"}),"  query param is then dynamically injected into to the container git repo URL: your container is now built from an exact git version."]}),"\n",(0,r.jsx)(t.p,{children:"This way the metapage is a \u201cview\u201d of the repo, with state, able to move along and view any part of the repo, simply via changing the URL"}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"You are now in the driving seat of a repository"})}),"\n",(0,r.jsx)(t.h1,{id:"188018579bb5803eac8ef9e1a6f76d26",children:"Related topics"}),"\n",(0,r.jsx)(t.mermaid,{value:'graph LR\n  containers["Metaframe: Containers"]\n  local["Local mode"]\n  remote["Remote mode"]\n  gitrefs["git refs in URLs"]\n\n  containers --\x3e remote  \n  containers --\x3e local\n  containers --\x3e gitrefs\n  click containers "/docs/containers"\n  click remote "/docs/container-remote-mode"\n  click local "/docs/container-local-mode"\n  click gitrefs "/docs/git-refs-in-urls"\n  style gitrefs fill:#fff,stroke:#999999,stroke-width:2px,color:#000'})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},15683:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/git-refs-in-urls.18501857-9bb5-8008-8948-fc09e0a2e16c-e6b4dda7539d9261b6f502b60e094e45.png"},40074:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/git-refs-in-urls.18501857-9bb5-8018-b13a-efd0b7f29976-f49ed1c34fdfde70e8b4b33e020d50c9.png"},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>c});var n=i(96540);const r={},a=n.createContext(r);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);
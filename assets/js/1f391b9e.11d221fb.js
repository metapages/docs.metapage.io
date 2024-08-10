"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[3085],{9710:(e,n,t)=>{t.d(n,{Z:()=>v});t(959);var a=t(5341),i=t(2778),s=t(8002),r=t(1527);function l(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(s.Z,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function d(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function m(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}var u=t(8871),f=t(3508);function g(e){let{className:n}=e;return(0,r.jsx)(f.Z,{type:"caution",title:(0,r.jsx)(d,{}),className:(0,a.Z)(n,u.k.common.draftBanner),children:(0,r.jsx)(m,{})})}function h(e){let{className:n}=e;return(0,r.jsx)(f.Z,{type:"caution",title:(0,r.jsx)(l,{}),className:(0,a.Z)(n,u.k.common.unlistedBanner),children:(0,r.jsx)(o,{})})}function x(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(h,{...e})]})}function v(e){let{metadata:n}=e;const{unlisted:t,frontMatter:a}=n;return(0,r.jsxs)(r.Fragment,{children:[(t||a.unlisted)&&(0,r.jsx)(x,{}),a.draft&&(0,r.jsx)(g,{})]})}},6405:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f});t(959);var a=t(5341),i=t(3410),s=t(8871),r=t(8294),l=t(5676),o=t(7508),c=t(9710),d=t(364);const m={mdxPageWrapper:"mdxPageWrapper_edKK"};var u=t(1527);function f(e){const{content:n}=e,{metadata:t,assets:f}=n,{title:g,editUrl:h,description:x,frontMatter:v,lastUpdatedBy:p,lastUpdatedAt:j}=t,{keywords:b,wrapperClassName:L,hide_table_of_contents:N}=v,C=f.image??v.image,k=!!(h||j||p);return(0,u.jsx)(i.FG,{className:(0,a.Z)(L??s.k.wrapper.mdxPages,s.k.page.mdxPage),children:(0,u.jsxs)(r.Z,{children:[(0,u.jsx)(i.d,{title:g,description:x,keywords:b,image:C}),(0,u.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,u.jsxs)("div",{className:(0,a.Z)("row",m.mdxPageWrapper),children:[(0,u.jsxs)("div",{className:(0,a.Z)("col",!N&&"col--8"),children:[(0,u.jsx)(c.Z,{metadata:t}),(0,u.jsx)("article",{children:(0,u.jsx)(l.Z,{children:(0,u.jsx)(n,{})})}),k&&(0,u.jsx)(d.Z,{className:(0,a.Z)("margin-top--sm",s.k.pages.pageFooterEditMetaRow),editUrl:h,lastUpdatedAt:j,lastUpdatedBy:p})]}),!N&&n.toc.length>0&&(0,u.jsx)("div",{className:"col col--2",children:(0,u.jsx)(o.Z,{toc:n.toc,minHeadingLevel:v.toc_min_heading_level,maxHeadingLevel:v.toc_max_heading_level})})]})})]})})}},7508:(e,n,t)=>{t.d(n,{Z:()=>c});t(959);var a=t(5341),i=t(9824);const s={tableOfContents:"tableOfContents_LAwr",docItemContainer:"docItemContainer_bTYo"};var r=t(1527);const l="table-of-contents__link toc-highlight",o="table-of-contents__link--active";function c(e){let{className:n,...t}=e;return(0,r.jsx)("div",{className:(0,a.Z)(s.tableOfContents,"thin-scrollbar",n),children:(0,r.jsx)(i.Z,{...t,linkClassName:l,linkActiveClassName:o})})}},9824:(e,n,t)=>{t.d(n,{Z:()=>h});var a=t(959),i=t(189);function s(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...i}=e;t>=0?n[t].children.push(i):a.push(i)})),a}function r(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=r({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}function l(e){const n=e.getBoundingClientRect();return n.top===n.bottom?l(e.parentNode):n}function o(e,n){let{anchorTopOffset:t}=n;const a=e.find((e=>l(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function c(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:n}}=(0,i.L)();return(0,a.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,a.useRef)(void 0),t=c();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:i,minHeadingLevel:s,maxHeadingLevel:r}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let i=n;i<=t;i+=1)a.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:s,maxHeadingLevel:r}),c=o(l,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(i),e.classList.add(i),n.current=e):e.classList.remove(i)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}var m=t(9290),u=t(1527);function f(e){let{toc:n,className:t,linkClassName:a,isChild:i}=e;return n.length?(0,u.jsx)("ul",{className:i?void 0:t,children:n.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.Z,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(f,{isChild:!0,toc:e.children,className:t,linkClassName:a})]},e.id)))}):null}const g=a.memo(f);function h(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:m,...f}=e;const h=(0,i.L)(),x=c??h.tableOfContents.minHeadingLevel,v=m??h.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return(0,a.useMemo)((()=>r({toc:s(n),minHeadingLevel:t,maxHeadingLevel:i})),[n,t,i])}({toc:n,minHeadingLevel:x,maxHeadingLevel:v});return d((0,a.useMemo)((()=>{if(l&&o)return{linkClassName:l,linkActiveClassName:o,minHeadingLevel:x,maxHeadingLevel:v}}),[l,o,x,v])),(0,u.jsx)(g,{toc:p,className:t,linkClassName:l,...f})}},6319:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(959),i=t(2527),s=t(4677),r=t(3508),l=t(1527);const o={React:a,...a,ButtonExample:e=>(0,l.jsx)("button",{...e,style:{backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer",...e.style}}),MetaframeStandaloneComponent:s.EC,MetapageGridLayoutFromMetapage:s.W2,MetapageGridLayoutFromDefinition:s.D5,VersionsMetapage:i.Eo,Metapage:i.AW,Admonition:r.Z}}}]);
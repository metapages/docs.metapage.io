"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[7918],{9710:(e,t,n)=>{n.d(t,{Z:()=>g});n(959);var s=n(5341),a=n(2778),i=n(8002),o=n(1527);function l(){return(0,o.jsx)(a.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,o.jsx)(a.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,o.jsx)(i.Z,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function d(){return(0,o.jsx)(a.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function u(){return(0,o.jsx)(a.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}var m=n(8871),h=n(3508);function b(e){let{className:t}=e;return(0,o.jsx)(h.Z,{type:"caution",title:(0,o.jsx)(d,{}),className:(0,s.Z)(t,m.k.common.draftBanner),children:(0,o.jsx)(u,{})})}function v(e){let{className:t}=e;return(0,o.jsx)(h.Z,{type:"caution",title:(0,o.jsx)(l,{}),className:(0,s.Z)(t,m.k.common.unlistedBanner),children:(0,o.jsx)(r,{})})}function x(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c,{}),(0,o.jsx)(v,{...e})]})}function g(e){let{metadata:t}=e;const{unlisted:n,frontMatter:s}=t;return(0,o.jsxs)(o.Fragment,{children:[(n||s.unlisted)&&(0,o.jsx)(x,{}),s.draft&&(0,o.jsx)(b,{})]})}},2899:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ae});var s=n(959),a=n(3410),i=n(9856),o=n(1527);const l=s.createContext(null);function r(e){let{children:t,content:n}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,o.jsx)(l.Provider,{value:a,children:t})}function c(){const e=(0,s.useContext)(l);if(null===e)throw new i.i6("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=c();return(0,o.jsx)(a.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(5341),m=n(8570),h=n(2778),b=n(7585);function v(e){const{previous:t,next:n}=e;return(0,o.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,o.jsx)(b.Z,{...t,subLabel:(0,o.jsx)(h.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,o.jsx)(b.Z,{...n,subLabel:(0,o.jsx)(h.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function x(){const{metadata:e}=c();return(0,o.jsx)(v,{previous:e.previous,next:e.next})}var g=n(5913),p=n(9290),f=n(3106),j=n(8871),L=n(767),C=n(4916);const N={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,o.jsx)(h.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,o.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,o.jsx)(h.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,o.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function _(e){const t=N[e.versionMetadata.banner];return(0,o.jsx)(t,{...e})}function k(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,o.jsx)(h.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,o.jsx)("b",{children:(0,o.jsx)(p.Z,{to:n,onClick:s,children:(0,o.jsx)(h.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function Z(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:s}}=(0,g.Z)(),{pluginId:a}=(0,f.gA)({failfast:!0}),{savePreferredVersionName:i}=(0,L.J)(a),{latestDocSuggestion:l,latestVersionSuggestion:r}=(0,f.Jo)(a),c=l??(d=r).docs.find((e=>e.id===d.mainDocId));var d;return(0,o.jsxs)("div",{className:(0,u.Z)(t,j.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,o.jsx)("div",{children:(0,o.jsx)(_,{siteTitle:s,versionMetadata:n})}),(0,o.jsx)("div",{className:"margin-top--md",children:(0,o.jsx)(k,{versionLabel:r.label,to:c.path,onClick:()=>i(r.name)})})]})}function T(e){let{className:t}=e;const n=(0,C.E)();return n.banner?(0,o.jsx)(Z,{className:t,versionMetadata:n}):null}function H(e){let{className:t}=e;const n=(0,C.E)();return n.badge?(0,o.jsx)("span",{className:(0,u.Z)(t,j.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(h.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}var M=n(1984),y=n(364);function B(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,tags:a}=e,i=a.length>0,l=!!(t||n||s);return i||l?(0,o.jsxs)("footer",{className:(0,u.Z)(j.k.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,o.jsx)("div",{className:(0,u.Z)("row margin-top--sm",j.k.docs.docFooterTagsRow),children:(0,o.jsx)("div",{className:"col",children:(0,o.jsx)(M.Z,{tags:a})})}),l&&(0,o.jsx)(y.Z,{className:(0,u.Z)("margin-top--sm",j.k.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s})]}):null}var I=n(6515),w=n(9824);const E={tocCollapsibleButton:"tocCollapsibleButton_GUWw",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_h3lM"};function A(e){let{collapsed:t,...n}=e;return(0,o.jsx)("button",{type:"button",...n,className:(0,u.Z)("clean-btn",E.tocCollapsibleButton,!t&&E.tocCollapsibleButtonExpanded,n.className),children:(0,o.jsx)(h.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const V={tocCollapsible:"tocCollapsible_Kn9m",tocCollapsibleContent:"tocCollapsibleContent__tMP",tocCollapsibleExpanded:"tocCollapsibleExpanded_PnNJ"};function O(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:i,toggleCollapsed:l}=(0,I.u)({initialState:!0});return(0,o.jsxs)("div",{className:(0,u.Z)(V.tocCollapsible,!i&&V.tocCollapsibleExpanded,n),children:[(0,o.jsx)(A,{collapsed:i,onClick:l}),(0,o.jsx)(I.z,{lazy:!0,className:V.tocCollapsibleContent,collapsed:i,children:(0,o.jsx)(w.Z,{toc:t,minHeadingLevel:s,maxHeadingLevel:a})})]})}const R={tocMobile:"tocMobile_bMLP"};function S(){const{toc:e,frontMatter:t}=c();return(0,o.jsx)(O,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.Z)(j.k.docs.docTocMobile,R.tocMobile)})}var P=n(7508);function F(){const{toc:e,frontMatter:t}=c();return(0,o.jsx)(P.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:j.k.docs.docTocDesktop})}var U=n(7778),D=n(5676);function z(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,o.jsxs)("div",{className:(0,u.Z)(j.k.docs.docMarkdown,"markdown"),children:[n&&(0,o.jsx)("header",{children:(0,o.jsx)(U.Z,{as:"h1",children:n})}),(0,o.jsx)(D.Z,{children:t})]})}var W=n(8654),G=n(181),J=n(3246);function $(e){return(0,o.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,o.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const q={breadcrumbHomeIcon:"breadcrumbHomeIcon_bgeV"};function K(){const e=(0,J.ZP)("/");return(0,o.jsx)("li",{className:"breadcrumbs__item",children:(0,o.jsx)(p.Z,{"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,o.jsx)($,{className:q.breadcrumbHomeIcon})})})}const Y={breadcrumbsContainer:"breadcrumbsContainer_vjfe"};function Q(e){let{children:t,href:n,isLast:s}=e;const a="breadcrumbs__link";return s?(0,o.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,o.jsx)(p.Z,{className:a,href:n,itemProp:"item",children:(0,o.jsx)("span",{itemProp:"name",children:t})}):(0,o.jsx)("span",{className:a,children:t})}function X(e){let{children:t,active:n,index:s,addMicrodata:a}=e;return(0,o.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,o.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function ee(){const e=(0,W.s1)(),t=(0,G.Ns)();return e?(0,o.jsx)("nav",{className:(0,u.Z)(j.k.docs.docBreadcrumbs,Y.breadcrumbsContainer),"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,o.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,o.jsx)(K,{}),e.map(((t,n)=>{const s=n===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,o.jsx)(X,{active:s,index:n,addMicrodata:!!a,children:(0,o.jsx)(Q,{href:a,isLast:s,children:t.label})},n)}))]})}):null}var te=n(9710);const ne={docItemContainer:"docItemContainer_Bouz",docItemCol:"docItemCol_PJVd"};function se(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.i)(),s=e.hide_table_of_contents,a=!s&&t.length>0;return{hidden:s,mobile:a?(0,o.jsx)(S,{}):void 0,desktop:!a||"desktop"!==n&&"ssr"!==n?void 0:(0,o.jsx)(F,{})}}(),{metadata:s}=c();return(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:(0,u.Z)("col",!n.hidden&&ne.docItemCol),children:[(0,o.jsx)(te.Z,{metadata:s}),(0,o.jsx)(T,{}),(0,o.jsxs)("div",{className:ne.docItemContainer,children:[(0,o.jsxs)("article",{children:[(0,o.jsx)(ee,{}),(0,o.jsx)(H,{}),n.mobile,(0,o.jsx)(z,{children:t}),(0,o.jsx)(B,{})]}),(0,o.jsx)(x,{})]})]}),n.desktop&&(0,o.jsx)("div",{className:"col col--3",children:n.desktop})]})}function ae(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,o.jsx)(r,{content:e.content,children:(0,o.jsxs)(a.FG,{className:t,children:[(0,o.jsx)(d,{}),(0,o.jsx)(se,{children:(0,o.jsx)(n,{})})]})})}},7585:(e,t,n)=>{n.d(t,{Z:()=>o});n(959);var s=n(5341),a=n(9290),i=n(1527);function o(e){const{permalink:t,title:n,subLabel:o,isNext:l}=e;return(0,i.jsxs)(a.Z,{className:(0,s.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[o&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:o}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}},7508:(e,t,n)=>{n.d(t,{Z:()=>c});n(959);var s=n(5341),a=n(9824);const i={tableOfContents:"tableOfContents_LAwr",docItemContainer:"docItemContainer_bTYo"};var o=n(1527);const l="table-of-contents__link toc-highlight",r="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,o.jsx)("div",{className:(0,s.Z)(i.tableOfContents,"thin-scrollbar",t),children:(0,o.jsx)(a.Z,{...n,linkClassName:l,linkActiveClassName:r})})}},9824:(e,t,n)=>{n.d(t,{Z:()=>v});var s=n(959),a=n(189);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):s.push(a)})),s}function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=o({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function l(e){const t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function r(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>l(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function c(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.L)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,s.useRef)(void 0),n=c();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:i,maxHeadingLevel:o}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let a=t;a<=n;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:i,maxHeadingLevel:o}),c=r(l,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}var u=n(9290),m=n(1527);function h(e){let{toc:t,className:n,linkClassName:s,isChild:a}=e;return t.length?(0,m.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.Z,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const b=s.memo(h);function v(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const v=(0,a.L)(),x=c??v.tableOfContents.minHeadingLevel,g=u??v.tableOfContents.maxHeadingLevel,p=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>o({toc:i(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:x,maxHeadingLevel:g});return d((0,s.useMemo)((()=>{if(l&&r)return{linkClassName:l,linkActiveClassName:r,minHeadingLevel:x,maxHeadingLevel:g}}),[l,r,x,g])),(0,m.jsx)(b,{toc:p,className:n,linkClassName:l,...h})}},1984:(e,t,n)=>{n.d(t,{Z:()=>d});n(959);var s=n(5341),a=n(2778),i=n(9290);const o={tag:"tag_k5Sj",tagRegular:"tagRegular_OHpR",tagWithCount:"tagWithCount_Cgiu"};var l=n(1527);function r(e){let{permalink:t,label:n,count:a,description:r}=e;return(0,l.jsxs)(i.Z,{href:t,title:r,className:(0,s.Z)(o.tag,a?o.tagWithCount:o.tagRegular),children:[n,a&&(0,l.jsx)("span",{children:a})]})}const c={tags:"tags_fkSg",tag:"tag_bzkO"};function d(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(a.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,s.Z)(c.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,l.jsx)("li",{className:c.tag,children:(0,l.jsx)(r,{...e})},e.permalink)))})]})}},6319:(e,t,n)=>{n.d(t,{Z:()=>r});var s=n(959),a=n(2527),i=n(4677),o=n(3508),l=n(1527);const r={React:s,...s,ButtonExample:e=>(0,l.jsx)("button",{...e,style:{backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer",...e.style}}),MetaframeStandaloneComponent:i.EC,MetapageGridLayoutFromMetapage:i.W2,MetapageGridLayoutFromDefinition:i.D5,VersionsMetapage:a.Eo,Metapage:a.AW,Admonition:o.Z}}}]);
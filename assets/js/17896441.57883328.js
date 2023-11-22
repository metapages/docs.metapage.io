"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[7918],{8519:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ce});var a=n(959),s=n(8024),i=n(4731),l=n(1527);const o=a.createContext(null);function r(e){let{children:t,content:n}=e;const s=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,l.jsx)(o.Provider,{value:s,children:t})}function d(){const e=(0,a.useContext)(o);if(null===e)throw new i.i6("DocProvider");return e}function c(){const{metadata:e,frontMatter:t,assets:n}=d();return(0,l.jsx)(s.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(5924),m=n(5917),h=n(5656),p=n(1621);function x(e){const{previous:t,next:n}=e;return(0,l.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,l.jsx)(p.Z,{...t,subLabel:(0,l.jsx)(h.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,l.jsx)(p.Z,{...n,subLabel:(0,l.jsx)(h.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function b(){const{metadata:e}=d();return(0,l.jsx)(x,{previous:e.previous,next:e.next})}var v=n(6506),g=n(7964),f=n(3069),j=n(7641),L=n(9569),C=n(9642);const N={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,l.jsx)(h.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,l.jsx)(h.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function _(e){const t=N[e.versionMetadata.banner];return(0,l.jsx)(t,{...e})}function k(e){let{versionLabel:t,to:n,onClick:a}=e;return(0,l.jsx)(h.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,l.jsx)("b",{children:(0,l.jsx)(g.Z,{to:n,onClick:a,children:(0,l.jsx)(h.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function Z(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:a}}=(0,v.Z)(),{pluginId:s}=(0,f.gA)({failfast:!0}),{savePreferredVersionName:i}=(0,L.J)(s),{latestDocSuggestion:o,latestVersionSuggestion:r}=(0,f.Jo)(s),d=o??(c=r).docs.find((e=>e.id===c.mainDocId));var c;return(0,l.jsxs)("div",{className:(0,u.default)(t,j.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,l.jsx)("div",{children:(0,l.jsx)(_,{siteTitle:a,versionMetadata:n})}),(0,l.jsx)("div",{className:"margin-top--md",children:(0,l.jsx)(k,{versionLabel:r.label,to:d.path,onClick:()=>i(r.name)})})]})}function T(e){let{className:t}=e;const n=(0,C.E)();return n.banner?(0,l.jsx)(Z,{className:t,versionMetadata:n}):null}function y(e){let{className:t}=e;const n=(0,C.E)();return n.badge?(0,l.jsx)("span",{className:(0,u.default)(t,j.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(h.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}function U(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return(0,l.jsx)(h.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,l.jsx)("b",{children:(0,l.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:n})})},children:" on {date}"})}function H(e){let{lastUpdatedBy:t}=e;return(0,l.jsx)(h.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,l.jsx)("b",{children:t})},children:" by {user}"})}function M(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:a}=e;return(0,l.jsxs)("span",{className:j.k.common.lastUpdated,children:[(0,l.jsx)(h.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?(0,l.jsx)(U,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:a?(0,l.jsx)(H,{lastUpdatedBy:a}):""},children:"Last updated{atDate}{byUser}"}),!1]})}var A=n(2866),w=n(6517);const E={lastUpdated:"lastUpdated_cYHT"};function I(e){return(0,l.jsx)("div",{className:(0,u.default)(j.k.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(w.Z,{...e})})})}function B(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:a,formattedLastUpdatedAt:s}=e;return(0,l.jsxs)("div",{className:(0,u.default)(j.k.docs.docFooterEditMetaRow,"row"),children:[(0,l.jsx)("div",{className:"col",children:t&&(0,l.jsx)(A.Z,{editUrl:t})}),(0,l.jsx)("div",{className:(0,u.default)("col",E.lastUpdated),children:(n||a)&&(0,l.jsx)(M,{lastUpdatedAt:n,formattedLastUpdatedAt:s,lastUpdatedBy:a})})]})}function O(){const{metadata:e}=d(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:a,lastUpdatedBy:s,tags:i}=e,o=i.length>0,r=!!(t||n||s);return o||r?(0,l.jsxs)("footer",{className:(0,u.default)(j.k.docs.docFooter,"docusaurus-mt-lg"),children:[o&&(0,l.jsx)(I,{tags:i}),r&&(0,l.jsx)(B,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,formattedLastUpdatedAt:a})]}):null}var S=n(9865),R=n(9554);const V={tocCollapsibleButton:"tocCollapsibleButton_Ili3",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_FrMM"};function D(e){let{collapsed:t,...n}=e;return(0,l.jsx)("button",{type:"button",...n,className:(0,u.default)("clean-btn",V.tocCollapsibleButton,!t&&V.tocCollapsibleButtonExpanded,n.className),children:(0,l.jsx)(h.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const F={tocCollapsible:"tocCollapsible_J5eO",tocCollapsibleContent:"tocCollapsibleContent_VS8c",tocCollapsibleExpanded:"tocCollapsibleExpanded_m6lb"};function P(e){let{toc:t,className:n,minHeadingLevel:a,maxHeadingLevel:s}=e;const{collapsed:i,toggleCollapsed:o}=(0,S.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,u.default)(F.tocCollapsible,!i&&F.tocCollapsibleExpanded,n),children:[(0,l.jsx)(D,{collapsed:i,onClick:o}),(0,l.jsx)(S.z,{lazy:!0,className:F.tocCollapsibleContent,collapsed:i,children:(0,l.jsx)(R.Z,{toc:t,minHeadingLevel:a,maxHeadingLevel:s})})]})}const z={tocMobile:"tocMobile_LIiR"};function W(){const{toc:e,frontMatter:t}=d();return(0,l.jsx)(P,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.default)(j.k.docs.docTocMobile,z.tocMobile)})}var q=n(3364);function G(){const{toc:e,frontMatter:t}=d();return(0,l.jsx)(q.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:j.k.docs.docTocDesktop})}var J=n(5213),$=n(2578);function X(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=d();return t.hide_title||void 0!==n?null:e.title}();return(0,l.jsxs)("div",{className:(0,u.default)(j.k.docs.docMarkdown,"markdown"),children:[n&&(0,l.jsx)("header",{children:(0,l.jsx)(J.Z,{as:"h1",children:n})}),(0,l.jsx)($.Z,{children:t})]})}var K=n(338),Y=n(6003),Q=n(5906);function ee(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const te={breadcrumbHomeIcon:"breadcrumbHomeIcon_DuCT"};function ne(){const e=(0,Q.Z)("/");return(0,l.jsx)("li",{className:"breadcrumbs__item",children:(0,l.jsx)(g.Z,{"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,l.jsx)(ee,{className:te.breadcrumbHomeIcon})})})}const ae={breadcrumbsContainer:"breadcrumbsContainer_XPhC"};function se(e){let{children:t,href:n,isLast:a}=e;const s="breadcrumbs__link";return a?(0,l.jsx)("span",{className:s,itemProp:"name",children:t}):n?(0,l.jsx)(g.Z,{className:s,href:n,itemProp:"item",children:(0,l.jsx)("span",{itemProp:"name",children:t})}):(0,l.jsx)("span",{className:s,children:t})}function ie(e){let{children:t,active:n,index:a,addMicrodata:s}=e;return(0,l.jsxs)("li",{...s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.default)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,l.jsx)("meta",{itemProp:"position",content:String(a+1)})]})}function le(){const e=(0,K.s1)(),t=(0,Y.Ns)();return e?(0,l.jsx)("nav",{className:(0,u.default)(j.k.docs.docBreadcrumbs,ae.breadcrumbsContainer),"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,l.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,l.jsx)(ne,{}),e.map(((t,n)=>{const a=n===e.length-1,s="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,l.jsx)(ie,{active:a,index:n,addMicrodata:!!s,children:(0,l.jsx)(se,{href:s,isLast:a,children:t.label})},n)}))]})}):null}var oe=n(5679);const re={docItemContainer:"docItemContainer_pSOM",docItemCol:"docItemCol_XiCD"};function de(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=d(),n=(0,m.i)(),a=e.hide_table_of_contents,s=!a&&t.length>0;return{hidden:a,mobile:s?(0,l.jsx)(W,{}):void 0,desktop:!s||"desktop"!==n&&"ssr"!==n?void 0:(0,l.jsx)(G,{})}}(),{metadata:{unlisted:a}}=d();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,u.default)("col",!n.hidden&&re.docItemCol),children:[a&&(0,l.jsx)(oe.Z,{}),(0,l.jsx)(T,{}),(0,l.jsxs)("div",{className:re.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(le,{}),(0,l.jsx)(y,{}),n.mobile,(0,l.jsx)(X,{children:t}),(0,l.jsx)(O,{})]}),(0,l.jsx)(b,{})]})]}),n.desktop&&(0,l.jsx)("div",{className:"col col--3",children:n.desktop})]})}function ce(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,l.jsx)(r,{content:e.content,children:(0,l.jsxs)(s.FG,{className:t,children:[(0,l.jsx)(c,{}),(0,l.jsx)(de,{children:(0,l.jsx)(n,{})})]})})}},2866:(e,t,n)=>{n.d(t,{Z:()=>c});n(959);var a=n(5656),s=n(7641),i=n(7964),l=n(5924);const o={iconEdit:"iconEdit_zFyt"};var r=n(1527);function d(e){let{className:t,...n}=e;return(0,r.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.default)(o.iconEdit,t),"aria-hidden":"true",...n,children:(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function c(e){let{editUrl:t}=e;return(0,r.jsxs)(i.Z,{to:t,className:s.k.common.editThisPage,children:[(0,r.jsx)(d,{}),(0,r.jsx)(a.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}},1621:(e,t,n)=>{n.d(t,{Z:()=>l});n(959);var a=n(5924),s=n(7964),i=n(1527);function l(e){const{permalink:t,title:n,subLabel:l,isNext:o}=e;return(0,i.jsxs)(s.Z,{className:(0,a.default)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[l&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}},3364:(e,t,n)=>{n.d(t,{Z:()=>d});n(959);var a=n(5924),s=n(9554);const i={tableOfContents:"tableOfContents_VjFO",docItemContainer:"docItemContainer_KZOh"};var l=n(1527);const o="table-of-contents__link toc-highlight",r="table-of-contents__link--active";function d(e){let{className:t,...n}=e;return(0,l.jsx)("div",{className:(0,a.default)(i.tableOfContents,"thin-scrollbar",t),children:(0,l.jsx)(s.Z,{...n,linkClassName:o,linkActiveClassName:r})})}},9554:(e,t,n)=>{n.d(t,{Z:()=>x});var a=n(959),s=n(664);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...s}=e;n>=0?t[n].children.push(s):a.push(s)})),a}function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=l({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function r(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>o(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function d(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,s.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function c(e){const t=(0,a.useRef)(void 0),n=d();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:s,minHeadingLevel:i,maxHeadingLevel:l}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let s=t;s<=n;s+=1)a.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),d=r(o,{anchorTopOffset:n.current}),c=e.find((e=>d&&d.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(s),e.classList.add(s),t.current=e):e.classList.remove(s)}(e,e===c)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}var u=n(7964),m=n(1527);function h(e){let{toc:t,className:n,linkClassName:a,isChild:s}=e;return t.length?(0,m.jsx)("ul",{className:s?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.Z,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:a})]},e.id)))}):null}const p=a.memo(h);function x(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:d,maxHeadingLevel:u,...h}=e;const x=(0,s.L)(),b=d??x.tableOfContents.minHeadingLevel,v=u??x.tableOfContents.maxHeadingLevel,g=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return(0,a.useMemo)((()=>l({toc:i(t),minHeadingLevel:n,maxHeadingLevel:s})),[t,n,s])}({toc:t,minHeadingLevel:b,maxHeadingLevel:v});return c((0,a.useMemo)((()=>{if(o&&r)return{linkClassName:o,linkActiveClassName:r,minHeadingLevel:b,maxHeadingLevel:v}}),[o,r,b,v])),(0,m.jsx)(p,{toc:g,className:n,linkClassName:o,...h})}},6517:(e,t,n)=>{n.d(t,{Z:()=>c});n(959);var a=n(5924),s=n(5656),i=n(7964);const l={tag:"tag_bED9",tagRegular:"tagRegular_NyWZ",tagWithCount:"tagWithCount_Z5Fz"};var o=n(1527);function r(e){let{permalink:t,label:n,count:s}=e;return(0,o.jsxs)(i.Z,{href:t,className:(0,a.default)(l.tag,s?l.tagWithCount:l.tagRegular),children:[n,s&&(0,o.jsx)("span",{children:s})]})}const d={tags:"tags_isN2",tag:"tag_VPqZ"};function c(e){let{tags:t}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,o.jsx)("ul",{className:(0,a.default)(d.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:n}=e;return(0,o.jsx)("li",{className:d.tag,children:(0,o.jsx)(r,{label:t,permalink:n})},n)}))})]})}},5679:(e,t,n)=>{n.d(t,{Z:()=>h});n(959);var a=n(5924),s=n(5656),i=n(8419),l=n(1527);function o(){return(0,l.jsx)(s.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,l.jsx)(s.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function d(){return(0,l.jsx)(i.Z,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var c=n(7641),u=n(9247);function m(e){let{className:t}=e;return(0,l.jsx)(u.Z,{type:"caution",title:(0,l.jsx)(o,{}),className:(0,a.default)(t,c.k.common.unlistedBanner),children:(0,l.jsx)(r,{})})}function h(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(d,{}),(0,l.jsx)(m,{...e})]})}},6319:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(959),s=n(2527),i=n(6102),l=n(9247),o=n(1527);const r={React:a,...a,ButtonExample:e=>(0,o.jsx)("button",{...e,style:{backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer",...e.style}}),MetaframeStandaloneComponent:i.EC,MetapageGridLayoutFromMetapage:i.W2,MetapageGridLayoutFromDefinition:i.D5,VersionsMetapage:s.Eo,Metapage:s.AW,Admonition:l.Z}}}]);
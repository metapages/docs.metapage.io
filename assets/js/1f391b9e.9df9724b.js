"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[85],{5382:(e,n,t)=>{t.r(n),t.d(n,{default:()=>d});var a=t(9496),l=t(5924),r=t(143),i=t(9129),o=t(2177),c=t(2432),s=t(7217);const m={mdxPageWrapper:"mdxPageWrapper_CwcX"};function d(e){const{content:n}=e,{metadata:{title:t,description:d,frontMatter:u}}=n,{wrapperClassName:f,hide_table_of_contents:v}=u;return a.createElement(r.FG,{className:(0,l.Z)(f??i.k.wrapper.mdxPages,i.k.page.mdxPage)},a.createElement(r.d,{title:t,description:d}),a.createElement(o.Z,null,a.createElement("main",{className:"container container--fluid margin-vert--lg"},a.createElement("div",{className:(0,l.Z)("row",m.mdxPageWrapper)},a.createElement("div",{className:(0,l.Z)("col",!v&&"col--8")},a.createElement("article",null,a.createElement(c.Z,null,a.createElement(n,null)))),!v&&n.toc.length>0&&a.createElement("div",{className:"col col--2"},a.createElement(s.Z,{toc:n.toc,minHeadingLevel:u.toc_min_heading_level,maxHeadingLevel:u.toc_max_heading_level}))))))}},7217:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(1163),l=t(9496),r=t(5924),i=t(1969);const o={tableOfContents:"tableOfContents_nTXA",docItemContainer:"docItemContainer_CddZ"},c="table-of-contents__link toc-highlight",s="table-of-contents__link--active";function m(e){let{className:n,...t}=e;return l.createElement("div",{className:(0,r.Z)(o.tableOfContents,"thin-scrollbar",n)},l.createElement(i.Z,(0,a.Z)({},t,{linkClassName:c,linkActiveClassName:s})))}},1969:(e,n,t)=>{t.d(n,{Z:()=>v});var a=t(1163),l=t(9496),r=t(2363);function i(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...l}=e;t>=0?n[t].children.push(l):a.push(l)})),a}function o(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=o({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}function c(e){const n=e.getBoundingClientRect();return n.top===n.bottom?c(e.parentNode):n}function s(e,n){let{anchorTopOffset:t}=n;const a=e.find((e=>c(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function m(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:n}}=(0,r.L)();return(0,l.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,l.useRef)(void 0),t=m();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:i}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let l=n;l<=t;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:i}),c=s(o,{anchorTopOffset:t.current}),m=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(l),e.classList.add(l),n.current=e):e.classList.remove(l)}(e,e===m)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,t])}function u(e){let{toc:n,className:t,linkClassName:a,isChild:r}=e;return n.length?l.createElement("ul",{className:r?void 0:t},n.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:t,linkClassName:a}))))):null}const f=l.memo(u);function v(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:m,maxHeadingLevel:u,...v}=e;const g=(0,r.L)(),p=m??g.tableOfContents.minHeadingLevel,h=u??g.tableOfContents.maxHeadingLevel,L=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>o({toc:i(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:p,maxHeadingLevel:h});return d((0,l.useMemo)((()=>{if(c&&s)return{linkClassName:c,linkActiveClassName:s,minHeadingLevel:p,maxHeadingLevel:h}}),[c,s,p,h])),l.createElement(f,(0,a.Z)({toc:L,className:t,linkClassName:c},v))}},4810:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(1163),l=t(9496),r=t(541),i=t(640),o=t(5468);const c={React:l,...l,ButtonExample:e=>l.createElement("button",(0,a.Z)({},e,{style:{backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer",...e.style}})),MetaframeStandaloneComponent:r.EC,MetapageGridLayoutFromMetapage:r.W2,MetapageGridLayoutFromDefinition:r.D5,VersionsMetapage:i.Eo,MetapageDefinitionV3:i.MetapageDefinitionV3,Metapage:i.AW,Admonition:o.Z}}}]);
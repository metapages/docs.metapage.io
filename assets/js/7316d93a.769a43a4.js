"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[25],{9613:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(9496);function A(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){A(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,A=function(e,t){if(null==e)return{};var a,n,A={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(A[a]=e[a]);return A}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(A[a]=e[a])}return A}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,A=e.mdxType,r=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=A,u=p["".concat(o,".").concat(m)]||p[m]||d[m]||r;return a?n.createElement(u,l(l({ref:t},s),{},{components:a})):n.createElement(u,l({ref:t},s))}));function u(e,t){var a=arguments,A=t&&t.mdxType;if("string"==typeof e||A){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:A,l[1]=i;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2814:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=a(1163),A=(a(9496),a(9613));const r={title:"Example- Add a new text editor metaframe",sidebar_position:1,slug:"/example-create-text-editor"},l=void 0,i={unversionedId:"Creating/example-create-text-editor",id:"Creating/example-create-text-editor",title:"Example- Add a new text editor metaframe",description:"This example walks through adding a javascript text editor. It demonstrates how quickly you can:",source:"@site/docs/Creating/example-create-text-editor.mdx",sourceDirName:"Creating",slug:"/example-create-text-editor",permalink:"/docs/example-create-text-editor",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Example- Add a new text editor metaframe",sidebar_position:1,slug:"/example-create-text-editor"},sidebar:"tutorialSidebar",previous:{title:"Create",permalink:"/docs/creating"},next:{title:"Create a metapage",permalink:"/docs/create-metapage"}},o={},c=[{value:"<strong>Step 1: create a javascript metaframe</strong>",id:"9e293cb5109a4757a1f12f5fe88375f9",level:2},{value:"<strong>Step 2: add the dependencies</strong>",id:"42301a9f5580454ca3fdcd9967c0fe45",level:2},{value:"<strong>Step 3: Add javascript</strong>",id:"d49b0f24a2dc4ce784c3d116b4d7aabb",level:2},{value:"<strong>Also create from copying (part of) and existing</strong>",id:"2606a8b9fc8345caaabed2f21d23467a",level:2}],s={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,A.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,A.kt)("p",null,"This example walks through adding a javascript text editor. It demonstrates how quickly you can:"),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},"add high-quality open-source code/tools/apps in a matter of minutes"),(0,A.kt)("li",{parentName:"ul"},"add the resulting metaframe to your own metapage projects"),(0,A.kt)("li",{parentName:"ul"},"connect this text editor and pipe the output elsewhere"),(0,A.kt)("li",{parentName:"ul"},"share the metaframe with anyone")),(0,A.kt)("p",null,"The example tool is a ",(0,A.kt)("a",{parentName:"p",href:"https://quilljs.com/"},"quilljs"),", a high quality, open-source text editor:"),(0,A.kt)("p",null,(0,A.kt)("a",{parentName:"p",href:"https://quilljs.com/"},"https://quilljs.com/")),(0,A.kt)("p",null,(0,A.kt)("img",{src:a(8524).Z,width:"2604",height:"1472"})),(0,A.kt)("p",null,"Let's add it as a metaframe"),(0,A.kt)("h2",{id:"9e293cb5109a4757a1f12f5fe88375f9"},(0,A.kt)("strong",{parentName:"h2"},"Step 1: create a javascript metaframe")),(0,A.kt)("p",null,"Click the ",(0,A.kt)("inlineCode",{parentName:"p"},"metaframe")," icon (the single box):"),(0,A.kt)("p",null,(0,A.kt)("img",{src:a(8891).Z,width:"544",height:"208"})),(0,A.kt)("p",null,"Click ",(0,A.kt)("inlineCode",{parentName:"p"},"+ Create")),(0,A.kt)("p",null,'Give a name, e.g. "Text Editor\u201d'),(0,A.kt)("p",null,"In the search field:"),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},"type ",(0,A.kt)("inlineCode",{parentName:"li"},"js"),' or search for "JS Code Runner"'),(0,A.kt)("li",{parentName:"ul"},"OR just enter the URL for the javascript metaframe: ",(0,A.kt)("a",{parentName:"li",href:"https://js.mtfm.io/"},"https://js.mtfm.io/"))),(0,A.kt)("p",null,"So you have something like:"),(0,A.kt)("p",null,(0,A.kt)("img",{src:a(2615).Z,width:"3244",height:"1632"})),(0,A.kt)("p",null,'And click "OK\u201d'),(0,A.kt)("h2",{id:"42301a9f5580454ca3fdcd9967c0fe45"},(0,A.kt)("strong",{parentName:"h2"},"Step 2: add the dependencies")),(0,A.kt)("p",null,"You'll see the metaframe editor view:"),(0,A.kt)("p",null,(0,A.kt)("img",{src:a(6326).Z,width:"3076",height:"1298"})),(0,A.kt)("p",null,"We need to add the ",(0,A.kt)("a",{parentName:"p",href:"https://quilljs.com/"},"quilljs")," dependencies. They make it very easy with their ",(0,A.kt)("a",{parentName:"p",href:"https://quilljs.com/docs/quickstart/"},"quickstart")),(0,A.kt)("p",null,"In the metaframe editor, click ",(0,A.kt)("inlineCode",{parentName:"p"},"Edit")),(0,A.kt)("p",null,(0,A.kt)("img",{src:a(2386).Z,width:"206",height:"96"})),(0,A.kt)("p",null,"Click ",(0,A.kt)("inlineCode",{parentName:"p"},"+ Modules")),(0,A.kt)("p",null,(0,A.kt)("img",{src:a(8254).Z,width:"1636",height:"444"})),(0,A.kt)("p",null,"In a different tab, navigate to the ",(0,A.kt)("a",{parentName:"p",href:"https://quilljs.com/docs/quickstart/"},"quickstart example")),(0,A.kt)("p",null,"We take the stylesheet and js module from the above example:"),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Include stylesheet --\x3e\n    <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">\n    \x3c!-- Include the Quill library --\x3e\n    <script src="https://cdn.quilljs.com/1.3.6/quill.js"><\/script>\n')),(0,A.kt)("p",null,"And paste them into the metaframe modules fields:"),(0,A.kt)("p",null,(0,A.kt)("img",{src:a(367).Z,width:"1592",height:"610"})),(0,A.kt)("p",null,"Click ",(0,A.kt)("inlineCode",{parentName:"p"},"Update")),(0,A.kt)("h2",{id:"d49b0f24a2dc4ce784c3d116b4d7aabb"},(0,A.kt)("strong",{parentName:"h2"},"Step 3: Add javascript")),(0,A.kt)("p",null,"Then click ",(0,A.kt)("inlineCode",{parentName:"p"},"Code")),(0,A.kt)("p",null,(0,A.kt)("img",{src:a(4174).Z,width:"1570",height:"416"})),(0,A.kt)("p",null,"Then paste the following:"),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-javascript"},"var quill = new Quill('#root', {\n    theme: 'snow'\n});\n")),(0,A.kt)("p",null,"You should immediately see the text editor to the right:"),(0,A.kt)("p",null,(0,A.kt)("img",{src:a(5919).Z,width:"3132",height:"1034"})),(0,A.kt)("p",null,"This is good, but there's no saving or loading the text"),(0,A.kt)("h2",{id:"2606a8b9fc8345caaabed2f21d23467a"},(0,A.kt)("strong",{parentName:"h2"},"Also create from copying (part of) and existing")),(0,A.kt)("p",null,"TODO"))}d.isMDXComponent=!0},2615:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1012356002-e53c95226f84b3bc1d69fc534f55f9a4.png"},5919:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1241193843-a6a4be8712928e6e767760e777b91b00.png"},8524:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1409946838-298e53d7fb9daa01cc04d120f982cf69.png"},2386:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},8254:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1466032803-677afb0f2fcbdb0363ff6ae9f63c2283.png"},4174:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/179641663-956a458a3f3610907ef633972a99ee5d.png"},8891:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2011404816-fcd9b2b72af3f60bc76bced84cda225c.png"},367:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/384366342-fd03d991b7b5ae2786622e0723748e8f.png"},6326:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/603376036-de525e1785ac9fb7edfec8c4948791e2.png"}}]);
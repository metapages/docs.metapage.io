"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[2555],{6105:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/a-new-way-to-publish.1ab01857-9bb5-80fb-b4bf-f58e086545e3-2d060fe7a037fc30d4185caf7b9deeef.png"},13811:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/a-new-way-to-publish.1ab01857-9bb5-803c-a73d-d2d9720bdc48-f860ada11de06e72e0175526207e2cdb.png"},23024:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/a-new-way-to-publish.1ab01857-9bb5-8071-9889-e0cfaa16cff7-f0183abc8bbbc6a1180b68fcb7b99586.png"},26108:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>b,frontMatter:()=>s,metadata:()=>n,toc:()=>h});var n=o(97802),i=o(74848),a=o(28453);const s={title:"A new way to publish interactive data and visualizations",sidebar_position:0,slug:"/a-new-way-to-publish",date:new Date("2025-02-21T00:00:00.000Z"),authors:["dion"],hide_table_of_contents:!0},r="Where and how do you publish your scientific workflows? {#1ab018579bb580cea543e27808e51344}",l={authorsImageUrls:[void 0]},h=[{value:"Problem: the content is static",id:"1ab018579bb580bbb52ee2d022207cee",level:2},{value:"Limitation: you cannot easily take all or a part of the notebook for your own workflows",id:"1ab018579bb580089277eaab89f9f7d3",level:2},{value:"Limitation: a single kernel, not always containerized",id:"1ab018579bb5804eb280ef88019b4d12",level:2},{value:"Limitation: you cannot easily collaborate real time",id:"1ab018579bb5803dbbefd761cabc34ea",level:2},{value:"Problem: the complexity of the layers introduces more places for bugs and failures",id:"1ab018579bb58007abd7de693c0ee709",level:2},{value:"Where to publish your code/data/visualization?",id:"1a7018579bb580fda0d0f3b85369e4e4",level:2},{value:"Publish in two clicks",id:"1ab018579bb580cc83c9c45761effee1",level:2},{value:"Embed anywhere",id:"1ab018579bb5802ca540c1804650788d",level:2},{value:"Permissions: collaborate with anyone",id:"1ab018579bb580a48296cd907bf9b829",level:2},{value:"Publish permanent versions forever",id:"1ab018579bb58062b01aee0560fb4d6e",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Deciding where how how to publish your data intensive scientific workflows can be difficult, with no clear solution."}),"\n","\n",(0,i.jsx)(t.p,{children:"The most common solution is to publish a jupyter notebook somewhere. There are a number of platforms that"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Take a jupyter notebook"}),"\n",(0,i.jsx)(t.li,{children:"Run it, get the outputs"}),"\n",(0,i.jsx)(t.li,{children:"Convert the notebook and outputs into a static web page"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["For example, ",(0,i.jsx)(t.a,{href:"https://next.jupyterbook.org/",children:"jupyterbook"})," (using the ",(0,i.jsx)(t.a,{href:"https://myst-nb.readthedocs.io/",children:"myst-nb"})," extension) compiles a jupyter notebook, with text and images, into a page for publishing. If you want to run the notebook yourself, you might be able to via ",(0,i.jsx)(t.a,{href:"https://mybinder.org/",children:"binder"})," or ",(0,i.jsx)(t.a,{href:"https://jupyter.org/hub",children:"jupyterhub"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"So, it looks like this is a solved problem? Actually, there are many limitations with these kinds of solutions, and they stem from starting with something not built for the web, and bolting on pieces to make it web-friendly. It works, but it ends up being complicated, and starts to show limitations."}),"\n",(0,i.jsx)(t.h1,{id:"1ab018579bb5801896ccd45461686ebc",children:"Problems and limitations"}),"\n",(0,i.jsx)(t.h2,{id:"1ab018579bb580bbb52ee2d022207cee",children:"Problem: the content is static"}),"\n",(0,i.jsxs)(t.p,{children:["The above platforms generate the content for a fixed, static website. There are some options to run the notebook on ",(0,i.jsx)(t.a,{href:"https://mybinder.org/",children:"binder"})," or ",(0,i.jsx)(t.a,{href:"https://jupyter.org/hub",children:"jupyterhub"}),", but those platforms are ephemeral, and greatly limit the kind of compute instances the notebooks run on. Any data generated is lost unless specific ad-hoc steps are taken to keep generated outputs. What if I didn\u2019t want to run the notebook on those platforms, for lots of reasons (not enough compute, storage, persistence, security), then I don\u2019t have other options."]}),"\n",(0,i.jsx)(t.p,{children:"While some notebook visualizations are dynamic in some sense, as you can interact with e.g. javascript plots, it becomes complicated or limited if you want to perform computation in the final published notebook."}),"\n",(0,i.jsx)(t.h2,{id:"1ab018579bb580089277eaab89f9f7d3",children:"Limitation: you cannot easily take all or a part of the notebook for your own workflows"}),"\n",(0,i.jsx)(t.p,{children:"Jupyter notebooks run on a single kernel, with all the visualization libraries built into the monolith kernel."}),"\n",(0,i.jsx)(t.p,{children:"If I wanted to swap out one visualization library for another (e.g. matplotlib for plotly.js) it\u2019s quite a bit of coding."}),"\n",(0,i.jsx)(t.p,{children:"There\u2019s no ability for users to publish components, and re-use those components in different notebooks. Each notebook is a monolith, unless you publish a separate library, which comes with it\u2019s own friction and cost."}),"\n",(0,i.jsx)(t.p,{children:"You don\u2019t just publish and share code and visualization snippets for others. Instead, you have to manually copy and paste and finagle any code from one notebook to another. And everyone has this same barrier."}),"\n",(0,i.jsx)(t.p,{children:"There is considerable friction in sharing and re-using notebooks and parts of notebooks."}),"\n",(0,i.jsx)(t.h2,{id:"1ab018579bb5804eb280ef88019b4d12",children:"Limitation: a single kernel, not always containerized"}),"\n",(0,i.jsxs)(t.p,{children:["Jupyter notebooks define their kernels, but without much automation to build those kernels. Take a look at ",(0,i.jsx)(t.a,{href:"https://colab.research.google.com/github/pablo-arantes/making-it-rain/blob/main/BioEmu.ipynb#scrollTo=Fk9bZi5MiD8h",children:"this example of a recent published model for predicting structure distributions of a protein"}),": each step requires the user input, and data is stored in Google Drive only. Interaction is via the notebook interface, so integrating the code into your own workflow is a manual process that every single person must repeat, if they want to use the model in their own workflows."]}),"\n",(0,i.jsx)(t.p,{children:"I would like to not have to ever manually install anything. Workflows should contain all instructions for how to build their required computation environments, and those instructions should be automated by default."}),"\n",(0,i.jsx)(t.h2,{id:"1ab018579bb5803dbbefd761cabc34ea",children:"Limitation: you cannot easily collaborate real time"}),"\n",(0,i.jsx)(t.p,{children:"The platforms for sharing notebooks are meant as publishing as a final step. Making it easier to publish is a good thing, but publishing is really only a step in a sequence: you might want to publish so that others might be able to use your work. This process might go back and forth, but since publishing is treated as a final step, the collaborative aspect, which is often the bulk of the work, is neglected. The final published product is not easily integrated into others workflows without significant human labour."}),"\n",(0,i.jsx)(t.p,{children:"Putting a notebook in a git repository is helpful, but not sufficient."}),"\n",(0,i.jsx)(t.h2,{id:"1ab018579bb58007abd7de693c0ee709",children:"Problem: the complexity of the layers introduces more places for bugs and failures"}),"\n",(0,i.jsxs)("div",{className:"custom-docunotion-row",children:[(0,i.jsxs)("div",{className:"custom-docunotion-row-cell",children:[(0,i.jsx)(t.p,{children:"Because the notebooks may not be properly containerized, it\u2019s more likely to get build errors. The public platforms to host jupyter notebooks are by necessity limited, and it\u2019s some work to run them yourself, so the surface area for bugs and incompatibilities is large."}),(0,i.jsx)("br",{})]}),(0,i.jsx)("div",{className:"custom-docunotion-row-cell",children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:o(6105).A+"",width:"1112",height:"952"})})})]}),"\n",(0,i.jsx)(t.h2,{id:"1a7018579bb580fda0d0f3b85369e4e4",children:"Where to publish your code/data/visualization?"}),"\n",(0,i.jsx)(t.p,{children:"So that other researchers can actually use them? Publishing your work doesn\u2019t automatically mean it can be found. There is no one place to search for code and data and workflows, so finding code snippets or visualization relevant for your problems is ad-hoc and a manual process."}),"\n",(0,i.jsx)(t.h1,{id:"1ab018579bb5800bb8d4cf75d38f8b9d",children:"Metapages: publish and embed complete scientific workflows, when you want, where you want, how you want"}),"\n",(0,i.jsx)(t.p,{children:"Metapages are web-first scientific workflows."}),"\n",(0,i.jsx)(t.h2,{id:"1ab018579bb580cc83c9c45761effee1",children:"Publish in two clicks"}),"\n",(0,i.jsxs)(t.p,{children:["You don\u2019t need a complicated separate build/process/embed publish step required of e.g. ",(0,i.jsx)(t.a,{href:"https://next.jupyterbook.org/",children:"jupyterbook"}),". You just click ",(0,i.jsx)(t.code,{children:"Share"})," \u2192 ",(0,i.jsx)(t.code,{children:"Public"})," and your workflow is immediately published for everyone:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:o(23024).A+"",width:"605",height:"334"})}),"\n",(0,i.jsx)(t.h2,{id:"1ab018579bb5802ca540c1804650788d",children:"Embed anywhere"}),"\n",(0,i.jsxs)(t.p,{children:["If you want to embed the workflow into your own notes or page or website or notion or anywhere, simply ",(0,i.jsx)(t.code,{children:"Share"})," \u2192 ",(0,i.jsx)(t.code,{children:"Embed"})," and paste the link or HTML snippet where you want. It can contain a link for navigating to the original"]}),"\n",(0,i.jsx)(t.p,{children:"Here is an interactive workflow embedded. You can access (then copy and edit) the entire workflow with the menu button on the left, without any installation steps:"}),"\n",(0,i.jsx)("iframe",{scrolling:"yes",allow:"fullscreen *; camera *; speaker *;",style:{width:"100%",height:"370px",overflow:"hidden"},src:"https://metapage.io/dion/87ae11673508447e883b598bf7da9c5d/embed-frame?frame=visualize+and+interact&minimal=true&mermaid=false&filesystem=false&hideOptions=false&hideBorders=false"}),"\n",(0,i.jsx)(t.h2,{id:"1ab018579bb580a48296cd907bf9b829",children:"Permissions: collaborate with anyone"}),"\n",(0,i.jsx)(t.p,{children:"In a few seconds, grant permissions to your collaborators, they can now read or edit your workflow, upload/download data, and real-time work with you"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:o(80548).A+"",width:"522",height:"238"})}),"\n",(0,i.jsx)(t.h2,{id:"1ab018579bb58062b01aee0560fb4d6e",children:"Publish permanent versions forever"}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsx)(t.p,{children:"This feature is in beta"})}),"\n",(0,i.jsxs)(t.p,{children:["When you want a permanent copy for publishing or archiving, simply create an archive, and we will store it ",(0,i.jsx)(t.a,{href:"/blog/deep-time-data-expiration",children:"forever"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:o(13811).A+"",width:"348",height:"469"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:o(81948).A+"",width:"185",height:"8"})}),"\n",(0,i.jsx)(t.p,{children:"This will generate a permanent URL, with a sha256 hash of the workflow, similar to how git creates a hash of each commit. This URL will work, even if the underlying workflow is unpublished or deleted."})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>r});var n=o(96540);const i={},a=n.createContext(i);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(a.Provider,{value:t},e.children)}},80548:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/a-new-way-to-publish.1ab01857-9bb5-80c9-9dfe-c3cc6128678c-56a7fe31878a4e687e1887f0836f2cb3.png"},81948:(e,t,o)=>{o.d(t,{A:()=>n});const n="data:image/png;base64,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"},97802:e=>{e.exports=JSON.parse('{"permalink":"/blog/a-new-way-to-publish","source":"@site/blog/a-new-way-to-publish.mdx","title":"A new way to publish interactive data and visualizations","description":"Deciding where how how to publish your data intensive scientific workflows can be difficult, with no clear solution.","date":"2025-02-21T00:00:00.000Z","tags":[],"hasTruncateMarker":true,"authors":[{"name":"Dion Whitehead","title":"Creator of Metapages","url":"https://github.com/metapages","email":"dion@metapage.io","socials":{"github":"https://github.com/dionjwa"},"imageURL":"https://github.com/dionjwa.png","key":"dion","page":null}],"frontMatter":{"title":"A new way to publish interactive data and visualizations","sidebar_position":0,"slug":"/a-new-way-to-publish","date":"2025-02-21T00:00:00.000Z","authors":["dion"],"hide_table_of_contents":true},"unlisted":false,"prevItem":{"title":"10 minutes to integrate a brand new bio AI model","permalink":"/blog/model-bioemu"},"nextItem":{"title":"Beyond Jupyter Notebooks","permalink":"/blog/compare-to-jupyter-notebooks"}}')}}]);
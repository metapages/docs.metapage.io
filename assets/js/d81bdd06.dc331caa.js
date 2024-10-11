"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[4171],{8658:(e,a,d)=>{d.r(a),d.d(a,{assets:()=>l,contentTitle:()=>t,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var n=d(1527),s=d(3703);const i={title:"Files- upload, download, saving",sidebar_position:1,slug:"/files"},t="Connect the metapage file system {#064efaefd6da4febb0f942bb3d8b016f}",c={id:"Guides/files",title:"Files- upload, download, saving",description:"064efaefd6da4febb0f942bb3d8b016f}",source:"@site/docs/Guides/files.mdx",sourceDirName:"Guides",slug:"/files",permalink:"/docs/files",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Files- upload, download, saving",sidebar_position:1,slug:"/files"},sidebar:"tutorialSidebar",previous:{title:"Embed a metapage in your React app",permalink:"/docs/embed-metapage"},next:{title:"Run docker containers",permalink:"/docs/example-metaframe-running-docker-container"}},l={},o=[{value:"Example",id:"d0298db640cd4396a55422cc19c9a08a",level:2},{value:"1. Clone an example metapage",id:"110adeb7edf94a5c9cda6fd4a6f89a07",level:2},{value:"2. Edit mode",id:"61bb434b9ce24277862458a37a352bb9",level:2},{value:"3. Add the Files frame",id:"63195c96450b429cae0bd79e2e6aa300",level:2},{value:"4. Connect the Files frame",id:"a904d2d21ab845a5a3e2b064790a1376",level:2},{value:"5. Download the images generated!",id:"b3e8a67635154de2b69101981761ce47",level:2},{value:"Congratulations",id:"a00caac2117f4a22a571cdc9c6b20ded",level:2},{value:"Extra Credit",id:"6742e0fb265c4a8b9e6c86ea35a20ab8",level:2},{value:"1. Copy the File System metaframe URL",id:"7236e78f839a475c9bb212e83e785218",level:3},{value:"2. Go to another metapage, and add the URL",id:"2d832138d86c45b69bb20811527213ca",level:3}];function r(e){const a={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.mermaid,{value:'flowchart LR\n  docker[docker]\n\tfs[files]\n\n\tdocker --\x3e fs\n  click fs "/docs/files"\n  style fs fill:#fff,stroke:#999999,stroke-width:2px,color:#000\n  click docker "/docs/example-metaframe-running-docker-container"'}),"\n",(0,n.jsx)(a.header,{children:(0,n.jsx)(a.h1,{id:"064efaefd6da4febb0f942bb3d8b016f",children:"Connect the metapage file system"})}),"\n",(0,n.jsx)(a.p,{children:"Each metapage has it\u2019s own connected file system, where you can"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"upload files"}),"\n",(0,n.jsx)(a.li,{children:"download files"}),"\n",(0,n.jsx)(a.li,{children:"save metaframe outputs as files"}),"\n",(0,n.jsx)(a.li,{children:"use files as metaframe inputs"}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"d0298db640cd4396a55422cc19c9a08a",children:"Example"}),"\n",(0,n.jsx)(a.p,{children:"The example below shows the \u201cfiles\u201d metaframe saving the generated plot output files."}),"\n",(0,n.jsx)("iframe",{scrolling:"no",allow:"fullscreen *; camera *; speaker *;",style:{width:"100%",height:"1309px",overflow:"hidden"},src:"https://app.metapage.io/dion/pyodide-jupyter-and-matplotlib-in-the-browser-with-saved-files-8ee0b934a019494588f280d67820d769"}),"\n",(0,n.jsx)(a.h1,{id:"053e47ad5f4e4814a7622559fb939175",children:"Walkthough: how to add and connect the files metaframe"}),"\n",(0,n.jsx)(a.p,{children:"Using the example metapage below, we will connect the file system, and download the generated plot images."}),"\n",(0,n.jsx)(a.hr,{}),"\n",(0,n.jsx)(a.admonition,{type:"note",children:(0,n.jsx)(a.p,{children:"Skip this step if you already have a metapage: go to \u201c2. Edit Mode\u201d"})}),"\n",(0,n.jsx)(a.h2,{id:"110adeb7edf94a5c9cda6fd4a6f89a07",children:"1. Clone an example metapage"}),"\n",(0,n.jsx)("iframe",{scrolling:"no",allow:"fullscreen *; camera *; speaker *;",style:{width:"100%",height:"1069px",overflow:"hidden"},src:"https://app.metapage.io/dion/pyodide-jupyter-and-matplotlib-in-the-browser-771ca08042c049dc9971a49772fc890b"}),"\n",(0,n.jsx)(a.p,{children:"Click Share and Clone :"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:d(568).Z+"",width:"2418",height:"322"})}),"\n",(0,n.jsx)(a.hr,{}),"\n",(0,n.jsx)(a.h2,{id:"61bb434b9ce24277862458a37a352bb9",children:"2. Edit mode"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:d(910).Z+"",width:"1196",height:"232"})}),"\n",(0,n.jsx)(a.hr,{}),"\n",(0,n.jsx)(a.h2,{id:"63195c96450b429cae0bd79e2e6aa300",children:"3. Add the Files frame"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:d(233).Z+"",width:"666",height:"506"})}),"\n",(0,n.jsx)(a.h2,{id:"a904d2d21ab845a5a3e2b064790a1376",children:"4. Connect the Files frame"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:d(6382).Z+"",width:"2092",height:"814"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:d(8014).Z+"",width:"2824",height:"962"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:d(804).Z+"",width:"908",height:"540"})}),"\n",(0,n.jsx)(a.hr,{}),"\n",(0,n.jsxs)(a.p,{children:["Make it bigger and go back into ",(0,n.jsx)(a.code,{children:"View"})," mode"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:d(6886).Z+"",width:"2044",height:"1160"})}),"\n",(0,n.jsx)(a.hr,{}),"\n",(0,n.jsx)(a.h2,{id:"b3e8a67635154de2b69101981761ce47",children:"5. Download the images generated!"}),"\n",(0,n.jsx)(a.p,{children:"Select the files and a menu appears, allowing you to delete, download, or send the files downstream."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:d(7521).Z+"",width:"1794",height:"718"})}),"\n",(0,n.jsx)(a.h2,{id:"a00caac2117f4a22a571cdc9c6b20ded",children:"Congratulations"}),"\n",(0,n.jsx)(a.p,{children:"Now you can upload, download, and save files in your workflows."}),"\n",(0,n.jsx)(a.h2,{id:"6742e0fb265c4a8b9e6c86ea35a20ab8",children:"Extra Credit"}),"\n",(0,n.jsxs)(a.p,{children:["File system metaframes from one metapage can be used in ",(0,n.jsx)(a.em,{children:"another"})," metapage"]}),"\n",(0,n.jsx)(a.mermaid,{value:"flowchart LR\n\tsubgraph m1 [metapage 1]\n\t\tfiles\n\tend\n\tsubgraph m2 [metapage 2]\n\t\tframe\n\tend\n\tfiles --\x3e |files used as input by| frame"}),"\n",(0,n.jsx)(a.p,{children:"This is one way to connect metapage inputs and outputs to other metapages."}),"\n",(0,n.jsx)(a.h3,{id:"7236e78f839a475c9bb212e83e785218",children:"1. Copy the File System metaframe URL"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:d(454).Z+"",width:"2080",height:"712"})}),"\n",(0,n.jsx)(a.h3,{id:"2d832138d86c45b69bb20811527213ca",children:"2. Go to another metapage, and add the URL"}),"\n",(0,n.jsx)(a.p,{children:"Paste the URL from above into the dialog."}),"\n",(0,n.jsxs)("div",{className:"custom-docunotion-row",children:[(0,n.jsx)("div",{className:"custom-docunotion-row-cell",children:(0,n.jsx)("p",{children:(0,n.jsx)("img",{src:"./files.647d84e5-9a2c-4b67-aff3-aa795fb32e54.png"})})}),(0,n.jsx)("div",{className:"custom-docunotion-row-cell",children:(0,n.jsx)("p",{children:(0,n.jsx)("img",{src:"./files.3d03d8ec-ba69-4719-b4f5-b156c1a99c70.png"})})})]}),"\n",(0,n.jsx)(a.p,{children:"Now files from one workflow/metapage can be used by other metapages, allowing you to easily connect different workflows by the files produced."})]})}function f(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}},568:(e,a,d)=>{d.d(a,{Z:()=>n});const n=d.p+"assets/images/files.1063cadb-4f2b-4819-b3a1-58d541fd40eb-f8b434abd72374402bdc0e2a3ae2b246.png"},804:(e,a,d)=>{d.d(a,{Z:()=>n});const n=d.p+"assets/images/files.3b4e6bb2-96a8-4669-b2bc-2f8612cb29a4-5b9bde0176eba3f07baa75f56569ae97.png"},8014:(e,a,d)=>{d.d(a,{Z:()=>n});const n=d.p+"assets/images/files.6d03ce03-b00d-46b0-bf1a-e6fe0d4c8c82-ada399b59120bf283fbac05e536e634a.png"},910:(e,a,d)=>{d.d(a,{Z:()=>n});const n=d.p+"assets/images/files.7d97f893-30ef-4d4a-a3c3-c55b4b16173f-6e82ed0ceffdc3518df4161c110d352c.png"},454:(e,a,d)=>{d.d(a,{Z:()=>n});const n=d.p+"assets/images/files.b548fa5d-4dfb-4338-8551-2605095c4df7-563ca2b91d6472d71dd83bd53420fb8a.png"},6382:(e,a,d)=>{d.d(a,{Z:()=>n});const n=d.p+"assets/images/files.bf22c15b-8663-482d-a04e-75a566c7050e-fbc29f53fc55f19660677f31c7b9c66b.png"},6886:(e,a,d)=>{d.d(a,{Z:()=>n});const n=d.p+"assets/images/files.da703ee0-439f-4932-94f0-d6e562524911-bb8378cafe1b1963fd1e53d5bd5243ae.png"},7521:(e,a,d)=>{d.d(a,{Z:()=>n});const n=d.p+"assets/images/files.ef59440c-6241-4e55-b4de-6488ab0df203-8b2c5fa9ff3265d0b522f617da837213.png"},233:(e,a,d)=>{d.d(a,{Z:()=>n});const n=d.p+"assets/images/files.f2053788-a14c-43b2-b1e2-c05f7b7258e2-65f100fdb206f5aa0b2bedc604ce51f7.png"},3703:(e,a,d)=>{d.d(a,{Z:()=>c,a:()=>t});var n=d(959);const s={},i=n.createContext(s);function t(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);
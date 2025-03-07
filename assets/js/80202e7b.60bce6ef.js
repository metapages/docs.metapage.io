"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[89],{3734:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/connect-inputs-outputs.1a601857-9bb5-80b6-bffc-c2cfef9566b5-aba497c671920d25629c5fb758e755e5.gif"},10543:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"Concepts/connect-inputs-outputs","title":"Sending Data Between Metaframes","description":"Overview","source":"@site/docs/Concepts/connect-inputs-outputs.mdx","sourceDirName":"Concepts","slug":"/connect-inputs-outputs","permalink":"/docs/connect-inputs-outputs","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"title":"Sending Data Between Metaframes","sidebar_position":0,"slug":"/connect-inputs-outputs"},"sidebar":"tutorialSidebar","previous":{"title":"Tutorial 2- Run Python in a Container","permalink":"/docs/python-container-walkthrough"},"next":{"title":"Embed metapages anywhere","permalink":"/docs/embed-anywhere"}}');var i=n(74848),d=n(28453);const r={title:"Sending Data Between Metaframes",sidebar_position:0,slug:"/connect-inputs-outputs"},c=void 0,a={},l=[{value:"Overview",id:"e9a724c1b9104c42ad0dae86423d1a0c",level:2},{value:"Creating Data Connections",id:"4b9fcb3253e54a9483d73475d3badfd3",level:2},{value:"What Data Can Be Transferred?",id:"766a971b66c345cab6e2f68e7259efa5",level:2},{value:"Container Metaframes",id:"20d7f0f1f3c44fd2bd516b75cd572b48",level:3},{value:"JavaScript Metaframes",id:"03f45f6a82fe4b209487c5acc4c40a15",level:3},{value:"Output Filtering",id:"cd0a5dd390bd412fb38ef803f903a1dc",level:2},{value:"Input Mapping",id:"1021bcef7682448b95476003138586f9",level:2},{value:"Examples",id:"98e2eebd780c44648234f9376ebc83a5",level:2},{value:"Working with Inputs and Outputs in Different Metaframes",id:"889feb7472be4d8da730f1a75258c42f",level:2},{value:"Container (Docker) Metaframes",id:"70e4f8d0bacc46e986c4d98532a8a7bd",level:3},{value:"JavaScript Metaframes",id:"8688271140e94fc0b1726028dbbc3a22",level:3},{value:"Python (Pyodide) Metaframes",id:"a914f8732a8e4708beaea0acbb896176",level:3}];function o(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"e9a724c1b9104c42ad0dae86423d1a0c",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"One of the core functions of Metapages is the transfer of data between metaframes. This connectivity is what enables you to build powerful workflows and data processing pipelines. Data flow can be configured through:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The metapage's Data Flow tab"}),"\n",(0,i.jsx)(t.li,{children:"The metaframe's connect button"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(3734).A+"",width:"640",height:"320"})}),"\n",(0,i.jsx)(t.h2,{id:"4b9fcb3253e54a9483d73475d3badfd3",children:"Creating Data Connections"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(80740).A+"",width:"480",height:"366"})}),"\n",(0,i.jsx)(t.p,{children:"A data connection is specified using up to two parameters:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Source name or glob"}),": Defines which outputs to send from the source metaframe to the target metaframe. If you want to send a single file, this would be a string including the filename or file path if the file is located inside a folder. For sending multiple files, you can specify a glob with wildcards to match the files you want to send. If this field is left blank, all files routed to the outputs will be sent."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Target file or folder"}),": Allows you to change the name of the file (in the case only one file is sent) and/or specify the destination path of the sent file(s) in the target metaframe."]}),"\n"]}),"\n",(0,i.jsxs)("div",{className:"custom-docunotion-row",children:[(0,i.jsx)("div",{className:"custom-docunotion-row-cell",children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(17710).A+"",width:"1468",height:"512"})})}),(0,i.jsx)("div",{className:"custom-docunotion-row-cell",children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(70003).A+"",width:"480",height:"336"})})})]}),"\n",(0,i.jsx)(t.mermaid,{value:'flowchart LR\n    subgraph source [Source Metaframe]\n        a["output files"]\n    end\n    subgraph target [Target Metaframe]\n        b["input files"]\n    end\n\n    a --\x3e|"Source glob \u2192 Target path"| b\n'}),"\n",(0,i.jsx)(t.h2,{id:"766a971b66c345cab6e2f68e7259efa5",children:"What Data Can Be Transferred?"}),"\n",(0,i.jsx)(t.h3,{id:"20d7f0f1f3c44fd2bd516b75cd572b48",children:"Container Metaframes"}),"\n",(0,i.jsxs)(t.p,{children:["For containers, data is copied to cloud storage (by default), and a ",(0,i.jsx)(t.strong,{children:"reference"})," is sent downstream to avoid unnecessary large file uploads/downloads. (and subsequently downloaded by the worker)."]}),"\n",(0,i.jsx)(t.h3,{id:"03f45f6a82fe4b209487c5acc4c40a15",children:"JavaScript Metaframes"}),"\n",(0,i.jsx)(t.p,{children:"JavaScript frames can send various data types directly:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/File",children:"Files"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Blob",children:"Blobs"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Typed_arrays",children:"TypedArrays"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"These objects arrive fully typed at the destination metaframe."}),"\n",(0,i.jsx)(t.h2,{id:"cd0a5dd390bd412fb38ef803f903a1dc",children:"Output Filtering"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"Source name or glob"})," parameter lets you control which files are sent using ",(0,i.jsx)(t.a,{href:"https://code.visualstudio.com/docs/editor/glob-patterns",children:"glob patterns"}),":"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Pattern"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Example"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"**"})," or empty"]}),(0,i.jsx)(t.td,{children:"All files"}),(0,i.jsx)(t.td,{children:"Matches everything"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"*.json"})}),(0,i.jsx)(t.td,{children:"Files with specific extension"}),(0,i.jsxs)(t.td,{children:["Matches ",(0,i.jsx)(t.code,{children:"data.json"})," but not ",(0,i.jsx)(t.code,{children:"data/info.json"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"**/*.json"})}),(0,i.jsx)(t.td,{children:"Files with specific extension in any folder"}),(0,i.jsxs)(t.td,{children:["Matches both ",(0,i.jsx)(t.code,{children:"data.json"})," and ",(0,i.jsx)(t.code,{children:"data/info.json"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"data/*"})}),(0,i.jsx)(t.td,{children:"Files in a specific folder"}),(0,i.jsxs)(t.td,{children:["Matches ",(0,i.jsx)(t.code,{children:"data/file.txt"})," but not ",(0,i.jsx)(t.code,{children:"data/subfolder/file.txt"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"**/report*"})}),(0,i.jsx)(t.td,{children:"Files with specific name pattern in any folder"}),(0,i.jsxs)(t.td,{children:["Matches ",(0,i.jsx)(t.code,{children:"report.csv"}),", ",(0,i.jsx)(t.code,{children:"reports.xlsx"}),", and ",(0,i.jsx)(t.code,{children:"data/report_final.pdf"})]})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"The table below illustrates the necessary output filter for passing certain files:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Output name"}),(0,i.jsx)(t.th,{children:"Output filter"}),(0,i.jsx)(t.th,{children:"Passed downstream?"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"any output"}),(0,i.jsx)(t.td,{children:"(empty string)"}),(0,i.jsx)(t.td,{children:"\u2705"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"any output"}),(0,i.jsx)(t.td,{children:"**"}),(0,i.jsx)(t.td,{children:"\u2705"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"foo.bar"})}),(0,i.jsx)(t.td,{children:"*.bar"}),(0,i.jsx)(t.td,{children:"\u2705"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"dir1/foo.bar"})}),(0,i.jsx)(t.td,{children:"*.bar"}),(0,i.jsx)(t.td,{children:"\u274c"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"dir1/foo.bar"})}),(0,i.jsx)(t.td,{children:"**/*.bar"}),(0,i.jsx)(t.td,{children:"\u2705"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"dir1/foo.bar"})}),(0,i.jsxs)(t.td,{children:["*",(0,i.jsx)(t.em,{children:"/foo"})]}),(0,i.jsx)(t.td,{children:"\u2705"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"1021bcef7682448b95476003138586f9",children:"Input Mapping"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"Target file or folder"})," parameter determines how files appear in the target metaframe:"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Mapping Type"}),(0,i.jsx)(t.th,{children:"Definition"}),(0,i.jsx)(t.th,{children:"Result"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Same Path"})," (empty)"]}),(0,i.jsx)(t.td,{children:"Leave target mapping empty"}),(0,i.jsx)(t.td,{children:"Files keep the same name and path structure"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Directory Prefix"})," (ends with ",(0,i.jsx)(t.code,{children:"/"}),")"]}),(0,i.jsx)(t.td,{children:"Specify a folder name with trailing slash"}),(0,i.jsx)(t.td,{children:"Files are placed in that folder in the target"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"File Rename"})," (doesn't end with ",(0,i.jsx)(t.code,{children:"/"}),")"]}),(0,i.jsx)(t.td,{children:"Specify a filename"}),(0,i.jsx)(t.td,{children:"Source files are renamed to this single name"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"The input part of the connection can be:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Option"}),(0,i.jsx)(t.th,{children:"Behavior"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Empty"})}),(0,i.jsx)(t.td,{children:"If empty, the filtered outputs are passed as inputs without modification to the path or name"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Directory name"})," (ends with ",(0,i.jsx)(t.code,{children:"/"}),")"]}),(0,i.jsx)(t.td,{children:"The directory name will be prepended to the full path of the input(s)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"File name"})," (does ",(0,i.jsx)(t.strong,{children:"not"})," end with ",(0,i.jsx)(t.code,{children:"/"}),")"]}),(0,i.jsx)(t.td,{children:"Upstream output(s) are renamed as the input file name. If multiple outputs match, then only one will be the input"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"98e2eebd780c44648234f9376ebc83a5",children:"Examples"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Connection"}),(0,i.jsx)(t.th,{children:"Source Output"}),(0,i.jsx)(t.th,{children:"Target Input"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"*.json \u2192 data/"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"/outputs/results.json"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"/inputs/data/results.json"})}),(0,i.jsx)(t.td,{children:"Send all JSON files to a folder"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"report.csv \u2192 summary.csv"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"/outputs/report.csv"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"/inputs/summary.csv"})}),(0,i.jsx)(t.td,{children:"Rename a specific file"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"** \u2192"})," or empty"]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"/outputs/data/file.txt"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"/inputs/data/file.txt"})}),(0,i.jsx)(t.td,{children:"Send all files without changes"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"**/*.csv \u2192 reports/"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"/outputs/june/sales.csv"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"/inputs/reports/june/sales.csv"})}),(0,i.jsx)(t.td,{children:"Send nested CSV files to a folder"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"889feb7472be4d8da730f1a75258c42f",children:"Working with Inputs and Outputs in Different Metaframes"}),"\n",(0,i.jsx)(t.p,{children:"Each type of metaframe has its own way of handling inputs and outputs. This section provides implementation details for developers creating or working with specific metaframe types."}),"\n",(0,i.jsx)(t.h3,{id:"70e4f8d0bacc46e986c4d98532a8a7bd",children:"Container (Docker) Metaframes"}),"\n",(0,i.jsx)(t.p,{children:"In container metaframes, inputs and outputs are accessible as files in specific directories:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Inputs are available in the ",(0,i.jsx)(t.code,{children:"/inputs/"})," directory"]}),"\n",(0,i.jsxs)(t.li,{children:["Outputs should be written to the ",(0,i.jsx)(t.code,{children:"/outputs/"})," directory"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["For example, if a container metaframe receives a file called ",(0,i.jsx)(t.code,{children:"data.json"}),", it would be accessible at ",(0,i.jsx)(t.code,{children:"/inputs/data.json"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"8688271140e94fc0b1726028dbbc3a22",children:"JavaScript Metaframes"}),"\n",(0,i.jsx)(t.p,{children:"JavaScript metaframes handle inputs and outputs through JavaScript functions:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'// Handling inputs\nexport function onInputs(inputs) {\n  // inputs is a plain object with keys and values\n  console.log(inputs.mydata);\n}\n\n// Sending outputs\nsetOutput("outputname", 42);  // Send a single output\nsetOutputs({                  // Send multiple outputs\n  result: true,\n  data: [1, 2, 3]\n});\n\n'})}),"\n",(0,i.jsx)(t.p,{children:"Output values can be:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Strings"}),"\n",(0,i.jsx)(t.li,{children:"JSON"}),"\n",(0,i.jsx)(t.li,{children:"Objects"}),"\n",(0,i.jsx)(t.li,{children:"Arrays"}),"\n",(0,i.jsx)(t.li,{children:"Numbers"}),"\n",(0,i.jsx)(t.li,{children:"ArrayBuffers"}),"\n",(0,i.jsx)(t.li,{children:"Typed arrays"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"You can define expected inputs and outputs in the Settings panel, which makes it easier to connect metaframes in the metapage editor."}),"\n",(0,i.jsx)(t.h3,{id:"a914f8732a8e4708beaea0acbb896176",children:"Python (Pyodide) Metaframes"}),"\n",(0,i.jsxs)(t.p,{children:["See ",(0,i.jsx)(t.a,{href:"/docs/1a601857-9bb5-8036-bc5e-cb1478e4afd6",children:"pyodide documentation"})]})]})}function h(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},17710:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/connect-inputs-outputs.1a601857-9bb5-8099-85ca-dc8d24522995-571e21308d7700c1c7563a2ad51198e8.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var s=n(96540);const i={},d=s.createContext(i);function r(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(d.Provider,{value:t},e.children)}},70003:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/connect-inputs-outputs.1a601857-9bb5-8099-a9af-c8539ac7d831-71ac1f502ee9b4dac87347f820d58949.gif"},80740:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/connect-inputs-outputs.1a601857-9bb5-8021-b5eb-c2dafb080c4a-5a81e6537157a1489401dcd65d46f145.gif"}}]);
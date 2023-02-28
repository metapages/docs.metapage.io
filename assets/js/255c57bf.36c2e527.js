"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[8804],{49613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,f=c["".concat(m,".").concat(d)]||c[d]||u[d]||o;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},45367:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(37579),r=(n(59496),n(49613));const o={title:"Embed a metaframe into your own site"},i="Embed a metaframe on your site",l={unversionedId:"Integrating/embed-metaframe",id:"Integrating/embed-metaframe",title:"Embed a metaframe into your own site",description:"(Check npm link)",source:"@site/docs/05-Integrating/01-embed-metaframe.md",sourceDirName:"05-Integrating",slug:"/Integrating/embed-metaframe",permalink:"/docs/Integrating/embed-metaframe",draft:!1,editUrl:"https://github.com/metapages/docs.metapage.io/tree/main/packages/create-docusaurus/templates/shared/docs/05-Integrating/01-embed-metaframe.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Embed a metaframe into your own site"},sidebar:"tutorialSidebar",previous:{title:"Integrating",permalink:"/docs/Integrating/"},next:{title:"Embed a metapage on your site",permalink:"/docs/Integrating/embed-metapage"}},m={},p=[{value:"Example: JSON editor as a react component",id:"example-json-editor-as-a-react-component",level:2},{value:"Use case",id:"use-case",level:2},{value:"Advantages",id:"advantages",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"embed-a-metaframe-on-your-site"},"Embed a metaframe on your site"),(0,r.kt)("mermaid",{value:"flowchart TD\n    subgraph test [your-site.com]\n        direction LR\n        style js fill:#fff,stroke:#fff,stroke-width:2px\n        style metaframe fill:#fff,stroke:#32AEE4,stroke-width:2px\n        js[your javascript] <--\x3e |messages| metaframe[Single Metaframe]\n    end"}),(0,r.kt)("p",null,"(Check npm link)"),(0,r.kt)("p",null,"Integrate single or multiple npm packages into your website as an alternative to typical ",(0,r.kt)("inlineCode",{parentName:"p"},"npm/yarn install")," etc."),(0,r.kt)("p",null,"Integrate any ",(0,r.kt)("a",{parentName:"p",href:"https://npm.com"},"npm"),"/javascript module"),(0,r.kt)("p",null,"You see a metaframe with functionality you would like for your own site. With a few lines of code, you can integrate any of the large library of"),(0,r.kt)("p",null,"Example:"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Implement example")),(0,r.kt)("h2",{id:"example-json-editor-as-a-react-component"},"Example: JSON editor as a react component"),(0,r.kt)("p",null,"This is a minimal example in react, embedding the monaco (link) code editor configured for JSON."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { useCallback } from "react";\nimport { MetaframeStandaloneComponent } from "@metapages/metapage-embed-react";\nimport { MetaframeInputMap } from "@metapages/metapage";\n\nexport const EditorJson: React.FC<{\n  content: string;\n  onChange: (s: string) => void;\n}> = ({ content, onChange }) => {\n  const onOutputs = useCallback(\n    (outputs: MetaframeInputMap) => {\n      if (outputs["value"] === undefined || outputs["value"] === null) {\n        return;\n      }\n      onChange(outputs["value"]);\n    },\n    [onChange]\n  );\n\n  return (\n    <div>\n      <MetaframeStandaloneComponent\n        url="https://editor.mtfm.io/#?options=eyJhdXRvc2VuZCI6dHJ1ZSwiaGlkZW1lbnVpZmlmcmFtZSI6dHJ1ZSwibW9kZSI6Impzb24iLCJ0aGVtZSI6ImxpZ2h0In0="\n        inputs={{ value: content }}\n        onOutputs={onOutputs}\n      />\n    </div>\n  );\n};\n')),(0,r.kt)("h2",{id:"use-case"},"Use case"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"quickly integrate complex code into your main app"),(0,r.kt)("li",{parentName:"ul"},"quickly experiment with different modules without requiring installation or rebuilding",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"some javascript modules, e.g. monaco, require custom complex build step (depending on your builder, webpack, vite, etc)")))),(0,r.kt)("h2",{id:"advantages"},"Advantages"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the assets are not bundled with the main app, reducing build times and increasing download speed"),(0,r.kt)("li",{parentName:"ul"},"the editor can be easily configured via the URL"),(0,r.kt)("li",{parentName:"ul"},"the editor can easily be replaced without installing any additional modules")))}u.isMDXComponent=!0}}]);
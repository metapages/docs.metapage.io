"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[8549],{86593:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>J,contentTitle:()=>i,default:()=>U,frontMatter:()=>o,metadata:()=>l,toc:()=>s});const l=JSON.parse('{"id":"Libraries,-Tools,-APIs/metapage-json","title":"metapage.json","description":"The metapage configuration is used to define the layout and the data flow of the metapage. The configuration can also be encoded in the URL, allowing URLs to define complex applications.","source":"@site/docs/Libraries,-Tools,-APIs/metapage-json.mdx","sourceDirName":"Libraries,-Tools,-APIs","slug":"/metapage-json","permalink":"/docs/metapage-json","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"metapage.json","sidebar_position":2,"slug":"/metapage-json"},"sidebar":"tutorialSidebar","previous":{"title":"Browser iframe javascript libraries","permalink":"/docs/npm-modules"},"next":{"title":"NPM modules","permalink":"/docs/npm-metapage"}}');var a=t(74848),M=t(28453);const o={title:"metapage.json",sidebar_position:2,slug:"/metapage-json"},i=void 0,J={},s=[];function T(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,M.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["The metapage configuration is used to define the layout and the data flow of the metapage. The configuration can also be ",(0,a.jsx)(n.a,{href:"https://app.metapages.org/",children:"encoded in the URL"}),", allowing ",(0,a.jsx)(n.a,{href:"https://app.metapages.org/",children:"URLs to define complex applications"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"const metapageDefinition = {\n    ...// see below for structure\n}\nconst metapage = Metapage.from(metapageDefinition);\n"})}),"\n",(0,a.jsx)(n.p,{children:"The structure of metapage configuration is a simple JSON strucure:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/metapages/metapage/blob/398f097815d43401a21691204aa253bc47fb9906/app/libs/src/metapage/v0_4/metapage.ts#L25",children:"Git Source"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:'// Example metapage JSON\nvar metapageDefinition = {\n    "version": "1",\n    // The "metaframes" field is a simple key value object containing the metaframes\n    // where the metaframes are URLs and the inputs\n    "metaframes": {\n        // name of the metaframe, unique to the metapage\n        "random-data-generator": {\n            // url pointing to the metaframe content\n            // metaframes run a little bit of javascript allowing connected data pipes\n            "url": "https://random.mtfm.io/#?distribution=eyJkaXN0cmlidXRpb24iOiJzaW4iLCJmcmVxdWVuY3kiOjMwLCJvcHRpb25zIjp7ImluY3JlbWVudCI6MC4wMX0sInNob3dPdXRwdXQiOmZhbHNlfQ==&hidemenu=true"\n        },\n        // name of the metaframe, unique to the metapage\n        "graph-dynamic": {\n            // url pointing to the metaframe content\n            "url": "https://js.mtfm.io/#https://js.mtfm.io/editor/#?js=bGV0JTIwcGxvdCUyMCUzRCUyMGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJTIyZGl2JTIyKSUwQXBsb3QuaWQlMjAlM0QlMjAlMjJwbG90JTIyJTBBcm9vdC5hcHBlbmRDaGlsZChwbG90KSUzQiUwQSUwQXZhciUyMGNyZWF0ZVBsb3QlMjAlM0QlMjAoKSUyMCUzRCUzRSUyMCU3QiUwQSUyMCUyMCUyMCUyMGNvbnN0JTIwd2lkdGglMjAlM0QlMjByb290LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoJTNCJTBBJTA5Y29uc3QlMjBoZWlnaHQlMjAlM0QlMjByb290LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCUzQiUwQSUyMCUyMCUyMCUyMHZhciUyMGxheW91dCUyMCUzRCUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHdpZHRoJTJDJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwaGVpZ2h0JTJDJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwdGl0bGUlM0FmYWxzZSUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMGF1dG9zaXplJTNBJTIwZmFsc2UlMkMlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBtYXJnaW4lM0ElMjAlN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBsJTNBJTIwNTAlMkMlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjByJTNBJTIwNTAlMkMlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBiJTNBJTIwNTAlMkMlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjB0JTNBJTIwNTAlMkMlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBwYWQlM0ElMjA0JTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTdEJTBBJTIwJTIwJTIwJTIwJTdEJTNCJTBBJTBBJTIwJTIwJTIwJTIwUGxvdGx5Lm5ld1Bsb3QoJ3Bsb3QnJTJDJTVCJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIweSUzQSU1QiU1RCUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHR5cGUlM0EnbGluZSclMEElMjAlMjAlMjAlMjAlN0QlNUQlMkMlMjBsYXlvdXQlMkMlMjAlN0JkaXNwbGF5TW9kZUJhciUzQSUyMGZhbHNlJTdEKSUzQiUwQSU3RCUwQSUwQWNyZWF0ZVBsb3QoKSUzQiUwQSUwQXZhciUyMGNudCUyMCUzRCUyMDAlM0IlMEFleHBvcnQlMjBjb25zdCUyMG9uSW5wdXRzJTIwJTNEJTIwKGlucHV0cyklMjAlM0QlM0UlMjAlN0IlMEElMjAlMjAlMjAlMjB2YXIlMjBrZXklMjAlM0QlMjBPYmplY3Qua2V5cyhpbnB1dHMpJTVCMCU1RCUzQiUwQSUyMCUyMCUyMCUyMGlmJTIwKGtleSklMjAlN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjB2YXIlMjB2YWx1ZSUyMCUzRCUyMGlucHV0cyU1QmtleSU1RCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMFBsb3RseS5leHRlbmRUcmFjZXMoJ3Bsb3QnJTJDJTdCJTIweSUzQSU1QiU1QnZhbHVlJTVEJTVEJTdEJTJDJTIwJTVCMCU1RCklM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBjbnQlMkIlMkIlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBpZihjbnQlMjAlM0UlMjA1MDApJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwUGxvdGx5LnJlbGF5b3V0KCdwbG90JyUyQyU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHhheGlzJTNBJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwcmFuZ2UlM0ElMjAlNUJjbnQtNTAwJTJDY250JTVEJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTdEJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTdEKSUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCU3RCUwQSUyMCUyMCUyMCUyMCU3RCUwQSU3RCUwQSUwQWV4cG9ydCUyMGNvbnN0JTIwb25SZXNpemUlMjAlM0QlMjAoKSUyMCUzRCUzRSUyMCU3QiUwQSUyMCUyMCUyMCUyMGNyZWF0ZVBsb3QoKSUzQiUwQSU3RCUwQQ%3D%3D&modules=JTVCJTIyaHR0cHMlM0ElMkYlMkZjZG4ucGxvdC5seSUyRnBsb3RseS0yLjE0LjAubWluLmpzJTIyJTVE",\n            // array of metaframe inputs, defining which output from which metaframe\n            // is then piped into the input for this metaframe\n            // The metaframe gets the data via postMessage updates\n            "inputs": [\n                {\n                    "metaframe": "random-data-generator",\n                    "source": "v",\n                    "target": "v"\n                }\n            ]\n        },\n        // name of the metaframe, unique to the metapage\n        "editor": {\n            // url pointing to the metaframe content\n            "url": "https://editor.mtfm.io/",\n            // array of metaframe inputs, defining which output from which metaframe\n            // is then piped into the input for this metaframe\n            // The metaframe gets the data via postMessage updates\n            "inputs": [\n                {\n                    "metaframe": "random-data-generator",\n                    "source": "v",\n                    "target": "value"\n                }\n            ]\n        }\n    },\n    // The "meta" field contains metadata: name, author, layout, and any other data used for display\n    // that does not affect execution of the data flow.\n    "meta": {\n        "layouts": {\n            "react-grid-layout": {\n                "docs": "https://www.npmjs.com/package/react-grid-layout",\n                "props": {\n                    "cols": 12,\n                    "margin": [\n                        10,\n                        20\n                    ],\n                    "rowHeight": 200,\n                    "containerPadding": [\n                        5,\n                        5\n                    ]\n                },\n                "layout": [\n                    {\n                        "i": "random-data-generator",\n                        "x": 0,\n                        "y": 0,\n                        "w": 6,\n                        "h": 3\n                    },\n                    {\n                        "i": "graph-dynamic",\n                        "x": 6,\n                        "y": 0,\n                        "w": 6,\n                        "h": 4\n                    },\n                    {\n                        "i": "editor",\n                        "x": 0,\n                        "y": 1,\n                        "w": 6,\n                        "h": 2\n                    }\n                ]\n            }\n        }\n    }\n};\n'})})]})}function U(e={}){const{wrapper:n}={...(0,M.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(T,{...e})}):T(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var l=t(96540);const a={},M=l.createContext(a);function o(e){const n=l.useContext(M);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),l.createElement(M.Provider,{value:n},e.children)}}}]);
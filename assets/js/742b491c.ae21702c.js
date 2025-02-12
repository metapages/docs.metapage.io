"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[6467],{37202:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"Getting-Started/python-pyodide-walkthrough","title":"Running Python with Pyodide","description":"Pyodide is a python package that allows you to run lightweight python code directly in the browser. This makes it perfect for simple applications where we want to run python code in a metaframe without having to use a docker container. In this walkthrough we will use python with pyodide to generate a plot and display the image it generates.","source":"@site/docs/Getting-Started/python-pyodide-walkthrough.mdx","sourceDirName":"Getting-Started","slug":"/python-pyodide-walkthrough","permalink":"/docs/python-pyodide-walkthrough","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Running Python with Pyodide","sidebar_position":2,"slug":"/python-pyodide-walkthrough","authors":"karl"},"sidebar":"tutorialSidebar","previous":{"title":"Creating your first metapage","permalink":"/docs/your-first-metapage"},"next":{"title":"Working with docker metaframes","permalink":"/docs/working-with-docker-metaframes"}}');var o=n(74848),i=n(28453);const s={title:"Running Python with Pyodide",sidebar_position:2,slug:"/python-pyodide-walkthrough",authors:"karl"},r=void 0,d={},h=[];function p(e){const t={a:"a",code:"code",em:"em",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Pyodide is a python package that allows you to run lightweight python code directly in the browser. This makes it perfect for simple applications where we want to run python code in a metaframe without having to use a docker container. In this walkthrough we will use python with pyodide to generate a plot and display the image it generates."}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Step 1:"})," From the ",(0,o.jsx)(t.a,{href:"http://metapage.io/",children:"metapage.io"})," homepage, create a new metapage using the \u201c+ New\u201d button and giving the metapage a name. We call it \u201cPyodide metapage\u201d here."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(66591).A+"",width:"1376",height:"240"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Step 2:"})," Let\u2019s add the \u201cPython (pyodide)\u201d metaframe. From the metaframes \u201c+ Add\u201d menu on the top right, select \u201cPython (pyodide)\u201d from the options. The pyodide metaframe should now display on the metapage."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(79625).A+"",width:"442",height:"790"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Step 3:"})," Click on the menu button at the top right corner of the pyodide metaframe to view the python code, options, and docs for this metaframe. You will see some basic code importing packages and comments with instructions for installing and importing packages is already included."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(26248).A+"",width:"1794",height:"930"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Step 4:"})," Let\u2019s write some python code now. Any code entered is dynamically run and the output is shown in the panel to the right. Try typing ",(0,o.jsx)(t.em,{children:"print(\u201dHello world!\u201d)"})," into the bottom of the script. You should see the text \u201cHello world!\u201d appear in the right panel."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'print("Hello world!")\n'})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(9517).A+"",width:"1117",height:"475"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Step 5:"})," Let\u2019s try another simple example. Create a for loop to print the numbers 0 to 9."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(10469).A+"",width:"1116",height:"473"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"for i in range(10):\n    print(i)\n"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Step 6:"})," Now that you\u2019ve tried some simple examples, let\u2019s do something a little more complex. We will generate some noisy data, export a plot and then view that plot with the \u201cShow Image\u201d frame. ",(0,o.jsx)(t.em,{children:"Enter the code below into the python editor of the pyodide metaframe."})," In this code we install and import the necessary packages, generate data points on a line with some noise added, create a plot of these points with matplotlib, and finally map the generated image to the metaframe\u2019s output."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'import pyodide\nimport micropip\nfrom js import metaframe, log\n\n# To install a package (numpy) in pyodide use\n# await micropip.install("numpy")\n\n# Then import the package before using it\n# import numpy as np\n\n# For a list of packages supported by micropip/pyodide see\n# https://pyodide.org/en/stable/usage/packages-in-pyodide.html\n\nawait micropip.install("matplotlib")\nawait micropip.install("numpy")\n\nimport matplotlib.pyplot as plt\nimport io, base64\nimport numpy as np\n\n# Generate data from a y=x line with noise\nx_line = np.linspace(0, 1, 20)\ny_line = x_line + np.random.normal(scale=0.1, size=x_line.shape)\n#print(x_line, y_line)\n\n# Create a scatter plot for the y=x line with noise\nplt.figure(figsize=(10, 6))\nplt.scatter(x_line, y_line, color=\'blue\')\n\n# Add labels and title\nplt.title("Noisy Line Scatterplot (y = x + noise)")\nplt.xlabel("X-axis")\nplt.ylabel("Y-axis")\n\n# Save the figure to a buffer and convert to base64\nbuf = io.BytesIO()\nplt.savefig(buf, format=\'png\')\nbuf.seek(0)\nimg_str = \'data:image/png;base64,\' + base64.b64encode(buf.read()).decode(\'UTF-8\')\n\n# Send the image to metaframe output\nmetaframe.setOutput("image1.png", img_str)\nlog("Sent image1.png!")\n\n# Close the current active figure\nplt.close()\n'})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Step 7:"})," If the code runs correctly you should see Sent image1.png! to the right of the code. Now if we want to actually view the image we need to create a \u201cShow Image\u201d metaframe and perform a data connection. To do this, use the search bar again to find the \u201cShow Image\u201d metaframe, and add it using the \u201cAdd\u201d button on the desired result."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(44737).A+"",width:"962",height:"560"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Step 8:"})," Let\u2019s make the data connection. Click on the \u201cData Flow\u201d button on the \u201cPython with Pyodide\u201d metaframe. Ensure that the Outputs tab is selected and the \u201cShow Image\u201d box in the upper section is orange, then simply click on the image1.png box next to the source metaframe. This will create a connection that sends this file to the target."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(31689).A+"",width:"2188",height:"1380"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Step 10:"})," Click Save. You should now see the plot displayed in your \u201cShow Image\u201d metaframe."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(28912).A+"",width:"1838",height:"1118"})}),"\n",(0,o.jsx)(t.p,{children:"Congratulations on creating your first metapage that runs python code and displays a plot of its output! As we mentioned earlier, running docker containers in metaframes allow for a greater efficiency and range of applications. We will demonstrate how to use these in the next walkthrough."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://metapage.io/Karl%20Lundquist/pyodide-metapage--97f7aa472cb94841ac6da81d6d6a8b2e",children:"Solution"})})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},28912:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/python-pyodide-walkthrough.281b1988-1985-442f-8ff9-2b386bf1f937-9152d8cea4134957577a52ac29955528.png"},66591:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/python-pyodide-walkthrough.40413031-c107-4d9a-8913-92322f3051aa-02c51623771bcefa79292303d884cf53.png"},79625:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/python-pyodide-walkthrough.7b103fa8-d511-452e-944e-5079b3e6f711-338ca7b2aebfcf570adf387696d51f34.png"},26248:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/python-pyodide-walkthrough.8c2d2efa-b977-4e77-aca4-2f3a4a9df408-ddf356ab99c3e3fd2b31158bacfe785e.png"},9517:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/python-pyodide-walkthrough.91d89dec-617d-41b7-b962-1e5f71a5313c-57bd85f83702f51abc372ab100026d62.png"},31689:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/python-pyodide-walkthrough.e90df541-ae2e-4fc4-8c12-4d55fbcf8327-4a57fbad20026ed79ab370cd96fd0d1e.png"},44737:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/python-pyodide-walkthrough.f3ba5e64-823b-4dc8-a824-4ee8284569fb-6dd2b4f835f4f77a07b66e0081f84749.png"},10469:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/python-pyodide-walkthrough.f552623a-13b6-4390-815c-9d5ec681ac4c-2be971913a286caec61aec786fe2ffe5.png"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var a=n(96540);const o={},i=a.createContext(o);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);
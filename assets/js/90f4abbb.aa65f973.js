"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[279],{33222:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"Getting-Started/python-container-walkthrough","title":"Tutorial 2- Run Python in a Container","description":"In this tutorial, you\'ll learn how to run Python code in container metaframes. One of the powerful features of Metapages is the ability to execute code directly in the browser using containerized environments. You\'ll write Python code that generates data visualization and display the results.","source":"@site/docs/Getting-Started/python-container-walkthrough.mdx","sourceDirName":"Getting-Started","slug":"/python-container-walkthrough","permalink":"/docs/python-container-walkthrough","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Tutorial 2- Run Python in a Container","sidebar_position":2,"slug":"/python-container-walkthrough","authors":["dion"]},"sidebar":"tutorialSidebar","previous":{"title":"Tutorial 1- Build a Simple Metapage with Image Display","permalink":"/docs/your-first-metapage"},"next":{"title":"Sending Data Between Metaframes","permalink":"/docs/connect-inputs-outputs"}}');var i=n(74848),o=n(28453);const s={title:"Tutorial 2- Run Python in a Container",sidebar_position:2,slug:"/python-container-walkthrough",authors:["dion"]},d=void 0,l={},c=[{value:"Introduction to Container Metaframes",id:"a1ef247427d345dfb3f81d00cd4366ff",level:2},{value:"Creating a Python-Powered Metapage",id:"10f1f48847b9490ba8163d6e447fc1b5",level:2},{value:"Step 1: Create a New Metapage",id:"b39fe911cfc94b4eab4126d362be053f",level:3},{value:"Step 2: Add a Python Visualization Metaframe",id:"622c7f0936ed41c1895f3bd9bd0121c5",level:3},{value:"Step 3: Examine the Default Code",id:"b08853e235974a8984e4fa6de5896e83",level:3},{value:"Step 4: Edit the Python Code",id:"f2f8b1e9944f47878f1f50469db7372a",level:3},{value:"Step 5: Run the Code",id:"d467d9ba6166490489a1d9a716cc7d8b",level:3},{value:"Step 6: Verify the Execution",id:"e6396697414b417fa34a4b406203ad91",level:3},{value:"Step 7: Add an Image Viewer",id:"78394b3f2ca04433a8292b4ca63e3188",level:3},{value:"Step 8: Create a Data Connection",id:"8c683a44ad1c40999f609a530bd5cbd3",level:3},{value:"Step 9: Save the Connection",id:"d700c892a392484095ae4d1acd8ee085",level:3},{value:"Step 10: View Your Plot",id:"cce91e52170d489bb5c08eaf233274fd",level:3},{value:"Congratulations!",id:"c4b7aba8ff724743b05f156be2ed28f4",level:2},{value:"Next Steps",id:"b5bfbffb2bf74d1285e43c2e8b185d23",level:2}];function r(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"In this tutorial, you'll learn how to run Python code in container metaframes. One of the powerful features of Metapages is the ability to execute code directly in the browser using containerized environments. You'll write Python code that generates data visualization and display the results."}),"\n",(0,i.jsx)(t.h2,{id:"a1ef247427d345dfb3f81d00cd4366ff",children:"Introduction to Container Metaframes"}),"\n",(0,i.jsx)(t.p,{children:"Container metaframes enable you to:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Write and execute Python scripts or code snippets"}),"\n",(0,i.jsx)(t.li,{children:"Define your own Docker images"}),"\n",(0,i.jsx)(t.li,{children:"Automatically build images from Git repositories"}),"\n",(0,i.jsx)(t.li,{children:"Publish and share your tools with others"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"10f1f48847b9490ba8163d6e447fc1b5",children:"Creating a Python-Powered Metapage"}),"\n",(0,i.jsx)(t.h3,{id:"b39fe911cfc94b4eab4126d362be053f",children:"Step 1: Create a New Metapage"}),"\n",(0,i.jsxs)(t.p,{children:["From the ",(0,i.jsx)(t.a,{href:"http://metapage.io/",children:"metapage.io"})," homepage:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Click the ",(0,i.jsx)(t.code,{children:"+ New"})," button"]}),"\n",(0,i.jsx)(t.li,{children:'Give your metapage a name (we\'ll use "Python metapage")'}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(64326).A+"",width:"2534",height:"344"})}),"\n",(0,i.jsx)(t.h3,{id:"622c7f0936ed41c1895f3bd9bd0121c5",children:"Step 2: Add a Python Visualization Metaframe"}),"\n",(0,i.jsxs)("div",{className:"custom-docunotion-row",children:[(0,i.jsxs)("div",{className:"custom-docunotion-row-cell",children:[(0,i.jsx)("ol",{children:(0,i.jsx)("li",{children:'Click the "+ Add" button'})}),(0,i.jsx)("ol",{children:(0,i.jsx)("li",{children:'Select "Add from search"'})}),(0,i.jsx)("ol",{children:(0,i.jsx)("li",{children:'Search for "matplotlib"'})}),(0,i.jsx)("ol",{children:(0,i.jsx)("li",{children:"Select the matplotlib metaframe"})}),(0,i.jsx)("ol",{children:(0,i.jsx)("li",{children:'Click the "+ Add" button to add it to your page'})}),(0,i.jsx)("p",{children:"The matplotlib metaframe should now appear on your metapage."}),(0,i.jsx)("br",{})]}),(0,i.jsx)("div",{className:"custom-docunotion-row-cell",children:(0,i.jsx)("p",{children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(73232).A+"",width:"714",height:"856"})})})})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(45268).A+"",width:"2334",height:"1356"})}),"\n",(0,i.jsx)(t.h3,{id:"b08853e235974a8984e4fa6de5896e83",children:"Step 3: Examine the Default Code"}),"\n",(0,i.jsx)(t.p,{children:"You should see Python code for plotting a matplotlib image in the editor. Don't worry that no image appears yet \u2014 we'll get to that soon."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(52932).A+"",width:"2508",height:"1196"})}),"\n",(0,i.jsx)(t.h3,{id:"f2f8b1e9944f47878f1f50469db7372a",children:"Step 4: Edit the Python Code"}),"\n",(0,i.jsxs)(t.p,{children:["Let's modify the code to generate some noisy data and create a plot. ",(0,i.jsx)(t.em,{children:"Copy the following code into the editor of the matplotlib metaframe:"})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'import matplotlib.pyplot as plt\nimport numpy as np\n\n# Generate data from a y=x line with noise\nx_line = np.linspace(0, 1, 20)\ny_line = x_line + np.random.normal(scale=0.1, size=x_line.shape)\n#print(x_line, y_line)\n\n# Create a scatter plot for the y=x line with noise\nplt.figure(figsize=(10, 6))\nplt.scatter(x_line, y_line, color=\'blue\')\n\n# Add labels and title\nplt.title("Noisy Line Scatterplot (y = x + noise)")\nplt.xlabel("X-axis")\nplt.ylabel("Y-axis")\n\nplt.savefig(\'/outputs/plot.png\')\n\nprint("Sent plot.png!")\n\n# Close the current active figure\nplt.close()\n'})}),"\n",(0,i.jsx)(t.p,{children:"This code:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Generates data points along a y=x line with random noise"}),"\n",(0,i.jsx)(t.li,{children:"Creates a scatter plot of these points"}),"\n",(0,i.jsx)(t.li,{children:"Saves the plot as an image file"}),"\n",(0,i.jsx)(t.li,{children:"Maps the generated image to the metaframe's output"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"d467d9ba6166490489a1d9a716cc7d8b",children:"Step 5: Run the Code"}),"\n",(0,i.jsxs)(t.p,{children:["After pasting the code, execute it by clicking ",(0,i.jsx)(t.code,{children:"Run Job"})," or ",(0,i.jsx)(t.code,{children:"Run Again"})," to generate the plot."]}),"\n",(0,i.jsx)(t.h3,{id:"e6396697414b417fa34a4b406203ad91",children:"Step 6: Verify the Execution"}),"\n",(0,i.jsx)(t.p,{children:"If the code runs correctly, you should see:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"\u2705\xa0Job complete"}),"\n",(0,i.jsx)(t.li,{children:"A  3 in green at the top right indicating three output files were generated"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(97897).A+"",width:"2492",height:"294"})}),"\n",(0,i.jsx)(t.h3,{id:"78394b3f2ca04433a8292b4ca63e3188",children:"Step 7: Add an Image Viewer"}),"\n",(0,i.jsx)(t.p,{children:'To view the generated plot, we need to add a "Show Image" metaframe:'}),"\n",(0,i.jsxs)("div",{className:"custom-docunotion-row",children:[(0,i.jsx)("div",{className:"custom-docunotion-row-cell",children:(0,i.jsx)("ol",{children:(0,i.jsx)("li",{children:'Use the search bar to find the "Show Image" metaframe'})})}),(0,i.jsx)("div",{className:"custom-docunotion-row-cell",children:(0,i.jsx)("p",{children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(15858).A+"",width:"1426",height:"688"})})})})]}),"\n",(0,i.jsxs)("div",{className:"custom-docunotion-row",children:[(0,i.jsxs)("div",{className:"custom-docunotion-row-cell",children:[(0,i.jsx)("ol",{children:(0,i.jsx)("li",{children:'Add it using the "+ Add to Metapage" option from the dropdown'})}),(0,i.jsx)("br",{})]}),(0,i.jsx)("div",{className:"custom-docunotion-row-cell",children:(0,i.jsx)("p",{children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(26718).A+"",width:"1012",height:"546"})})})})]}),"\n",(0,i.jsxs)("div",{className:"custom-docunotion-row",children:[(0,i.jsxs)("div",{className:"custom-docunotion-row-cell",children:[(0,i.jsx)("ol",{children:(0,i.jsx)("li",{children:"Resize the metaframe to fit better in your workspace"})}),(0,i.jsx)("br",{})]}),(0,i.jsx)("div",{className:"custom-docunotion-row-cell",children:(0,i.jsx)("p",{children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(85016).A+"",width:"480",height:"390"})})})})]}),"\n",(0,i.jsx)(t.p,{children:"Note: You can also add this metaframe using the \u201c+ Add\u201d button on the top right."}),"\n",(0,i.jsx)(t.h3,{id:"8c683a44ad1c40999f609a530bd5cbd3",children:"Step 8: Create a Data Connection"}),"\n",(0,i.jsx)(t.p,{children:"Now let's connect the Python output to the image viewer:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:'Click on the "Data Flow" button on the "Show Image" metaframe'}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(59356).A+"",width:"1910",height:"1548"})}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["In the connection interface, click on the ",(0,i.jsx)(t.code,{children:"plot.png"})," output from the Python metaframe. This creates a connection from the Python container to the image viewer, automatically sending the ",(0,i.jsx)(t.code,{children:"plot.png"})," file. For more detail about connections ",(0,i.jsx)(t.a,{href:"/docs/connect-inputs-outputs",children:"click here"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(85419).A+"",width:"480",height:"390"})}),"\n",(0,i.jsx)(t.h3,{id:"d700c892a392484095ae4d1acd8ee085",children:"Step 9: Save the Connection"}),"\n",(0,i.jsxs)(t.p,{children:["Click ",(0,i.jsx)(t.code,{children:"Save"})," to finalize the data connection."]}),"\n",(0,i.jsx)(t.h3,{id:"cce91e52170d489bb5c08eaf233274fd",children:"Step 10: View Your Plot"}),"\n",(0,i.jsx)(t.p,{children:'You should now see the plot displayed in your "Show Image" metaframe. The visualization shows the data points you generated with your Python code.'}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(99747).A+"",width:"1838",height:"1118"})}),"\n",(0,i.jsx)(t.h2,{id:"c4b7aba8ff724743b05f156be2ed28f4",children:"Congratulations!"}),"\n",(0,i.jsx)(t.p,{children:"You've successfully created a metapage that:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Runs Python code in a containerized environment"}),"\n",(0,i.jsx)(t.li,{children:"Generates a data visualization"}),"\n",(0,i.jsx)(t.li,{children:"Displays the output in a viewer metaframe"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"This demonstrates how Metapages allow you to create interactive, computational workflows directly in the browser."}),"\n",(0,i.jsx)(t.h2,{id:"b5bfbffb2bf74d1285e43c2e8b185d23",children:"Next Steps"}),"\n",(0,i.jsx)(t.p,{children:"Try modifying the Python code to create different visualizations or perform different data analyses. You could:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Change the type of plot (bar chart, line plot, etc.)"}),"\n",(0,i.jsx)(t.li,{children:"Generate different kinds of data"}),"\n",(0,i.jsx)(t.li,{children:"Add more complex data processing steps"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://metapage.io/dion/Python-metapage-d045e8a6dbdd4364b4dd72b58e5a8fc0",children:"View Solution Metapage"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},45268:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/python-container-walkthrough.1a601857-9bb5-8007-be8e-ffbedabb6d97-2ada29dd247095ecffcd41d13f0ec574.png"},85016:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/python-container-walkthrough.1a601857-9bb5-801f-8a59-c8ed2a0e36fd-4e5aa971cd0fbff5034efda0f4886100.gif"},85419:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/python-container-walkthrough.1a601857-9bb5-8031-84ec-de4deafe85c2-016286ab4c4e1b07b4e61f4dfd484eb5.gif"},97897:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/python-container-walkthrough.1a601857-9bb5-8039-99cd-cd9812454493-91d88f12c1e2d1ef5e0f0a10f78dc47d.png"},64326:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/python-container-walkthrough.1a601857-9bb5-8064-8cae-feff4b605cee-44ea7a7e45cb1c49e0d46a3ad493efcc.png"},99747:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/python-container-walkthrough.1a601857-9bb5-8071-9153-c74001c2cb75-9152d8cea4134957577a52ac29955528.png"},26718:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/python-container-walkthrough.1a601857-9bb5-80b7-8537-ec0e6a1dca52-eebf7719a1396155becf043d14d7ceec.png"},73232:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/python-container-walkthrough.1a601857-9bb5-80c7-9705-d1b4393eccea-165feff1af203a5028dd55fcda4fdc30.png"},15858:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/python-container-walkthrough.1a601857-9bb5-80d8-b1ac-ca1f46715210-89eb32dba8a0be468f3f2cee392b22b7.png"},52932:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/python-container-walkthrough.1a601857-9bb5-80e1-9c4c-d6b8faff5c33-a1f7f6ce86ac88fedf194064f8e8fe6e.png"},59356:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/python-container-walkthrough.1a601857-9bb5-80f6-91be-d74f928773b2-991902e5cdaa3b1916774bdd1a3bc39b.png"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>d});var a=n(96540);const i={},o=a.createContext(i);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);
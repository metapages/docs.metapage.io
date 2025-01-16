"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[6246],{5954:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=o(1527),a=o(3703);const i={title:"Working with docker metaframes",sidebar_position:3,slug:"/working-with-docker-metaframes",authors:"karl"},r=void 0,s={id:"Getting-Started/working-with-docker-metaframes",title:"Working with docker metaframes",description:"Now that you know how to create simple metapages, we will learn how to use one of the most powerful tools in metapages, the Docker or container metaframe. In basic terms, Docker is a technology that allows you to create and run virtual computer systems within any other system. This is powerful because in this system, called a container, you can install exactly the software needed to run code, and the same docker container is identical no matter what system it is run on, so your code will always work, no matter where or when you run it. This powerful technology can be leveraged in metaframes with custom docker containers or configurations, allowing you to run virtually any code you can imagine enabling endless applications! To get you started with Docker in metaframes, let\u2019s go through a simple example of creating a word cloud with python.",source:"@site/docs/Getting-Started/working-with-docker-metaframes.mdx",sourceDirName:"Getting-Started",slug:"/working-with-docker-metaframes",permalink:"/docs/working-with-docker-metaframes",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Working with docker metaframes",sidebar_position:3,slug:"/working-with-docker-metaframes",authors:"karl"},sidebar:"tutorialSidebar",previous:{title:"Running Python with Pyodide",permalink:"/docs/python-pyodide-walkthrough"},next:{title:"Connect Outputs \u2192 Inputs",permalink:"/docs/connect-inputs-outputs"}},c={},d=[];function l(e){const t={a:"a",code:"code",em:"em",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Now that you know how to create simple metapages, we will learn how to use one of the most powerful tools in metapages, the Docker or container metaframe. In basic terms, Docker is a technology that allows you to create and run virtual computer systems within any other system. This is powerful because in this system, called a container, you can install exactly the software needed to run code, and the same docker container is identical no matter what system it is run on, so your code will always work, no matter where or when you run it. This powerful technology can be leveraged in metaframes with custom docker containers or configurations, allowing you to run virtually any code you can imagine enabling endless applications! To get you started with Docker in metaframes, let\u2019s go through a simple example of creating a word cloud with python."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Step 1:"})," As done in the previous tutorials, create a new metapage. We will call ours \u201cWord Cloud with Docker\u201d"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:o(8156).Z+"",width:"1690",height:"336"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Step 2:"})," We will use four metaframes to construct this metapage. Two \u201cText Editor\u201d metaframes, one \u201cShow Image\u201d, and one \u201cDocker\u201d metaframe. To add these, use the search bar to find them (the official versions should have the \u201cbase\u201d tag), and add them to the metapage with the Add button. Feel free to resize and rearrange the metaframes according to your preferences."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:o(9734).Z+"",width:"2316",height:"1506"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Step 3:"})," We will use the \u201dText Editor\u201d metaframe for the word cloud text input and \u201cText Editor-1\u201d for the python code to create the word cloud. The \u201cDocker\u201d metaframe will run the python code in a docker container using the input text and produce a word cloud image which will be displayed in the \u201cShow Image\u201d metaframe. Let\u2019s now create the necessary data connections between the metaframes. To do this, follow the steps below."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Text Editor \u2014> Docker:"})," We first want to connect the input text from \u201cText Editor\u201d to \u201cDocker\u201d. To do this, first click on the Data Flow button in the hover menu for \u201cText Editor\u201d to open its connection dialog box."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:o(4e3).Z+"",width:"1030",height:"500"})}),"\n",(0,n.jsx)(t.p,{children:"We will provide the text to Docker as an input file called \u201cinput.txt\u201d.  With the Outputs tab selected, click on Docker in the top section to select it as a target. Then click \u201cCreate Connection\u201d. In the dialog box that appears type \u201ctext\u201d in the \u201cSource pipe, file, or glob\u201d field, and \u201cinput.txt\u201d into the \u201cTarget file or folder\u201d field. Then click OK. This will save the text output of the text editor to a file called input.txt in the Docker metaframe."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:o(8869).Z+"",width:"1660",height:"612"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:o(2152).Z+"",width:"2050",height:"1368"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Step 3b:"})," Repeat the procedure from 3a using the \u201cText Editor-1\u201d Data Flow dialog to provide the text from \u201cText Editor-1\u201d to Docker as a file called \u201cgenerate_wordcloud.py\u201d. It should look like the image below when finished."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:o(2120).Z+"",width:"2200",height:"1388"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Step 3c:"})," Finally, connect the output image from Docker to the \u201cShow Image\u201d metaframe. Open the \u201cShow Image\u201d connections editor, ensure \u201cShow Image\u201d is listed as the target metaframe, then click \u201cCreate Connection\u201d and add \u201cwordcloud.png\u201d as the output glob. It should now look like this."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:o(6130).Z+"",width:"2186",height:"1370"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Step 4 - Add the text content:"})," Now that we\u2019ve added our metaframes and connected them together let\u2019s begin adding the content and configuring our metaframes. First we need some content to create our word cloud. This can be whatever you want, but for this example we\u2019ve taken the first few paragraphs from the Docker Wikipedia page. First return to View mode, and then add your content to the \u201cText Editor\u201d metaframe."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:o(7241).Z+"",width:"783",height:"524"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Step 5 - Add the python code:"})," To provide the python code that the docker container will run, you can simply copy the contents of the code block below and paste it into the \u201cText Editor-1\u201d metaframe. You may optionally want to adjust the options of this editor to use a dark theme or provide python keyword coloring by selecting python under the Editor code mode dropdown."]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"import os\nfrom wordcloud import WordCloud\nimport matplotlib.pyplot as plt\n\n# Read the text from the file\nwith open('/inputs/input.txt', 'r') as file:\n    text = file.read()\n\n# Generate the word cloud\nwordcloud = WordCloud(width=800, height=400, background_color='white').generate(text)\n\n# Save the word cloud as an image file\nwordcloud.to_file('/outputs/wordcloud.png')\n\nprint(\"Word cloud image generated as 'wordcloud.png'\")\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Step 6 - Configure Docker:"})," Finally, now that we\u2019ve laid all the groundwork, we will configure our Docker metaframe in order to actually create our word cloud. In configuring the Docker metaframe it is important to know that any inputs can be accessed in the /inputs/ folder and any outputs need to be routed to the /outputs/ folder. You may have already noticed this reflected in the python code from the last step. There are two main things that we need to do to configure the Docker metaframe. You need to specify how to set up the container, and then specify what it will run. To do this, click on the gear icon at the top right of the metaframe and follow the steps below."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:o(8693).Z+"",width:"726",height:"302"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Configure Image:"})," Access the Docker Image configuration by clicking on the \u201cDocker Image\u201d tab. There are two main ways to specify how to create your docker image. You can use an existing published image by specifying the ",(0,n.jsx)(t.a,{href:"https://hub.docker.com/",children:"Docker Hub"})," container identifier under \u201cUse Existing Image\u201d or you can create a custom image with \u201cBuild Image from Repo\u201d. We will do the latter. After selecting \u201cBuild Image from Repo\u201d, click Edit next to Dockerfile. You can then paste in the code below and click \u201cSave\u201d."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-docker",children:"# Use an official Python runtime as the base image\nFROM python:3.10-slim\n\n# Install system dependencies required for wordcloud (gcc and font libraries)\nRUN apt-get update && apt-get install -y \\\n    gcc \\\n    libfreetype6-dev \\\n    libpng-dev \\\n    && rm -rf /var/lib/apt/lists/*\n\n# Install Python dependencies directly\nRUN pip install wordcloud matplotlib\n"})}),"\n",(0,n.jsx)(t.p,{children:"You can leave all the other Docker Image options blank and click Save again."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:o(645).Z+"",width:"643",height:"710"})}),"\n",(0,n.jsx)(t.p,{children:"Note: A Dockerfile includes all the commands which will be run in setting up the Docker container. In our Dockerfile we use a lightweight version of python as the base image, install some system dependencies, and then finally install the python packages we will use."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Configure Job:"})," In the last step we specified what to install in our container and now we need to tell it what to run. Go to the ",(0,n.jsx)(t.em,{children:"Configure Job"})," tab and under ",(0,n.jsx)(t.em,{children:"Command"})," type \u201cpython /inputs/generate_wordcloud.py\u201d. This will instruct Docker to use python to run the ",(0,n.jsx)(t.em,{children:"generate_wordcloud.py"})," script file in the ",(0,n.jsx)(t.em,{children:"/inputs/"})," folder. All other boxes here can be left blank. Click Save."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:o(6180).Z+"",width:"493",height:"914"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Step 7 - Run the Job:"})," Everything is now set up. Just click \u201cRun Job\u201d in the Docker metaframe to build the Docker container, run the python code, and generate your word cloud."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:o(3690).Z+"",width:"1282",height:"878"})}),"\n",(0,n.jsx)(t.p,{children:"Congratulations! You now have a very powerful tool at your disposal. We\u2019ve gone through a simple example here, but you can adapt the principles learned here to run any code you like inside the Docker metaframe. This can be leveraged to create arbitrarily complex pipelines for data processing, analysis, and visualization for a wide range of applications in drug discovery, computational biology, bioinformatics, machine learning, and beyond. The only limit is your imagination."}),"\n",(0,n.jsx)(t.p,{children:"This concludes our Getting Started tutorials on metapages, but there are many more applications to learn and discover. To learn more and get inspired, please explore the application-specific Examples and Walkthroughs sections of the docs as well as our Gallery of Metapages and Metaframes."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://app.metapage.io/Karl%20Lundquist/word-cloud-with-docker-0fe5ce6b511d440dba3f50389eeba3f2",children:"Solution"})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8693:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/working-with-docker-metaframes.2097b642-7514-4fc1-a5a1-2c4c50902ce5-c1696029a6b29cb86560b896ab00c1c8.png"},645:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/working-with-docker-metaframes.243ecbc8-90c1-4995-a6b2-a2a36a86fdd6-f732658e6b7865de60d330063a755ef4.png"},8156:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/working-with-docker-metaframes.5d1db17c-0a22-493c-b791-e73bb2ea7325-9a0603e483558fc4b1a15c70233f66a1.png"},6130:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/working-with-docker-metaframes.5f4e7790-f1e1-4563-ba5c-2049227063e4-699c5632c874de420c56d6af5db8b42d.png"},2120:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/working-with-docker-metaframes.66db617b-3f31-441d-bcd2-659177c730a2-461b1a5421daf6f4786f35cab2b372a6.png"},9734:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/working-with-docker-metaframes.6b8d98c6-496c-45d6-8e68-b65bf07f8780-7b32f0351951e3be22b752579740469a.png"},8869:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/working-with-docker-metaframes.7f6d187d-a8e1-4520-bfd8-2072ea6681db-84e78cd5eed9eaec4736712c41fd8329.png"},4e3:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/working-with-docker-metaframes.8fd01244-ed13-4a5c-b571-f919fcb78b89-8adf0538d4ed4eab74b5b4870d6ea898.png"},3690:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/working-with-docker-metaframes.ce9fbe8c-b5ff-4c9e-a3da-0ffa2951205c-6ecd95e93d99a4df555a545737d47cb0.png"},7241:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/working-with-docker-metaframes.d56ed3d2-0ad9-4354-8ee3-b896ef568597-5e83192f0ccf517c539333f5ae72f616.png"},2152:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/working-with-docker-metaframes.da5b19dc-4e91-43a4-a848-b5cd29165037-317b4173144879601399dae1e11d3f27.png"},6180:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/working-with-docker-metaframes.e8d3ff15-f2a7-4acb-abac-99acdc0ce2c9-72eb41422beaf1d296b6744752c8610f.png"},3703:(e,t,o)=>{o.d(t,{Z:()=>s,a:()=>r});var n=o(959);const a={},i=n.createContext(a);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);
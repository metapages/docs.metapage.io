"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/cloud-compute-too-complicated","metadata":{"permalink":"/blog/cloud-compute-too-complicated","source":"@site/blog/cloud-compute-too-complicated.mdx","title":"Connect compute to my tasks- it\u2019s too complicated","description":"2023-11-28","date":"2024-01-04T21:33:02.876Z","formattedDate":"January 4, 2024","tags":[],"readingTime":1.91,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Connect compute to my tasks- it\u2019s too complicated","sidebar_position":12,"slug":"/cloud-compute-too-complicated"},"unlisted":false,"nextItem":{"title":"Metaframes- websites as plug-and-play, editable, shareable components","permalink":"/blog/metaframes"}},"content":"2023-11-28 \\n\\n\\n```mermaid\\nflowchart LR\\n\\tst[\\"cloud data\\"]\\n\\tc[\\"compute\\"]\\n  urls[\\"workflows as URLs\\"]\\n  sims[\\"sharable simulations\\"]\\n\\tdt[\\"preserved through deep time\\"]\\n  what[\\"What is a metapage\\"]\\n\\n\\tst --\x3e urls\\n\\tc --\x3e urls --\x3e sims --\x3e dt\\n\\twhat --\x3e sims\\n\\turls --\x3e dt\\n  click st \\"/blog/blob-storage-is-solved-but-what-about-compute\\"\\n  click urls \\"/blog/url-configured-websites\\"\\n  click c \\"/blog/cloud-compute-too-complicated\\"\\n  style c fill:#fff,stroke:#999999,stroke-width:2px,color:#000\\n  click dt \\"/blog/internet-archive-url-configured-websites\\"\\n  click sims \\"/blog/shareable-simulations\\"\\n  click what \\"/blog/what-is-a-metapage\\"\\n\\n\\n\\n\\n```\\n\\n\\n## We have plenty of options for connecting compute to our tasks/simulations, but they are all complicated and not easily compatible {#d6395cc828f44649b3e04738dfafc668}\\n\\n\\nI want to run some batch compute for some tasks, it might be big, it might be small. There are so many choices, and \\n\\n- kubernetes\\n- slurm\\n- condor\\n- nomad\\n- AWS batch\\n- Google similar thing\\n- Azure (I don\u2019t even know but surprised if they don\u2019t have a similar thing)\\n\\n### Problems {#7605962b12bc4f87b25b52bf767afd37}\\n\\n- they require infrastructure skills, or an institution or group that has that support\\n- adhoc solutions do not last\\n- the configurations are not transferable without significant work\\n- it\u2019s unlikely that any single solution above will dominate, reducing the likelihood of simper solutions for individuals and researchers\\n\\n## Proposed solution {#ac8127616c354e79870d58d9677b0517}\\n\\n\\n**Users do not think much about where the compute is performed. It** _**just works.**_\\n\\n\\nThe batch compute job specification is entirely encoded in the URL. For example:\\n\\n\\n`https:` // `<origin>` / `#?` `definition=<base64 encoded JSON>`\\n\\n\\nThe definition can start with simple docker container jobs:\\n\\n\\n```yaml\\njob:\\n  type: docker\\n  image: <image-name>\\n  command: run-script.sh\\n  resources:\\n    cpu: 1000\\n    memory: 2gb\\n  ttl: 1h \\n```\\n\\n\\nThe minimal example above is encoded in the URL. The origin can be dynamically changed, and represents the location that will handle actual executing the above job definition. \\n\\n\\nJob inputs and outputs? Handled by the [metapage library](https://docs.metapage.io/docs/npm-metapage).\\n\\n\\n**Advantages:**\\n\\n- You can click on the link, and immediately test, and edit the definition\\n- Agnostic of _where_ the job is executed, as the origin can be changed without losing the definition\\n- The web is durable and everyone has a portal/environment (the browser) the will reliably view and execute the above definition\\n\\nThe backend of exactly where the docker image is run is an implementation detail. For starting out, users can simply connect their own personal computers, test and iterate, then copy the link to a domain with access to more resources: [https://docker.mtfm.io/#?tab=6](https://docker.mtfm.io/#?tab=6)"},{"id":"/metaframes","metadata":{"permalink":"/blog/metaframes","source":"@site/blog/metaframes.mdx","title":"Metaframes- websites as plug-and-play, editable, shareable components","description":"This will be a white paper about metaframes:","date":"2024-01-04T21:33:02.472Z","formattedDate":"January 4, 2024","tags":[],"readingTime":0.99,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Metaframes- websites as plug-and-play, editable, shareable components","sidebar_position":11,"slug":"/metaframes"},"unlisted":false,"prevItem":{"title":"Connect compute to my tasks- it\u2019s too complicated","permalink":"/blog/cloud-compute-too-complicated"},"nextItem":{"title":"The Internet Archive and URL configured websites","permalink":"/blog/internet-archive-url-configured-websites"}},"content":"```mermaid\\nflowchart LR\\n\\tmf[\\"metaframes\\"]\\n\\turl[\\"browser state in the URL\\"]\\n\\tmp[\\"metapages\\"]\\n\\n\\tmf --\x3e url --\x3e mp\\n  click url \\"/blog/url-configured-websites\\"\\n  click mf \\"/blog/metaframes\\"\\n  style mf fill:#fff,stroke:#999999,stroke-width:2px,color:#000\\n  click mp \\"/blog/what-is-a-metapage\\"\\n```\\n\\n\\nThis will be a white paper about metaframes:\\n\\n- what problem they solve\\n- how you use them\\n- how they work\\n- future capabilities\\n\\n# Problems they solve {#e6d7129e024947bcafc734f3c8147b5f}\\n\\n- When you find something you like on the internet, that is actually free or open for you to take and use and modify, there are many technical barriers preventing you from doing so\\n- A lot of \u201ceditable websites\u201d are locked behind proprietary walls. Your work only exists at the whim of the business or entity, you don\u2019t really own it in the sense that it will be around longer than e.g. the business\\n\\t- There is no deep-time strategy\\n- Connecting useful things on the internet requires too much specialized knowledge and even with that knowledge, much time\\n- Connecting APIs can also involve third party services, another layer of cost, complexity, and risk\\n\\n# Why Browsers {#0e2d4e2888cb41cd995a6f24abf22e77}\\n\\n\\n## Browser security is always improving, so users have a safe place to connect their compute resources to software {#25f7ea917279448eae91ffe61ad8d25e}"},{"id":"/internet-archive-url-configured-websites","metadata":{"permalink":"/blog/internet-archive-url-configured-websites","source":"@site/blog/internet-archive-url-configured-websites.mdx","title":"The Internet Archive and URL configured websites","description":"2023-12-05","date":"2024-01-04T21:33:01.192Z","formattedDate":"January 4, 2024","tags":[],"readingTime":2.105,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"The Internet Archive and URL configured websites","sidebar_position":10,"slug":"/internet-archive-url-configured-websites"},"unlisted":false,"prevItem":{"title":"Metaframes- websites as plug-and-play, editable, shareable components","permalink":"/blog/metaframes"},"nextItem":{"title":"Shareable Simulations","permalink":"/blog/shareable-simulations"}},"content":"2023-12-05 \\n\\n\\n# The Internet Archive and Deep-Time {#141c30a529cd48358db20933014bda26}\\n\\n\\n```mermaid\\nflowchart LR\\n\\tst[\\"cloud data\\"]\\n\\tc[\\"compute\\"]\\n  urls[\\"workflows as URLs\\"]\\n  sims[\\"sharable simulations\\"]\\n\\tdt[\\"preserved through deep time\\"]\\n  what[\\"What is a metapage\\"]\\n\\n\\tst --\x3e urls\\n\\tc --\x3e urls --\x3e sims --\x3e dt\\n\\twhat --\x3e sims\\n\\turls --\x3e dt\\n  click st \\"/blog/blob-storage-is-solved-but-what-about-compute\\"\\n  click urls \\"/blog/url-configured-websites\\"\\n  click c \\"/blog/cloud-compute-too-complicated\\"\\n  click dt \\"/blog/internet-archive-url-configured-websites\\"\\n  style dt fill:#fff,stroke:#999999,stroke-width:2px,color:#000\\n  click sims \\"/blog/shareable-simulations\\"\\n  click what \\"/blog/what-is-a-metapage\\"\\n\\n\\n\\n\\n```\\n\\n\\n---\\n\\n\\n# Links are critical to deep-time knowledge preservation {#d0cc4a9c4f8440aeaeaecb38513f4e2f}\\n\\n\\n```mermaid\\nflowchart\\n\\tn1[\\"knowledge\\"]\\n\\tn2[\\"is NOT\\"]\\n\\tn3[\\"here\\"]\\n\\tn1 --\x3e  n2  --\x3e  n3 --\x3e n1\\n\\n\\tk1[\\"_\\"]\\n\\tk2[\\"_\\"]\\n\\tk3[\\"_\\"]\\n\\tk1 --\x3e |\\"knowledge\\"| k3  --\x3e |\\"exists\\"| k2 --\x3e |\\"here\\"| k1\\n\\n\\n```\\n\\n\\nThe [Internet Archive](https://archive.org/) is a critical piece of the internet. By recording the past, it allows us to understand the past and therefore the future, preventing deception and allowing culture to grow and develop in deep time.\\n\\n\\nA critical part of the [Internet Archive](https://archive.org/) is recording and preserving links. When a link to a website dies for whatever reason, but then is preserved, we keep the underlying knowledge, since knowledge is distributed, just like how awareness of the environment is somehow kept in the patterns of neuron connections, not stored someone inside specific neurons.\\n\\n\\n:::note\\n\\nDigital neurons store information patterns in the connections. Biological neurons are more complex, storing information in connections, cellular state, frequency of activation, hormones, among other places. But likely the most important part is the connections between neurons.\\n\\n:::\\n\\n\\n\\n\\n:::note\\n\\nThis is a massive simplification, since there are many examples e.g. snail neurons that store information in the neuronal cells in complex ways [1]\\n\\n:::\\n\\n\\n\\n\\n---\\n\\n\\n# Links that store state in the URL help preserve websites through deep time {#4803fc7e4b88415c8143298a44c6f42b}\\n\\n\\n**The more state is stored in the URL directly, the more the website is able to be preserved and also retain functionality.**\\n\\n\\nThis has a number of advantages:\\n\\n- The user state is stored in the URL and is:\\n\\t- user editable (in the future)\\n\\t- machine readable\\n- The origin can be modified dynamically to reroute to domains that are active, without modifying the core state (in the hash parameters of the URL)\\n- Much easier to store, since a URL is just a string\\n\\t- Assuming that the core libraries, assets, and modules are preserved, but that\u2019s a separate concern\\n- More complex applications can be preserved as [metapages](https://docs.metapage.io/docs), therefore allowing someone in the future to access a complex workflow, and use it immediately\\n\\n# References: {#6c6abb081ad445869f6b26cb57d1640c}\\n\\n\\n[1] **Snails reveal how two brain cells can hold the key to decision making**\\n\\n\\n[https://www.sciencedaily.com/releases/2016/06/160603071655.htm](https://www.sciencedaily.com/releases/2016/06/160603071655.htm)"},{"id":"/shareable-simulations","metadata":{"permalink":"/blog/shareable-simulations","source":"@site/blog/shareable-simulations.mdx","title":"Shareable Simulations","description":"---","date":"2024-01-04T21:32:55.696Z","formattedDate":"January 4, 2024","tags":[],"readingTime":0.36,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Shareable Simulations","sidebar_position":8,"slug":"/shareable-simulations"},"unlisted":false,"prevItem":{"title":"The Internet Archive and URL configured websites","permalink":"/blog/internet-archive-url-configured-websites"},"nextItem":{"title":"metapage URL schema","permalink":"/blog/7965915b-b0e5-401d-b5ad-246e4812aa97"}},"content":"```mermaid\\nflowchart LR\\n  what[\\"What is a metapage\\"]\\n\\turlwebsites[\\"URL contains config\\"]\\n\\tsims[\\"sharable simulations\\"]\\n\\tdt[\\"preserved through deep time\\"]\\n\\n\\twhat --\x3e sims\\n\\turlwebsites --\x3e sims\\n\\tsims --\x3e dt\\n  click what \\"/blog/what-is-a-metapage\\"\\n  click urlwebsites \\"/blog/url-configured-websites\\"\\n  click sims \\"/blog/shareable-simulations\\"\\n  style sims fill:#fff,stroke:#999999,stroke-width:2px,color:#000\\n  click dt \\"/blog/internet-archive-url-configured-websites\\"\\n\\n\\n\\n\\n\\n```\\n\\n\\n![](./1940940595.png)\\n\\n\\n---\\n\\n\\n# Game changer: versioned, interactive, editable simulations can be sent via text/slack message {#37dc4238fd52434b9e7a4c07812c1799}\\n\\n\\n```mermaid\\nflowchart LR\\n\\tc[\\"create+collaborate\\"] --\x3e |\\"\u2705\\"| publish\\n\\tpublish --\x3e |\\"\u2705\\"| re-use --\x3e |\\"\u2705\\"| c\\n```"},{"id":"/7965915b-b0e5-401d-b5ad-246e4812aa97","metadata":{"permalink":"/blog/7965915b-b0e5-401d-b5ad-246e4812aa97","source":"@site/blog/metapage-URL-schema.mdx","title":"metapage URL schema","description":"Links to resources","date":"2024-01-04T21:32:54.560Z","formattedDate":"January 4, 2024","tags":[],"readingTime":1.465,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"metapage URL schema","sidebar_position":7,"slug":"/7965915b-b0e5-401d-b5ad-246e4812aa97"},"unlisted":false,"prevItem":{"title":"Shareable Simulations","permalink":"/blog/shareable-simulations"},"nextItem":{"title":"How to get SharedArrayBuffer and cross-domain isolation with metapage.io","permalink":"/blog/590e31dd-740b-43ce-9667-a2879651a392"}},"content":"## Links to resources {#6562e6a9391e47459c62b51ca4705542}\\n\\n- [https://blog.jim-nielsen.com/2023/examples-of-great-urls/](https://blog.jim-nielsen.com/2023/examples-of-great-urls/)\\n- [https://warpspire.com/posts/url-design/](https://warpspire.com/posts/url-design/) (referenced by above)\\n- Github issue: [https://github.com/metapages/app.metapage.io/issues/323](https://github.com/metapages/app.metapage.io/issues/323)\\n\\n# Metapage URL schema {#f303de8ca6ed42c0b74ce3b17673638e}\\n\\n\\nThe way URLs are constructed:\\n\\n- Need to be consistent with current and future planned behaviour\\n- Simple to understand\\n- Work with different methods of showing metapages\\n\\t- The official editor: app.metapage.io\\n\\t- The standalone viewer\\n\\t- Others\\n- Allow arbitrary path names\\n\\t- E.g. users can name a metapage `foo/bar/thing` and it shows up as `https://app.metapage.io/<user>/foo/bar/thing`\\n\\t- Then path hierarchies can be show to users\\n\\nThe last part is important as  (currently) arbitrary path names do not work as **operations** are also specified in the path:  `https://app.metapage.io/<user>/<name>/edit`\\n\\n\\t- I think this method is NOT GOOD, since it mixes up views and locations?\\n\\t- Should be `/<user>/<name>/?view=edit` ?\\n\\n## Things I don\u2019t like {#dd1e48b5e0214584826681e1826841e4}\\n\\n\\nupper-case mixed with lower case:\\n\\n\\n![](./232744531.png)\\n\\n\\nIt looks ugly? So subjective\\n\\n\\n## Solutions? {#9068e91409924d9dade8d17d9db6670d}\\n\\n- `foo/bar/thing` is a valid metapage name? Or at least, resource\\n\\t- `foo/bar/thing/metapage.json` ?\\n- \\n- Anything after `/<user>/` is the metapage name\\n- Operations use query parameters\\n\\t- `?view=edit`, `?view=default`, `?view=minimal` or whatever\\n- State is hash parameters\\n- Use notion ID format\\n\\t- `https://app.metapage.io/<user>/some-long-ignored-name-id/`\\n\\t\\t- ONLY THE `id` is pulled and used, the name is arbitrary, and for humans\\n\\t\\t- That way, we don\u2019t have to worry about \u201ccorrectness\u201d of the name\\n\\t\\t- Then why have the user id?\\n\\t\\t\\t- `https://app.metapage.io/<some-long-ignored-name>-<id>/`\\n\\n# Solution Final (still in progress though) {#d4162bf5b1384581bc237b1f06abf2a2}\\n\\n- user metapages:\\n\\t- `https://mtpg.io/<user>/<some-long-ignored-name>-<id>`\\n\\t- `https://mtpg.io/<some-long-ignored-name>-<id>`\\n\\t\\t- (both work)\\n\\t- navigation/modes:\\n\\t\\t- `?view=edit`, `?view=full`, etc. These are the tabs\\n\\t- What about the search overlay?\\n- metaframes:\\n\\t- `https://mtpg.io/mf/<mfk>`\\n\\t\\t- Users do not create metaframe keys, we generate them\\n\\t\\t- Friendly user facing names? Like notion urls, considered above?\\n\\t\\t\\t- `https://mtpg.io/mf/<some-ignored-string>-<mfk>`"},{"id":"/590e31dd-740b-43ce-9667-a2879651a392","metadata":{"permalink":"/blog/590e31dd-740b-43ce-9667-a2879651a392","source":"@site/blog/How-to-get-SharedArrayBuffer-and-cross-domain-isolation-with-metapage.io.mdx","title":"How to get SharedArrayBuffer and cross-domain isolation with metapage.io","description":"Guide","date":"2024-01-04T21:32:48.464Z","formattedDate":"January 4, 2024","tags":[],"readingTime":0.23,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"How to get SharedArrayBuffer and cross-domain isolation with metapage.io","sidebar_position":6,"slug":"/590e31dd-740b-43ce-9667-a2879651a392"},"unlisted":false,"prevItem":{"title":"metapage URL schema","permalink":"/blog/7965915b-b0e5-401d-b5ad-246e4812aa97"},"nextItem":{"title":"Greatest Information Technology of Humans","permalink":"/blog/greatest-tech-in-time"}},"content":"## Guide {#3f4d0b9c861841898be9dcf084a1317b}\\n\\n\\n[https://web.dev/cross-origin-isolation-guide/](https://web.dev/cross-origin-isolation-guide/)\\n\\n\\n## Main site must serve these headers: {#5de1b86a22fe47fbb4674eac29a656f1}\\n\\n- `Cross-Origin-Opener-Policy`: `same-origin`\\n- `Cross-Origin-Embedder-Policy`: `require-corp`\\n\\n## Iframe/metaframe site must serve these headers: {#2442d6ae453f45ee9b05da80821f055e}\\n\\n- `Cross-Origin-Opener-Policy`: `same-origin`\\n- `Cross-Origin-Embedder-Policy`: `require-corp`\\n- `Cross-Origin-Resource-Policy`: `cross-origin`\\n\\nWhen these stars are aligned, `ffmpeg.wasm` works in a metaframe:\\n\\n\\n![](./2030675540.png)"},{"id":"/greatest-tech-in-time","metadata":{"permalink":"/blog/greatest-tech-in-time","source":"@site/blog/greatest-tech-in-time.mdx","title":"Greatest Information Technology of Humans","description":"It is unlikely that humans are the first to develop story-based deep-time cultural information persistence on this planet.","date":"2024-01-04T21:32:46.752Z","formattedDate":"January 4, 2024","tags":[],"readingTime":1.865,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Greatest Information Technology of Humans","sidebar_position":5,"slug":"/greatest-tech-in-time"},"unlisted":false,"prevItem":{"title":"How to get SharedArrayBuffer and cross-domain isolation with metapage.io","permalink":"/blog/590e31dd-740b-43ce-9667-a2879651a392"},"nextItem":{"title":"Metapages Deep Time","permalink":"/blog/metapages-are-deep-time-persistent"}},"content":"```mermaid\\nflowchart LR\\n    A[ Stories] --\x3e C[\\"High-fidelity stories\\"]\\n    B[Three people per story] --\x3e C\\n    C --\x3e D[\\"lasting thousands of years\\"]\\n    D --\x3e |means| E[\\"Long term information persistence\\"]\\n```\\n\\n\\n:::tip\\n\\nIt is unlikely that humans are the first to develop story-based deep-time cultural information persistence on this planet.\\n\\n:::\\n\\n\\n\\n\\n## Problem: information degrades over time {#cd01f6f926174670b3beb309162e0ddf}\\n\\n\\nHuman-created and biologically-evolved information systems have overlapping problems and have developed similar solutions.\\n\\n\\nHard-drives wear out, DNA sequences break and accumulate mutations, cosmic rays flib bits, DNA+RNA do not have 100% fidelity on copy, and so on.\\n\\n\\n`some cool pic here: stable diffusions???`\\n\\n\\nThe solution is: `multiple copies`\\n\\n\\nWhile there are greater and lesser solutions at different stages and processes, duplication is the primary and most important mechanism for maintaining information consistency (right word?) over time.\\n\\n\\nCloud data storage maintains multiple copies of the data in different locations so that the loss of a hard-drive unit (which happens at some frequency) is handled (mostly) automatically by software+hardware systems.\\n\\n\\nBiological systems use:\\n\\n- DNA is double-stranded (the spare strand can be used for fixing errors)\\n- multiple copies of chromosomes\\n- Species are populations with multiple copies\\n\\nCultural systems use:\\n\\n- writing\\n- visual art\\n- music and spoken word\\n- places as physical anchors/markers/symbols\\n- others?\\n- digital storage of words, videos, sounds\\n\\nWe think of think of written words as having more durability than spoken word but:\\n\\n- languages evolve over time and reach a point where we cannot read the writing even if in stone (rosetta stone needed for Egyptian hieroglyphs)\\n- written word is archival unless read or spoken\\n- written/carved words can be burnt/destroyed/decayed by time\\n\\nAs long as the words (stories and songs) are spoken and sung in each generation, then the persistence is potentially forever.\\n\\n\\nThus:\\n\\n- deep time cultures must minimize large-scale wars as these cause genocide and thus erasure of deep-time information\\n- shallow-time cultures may not have the larger collective awareness of the long-term consequence of such loss events\\n- parasitic elements of deep time entities can consume the stored entropy of complex information (akin to, or literally, burning books for warmth)\\n\\n## Calendars, human measurements of time {#a0c78e5a7bb44d96bf7c4c3ab6bb3a03}\\n\\n\\nMayan calendar uses all visible planets, 49 year period\\n\\n\\n[https://www.popularmechanics.com/science/archaeology/a43645858/how-the-mayan-calendar-works/](https://www.popularmechanics.com/science/archaeology/a43645858/how-the-mayan-calendar-works/)"},{"id":"/metapages-are-deep-time-persistent","metadata":{"permalink":"/blog/metapages-are-deep-time-persistent","source":"@site/blog/metapages-are-deep-time-persistent.mdx","title":"Metapages Deep Time","description":"The promise:","date":"2024-01-04T21:32:45.704Z","formattedDate":"January 4, 2024","tags":[],"readingTime":0.68,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Metapages Deep Time","sidebar_position":4,"slug":"/metapages-are-deep-time-persistent"},"unlisted":false,"prevItem":{"title":"Greatest Information Technology of Humans","permalink":"/blog/greatest-tech-in-time"},"nextItem":{"title":"Metapages Origin","permalink":"/blog/metapages-history"}},"content":"The promise:\\n\\n\\nmetapages, or objects derived from metapages, can be dehydrated (stored) and then re-hydrated and run **forever**\\n\\n\\n:::tip\\n\\nA commitment to deep time is a promise to the future\\n\\n:::\\n\\n\\n\\n\\nIndividuals cannot make effective promises to the future, due to EOL/TTL, but groups and organizations can\\n\\n\\n\\n:::tip\\n\\nConcentrated hierarchical power in organizations leads to instabilities: personalities overrides the distributed information flow that makes up long-term agreements and values\\n\\n:::\\n\\n\\n\\n\\n## forever {#9a13c532c8ff476ca92ebc95cd95620a}\\n\\n\\nRequires:\\n\\n- object (data blob) storage\\n- DNS (serve content from addresses)\\n- scientifically critical software (e.g. libraries, tools) in object storage\\n- compute resources (virtual machines)\\n\\nThese are not something this organization can do alone: it is a long-term, multi-organization endeavour. But _with_ and building on those pre-requisites, the metapages organization aims to provide the tooling and infrastructure to provide deep-time durability"},{"id":"/metapages-history","metadata":{"permalink":"/blog/metapages-history","source":"@site/blog/metapages-history.mdx","title":"Metapages Origin","description":"Metapages are a way to solve problems that arose repeatedly during my work in different multi-disciplinary scientific+software workplaces.","date":"2024-01-04T21:32:45.452Z","formattedDate":"January 4, 2024","tags":[],"readingTime":1.555,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Metapages Origin","sidebar_position":3,"slug":"/metapages-history"},"unlisted":false,"prevItem":{"title":"Metapages Deep Time","permalink":"/blog/metapages-are-deep-time-persistent"},"nextItem":{"title":"Blob storage is a solved problem- what about compute?","permalink":"/blog/blob-storage-is-solved-but-what-about-compute"}},"content":"Metapages are a way to solve problems that arose repeatedly during my work in different multi-disciplinary scientific+software workplaces.\\n\\n\\nProblems and observations:\\n\\n- the time of software developers is a limited resource\\n\\t- but collaborations produce leaps instead of incremental steps\\n- it\'s hard to share code and complex workflows\\n\\t- but when possible, progress accelerates\\n- reproducing workflows and scientific processes can be too time-consuming to be practical\\n\\t- there is a tight relationship between durability, sharing, and reproducibility\\n- sometimes you want to share a piece of a complex workflow/app but it\'s too tied up to be practical\\n\\t- isolating chunks of code into re-usable components is as-ever very useful when possible\\n- mixing backend and front-end code is overly complex for one-off workflows\\n\\t- but is powerful\\n- open-source software is key\\n\\nIn most groups that I have been fortunate to work with, we ended up going down very similar paths, or at least, attempting to solve some of the same subset of problems.\\n\\n\\nAnd new technical innovations can suddently change the landscape, such as docker, where previously it was impractical to share reproducible compute environments, then rapidly became trivial.\\n\\n\\n### Metapages {#d834df68f5e24fa5b2ae093830d6e41c}\\n\\n\\nMetapages solves the following set of inter-related problems:\\n\\n- How to share arbitrarily complex applications and workflows\\n- Sharing and storage are interconnected: how to store \ud83d\udc46\\n- How to lower the barriers of creating and editing\\n- How to automatically run apps and workflows in the future [deep-time-promise]\\n\\n## Reference and footnotes {#7a88c69baac141b89e458ae2bf0a6d99}\\n\\n- `deep-time-promise`\\n- How to empower scientists to share their ideas\\n- How to add add useful tools in the places where needed\\n- And all this\\n\\nOften, small pieces of code in just the right place is all that is needed to unblock and thus accelerate the workflow.\\n\\n\\nBut make and deploying software and code can be overly time-consuming and complex.o"},{"id":"/blob-storage-is-solved-but-what-about-compute","metadata":{"permalink":"/blog/blob-storage-is-solved-but-what-about-compute","source":"@site/blog/blob-storage-is-solved-but-what-about-compute.mdx","title":"Blob storage is a solved problem- what about compute?","description":"2023-11-26","date":"2024-01-04T21:32:43.604Z","formattedDate":"January 4, 2024","tags":[],"readingTime":2.17,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Blob storage is a solved problem- what about compute?","sidebar_position":2,"slug":"/blob-storage-is-solved-but-what-about-compute"},"unlisted":false,"prevItem":{"title":"Metapages Origin","permalink":"/blog/metapages-history"},"nextItem":{"title":"URL Configured Websites","permalink":"/blog/url-configured-websites"}},"content":"2023-11-26 \\n\\n\\n```mermaid\\nflowchart LR\\n\\tst[\\"cloud data\\"]\\n\\tc[\\"compute\\"]\\n  urls[\\"workflows as URLs\\"]\\n  sims[\\"sharable simulations\\"]\\n\\tdt[\\"preserved through deep time\\"]\\n  what[\\"What is a metapage\\"]\\n\\n\\tst --\x3e urls\\n\\tc --\x3e urls --\x3e sims --\x3e dt\\n\\twhat --\x3e sims\\n\\turls --\x3e dt\\n  click st \\"/blog/blob-storage-is-solved-but-what-about-compute\\"\\n  style st fill:#fff,stroke:#999999,stroke-width:2px,color:#000\\n  click urls \\"/blog/url-configured-websites\\"\\n  click c \\"/blog/cloud-compute-too-complicated\\"\\n  click dt \\"/blog/internet-archive-url-configured-websites\\"\\n  click sims \\"/blog/shareable-simulations\\"\\n  click what \\"/blog/what-is-a-metapage\\"\\n\\n\\n\\n\\n```\\n\\n\\n## Storage is a solved problem {#391abf3711fb4cdc989cd95a352c95d3}\\n\\n\\nStoring blobs of data for your web application used to be more involved, I had to _think_ about it. Now I don\u2019t (much): when I build an app or website, that needs some blob storage my thoughts are:\\n\\n1. create a bucket or whatever it\u2019s called in one of some cloud provider, doesn\u2019t have to be the biggest name, they\u2019re all very reliable\\n2. put stuff in\\n3. get stuff out\\n\\nI don\u2019t care where much it is. Why? Because it\u2019s a **solved problem**. Remote blob storage is:\\n\\n- very cheap, and getting cheaper\\n- reliable [1]\\n\\nAt scale however, yes, you do have to think about cost, but those calculations are pretty straightforward business calculations. At anything below very large data, you don\u2019t have to think much about it, and this makes it a **solved problem**.\\n\\n\\nIt\u2019s a solved problem in a similar way that nature has solved storing information: replication, with automated mechanisms for damage repair/reconciliation [2].\\n\\n\\n## Compute is not a solved problem {#7998c587d99540c98564ff6646cb9977}\\n\\n\\nBecause you have to think about it. What I want: \\n\\n\\nI give you some application, some workflow, for example, a machine learning agent, some program I have created, some tool, and it requires from time to time, some level of computing power. You are able to automatically, safely, connect that application to the right level of compute resources as needed.\\n\\n- If the program is in the browser, I might be able to use the GPU, while the tab is open and running.\\n- If the program is downloaded and installed program, I have access to your entire computer, but due to that, security and parasitic programs become a problem.\\n- If I make available some cloud computing, it suddenly becomes complex, with lots of decisions, but with lots of scalable compute resources of different useful types.\\n\\nComputing resources are inherently valuable, and often able to be converted to $$ efficiently via automation.\\n\\n\\nObviously `storage !== compute` but if it were as easy, then I could distribute complex scientific simulations, and revive them years later, and they would \u201cjust work\u201d.\\n\\n\\n## References {#f72739ff70d843c7b655beb4d3c9c218}\\n\\n\\n### [1] **How data is lost in the cloud** {#5ff5b92126b14c0cb53ba25f3a9f00d3}\\n\\n\\n[https://spanning.com/blog/how-data-is-lost-in-the-cloud/](https://spanning.com/blog/how-data-is-lost-in-the-cloud/)\\n\\n\\n### [2] **Mechanisms of ionizing-radiation resistance** {#7d4f1319505a45ddb4c4b1a2e8c47ceb}\\n\\n\\n[https://en.wikipedia.org/wiki/Deinococcus_radiodurans](https://en.wikipedia.org/wiki/Deinococcus_radiodurans)"},{"id":"/url-configured-websites","metadata":{"permalink":"/blog/url-configured-websites","source":"@site/blog/url-configured-websites.mdx","title":"URL Configured Websites","description":"2023-12-05","date":"2024-01-04T21:32:43.196Z","formattedDate":"January 4, 2024","tags":[],"readingTime":2.385,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"URL Configured Websites","sidebar_position":9,"slug":"/url-configured-websites"},"unlisted":false,"prevItem":{"title":"Blob storage is a solved problem- what about compute?","permalink":"/blog/blob-storage-is-solved-but-what-about-compute"},"nextItem":{"title":"What is a metapage? What problems do they solve?","permalink":"/blog/what-is-a-metapage"}},"content":"2023-12-05 \\n\\n\\n```mermaid\\nflowchart LR\\n\\tst[\\"cloud data\\"]\\n\\tc[\\"compute\\"]\\n  urls[\\"workflows as URLs\\"]\\n  sims[\\"sharable simulations\\"]\\n\\tdt[\\"preserved through deep time\\"]\\n  what[\\"What is a metapage\\"]\\n\\n\\tst --\x3e urls\\n\\tc --\x3e urls --\x3e sims --\x3e dt\\n\\twhat --\x3e sims\\n\\turls --\x3e dt\\n  click st \\"/blog/blob-storage-is-solved-but-what-about-compute\\"\\n  click urls \\"/blog/url-configured-websites\\"\\n  style urls fill:#fff,stroke:#999999,stroke-width:2px,color:#000\\n  click c \\"/blog/cloud-compute-too-complicated\\"\\n  click dt \\"/blog/internet-archive-url-configured-websites\\"\\n  click sims \\"/blog/shareable-simulations\\"\\n  click what \\"/blog/what-is-a-metapage\\"\\n\\n\\n\\n\\n```\\n\\n\\n```mermaid\\nflowchart LR\\n\\tmf[\\"metaframes\\"]\\n\\turl[\\"browser state in the URL\\"]\\n\\tmp[\\"metapages\\"]\\n\\n\\tmf --\x3e url --\x3e mp\\n  click url \\"/blog/url-configured-websites\\"\\n  style url fill:#fff,stroke:#999999,stroke-width:2px,color:#000\\n  click mf \\"/blog/metaframes\\"\\n  click mp \\"/blog/what-is-a-metapage\\"\\n```\\n\\n\\n## Use URL hash parameters to store large amounts of user configured data {#99468beeddb741dfae03c3cdade858ed}\\n\\n\\n:::tip\\n\\nIt gives users much more control and creativity over websites\\n\\n:::\\n\\n\\n\\n\\n[https://mermaid.live/](https://mermaid.live/) is an excellent example. As soon as you go to that link, the link looks long: that\u2019s because it has encoded the diagram it displays completely in the URL hash parameters:\\n\\n\\n![](./1164251445.png)\\n\\n\\nURL:\\n\\n\\n[https://mermaid.live/edit#pako:eNpVjk2Lg0AMhv9KyGkL9Q94WGh1t5fCFurN6SFo7AztfDBGpKj_fcd62c0pvM_zhkzY-JYxx-7px0ZTFKhK5SDNoS50NL1Y6m](https://mermaid.live/edit#pako:eNpVjk2Lg0AMhv9KyGkL9Q94WGh1t5fCFurN6SFo7AztfDBGpKj_fcd62c0pvM_zhkzY-JYxx-7px0ZTFKhK5SDNoS50NL1Y6m-QZZ_ziQWsd_ya4fhx8tBrH4Jx993mH1cJium8agyijXssGyre_R_HM5T1mYL4cPtLqtHP8FWbi07n_xMdObW-647yjrKGIhQU3wru0XK0ZNr0_rQmCkWzZYV5WlvuaHiKQuWWpNIg_vpyDeYSB97jEFoSLg3dI9ktXH4B_cJWqw)\u2026 (I cut it for readability)\\n\\n\\nWhat is happening?\\n\\n- The code that describes the diagram is encoded and store in the hash parameters (after the `#`) of the URL.\\n- That URL can now be shared and directly edited\\n- No backend server is involved in storing the data, only for serving the assets (a _**static**_ website)\\n- Everything after the `#` is **NOT** sent to the server\\n\\n## Modern browsers can handle very large URLs {#d32c6439fe384d90b342350311b68d89}\\n\\n\\nIn 2006, [IE8s URL limit was 2083 characters](https://support.microsoft.com/en-us/kb/208427). [IE9 has a similar limit](https://stackoverflow.com/questions/3721034/how-long-of-a-url-can-internet-explorer-9-take). \\n\\n\\n[The original HTTP/1.1 specification put no limit on the length of the URL](http://www.faqs.org/rfcs/rfc2616.html)\\n\\n\\nIn 2022, a new update was published [and says](https://www.rfc-editor.org/rfc/rfc9110#section-4.1-5):\\n\\n\\n> It is RECOMMENDED that all senders and recipients support, at a minimum, URIs with lengths of 8000 octets in protocol elements. Note that this implies some structures and on-wire representations (for example, the request line in HTTP/1.1) will necessarily be larger in some cases.\\n\\n\\nHowever, this is talking about URLs over the wire. For the browser address bar itself, limits are much much higher:\\n\\n\\n```text\\nBrowser     Address bar   document.location\\n                          or anchor tag\\n------------------------------------------\\nChrome          32779           >64k\\nAndroid          8192           >64k\\nFirefox          >64k           >64k\\nSafari           >64k           >64k\\nIE11             2047           5120\\nEdge 16          2047          10240\\n```\\n\\n\\nSource: [https://stackoverflow.com/questions/417142/what-is-the-maximum-length-of-a-url-in-different-browsers](https://stackoverflow.com/questions/417142/what-is-the-maximum-length-of-a-url-in-different-browsers)\\n\\n\\n## You can store large amounts of code in the hash parameters, and allow users to configure complex websites {#852ea18949cc47ad9c89488cf81019ce}\\n\\n\\nSingle metaframe pinned\\n\\n\\n\\n<iframe scrolling=\\"no\\" allow=\\"fullscreen *; camera *; speaker *;\\" style={{width:\\"100%\\",height:\\"450px\\",overflow:\\"hidden\\"}} src=\\"https://app.metapage.io/mf?mfk=CRCyFFm29e\\"></iframe>\\n\\n\\n\\nIn the example above, enough code was embedded in the link to describe a 3D with a bunch of complex behaviour. Someone else can take that URL, and directly modify it, run it, then share the modified URL. \\n\\n\\nThis way, apps can be both self-contained, but also highly configurable and shareable, allowing a high degree of direct collaboration not under centralized control.\\n\\n\\n**Edit:**  click the top right in the embed above: \\n\\n\\n![](./701449203.png)\\n\\n\\nand you will be able to directly edit the code running, and copy and reuse it yourself."},{"id":"/what-is-a-metapage","metadata":{"permalink":"/blog/what-is-a-metapage","source":"@site/blog/what-is-a-metapage.mdx","title":"What is a metapage? What problems do they solve?","description":"Write a good story","date":"2024-01-04T21:32:40.672Z","formattedDate":"January 4, 2024","tags":[],"readingTime":0.28,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"What is a metapage? What problems do they solve?","sidebar_position":0,"slug":"/what-is-a-metapage"},"unlisted":false,"prevItem":{"title":"URL Configured Websites","permalink":"/blog/url-configured-websites"}},"content":"```mermaid\\nflowchart LR\\n  what[\\"What is a metapage\\"]\\n\\turlwebsites[\\"URL contains config\\"]\\n\\tsims[\\"sharable simulations\\"]\\n\\tdt[\\"preserved through deep time\\"]\\n\\n\\twhat --\x3e sims\\n\\turlwebsites --\x3e sims\\n\\tsims --\x3e dt\\n  click what \\"/blog/what-is-a-metapage\\"\\n  style what fill:#fff,stroke:#999999,stroke-width:2px,color:#000\\n  click urlwebsites \\"/blog/url-configured-websites\\"\\n  click sims \\"/blog/shareable-simulations\\"\\n  click dt \\"/blog/internet-archive-url-configured-websites\\"\\n\\n\\n\\n\\n\\n```\\n\\n\\nWrite a good story\\n\\n\\nRight before a divider\\n\\n\\n---\\n\\n\\nAfter the divider\\n\\n\\n---\\n\\n\\nAnother divider"}]}')}}]);
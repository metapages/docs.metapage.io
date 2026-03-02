# Documentation Rewrite — Summary

**Date:** February 2026
**Status:** First pass complete. API stubs need real content.

---

## The Problem

The original 45-file docs set had two fundamental issues:

1. **Wrong audience.** It was written for end users discovering the product, not for technical builders. Lots of "here's what Metapages can do for you" marketing copy.

2. **Wrong content.** Heavy on UI screenshots and click-by-click tutorials. Light on the actual technical contract — what the SDK does, what the JSON schema looks like, how the message routing works, what the REST API exposes.

Missing entirely: API reference docs, SDK method reference, proper architectural explanation of the metaframe contract.

---

## The Plan

**Target audience:** Scientists and web developers building dashboards, data pipelines, and AI-enabled workflows. Organizations building platforms that embed metapages.

**Tone shift:**
- Before: "Metapages let you connect visualizations and share them instantly!"
- After: "A metaframe is a URL pointing to a web app that uses `@metapages/metapage` to exchange structured data via postMessage."

**Structure principle:** Organize by what you're trying to *do*, not by conceptual category. Builders need: understand it → build a component → integrate it → deploy compute → look up API.

---

## What Was Deleted (20 files removed)

| File | Reason |
|---|---|
| `Concepts/for-developers.mdx` | Marketing copy |
| `Concepts/for-researchers.mdx` | Marketing copy |
| `Concepts/for-organizations-internal-publishing.mdx` | Marketing copy |
| `Concepts/for-organizations-external-publishing.mdx` | Marketing copy |
| `Concepts/fair-principles.mdx` | Wrong venue — belongs on marketing site |
| `Concepts/posi-principles.mdx` | Wrong venue |
| `Concepts/embed-anywhere.mdx` | Notion-specific UI guide, irrelevant for builders |
| `Concepts/embed-metapage.mdx` | Merged into `Build/react-sdk.mdx` |
| `Concepts/embed-metaframe.mdx` | Merged into `Build/react-sdk.mdx` |
| `Concepts/url-structure.mdx` | Trivial — folded into architecture overview |
| `Concepts/file-system.mdx` | UI-focused, low signal for technical users |
| `Concepts/metadata-api-access.mdx` | Folded into `Libraries/rest-api.mdx` |
| `Concepts/what-is-a-metaframe.mdx` | Merged into `Concepts/how-metapages-work.mdx` |
| `Concepts/embed.mdx` | Rewritten as `Build/embed.mdx` |
| `Concepts/websocket-streaming.mdx` | Rewritten as `Build/websocket.mdx` |
| `Concepts/inject-url-parameters.mdx` | Rewritten as `Build/url-parameters.mdx` |
| `Help/embedding.mdx` | Screenshots only, no text |
| `Help/make-public.mdx` | Screenshots only, no text |
| `Help/resizing-and-moving.mdx` | UI fluff |
| `Help/Roadmap.mdx` | Just a GitHub link |
| `Getting-Started/your-first-metapage.mdx` | 300-line UI walkthrough |
| `Getting-Started/python-container-walkthrough.mdx` | UI walkthrough |
| `Getting-Started/getting-started.mdx` | Replaced with quickstart |
| `Libraries,-Tools,-APIs/npm-modules.mdx` | Just a list of links |
| `Libraries,-Tools,-APIs/npm-metapage.mdx` | Redundant navigation page |
| `Libraries,-Tools,-APIs/open-source-metapage-core.mdx` | Rewritten as `Build/javascript-sdk.mdx` |
| `Libraries,-Tools,-APIs/open-source-metapage-react.mdx` | Rewritten as `Build/react-sdk.mdx` |
| `Examples/Dashboards.mdx` | Iframe only, no code |
| `Examples/drug-discovery.mdx` | Iframe only, no code |
| `Examples/example-machine-learning.mdx` | Iframe only, no code |
| `Examples/any-visualization-library.mdx` | Rewritten as `Examples/multi-tool-workflow.mdx` |
| `Examples/working-with-docker-metaframes.mdx` | UI-heavy tutorial |
| `Examples/examples.mdx` | Index page only |
| `Creating/_category_.json` | Empty directory |

---

## Current Structure (25 files)

```
docs/
├── Introduction.mdx                        ← Concise technical intro, navigation table
│
├── Getting-Started/
│   └── getting-started.mdx                 ← Quickstart: vanilla JS, React, CDN (slug: /quickstart)
│
├── Concepts/                               ← Sidebar label: "Architecture"
│   ├── how-metapages-work.mdx              ← Metaframes, routing, security, URL structure (slug: /architecture-overview)
│   └── connect-inputs-outputs.mdx          ← Glob patterns, input mapping, data types (slug: /data-flow)
│
├── Build/                                  ← NEW section
│   ├── javascript-sdk.mdx                  ← renderMetapage(), MetaframeClient, install
│   ├── react-sdk.mdx                       ← MetapageGridLayoutFromDefinition, MetaframeStandaloneComponent
│   ├── docker-containers.mdx               ← Container env vars, I/O, caching, security
│   ├── url-parameters.mdx                  ← _param_ substitution, JS + container usage
│   ├── embed.mdx                           ← Vanilla JS + CDN embedding, security model
│   └── websocket.mdx                       ← Broadcast channel, JS + Python examples
│
├── Containers/                             ← Sidebar label: "Deploy"
│   ├── containers.mdx                      ← Overview: public/private queues, worker modes
│   ├── container-local-mode.mdx            ← Local mode setup (no screenshots)
│   ├── container-remote-mode.mdx           ← Remote mode setup (no screenshots)
│   ├── container-provider-flyio.mdx        ← Fly.io deploy + autoscale (kept, already good)
│   ├── container-cli-reference.mdx         ← All env vars and CLI flags in one table
│   ├── git-refs-in-urls.mdx                ← Hard-code or URL-param git refs
│   └── Errors/
│       └── error-missing-git-sha.mdx       ← Kept as-is
│
├── Libraries,-Tools,-APIs/                 ← Sidebar label: "Reference"
│   ├── metapage-json.mdx                   ← Full schema with TypeScript types + annotated example
│   ├── rest-api.mdx                        ← STUB: REST endpoints, metrics API
│   ├── metapage-sdk.mdx                    ← STUB: renderMetapage, Metapage class, types
│   └── metaframe-sdk.mdx                   ← STUB: MetaframeClient full API
│
├── Examples/
│   ├── scientific-dashboard.mdx            ← Python/matplotlib pipeline with real code
│   ├── ai-pipeline.mdx                     ← STUB: LLM pipeline architecture sketched
│   └── multi-tool-workflow.mdx             ← Fan-out to multiple visualization libraries
│
└── Help/                                   ← Sidebar label: "Troubleshooting"
    └── troubleshooting.mdx                 ← Common errors with diagnostic steps
```

---

## What Still Needs Work

### High priority: API stubs

These three files exist as placeholders. They need real content pulled from the source code:

- **`Libraries,-Tools,-APIs/rest-api.mdx`** — Full REST API for job submission, queue management, metapage fetching. The queue metrics endpoint (`/<queueId>/metrics`) and job submission via POST are undocumented.

- **`Libraries,-Tools,-APIs/metapage-sdk.mdx`** — Full `renderMetapage()` options, `Metapage` class methods, all TypeScript types. Source: [`metapages/metapage`](https://github.com/metapages/metapage)

- **`Libraries,-Tools,-APIs/metaframe-sdk.mdx`** — Full `MetaframeClient` API, all supported data types, lifecycle. Source: same repo.

### Medium priority

- **`Examples/ai-pipeline.mdx`** — Architecture is sketched. Needs a real working example with a specific LLM tool (Ollama, vllm, or similar).

- **`Containers/container-provider-flyio.mdx`** — Content is accurate and technical, but has some conversational "Alright, what is this TOML doing?" sections that could be tightened.

- **`Build/react-sdk.mdx`** — React hook documentation is incomplete (the `@metapages/metapage-react` hooks like `useMetaframe`, `useMetapage` are not documented). Waiting on upstream docs from the library.

### Decided against (and why)

- **Images/screenshots** — Removed. They go stale, don't help technical readers, and the UI is self-explanatory for this audience.

- **FAIR/POSI principles** — Belong on a marketing or about page, not in developer docs.

- **Tutorial-style walkthroughs** — Replaced with code-first examples. Builders read code, not step-by-step instructions.

- **Separate audience persona pages** — One doc set, one audience. If someone needs hand-holding, the quickstart and examples are sufficient entry points.

---

## Key Technical Facts (for writing future docs)

```
Core npm:    @metapages/metapage
React npm:   @metapages/metapage-grid-react
             @metapages/metapage-react
Container:   container.mtfm.io
Queue API:   container.mtfm.io

renderMetapage({ definition, rootDiv, onOutputs, options }) → { setInputs, dispose }

Container I/O:  /inputs/  (files in)  /outputs/  (files out)
JS I/O:         setOutput(name, val) / onInputs = (inputs) => {}
Cache:          $JOB_CACHE  (shared per worker, not guaranteed persistent)
WebSocket:      injected as WEBSOCKET_URL env var (containers) or _websocket_url_ input (JS frames)
URL params:     _param_ placeholders in metaframe URLs substituted from metapage URL params
```

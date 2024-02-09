# just docs: https://github.com/casey/just
###########################################################################
set shell                           := ["bash", "-c"]
set dotenv-load                     := true
set export                          := true
###########################################################################
# Generic configuration
###########################################################################
# Using non-default because nhost apps also defualt to 3000
DOCUSAURUS_PORT                     := env_var_or_default("DOCUSAURUS_PORT", "3010")
APP_HREF                            := env_var_or_default("APP_HREF", "https://app.metapage.io")
###########################################################################
# Building docs from notion
###########################################################################
NOTION_TOKEN                        := env_var_or_default("NOTION_TOKEN", "")
NOTION_DOCUMENT_ROOT                := env_var_or_default("NOTION_DOCUMENT_ROOT", "")
NOTION_BLOG_ROOT                    := env_var_or_default("NOTION_BLOG_ROOT", "")
# This package is patched to reduce the rate limit
DOCU_NOTION                         := "node node_modules/@sillsdev/docu-notion/dist/index.js"
###########################################################################
# Formatting
###########################################################################
bold                               := '\033[1m'
normal                             := '\033[0m'
green                              := "\\e[32m"
yellow                             := "\\e[33m"
blue                               := "\\e[34m"
magenta                            := "\\e[35m"
grey                               := "\\e[90m"

###########################################################################
# Begin commands
###########################################################################
_help:
    #!/usr/bin/env bash
    echo ""
    just --list --unsorted --list-heading $'📚 Commands for metapage docs:\n'
    echo -e "   {{green}}NOTION_DOCUMENT_ROOT=${NOTION_DOCUMENT_ROOT}{{normal}}"
    echo -e "   {{green}}NOTION_BLOG_ROOT={{NOTION_BLOG_ROOT}}{{normal}}"

# Run the dev server
dev: _install
    APP_HREF={{APP_HREF}} \
        pnpm run start --port {{DOCUSAURUS_PORT}}

# build documentation
build: _ensure_npm_modules docs blog _build

# Build blog from notion https://github.com/sillsdev/docu-notion
@blog: && (_rename_md_mdx "blog") (_highlight_self_in_mermaid "blog") (_truncate_after_END_PAGE "blog")
    echo "Generating blog..."
    rm -rf blog/*
    {{DOCU_NOTION}} --log-level debug --notion-token {{NOTION_TOKEN}} --root-page {{NOTION_BLOG_ROOT}} --status-tag '*' --markdown-output-path $(pwd)/blog
    echo "👍 blog generated"

# Generate docs from notion https://github.com/sillsdev/docu-notion 
@docs: && (_rename_md_mdx "docs") (_highlight_self_in_mermaid "docs") (_truncate_after_END_PAGE "docs")
    echo "Generating docs..."
    rm -rf docs/*
    {{DOCU_NOTION}} --log-level debug --notion-token {{NOTION_TOKEN}} --root-page {{NOTION_DOCUMENT_ROOT}} --status-tag '*' --markdown-output-path $(pwd)/docs
    echo "👍 docs generated"

serve: build
    npm run serve

# Open the docs in the browser
open:
    deno run --allow-all --unstable https://deno.land/x/metapages@v0.0.17/exec/open_url.ts https://metapages.github.io/load-page-when-available/?url=https://localhost:3000

_build:
    APP_HREF={{APP_HREF}} \
        pnpm run build

_install +args="":
    pnpm i {{args}}

@_ensure_npm_modules:
    if [ ! -d node_modules ]; then pnpm i; fi

@_rename_md_mdx dir:
    find {{dir}} -iname '*.md' -exec bash -c 'mv -- "$1" "${1%.md}.mdx"' bash {} \; 
    echo "👍 renamed .md -> .mdx"

# If the document is linked in a mermaid diagram, apply a class to the element
_highlight_self_in_mermaid path:
    #!/usr/bin/env -S deno run --ext=ts --allow-read={{justfile_directory()}} --allow-write={{justfile_directory()}}
    import { highlightSelfInMermaidDiagramsAll } from "https://raw.githubusercontent.com/dionjwa/dionjwa.github.io/master/post-processing-scripts/mod.ts";
    console.log("starting highlighted mermaid self {{path}}...")
    await highlightSelfInMermaidDiagramsAll({ path: "{{path}}"});
    console.log("👍 highlighted mermaid self {{path}}")

# Truncate markdown files after END PAGE
_truncate_after_END_PAGE path:
    #!/usr/bin/env -S deno run  --ext=ts --allow-read={{justfile_directory()}} --allow-write={{justfile_directory()}}
    import { walk } from 'https://deno.land/std@0.182.0/fs/mod.ts';
    console.log("Begin truncated markdown files after END PAGE...")
    const path = "{{path}}";
    const regex = /([Ee][Nn][Dd]\s?[Pp][Aa][Gg][Ee])/;
    async function truncateAfterRegex(filePath: string, regex: RegExp) {
        regex.lastIndex = 0;
        try {
            // Read the file content
            const decoder = new TextDecoder('utf-8');
            const data = await Deno.readFile(filePath);
            const content = decoder.decode(data);

            // Find the match and its index
            const match = content.match(regex);
            if (match) {
                const index = match.index || 0;
                const truncatedContent = content.substring(0, index);
    
                // Write the truncated content back to the file
                const encoder = new TextEncoder();
                await Deno.writeFile(filePath, encoder.encode(truncatedContent));
                console.log('File truncated successfully.');
            } else {
                console.log('No match found. File was not modified.');
            }
        } catch (error) {
            console.error('Error truncating file:', error);
        }
    }
    
    const st = await Deno.stat(path);
    if (st.isFile) {
        truncateAfterRegex(path, regex);
        Deno.exit(0);
    }

    for await (
        const e of walk(path, {
            includeDirs: false,
            exts: [".md", ".mdx"],
        })
    ) {
        if (e.isFile) {
            truncateAfterRegex(e.path, regex);
        }
    }
    console.log("👍 truncated markdown files after END PAGE")
    Deno.exit(0);

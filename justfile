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
APP_HREF                            := env_var_or_default("APP_HREF", "https://metapage.io")
###########################################################################
# Building docs from notion
###########################################################################
NOTION_TOKEN                        := env_var_or_default("NOTION_TOKEN", "")
NOTION_DOCUMENT_ROOT                := env_var_or_default("NOTION_DOCUMENT_ROOT", "")
NOTION_BLOG_ROOT                    := env_var_or_default("NOTION_BLOG_ROOT", "")
# This package is patched to reduce the rate limit
DOCU_NOTION                         := "node node_modules/@sillsdev/docu-notion/dist/index.js"
# NPM                                 := "npx --yes pnpm"
NPM                                 := "npm"
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
    echo -e ""
    echo -e "       Deployed site: {{green}}https://docs.metapage.io/{{normal}}"
    echo -e "       github repo:   {{green}}https://github.com/metapages/docs.metapage.io{{normal}}"
    echo -e ""
    echo -e "       {{green}}NOTION_DOCUMENT_ROOT=${NOTION_DOCUMENT_ROOT}{{normal}}"
    echo -e "       {{green}}NOTION_BLOG_ROOT={{NOTION_BLOG_ROOT}}{{normal}}"

# Run the dev server (docs and blog are NOT generated from notion)
dev: _install
    APP_HREF={{APP_HREF}} npx docusaurus start --port {{DOCUSAURUS_PORT}}

# Build documentation (docs and blog from notion)
build: _ensure_npm_modules docs blog _build

# Concatenate all blog and docs posts into a single file, for LLMs
@concat-all file="all-for-llms.md":
    rm -rf {{file}}
    find docs/ -type f -name "*.mdx" -exec cat {} + >> {{file}}
    find blog/ -type f -name "*.mdx" -exec cat {} + >> {{file}}
    echo "👍 {{file}} generated"


# Generate blog from notion https://github.com/sillsdev/docu-notion
@blog: _ensure_npm_modules && (_rename_md_mdx "blog") (_highlight_self_in_mermaid "blog") (_truncate_after_END_PAGE "blog") (_remove-right-navigation-selected "blog")  (_replace_img_with_markdown "blog") (_fix_p_closing_tag "blog")
    echo "Generating blog..."
    rm -rf blog/*
    {{DOCU_NOTION}} --log-level debug --notion-token {{NOTION_TOKEN}} --root-page {{NOTION_BLOG_ROOT}} --status-tag 'Publish' --markdown-output-path $(pwd)/blog
    cp src/authors.yml blog/
    echo "👍 blog generated"
  
# Generate docs from notion https://github.com/sillsdev/docu-notion 
docs: _ensure_npm_modules && (_rename_md_mdx "docs") (_highlight_self_in_mermaid "docs") (_truncate_after_END_PAGE "docs")  (_replace_img_with_markdown "docs") (_fix_p_closing_tag "docs")
    #!/usr/bin/env bash
    echo "Generating docs..."
    rm -rf docs/*
    {{DOCU_NOTION}} --log-level debug --notion-token {{NOTION_TOKEN}} --root-page {{NOTION_DOCUMENT_ROOT}} --status-tag 'Publish' --markdown-output-path $(pwd)/docs
    cat > docs/summary-llm.mdx << EOF
    ---
    title: LLM summary
    slug: /llm-summary
    hide_table_of_contents: true
    ---
    EOF
    cat summary-llm.md >> docs/summary-llm.mdx
    echo "👍 docs generated"

# Build docs and blog from notion, then serve
serve: build _serve

_serve: open
    npm run serve

# Open the docs in the browser
open:
    deno run --allow-all https://deno.land/x/metapages@v0.0.17/exec/open_url.ts https://metapages.github.io/load-page-when-available/?url=https://localhost:3000

# Delete all generated files, node_modules, caches, build directories
clean:
    rm -rf docs/* blog/*
    rm -rf node_modules
    rm -rf .docusaurus .cache-loader
    rm -rf build

_build:
    APP_HREF={{APP_HREF}} \
        {{NPM}} run build

_install +args="":
    {{NPM}} i {{args}}

@_ensure_npm_modules:
    if [ ! -d node_modules ]; then {{NPM}} i; fi

@_rename_md_mdx dir:
    find {{dir}} -iname '*.md' -exec bash -c 'mv -- "$1" "${1%.md}.mdx"' bash {} \; 
    echo "👍 renamed .md -> .mdx"

# If the document is linked in a mermaid diagram, apply a class to the element
_highlight_self_in_mermaid path:
    #!/usr/bin/env -S deno run --ext=ts --allow-read={{justfile_directory()}} --allow-write={{justfile_directory()}}
    import { highlightSelfInMermaidDiagramsAll } from "https://raw.githubusercontent.com/dionjwa/dionjwa.github.io/f85eb37a/post-processing-scripts/mod.ts";
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
                console.log("  ✂️ after END PAGE truncated: " + filePath);
            }
        } catch (error) {
            console.error('Error truncating file:', error);
        }
    }
    
    const st = await Deno.stat(path);
    if (st.isFile) {
        await truncateAfterRegex(path, regex);
        Deno.exit(0);
    }

    for await (
        const e of walk(path, {
            includeDirs: false,
            exts: [".md", ".mdx"],
        })
    ) {
        if (e.isFile) {
            await truncateAfterRegex(e.path, regex);
        }
    }
    console.log("👍 truncated markdown files after END PAGE")
    Deno.exit(0);

# Replace HTML img tags with markdown image syntax
_replace_img_with_markdown path:
    #!/usr/bin/env -S deno run  --ext=ts --allow-read={{justfile_directory()}} --allow-write={{justfile_directory()}}
    import { walk } from 'https://deno.land/std@0.182.0/fs/mod.ts';
    console.log("Begin replacing img with markdown...")
    const path = "{{path}}";
    const regex = /<img[^>]*?\balt\s*=\s*(['"])([^'"]*)\1[^>]*?\bsrc\s*=\s*(['"])([^'"]*)\3[^>]*>|<img[^>]*?\bsrc\s*=\s*(['"])([^'"]*)\5[^>]*?\balt\s*=\s*(['"])([^'"]*)\7[^>]*>|<img[^>]*?\bsrc\s*=\s*(['"])([^'"]*)\9[^>]*>/mg;
    async function replaceImgWithMarkdown(filePath: string, regex: RegExp) {
        regex.lastIndex = 0;
        try {
            // Read the file content
            const decoder = new TextDecoder('utf-8');
            const data = await Deno.readFile(filePath);
            const content = decoder.decode(data);

            // Replace all img tags with markdown format
            const newContent = content.replaceAll(regex, (match, q1, alt1, q2, src1, q3, src2, q4, alt2, q5, src3) => {
                const alt = alt1 || alt2 || '';
                const src = src1 || src2 || src3;
                if (alt.startsWith("http")) {
                    return `\n[![](${src})](${alt})\n`;
                } else {
                    return `\n![${alt}](${src})\n`;
                }
            });

            if (content !== newContent) {
                // Write the modified content back to the file
                const encoder = new TextEncoder();
                await Deno.writeFile(filePath, encoder.encode(newContent));
                console.log(`  🔄 replaced img tags in: ${filePath}`);
            }
        } catch (error) {
            console.error('Error truncating file:', error);
        }
    }

    const st = await Deno.stat(path);
    if (st.isFile) {
        await truncateAfterRegex(path, regex);
        Deno.exit(0);
    }

    for await (
        const e of walk(path, {
            includeDirs: false,
            exts: [".md", ".mdx"],
        })
    ) {
        if (e.isFile) {
            await replaceImgWithMarkdown(e.path, regex);
        }
    }
    console.log("👍 truncated markdown files after END PAGE")
    Deno.exit(0);


# Fix <p> closing tag bug, this should go elsewhere
@_fix_p_closing_tag path:
    # ensure <p> tags are on a newline
    find {{path}}/ -type f -name '*.mdx' -exec sd '([^\\n])<p>' '\n<p>' {} +
    # ensure <p> tags are on their own line
    find {{path}}/ -type f -name '*.mdx' -exec sd '<p>([^\\n])' '<p>\n' {} +
    # ensure </p> tags are on a newline
    find {{path}}/ -type f -name '*.mdx' -exec sd '([^\\n])</p>' '\n</p>' {} +
    # ensure </p> tags are on their own line
    find {{path}}/ -type f -name '*.mdx' -exec sd '</p>([^\\n])' '</p>\n' {} +
    

_remove-right-navigation-selected path:
    #!/usr/bin/env -S deno run --allow-read={{justfile_directory()}} --allow-write={{justfile_directory()}}
    import { applyFrontMatterModificationToAll, hideTableOfContents } from "https://raw.githubusercontent.com/dionjwa/dionjwa.github.io/f85eb37a/post-processing-scripts/mod.ts";
    await applyFrontMatterModificationToAll({ path: "{{path}}", f: (frontMatter) => {
        return hideTableOfContents(frontMatter);
    }});
    console.log("👍 removed right navigation from {{path}}")


@summarize-for-llm:
    claude -p "create a compressed, LLM-optimized summary of this  application. the documenation and blogs are located in the docs and blog directory. Get all markdown (md and mdx) files, generate the one or two page summary. For each topic, write a paragraph or two. ALthough it is a summary, it should be comprehensive and cover all topics" > summary.md
    cat summary-llm.md

    
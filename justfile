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

# build documentation. TODO: automate notion, but cannot until docu-notion mermaid is fixed
build: _ensure_npm_modules blog docs _build

# Build blog from notion https://github.com/sillsdev/docu-notion
blog: && (_rename_md_mdx "blog")
    npx @sillsdev/docu-notion@0.14.0-alpha.3 --log-level debug -n {{NOTION_TOKEN}} -r {{NOTION_BLOG_ROOT}} --status-tag '*' --markdown-output-path $(pwd)/blog

# Generate docs from notion https://github.com/sillsdev/docu-notion
docs: && (_rename_md_mdx "docs")
    npx @sillsdev/docu-notion@0.14.0-alpha.3 --log-level debug -n {{NOTION_TOKEN}} -r {{NOTION_DOCUMENT_ROOT}} --status-tag '*' --markdown-output-path $(pwd)/docs

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

# just docs: https://github.com/casey/just
###########################################################################
# just configuration
###########################################################################
set shell                           := ["bash", "-c"]
set dotenv-load                     := true
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
DOCU_NOTION_COMMAND                 := env_var_or_default("DOCU_NOTION_COMMAND", "npx docu-notion")
DOCU_NOTION_PATH                    := env_var_or_default("DOCU_NOTION_PATH", "")
###########################################################################
# Deno: change this to edit deno source: TODO: reference how to do this
###########################################################################
# Source for deno scripts (backbone of this application)
export DENO_SOURCE                  := env_var_or_default("DENO_SOURCE", "https://deno.land/x/metapages@v0.0.17")
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

dev: install
    APP_HREF={{APP_HREF}} \
        pnpm run start --port {{DOCUSAURUS_PORT}}

# build documentation. TODO: automate notion, but cannot until docu-notion mermaid is fixed
build: _ensure_npm_modules
    APP_HREF={{APP_HREF}} \
        pnpm run build

# Build docs from notion https://github.com/sillsdev/docu-notion
notion:
    {{DOCU_NOTION_COMMAND}} --notion-token {{NOTION_TOKEN}} --root-page {{NOTION_DOCUMENT_ROOT}} --markdown-output-path $(pwd)/blog --mermaid-slug-prefix blog

install +args="":
    pnpm i {{args}}

open:
    deno run --allow-all --unstable https://deno.land/x/metapages@v0.0.17/exec/open_url.ts https://metapages.github.io/load-page-when-available/?url=https://localhost:3000

# https://docusaurus.io/docs/
docs:
    deno run --allow-all --unstable https://deno.land/x/metapages@v0.0.17/exec/open_url.ts https://docusaurus.io/docs/

# special one-off command to rebuild notion blog based on docu-notion being rebuilt: requires special mermaid modifications
watch-and-rebuild-notion-blog:
    watchexec -w {{DOCU_NOTION_PATH}}/dist/index.js -- just notion

@_ensure_npm_modules:
    if [ ! -d node_modules ]; then pnpm i; fi

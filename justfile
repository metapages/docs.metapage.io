# just docs: https://github.com/casey/just
###########################################################################
# just configuration
###########################################################################
set shell                           := ["bash", "-c"]
set dotenv-load                     := true
###########################################################################
# Generic configuration
###########################################################################

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

dev:
    pnpm run start

build:
    pnpm run build

open:
    deno run --allow-all --unstable https://deno.land/x/metapages@v0.0.17/exec/open_url.ts https://metapages.github.io/load-page-when-available/?url=https://localhost:3000

# https://docusaurus.io/docs/
docs:
    deno run --allow-all --unstable https://deno.land/x/metapages@v0.0.17/exec/open_url.ts https://docusaurus.io/docs/

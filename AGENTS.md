# TS-Assert AI Router

Use this file as the thin routing entry point for TS-Assert tasks.

The maintained router lives at:
- `@24vlh/agents/agents-repo/ts-assert/AGENTS.md`

Load the maintained router for actual routing, source-of-truth files, and validation commands.
Do not duplicate the full router here.

## Path alias

- `@24vlh` => Windows `W:/public_html/24vlh`
- `@24vlh` => WSL `/mnt/w/public_html/24vlh`

## Project root reference

- `@24vlh/ts-assert`

## Command execution policy (WSL-first, mandatory)

- Run commands through WSL shell:
  - `wsl sh -lc "cd /mnt/w/public_html/24vlh/ts-assert && <command>"`

## Routing

- Maintained router:
  - `@24vlh/agents/agents-repo/ts-assert/AGENTS.md`
- Emit:
  - `Routing: ts-assert + @24vlh/agents/agents-repo/ts-assert/AGENTS.md [+ other routers]`

# AGENTS.md

Orientações para agentes de IA ao trabalhar neste repositório.

## Sobre o projeto

**clone-tabnews-ia** é uma implementação do [TabNews](https://tabnews.com.br) para o [curso.dev](https://curso.dev), desenvolvida com o auxílio de agentes de IA.

## Stack

- Next.js (App Router)
- React

As versões exatas das dependências estão no `package.json`.

## Estrutura

```
app/            # rotas e páginas (Next.js App Router)
  layout.js     # layout raiz
  page.js       # página inicial
  globals.css   # estilos globais
AGENTS.md       # orientações para agentes de IA
CLAUDE.md       # importa o AGENTS.md
package.json    # dependências e scripts npm
```

## Comandos

```bash
npm run dev    # servidor de desenvolvimento
npm run build  # build de produção
npm run start  # servir o build de produção
```


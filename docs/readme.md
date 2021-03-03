# NightTab Docs WIP

Target readers of this doc are contributors and anyone wondering how NT works. This doc assumes you at least are familiar with how react works and how projects using it are generally structured.

Table of Contents:

- [Intro](readme.md) (You are Here)
- [Project Structure](readme.md#project-structure)
  - [Component Barreling](readme.md#component-barreling)
  - [Absolute Imports](readme.md#absolute-imports)
- [Tools Used](readme.md#tools-used)
  - [Linting](readme.md#linting)
  - [Boiletplates](readme.md#boilerplates)
  - [Recommended vscode extensions](readme.md#recommended-vscode-extensions)
- [Deployment (CI/CD)](readme.md#deployment)


This project was bootstrapped with [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html).

## Project Structure

```bash
.
├── .github        # Github pages build workflow
├── .vscode        # Shared snippets and other vscode settings
├── docs           # 
│   └── readme.md  # You are Here
├── public         # static assets
└── src            # 
    ├── app        # Main component / app entry point
    ├── components # 
    ├── contexts   # 
    ├── hooks      # 
    ├── lib        # 
    ├── styles     # Reusable styled components & css mixins/helpers
    └── types      # 
```

> NB: `src/index.tsx` currently has context providers but those should be moved to `src/app/index.tsx`. `src/index.tsx` should solely be a dependency for create-react-app's webpack config. Should this project ever eject, `src/index.tsx` should be deleted.

### Component Barreling

This project uses component barreling which uses named exports and index.ts files for re-exporting for folders.

For more info see [Typescript Deep Dive - Barrel](https://basarat.gitbook.io/typescript/main-1/barrel) as a reference and `src/components/index.ts` as an example of this in action.

### Absolute Imports

This project also uses absolute imports starting from src. No more nonsense e.g. `import xyz from '../../components/xyz'` instead we elegantly use `import {xyz} from 'components'`

## Tools Used

### Linting:
- Prettier #TODO
- Eslint #TODO also checkout standardjs's eslint configs

### Boiletplates:
- Vscode snippets e.g.
  - `rfc` (React Function Component)
  - `rcp` (React Context Provider)
- Plop/other code generator #TODO

### Recommended vscode extensions
- Styled components syntax highlighting [[link](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)]
- TODO Tree, for highlighting TODO [[link](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)]
- Alphabetical sorter, required for component barreling index files 

## Deployment

Currently the project uses github pages to deploy a preview build. Following this guide [Deploy a React App to Github Pages](https://zanca.dev/blog/continuos-deployment-of-a-static-site-to-github-pages/)

Once this version of nighttab (NTv7) matures and replaces NTv6.x we will start using Netlify for hosting both the docs generated from the `/docs` folder and the web version of NT. We will also use Netlify to build and deploy the extension on the chrome and firefox stores.

We will be using netlify over github as github only allows 1 deployment of github pages per repository where as netlify allows multiple. [Vercel Now](https://vercel.com/) is also a good option. Both integrate well with github and both do not cause any platform lock in since they're both git-based solutions.

> This section will be expanded in the future.
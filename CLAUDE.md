# PrepADoc

Outil open-source de préparation de documents pour LLM.
100% local, aucune donnée ne sort de la machine.

## Stack

- Next.js 16.2.5 App Router (pin exact, sans ^)
- React 19.2 / TypeScript strict / Tailwind CSS v4
- Presidio via Docker — analyzer: localhost:5002 | anonymizer: localhost:5001
- Faker.js v10 locale fr — remplacements cohérents via FakerMapper
- pnpm / Node.js 22 LTS

> ⚠️ Sécurité : versions Next.js 16.0.0–16.0.9 vulnérables (CVE-2025-66478 RCE, CVSS 10.0).
> Toujours rester sur 16.2.5 minimum. Configurer Dependabot sur la lignée 16.2.x.

## Documentation Next.js

La doc complète est bundlée dans node_modules/next/dist/docs/.
Lire le fichier pertinent avant toute implémentation Next.js.
Voir aussi AGENTS.md à la racine.

## Architecture moteur anonymisation

- V1 : Presidio uniquement
- V2 : choix Presidio / Transformers.js
- Interface AnonymizerEngine commune à respecter dès V1

## Conventions

- Server Components par défaut
- Client Components uniquement si interactivité ("use client")
- Un extracteur par format dans lib/extractors/
- Interface commune extracteurs : (file: File) => Promise<string>
- FakerMapper : même entité = même remplaçant dans tout le document
- Tailwind v4 : config CSS-first via @theme — pas de tailwind.config.js
- Toujours expliquer les décisions techniques avant d'implémenter
- Toujours utiliser `rtk <cmd>` au lieu des commandes brutes (git, pnpm, docker)
- Hook PostToolUse : prettier sur chaque fichier .ts/.tsx modifié

## Commandes

- `next dev` (port 3000)
- `pnpm presidio:up` / `pnpm presidio:down`
- `rtk lint` && `rtk tsc --noEmit` (avant tout commit)

## Vérification

Après toute modification significative :

1. `rtk err pnpm build` — doit être vert avant de continuer
2. `rtk tsc --noEmit` — zéro erreur TypeScript
3. `rtk lint` — zéro erreur ESLint

Ne jamais considérer une tâche terminée sans que `rtk err pnpm build` soit vert.

## Git Conventions

- Conventional Commits : feat:, fix:, docs:, refactor:, chore:
- Subject en anglais, mode impératif, max 72 caractères
- Branches : feature/<short-name> — squash avant merge sur main

## MCP actifs

- context7 : use context7 pour Tailwind v4, shadcn/ui, Faker (PAS pour Next.js)
- next-devtools : lecture erreurs/routes live via le dev server

## Environnement

- Mac Intel (x86_64) — pas de bug mémoire Turbopack (darwin-arm64 uniquement)
- Docker Desktop pour Presidio
- Tester performances sur documents longs

## Auteur

Fabien Clément — fabienclement.dev
En apprentissage Next.js — expliquer chaque choix avant d'implémenter.

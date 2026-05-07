# PrepADoc

Outil open-source de préparation de documents pour LLM.
100% local, aucune donnée ne sort de la machine.

## Stack

- Next.js 16.2.5 (pin sans ^) App Router
- TypeScript strict
- Tailwind CSS v4
- Presidio via Docker (5002 = analyzer, 5001 = anonymizer)
- Faker.js locale fr — remplacements cohérents via FakerMapper
- pnpm (pas npm)
- Node.js 22 LTS

## Architecture moteur anonymisation

- V1 : Presidio uniquement
- V2 : choix Presidio / Transformers.js
- Interface AnonymizerEngine commune à respecter dès V1

## Conventions code

- Server Components par défaut
- Client Components uniquement si interactivité
- Un extracteur par format dans lib/extractors/
- Interface commune extracteurs : (file: File) => Promise<string>
- FakerMapper : même entité = même remplaçant dans tout le document
- Toujours expliquer les décisions techniques avant d'implémenter

## Git Conventions

- Conventional Commits: feat:, fix:, docs:, refactor:, chore:
- Subject in English, imperative mood, max 72 characters
- Branches: feature/<short-name>

## Before each commit

1. `pnpm build` — no commit if build fails
2. `eslint` — fix errors, warnings acceptable
3. `tsc --noEmit` — zero TypeScript errors

## Environnement

- Mac Intel (x86_64)
- Docker Desktop pour Presidio
- Tester performances sur documents longs

## Auteur

Fabien Clément — fabienclement.dev
En apprentissage Next.js — expliquer chaque choix avant d'implémenter.

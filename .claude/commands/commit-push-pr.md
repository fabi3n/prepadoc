# /commit-push-pr

Commit, push et ouvre une PR pour les changements actuels.

## Contexte précalculé

```bash
git status
git diff --stat
git log --oneline -5
```

## Étapes

1. Lis le diff complet (`git diff`) pour comprendre les changements.
2. Propose un commit message qui suit la convention Conventional Commits :
   - `feat(scope): description` pour une nouvelle feature
   - `fix(scope): description` pour un bug fix
   - `refactor(scope): description` pour du refactoring
   - `docs(scope): description` pour de la doc
   - `chore(scope): description` pour de la config/tooling
3. Demande confirmation avant de committer.
4. Une fois confirmé :
   ```bash
   git add -A
   git commit -m "<message>"
   git push origin HEAD
   gh pr create --fill
   ```
5. Affiche l'URL de la PR créée.

## Règles

- Ne jamais committer `.env`, `.env.local`, ou tout fichier contenant des secrets.
- Si des fichiers non liés à la tâche sont modifiés, le signaler avant de committer.
- Si la branche courante est `main`, demander confirmation explicite.

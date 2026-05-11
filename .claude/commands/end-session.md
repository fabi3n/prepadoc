# /end-session

Résume la session de travail et met à jour le journal PrepADoc dans le vault.

## Contexte précalculé

```bash
git diff main --stat
git log --oneline main..HEAD
git status --short
```

## Étapes

1. Lis les fichiers modifiés depuis `main` pour identifier ce qui a été fait.
2. Construis un résumé structuré de la session (voir format ci-dessous).
3. Insère ce résumé dans `~/vault/10-projects/prepadoc/journal.md` :
   - Juste après le commentaire `<!-- Claude ajoute chaque session en haut, sous ce commentaire -->`
   - Met à jour le champ `updated:` dans le frontmatter avec la date du jour.
4. Affiche le résumé dans le terminal pour confirmation.

## Format du résumé à insérer

```markdown
## YYYY-MM-DD — <titre court de la session>

### Ce qui a été fait
- 

### Décisions techniques
- <!-- Expliquer POURQUOI, pas juste QUOI -->

### Fichiers clés modifiés
- `chemin/fichier.ts` — description courte

### Tâches ouvertes
- [ ] 

### Commit suggéré
`type(scope): description`
```

## Règles

- Le titre court de la session doit tenir en moins de 50 caractères.
- Les décisions techniques doivent toujours expliquer le POURQUOI.
- Si aucun fichier n'a été modifié depuis main, le signaler et ne pas créer d'entrée vide.
- Ne jamais supprimer les entrées existantes du journal.
- Mettre à jour `updated:` dans le frontmatter du journal avec la date du jour au format YYYY-MM-DD.

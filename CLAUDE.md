# CLAUDE.md

Static one-page portfolio. Next.js 15 App Router, TypeScript, Tailwind CSS 3. No icon library.

## Commands

```bash
npm run dev    # http://localhost:3000
npm run build
npm run lint
```

## Conventions

- All copy and facts live in `src/data/content.ts`. Keep them in sync with the CV in `public/`.
- Design direction is a Swiss data sheet: 12-column grid, numbered sections, hairline rules, one grotesque (Archivo) plus IBM Plex Mono for dates, labels and stacks. No cards, gradients, shadows or icons.
- Colours are CSS variables in `globals.css` (`--paper`, `--ink`, `--muted`, `--rule`, `--signal`), exposed to Tailwind as `paper`, `ink`, `muted`, `rule`, `signal`. `signal` (red) is for emphasis only: section numbers, current-job marker, link hover, focus ring.
- Work at the employer is described generically: no internal system names, table names or business numbers.
- This is the personal `kandref` GitHub account. Commit as `kandref <kandref@users.noreply.github.com>`.

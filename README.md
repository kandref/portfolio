# Portfolio — Kurnia Andre Febrian

Personal site of a business intelligence developer. Next.js 15 (App Router), TypeScript, Tailwind CSS, deployed on Vercel.

**Live:** [portfolio-kandref.vercel.app](https://portfolio-kandref.vercel.app)

## Layout

One page laid out as a numbered sheet: Now, Experience, Projects, Teaching, Tools, Education, Contact.
Every fact on the page lives in `src/data/content.ts`; edit that file, not the markup.

```
src/
├── app/
│   ├── layout.tsx     # fonts (Archivo + IBM Plex Mono) and metadata
│   ├── page.tsx       # the whole page
│   └── globals.css    # colour tokens, light + dark
├── components/
│   ├── TopBar.tsx     # sticky section index
│   └── Section.tsx    # numbered section row
└── data/
    └── content.ts     # profile, work, projects, talks, tools, education
```

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Author

Kurnia Andre Febrian — [LinkedIn](https://www.linkedin.com/in/kurniaandref6/) · [GitHub](https://github.com/kandref)

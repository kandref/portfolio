# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static personal portfolio website for a Data Analyst, built with Next.js 15, TypeScript, and Tailwind CSS.

## Development Commands

```bash
npm run dev    # Start development server (http://localhost:3000)
npm run build  # Build for production
npm run start  # Start production server
npm run lint   # Run ESLint
```

## Architecture

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **FontAwesome** for icons
- **Google Fonts** (Inter) via next/font

## Project Structure

```
./
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with fonts & metadata
│   │   ├── page.tsx        # Main page (imports all sections)
│   │   └── globals.css     # Tailwind directives + base styles
│   └── components/
│       ├── Hero.tsx        # Profile image, name, CTA buttons
│       ├── About.tsx       # About me paragraph
│       ├── TechStack.tsx   # Tech icons grid
│       ├── Projects.tsx    # Portfolio project cards
│       └── Footer.tsx      # Social links & copyright
├── public/
│   ├── foto-kurnia-andre-f.jpg
│   └── cv-kurnia-andre-febrian.pdf
└── tailwind.config.ts      # Custom theme colors
```

## Theme Colors

Custom colors in `tailwind.config.ts`:
- `bg-dark`: #0d1117
- `bg-card`: #161b22
- `text-main`: #c9d1d9
- `text-muted`: #8b949e
- `accent-blue`: #58a6ff
- `accent-green`: #238636
- `border-color`: #30363d

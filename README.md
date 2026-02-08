# Portfolio — Kurnia Andre Febrian

Personal portfolio website for a Data Analyst, built with Next.js 15, TypeScript, and Tailwind CSS.

**Live:** [portfolio-kandref.vercel.app](https://portfolio-kandref.vercel.app)

## Features

- **Hero** — Profile photo, name, CTA buttons (GitHub & Download CV)
- **About** — Short bio and background
- **Stats** — Key metrics and achievements
- **Experience** — Work experience timeline
- **Education** — Academic background
- **Tech Stack** — Skills and tools (Python, SQL, Power BI, etc.)
- **Certifications** — Professional certifications
- **Speaking** — Public speaking and events
- **Projects** — Portfolio project cards
- **Contact** — Contact form and social links

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 15** | React framework with App Router |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Utility-first styling |
| **FontAwesome** | Icons |
| **Google Fonts (Inter)** | Typography |
| **Vercel** | Deployment & hosting |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Main page (imports all sections)
│   └── globals.css         # Tailwind directives + base styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Profile image, name, CTA buttons
│   ├── About.tsx           # About me section
│   ├── Stats.tsx           # Key metrics
│   ├── Experience.tsx      # Work experience
│   ├── Education.tsx       # Academic background
│   ├── TechStack.tsx       # Skills & tools grid
│   ├── Certifications.tsx  # Certifications list
│   ├── Speaking.tsx        # Speaking engagements
│   ├── Projects.tsx        # Portfolio project cards
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Social links & copyright
└── data/
    └── projects.ts         # Project data
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

## Author

**Kurnia Andre Febrian**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kurnia-andre-febrian/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/kandref)

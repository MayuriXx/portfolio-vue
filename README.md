# portfolio-vue

Online CV / portfolio built with **Vue 3** and **Vite**, deployed on GitHub Pages.  
A pixel-faithful port of the Flutter web portfolio ([portfolio_flutter](https://github.com/MayuriXx/portfolio_flutter)).

**Live →** <https://mayurixx.github.io/portfolio-vue/>

---

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | Vue 3 (Composition API, `<script setup>`) |
| Build tool | Vite 8 |
| Styling | Scoped CSS + global design tokens |
| Data | Static `cv.json` (single source of truth) |
| Deployment | GitHub Actions → GitHub Pages |

---

## Project structure

```text
portfolio-vue/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD: build & deploy to GitHub Pages on push to main
├── public/
│   └── logo-em.svg             # Favicon / brand logo
├── src/
│   ├── assets/
│   │   └── styles/
│   │       └── tokens.css      # Global CSS custom properties (colors, spacing, typography)
│   ├── components/
│   │   ├── CvHeader.vue        # Sticky navigation bar with scroll-spy
│   │   ├── CvHero.vue          # Hero section: title, summary, stat cards, CTA buttons
│   │   ├── CvExperience.vue    # Work experience timeline (section 01)
│   │   ├── CvSkills.vue        # Skill groups grid (section 02)
│   │   ├── CvEducation.vue     # Education cards (section 03)
│   │   ├── CvContact.vue       # Contact section with links (section 04)
│   │   └── CvFooter.vue        # Footer with external links
│   ├── data/
│   │   └── cv.json             # All CV content — edit this file to update the portfolio
│   ├── App.vue                 # Root component, smooth-scroll orchestration
│   └── main.js                 # App entry point
├── index.html
├── vite.config.js
└── package.json
```

---

## Getting started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173/portfolio-vue/)
npm run dev

# Production build (output → dist/)
npm run build

# Preview production build locally
npm run preview
```

---

## Updating the CV content

All personal data lives in **`src/data/cv.json`**. No component needs to be touched.

```jsonc
{
  "profile": {
    "name": "...",       // Displayed in header, hero & footer
    "title": "...",      // Eyebrow label in hero
    "summary": "...",    // Hero description paragraph
    "email": "...",      // Used in CvContact & CvFooter
    "linkedin": "...",   // Used in CvHero & CvContact
    "location": "..."    // Displayed in hero stat card
  },
  "experiences": [...],  // Array → CvExperience
  "skillGroups": [...],  // Array → CvSkills
  "educations": [...],   // Array → CvEducation
  "languages": [...]     // Array → CvContact
}
```

---

## Design tokens

Design variables are centralised in `src/assets/styles/tokens.css`.  
The palette mirrors the Flutter portfolio:

| Token | Value | Usage |
| --- | --- | --- |
| `--accent` | `#6B9080` | Primary green, buttons, highlights |
| `--bg` | `#F6FFF8` | Page background |
| `--surface` | `#FFFFFF` | Cards |
| `--ink` | `#1E2A25` | Main text |
| `--font-display` | Syne | Headings & numbers |
| `--font-body` | Instrument Sans | Body text |

---

## Deployment

Deployment is fully automated via `.github/workflows/deploy.yml`.

**Trigger:** every push to `main`  
**Steps:** checkout → Node 20 setup → `npm ci` → `npm run build` → deploy `dist/` to `gh-pages` branch

> Make sure GitHub Pages is configured to serve from the `gh-pages` branch in your repository settings.

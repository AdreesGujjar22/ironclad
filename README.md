# Ironclad Commercial Floors

Commercial flooring contractor website for Ironclad Commercial Floors, serving Vancouver and the Lower Mainland.

## Tech stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Express development server

## Local development

Prerequisites: Node.js 20 or newer.

```bash
npm install
npm run dev
```

The development server runs on port 3000.

## Production build

```bash
npm run build
npm run start
```

The production build outputs the static client bundle and the bundled server to `dist/`.

## Other commands

```bash
npm run preview
npm run lint
```

## Project structure

- `src/components/` — reusable site and UI components
- `src/pages/` — page-level views
- `src/data/` — services, locations, projects, and testimonials
- `src/assets/` — flooring imagery and other static assets
- `public/` — public files served as-is

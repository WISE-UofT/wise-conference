# WISE UofT Conference Website

Astro + Tailwind CSS codebase for the WISE UofT National Conference site.

## Live Site

- 2026 (Hidden Depths): https://conference.wise.skule.ca/

## Local Development

### Prerequisites

- Node.js 20+
- npm 10+

### Install

```bash
npm install
```

### Start Dev Server

```bash
npm run dev
```

or

```bash
npm run start -- --host 127.0.0.1 --port 4321
```

### Build

```bash
npm run build
```

### Preview Build

```bash
npm run preview
```

## Project Structure

- `src/pages/index.astro`: Main page composition
- `src/components/sections/*.astro`: Homepage sections
- `src/components/navigation/*.astro`: Nav UI components
- `src/layouts/Layout.astro`: Global document shell
- `src/layouts/SectionLayout.astro`: Shared section wrapper
- `src/styles/global.css`: Tailwind import + global base styles
- `src/content/discounts/*.md`: Discount content entries
- `src/content.config.ts`: Astro content collection config
- `public/`: Static public assets (favicons, hero image, etc.)
- `img/`: Conference media assets used by Astro components

## Migration Notes

- Legacy static HTML entrypoint and jQuery-era bundles have been removed from active usage.
- Styling is Tailwind-first with minimal global CSS.
- Sections are now componentized in Astro for maintainability and reuse.
- Discounts are rendered from Astro content collections instead of page-level hardcoding.

## Team Workflow Notes

- Do not commit `node_modules`, `dist`, or `.astro` generated artifacts.
- If local build tooling behaves unexpectedly, run:

```bash
rm -rf node_modules package-lock.json
npm install
```

- Keep section content updates localized to the matching section component or content entry.

## Past Conference Links

- 2025 (Reaching for the Stars)
- 2024 (Endless Exploration)
- 2023 (Leaders of Tomorrow)
- 2022 (Above and Beyond)
- 2021 (Connections Together from Afar): https://wise-conference-2021.netlify.app/
- 2020 (Lead without Limits): https://wise-conference-2020.netlify.app/
- 2019 (Catalysts for Change): https://wiseuoft.wixsite.com/conference

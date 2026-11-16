# WISE UofT Conference Website

Astro + Tailwind CSS codebase for the WISE UofT National Conference site.

## Live Site

- Current Astro site: https://conference.wise.skule.ca/
- Archived 2026 site: https://conference.wise.skule.ca/2026/

## Local Development

### Prerequisites

- Node.js 22.23.4+
- npm 10+

### Install

```bash
npm ci
```

### Start Dev Server

Preferred command:

```bash
npm run dev
```

Optional host/port customization (recommended pattern):

```bash
npm run dev -- --host 127.0.0.1 --port 4321
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
- `src/components/ui/*.astro`: Shared navigation and interactive UI
- `src/layouts/Layout.astro`: Global document shell
- `src/layouts/SectionLayout.astro`: Shared section wrapper
- `src/styles/global.css`: Tailwind import + global base styles
- `src/content/**/*.json`: Editable conference content
- `src/assets/`: Images processed and optimized by Astro
- `public/`: Static files copied directly into the build
- `public/2026/`: Frozen copy of the pre-Astro 2026 website

## Updating Content

Most content can be updated by editing the matching JSON file. Items appear in the same order as their entries in each JSON array.

- Speakers and panels: `src/content/speakers`
- Workshops: `src/content/workshops`
- Competitions: `src/content/competitions`
- Schedule: `src/content/schedule/schedule-content.json`
- Team: `src/content/team/2026.json`
- Sponsors: `src/content/sponsors/sponsors.json`
- Discounts: `src/content/discounts`
- FAQs: `src/content/faqs/faqs-content.json`
- Conference recaps: `src/content/recap`

Speaker, workshop, and competition overview files identify the corresponding detail file with a `dataSource` or `speakerDataSource` value. Keep that value aligned with the detail filename when adding or renaming an item.

Store site images in the matching folder under `src/assets`. Keep JSON punctuation valid: use double quotes, separate entries with commas, and do not add a comma after the last entry.

### Archived 2026 Site

The original pre-Astro site is preserved in `public/2026` and served at `/2026/`. Its HTML, CSS, JavaScript, libraries, and images are intentionally self-contained.

- The current navbar links to `/2026/`.
- The archived WISE logo links back to `/`.
- `/2026` redirects to `/2026/` so relative legacy assets load correctly.
- Avoid changing the archive unless correcting the historical copy.

## Team Workflow Notes

- Do not commit `node_modules`, `dist`, or `.astro` generated artifacts.
- Use `npm ci` for a clean, reproducible dependency install.
- Before committing, verify the production build:

```bash
npm run build
```

- Keep normal copy and lineup updates in `src/content`. Edit Astro components only when changing layout or behaviour.

## Past Conference Links

- 2026 (Hidden Depths): https://conference.wise.skule.ca/2026/
- 2025 (Reaching for the Stars)
- 2024 (Endless Exploration)
- 2023 (Leaders of Tomorrow)
- 2022 (Above and Beyond)
- 2021 (Connections Together from Afar): https://wise-conference-2021.netlify.app/
- 2020 (Lead without Limits): https://wise-conference-2020.netlify.app/
- 2019 (Catalysts for Change): https://wiseuoft.wixsite.com/conference

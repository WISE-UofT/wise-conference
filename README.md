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

Preferred command:

```bash
npm run dev
```

Optional host/port customization (recommended pattern):

```bash
npm run dev -- --host 127.0.0.1 --port 4321
```

Notes:

- `npm run start` is currently an alias to the same Astro dev server command and is kept for compatibility.
- Use `npm run dev` for day-to-day local development to keep team usage consistent.

### Build

```bash
npm run build
```

### Validate Content and Types

```bash
npm run check
```

### Preview Build

```bash
npm run preview
```

## Project Structure

- `src/pages/index.astro`: Main page composition
- `src/components/sections/*.astro`: Homepage sections
- `src/components/ui/*.astro`: Shared navigation and interactive UI components
- `src/layouts/Layout.astro`: Global document shell
- `src/layouts/SectionLayout.astro`: Shared section wrapper
- `src/styles/global.css`: Tailwind import + global base styles
- `src/content/**/*.json`: Validated content collection source data
- `src/content.config.ts`: Astro content collection loaders and schemas
- `src/content/editions/2026/people.json`: Canonical profiles for the active conference edition
- `src/content/editions/2026/{panels,workshops,competitions}/`: Program entries with ordered participant references
- `src/content/editions/2026/{team,schedule}.json`: Edition-specific team and schedule content
- `src/content/recaps/*.json`: Self-contained historical conference snapshots
- `public/`: Static public assets (favicons, hero image, etc.)
- `src/assets/`: Images optimized by Astro components

## Migration Notes

- Legacy static HTML entrypoint and jQuery-era bundles have been removed from active usage.
- Styling is Tailwind-first with minimal global CSS.
- Sections are now componentized in Astro for maintainability and reuse.
- All structured conference data is loaded and validated through Astro content collections.
- Ordered content uses stable IDs plus explicit `order` fields rather than relying on file position.
- Active-edition people are stored once and referenced from the program entries where editors expect to find them.
- Historical recaps are self-contained snapshots so later profile changes cannot rewrite conference history.

## Updating Website Content

Most website content is stored in JSON files under `src/content`. You do not need to edit the Astro components for a normal content update.

### People

Current speakers, workshop hosts, judges, and team members are all stored in:

`src/content/editions/2026/people.json`

To add someone:

1. Add their image to `src/assets/speakers`.
2. Add one entry to `people.json` with a unique `id`, their name, image path, biography, and optional pronouns.
3. Add their `id` to the relevant panel, workshop, competition, or team file.

Each person should appear only once in `people.json`, even if they have several roles. Their role and display title belong in each event's `participants` list, so the same person can be a speaker in one event and a judge in another.

Do not change an existing person's `id` unless you also update every file that refers to it.

### Panels, Workshops, Competitions, and Team

Current conference files are grouped by type:

- Panels: `src/content/editions/2026/panels`
- Workshops: `src/content/editions/2026/workshops`
- Competitions: `src/content/editions/2026/competitions`
- Team: `src/content/editions/2026/team.json`

Open the file for the item you want to update. In a `participants` or `members` list:

- `person` must match an `id` in `people.json`.
- `role` describes what the person does in that item.
- `title` is the title shown on the website, when applicable.
- `order` controls display order. Use `1` for the first person, `2` for the second, and so on.

The `order` near the top of a panel, workshop, or competition file controls where the whole item appears within its section.

### Other Content

- Schedule: `src/content/editions/2026/schedule.json`
- Sponsors: `src/content/sponsors/sponsors.json`
- Discounts: `src/content/discounts`
- FAQs: `src/content/faqs/faqs-content.json`
- Past conference recaps: `src/content/recaps`

Recap files are historical snapshots. Update the current year's people and event files without changing older recaps.

### Before Committing

Keep JSON punctuation intact: use double quotes, place commas between items, and do not add a comma after the final item in a list. Then validate the changes with:

```bash
npm run check
```

If the command reports an error, it will normally identify the file and field that need attention.

## Team Workflow Notes

- Do not commit `node_modules`, `dist`, or `.astro` generated artifacts.
- For a clean dependency reinstall, run:

```bash
npm ci
```

- Before committing, run `npm run check` and `npm run build`.
- Keep normal content updates in `src/content`; only edit components when changing layout or behaviour.

## Past Conference Links

- 2025 (Reaching for the Stars)
- 2024 (Endless Exploration)
- 2023 (Leaders of Tomorrow)
- 2022 (Above and Beyond)
- 2021 (Connections Together from Afar): https://wise-conference-2021.netlify.app/
- 2020 (Lead without Limits): https://wise-conference-2020.netlify.app/
- 2019 (Catalysts for Change): https://wiseuoft.wixsite.com/conference

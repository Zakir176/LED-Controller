# LED-Controller

A web-based LED light controller project. This repository currently contains:
- A Vue 3 + Vite frontend (with Tailwind CSS) under `frontend/`
- A set of standalone HTML prototype screens under `html version/`
- Design assets under `UI DESIGNS/`

The Vue app is the primary codebase moving forward; the HTML prototypes serve as design/reference.

## Project Structure

- `frontend/` — Vue 3 single-page app bootstrapped with Vite and Tailwind CSS
  - `src/` — Source code (root component at `src/App.vue`)
  - `index.html` — Vite entry HTML
  - `package.json` — Scripts and dependencies
  - `tailwind.config.js`, `postcss.config.js` — Tailwind/PostCSS config
- `html version/` — Static prototype pages and a simple `app.js`
- `UI DESIGNS/` — Design references
- `LICENSE` — Project license

## Requirements

- Node.js 20.19+ or 22.12+ (as defined in `frontend/package.json` engines)
- npm (bundled with Node.js)

## Getting Started (Vue Frontend)

1) Install dependencies

```
cd frontend
npm install
```

2) Run the development server

```
npm run dev
```

This starts Vite and serves the app locally with hot module replacement. The terminal will show the local URL.

3) Build for production

```
npm run build
```

Outputs a production build to `frontend/dist/`.

4) Preview the production build (optional)

```
npm run preview
```

## Linting and Formatting

From within `frontend/`:

- Lint and auto-fix with ESLint
```
npm run lint
```

- Format code with Prettier (targets `src/`)
```
npm run format
```

## Static HTML Prototype

The `html version/` directory contains standalone HTML pages that represent early UI flows, such as:
- `main.html`
- `preset_management.html`
- `effects and modes.html`
- `lighting schedules.html`
- ...and related screens

Open these files directly in a browser to view the prototypes. They are not wired to the Vue app or any backend.

## Tech Stack

- Vue 3
- Vite
- Tailwind CSS
- ESLint + Prettier

## Contribution Guidelines

- Use the Vue app in `frontend/` as the source of truth
- Keep UI/UX changes consistent with the prototypes where applicable
- Run `npm run lint` and `npm run format` before committing

## License

This project is licensed under the terms in `LICENSE`.

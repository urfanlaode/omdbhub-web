# omdbhub-web

A Vue 3 + Vite web application for demonstrating OMDB.

## Summary
This project is built on Vue 3 and Vite. The project structure is organized feature-based, separating `app`, `features`, `entities`, and `shared` to improve scalability and maintainability.

## Quickstart

1. Install dependencies
```sh
npm install
```

2. Run development server (hot-reload)
```sh
npm run dev
```

3. Build for production
```sh
npm run build
```

4. Preview the build
```sh
npm run preview
```

5. Lint & format
```sh
npm run lint
npm run format
```

## Key libraries used
Below is a list of libraries/dependencies found in `package.json` with a brief description of their role:

- `vue` - Core UI framework (Vue 3).
- `vite` - Fast bundler / dev server.
- `vue-router` - Application page routing.
- `vuex` - Global state management.
- `@tanstack/vue-query` - Data fetching & caching (react-query port for Vue).
- `axios` - HTTP client for calling APIs.
- `vee-validate` + `@vee-validate/zod` - Form validation (integration with Zod).
- `zod` - Schema validation / parsing.
- `vue-i18n` - Internationalization / localization.
- `tailwindcss` - Utility-first CSS framework (integrated via Vite plugin).
- `lucide-vue-next` - Icons (Lucide) for Vue.
- `clsx` & `tailwind-merge` & `class-variance-authority` - Utilities for dynamic CSS class management and variant handling.
- `prettier`, `eslint`, `oxlint` - Formatting & linting to keep code consistent.
- `typescript`, `vue-tsc` - Type checking & TypeScript support.

## Architecture & Directory Structure
The project follows a feature-based + modular approach. Main structure under `src/`:

- `src/app/` - Application bootstrapping, `router`, `store` (Vuex).
- `src/features/` - Application features (e.g. search page, movie detail) — each feature typically contains components, composables, and its own store/module.
- `src/entities/` - Types and domain entities (e.g. movie data definitions).
- `src/shared/` - Shared components and utilities (UI primitives, hooks/composables, helpers).
- `src/config/` - Application configuration (API base URL, environment helpers).
- `src/locales/` - i18n files (languages).
- `src/assets/` - Images, global CSS (including `main.css` used by Tailwind).

## Screenshots

<img width="1356" height="618" alt="Screenshot From 2026-02-16 17-17-35" src="https://github.com/user-attachments/assets/f76b9c84-4397-48ce-9ab4-068de877f3b1" />

<img width="1356" height="618" alt="Screenshot From 2026-02-16 17-18-05" src="https://github.com/user-attachments/assets/b0afdf1a-8d2c-403b-b2ad-170901bd79ea" />

<img width="1356" height="618" alt="Screenshot From 2026-02-16 17-18-20" src="https://github.com/user-attachments/assets/53e84adc-5096-44fd-88b1-42cafbd604d1" />

<img width="1356" height="618" alt="Screenshot From 2026-02-16 17-18-28" src="https://github.com/user-attachments/assets/27395054-7d56-445b-b5bd-028ac4aeffcd" />

<img width="1356" height="618" alt="Screenshot From 2026-02-16 17-18-37" src="https://github.com/user-attachments/assets/30cf1c6a-acf1-4fdd-a612-379f29417bf8" />

## Author
- Urfan . urfan.laode@gmail.com . 6281278810028

## License
Specify your project license here (e.g. MIT). If you haven't chosen one yet, add a `LICENSE` file.

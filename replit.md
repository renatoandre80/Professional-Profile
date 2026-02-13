# replit.md

## Overview

This is a personal portfolio website for a Machine Learning Engineer. It's a single-page application with a dark, AI/tech-themed aesthetic featuring sections for hero, about, experience, skills, and a contact form. The contact form submissions are stored in a PostgreSQL database. The project follows a full-stack TypeScript monorepo pattern with a React frontend and Express backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Monorepo Structure
The project is organized into three main directories:
- **`client/`** — React frontend (SPA)
- **`server/`** — Express backend (API + static file serving)
- **`shared/`** — Shared types, schemas, and route definitions used by both client and server

### Frontend Architecture
- **Framework:** React with TypeScript, bundled by Vite
- **Routing:** Wouter (lightweight client-side router) — currently just `/` (Home) and a 404 page
- **UI Components:** shadcn/ui (new-york style) built on Radix UI primitives with Tailwind CSS
- **Styling:** Tailwind CSS with CSS variables for theming. Dark theme by default with custom color palette (electric cyan primary, purple secondary). Two display fonts: Inter (body) and Space Grotesk (headings).
- **Animations:** Framer Motion for scroll-triggered animations and page transitions
- **State Management:** TanStack React Query for server state; react-hook-form with Zod resolvers for form handling
- **Path Aliases:** `@/` maps to `client/src/`, `@shared/` maps to `shared/`

### Backend Architecture
- **Framework:** Express 5 running on Node.js with TypeScript (via tsx)
- **API:** Single REST endpoint `POST /api/contact` for contact form submissions
- **Route Contracts:** API routes are defined in `shared/routes.ts` with Zod schemas for input validation and response types, shared between client and server
- **Development:** Vite dev server runs as middleware in Express during development (HMR via `server/vite.ts`)
- **Production:** Client is built to `dist/public/`, server is bundled with esbuild to `dist/index.cjs`

### Data Storage
- **Database:** PostgreSQL via `DATABASE_URL` environment variable
- **ORM:** Drizzle ORM with `drizzle-zod` for automatic Zod schema generation from table definitions
- **Schema:** Single `messages` table with fields: `id` (serial), `name` (text), `email` (text), `message` (text), `createdAt` (timestamp)
- **Migrations:** Managed via `drizzle-kit push` (`npm run db:push`)
- **Storage Pattern:** `IStorage` interface in `server/storage.ts` with `DatabaseStorage` implementation — designed for easy swapping of storage backends

### Build Process
- **Dev:** `npm run dev` runs tsx to start the Express server with Vite middleware
- **Build:** `npm run build` runs a custom script (`script/build.ts`) that builds the client with Vite and the server with esbuild, bundling select dependencies to reduce cold start times
- **Type Check:** `npm run check` runs TypeScript compiler in noEmit mode

## External Dependencies

### Database
- **PostgreSQL** — Required. Connection string provided via `DATABASE_URL` environment variable. Used with `pg` (node-postgres) pool and Drizzle ORM.
- **connect-pg-simple** — Listed as dependency (session storage capability, not currently active)

### Key NPM Packages
- **drizzle-orm / drizzle-kit / drizzle-zod** — ORM, migration tooling, and Zod schema generation
- **express** (v5) — HTTP server framework
- **@tanstack/react-query** — Async state management on the client
- **framer-motion** — Animation library for React
- **zod** — Runtime schema validation (shared between client and server)
- **react-hook-form / @hookform/resolvers** — Form handling with Zod validation
- **shadcn/ui ecosystem** — Radix UI primitives, class-variance-authority, clsx, tailwind-merge, lucide-react icons
- **wouter** — Client-side routing

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal** — Error overlay in development
- **@replit/vite-plugin-cartographer** — Dev tooling (dev only)
- **@replit/vite-plugin-dev-banner** — Dev banner (dev only)

### Fonts (External)
- Google Fonts: Inter, Space Grotesk, Architects Daughter, DM Sans, Fira Code, Geist Mono
# YLA — Sekolah Plus Latansa Website

Public-facing school profile website for **Sekolah Plus Latansa** (KB TK SD SMP Plus Latansa), built with Next.js 15 and powered by a Strapi v5 headless CMS.

## Tech Stack

- **Next.js 15** (App Router, Turbopack)
- **React 19** / **TypeScript 5**
- **Tailwind CSS v4** / **shadcn/ui**
- **Strapi v5** (headless CMS backend — see `yla-cms/`)
- **PostgreSQL 15**
- **Docker Compose**

## Getting Started

### With Docker (Recommended)

From the parent `yla-app/` directory:

```bash
docker-compose up
```

This starts all 3 services:
- Frontend: http://localhost:3000
- CMS Admin: http://localhost:1337/admin
- CMS API: http://localhost:1337/api

### Manual Setup

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your CMS API URL and token

# Start development server
npm run dev
```

Open http://localhost:3000 in your browser.

## Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Documentation

Full technical documentation is available in the [`docs/`](./docs/) directory:

| Document | Description |
|---|---|
| [Overview](./docs/overview.md) | Project overview, tech stack, and architecture diagram |
| [Use Cases & Diagrams](./docs/use-cases.md) | Use cases with flow and sequence diagrams (Mermaid) |
| [Technical Details](./docs/technical-details.md) | Setup guide, directory structure, and API reference |

## Project Structure

```
yla/
├── src/
│   ├── app/           # Next.js App Router pages
│   ├── components/    # React components (navbar, news, shadcn/ui)
│   └── lib/           # Utilities
├── public/            # Static assets (images, video)
└── docs/              # Technical documentation
```

See [docs/technical-details.md](./docs/technical-details.md#42-directory-structure) for the full annotated directory structure.

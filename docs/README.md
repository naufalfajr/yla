# YLA App Documentation

**YLA App** is a multi-project system for **Sekolah Plus Latansa** (KB TK SD SMP Plus Latansa), an Islamic school in Indonesia. It consists of a public-facing school profile website built with Next.js and a headless CMS backend powered by Strapi v5, all orchestrated via Docker Compose.

## Table of Contents

| Document | Description |
|---|---|
| [Overview](./overview.md) | Project overview, tech stack, and architecture diagram |
| [Use Cases & Diagrams](./use-cases.md) | Use cases with flow and sequence diagrams |
| [Technical Details](./technical-details.md) | Setup guide, directory structure, API reference |

## Quick Links

| Resource | URL |
|---|---|
| Frontend (dev) | `http://localhost:3000` |
| CMS Admin Panel | `http://localhost:1337/admin` |
| CMS API | `http://localhost:1337/api` |

## Project Structure (High Level)

```
yla-app/
├── docker-compose.yml    # Orchestrates all 3 services
├── yla/                  # Frontend — Next.js school profile website
│   ├── docs/             # This documentation
│   └── src/              # Application source code
└── yla-cms/              # Backend — Strapi v5 headless CMS
    └── src/              # CMS source code and content types
```

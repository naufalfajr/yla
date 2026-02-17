# Technical Details

## 4.1 Setup

### Prerequisites

| Requirement | Version |
|---|---|
| Node.js | 18.x – 22.x |
| npm | 6+ |
| Docker | 20+ |
| Docker Compose | v2+ |

### Option A: Docker Setup (Recommended)

This is the easiest way to run the entire stack. From the project root:

```bash
# 1. Clone both repositories into yla-app/
cd yla-app

# 2. Start all services (database, CMS, frontend)
docker-compose up

# 3. (First run only) Seed the CMS with sample data
docker exec -it yla-cms npm run seed:example
```

Once running:
- Frontend: http://localhost:3000
- CMS Admin: http://localhost:1337/admin
- CMS API: http://localhost:1337/api

### Option B: Manual Setup (Without Docker)

#### Step 1: Set up PostgreSQL

Ensure PostgreSQL 15 is running locally. Create a database:

```bash
createdb yla-db
```

#### Step 2: Set up the CMS (`yla-cms/`)

```bash
cd yla-app/yla-cms

# Install dependencies
npm install

# Copy and configure environment variables
cp .env.example .env
# Edit .env — update DATABASE_HOST to localhost, set credentials
```

Required environment variables for `yla-cms/.env`:

| Variable | Description | Example |
|---|---|---|
| `HOST` | Server bind address | `0.0.0.0` |
| `PORT` | Server port | `1337` |
| `APP_KEYS` | Session keys (comma-separated base64) | `key1,key2,key3,key4` |
| `API_TOKEN_SALT` | Salt for API token hashing | `<random-base64>` |
| `ADMIN_JWT_SECRET` | Secret for admin panel JWT | `<random-base64>` |
| `TRANSFER_TOKEN_SALT` | Salt for data transfer tokens | `<random-base64>` |
| `ENCRYPTION_KEY` | Data encryption key | `<random-base64>` |
| `JWT_SECRET` | General JWT signing secret | `<random-base64>` |
| `DATABASE_CLIENT` | Database driver | `postgres` |
| `DATABASE_HOST` | Database hostname | `localhost` |
| `DATABASE_PORT` | Database port | `5432` |
| `DATABASE_NAME` | Database name | `yla-db` |
| `DATABASE_USERNAME` | Database user | `admin` |
| `DATABASE_PASSWORD` | Database password | `<your-password>` |

```bash
# Run the CMS in development mode
npm run develop

# (First run only) Seed sample data
npm run seed:example
```

The CMS admin panel will be at http://localhost:1337/admin. On first run, you'll be prompted to create an admin account.

#### Step 3: Generate an API Token

1. Log into the Strapi admin panel
2. Go to **Settings** > **API Tokens** > **Create new API Token**
3. Set the token type to **Read-only** (or **Full access** if needed)
4. Copy the generated token

#### Step 4: Set up the Frontend (`yla/`)

```bash
cd yla-app/yla

# Install dependencies
npm install
```

Create `yla/.env` with the following:

| Variable | Description | Example |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | CMS API URL (client-side) | `http://localhost:1337/api` |
| `API_HOST` | CMS API URL (server-side) | `http://localhost:1337/api` |
| `CMS_TOKEN` | API token from Step 3 | `<your-api-token>` |

```bash
# Run the frontend in development mode
npm run dev
```

The frontend will be at http://localhost:3000.

### Available Scripts

#### Frontend (`yla/`)

| Script | Command | Description |
|---|---|---|
| `npm run dev` | `next dev --turbopack` | Start dev server with Turbopack |
| `npm run build` | `next build` | Build for production |
| `npm run start` | `next start` | Start production server |
| `npm run lint` | `next lint` | Run ESLint |

#### CMS (`yla-cms/`)

| Script | Command | Description |
|---|---|---|
| `npm run develop` | `strapi develop` | Start CMS in dev mode with auto-reload |
| `npm run build` | `strapi build` | Build admin panel for production |
| `npm run start` | `strapi start` | Start CMS in production mode |
| `npm run deploy` | `strapi deploy` | Deploy to Strapi Cloud |
| `npm run seed:example` | `node scripts/seed.js` | Seed database with sample data |

---

## 4.2 Directory Structure

### Frontend — `yla/`

```
yla/
├── public/                          # Static assets
│   ├── smp.jpeg                     # Homepage video poster image
│   ├── smp.webm                     # Homepage background video
│   ├── file.svg                     # Decorative SVGs
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
│
├── src/
│   ├── app/                         # Next.js App Router
│   │   ├── layout.tsx               # Root layout (navbar + main wrapper)
│   │   ├── page.tsx                 # Homepage (server component)
│   │   ├── globals.css              # Tailwind config + shadcn/ui theme variables
│   │   ├── preschool/
│   │   │   └── page.tsx             # Preschool landing page
│   │   ├── elementary/
│   │   │   └── page.tsx             # Elementary landing page
│   │   ├── middleschool/
│   │   │   └── page.tsx             # Middle School landing page
│   │   └── news/
│   │       └── [id]/
│   │           └── page.tsx         # News article detail (client component)
│   │
│   ├── components/
│   │   ├── HomeNavbar.tsx           # Transparent navbar for homepage (scroll-aware)
│   │   ├── Navbar.tsx               # Solid teal navbar for inner pages
│   │   ├── NavbarWrapper.tsx        # Switches navbar based on current route
│   │   ├── RecentNews.tsx           # News card grid component
│   │   └── ui/                      # shadcn/ui primitives
│   │       ├── button.tsx           # Button component with variants
│   │       ├── card.tsx             # Card component (Card, CardHeader, etc.)
│   │       ├── sheet.tsx            # Mobile drawer/sheet (Radix Dialog)
│   │       └── tabs.tsx             # Tabs component (Radix Tabs)
│   │
│   └── lib/
│       └── utils.ts                 # Utilities: cn() for classnames, formatDateNews()
│
├── docs/                            # Project documentation (this folder)
│
├── package.json                     # Dependencies and scripts
├── tsconfig.json                    # TypeScript configuration
├── next.config.ts                   # Next.js configuration
├── postcss.config.mjs               # PostCSS with Tailwind plugin
├── eslint.config.mjs                # ESLint flat config
├── components.json                  # shadcn/ui configuration (new-york style)
├── Dockerfile                       # Docker image definition
└── .env                             # Environment variables (not committed)
```

### Backend — `yla-cms/`

```
yla-cms/
├── config/
│   ├── admin.ts                     # Admin panel JWT and token salt config
│   ├── api.ts                       # REST API defaults (pagination limits)
│   ├── database.ts                  # Database connection (postgres/sqlite/mysql)
│   ├── middlewares.ts               # Middleware stack (CORS, security, logging)
│   ├── plugins.ts                   # Plugin configuration (empty)
│   └── server.ts                    # Server host and port config
│
├── src/
│   ├── index.ts                     # App register/bootstrap hooks (empty)
│   │
│   ├── api/                         # Content type definitions and API handlers
│   │   ├── article/                 # Articles (collection type)
│   │   │   ├── content-types/
│   │   │   │   └── article/
│   │   │   │       └── schema.json  # Schema: title, description, slug, cover, blocks
│   │   │   ├── controllers/
│   │   │   │   └── article.ts       # Core controller (factory-generated)
│   │   │   ├── routes/
│   │   │   │   └── article.ts       # Core CRUD routes (factory-generated)
│   │   │   └── services/
│   │   │       └── article.ts       # Core service (factory-generated)
│   │   │
│   │   ├── author/                  # Authors (collection type)
│   │   │   ├── content-types/       # Schema: name, email, avatar, articles relation
│   │   │   ├── controllers/
│   │   │   ├── routes/
│   │   │   └── services/
│   │   │
│   │   ├── category/                # Categories (collection type)
│   │   │   ├── content-types/       # Schema: name, slug, description, articles relation
│   │   │   ├── controllers/
│   │   │   ├── routes/
│   │   │   └── services/
│   │   │
│   │   ├── about/                   # About page (single type)
│   │   │   ├── content-types/       # Schema: title, blocks (dynamic zone)
│   │   │   ├── controllers/
│   │   │   ├── routes/
│   │   │   └── services/
│   │   │
│   │   └── global/                  # Global settings (single type)
│   │       ├── content-types/       # Schema: siteName, siteDescription, favicon, defaultSeo
│   │       ├── controllers/
│   │       ├── routes/
│   │       └── services/
│   │
│   ├── components/                  # Reusable CMS components (for dynamic zones)
│   │   └── shared/
│   │       ├── seo.json             # SEO: metaTitle, metaDescription, shareImage
│   │       ├── media.json           # Single file/image upload
│   │       ├── quote.json           # Quote: title + body
│   │       ├── rich-text.json       # Rich text content block
│   │       └── slider.json          # Image slider (multiple files)
│   │
│   ├── admin/                       # Admin panel customization
│   │   ├── app.example.tsx          # Example admin config
│   │   └── tsconfig.json
│   │
│   └── extensions/                  # Strapi extensions (empty)
│
├── scripts/
│   └── seed.js                      # Database seed script (creates sample data)
│
├── data/
│   ├── data.json                    # Seed data (articles, authors, categories, etc.)
│   └── uploads/                     # Seed images
│
├── database/
│   └── migrations/                  # Database migrations (managed by Strapi)
│
├── types/
│   └── generated/                   # Auto-generated TypeScript types
│
├── public/                          # Public uploads directory + robots.txt
├── dist/                            # Compiled JavaScript output
│
├── package.json                     # Dependencies and scripts
├── tsconfig.json                    # TypeScript configuration
├── Dockerfile                       # Docker image definition
├── .env                             # Environment variables (not committed)
└── .env.example                     # Example environment variables template
```

### Root — `yla-app/`

```
yla-app/
├── docker-compose.yml               # Orchestrates 3 services: yla, yla-cms, yla-db
├── yla/                             # Frontend project
└── yla-cms/                         # CMS project
```

---

## 4.3 API Endpoints Reference

The frontend consumes these Strapi REST API endpoints:

### Articles

| Method | Endpoint | Description | Used By |
|---|---|---|---|
| `GET` | `/api/articles` | List all published articles | Homepage (server-side) |
| `GET` | `/api/articles/:id` | Get a single article by ID | News detail page (client-side) |

### Categories

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/categories` | List all categories |
| `GET` | `/api/categories/:id` | Get a single category |

### Authors

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/authors` | List all authors |
| `GET` | `/api/authors/:id` | Get a single author |

### Single Types

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/global` | Get global site settings (name, description, favicon, SEO) |
| `GET` | `/api/about` | Get about page content |

### Query Parameters

Strapi supports these common query parameters:

| Parameter | Example | Description |
|---|---|---|
| `populate` | `?populate=*` | Include related data (author, category, cover, blocks) |
| `pagination[page]` | `?pagination[page]=1` | Page number (default limit: 25, max: 100) |
| `pagination[pageSize]` | `?pagination[pageSize]=10` | Items per page |
| `sort` | `?sort=createdAt:desc` | Sort by field |
| `filters` | `?filters[category][name][$eq]=news` | Filter by field value |

### Authentication

Server-side requests include a Bearer token in the `Authorization` header:

```
Authorization: Bearer <CMS_TOKEN>
```

Public read access (`find`, `findOne`) is enabled for all content types via the seed script, so unauthenticated requests also work for reading data.

# Use Cases & Diagrams

## Use Cases

### Use Case 1: Public Visitor Browses the School Website

A prospective parent or student visits the school website to learn about Sekolah Plus Latansa.

**Actor**: Public visitor (unauthenticated)

**Actions**:
- Views the homepage with video hero, school values, achievements, and latest news
- Navigates to education level pages (Preschool, Elementary, Middle School) to learn about specific programs
- Clicks on a news article to read the full content with rich text, images, quotes, and media
- Clicks "Daftar Sekarang" (Enroll Now) to begin enrollment (planned feature, not yet implemented)

---

### Use Case 2: Content Editor Manages Articles

A school staff member uses the CMS admin panel to publish news and updates.

**Actor**: Content editor (authenticated via Strapi admin)

**Actions**:
- Logs into the Strapi admin panel at `/admin`
- Creates a new article with title, description, slug, cover image, and content blocks (rich text, media, quotes, sliders)
- Assigns the article to an author and a category (e.g., news, tech, nature)
- Saves as draft for review, or publishes immediately
- Edits or unpublishes existing articles
- Manages authors (name, email, avatar) and categories (name, slug, description)

---

### Use Case 3: Site Administrator Manages Global Settings

An administrator configures site-wide settings and metadata.

**Actor**: Site administrator (authenticated via Strapi admin)

**Actions**:
- Updates the global site name, description, and favicon
- Configures default SEO metadata (meta title, meta description, share image)
- Manages the About page content using dynamic content blocks
- Manages user roles and permissions for other content editors
- Generates and manages API tokens for frontend access

---

## Diagrams

### 1. System Architecture Diagram

High-level view of how the three services interact:

```mermaid
graph TB
    subgraph "Public Internet"
        V["Public Visitor<br/>(Browser)"]
    end

    subgraph "Internal Network"
        E["Content Editor<br/>(Browser)"]
    end

    subgraph "Docker Compose Network"
        FE["yla<br/>Next.js 15<br/>:3000"]
        CMS["yla-cms<br/>Strapi v5<br/>:1337"]
        DB["yla-db<br/>PostgreSQL 15<br/>:5432"]
    end

    V -->|"GET / (pages)"| FE
    E -->|"GET /admin<br/>POST /api/*"| CMS
    FE -->|"GET /api/articles<br/>Authorization: Bearer token"| CMS
    CMS -->|"SQL queries"| DB
```

---

### 2. Sequence Diagram: Visitor Loads Homepage

This diagram shows what happens when a public visitor loads the school homepage. The homepage is a Next.js server component that fetches the latest articles from Strapi during server-side rendering.

```mermaid
sequenceDiagram
    actor V as Visitor (Browser)
    participant FE as Next.js Server<br/>(yla :3000)
    participant CMS as Strapi API<br/>(yla-cms :1337)
    participant DB as PostgreSQL<br/>(yla-db :5432)

    V->>FE: GET /
    activate FE

    FE->>CMS: GET /api/articles<br/>Authorization: Bearer <CMS_TOKEN>
    activate CMS

    CMS->>DB: SELECT articles with relations<br/>(author, category, cover)
    activate DB
    DB-->>CMS: Article rows + related data
    deactivate DB

    CMS-->>FE: JSON response<br/>{ data: [articles...] }
    deactivate CMS

    Note over FE: Server component renders HTML<br/>with hero, values, achievements,<br/>and RecentNews grid

    FE-->>V: Complete HTML page
    deactivate FE

    Note over V: Browser renders page<br/>with hydration for<br/>interactive components<br/>(navbar scroll, mobile menu)
```

---

### 3. Sequence Diagram: Visitor Reads a News Article

This diagram shows the client-side flow when a visitor clicks on a news article from the homepage.

```mermaid
sequenceDiagram
    actor V as Visitor (Browser)
    participant FE as Next.js Client<br/>(yla :3000)
    participant CMS as Strapi API<br/>(yla-cms :1337)
    participant DB as PostgreSQL<br/>(yla-db :5432)

    Note over V,FE: Visitor is on the homepage,<br/>clicks a news article card

    V->>FE: Store article ID in sessionStorage
    V->>FE: Navigate to /news/[id]

    activate FE
    Note over FE: Client component mounts,<br/>reads article ID from<br/>sessionStorage

    FE->>CMS: GET /api/articles/<id>?populate=*
    activate CMS

    CMS->>DB: SELECT article by ID<br/>with blocks, cover, author, category
    activate DB
    DB-->>CMS: Article row + related data
    deactivate DB

    CMS-->>FE: JSON response<br/>{ data: { title, blocks, cover, ... } }
    deactivate CMS

    Note over FE: Renders article with<br/>dynamic content blocks:<br/>rich-text, media, quote, slider

    FE-->>V: Rendered article page
    deactivate FE
```

---

### 4. Flow Diagram: Content Editor Publishes an Article

This diagram shows the editorial workflow from creating a draft article to it appearing on the public website.

```mermaid
flowchart TD
    A[Editor logs into<br/>Strapi Admin Panel] --> B[Create new Article]
    B --> C[Fill in fields:<br/>title, description, slug,<br/>cover image]
    C --> D[Add content blocks:<br/>rich text, media,<br/>quotes, sliders]
    D --> E[Assign author<br/>and category]
    E --> F{Save as Draft<br/>or Publish?}

    F -->|Save Draft| G[Article saved<br/>with status: draft]
    G --> H[Article NOT visible<br/>on public website]
    H --> I[Editor reviews<br/>and edits draft]
    I --> F

    F -->|Publish| J[Article saved<br/>with status: published]
    J --> K[Article available<br/>via REST API]
    K --> L[Visitor loads homepage]
    L --> M[Next.js fetches<br/>latest articles from API]
    M --> N[Article appears in<br/>Recent News section]

    style G fill:#fef3c7,stroke:#d97706
    style J fill:#d1fae5,stroke:#059669
    style N fill:#dbeafe,stroke:#2563eb
```

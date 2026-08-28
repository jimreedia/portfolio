# Case Study Page — Structure & Behavior Plan
**Version 1.0**
*Source instructions for LLM coding agent implementation. Companion to `jimreed-homepage-design-plan.md`.*

---

## Purpose

Defines the layout, content structure, and interaction behavior for individual
case study detail pages (e.g. `/case-study/agentic-ai-chat`). As with the
homepage plan, **typography and color are placeholder** and reuse the existing
tokens in `src/index.css`. The designer refines the visual design in a later
pass; this pass delivers structure, routing, and seeded content.

---

## Routing

- **Library:** `react-router-dom` v7, `HashRouter`. Hash routing is used because
  the site deploys to the GitHub Pages subpath `https://jimreedia.github.io/portfolio/`;
  hash URLs make deep links and refreshes work with no server config and no
  `404.html` redirect shim.
- **Routes** (`src/App.jsx`):
  - `/` → `Home` (the six homepage sections, moved out of `App.jsx`)
  - `/case-study/:id` → `CaseStudyPage`
  - `*` → redirect to `/`
- **URL shape:** `…/portfolio/#/case-study/<id>`. The `url` field in
  `caseStudies.json` stays `/case-study/<id>` and is passed to `<Link to>`.
- **Scroll behavior:**
  - `ScrollToTop` resets scroll to the top on every route change…
  - …unless the navigation carries `state.scrollTo` (a section id), in which case
    `Home` scrolls that section into view after it renders. Used when a nav link
    or "Back to all work" is clicked from a case study page.
- **In-page section links:** Because the hash is now the route, anchor links like
  `href="#featured-work"` no longer work. `useSectionNav()` (`src/lib/navigation.js`)
  replaces them: on `/` it smooth-scrolls to the section; elsewhere it navigates
  to `/` with `state.scrollTo`. Used by `Nav`, `BrandImagery`, `Footer`.

---

## Page structure (top to bottom)

Content column max-width **760px**, centered. Cover image and gallery may extend
wider (up to ~920px) on desktop ≥ 1024px. Top padding clears the 64px sticky nav.

### 1. Hero + meta

- **Back link:** "← Back to all work" → `/` + scroll to `#featured-work`.
- **Title** (`h1`): 52px / 36px mobile, weight 600.
- **Lead:** the case study `description`, 22px / 19px mobile, `--color-text-muted`.
- **Cover image:** `images[0]`, full column width (wider on desktop), `border-radius: 8px`.
- **Meta block:** a `<dl>` grid (2 columns desktop, 1 mobile) with:
  - **Role** — `role`
  - **Timeline** — `timeline` (`[Timeline placeholder]` for now)
  - **Team** — `team`
  - **Domain** — `tags` joined with " · "
  - Labels in DM Mono 12px uppercase; values in Plus Jakarta Sans 15px.
  - Rows are omitted when their value is empty.

### 2. Narrative sections (images woven into the text)

Rendered from `cs.sections` (array). Each entry:

- `heading` (`h2`, 26px / 22px mobile)
- `image` — optional `{ src, alt }`, rendered full-bleed **between the heading and
  the body text** (matches the current jimreed.net layout: heading → image →
  explanation). Annotation banners are baked into the image asset, so there is no
  separate caption. Clicking the image opens the lightbox (see §4).
- `body` — array of paragraph strings (17px, line-height 1.7)
- `items` — optional bullet list; en-dash bullet in `--color-accent`, matching the
  Profile section's list style

`agentic-ai-chat` is the first case study built to this model — sections
**Overview · AI in Context · UI Principles · Elements and Interactions · User
Needs · Branding**, text and images pulled from the live site. The other case
studies still use the older `heading` + `body` + `items` + bottom `gallery` shape;
the component renders whatever a given entry provides.

### 3. Image gallery (legacy shape, still supported)

Rendered from `cs.gallery` (array of `{ src, caption }`), when present, after the
narrative sections. Each is a `<figure>` with a full-width clickable image
(opens the lightbox) and an optional `<figcaption>` (13px, `--color-text-muted`).
Case studies migrated to inline section images (`agentic-ai-chat`) drop `gallery`.

### 4. Lightbox

`src/components/Lightbox.jsx` — a full-screen viewer over every image on the page.
The series is assembled in order: **hero → each section image → each gallery
image**. Any image (including the hero) opens it at that image's position.

- Controls: on-screen ‹ / › arrows (disabled at the ends — the series does not
  wrap), a close ✕, and a `n / total` counter.
- Keyboard: `←` / `→` to page, `Esc` to close. Backdrop click closes.
- Touch: horizontal swipe pages.
- Body scroll is locked while open; focus moves to the close button and is
  restored to the trigger on close.
- `prefers-reduced-motion`: the 150ms backdrop fade is skipped.

### 5. Prev / next navigation

- A row with two links: **← Previous / {title}** and **Next → / {title}**.
- Order and wrap-around follow the `caseStudies.json` array order (`getNeighbors`).
- Below it, a centered "Back to all work" link.
- Row is `space-between` on desktop, stacks to one column < 768px.

---

## Content architecture

`src/data/caseStudies.json` gains these per-entry fields (existing fields — `id`,
`title`, `description`, `outcome`, `tags`, `url`, `featured`, `images` — are
unchanged; `images` still feeds the homepage carousel):

| Field | Type | Notes |
|---|---|---|
| `role` | string | e.g. "Product Designer, LinkedIn" |
| `timeline` | string | `[Timeline placeholder]` for all entries — the live site gives no dates |
| `team` | string | short phrase |
| `hero` | `{ src, alt }` | optional; the top-of-page image. Falls back to `images[0]` |
| `sections` | `{ heading, body: string[], image?: {src,alt}, items?: string[] }[]` | narrative; `image` renders inline after the heading |
| `gallery` | `{ src, caption }[]` | optional; legacy bottom gallery, used where sections have no inline images |

Seed content was drawn from the live jimreed.net case study pages during
planning and paraphrased. Anything the live site doesn't provide uses the
existing `[bracketed placeholder]` convention (e.g. `[Outcome metric placeholder]`).

New helpers in `src/lib/caseStudies.js`: `getById(id)`, `getNeighbors(id)`.

---

## Responsive

| Breakpoint | Changes |
|---|---|
| < 768px | Meta block → 1 column; prev/next → stacked column; reduced page padding; smaller title/heading sizes; lightbox arrows hug the edges |
| 768–1023px | Content column 760px; image display cap = column width |
| ≥ 1024px | Image display cap = column width + ~160px (a slight bleed past the text column, centered) |

### Image sizing

On the page, images are **never scaled up past their native pixels** — a
`fit-content` wrapper with `max-width: var(--media-cap)` and `img { width: auto }`.
Images smaller than the cap sit at native size, centered; larger images scale
down to the cap. `--media-cap` is raised on desktop for the bleed. Because the
current source images are only ~600–1300px wide, several render narrower than the
column on wide screens — the tradeoff for not upscaling (see the backlog item on
re-exporting the image set). The lightbox uses the same downscale-only rule against
the viewport box, which is why images look consistent there.

Reduced motion: the only animation is the lightbox's 150ms backdrop fade, which is
skipped under `prefers-reduced-motion`. Link hover is color-only and
lives outside the `prefers-reduced-motion` guard.

---

*End of plan. Version 1.0.*

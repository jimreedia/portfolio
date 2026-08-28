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
- **Cover image:** `hero` (or `images[0]`), sits directly on the page background — no frame, shadow, radius, or crop. Native size, centered, bleeds past the column on desktop.
- **Meta block:** a single-column `<dl>` between two hairline rules:
  - **Role** — `role`
  - **Team** — `team`
  - Labels in DM Mono 12px uppercase; values in Plus Jakarta Sans 15px.
  - Rows are omitted when their value is empty.
  - Role and Team wording is a first pass — deeper content design (individual
    contribution, team composition, and whether Outcome/Status belongs here) is
    tracked in the "refine case study content" backlog item.

### 2. Narrative sections (images woven into the text)

Rendered from `cs.sections` (array). Each entry:

- `heading` — optional (`h2`, 26px / 22px mobile). Omit it for a lead-in
  paragraph with no header (the intro paragraph on each live page).
- `blocks` — an ordered list of content blocks, rendered in sequence so images sit
  exactly where they do in the narrative:
  - `{ "type": "text", "value": "…" }` — a paragraph (17px, line-height 1.7)
  - `{ "type": "image", "src": "…", "alt": "…" }` — a full-bleed image that opens
    the lightbox (see §4). Annotation banners are baked into the asset, so there is
    no separate caption.
  - `{ "type": "list", "items": [ … ] }` — an en-dash bullet list
- Legacy fields `body` (string[]), `image` / `images` ({src,alt}), and `items`
  (string[]) are still accepted — the component normalizes them into `blocks`
  (images first, then paragraphs, then the list).

All three featured case studies — `agentic-ai-chat`, `ai-recommendations`,
`genomic-data-platform` — use this model, with headings, text, and images taken
from the live jimreed.net pages. The six non-featured entries still use the
legacy `body` + `items` shape.

### 3. Image gallery (legacy shape, still supported)

Rendered from `cs.gallery` (array of `{ src, caption }`), when present, after the
narrative sections. Each is a `<figure>` with a full-width clickable image
(opens the lightbox) and an optional `<figcaption>` (13px, `--color-text-muted`).
The featured case studies weave their images into `blocks` instead and carry no
`gallery`.

### 4. Lightbox

`src/components/Lightbox.jsx` — a full-screen viewer over every image on the page.
The series is assembled in reading order: **hero → every section image block →
each gallery image**. Any image (including the hero) opens it at that image's
position.

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
| `team` | string | short phrase |
| `hero` | `{ src, alt }` | optional; the top-of-page image. Falls back to `images[0]` |
| `sections` | `{ heading?, blocks: Block[] }[]` | narrative; `Block` is `{type:"text",value}` / `{type:"image",src,alt}` / `{type:"list",items}`. Legacy `body`/`image(s)`/`items` still normalize into blocks. |
| `gallery` | `{ src, caption }[]` | optional; legacy bottom gallery, for entries without in-narrative images |

The three featured entries carry full narrative + images taken from the live
jimreed.net pages. The six non-featured entries were seeded with a shorter
Problem/Approach/Outcomes skeleton; anything the live site doesn't provide uses
the existing `[bracketed placeholder]` convention (e.g. `[Outcome metric placeholder]`).
Curated image assets live in `public/assets/case-studies/<id>/`.

New helpers in `src/lib/caseStudies.js`: `getById(id)`, `getNeighbors(id)`.

---

## Responsive

| Breakpoint | Changes |
|---|---|
| < 768px | prev/next → stacked column; reduced page padding; smaller title/heading sizes; lightbox arrows hug the edges |
| 768–1023px | Content column 760px; image display cap = column width |
| ≥ 1024px | Image display cap = column width + ~160px (a slight bleed past the text column, centered) |

### Image sizing

On the page, images are **never scaled up past their native pixels**. The wrapper
(`.case-study__media`) spans the available width; `img { width: auto; max-width:
100%; margin: 0 auto }` renders each image at its natural size and centers it,
scaling down only when it would exceed the wrapper. On desktop (≥1024px) the
wrapper for cover / section / gallery images widens to `calc(100% + 160px)` with
`margin-left: -80px`, so larger images bleed ~80px past the text column on each
side. Because the current source images are only ~600–1300px wide, the smaller
ones (`user-needs` 595px, `icon-design` 679px, `side-panel-principles` 685px)
render narrower than the column on wide screens — the tradeoff for not upscaling
(see the backlog item on re-exporting the image set). The lightbox applies the
same downscale-only rule against the viewport box, which is why images look
consistent there.

Reduced motion: the only animation is the lightbox's 150ms backdrop fade, which is
skipped under `prefers-reduced-motion`. Link hover is color-only and
lives outside the `prefers-reduced-motion` guard.

---

*End of plan. Version 1.0.*

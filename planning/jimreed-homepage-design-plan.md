# Jim Reed Portfolio — Homepage Design Plan
**Version 1.0**
*Source instructions for LLM coding agent implementation*

---

## Purpose

This document defines the layout, content structure, interaction behaviors, and visual design guidance for the homepage of jimreed.net, a React application hosted on GitHub Pages at https://jimreedia.github.io/portfolio/. Typography and color values are placeholder and subject to revision after structural review. The coding agent should implement structure and behavior faithfully; the designer will refine visual design in a subsequent pass.

---

## Tech Stack & Constraints

- **Framework:** React
- **Hosting:** GitHub Pages
- **Animation:** CSS only (keyframes + transitions). Use the IntersectionObserver API to trigger CSS class changes for scroll-driven reveals — the animations themselves are CSS, IntersectionObserver is only the trigger mechanism.
- **No animation libraries:** Do not use Framer Motion, GSAP, or similar.
- **Responsive:** Mobile-first. Three breakpoints (see Responsive section).
- **Content source:** `/src/data/caseStudies.json` — a local JSON file (see Content Architecture).

---

## Global Layout

- **Max content width:** 1200px, centered with auto horizontal margins
- **Section padding:** 96px top/bottom on desktop, 64px on tablet, 48px on mobile
- **Full-width section backgrounds:** Each section's background color spans 100% of the viewport width; content inside is constrained to max-width
- **Scroll behavior:** `scroll-behavior: smooth` on the `html` element

---

## Placeholder Color Palette

These are working placeholder values. The designer will replace them after reviewing structure.

| Token | Hex | Used In |
|---|---|---|
| `--color-surface-dark` | `#0D0D12` | Brand Imagery, Footer |
| `--color-surface-light` | `#F2F0ED` | Intro, More Case Studies |
| `--color-surface-mid` | `#E5E2DE` | Featured Case Studies |
| `--color-surface-navy` | `#1A2744` | Profile |
| `--color-text-primary-light` | `#111111` | On light backgrounds |
| `--color-text-primary-dark` | `#F2F0ED` | On dark backgrounds |
| `--color-text-muted` | `#888888` | Muted text on light backgrounds |
| `--color-text-muted-dark` | `#8899BB` | Muted text on dark backgrounds |
| `--color-accent` | `#3D7AF5` | CTAs, hover states, tags, active dots |
| `--color-nav-bg` | `rgba(242,240,237,0.92)` | Nav on scroll (with blur) |

---

## Placeholder Typography

Use **Plus Jakarta Sans** from Google Fonts for all type. It is more distinctive than Inter while remaining highly legible.

Import in `index.html` or via CSS:
```
https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap
```

For case study numbers, domain tags, and any data labels, use **DM Mono** to add a subtle technical edge:
```
https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&display=swap
```

| Role | Size (desktop) | Size (mobile) | Weight | Font |
|---|---|---|---|---|
| Display headline | 52px | 36px | 600 | Plus Jakarta Sans |
| Subhead | 26px | 20px | 400 | Plus Jakarta Sans |
| Section header | 32px | 24px | 600 | Plus Jakarta Sans |
| Body | 17px | 16px | 400 | Plus Jakarta Sans |
| CTA link | 16px | 16px | 500 | Plus Jakarta Sans |
| Case study number | 13px | 13px | 500 | DM Mono |
| Domain tag | 12px | 12px | 500 | DM Mono |
| Caption | 13px | 13px | 400 | Plus Jakarta Sans |
| Footer text | 14px | 14px | 400 | Plus Jakarta Sans |

Line height: 1.6 for body, 1.15 for headlines.

---

## Navigation

### Behavior
- **Position:** Sticky, top of viewport, full viewport width
- **Height:** 64px desktop, 56px mobile
- **Default state (at top of page):** Fully transparent background, no shadow
- **Scrolled state (after ~80px):** Background transitions to `var(--color-nav-bg)` with `backdrop-filter: blur(12px)`, subtle bottom border `1px solid rgba(0,0,0,0.08)`
- **Transition:** `background 200ms ease, backdrop-filter 200ms ease`
- **z-index:** 100

### Contents

**Desktop:**
- Left: "Jim Reed" text mark, 16px weight 600, links to `#top`
- Right: Anchor links — **Work**, **About**, **More Work**, **LinkedIn ↗**
  - **Work** → `#featured-work`
  - **About** → `#profile`
  - **More Work** → `#more-work`
  - **LinkedIn ↗** → `https://www.linkedin.com/in/jimreed/` (opens in new tab)
- Link style: 15px, weight 500, no underline, `var(--color-text-primary-light)` by default
- Active/hover: `var(--color-accent)`, transition 150ms

**Mobile (< 768px):**
- Left: "Jim Reed" text mark
- Right: Hamburger icon (three horizontal lines, 24px)
- On hamburger tap: Slide-down mobile menu with all four links stacked vertically, full width, 48px tap targets
- Menu background: `var(--color-surface-light)`, full-width below nav
- Close on link tap or outside tap

### Active State
Highlight the nav link corresponding to the section currently in the viewport using IntersectionObserver on each section's anchor element.

---

## Scroll Transitions (Global)

All sections use a consistent entrance animation triggered by IntersectionObserver:

```css
.section-animate {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 500ms ease, transform 500ms ease;
}
.section-animate.visible {
  opacity: 1;
  transform: translateY(0);
}
```

Add the `visible` class when the section enters the viewport (threshold: 0.15). Apply `section-animate` to section content containers, not the full-width section wrapper (to avoid layout shifts on background color).

---

## Section 1: Brand Imagery

### Intent
A visual-first introduction that signals personality, craft, and playfulness before the user reads a word. Sets Jim apart from portfolios that open with a headshot and a title.

### Background
`var(--color-surface-dark)` — near black so illustrations read clearly against a dark field.

### Height
Content-driven with `96px` vertical padding. Section should be tall enough to feel immersive but not force scrolling to see its full content.

### Layout
Two illustrations side by side on desktop (equal ~45% width each, gap ~80px), stacked on mobile (image above image, gap 48px). Both illustrations are horizontally and vertically centered within the section.

---

#### Illustration A: PacMan Graphic

**Description:** PacMan characters with labels and a speech bubble communicating the importance of product design in creating products users love. The placeholder image is not animated but the intention is to animate it later.

**Asset delivery:** Designer has provided a placeholder file: `/public/assets/brand/pacman.png`.

**Placeholder:** use provided image, dimensions 480×360px (desktop), 320×240px (mobile).

---

#### Illustration B: Floating Hand + Gear

**Description:** An animated graphic of a floating hand pointing to a gear icon (settings metaphor), indicating interaction design.

**Asset delivery:** Designer has provided a placeholder file: `/public/assets/brand/jimreed_animated_hand_gear_480x280.gif`.

**Placeholder:** Same treatment as Illustration A.

---

## Section 2: Introductory Headlines and Text

### Intent
Establishes Jim's positioning and voice. Confident, typographically strong, uncluttered.

### Background
`var(--color-surface-light)`

### Layout
Single column, centered, max-width 680px, with generous white space above and below the text block.

### Content (in order, top to bottom)

**1. Display headline**
Font: Plus Jakarta Sans, 52px desktop / 36px mobile, weight 600, color `var(--color-text-primary-light)`
```
I design for experts.
```

**2. Subhead block**
Font: Plus Jakarta Sans, 26px desktop / 20px mobile, weight 400, color `var(--color-text-muted)`, line-height 1.4
Render as two lines with tight spacing between them (line-height, not separate paragraphs):
```
Complex domains, high stakes, no shortcuts.
0-to-1 products that hold up.
```
Margin between headline and subhead: `20px`

**3. Body paragraph**
Font: Plus Jakarta Sans, 17px, weight 400, line-height 1.7, max-width 60ch, color `var(--color-text-primary-light)`
Margin above: `36px`
```
I'm Jim Reed, a Product Designer based in San Francisco. I've spent my career embedded in technically complex domains including genomics, industrial operations, data platforms, and AI, designing tools that expert users actually rely on.
```

**4. CTA — Animated scroll invitation**
Margin above body: `52px`
Render a downward-pointing chevron arrow (SVG, approximately 32×20px) with the label "Explore the work" below it in 14px, weight 500, `var(--color-text-muted)`.

Arrow animation: gentle bounce loop.
```css
@keyframes bounce-down {
  0% { transform: translateY(0); }
  100% { transform: translateY(8px); }
}
.cta-arrow {
  animation: bounce-down 1.8s ease-in-out infinite alternate;
  cursor: pointer;
}
```

On click: smooth scroll to `#featured-work`.

On hover (arrow or label): arrow and label color shift to `var(--color-accent)`, transition 150ms.

---

## Section 3: Featured Case Studies

### Intent
The primary showcase. Three curated case studies with visual depth and clear outcomes. The section that determines whether a hiring manager goes deeper.

### Anchor
`id="featured-work"`

### Background
`var(--color-surface-mid)`

### Layout
Three case studies stacked vertically. Each case study is a two-column row on desktop (image carousel and text block). Alternate the image/text position per row:
- Row 1: Image left, text right
- Row 2: Image right, text left
- Row 3: Image left, text right

On mobile: image stacks above text for all rows.

Vertical gap between rows: `80px` desktop, `64px` mobile.

---

### Case Studies

Use the following three case studies. Pull titles and descriptions from jimreed.net. Placeholder text and images are acceptable until final content is provided.

| # | Title | Description | URL |
|---|---|---|---|
| 1 | Agentic AI Chat | Leveraging AI experiences to create valuable outcomes for customers. | https://jimreed.net/agentic-ai-chat |
| 2 | AI Recommendations | Using machine learning to create valuable outcomes for customers. | https://jimreed.net/ai-recommendations |
| 3 | Genomic Data Platform | Tools for scientists to analyze genomic data for pharmaceutical and clinical needs. | https://jimreed.net/genomic-data-platform |

The outcome/role line (e.g., "Led 0→1 design · Shipped to enterprise customers") is a placeholder field in `caseStudies.json`. Render it; the designer will populate values.

---

### Image Carousel (per case study)

**Dimensions:** 55% width on desktop, 100% width on mobile. Aspect ratio 16:9. Overflow hidden with `border-radius: 8px`.

**Images per carousel:** 3–4 (sourced from `caseStudies.json`). Placeholder: solid color tile with centered label text.

**Navigation:** Manual only. No auto-advance.

**Controls:**
- Left and right arrow buttons (SVG chevrons in a circle, 44px tap target)
  - Desktop: visible on hover of the carousel only
  - Mobile: always visible
  - Position: vertically centered on the image, left and right edges
  - Disabled state: 30% opacity when at first or last image
- Dot indicators below the carousel
  - Active dot: `var(--color-accent)`, 8px diameter
  - Inactive dots: `var(--color-text-muted)`, 6px diameter
  - Gap between dots: 8px

**Slide transition:** `transform: translateX()` driven by current index. Transition: 300ms ease.

**Touch/swipe support (mobile):** Implement swipe gesture via touch events (touchstart, touchend). Swipe left = next image, swipe right = previous image. Threshold: 50px horizontal movement.

**Hover behavior (desktop):**
On image hover:
- Image scales to `1.03` (transition 300ms ease, `overflow: hidden` on wrapper)
- A dark overlay (`rgba(0,0,0,0.45)`) fades in (opacity 0 → 0.45, 300ms ease)
- "View Case Study →" text appears centered on the overlay, 16px, weight 500, white

---

### Text Block (per case study)

Width: 40% on desktop, 100% on mobile. Vertically centered relative to the image carousel.

Layout (top to bottom):

1. **Case study number** — DM Mono, 13px, weight 500, color `var(--color-accent)`, letter-spacing 0.08em
   Values: `01`, `02`, `03`

2. **Title** — Plus Jakarta Sans, 30px desktop / 24px mobile, weight 600, color `var(--color-text-primary-light)`
   Margin above number: `12px`

3. **Description** — Plus Jakarta Sans, 17px, weight 400, line-height 1.7, color `var(--color-text-primary-light)`
   Margin above: `16px`

4. **Outcome/role line** — DM Mono, 13px, weight 500, color `var(--color-accent)`, letter-spacing 0.04em
   Format: `Led 0→1 design · [Outcome placeholder]`
   Margin above: `20px`

5. **CTA** — "View Case Study →", 16px, weight 500, color `var(--color-accent)`
   Margin above: `28px`
   On hover: underline, color darkens 15%

---

## Section 4: Profile

### Intent
A brief, human moment. A face and a quick read on who Jim is. Warm but not informal. The dark background creates contrast after two light sections.

### Anchor
`id="profile"`

### Background
`var(--color-surface-navy)`

### Layout
Two-column on desktop: photo left (~30% width), text block right (~65% width), gap ~5%. Single column on mobile: photo above text.

---

### Photo

- Shape: Circular crop
- Size: 240px diameter desktop, 180px mobile
- Border: `3px solid var(--color-accent)`
- **Asset:** Designer has provided the image as `/public/assets/jimreed_head_512x512.png`.

---

### Text Block

Color: `var(--color-text-primary-dark)`

**No section header.** The photo and bullet list establish intent without a label.

**Bullet points** — Plus Jakarta Sans, 16px, weight 400, line-height 1.8. Custom bullet: `—` (en dash) in `var(--color-accent)`, 12px left gap.

Placeholder content (designer to refine):
```
— Product Designer with 15+ years in complex enterprise domains
— Led 0-to-1 design for AI, genomics, and data platform products
— Currently designing internal data and observability products at LinkedIn
— Collaborates closely with engineers, data scientists, and domain experts
— Based in San Francisco
```

**LinkedIn Button**
Margin above: `32px`
- Label: "Connect on LinkedIn →"
- Style: Outlined button — border `2px solid var(--color-accent)`, background transparent, color `var(--color-accent)`, padding `12px 24px`, border-radius `6px`, font 15px weight 500
- On hover: background `var(--color-accent)`, color white, transition 200ms
- Opens: `https://www.linkedin.com/in/jimreed/` in new tab

---

## Section 5: More Case Studies

### Intent
A comprehensive archive for hiring managers who want to go deeper. Scannable, consistent, and visually honest about the range of Jim's work.

### Anchor
`id="more-work"`

### Background
`var(--color-surface-light)`

### Section Header
This is the **only section with an explicit section header.**
- Text: "More Case Studies"
- Font: Plus Jakarta Sans, 32px desktop / 24px mobile, weight 600
- Color: `var(--color-text-primary-light)`
- Margin below header: `48px`

### Grid Layout
- Desktop (≥ 1024px): 3 columns
- Tablet (768–1023px): 2 columns
- Mobile (< 768px): 1 column
- Gap: `24px`

### Case Studies to Include
All case studies from jimreed.net **not already featured in Section 3:**

| Title | Description | URL |
|---|---|---|
| Developer Experience | Guiding software developers through a cloud-based data platform experience. | https://jimreed.net/developer-experience |
| Machine Learning for Operators | Enabling operations engineers to train AI models for accuracy. | https://jimreed.net/industrial-internet |
| Operational Insights | Solutions to help development teams monitor and analyze operational data. | https://jimreed.net/operational-insights |
| Mobile Emergency System | A next-generation 911 service enables collaboration between emergency dispatchers and responders. | https://jimreed.net/mobile-emergency-system |
| Additive Manufacturing | Enabling people at work, optimizing innovative technologies and processes. | https://jimreed.net/additive-manufacturing |
| Analytics & Big Data | Enterprise SaaS and platform applications for big data and analytics. | https://jimreed.net/analytics-big-data |

Additional case studies from Behance will be added once content is manually migrated to `caseStudies.json`.

### Per Card

- **Thumbnail:** 16:9 aspect ratio, `border-radius: 6px`, `overflow: hidden`. Placeholder: solid color div with centered title text.
- **Title:** Plus Jakarta Sans, 16px, weight 600, color `var(--color-text-primary-light)`, margin top `14px`
- **Description:** Plus Jakarta Sans, 14px, weight 400, line-height 1.6, color `var(--color-text-muted)`, 3-line clamp (`-webkit-line-clamp: 3`), margin top `8px`
- **Domain tag:** DM Mono, 12px, weight 500, background `var(--color-accent)` at 12% opacity, color `var(--color-accent)`, padding `4px 10px`, border-radius `4px`, margin top `12px`. Examples: `AI`, `Data Platforms`, `Enterprise`, `Mobile`. Source from `caseStudies.json`.
- **Card hover:** `translateY(-4px)`, `box-shadow: 0 8px 24px rgba(0,0,0,0.10)`, transition 200ms ease
- **Entire card is a link** to the case study URL

---

## Section 6: Footer

### Background
`var(--color-surface-dark)`

### Layout
Two rows, centered content, max-width 1200px:

**Row 1 (top):** Two items horizontally — "Back to Top" left, "Connect on LinkedIn" right. Stack vertically on mobile.

**Row 2 (bottom):** `© 2026 Jim Reed` — left-aligned or centered, small text.

Divider between rows: `1px solid rgba(255,255,255,0.1)`, margin `24px 0`.

### Back to Top
- Text: `↑ Back to Top`
- Font: 14px, weight 500, color `var(--color-text-primary-dark)`
- On click: smooth scroll to top
- On hover: color `var(--color-accent)`, transition 150ms

### LinkedIn
- Text: `Connect on LinkedIn →`
- Font: 14px, weight 500, color `var(--color-text-primary-dark)`
- Opens: `https://www.linkedin.com/in/jimreed/` in new tab
- On hover: color `var(--color-accent)`, transition 150ms

### Copyright
- Text: `© 2026 Jim Reed`
- Font: 13px, weight 400, color `var(--color-text-muted-dark)`

**No contact form. No email address.**

---

## Content Architecture

### `caseStudies.json`

Designer has generated placeholder content `/src/data/caseStudies.json` as the single content source. Structure:

```json
[
  {
    "id": "agentic-ai-chat",
    "title": "Agentic AI Chat",
    "description": "Leveraging AI experiences to create valuable outcomes for customers.",
    "outcome": "Led 0→1 design · [Outcome placeholder]",
    "tags": ["AI", "Enterprise"],
    "url": "https://jimreed.net/agentic-ai-chat",
    "featured": true,
    "images": [
      "/assets/case-studies/agentic-ai-chat/01.png",
      "/assets/case-studies/agentic-ai-chat/02.png",
      "/assets/case-studies/agentic-ai-chat/03.png"
    ]
  }
]
```

- `featured: true` — included in Section 3 (Featured). The first three `featured: true` entries are used.
- `featured: false` (or omitted) — appears in Section 5 (More Case Studies) only.
- Images are stored in `/public/assets/case-studies/[id]/`.

### Behance Content

**Do not integrate with the Behance API.** The Behance API v2 requires OAuth authentication and is severely restricted for public use. All case study content should be manually entered into `caseStudies.json` by the designer.

### Image Asset Locations

| Asset type | Path |
|---|---|
| Brand illustrations | `/public/assets/brand/` |
| Profile photo | `/public/assets/jimreed_head_512x512.png` |
| Case study images | `/public/assets/case-studies/[id]/` |

**Placeholder strategy:** Use placeholder images provided. Do not use third-party placeholder image services.

---

## Animation & Interaction Summary

| Element | Animation | Spec |
|---|---|---|
| Section entrance | Fade + slide up | `opacity 0→1`, `translateY(24px→0)`, 500ms ease, IntersectionObserver trigger at 15% |
| CTA arrow (Intro) | Bounce down | `translateY(0 → 8px)`, 1.8s ease-in-out, infinite alternate |
| Featured case study image hover | Scale + overlay | `scale(1.03)`, overlay `opacity 0→0.45`, 300ms ease |
| Carousel slide | Translate X | 300ms ease, driven by index |
| More Case Studies card hover | Lift | `translateY(-4px)` + box-shadow, 200ms ease |
| Nav background | Fade on scroll | `background opacity 0→1`, 200ms, JS scroll listener |
| Nav link hover | Color shift | `color → var(--color-accent)`, 150ms |
| LinkedIn button hover | Fill | `background → var(--color-accent)`, 200ms |

**Reduced motion:** Wrap all animation declarations in:
```css
@media (prefers-reduced-motion: no-preference) {
  /* animation rules here */
}
```

---

## Responsive Breakpoints

| Breakpoint | Width | Key changes |
|---|---|---|
| Mobile | < 768px | Single column throughout; nav collapses to hamburger; brand illustrations stack; case study image above text; profile photo above bio; 2× padding reduction |
| Tablet | 768–1023px | 2-column grid in More Case Studies; nav stays expanded; case study rows stay horizontal |
| Desktop | ≥ 1024px | Full layout as described in each section |

---

*End of plan. Version 1.0.*
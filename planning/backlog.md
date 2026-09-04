# Backlog

## Backlog

- [ ] Switch DNS for jimreed.net to point at the GitHub Pages site (configure the custom domain + CNAME/A records, enable HTTPS)
- [ ] Optimize mobile experience — review and adjust vertical spacing throughout, and consider implementing animated scroll transitions for mobile (the Featured Case Studies column reveal and PacMan chase are currently desktop-only)
- [ ] Refactor the hand/gear animation to CSS instead of a GIF — replace `jimreed_animated_hand_gear_480x280.gif` in `BrandImagery.jsx` with inline SVG (hand, gear, "jimreed.net", "UX Design") animated via CSS (hand float + gear rotation). Drops the ~130KB GIF, gives crisp vector rendering at any size, and lets the colors use CSS tokens. Respect `prefers-reduced-motion`.
- [ ] Restore the More Case Studies section (currently hidden — component/code still in place in `MoreCaseStudies.jsx`, just not rendered by `Home.jsx`, and the "More Work" nav link is removed). Re-render it, re-add the nav link + section id to `Nav.jsx`, and add real thumbnail images for each card (replacing the title-text placeholder in `.more-work__thumb`). Also widen the case study page prev/next nav back to all case studies (`getNeighbors` in `caseStudies.js` is currently scoped to featured only). Supersedes the interim old-site link above — reuse the "More Case Studies" label and its placement.
- [ ] Case study tags: review/adjust the tagging strategy if needed, then populate real tag values for each case study
- [ ] Case study image assets: consider re-exporting all case-study images at one width (e.g. 1600px) so the in-page display is consistent and never soft. The page now uses a max-width strategy — images render at native size, centered, and only scale down to fit the column — so a mixed-size set is acceptable, but the current sources (~600–1300px wide) look undersized on wide screens. Decide between (a) one standard export width or (b) keeping varied sizes but raising the floor. Also revisit whether the annotation banners should stay baked into the pixels or move to HTML captions.
- [ ] Refine case study content — the initial build seeds each page from jimreed.net with a Problem/Approach/Outcomes skeleton. Raise it to a senior/principal standard: reframe "Approach" around key decisions and tradeoffs (not a list of process activities), surface a one-line outcome in the hero, make individual contribution explicit in the prose, give captions design rationale rather than labels, add a "Reflection / what I'd do differently" section, and replace all `[bracketed]` placeholders (timelines, outcome metrics, team) with real content.
- [ ] Unify color tokens around two overarching dark/light pairings — one anchored on `--color-surface-dark` (#0D0D12, currently Brand Imagery, carousel background, Footer) and one anchored on `--color-surface-navy` (#1A2744, currently Profile) — each with its own consistent light/text counterparts, rather than collapsing navy into the near-black dark. Exploratory: audit all `--color-surface-*`/`--color-text-*` token usage in index.css, assign each element to the appropriate pairing, and propose the token set; implementation will target specific elements chosen at that time.

## In Progress

- [ ] QA/staging prep for beta launch — two topics: (1) final QA pass on the site as currently live at https://jimreedia.github.io/portfolio/, ahead of switching jimreed.net's DNS to point at it; (2) plan a staging environment for post-beta work — once jimreed.net is live, ongoing changes need a gated build/release process rather than shipping straight to production — branch: chore/qa-beta-launch
  - Staging plan (implemented): split `deploy.yml` into `deploy-staging.yml` (auto-deploys every push to `main`, publishes to `gh-pages:/staging/`, injects `noindex` meta) and `deploy-production.yml` (`workflow_dispatch` only — the manual trigger is the release gate). Staging is reachable at `/staging/` under whichever domain serves the Pages site (github.io URL today, jimreed.net after DNS cutover) — no new hosting/DNS needed, since the build uses a relative Vite `base` and `HashRouter`, so the same artifact works unmodified at any path. Added `public/robots.txt` disallowing `/staging/`.

## Done

- [x] Simplify the footer — drop the LinkedIn link (already visible in the About section within the same viewport, so it's redundant), and put the "back to top" link and copyright info on the same row — branch: fix/simplify-footer
- [x] manually curate the carousel images shown in the homepage Featured Case Studies section — choose which shots appear and their order, re-crop as needed, and source new images where the current set falls short — branch: fix/homepage-case-study-images
- [x] Add link to old site — label is "More Case Studies" (phase 1: interim link; phase 2 replaces it with the restored section below) — branch: feature/add-link-to-more-case-studies
- [x] Scroll-linked section transitions (parallax) — deferred from the homepage build; replaces the one-shot fade-up that was removed — branch: feature/add-more-scroll-transitions
- [x] Featured case study contribution subtext — branch: feature/case-study-contribution-subtext
- [x] Adjust typography — branch: fix/adjust-typography
- [x] Animate pacman graphics on user scroll — branch: feature/animate-pacman-on-scroll
- [x] Recolor animated hand/gear graphic — branch: fix/recolor-hand-gear-graphic
- [x] In Nav component, replace the "Jim Reed" title text with an icon; add a favicon so it renders in the browser tab — branch: feature/nav-icon-favicon
- [x] Hide the entire More Case Studies section until we're ready to work on it — branch: chore/hide-more-case-studies
- [x] Design and build case study pages — branch: fix/case-study-pages-init
- [x] Homepage build (6 sections + nav) — branch: feature/homepage-redesign
- [x] Stop committing docs/ build output — branch: chore/ignore-docs-build-output
- [x] Remove case study numbers (01/02/03) from Featured Case Studies — branch: fix/remove-case-study-numbers
- [x] Add featured case study images (currently color-tile placeholders) — branch: fix/add-case-study-images
- [x] Move scroll-down CTA into Section 1 (Brand Imagery) and make it more subtle — branch: fix/move-scroll-down-CTA
- [x] Add workflow_dispatch trigger to deploy workflow — branch: chore/add-deploy-workflow-dispatch
- [x] Adjust Profile section (headshot crop, and other section adjustments as needed) — branch: fix/adjust-profile-section

# Backlog

## Backlog

- [ ] Recolor animated hand/gear graphic
- [ ] Animate pacman graphics on user scroll
- [ ] Adjust typography
- [ ] Scroll-linked section transitions (parallax) — deferred from the homepage build; replaces the one-shot fade-up that was removed
- [ ] Restore the More Case Studies section (currently hidden — component/code still in place in `MoreCaseStudies.jsx`, just not rendered by `Home.jsx`, and the "More Work" nav link is removed). Re-render it, re-add the nav link + section id to `Nav.jsx`, and add real thumbnail images for each card (replacing the title-text placeholder in `.more-work__thumb`). Also widen the case study page prev/next nav back to all case studies (`getNeighbors` in `caseStudies.js` is currently scoped to featured only).
- [ ] Case study tags: review/adjust the tagging strategy if needed, then populate real tag values for each case study
- [ ] Case study image assets: consider re-exporting all case-study images at one width (e.g. 1600px) so the in-page display is consistent and never soft. The page now uses a max-width strategy — images render at native size, centered, and only scale down to fit the column — so a mixed-size set is acceptable, but the current sources (~600–1300px wide) look undersized on wide screens. Decide between (a) one standard export width or (b) keeping varied sizes but raising the floor. Also revisit whether the annotation banners should stay baked into the pixels or move to HTML captions.
- [ ] Refine case study content — the initial build seeds each page from jimreed.net with a Problem/Approach/Outcomes skeleton. Raise it to a senior/principal standard: reframe "Approach" around key decisions and tradeoffs (not a list of process activities), surface a one-line outcome in the hero, make individual contribution explicit in the prose, give captions design rationale rather than labels, add a "Reflection / what I'd do differently" section, and replace all `[bracketed]` placeholders (timelines, outcome metrics, team) with real content.
- [ ] Unify color tokens around two overarching dark/light pairings — one anchored on `--color-surface-dark` (#0D0D12, currently Brand Imagery, carousel background, Footer) and one anchored on `--color-surface-navy` (#1A2744, currently Profile) — each with its own consistent light/text counterparts, rather than collapsing navy into the near-black dark. Exploratory: audit all `--color-surface-*`/`--color-text-*` token usage in index.css, assign each element to the appropriate pairing, and propose the token set; implementation will target specific elements chosen at that time.
## In Progress

## Done

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

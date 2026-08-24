# Backlog

## Backlog

- [ ] Recolor graphics
  - [ ] Pacman graphic
  - [ ] Animated hand/gear graphic
- [ ] Remove case study numbers (01/02/03) from Featured Case Studies
- [ ] Add featured case study images (currently color-tile placeholders)
- [ ] Adjust crop of headshot photo
- [ ] Adjust typography
- [ ] Hide "View Case Study →" links on Featured Case Studies until case study pages are built (keep the rest of each row visible)
- [ ] Scroll-linked section transitions (parallax) — deferred from the homepage build; replaces the one-shot fade-up that was removed
- [ ] Design and build case study pages
- [ ] Hide the entire More Case Studies section until we're ready to work on it (keep the component/code in place, just don't render it for now)
- [ ] More case studies thumbnail images
- [ ] Case study tags: review/adjust the tagging strategy if needed, then populate real tag values for each case study
- [ ] In Nav component, replace the "Jim Reed" title text with an icon; add a favicon so it renders in the browser tab
- [ ] Unify color tokens around two overarching dark/light pairings — one anchored on `--color-surface-dark` (#0D0D12, currently Brand Imagery, carousel background, Footer) and one anchored on `--color-surface-navy` (#1A2744, currently Profile) — each with its own consistent light/text counterparts, rather than collapsing navy into the near-black dark. Exploratory: audit all `--color-surface-*`/`--color-text-*` token usage in index.css, assign each element to the appropriate pairing, and propose the token set; implementation will target specific elements chosen at that time.
## In Progress

- [ ] Move scroll-down CTA into Section 1 (Brand Imagery) and make it more subtle — branch: fix/move-scroll-down-CTA

## Done

- [x] Homepage build (6 sections + nav) — branch: feature/homepage-redesign
- [x] Stop committing docs/ build output — branch: chore/ignore-docs-build-output

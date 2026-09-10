# Unify color tokens — audit & proposal

Branch: `fix/unify-color-tokens`. Status: **implemented** (2026-09-10). `src/index.css`
only; `npm run build` clean; no visible design change. Border alpha unified to `0.1`
(nav hairlines went `.08` → `.1`, imperceptible).

Goal (from backlog + Jim, 2026-09-10): understand the color system, cut the number of
variations, consolidate scattered literal colors onto tokens, and flag the handful of
places where a value might get swapped for another token. Implementation targets specific
elements chosen after this audit.

---

## The system in one paragraph

Every color on the site is one of six ideas:

1. **Light page** `#F2F0ED` — the default background almost everything sits on.
2. **Light page, sunk** `#E5E2DE` — one half-step darker, used once, to set the Featured
   band apart from the Intro above it.
3. **Dark well** `#0D0D12` — near-black. Image frames and wells (carousel, More-work
   thumbs), the Brand Imagery stage, and the Footer.
4. **Navy panel** `#1A2744` — used once, as the Profile background. (Previously also
   the navy→accent fallback gradient on thumbs with no image; that fallback was
   removed 2026-09-10 since every More card always has an image.)
5. **Accent** `#3D7AF5` — links, CTAs, active nav, list bullets. One blue, everywhere.
6. **Two muted grays** — neutral `#888888` on light, blue-tinted `#8899BB` on dark.

Text is just near-black `#111111` on light surfaces and off-white `#F2F0ED` on dark ones
(`--color-text-primary-dark` is deliberately the exact same hex as `--color-surface-light`
— the palette is a mirror).

So: **3 light/dark surface planes + 1 navy panel + 1 accent + 2 muted grays.** That is the
whole system. It is not bloated at the token level — the mess is in undocumented literal
colors sprinkled through the rules (see "Literals" below).

---

## Token usage map

| Token | Value | Used by | Count |
|---|---|---|---|
| `--color-surface-light` | `#F2F0ED` | body, Intro, More-work, Case Study page, nav mobile menu | 5 |
| `--color-surface-mid` | `#E5E2DE` | Featured band background | **1** |
| `--color-surface-dark` | `#0D0D12` | Brand Imagery stage, carousel frame, More-work thumb, Footer, Profile photo border | 5 |
| `--color-surface-navy` | `#1A2744` | Profile background | 1 |
| `--color-text-primary-light` | `#111111` | body text, nav links, hamburger bars, Case Study page | 4 |
| `--color-text-primary-dark` | `#F2F0ED` | Profile text, Footer text | 2 |
| `--color-text-muted-light` | `#888888` | carousel dots, More-work desc, CS back/lead/figcaption/meta/nav-label | 8 |
| `--color-text-muted-dark` | `#8899BB` | Brand Imagery CTA arrow, Footer copyright | 2 |
| `--color-accent` | `#3D7AF5` | ~15 spots: all links, CTAs, active states, bullets | ~15 |
| `--color-nav-bg` | `rgba(242,240,237,.92)` | scrolled nav background (= `surface-light` @ 92%) | 1 |

---

## Literals that should be on tokens (the actual cleanup)

These are hardcoded in the rules today and each is really one of the six ideas above.

### `#0D0D12` as a scrim — `rgba(13, 13, 18, x)` (rgb of `--color-surface-dark`)
- `.more-work__thumb-overlay` hover — `rgba(13,13,18,.42)` (index.css:827)
- `.more-work__thumb-overlay` touch scrim — `rgba(13,13,18,.55)` / `0` gradient (index.css:839)
- `.more-work__thumb-overlay` base — `rgba(13,13,18,0)` (index.css:806)
- `.lightbox` backdrop — `rgba(13,13,18,.94)` (index.css:1166)
- **Fix:** derive from the token — `rgb(from var(--color-surface-dark) r g b / .42)` — or
  at minimum a comment. Ties the scrims to the well color so they move together.

### `#fff` — on-dark foreground, 8 places
- PacMan caption / label / leader (index.css:294, 301, 307) + `PacmanScene.jsx` pupils use `#0D0D12`
- `.carousel__arrow` glyph (index.css:589)
- `.profile__btn` label (index.css:685)
- `.more-work__thumb-cta` label (index.css:811)
- `.lightbox__close` / `.lightbox__nav` glyphs (index.css:1195, 1211)
- **Inconsistency:** body text on dark is `#F2F0ED` (`--color-text-primary-dark`), but these
  eight use pure `#fff`. Decision point #2 below.

### `rgba(0, 0, 0, ~0.1)` — hairline divider on light, 5 places
- `.nav--scrolled` bottom border `.08` (index.css:132)
- `.nav__mobile-menu` bottom border `.08` (index.css:219)
- `.case-study__meta` top+bottom `.1` (index.css:1025-1026)
- `.case-study__nav` top `.1` (index.css:1110)
- **Fix:** one `--color-border` token (pick `.1`). Two alpha values (`.08`/`.1`) for the
  same job is a variation with no reason.

### `rgba(255, 255, 255, 0.92)` — `.more-work__thumb-fallback` text
- **Removed 2026-09-10.** The no-image fallback card (`linear-gradient(135deg,
  var(--color-surface-navy), var(--color-accent))` + this near-white text) is gone:
  every More Case Studies card always has a curated thumbnail, and `getMore()` filters
  out the unlisted entries that lacked one. Dropped `.more-work__thumb-fallback` from
  `index.css` and the `cs.thumb ?` branch from `MoreCaseStudies.jsx`. This was the only
  other use of `--color-surface-navy` — it now backs the Profile section alone.

### `rgba(255, 255, 255, x)` — subtle fills on dark, 3 one-offs in the lightbox
- `.lightbox__nav` fill `.08`, hover `.18` (index.css:1212, 1219); `.lightbox__counter` text `.7` (index.css:1233)
- Low priority — contained to one component. Could stay literal.

### Pure-black elevation — leave as-is
- `.carousel__arrow` disk `rgba(0,0,0,.6)`; box-shadows `rgba(0,0,0,.28–.38)`; inner
  `::after` lines `rgba(0,0,0,.08–.3)`. Standard black shadows, not surface colors. No token needed.

---

## Decision points for Jim

> **Decisions log (2026-09-10):**
> 1. **Keep navy.** Profile stays `#1A2744` as its own feature-panel surface.
> 2. **Keep both values, tokenize the white.** No value changes. Add a token
>    (`--color-text-bright-on-dark: #FFFFFF`) and swap it in for all 8 raw `#fff`
>    uses (PacMan SVG text/leader, carousel arrow, More-work CTA label, lightbox
>    close + nav glyphs, **and** the Profile-button label (`#fff` on accent — the
>    token covers bright text on any dark/saturated fill)). Running text on dark
>    keeps `--color-text-primary-dark` `#F2F0ED`. Net: two named on-dark
>    foregrounds, zero literal `#fff` anywhere.
> 3. **Keep the blue tint** on the footer copyright (`--color-text-muted-dark`
>    `#8899BB`). No neutral dark-muted needed.
> 4. **One dark-muted token** (`--color-text-muted-dark` `#8899BB`) for every dark
>    surface, near-black and navy alike. No navy-specific muted.
> 5. **Keep the near-black photo frame** (`--color-surface-dark`, 8px). No change.
> 6. **Keep `--color-surface-mid`** `#E5E2DE` for the Featured band. 4 surface tokens.
> 7. **Symmetric muted naming** (2026-09-10): `--color-text-muted` renamed to
>    `--color-text-muted-light` so it pairs with `--color-text-muted-dark`, matching
>    the `--color-text-primary-light` / `-dark` pair. 8 usages, no value change.
>
> **All 6 settled. No visible design changes — this is a pure tokenization/cleanup
> pass.** See "Implementation plan" at the bottom.

1. **Profile navy — keep it or collapse it?**
   `#1A2744` is used for exactly one background (Profile). The backlog note leaned "keep navy,
   don't collapse into near-black." If it stays, it's a deliberate one-off "feature panel"
   color and that's fine. If you'd rather have one dark surface, Profile becomes `#0D0D12`
   and navy survives only in the fallback gradient. **Everything else in this doc is
   independent of this choice.**

2. **On-dark text — unify `#fff` → `#F2F0ED`?**
   Standardize the eight `#fff` spots onto `--color-text-primary-dark` so there's one
   on-dark foreground. Or keep `#fff` for UI glyphs (arrows, close X) and reserve the
   off-white for running text — a defensible 2-value rule, but it is a rule to remember.

3. **Footer copyright is blue-tinted.** `.footer__copyright` uses `--color-text-muted-dark`
   `#8899BB` on near-black `#0D0D12`. Intentional cool tint, or do you want a neutral gray
   there? (There is currently no neutral dark-muted token — see #4.)

4. **`--color-text-muted-dark` is bluish `#8899BB`.** It reads as "belongs to navy" but is
   currently used on near-black (Footer copyright, Brand CTA arrow). If navy stays as its
   own plane, you may want: neutral `--color-text-muted-dark` for near-black + a separate
   navy-muted. If you want fewer variations, pick one and use it on both.

5. **Profile photo border.** `.profile__photo` has an `8px solid var(--color-surface-dark)`
   frame — a near-black border on the navy panel. Keep, or switch to navy / accent / light?

6. **`--color-surface-mid` (`#E5E2DE`), single use.** It only exists to separate Featured
   from Intro. Keep the subtle step, or set Featured to `--color-surface-light` and delete
   the token? (Featured would then blend into Intro with only the carousel framing to
   separate them.)

---

## While we're in here (contrast, not blocking)

- `--color-text-muted-light` `#888` on `#F2F0ED` is ~3.5:1 — under WCAG AA for body text.
  Fine for the 22px Case Study lead, but `.case-study__media figcaption` (13px) and
  `.case-study__nav-label` (12px) fail. Nudging the token to ~`#767676` fixes all of them.
- `--color-text-muted-dark` `#8899BB` on navy `#1A2744` is ~4.3:1 — passes for large,
  borderline for the 13px copyright if that ever moves onto navy.

---

## Proposed end state (token block)

```css
:root {
  /* Surfaces */
  --color-surface-light: #F2F0ED;   /* default page */
  --color-surface-mid:   #E5E2DE;   /* light, sunk one step (Featured band) */
  --color-surface-dark:  #0D0D12;   /* near-black wells, frames, footer */
  --color-surface-navy:  #1A2744;   /* navy feature panel (Profile) */

  /* Text — the palette is a mirror: primary-dark === surface-light on purpose */
  --color-text-primary-light:  #111111;
  --color-text-primary-dark:   #F2F0ED;   /* running text on any dark surface */
  --color-text-bright-on-dark: #FFFFFF;   /* NEW — glyphs/labels on dark or accent fills */
  --color-text-muted-light:    #888888;   /* dimmed text on light */
  --color-text-muted-dark:     #8899BB;   /* dimmed text on any dark surface */

  /* Accent */
  --color-accent: #3D7AF5;

  /* Lines */
  --color-border: rgba(0, 0, 0, 0.1);     /* NEW — replaces 5 ad-hoc rgba(0,0,0,.08–.1) */

  /* Derived */
  --color-nav-bg: rgba(242, 240, 237, 0.92); /* = surface-light @ 92% */
}
```

Token count: **+2** (`--color-text-bright-on-dark`, `--color-border`). Every literal color
in the stylesheet then traces back to a named idea.

---

## Implementation plan

No design changes. Each step is a mechanical swap.

1. **Add `--color-text-bright-on-dark: #FFFFFF`.** Replace raw `#fff` at index.css
   :294, :301, :307 (PacMan SVG text + leader), :589 (carousel arrow), :685 (Profile
   button label — `#fff` on accent), :811 (More-work CTA label), :1195 (lightbox close),
   :1211 (lightbox nav). Also `PacmanScene.jsx` uses `#0D0D12` for pupils inline —
   consider passing tokens, low priority (it's an SVG illustration).
2. **Add `--color-border: rgba(0, 0, 0, 0.1)`.** Replace the hairline borders at
   index.css :132 and :219 (currently `.08` — will become `.1`, a ~imperceptible
   darkening over the blurred nav) and :1025, :1026, :1110 (already `.1`).
   *If the nav borders should stay lighter, set the token to `.08` instead and the
   case-study dividers lighten imperceptibly — either way it's one value.*
3. **Tie the dark scrims to the surface token.** Replace `rgba(13, 13, 18, x)` at
   index.css :806, :827, :839 (×2), :1166 with
   `rgb(from var(--color-surface-dark) r g b / x)`. Pure refactor, identical output.
   Baseline-safe in all evergreen browsers since 2024; if that's too new, leave the
   literals with a `/* = --color-surface-dark */` comment.
4. **Document the mirror** in the token block comments (done above): `primary-dark`
   is deliberately the same hex as `surface-light`; `nav-bg` is `surface-light` @ 92%.
5. **Leave untouched:** pure-black elevation shadows (`rgba(0,0,0,.28–.38)`), the
   carousel arrow disk (`rgba(0,0,0,.6)`), inner `::after` bevel lines, and the
   lightbox's `rgba(255,255,255,.08/.18/.7)` fills (contained to one component).

### Not in this pass (noted for later)
- `--color-text-muted-light` `#888` fails WCAG AA on `#F2F0ED` for small text (13px figcaption,
  12px nav label). A nudge to ~`#767676` fixes it. Separate a11y task.

# Refine case studies: working notes

The single home for the "Refine case study content" backlog item. Diagnostic pass
started 2026-09-09; copy work started 2026-09-11 with the Operational Insights pilot
(done, see its entry below). No copy has changed yet on any other page. Everything below
is meant to be worked through in Jim's voice, checked against the jimreed.net /
myportfolio originals.

**Source review is mandatory, not optional, before drafting any page** (see cross-cutting
principle 10): `/Users/jimreed/Projects/portfolio/case-study-references.md` maps every
case study to both its myportfolio URL and its full local `production images/` folder.
Review both in full before touching a page, not just the images already wired into
`caseStudies.json`.

Two starting positions, per the backlog history:
- **Featured 3** (Agentic AI Chat, Genomic Data Platform, AI Recommendations): already
  have good narrative structure and are built from Jim's own writing. They need
  targeted editing, not restructuring. Detailed punch lists below.
- **The 6 listed "more" pages**: restructured this session from a 4-line skeleton into
  the `blocks` format. Structure is good; the prose is Claude's synthesis of thin
  myportfolio text plus production-image detail, so it needs a source reconciliation
  and a voice pass on top of the cross-cutting fixes.

**2026-09-11:** the 3 unlisted pages (Samsung Interactive TV, Banking Experiences,
Walmart.com Content) were removed entirely, data + assets, rather than rehabbed. Their
stubs are gone from this doc.

**Pilot-first rollout:** rather than applying the cross-cutting fixes to all 9 remaining
pages at once, **Operational Insights is the pilot** — fully executed first to validate
the framework. See its entry below for the finalized approach, now done.

**Next up (decided 2026-09-12, supersedes the earlier "more pages first" plan): the
featured 3.** Reprioritized ahead of the remaining "more" pages because they're the
highest-traffic pages on the site, what most visitors click first, and the lowest-effort
remaining work: targeted editing against the punch lists below, not the
reconciliation-against-thin-source work the "more" pages still need. First step, before
any drafting: the full source review per principle 10 (myportfolio original + complete
`production images/` folder) hasn't been done for any of the three yet.

**Decided 2026-09-13: one case study at a time, sequential worktrees, not parallel.**
Considered branching two more worktrees at once for Genomic Data Platform and AI
Recommendations right after Agentic AI Chat, then reviewing and merging all three
together. Jim opted to keep going one at a time instead, so whatever the next pass turns
up (a framework wrinkle, a source-review surprise, a pattern worth reusing) can actually
inform the one after it, rather than three branches drifting independently off the same
starting point. **Genomic Data Platform done 2026-09-14** (branch:
fix/refine-case-study-genomic-data-platform). **AI Recommendations done 2026-09-14**
(branch: fix/refine-case-study-ai-recommendations), the last of the featured 3, see its
entry below. **All three featured case studies are now done**, pending review and merge.

**Reprioritized again 2026-09-14: next up is a further refine pass on the 4 case studies
already done** (Operational Insights, Agentic AI Chat, Genomic Data Platform, AI
Recommendations), not the remaining 5 "more" pages. As an interim, presentation-layer fix
to keep the site presentable in the meantime, every image across all 5 not-yet-refined
pages was flagged `unframed` (2026-09-14): their source images still carry old baked-in
rounded corners and drop shadows, and the new site-wide border+radius CSS was stacking a
second frame on top of that. `unframed` opts them out so each page reads as one clean
frame, without touching prose or images. This is provisional, not the real fix; when each
of the 5 gets its full content refine, treat its images the normal way (re-export opaque,
crop banners to captions, frame normally, drop `unframed` unless a genuine alpha
composite turns up).

Once the further refine pass on the 4 done pages wraps, back to the remaining 5 "more"
pages. All 5 (Developer Experience, Machine Learning for Operators, Mobile Emergency
System, Additive Manufacturing, Analytics & Big Data) still carry the original
credibility risk, synthesized text presented as Jim's real history, and should get the
reconciliation pass in roughly this order: **Developer Experience first** (real outcome
arc already, headings in decent shape, the closest to done, was the earlier pick for
"next" before the featured 3 jumped ahead of the whole batch), then the other 4, which
each have a bigger gap to close: Machine Learning for Operators and Mobile Emergency
System have no stated outcome anywhere in the source, Analytics & Big Data has an
unresolved shipped-vs-concept ambiguity, Additive Manufacturing needs more structural
consolidation.

**Developer Experience done (2026-09-16)**, first of the remaining 5 "more" pages,
branch: fix/refine-case-study-developer-experience. See its entry below for the full
account. **Machine Learning for Operators done (2026-09-16)**, second of the remaining
5, branch: fix/refine-case-study-machine-learning-for-operators, see its entry below.
**Mobile Emergency System done (2026-09-16)**, third of the remaining 5, branch:
fix/refine-case-study-mobile-emergency-system, see its entry below. **Additive
Manufacturing done (2026-09-17)**, fourth of the remaining 5, branch:
fix/refine-case-study-additive-manufacturing, see its entry below. **Analytics & Big Data
done (2026-09-18)**, fifth and last of the remaining 5, branch:
fix/refine-case-study-analytics-big-data, see its entry below. All 9 case studies have
now had their full refine pass. **Next is a second pass (decided 2026-09-18, Jim):** one
"Case study second pass" backlog item that combines content refinement and image
re-export, done together one case study at a time, since re-exporting images (including
the bump to the 2x standard) fits naturally into re-reading and tightening a page. It
absorbs the further pass on the first 4 flagged in the 2026-09-14 reprioritization above;
the order is Jim's call. Per-page open flags in the entries below carry into it.

---

## Cross-cutting (every case study)

1. **The page lead is a category label, not an outcome.** `cs.description` renders as
   the 22px subtitle under the title (`.case-study__lead`). Most are vague ("Leveraging
   AI experiences to create valuable outcomes for customers"). Rewrite each as one
   sharp sentence that names the result. For the featured 3 the sharper line already
   exists in each `blurb` and just needs compressing. Highest-leverage single fix.

2. **The strong writing is hidden (featured 3).** Each featured `blurb` is specific,
   first-person, and outcome-led; the detail page never shows it (homepage card only).
   Decide: lift blurb-quality language into the lead + opening section, or also render
   the blurb on the detail page. (The 6 "more" pages don't have this split; their
   `blurb` and `description` were written together this session.)

3. **No reflection section.** No page has a "what I'd do differently / what I learned"
   close. Add one to each.

4. **Section headings: two tiers, not one formula.** Bare activity labels ("Card
   Sorting," "Storyboards," "Wireframes") tell the reader what was done, not what was
   decided or why it mattered. Fix by tier:
   - **Decision / bet sections** (the 1 or 2 per case study that carry the argument):
     the heading names the decision, and the opening sentence states the call plus what
     was traded away. "Inline, not a separate panel." "Why the donut chart had to go."
     "One measurement method, shipped by three teams." Do not wrap these in the pattern
     below or the strongest material gets buried.
   - **Supporting / craft sections** (everything else): "Activity + concrete goal."
     "Storyboards to Find the Critical Features." "A Mood Board for Emergency Alerting."
     This keeps the artifact visible (a portfolio reader scans for "storyboards /
     research / wireframes"), adds the why, and does not overclaim an outcome that was
     not there. Two cautions: vary the construction so it is not literally "X to Y"
     every heading, and keep the goal concrete ("...to Find the Critical Features" names
     a design output; "...to Align the Team" is still filler).
   - Nothing stays a bare label.

5. **Real outcomes / metrics.** The featured 3 have one real number between them
   (10,000 engineers). The 6 "more" pages mostly have no stated outcome at all (the
   myportfolio sources didn't). Every page needs at least a qualitative result stated
   plainly, and a number wherever one exists (adoption, time saved, what shipped).
   Business outcomes (adoption, time saved, users reached, etc.) get folded into the
   lead / opening statement rather than a dedicated "Business Outcomes" section
   (2026-09-11, Jim's instruction).

6. **Contribution language.** Watch for "I collaborated / I conducted / I helped" where
   it could be "I decided / I argued for / I owned." Sections that open on a generic
   truism ("Storyboards help communicate to stakeholders...", "Prototypes are invaluable
   UX tools...") should open on Jim's decision instead.

7. **Captions are alt text, not rationale.** Section images carry accessibility `alt`
   only, no visible caption. The backlog asks for captions that carry design rationale.
   **Decided 2026-09-11:** the annotation banners currently baked into several images'
   pixels (a headline overlaid on the screenshot) move to HTML captions instead, and the
   captions render in the Lightbox too, so paging through the Lightbox alone tells the
   high-level story. Mechanism: `caption` on image blocks, rendered as a `<figcaption>`
   both inline (`CaseStudyPage.jsx`) and in `Lightbox.jsx`. Where a case study's raw
   `production images/` source has an earlier, less-annotated version of a banner-baked
   image (check for a `-v1` sibling or similar), prefer that as the base image and carry
   the removed banner text forward as the seed for the new caption rather than writing
   from scratch. This pass covers the pilot's images only; the standardized re-export
   across all case studies (WebP, uniform width) is the separate "Case study image
   assets" backlog item.

   **Decided 2026-09-11/12:** every image also gets a standard 1px border + 6px radius
   by default (`.case-study__media img`), opt out per image with `unframed` for
   alpha-transparent composites (a border would frame empty canvas, not content).
   Since banners are cropped away on re-export and rounding is now CSS not baked
   pixels, most re-exports should drop the alpha channel entirely, no longer needed.
   Documented exception: Mobile Emergency System's phone composite (`app-comps.png`)
   stays alpha and `unframed`. Flag any other genuine composite the same way as it's
   re-exported; default assumption going in should be "opaque, framed." Border color is
   `--color-text-muted-light` (#888888), chosen to match the `#9e9e9e` Jim originally
   baked into these images by hand; `--color-border` (the site's existing hairline-divider
   token) is too faint for this.

   **Mechanism (2026-09-12, revised 2026-09-15):** a numeric `maxWidth` field on an
   image block (or the `hero` object) caps its display width, e.g. `"maxWidth": 480` —
   not a boolean, so any value works, not just one fixed narrow tier. Applied via inline
   `style` (`mediaMaxWidth()` in `CaseStudyPage.jsx`), as `min(Npx, 100%)` so it still
   shrinks responsively on narrow viewports. Every image without `maxWidth` set keeps the
   page's existing default (760px below 1024px, ~872px at desktop's bleed width).
   **2x export (2026-09-16, supersedes the 2026-09-12 "100%, no upscaling" backlog
   decision once genuinely higher-resolution source captures are available):** export at
   twice the image's actual display width, not its CSS display size. An unconstrained
   section image displays at up to 872px, so export at 1744px; an image with
   `maxWidth: N` set exports at `2 * N`. The `width`/`height` fields in `caseStudies.json`
   still record the export's real pixel dimensions (so a 2x image reads as, e.g.,
   1744×966), the responsive CSS (`max-width: 100%; height: auto`) handles the rest.
   Only applies to new re-exports; already-shipped 100%-scale images get bumped to 2x
   opportunistically when their page is next touched, not via a dedicated retrofit pass.
   **The caption does not inherit the image's `maxWidth`** (changed 2026-09-15;
   `CaseStudyPage.jsx`'s `figcaption` no longer takes the `mediaMaxWidth()` style): a
   narrow image (an icon capped to 252px, say) still gets a caption sized to the normal
   default column width, not squeezed to the image's own narrow width. This keeps every
   caption's wrap behavior consistent regardless of what width the image above it
   happens to be capped to. See principle 13 for what this means for caption length.

8. **Copy style:** no em-dashes (see backlog). Commas, colons, parentheses, or separate
   sentences.

9. **AI artifacts in an AI-era process.** For case studies that are themselves AI
   products (Agentic AI Chat, AI Recommendations, Machine Learning for Operators), the
   Reflection section is a natural place to relate classic UX artifacts (wireframes,
   storyboards, personas) to how they show up in AI-era design work. This is a real
   positioning angle, but it is Jim's opinion to state, not something to invent, so
   surface it when writing those pages rather than filling it in speculatively.

10. **Review the full source before drafting, every time.** Working only from what's
    already wired into `caseStudies.json` is not enough, it shows only what a prior pass
    happened to pick. Before restructuring or rewriting any page, review both (1) the
    myportfolio original and (2) the *entire* local `production images/` folder for that
    case study (paths in `case-study-references.md`), including files never referenced
    anywhere in the current draft. The Operational Insights pilot missed a real sketch
    asset (`OI-big-numbers-ideation.png`) and the actual dropped-logos mockup
    (`OI-comp-early.png`) on the first pass, both sitting unused in the folder the whole
    time, because only already-wired images were checked. Caught 2026-09-11, folded in
    after the fact; do the full review upfront for the rest.

11. **Process artifacts earn their place as evidence of a decision, not as default
    "I did process."** The old convention showed sketches and storyboards to prove a
    methodology was followed. The stronger use: show the rough version next to the
    shipped one, so the *distance between them* is the point, an idea changing, not a
    step being completed. Use a sketch or storyboard when it documents a decision
    (Operational Insights' fast-facts sketches feeding straight into the shipped
    numbers); skip it when it would just be a "here's my process" beat with nothing
    riding on it.

12. **Captions carry real story weight, they are not a label.** The Lightbox (see
    principle 7) means some visitors experience a case study primarily by paging through
    images and reading only the captions, the page's running text may not be what they
    read at all. A caption that just names what's pictured ("Blue for what happened,
    green for what the model predicts") fails that visitor; one that carries the
    decision or the stakes works for both the page reader and the Lightbox-only one.
    Write every caption as if it might be the only sentence this reader sees for that
    section: state the call, the tension, or the outcome, not just the subject.
    Concise still matters, this is one sentence doing real work, not a paragraph.

13. **Every caption must render on one line, no wrap, wherever it appears.** Decided
    2026-09-14, applied to all 4 case studies done at that point (Operational Insights,
    Agentic AI Chat, Genomic Data Platform, AI Recommendations); apply it to the
    remaining 5 as they get their refine pass, and to any caption touched after this
    point on the 4 already done. A wrapped caption reads as a paragraph, not a caption,
    undercutting principle 12's "one sentence doing real work." **A caption's wrap width
    does not depend on its image's `maxWidth`** (see principle 7's mechanism note,
    revised 2026-09-15): inline, every caption wraps at the page's normal default column
    width regardless of how narrow the image above it is capped, so there is exactly one
    budget to write against, not a per-image one. Two contexts to satisfy, both fixed
    regardless of any image's own `maxWidth`:
    - **Inline**: the default column, ~872px measured at desktop.
    - **Lightbox**: `.lightbox__caption` is a fixed 1000px box in 20px bold Roboto Slab
      (restyled and widened from 640px / 14px Roboto on 2026-09-21), still narrower than
      inline in characters-per-line terms, so it's normally the tighter constraint of the
      two. At viewports under ~1120px (the widest caption needs that much) it wraps to two
      lines by design; the one-line requirement is checked at desktop (1280px and up).
    In practice: target roughly 90-100 characters as a safe one-line budget (this covers
    both contexts for the vast majority of captions). Character count is a rough guide
    only, actual width depends on the letters used (14px font, ~5.7-5.9px average per
    character measured at the old inline size; the Lightbox's 20px bold slab measures ~9.5px
    average, and the widest current caption is 96 characters at 964px of the 1000px box, so
    headroom is thin: a caption past ~100 characters will wrap); verify by rendering, don't
    just count characters. To verify:
    load the page in the running dev server and check every `figcaption` for
    `scrollHeight` beyond one `lineHeight`, then open the Lightbox and step through every
    image doing the same check against `.lightbox__caption` (a short Playwright script,
    not eyeballing, since some wraps are a few pixels past the edge and easy to miss
    visually). Iterate: a caption that still wraps after a first rewrite needs cutting
    further, not just rephrasing, favor dropping a clause over keeping every detail.

---

## Featured

The punch lists below are text-only (they predate the pilot's image work). Check each
page's images against principles 7 and 10 too: any baked-in banners move to captions, any
image worth re-exporting follows the same WebP/opaque/bordered pattern as Operational
Insights, per the "Case study image assets" backlog item. Not yet known whether any of
the 3 have baked-in banners, that's part of the source review before drafting.

### Agentic AI Chat — done (2026-09-13)

Source review done first, per principle 10: myportfolio original checked (its text is a
paraphrase of what was already wired into `caseStudies.json`, nothing new there), and all
6 images in `production images/LinkedIn Agent/` reviewed in full (all 6 were already
wired in; unlike the Operational Insights pilot, nothing was sitting unused). One real
finding from reading the images closely rather than just their existing alt text, caught
and corrected by Jim after an initial misreading: `LinkedIn-icon-design.png`'s usage
examples show an early concept that explored a separate name for the Slack bot, **O11y
Copilot**, before the team settled on one name, Observe Agent, across both the app and
Slack (not, as first drafted here, two names that both shipped). That's evidence of the
icon-design exploration feeding a naming decision, not just a visual one, and became the
closing beat of the Branding section.

**Reordered** to lead with the persona: intro → **What SREs Need Mid-Incident** (was
"User Needs," moved from position 4 to 2, now includes the actual "I want Observe Agent
to..." need statements from the image as a `list` block, not just a paraphrase) → **The
Agent Lives Beside the Data** (was "AI in Context") → **A Side Panel, Sized to the Task**
(was "UI Principles," reframed around the actual call: a persistent side panel over a
modal or full takeover, narrow for supplementary info and wider for create-and-edit,
argued from a panel audit rather than assumed) → **Three Primitives: Plugins, Context,
and Inline Artifacts** (was "Elements and Interactions," names the tradeoff: inline chart
artifacts cost more up front than linking out to the real dashboard, and were worth it
so the engineer doesn't lose their tab) → **Branding** (kept, tightened, plus the
early-O11y-Copilot-name finding) → **Reflection** (new: relates the classic UX toolkit to how it actually
showed up here per principle 9, needs statements instead of a persona board, a storyboard
auditing screen real estate instead of a user flow; open question on whether the
one-conversation-per-panel model holds up against an engineer running parallel
investigations, which is closer to how a bad incident actually goes).

**Metric standardized** on "10,000+ engineers" (lead, intro, blurb all agree; body
previously said "10,000 employees"). No harder time-savings number exists in the source
to state, stayed qualitative rather than inventing one.

**Schema normalized** to `blocks` (was the legacy `body`/`image` shape), matching Genomic
Data Platform and AI Recommendations.

**Images re-exported (2026-09-13), folding in the "Case study image assets" backlog item
for this case study.** None of the 6 had an unbannered `-v1` sibling in the source
folder (unlike some of Operational Insights' images), so a first pass patched the
banners out of the existing PNGs programmatically (color-thresholded to find each
banner's exact pixels, then flat-fill reconstruction sampled from each image's own
unbroken surroundings, not automatic inpainting, tried once on the side-panel-principles
diagram and cv2.inpaint produced a visible blur smear on that flat, vector-style art).
That stopgap was fully superseded once Jim re-exported all 6 himself from the real
source files: cleaner results across the board (smaller file sizes, tighter crops, no
guesswork over what a hidden sidebar icon should be), and it surfaced one thing the
patch job couldn't have shown, `interaction-specs` is a genuine composite (a
drop-shadowed stack of screenshots and callouts, not a single flat rectangle), so it
carries a real alpha channel and is flagged `unframed` rather than getting the standard
border/radius, which would otherwise box in its soft edges. Final assets: WebP, renamed
from the literal `LinkedIn-*.png` source names to descriptive ids
(`observe-agent-home`, `agent-in-context`, `side-panel-principles`,
`interaction-specs`, `user-needs`, `icon-design`) matching Operational Insights'
convention; `width`/`height` updated in `caseStudies.json` to match each re-export's
actual (slightly different) final dimensions. Captions added in the earlier content
pass already carried the banners' story-weight content, so they didn't need to change.
Verified with `npm run build` and screenshots after each swap.

**Second pass (2026-09-24), branch `fix/refine-case-study-agentic-ai-chat-pass-2`.** Jim
re-exported `observe-agent-home` (1744×1168), `agent-in-context` (1948×1168), and
`icon-design` (1392×964) at 2x. The icon image now shows one name everywhere, so the
O11y Copilot naming beat was cut from Branding (Jim: not compelling for this story). New
decision section **An Agent, Not a Chatbot: Designing the Layers Above the Model**, placed
before Three Primitives, with the agent-layers diagram (`agentic-ai-chat-agent-layers.webp`,
1744×900, full column width, default frame, slide title kept as Jim exported it). Brief:
`case studies/LinkedIn Agent/agent-layers-case-study-handoff.md`. Supporting edits: the intro
now calls it an agent designed for the domain, not a general-purpose chatbot, and Three Primitives opens
"Inside those layers." Every caption was checked with the one-line render check, inline and in the
Lightbox. On mobile (390px), the diagram's small box text is too small to read, but its labels are
readable. Later the same day: added `agent-fullscreen.webp` (1708×1168) to Three Primitives
as the shipped inline artifact, and a sentence in the side panel section on the full-page
view (the same container as the hero; a conversation continues across either surface). Added
a per-image `lightboxMaxWidth` field (user-needs 760, side-panel-principles 840, agent-layers
1100). Full review pass: Branding renamed to **An Icon Built to Earn Trust** (principle 4: no
bare labels), and the Reflection's "second surface" line reworded, since a full-page surface
now exists. Open image flags: homepage carousel `agentic-ai-chat-2` shows lorem ipsum plugin
descriptions, and the chat date in `agent-in-context` and `agentic-ai-chat-3` (April 3)
doesn't match the log dates (April 6).

### Genomic Data Platform — done (2026-09-14)

Source review done first, per principle 10: myportfolio original checked (its text is a
close paraphrase of what was already wired into `caseStudies.json`, nothing structurally
new there), and the full `production images/Illumina/` folder reviewed, all 29 files, not
just the 12 already wired in. Two real findings sitting unused the whole time:
`Cohorts-design-principles.png` (three design principles, "Data density is King," not
used, judged too disconnected from the narrative to force in) and
`Cohorts-comparison marker frequency.png`, the Marker Frequency comparison view, a real
shipped feature that turned out to be a *closer* match to the customer quote already in
the case study than the heat map image that was standing in for it. That became the
session's best find: the existing "Enhancing the Experience" section paired a direct
quote from William LaFramboise (Allegheny Health Network, readable directly in the
image, not paraphrased) asking to compare gene variance across multiple cohorts with a
screenshot of the Genes tab, a single-cohort view that doesn't actually do that
comparison. The unused Marker Frequency image does. Both shipped and both are now
shown, in order, as two answers to the one call.

**Collapsed the five-section methods tour to two**, per the punch list: Personas and
Card Sorting merged into **One Persona to Design Around** (the real finding: three roles
were mapped, but design decisions were made for one, the research scientist chasing a
biomarker; card sorting settled the shared vocabulary underneath that work). User
Interviews, Storyboards, and Prototypes merged into **Cohorts That Nest, Compare, and
Save** (the actual interaction model the storyboards worked out. hierarchical cohorts,
temporary tabs to compare several at once, ethnicity estimated against 1000 Genomes
Project reference data, save/share as a snapshot). Reading the storyboard grid closely
(all 15 frames, most previously unseen since only the top strip was legible in the old
banner-cropped export) is what surfaced these specifics; the old copy never mentioned
any of them.

**Pulled the two strongest sections forward**, per the punch list: the customer-call
story (now **What One Customer Call Shipped**, expanded with the Marker Frequency
finding above) and the user-testing story (now **What Two Testing Sessions Changed**:
the Invert Y-axis fix for rare variants squished to the bottom of a plot, and the radar
charts for six-axis variant-type distribution) both moved up, ahead of Cross-Product
Design.

**Cross-Product Design expanded** into **One System Across Three Very Different Data
Types**, now naming what actually carries over to the Multiomics proteomics and spatial
apps (the component system and the chart-beside-its-data-table pattern) rather than
claiming identical page chrome, which a closer look at the screenshots shows isn't true
(Cohorts uses a persistent left sidebar; Multiomics uses a breadcrumb-and-toolbar shell).

**Reflection added**, built from two specifics the source review surfaced rather than
invented: every comparison view and every session caps at four cohorts, with nowhere
for a fifth or sixth to go in the current tabs layout; and the ethnicity-estimation
scatter plot is only as representative as the 1000 Genomes reference panel behind it.

**No metric added.** As with Operational Insights, the "Total Data: 2.67 TB" / "Total
Analyses: 1,570" figures visible in the mockups are demo content baked into the
screenshots, not real adoption numbers, so they stayed out rather than being passed off
as one. Lead rewritten around the customer-call story instead of a metric.

**Images, fully re-exported, folding in the "Case study image assets" backlog item for
this case study.** 8 of the 12 previously-wired images had an unbannered `-v1` sibling in
the source folder; those became the new base images per principle 7, with the removed
banner text seeding several captions (survival-comparison's "Designing Analysis Outcomes
for Scientists," card-sort's "Card Sorting with Microbiology Experts," etc.). The 4
without a `-v1` (heatmap, radar-charts, both Multiomics images) were already clean.
Added the previously-unused Marker Frequency comparison image as a 13th. All first
converted to WebP (Pillow, quality 88, no cwebp/ImageMagick available in this
environment); Jim then re-exported 8 of the 13 himself from the real source files
(`survival-comparison`, `card-sort`, `user-interviews`, `gene-heatmap`,
`marker-frequency-comparison`, `radar-charts`, `proteomics`, `spatial`), superseding the
Pillow pass for those with tighter crops and smaller file sizes, each verified and its
`width`/`height` updated to match. The remaining 5 (`personas`, `storyboards`,
`prototype`, `customer-feedback`, `user-study`) stayed on the Pillow export. Two images,
`personas.webp` and `storyboards.webp`, have a genuine soft-edged "stacked paper" shadow
effect baked into the source graphic (not a hard rectangle) and are flagged `unframed`,
matching the Mobile Emergency System precedent, so the standard border doesn't box in
empty canvas around the shadow. The other 11 are opaque and framed. `width`/`height`
recorded for all 13 from their actual re-exported dimensions.
Renamed from literal `Cohorts-*` / `Multiomics-*` source names to descriptive ids
(`survival-comparison`, `personas`, `card-sort`, `user-interviews`, `storyboards`,
`prototype`, `customer-feedback`, `gene-heatmap`, `marker-frequency-comparison`,
`user-study`, `radar-charts`, `proteomics`, `spatial`). Also deleted an orphaned,
never-referenced `01.png` (a duplicate of the comps-gene-discovery source, added in the
original #12 PR and never wired in). Verified with `npm run build` (clean) and
Playwright screenshots (desktop, mobile, and the Lightbox, including both `unframed`
images) since `chromium-cli` wasn't available in this environment.

### AI Recommendations — done (2026-09-14)

Source review done first, per principle 10: myportfolio original checked (a close
paraphrase of what was already in `caseStudies.json`, nothing structurally new there),
and the full `production images/AI Recommendations/` folder reviewed, all 27 files, not
just the 13 already wired in. `AI-Workbench-model-building-concept.png` turned out to be
a stray GE Predix asset (Analytics Workbench, not Informatica), misfiled in this folder;
excluded rather than forced in. Two real corrections caught against the shipped
artifacts: the personas image labels the second persona **Citizen Developer**, not
"Citizen Integrator" as the prose had it (Gartner's term is Citizen Integrator, but the
shipped design used a different label, followed the artifact); and "Visual Redesign"
claimed a before-and-after, but the source image only ever showed the one modernized
state, so the caption was corrected to match. The customer-delight quote had a full
attribution sitting unused in the source image (Keri-Ann Bowen, ETL Developer,
University of Maryland) that the alt text had stripped down to "a customer quote."

Restructured from 11 sections to 8. Biggest change: the "Sketches and Renderings" and
"Storyboards" sections were marked as one-sentence throwaways in the initial punch list,
written before the source review. Un-cropped, `AI-Recommendations_storyboard-v1.png`
turned out to be a fully legible 8-frame storyboard (a "Show Me" card, accept/dismiss in
place, dismissed items recoverable under their own tab), and
`AI-Recommendations_concept-renderings-v1.png` shows the actual design bet directly: a
recommended transform rendered as a dashed placeholder *inline in the canvas*, the
alternative to a separate list panel. That image became the lead evidence for a new
decision-tier section, "Inline, Not a Separate Panel," built around it and the
predictive-text analogy per the punch list's steer to build the page around the two
strongest ideas. The remaining evolution material (concept sketches, storyboard,
branded CLAIRE exploration, the animated prototype) consolidated into one supporting
section, "From Napkin Sketch to Shipped Interaction," rather than four thin ones.
"Customer Delight" as a standalone section was cut; the attributed quote now closes the
precision-model section as evidence instead. Added a Reflection section relating the
sketch/storyboard/diagram artifacts to AI-era design work per principle 9, plus a
what-I'd-revisit on the false-positive retrain loop, both grounded in what the shipped
artifacts actually show.

Images: all 12 in-narrative images (plus the hero) re-exported to WebP. No cwebp or
ImageMagick in this environment, so conversion went through Pillow: flattened to opaque
(the alpha channel on several source PNGs turned out to be plain rounded-corner
anti-aliasing, not a real composite, so nothing here needed `unframed`), baked banner
text cropped off in favor of the new HTML captions, preferring each `-v1` sibling as the
unbannered base per principle 7. `Informatica-brand.png` had no `-v1`; its banner sat
over a redundant, otherwise-undamaged thumbnail column, so that column was cropped out
entirely rather than left bannered. `AI-Recommendations_animated-behaviors.gif`
converted to an animated WebP (27 frames) rather than deferred to the separate
Vimeo/video-block backlog item, since it's a short looping UI prototype, not the
longer-form motion content that item is scoped around. Final ids match the descriptive,
no-product-prefix convention (`recommendations-panel`, `inline-concept`, `storyboard`,
etc.). As with Genomic Data Platform, this was a Pillow-only pass; Jim may want to
re-export some of these himself from the real source files for tighter crops, the way he
did for the first two of the featured three. Folds this case study's share of the "Case
study image assets" backlog item into Done too.

Verified with `npm run build` (clean) and Playwright screenshots (desktop, mobile, and
the Lightbox, including the animated prototype frame).

---

## More (listed)

These 6 were restructured this session. Baseline for each: reconcile every claim
against the myportfolio original, bring it into Jim's voice, apply the cross-cutting
fixes (lead line, heading tiers, reflection, outcome). Page-specific notes:

### Operational Insights — done (2026-09-11/12 pilot)

Rewritten in full as the pilot for the framework above, then refined further against
Jim's live feedback. Final state, as the reference pattern for the remaining 8:

**Structure** (intro + 9 sections, in order): Big Numbers, Not Pie Charts (the core
first-glance bet; includes a sketch-to-shipped pairing, see principle 11) → Every Fast
Fact Is a Doorway (drill-down) → Time Series for the Second Glance (line **and**
stacked-column charts, both instances of "time series"; don't let one chart type stand
in for the category, fixed 2026-09-12 after Jim caught it) → Customers Were Already
Building This by Hand (field-observed workarounds) → What I Tried Based on What I Heard
From Customers (a full section on the Slack/CLAIRE-bot prototype Jim pitched to product
management, present in the myportfolio original but compressed to a half-sentence aside
during this session's restructure; restored to its own section after Jim flagged the
loss) → Company Logos, Not at This
Scale (decision/bet: the dropped logo mockup) → Blue for Real, Green for Predicted
(decision/bet: the color code, split out from the logos story once Jim pointed out the
myportfolio source had conflated two separate decisions under one "AI Predictions"
heading) → What Shipped, and What Users Said (the customer-quote outcome) → Reflection
(the Slack app that stayed a prototype; the open question of whether the "How was this
prediction made?" trust affordance actually worked).

**Two decision/bet headings, not one**: "Big Numbers, Not Pie Charts" and "Company Logos,
Not at This Scale" / "Blue for Real, Green for Predicted" as a pair. The rest are activity
+ concrete-goal headings, several pulled from Jim's own existing body text ("Every Fast
Fact Is a Doorway") rather than invented from scratch.

**Individual-contribution language** tightened throughout ("I designed," "I built," "I
dropped [the logo idea]") in place of the passive "Working with a UX researcher, I
shaped."

**No metric beyond the quote** was added deliberately; the raw source has none to draw on
and the dashboard's own demo data (e.g. "960.4K rows processed") is mockup content, not a
real adoption number, so it stayed out rather than being passed off as one.

**Images, fully re-exported (2026-09-12)**: all 9 images (hero + 8 section images) are
WebP, opaque (no alpha), no baked-in banners or rounded corners, at native/100% scale (no
upscaling yet, see the "Case study image assets" backlog item). Two images not in the
original draft were added after Jim asked why they were missing: a sketch/ideation image
(`big-numbers-sketches.webp`, principle 11) and the dropped-logos mockup
(`connector-logos.webp`) — both were sitting unused in the raw `production images/`
folder because only already-wired images were checked the first time (principle 10).
`slack-app.gif` is the one exception left un-re-exported (animated, Jim's call) and
flagged `unframed`.

**Visual treatment, applies site-wide now, not just here**: every image gets a 1px
`--color-text-muted-light` (#888888) border + 6px radius by default (chosen to match
Jim's original baked-in `#9e9e9e` and the radius already baked into the mockup
screenshots themselves), in both the inline page and the Lightbox; `unframed` opts a
specific image out (alpha composites, e.g. Mobile Emergency System's hero). A numeric
`maxWidth` field (not the old boolean `narrow`) caps display width per image when
something reads better smaller (`key-metrics.webp` at 480, the hero here tested at 800);
a capped image's caption automatically matches its width (`mediaMaxWidth()` in
`CaseStudyPage.jsx` applies to both). Body text is 16px, inline captions 14px (down/up
respectively from 17/13, so the two feel closer in weight, per principle 12).

### Developer Experience — done (2026-09-16)

Source review done first, per principle 10: myportfolio original checked (thin, a
paraphrase of the same MVP-to-Gartner-to-launch arc already in `caseStudies.json`,
nothing structurally new there), and the full `production images/Predix/` folder
reviewed, all 18 files, not just the 6 already wired in. Two real finds sitting unused
the whole time: `predix-developer_video_storyboard.png`, a shot list for the coding-tip
video series (title card, medium close with lower thirds, medium close with laptop,
over-the-shoulder, screen capture, several marked "to be designed"), real evidence Jim
planned the shoot rather than just funding it; and `Predix_portfolio_cover-resize.png`,
a screenshot of the actual shipped Catalog page (Services/Analytics/Apps tabs, eight
services already listed under Edge Software and Data Management), never wired in even
though the case study talks about shipping an MVP catalog.

**"A Persona to Design Around" retitled "One Persona, Not a Committee of Them"** and
reframed as a decision: designing around one persona (Elaine) instead of a roster of
them, argued from the tradeoff (a committee of personas keeps debates abstract; one
gives the team an actual person to argue about). "Lo-Fi Wireframes and Motion
Prototypes" stayed a supporting/craft section rather than being forced into a decision
heading: no motion-prototype stills exist in the source to ground a claim about what
the prototypes specifically settled, so the text only tightens what's actually evidenced
(wireframes iterating the catalog/console fast, After Effects testing interactions
before build), not inventing a decision the artifacts don't show.

**"Driving Developer Adoption" given more weight**, per the punch list, using the
shot-list find: the section now shows the actual shot types planned (over-the-shoulder,
screen capture favored over talking-head) as evidence of Jim directing the crew, not
just securing the budget, alongside the existing community-site image.

**"From Design to Product Management" expanded** with the shipped-Catalog find: eight
services already live across two categories is a real, countable number read directly
off the screenshot, used in place of an invented adoption metric. The conference photo
swapped to its unbannered `-v1` sibling (see images note below).

**Reflection added**, grounded in what the source actually shows: the five-minute
deploy target named in the storyboard was a design bet, never checked against real
usage data after launch, so the reflection states that plainly as an open question
rather than claiming it held up; and moving into the PM seat blurred the line between
advocating for developer experience and trading it off against roadmap deadlines.

**No adoption or video-view metric added.** Nothing in the myportfolio source or the
image folder states one; the "eight services" catalog-size figure above is the one real
number the artifacts support.

**Images, fully re-exported (2026-09-16), folding in the "Case study image assets"
backlog item for this case study and clearing the 2026-09-14 interim `unframed`
stopgap.** Of the 6 previously-wired images, 5 had an unbannered `-v1` sibling in the
source folder (home, both storyboards, wireframes, community); those became the new
base images, with each removed banner's text seeding its caption (e.g. "Storyboards
With Personas as Main Characters" behind the persona caption, "Storyboards Help
Identify Critical Features" behind the five-minute one). The conference photo also
swapped to its `-v1` sibling. The 2 new finds (video shot list, shipped Catalog) had no
banner to begin with. All 8 converted to WebP via Pillow (no cwebp/ImageMagick in this
environment), flattened to opaque white where the alpha channel turned out to be plain
rounded-corner anti-aliasing on the browser-chrome mockups (home, wireframes,
community), not a real composite. Two, `persona-storyboard` and `five-minute-storyboard`,
have a genuine soft-shadow "stacked paper" alpha composite baked into the source
graphic (the storyboard cards' irregular torn-edge outline) and are flagged `unframed`,
extending the Genomic Data Platform precedent; the other 6 are opaque and framed
normally, dropping the blanket `unframed` the 2026-09-14 interim fix had applied to
every image on this page. Renamed from literal `Predix-*` / `Jim-*` source names to
descriptive ids (`hero`, `persona-storyboard`, `five-minute-storyboard`,
`catalog-console-wireframes`, `video-shot-list`, `community-video`, `shipped-catalog`,
`conference-conversation`); `width`/`height` recorded for all 8 from their actual
re-exported dimensions. Old PNGs deleted.

**Corrections (2026-09-16), Jim re-exporting himself from the real source files,
superseding the Pillow pass for each:** `hero.webp` (849×720, tighter crop, matching the
pattern on the featured 3 and Genomic Data Platform); `catalog-console-wireframes.webp`
(1014×582), which kept the real transparent gutter between its two panels intact rather
than flattening it to opaque white, so it's flagged `unframed` per Jim's call, joining
`persona-storyboard` and `five-minute-storyboard` as the page's 3 alpha-composite
images. `width`/`height` updated to match for both. `video-shot-list.webp` also
re-exported (same 967×511) and given `maxWidth: 640` at Jim's request, reading smaller
now that it's a supporting six-panel grid rather than the section's lead image (later
reduced further to `maxWidth: 560`). `community-video.webp` also re-exported (849×880),
this time from the final `community.png` source with the shipped "Eager to Innovate?"
green CTA rather than the `-v1` sibling's earlier "We are hiring code ninjas" copy this
pass had picked, since that's what the case study should actually show. `shipped-catalog.webp`
also re-exported (849×720), now showing the full browser-chrome frame around the Catalog
page (matching the hero's convention) rather than just the cropped card content; still
shows the same eight services across Edge Software and Data Management the caption
cites. `width`/`height` updated to match for both.

Verified with `npm run build` (clean) and Playwright screenshots (desktop, mobile, and
the Lightbox, both `unframed` images included) since `chromium-cli` wasn't available in
this environment; every caption checked by rendered `scrollHeight` for one-line fit at
both the inline default column and the Lightbox's fixed 640px width, not just by eye.

**Video added (2026-09-16):** the local `Predix/cloud foundry/PredixIO_nav_behavior.mov`
(13s, silent) turned out to already be live on Jim's Vimeo account, the exact clip
myportfolio embedded under its old "Motion Design" topic. Rather than re-hosting, this
shipped the "Restore case study video content" backlog item's `video` block type
(`CaseStudyPage.jsx` + `index.css`), a lazy click-to-play Vimeo embed using Vimeo's own
oEmbed thumbnail as the poster, placed in "Lo-Fi Wireframes and Motion Prototypes" right
after the wireframes image. See that backlog item for the full account, including a
known gap: this sandboxed environment's network gets Cloudflare-blocked on
`player.vimeo.com`, so actual playback needs verifying in a real browser.

### Machine Learning for Operators — done (2026-09-16)

Source review done first, per principle 10: myportfolio original checked (thin, four
short paragraphs, no stated outcome, confirming the punch list's read), and the full
`production images/AI Workbench/` folder reviewed, all 15 files, not just the 5 already
wired in. Three real finds sitting unused the whole time: `Analytics_Workbench-monitoring-room.png`,
a "CASE STUDY" framing slide over a control-room photo stating the actual business
stakes (a power plant manager bidding into the electricity market, penalized for
underproducing, wasting fuel for overproducing) that the shipped page never stated
anywhere; `AI-Workbench-model-building-concept.png`, a conceptual map of Data Engineer,
Data Scientist, and Analytic Developer roles moving data and trained models through a
Marketplace, Data Catalog, Model Builder, and Analytics Catalog (the myportfolio
original's one line about "storyboarding and concept flows" pointed straight at this,
and it was never wired in); and `Analytics-Workbench-Data-Visualiztion.png`, a full data
library page whose bottom half (cropped in as `correlation-plot.webp`) shows a
correlation-coefficient matrix and a correlation-density heat map, a real data
exploration feature the current draft never showed. Also found: 4 of the 5 wired images
had a genuinely unbannered sibling with the *same content* (not just a less-annotated
crop), confirmed by direct pixel comparison, not assumed from filename: `AI-Workbench-comp-v1.png`
(model-building), `AI-Workbench-data-curation-v1.png` (data library, and richer, 8 fields
shown instead of 4), `Analytics-Workbench-user-research.png` (site visits), and
`Analytics-Workbench-monitor-comp-v1.png` (monitoring). The hero's sibling,
`Analytics_Workbench-dashboard-v1.png`, turned out to be a *different, lower scroll
position* of the same dashboard (no banner, but missing the top Capacity Advisor
numbers and showing a lower "98% Performance" / alerts / degradation section the
original crop never showed) rather than a matching swap; used as the new hero directly
since it's a strict superset once you include both halves, no patching needed.

**Restructured from 6 sections to 7 plus a new Reflection**, adding two sections built
entirely from the source-review finds: **"Bidding Into the Market, One Percent at a
Time"** (the monitoring-room slide's stakes, stated in the case study for the first
time) and folding the concept-map into **"A Wizard That Trades Flexibility for
Guardrails"** (promoted from the old bare-label "A Guided Model-Building Flow" to a
decision heading: a fixed five-step wizard trades a data scientist's flexibility for a
path an operations engineer can actually finish, and a trained model publishes to a
shared Analytics Catalog instead of staying with the team that built it, which the
concept map is the direct evidence for). **"Seeing the Data Before Training"** likewise
promoted to a decision heading, **"Let Them See the Data Before They Trust the
Model,"** with the correlation-plot find added as a second image. "On-Site Contextual
Research" retitled "On-Site Visits to Watch the Real Workflow" and "Monitoring for Data
Drift" kept, both supporting per the punch list.

**No adoption number found or invented.** The screen's own numbers (69.91% accuracy,
506,206 rows, 98% performance) are demo content baked into the mockups, same call as
Operational Insights and Genomic Data Platform: referenced in the Reflection as what the
UI shows, never passed off as a real result. The qualitative outcome is the shipped
capability itself: a guided wizard that put model training in front of operations
engineers instead of data scientists, inside GE's Predix-powered AI Workbench (the
"Powered by Predix" badge visible in the dashboard screens, tying this to the same
platform the Developer Experience case study covers).

**Reflection added**, grounded in what the source shows rather than invented: the
closest thing to a storyboard here was an engineer sketching a data curve on a legal pad
during a site visit (per principle 9, relating the classic UX toolkit to how it actually
showed up in this AI-era process), plus two open questions on trust and legibility: does
a single accuracy percentage (69.91%) let a non-data-scientist over-trust a borderline
model, and does a correlation-coefficient matrix actually teach a reliability engineer
anything or just look approachable.

**One naming ambiguity flagged, not resolved:** the source folder's file names split
roughly in half between an "AI Workbench" branded UI (GE logo, Data/Models/Techniques
sidebar) and an "Analytics Workbench" branded UI (no GE logo, Assets/Data/Analytics/Twins
sidebar) for what look like the same underlying screens (data library, monitoring,
dashboard). This could be a mid-project rename, similar to the Agentic AI Chat
O11y-Copilot-to-Observe-Agent find, or just inconsistent internal comp labeling. Unlike
that case, this wasn't confirmed with Jim, so the shipped copy calls the product "AI
Workbench" throughout (matching the majority branding and the pre-existing alt text) and
doesn't assert a naming-decision narrative. Flagging here in case Jim knows the real
story and wants it surfaced the way the O11y Copilot one was.

**Images, fully re-exported (2026-09-16), folding in the "Case study image assets"
backlog item for this case study and clearing its 2026-09-14 interim `unframed`
stopgap.** 4 of the 5 previously-wired images swapped to their confirmed-identical
unbannered sibling (comp-v1, data-curation-v1, user-research, monitor-comp-v1); the
hero swapped to the richer `Analytics_Workbench-dashboard-v1.png` crop instead of
patching the original's banner (patching was attempted first, pixel-sampled two-band
fill reconstructing the sidebar and card colors around the banner's bounding box, but
the cleaner unbannered alternate crop made the patch unnecessary once the source review
turned it up). All converted to WebP via Pillow (no cwebp/ImageMagick in this
environment); flattened to opaque where the alpha channel was just the mockup frame's
corner rounding (all 6 photographic/UI screenshots, under 1.3% alpha each, confirmed
by inspecting the alpha channel directly rather than assumed from file size). One
genuine composite: `product-ecosystem.webp` (the concept map) has an irregular
torn-edge, stacked-paper drop shadow baked into the source graphic, confirmed by
extracting and viewing its alpha channel, and is flagged `unframed`, matching the
Genomic Data Platform and Developer Experience "stacked paper" precedent; its banner
was patched out with a flat white fill (confirmed safe first: the area it covers is
blank paper, not diagram content) rather than requiring a source swap, since no
unbannered sibling existed for it. `correlation-plot.webp` cropped from the larger,
previously two-purpose `Analytics-Workbench-Data-Visualiztion.png` (its top half,
already covered by `data-library.webp`, was dropped to avoid duplicating the same field
table twice in one section). Renamed from literal `AI-Workbench-*` / `Analytics-Workbench-*`
source names to descriptive ids (`dashboard`, `market-stakes`, `site-visits`,
`data-library`, `correlation-plot`, `model-building`, `product-ecosystem`,
`monitoring`). `width`/`height` recorded for all 8 from their actual exported
dimensions. Old PNGs deleted. Total asset weight for this page dropped from ~1.5MB of
PNGs to ~600KB of WebP across one more image than before (8 vs. 5).

**`product-ecosystem.webp` re-exported by Jim himself (2026-09-16, same day), superseding
the Pillow pass at the new 2x standard** (see the "2x export" note under principle 7
below, decided the same day): 1744×1023, a tighter crop from the real source file at
2x the 872px desktop display width. Same content and stacked-paper torn-edge treatment
as the Pillow version, still flagged `unframed`; `width`/`height` updated to match. The
other 7 images on this page stay at their original 100%-scale Pillow exports, to be
bumped to 2x opportunistically rather than as a dedicated pass, per the same decision.

Verified with `npm run build` (clean) and a headless-Chromium Playwright script
(installed fresh into the scratchpad directory rather than the project, since neither
Playwright nor a system Chromium was preinstalled in this environment) confirming: no
console/build errors, every one of the 8 captions renders on one line by measured
`scrollHeight` at both the inline default column and the Lightbox's fixed 640px width
(not by eye), the `unframed` concept-map image reads as a single clean frame against
the page background, and desktop/mobile full-page screenshots hold together
end-to-end.

### Mobile Emergency System — done (2026-09-16)

Source review done first, per principle 10: myportfolio original checked (four short
paragraphs plus a "Motion Study" callout, no stated outcome, confirming the punch list's
read), and the full `production images/AtHoc/` folder reviewed, all 15 files, not just
the 8 already wired in. Role recovered from the myportfolio page's byline, not
previously in `caseStudies.json`: **Principal Product Designer, BlackBerry AtHoc**.

Two real finds sitting unused the whole time: `AtHoc_comp_emergency.png`, a full-size,
unbannered close-up of the emergency-message composer (text, a dropped location pin,
and an attached photo of a fire, the exact screen cropped small inside the hero's
middle panel but never shown at readable size); and `AtHoc_design_stencil-v1.png`, a UI
pattern-library sheet (buttons, form fields, popovers, pills, contextual help) that's
the real, concrete evidence behind "One System, Every Screen," never wired in even
though the section already claimed platform-wide consistency. Both added as new images.
Also confirmed the "Motion Study" claim in the myportfolio original ("I animated the
UI... to get an overall feel for interaction flows and transitions") does **not** match
the shipped `motion-study.png`, which is a static branching flow diagram, not an
animation, matching backlog item 29's existing flag. Renamed the id from `motion-study`
to `screen-flows` so the case study stops implying a video artifact that isn't there;
the real motion study, if the source file ever surfaces, stays open under that backlog
item.

**Consolidated the four craft sections (Rapid Sketches, Screen Flows, Lo-Fi Wireframes,
A Mood Board) to two, per the punch list.** The Mood Board section was promoted to
decision tier and moved to lead, right after the intro: **"Emergency Controls Borrowed
From the Hardware on the Wall"** states the actual bet (skeuomorphic red controls drawn
from physical call boxes, pull stations, and SOS buttons, not a flat UI accent color) as
the concrete embodiment of the case study's "simple under stress" thesis. The other
three (Rapid Sketches, Screen Flows, Lo-Fi Wireframes) merged into one supporting
section, **"Ten Screen Templates, Then Every Path Between Them"** (the heading names the
real count read off the sketch grid: menu, splash, register, default, slider, emergency,
message, reply, report list, send report), walking sketch to flow diagram to annotated
wireframe as increasing fidelity on the same design question. "Emergency Situation
Tracking," "Interactive Maps," and "One System, Every Screen" kept as the product
sections per the punch list, each tightened for individual-contribution language and
given a second image where the source review turned one up (the emergency-report
composer under Situation Tracking, the design-pattern library under One System).

**No adoption or deployment-scale number found or invented.** Neither the myportfolio
original nor any source image states one (same call as Operational Insights, Genomic
Data Platform, and Machine Learning for Operators: nothing to draw on beyond demo
content). The outcome folded into the lead instead: the system shipped across iOS,
Android, and desktop, one shared real-time picture of an incident for operators,
responders, and citizens.

**Reflection added**, grounded in what the wireframes and screenshots actually show
rather than invented: the EMERGENCY button sits in the top nav bar on every screen by
deliberate design, impossible to miss, but never tested for accidental-trigger risk
given how exposed it is; and the failed-send Retry control assumed a person calm enough
to notice a failure and tap a button, an assumption worth revisiting against real
bad-connection, high-stress use (an automatic retry with backoff might have served
better).

**Images, fully re-exported (2026-09-16), folding in the "Case study image assets"
backlog item for this case study and clearing its 2026-09-14 interim `unframed`
stopgap.** All 8 previously-wired images converted to WebP via Pillow (no
cwebp/ImageMagick in this environment). `situation-tracking`, `interactive-maps`, and
`tablet` flattened to opaque (each was already ≥98.7% opaque, the residual alpha just
mockup-frame corner rounding) and framed normally, dropping the blanket `unframed` the
2026-09-14 interim fix had applied. Two, `app-comps` (the hero) and the newly-added
`design-system`, are genuine composites (a drop-shadowed three-phone spread and a
stacked-paper pattern-library sheet respectively) and stay `unframed`, the hero matching
its long-documented exception.

**`tablet` corrected (2026-09-17): Jim re-exported it himself keeping the device
bezel's real transparent rounded corners intact**, rather than the Pillow pass's
flattened-to-opaque version. Same crop (764×602), but the corners are now genuine alpha,
not a squared-off white fill, so it went back to `unframed`, matching the
`catalog-console-wireframes` precedent on Developer Experience (a real transparent
gutter kept intact rather than flattened): the site's standard border/radius would
otherwise box a second, square frame around a device silhouette that's already rounded.

`storyboard` swapped to its unbannered `AtHoc_storyboard_sketch-v1.png` sibling per
principle 7 (confirmed identical content, just without the banner or a second stacked
sheet), its removed banner text ("Early and Rapid Sketches Identify Screen Templates
Needed") folded into the new section's framing. **Jim re-exported it himself from the
real source file the next day (2026-09-17), superseding the Pillow pass with a tighter
crop** (847×602, down from 1036×653); same content, still a genuine soft-shadow
composite, stays `unframed`. `width`/`height` updated to match. `screen-flows` (renamed
from
`motion-study`) had its banner ("Screen Flows Reveal Detailed User Actions") removed by
a precise flat-white patch: the banner's bounding box was isolated via
connected-component analysis on the darkest pixels (a single 21,160-pixel blob, two
orders of magnitude larger than any other dark region in the image) to avoid clipping
nearby diagram content, a first attempt at a looser hand-eyeballed bounding box did clip
a screen thumbnail and the "Operator Only" label and was caught and redone before
shipping. Verified safe first: the area under the banner was confirmed pure flat white
(zero variance) in this image, unlike the two exceptions below. **Jim re-exported it
himself the next day too (2026-09-17), superseding the patched Pillow version**: the new
export (1006×598, RGB, no alpha, tighter crop than the patched 1019×598) is fully opaque
with no banner and no residual soft-edge alpha, so `unframed` was dropped and it now
takes the standard border like the page's other product screenshots.

**`wireframes` kept its banner baked in as a documented exception to principle 7,
initially.** No unbanned sibling existed in the source folder, and the banner directly
overlapped the top status bar of the left phone mockup (confirmed by zooming the
boundary, the "10:10 AM" status text was visibly clipped by the banner's edge, with the
real annotated content, the emergency button, message field, and map, starting clearly
below it and fully intact). Patching it algorithmically would have meant fabricating
pixels for content that wasn't recoverable from any source file on hand, which the
framework's "stay faithful, don't invent" principle rules out. **Jim resolved it himself
(2026-09-17) by re-exporting from the real source file**, superseding the Pillow pass:
the new export (1012×581, still RGBA with the same soft-shadow single-sheet composite,
so it keeps `unframed`) has the banner cleanly removed and both status bars fully
intact, no clipping. `width`/`height` updated to match.

`mood-board` had the same problem initially (a banner sitting on top of real photo tiles
in the collage, at least one hardware photo fully hidden underneath, no way to
reconstruct it from pixels alone), but **Jim re-exported it himself from the real
source file (2026-09-16, same day), superseding the Pillow pass and closing the gap the
automated pass couldn't**: the new export (870×634, RGB, no alpha) has no banner and no
stacked-paper shadow effect, a clean flat rectangle with every photo tile visible,
including the "AGE DATA RECORDER" panel the banner used to cover. `width` updated to
match (870, down from 883) and `unframed` removed since it's now opaque, framed
normally like the rest of the page's product screenshots.

Between `mood-board` (2026-09-16), `screen-flows` (2026-09-17), and `wireframes`
(2026-09-17), Jim personally re-exported every image on this page that this pass
couldn't fully de-banner on its own; zero banners remain baked into any image here.

`emergency-report` (new) and `design-system` (new, from the `-v1` unbannered source)
round out the 10 total images on this page (up from 8). `width`/`height` recorded for
all 10 from their actual exported dimensions. Old PNGs deleted. This stayed a
100%-scale Pillow pass, not the 2x standard, since no higher-resolution source captures
exist for this decade-old project; a future opportunistic bump would need Jim to
re-export from the original design files, if those still exist.

Verified with `npm run build` (clean) and a headless-Chromium Playwright script
(installed fresh into the scratchpad directory, neither Playwright nor a system
Chromium was preinstalled in this environment) confirming: no console/page errors, all
10 captions render on one line by measured `scrollHeight` at both the inline default
column and the Lightbox's fixed 640px width (not by eye, re-verified after each of
Jim's corrections below), the 5 `unframed` images (hero, storyboard, wireframes,
design-system, tablet) read as single clean frames against the page background, and
desktop/mobile full-page screenshots hold together end-to-end.

### Additive Manufacturing — done (2026-09-17)

Source review done first, per principle 10: myportfolio original checked (four short
paragraphs, mirroring what was already in `caseStudies.json`, nothing structurally new),
and the full `production images/Additive/` folder reviewed, all 19 files, not just the 7
already wired in. Three real finds sitting unused the whole time: `additive-progress-donut-v1.png`,
the full shipped Availability Overview dashboard (Predix sidebar, Jim Reed logged in),
showing the exact OEE donut grid next to a printer's own progress donut ("PRINTING 48%",
same ring shape) captured in one screenshot, the clearest possible evidence for why the
donut chart was confusing; `Additive-mobile.png`, a side-by-side of the hand-drawn phone
sketch (already wired, cropped tighter as `additive-mobile-operator-view.png`) next to a
mockup of the shipped color-coded Builds list, a real sketch-to-shipped pairing per
principle 11 that the cropped version obscured; and `Additive-user-persona-v1.png`, an
unbannered sibling of the Operator persona card that names her, **Stacey, Operator**,
a real name the banner-cropped version's alt text never surfaced.

**"Rethinking the Visualization" promoted and retitled "Why the Donut Chart Had to Go,"**
per the punch list, now the lead section right after the intro. States the decision
directly: the ring shape matched the dashboard's own visual language, which is exactly
why it was risky next to a printer already using that shape for build progress. Both
real numbers cited are read directly off the screenshots, not invented: an 85% OEE ring
(`GE Additives Plant 1, Cincinnati`) and a printer at 48% printed. Two images: the
existing small "donut / not donut" comparison graphic as the primary, and the newly
surfaced `additive-progress-donut-v1.png` as supporting evidence, showing the real
dashboard-in-context rather than an abstracted comparison.

**"Early Concept Sketches," "A Journey Map of Roles," and "Personas: Goals and
Challenges" collapsed into one section, "Sketches, a Journey Map, and a Persona Named
Stacey,"** per the punch list. The sketch's placement here does double duty: it's process
evidence, but it also lands as a quiet callback to the donut decision above, since the
earliest hand-drawn concept already used a number and color, not a ring, before a later
comp detoured through the donut that testing later caught.

**Real metric added, per the punch list's "facility rollout" ask**, grounded in what the
shipped dashboard screenshots actually show rather than invented: the Availability Score
rolled out across GE Additive sites in Cincinnati, Greenville, Beijing, Florence, Rio de
Janeiro, and Lichtenfels, real site names visible across multiple different screens
(hero, OEE dashboard), spanning four continents. Folded into the lead description per
principle 5 and given its own closing section, "One Score, Four Continents," rather than
a dedicated "Business Outcomes" section. The old generic "Outcome" section (a bare label,
principle 4) was dropped; nothing case-specific survived it that isn't now covered by the
lead or this section.

**New section, "Watching Builds Get Tracked by Hand,"** replaces "Observing Users On
Site" with a sharper finding read directly off the site-visit photos once unbannered and
full-size: engineers in the DMLM cell were tracking builds on a whiteboard by hand,
material spec, responsible engineer's name and phone number, estimated completion,
written and erased as jobs moved. That's real, legible evidence of the gap the console
needed to close, previously invisible in the small banner-cropped collage. A second
image, the newly surfaced selfie (`additive-selfie-v1.png`, capped `maxWidth: 420`),
adds the human, on-site texture the source review turned up.

**"Mobile for On-Call Operators" kept, image swapped** to the fuller `Additive-mobile.png`
(sketch and shipped side by side) in place of the tighter sketch-only crop, so the
section shows the actual distance between the hand-drawn concept and what shipped, per
principle 11, rather than just the sketch alone.

**Reflection added**, built from the donut misfire and the whiteboard finding, both
already in the page rather than invented for this section: whether checking the new
design against the printer's own UI earlier, before the first comp was built, would have
caught the ring conflict before a design round was spent on it; and whether the console
ever gave operators the same kind of ownership/ETA annotation the whiteboards carried, or
whether the whiteboard is still there next to the machine.

**Images, fully re-exported (2026-09-17), folding in the "Case study image assets"
backlog item for this case study and clearing its 2026-09-14 interim `unframed`
stopgap.** All 9 (hero plus 8 section images) converted to WebP via Pillow (no
cwebp/ImageMagick in this environment). The hero and 6 of the 8 section images were
already flat opaque screenshots or diagrams under their old blanket `unframed` flag (the
alpha channel, where present, checked directly and found to be under 2% in every case,
just corner-rounding anti-aliasing on browser-chrome mockups), so all 7 dropped
`unframed` and now take the standard border. One genuine composite: `persona-stacey.webp`
(the persona card) has a real soft-shadow "stacked paper" effect baked into the source
graphic (confirmed via its alpha channel, ~6.5% non-opaque), and is flagged `unframed`,
matching the Genomic Data Platform / Developer Experience / Mobile Emergency System
precedent. 4 of the 7 previously-wired images swapped to an unbannered sibling per
principle 7 (`journey-map`, `persona-stacey`, `site-visit`, and the richer
`additive-progress-donut-v1.png` in place of patching the bannered `evaluate-design`
comp): each removed banner's text seeded its section's framing rather than a caption
directly (the journey-map and site-visit banners duplicated what the new captions say
better in context). One image, `concept-sketch.webp` (the "Early Concept Sketches"
photo), kept its baked-in banner as a documented exception in the first pass: no
unbannered sibling existed in the source folder, and the banner sat over the photographed
woman's shoulder, not over the sketch itself, so patching it would have meant fabricating
photographed content the framework's "stay faithful, don't invent" principle rules out.
**Jim resolved it himself (2026-09-17) by re-exporting from the real source file**,
superseding the Pillow pass: the new export (720×510, tighter crop, down from 733×510)
has the banner cleanly gone, still fully opaque RGB, no `unframed` needed. Zero banners
remain baked into any image on this page. `journey-map.webp` was also re-exported by Jim
himself (2026-09-17), superseding the Pillow pass with a cleaner export from the real
source file; same content and dimensions (1128×540, opaque, no banner), no JSON changes
needed. Renamed from literal
`Additive-*` / `additive-*` source names to descriptive ids (`dashboard`,
`donut-comparison`, `oee-dashboard`, `concept-sketch`, `journey-map`, `persona-stacey`,
`site-visit`, `onsite-selfie`, `mobile`); `width`/`height` recorded for all 9 from their
actual exported dimensions. Old PNGs deleted. This stayed a 100%-scale Pillow pass, not
the 2x standard, since no higher-resolution source captures exist for this project.
Total asset weight dropped from roughly 3.5MB of PNGs to ~600KB of WebP across 9 images
(up from 7; the mobile side-by-side and the OEE-dashboard-in-context are new).

Verified with `npm run build` (clean) and a headless-Chromium Playwright script
(installed fresh into the scratchpad directory, neither Playwright nor a system Chromium
was preinstalled in this environment) confirming: no console/page errors, all 9 captions
render on one line by measured `scrollHeight` at both the inline default column and the
Lightbox's fixed 640px width (not by eye), the one `unframed` image (`persona-stacey`)
reads as a single clean frame against the page background, and desktop/mobile full-page
screenshots hold together end-to-end.

**Follow-up (2026-09-17, same day): the fleet-to-machine drill-down restored, per Jim's
review, as a three-level story.** The original myportfolio page described dashboard
levels this pass had missed on the first source review, an aggregate fleet view drilling
down to individual printers ("the individual printing progress of each printer at a
manufacturing plant"); Jim supplied two new screenshots, `dashboard-fleet.webp`
(Availability: GE Additives Company, an aggregate 58% with nine ranked facility cards,
Lichtenfels at 69% down to a struggling GE Power Turbine plant at 9%) and a facility/
machine drill-down, and asked for the topic restored ahead of the donut story. Went
through three iterations on structure and image count before landing: first pass used
just the two new screenshots as a two-level story; Jim pointed out the order was wrong
(fleet should lead as the hero, since that's the level a user sees first); the next pass
swapped the hero to the fleet shot but, in restoring the drill-down section, surfaced
that the *existing* hero image (`Additive-comp-builds.png`, a Builds table scoped to one
facility, Lichtenfels) was actually a third, distinct level, facility, sitting between
fleet and machine; a moment of back-and-forth (removed, then restored) landed on Jim's
call: all three levels are real and belong in the story (fleet, facility, individual
printer), so all three are now used. Renamed the three files to match the hierarchy they
represent: `dashboard-fleet.webp` (now the hero), `dashboard-facility.webp` (formerly
`dashboard.webp` / `Additive-comp-builds.png`, the Lichtenfels Builds table), and
`dashboard-machine.webp` (formerly `dashboard-location.webp`, CL-3031's current-job
detail with its own Availability ring and progress bar). New section, **"Drilling From
the Fleet Down to One Job,"** sits right after the intro and before "Why the Donut Chart
Had to Go," walking fleet (hero) to facility to machine in one paragraph, two images.
Separately, this fleet screenshot's facility list turned out more authoritative than the
OEE-donut screenshot's used in the donut section (real, consistent GE Additive site
names: Lichtenfels, Grapevine, ATC, GE Aviation Print Center, CEC Munich, San Ramon
Foundry, CEC Pittsburgh, Shanghai Foundry, GE Power Turbine Manufacturing, versus the
donut grid's mix of plausible-but-inconsistently-labeled names), so the closing outcome
section and the lead description were updated to cite it instead ("One Score, From
Lichtenfels to Shanghai," dropping an earlier, less certain "four continents" framing
built off the donut screenshot's shakier site list). Also caught mid-pass: `dashboard.webp`
briefly went missing from the working tree between edit rounds (cause unclear, likely
disturbed by the same file-manager action that added Jim's new screenshots into the same
directory) and had to be regenerated from source before it was renamed to
`dashboard-facility.webp`; re-verified present and loading before treating this follow-up
as done. Re-verified with `npm run build` (clean) and the same Playwright script: no
console errors, all 12 captions (up from 9) render on one line inline and in the
Lightbox, desktop/mobile screenshots hold together end-to-end.

**Further follow-ups (2026-09-18):** Jim re-exported `concept-sketch.webp` himself,
superseding the Pillow pass and closing its one documented banner exception (720×510,
tighter crop, banner cleanly gone, still opaque RGB, no `unframed` needed); zero banners
now remain baked into any image on this page. Jim also re-exported `journey-map.webp`
himself (same dimensions and content, a cleaner source export, no JSON changes needed).
Added `team` metadata after Jim asked whether his own principal-designer role should be
reflected here: reviewed the `team` field across all 9 case studies and found the
convention is consistently collaborator-focused (who else was on the team), not a
restatement of Jim's own title, which the `role` field directly above it already
covers; recommended keeping that convention site-wide rather than retrofitting it, which
Jim agreed with. Separately confirmed Jim was hands-on in visual design on this project
too, not just interaction design and discovery, so the field reads "Another visual
designer, with user discovery done alongside the lead engineer and architect" rather than
"A visual designer." Also capped `concept-sketch` at `maxWidth: 480` (native 720×510),
reading better narrower next to the journey map and persona card in the same section;
verified its caption still renders on one line at the un-narrowed default column width
(captions don't inherit `maxWidth`, per principle 7).

### Analytics & Big Data — done (2026-09-18)

Source review done first, per principle 10: myportfolio original checked (short, four
paragraphs plus a "Sketches / Storyboards / User Task Flows" strip), and the full
`production images/GE Analytics/` folder reviewed, all 13 files, not just the 5 already
wired in, plus the wider `case studies/GE-Analytics/` working folder (31 files: PSDs, a
wireframe, a room photo, a Predix Design System capture set) for anything the curated
folder left out. Two real finds sitting unused the whole time, both in the curated
folder: `GE_orchestration_editor_storyboard.png`, a six-frame storyboard of the
Orchestration Editor's actual interaction (a welcome modal, a new-application dialog,
components dragged onto a canvas from a My Resources drawer, then connections that turn
from red to green as fields are dragged onto an analytic's inputs), and the unbannered
paper-wireframing photo (`Analytics-Cloud-collaborative-design-v1.png`), the other half
of the myportfolio page's "Collaborative Design" pair that the draft had reduced to the
sticky-note wall alone. Also noticed: the myportfolio page lists **Storyboards** as one
of three artifacts, and the draft had silently dropped them.

**Drift corrected, not just restyled.** The draft opened "Research with data scientists
and data engineers kept pointing at the same gap ... and no tool made it easy at the
points in the workflow where that visibility matters most." The myportfolio original
says something different and more specific: Jim *interviewed dozens* of data scientists
and data engineers and *discovered* that data exploration and cleansing is a critical
part of the data-science process. "Dozens" and "interviewed" had been lost in an earlier
paraphrase, and the "no tool made it easy" clause appears nowhere in the source, so it
was cut. The intro now states what the source states.

**Shipped vs. concept: resolved by Jim (2026-09-18), after the first pass.** This was the
page's flagged ambiguity, and nothing in the source could settle it, so the first pass
claimed neither side and asked. Jim's answer: **the Orchestration Editor shipped, with a
companion product, the Analytics Catalog** (the second lane of the task flow, Catalog View
and Detail View), and **Data Explorer was well received by product management and
executive leaders but was never prioritized for development.** So the page's real shape
is one shipped tool and one unbuilt concept, and the copy now says both plainly: the lead
states them side by side, the Orchestration Editor section opens on "shipped" and names
the Analytics Catalog, the Data Explorer section closes on the leadership response and
the missing prioritization, and the hero caption calls the comp a "Data Explorer concept"
so the image is not read as a shipped screen. Still no metric or adoption number: none
was given and none was invented. The demo data in the comps ("Asset one/two/three," 2012
timestamps, "Last saved November 19, 2013") is mockup content, same call as the other
pages. **Caveat:** the storyboard, sketches, and comps are design artifacts, so the copy
describes the designed interaction (red arrow until configured, green when ready). If the
shipped Orchestration Editor differed, that line needs correcting. Also inferred, not
stated by Jim: the myportfolio original's "searchable and sortable catalog of data and
analytic techniques" is the Analytics Catalog, which the lane's contents (search by
keyword, filter by asset type, algorithm, function, and tags, ratings, add to library)
support.

**Restructured from 5 sections to 3 plus a Reflection**, per the punch list ("I conceived
Data Explorer is a strong ownership claim; build on it"; collapse the three process
sections). Two decision-tier headings and one supporting section:
- **One Visualizer, Before and After the Analytic** (decision): builds on "I conceived
  Data Explorer" with the follow-through the punch list asked for. The call is where
  Data Explorer sits, at both ends of an analytic run rather than as a start-only cleanup
  step, and two artifacts show it directly: the comp's breadcrumb (Orchestration Results,
  then Data Explorer) and the task flow, where Data Visualizer appears under Upload and
  again under Evaluate, marked as a shared component. The section closes on Data Explorer's
  fate: well received by product management and executive leaders, never prioritized for
  development. The task flow moved here from its
  own process section because it is the evidence for this decision, not a separate beat.
- **Red Until Configured, Green When Ready** (decision): the Orchestration Editor, which
  shipped alongside the Analytics Catalog (named here, with what its lane in the task flow
  shows users doing), built
  around the interaction the new storyboard shows, connection status lives on the arrow
  itself (red while improper or incomplete, green once properly configured) with
  fields dragged onto inputs in a Connection Editor. Per principle 11, the sketch page
  rides along as continuity evidence, the drag-a-field-onto-an-input gesture is already
  in the hand sketches and carries through to the comp's gateway-condition tokens, and
  it is also the only artifact showing the dashboard and dashboard-designer half of the
  workflow. The draft's "Exploring Interactions With Sketches" section is folded in here.
- **A Sticky-Note Wall That Became the Five-Step Task Flow** (supporting): the workshop
  material, the draft's "Mapping the User Journey," now with the paper-wireframing photo
  and a real, checkable claim in place of the generic "workshops give everyone
  ownership" opener: read up close, the wall's notes are already in columns for Upload,
  Pick (catalog), Config (workspace), Execute, and Evaluate, and include "Connection
  Editor" and "map inputs" under Config, the same tasks the task flow later groups under
  Connection Editor. Jim's original line about stakeholder ownership is kept.

**Reflection added**, built from what the artifacts show rather than invented: color
alone carries the whole configuration state in the Orchestration Editor (the storyboard
captions each arrow in words, but no second cue on the arrow itself appears anywhere),
so how it reads for an engineer who can't tell red from green is open; and Data
Explorer's shared-visualizer bet (that evaluating data before and after an analytic is
one job) was never tested against real use, because leadership liked it and it was never
prioritized for development. (Rewritten 2026-09-18 once Jim confirmed what shipped; the
first draft called the bet untested without saying why.)

**Lead and blurb (principle 1):** the old lead was a category label ("Enterprise tools
for big-data analytics ... from data exploration to analytic orchestration"). The first
pass named the two tools and the one ownership fact the source supported (Jim conceived
Data Explorer after interviewing dozens of data scientists) but had no outcome to state.
After Jim confirmed what shipped, both lead and blurb carry the real result: the
Orchestration Editor shipped with a companion Analytics Catalog, and the Data Explorer
concept was well received but never prioritized. The lead runs 3 lines at desktop. The
homepage `blurb` is held to ~142 characters on purpose: the More cards line-clamp their
description, and 145 characters was the longest that fit unclamped when measured (a
first 165-character draft was truncated on the card). **Pre-existing, not touched
here:** the Operational Insights, Developer Experience, and Mobile Emergency System
blurbs (187 to 195 characters) are also clamped on their cards today.

**No AI-artifacts angle** (principle 9): not an AI product, nothing to relate.

**Images, fully re-exported (2026-09-18), folding in the "Case study image assets"
backlog item for this case study and clearing its 2026-09-14 interim `unframed`
stopgap.** 7 images (up from 5), all WebP via Pillow (no cwebp/ImageMagick in this
environment), quality 88. Both browser-chrome comps (`data-explorer`,
`orchestration-editor`) were already opaque under the old blanket `unframed` (0.01%
alpha each, just window-corner anti-aliasing, checked directly), flattened to white and
now framed normally. Both photos come from their unbannered `-v1` siblings per
principle 7, the wall's old baked-in "Mapping the User Journey" banner and the
wireframing photo's "Collaborative Design With Stakeholders" banner both gone, and are
opaque. Three genuine composites keep their alpha and stay `unframed`, each a
soft-shadow stacked-paper sheet baked into the source graphic: `task-flows` (4.8%
non-opaque), `storyboard` (3.6%), and `sketches` (3.1%, also swapped to its unbannered
`-v1` sibling). Renamed to descriptive ids (`data-explorer`, `task-flows`,
`orchestration-editor`, `storyboard`, `sketches`, `paper-wireframes`,
`sticky-note-wall`); `width`/`height` recorded for all 7 from their exported dimensions.
Old PNGs deleted; total asset weight ~2.8MB of PNG down to ~440KB of WebP.

**`data-explorer` and `orchestration-editor` re-exported by Jim himself (2026-09-18, same
day), superseding the Pillow pass for both:** 1000×718 each (down from 1002×720, a
slightly tighter crop), smaller files (45KB and 29KB, from 56KB and 34KB). Both carry an
alpha channel, but only a 1px hairline row at y=57 (alpha ~240, the seam between the
browser chrome and the app header) is not fully opaque; the corners are fully opaque,
square, and the CSS radius rounds them, so both are effectively opaque and stay framed
normally, no `unframed`. `width`/`height` updated to match; captions unaffected (re-ran
the one-line check).

**`sketches` also re-exported by Jim (2026-09-18)**, 934×708 (down from 1043×790), still
the soft-shadow stacked-paper composite (2.2% non-opaque), so it stays `unframed`.
`width`/`height` updated, and capped at `maxWidth: 640` at Jim's request (a four-panel
sketch sheet reads better narrower; the handwriting stays legible at that size, checked
in the rendered page). Its caption does not inherit the cap (principle 7), and still fits
on one line inline and in the Lightbox.

The rest stayed a 100%-scale Pillow pass, not the 2x standard (and the three
re-exports above are still under 1744px): the curated PNGs are all ~800 to 1140px
wide, the two photos at 800px display very slightly upscaled at the 872px column. Jim
can re-export any of them from the working PSDs in `case studies/GE-Analytics/` for a
2x pass, `Analytics-Cloud-collaborative-design.psd` (128MB) may hold a higher-resolution
original of the photos, and `GE_orchestration_editor_comp_editor.png` (1240×930, no
browser chrome) is a larger flat version of the Orchestration Editor comp if a chrome-free
crop is ever wanted.

**Left out on purpose, worth a second look from Jim:**
- `GE-SR0012.JPG` / `jim_at_GE.jpg` (a 5184×2916 workshop-room photo: three people
  watching walls of sticky notes and wireframes). Strong image, and `jim_at_GE.jpg` is
  dated December 2013, contemporaneous with the Orchestration Editor comps. Not used
  because nothing ties it to this project specifically (not in the curated folder, not
  on the myportfolio page, and the full-resolution file is dated 2016). If it is from
  these sessions it is the best available image for the workshop section.
- `GE_orchestration_editor_wire.png`, a lo-fi wireframe of the editor ("Analytic
  Application Workbench," puzzle-piece analytic blocks, a red "Incomplete" terminal
  state). Directly supports the red/green section, but the storyboard already carries
  that story and a third fidelity would turn the section into a process tour
  (principle 11).
- `GE-design-patterns-google-chrome.png` and the `pattern library/` screenshots: the
  Predix Design System gallery (2018) and the browser-chrome mockup template behind the
  comps. A later, separate project, not part of this case study.
- `GE_Analytics_portfolio_cover(-resize).png`: the homepage thumbnail source, already
  curated.

**Naming, flagged not resolved:** the artifacts label the product three ways,
"Analytic Application Workbench" (storyboard, wireframe), "Predix Insight" (the comps),
and "Analytic Cloud" (the task flow, and the sticky-note file names), and the task flow
names Analytics Catalog and Analytics Workbench as product areas. Copy names each by the
label on the artifact being described and does not assert a rename story. If it was a
rename, it is the kind of finding that closed the Agentic AI Chat branding section.

Verified with `npm run build` (clean) and a headless-Chromium Playwright script
(installed fresh into the scratchpad directory) confirming: no console/page errors, no
broken images, all 7 captions render on one line by measured `scrollHeight` at both the
inline default column (872px) and the Lightbox's fixed 640px width (widest Lightbox
caption 581px, at least 59px of headroom, after trimming three that first measured
613 to 635px and later retitling the hero caption "Data Explorer concept"), the three `unframed` composites read as single clean frames, and
desktop/mobile full-page screenshots hold together with no horizontal overflow.


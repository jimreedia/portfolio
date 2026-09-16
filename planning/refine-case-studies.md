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
account. Next: the other 4 (Machine Learning for Operators, Mobile Emergency System,
Additive Manufacturing, Analytics & Big Data).

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
    - **Lightbox**: `.lightbox__caption` is a fixed 640px, always narrower than inline,
      so it's normally the tighter constraint of the two.
    In practice: target roughly 90-100 characters as a safe one-line budget (this covers
    both contexts for the vast majority of captions). Character count is a rough guide
    only, actual width depends on the letters used (14px font, ~5.7-5.9px average per
    character measured); verify by rendering, don't just count characters. To verify:
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

### Machine Learning for Operators

Strong frame ("get model training into the hands of the operations engineers, no data
scientist required") but **no stated outcome anywhere** (myportfolio had none).
- Find out / state whether it shipped, pilot results, adoption.
- "Seeing the Data Before Training" and "A Guided Model-Building Flow" are the design
  substance; "On-Site Contextual Research" and "Monitoring for Data Drift" support.
- Consider leading with the core bet (a guided wizard that hides the data-science
  process) as a decision section.
- Add a reflection.

### Mobile Emergency System

Process-heavy: Rapid Sketches / Screen Flows / Lo-Fi Wireframes / A Mood Board are four
craft sections in a row. No stated outcome.
- Consolidate the four craft sections to two.
- Thesis is "make a genuinely complex system feel simple under stress." Lead with a
  decision that embodies it (the always-present red emergency button; the skeuomorphic
  choice drawn from physical emergency hardware).
- "Emergency Situation Tracking," "Interactive Maps," "One System, Every Screen" are the
  product; keep those.
- Outcome: did it ship across iOS/Android/desktop, any deployment scale.
- Add a reflection.

### Additive Manufacturing

Has an "Outcome" section already but it is weak ("the clear productivity read the
operators had been missing").
- **"Rethinking the Visualization" (donut chart read as print-progress, replaced with a
  number + color after testing) is the decision story.** Promote it; make the heading
  name the decision.
- "Early Concept Sketches," "A Journey Map of Roles," "Personas" are process; collapse.
- Real metric for the Availability Score (facility rollout, what it changed).
- Add a reflection (the donut misfire is natural material).

### Analytics & Big Data

Two product sections (Data Explorer, Orchestration Editor) then three process sections
(journey map, task flows, sketches). No stated outcome, and it reads as partly
conceptual.
- Clarify what shipped vs. what was a concept ("I conceived Data Explorer" needs a
  follow-through).
- Collapse "Mapping the User Journey" / "Task Flows Mapped to the Product" / "Exploring
  Interactions With Sketches" into one process beat.
- "I conceived Data Explorer" is a strong ownership claim; build on it.
- Add a reflection.


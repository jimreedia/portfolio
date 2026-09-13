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

After the featured 3, back to the remaining 5 "more" pages. All 5 (Developer Experience,
Machine Learning for Operators, Mobile Emergency System, Additive Manufacturing,
Analytics & Big Data) still carry the original credibility risk, synthesized text
presented as Jim's real history, and should get the reconciliation pass in roughly this
order: **Developer Experience first** (real outcome arc already, headings in decent
shape, the closest to done, was the earlier pick for "next" before the featured 3 jumped
ahead of the whole batch), then the other 4, which each have a bigger gap to close:
Machine Learning for Operators and Mobile Emergency System have no stated outcome
anywhere in the source, Analytics & Big Data has an unresolved shipped-vs-concept
ambiguity, Additive Manufacturing needs more structural consolidation.

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

   **Mechanism (2026-09-12):** a numeric `maxWidth` field on an image block (or the
   `hero` object) caps its display width, e.g. `"maxWidth": 480` — not a boolean, so any
   value works, not just one fixed narrow tier. Applied via inline `style`
   (`mediaMaxWidth()` in `CaseStudyPage.jsx`), as `min(Npx, 100%)` so it still shrinks
   responsively on narrow viewports. A capped image's caption automatically gets the same
   `maxWidth` and centers under it, no extra work needed per image. Every image without
   `maxWidth` set keeps the page's existing default (760px below 1024px, 920px at
   desktop's bleed width).

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

---

## Featured

The punch lists below are text-only (they predate the pilot's image work). Check each
page's images against principles 7 and 10 too: any baked-in banners move to captions, any
image worth re-exporting follows the same WebP/opaque/bordered pattern as Operational
Insights, per the "Case study image assets" backlog item. Not yet known whether any of
the 3 have baked-in banners, that's part of the source review before drafting.

### Agentic AI Chat

Structure: 6 sections, the tightest of the three; order is off.

- **Lead:** replace "Leveraging AI experiences to create valuable outcomes for
  customers." with the outcome (an agent 10,000+ engineers use to triage incidents
  faster).
- **Move "User Needs" up.** It is section 4, after AI in Context / UI Principles /
  Elements and Interactions. The SRE persona and the mid-incident context should frame
  the work, not arrive two-thirds through.
- **Metric inconsistency:** body says "10,000 employees," blurb says "10,000+ LinkedIn
  engineers." Pick one. State the time-savings as a number if there is one ("a major
  decrease in the time it takes developers to find root causes" is vague).
- **"UI Principles" and "Elements and Interactions" read as process reports** ("I
  conducted an audit," "I spec'd critical elements"). Reframe around the decisions: why
  a side panel over a modal or a full takeover; why plugins + contextual input + inline
  artifacts were the three primitives, and what was deliberately left out.
- **"Branding" is the strongest section already** (custom icon reinforces trust;
  telescope + sparkle). Keep the shape, tighten.
- **Add a reflection:** what did not work, what you would revisit about the panel model
  or the component set.
- **Schema:** this page still uses the legacy `body`/`image` shape; the other two use
  `blocks`. Normalize while editing.

### Genomic Data Platform

Structure: 9 sections, ~6 of them a methods tour (Personas, Card Sorting, User
Interviews, Storyboards, Prototypes, then Enhancing the Experience / User-Centered
Design / Cross-Product Design).

- **Lead:** "Tools for scientists to analyze genomic data..." is a topic. The blurb has
  the story (evidence-based personas + card sorting + field feedback turned into shipped
  visualization features; one cohesive multiomic platform). Compress that.
- **Collapse the methods tour.** Personas / Card Sorting / User Interviews / Storyboards
  / Prototypes is five sections for "I did discovery." Merge into one or two that lead
  with what the research changed: which mental model won, which terminology was adopted,
  which early concept was killed.
- **Cut the generic openers.** "The discovery phase is one of my favorite parts of the
  design process." "Storyboards help communicate to product stakeholders..."
  "Prototypes are invaluable UX tools for communicating..." Textbook definitions, not
  the work. Open each section on a decision or a stake.
- **Weak contribution:** "I created personas based on interviews," "I collaborated with
  UX researchers and conducted," "I conducted several user interviews." The Storyboards
  and Prototypes sections have no "I" at all.
- **The two best sections are buried at the end.** "Enhancing the Experience" (customer
  feedback into a gene-discovery heat map) and "User-Centered Design" (user testing into
  radar charts for variant types) are real "feedback became a shipped feature" stories.
  Pull them forward; name the feature and the result.
- **No metrics anywhere.** "Accelerate biomarker and drug discovery" is the mission, not
  a result. What shipped, adoption, anything measurable?
- **"Cross-Product Design"** (applying the system across proteomics + spatial apps) is a
  genuine principal-scope point, underplayed as a one-liner. Expand: what made the
  shared system hold across three very different data types.
- **Add a reflection.**

### AI Recommendations

Structure: 11 sections, too many; several are one sentence or image-only.

- **Lead:** replace "Using machine learning to create valuable outcomes for customers."
  with the blurb's story (an inline recommendation model that suggests the next
  transforms without breaking the developer's flow; a precision-tracking method Jim got
  cross-functional teams to ship).
- **Cut or merge the thin sections:** "Storyboards" (one sentence), "Branded
  Explorations" (image only), "Animated Behaviors" (one sentence), "Sketches and
  Renderings" (one sentence + two images). Fold the useful pieces into a single "how the
  concept evolved" beat; drop the rest.
- **"Customer Delight" is fluff** for a principal portfolio ("Users think the end
  results are pretty cool" + a casual quote). Cut it, or turn it into a real outcome
  statement.
- **"Inline Recommendations" and "Precision Model" are the whole case study.** Inline
  Recommendations is a real design bet (predictive-text analogy; seamless, not jarring).
  Precision Model is the standout: Jim designed a measurement method and convinced
  cross-functional teams to build it so the model retrains on real choices. Give both
  more room; consider building the page around them.
- **Best contribution language of the three** lives here ("I advocated," "I convinced
  cross-functional teams," "convinced executive leadership..."). Keep that register;
  raise the weaker sections to it.
- **No metrics.** Model precision/accuracy, adoption of the recommendations, anything.
- **"Visual Redesign"** (convinced execs to modernize the UI) is a strong influence
  story stranded at the end as a one-liner. Expand or move.
- **Add a reflection.** The false-positive handling and the retrain loop are natural
  material.

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

### Developer Experience

Good outcome arc already (MVP catalog to Gartner demo to launch to Jim moving into the
PM seat). Headings are in decent shape.
- "A Persona to Design Around" and "Lo-Fi Wireframes and Motion Prototypes" still lean
  process; reframe around a decision (why storyboard around one architect persona; what
  the motion prototypes settled).
- "Driving Developer Adoption" (Jim convinced marketing to fund the video series) is a
  real influence story; give it more weight.
- Numbers: catalog size, adoption, video views if any.
- Add a reflection.

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

